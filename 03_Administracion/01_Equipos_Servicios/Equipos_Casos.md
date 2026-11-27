---
title: "Equipos y servicios de red · Casos prácticos resueltos"
description: "Casos prácticos resueltos de la unidad Equipos y servicios de red."
section: administracion
unit: equipos
kind: casos
order: 63
tags:
  - redes
  - equipos
  - casos
  - dns
  - dhcp
  - vlan
---

# Equipos y servicios de red · Casos prácticos resueltos

> **Cómo usar esto.** Cada caso trae enunciado, solución y una rúbrica de diez puntos para autoevaluarte.
> Resuélvelo primero sin mirar la solución y puntúate. Lo que más enseña es **justificar** cada decisión:
> una respuesta correcta sin razón sirve de poco en un trabajo real.

Los seis casos recorren los temas de la unidad: direccionamiento y VLSM
(contenido 1), DHCP, DNS, NAT y proxy, VLAN en uno y dos conmutadores y
tablas de rutas y ACL.

## Caso 1. Plan de direccionamiento con VLSM

**Enunciado.** Se dispone del bloque 172.16.8.0/22. Hay que dar servicio a cuatro redes de 500, 200,
60 y 20 equipos y a dos enlaces punto a punto entre routers.

**Se pide.** Asignar el prefijo mínimo a cada red, con dirección de red, rango útil, broadcast y el
espacio libre que queda.

**Solución.** Se ordena de mayor a menor y cada bloque empieza en un múltiplo de su tamaño.

| Red | Hosts | Con red y broadcast | Bloque | Prefijo | Dirección de red | Rango útil | Broadcast |
| --- | --- | --- | --- | --- | --- | --- | --- |
| A | 500 | 502 | 512 | /23 | 172.16.8.0 | 8.1 a 9.254 | 172.16.9.255 |
| B | 200 | 202 | 256 | /24 | 172.16.10.0 | 10.1 a 10.254 | 172.16.10.255 |
| C | 60 | 62 | 64 | /26 | 172.16.11.0 | 11.1 a 11.62 | 172.16.11.63 |
| D | 20 | 22 | 32 | /27 | 172.16.11.64 | 11.65 a 11.94 | 172.16.11.95 |
| Enlace 1 | 2 | 4 | 4 | /30 | 172.16.11.96 | 11.97 y 11.98 | 172.16.11.99 |
| Enlace 2 | 2 | 4 | 4 | /30 | 172.16.11.100 | 11.101 y 11.102 | 172.16.11.103 |

Usado: 512 + 256 + 64 + 32 + 4 + 4 = 872 direcciones de las 1 024 del /22. **Libres: 152**, de
172.16.11.104 a 172.16.11.255.

**Rúbrica (10 puntos).** Orden y método: 2 puntos. Seis prefijos: 3. Seis direcciones de red y
broadcast: 3. Espacio libre: 1. Alineación de los bloques: 1.

**Errores típicos.** Dar un /24 a la red de 500 (solo caben 254); empezar el bloque de 64 en una
dirección que no es múltiplo de 64; contar los hosts sin sumar la dirección de red y el broadcast.

## Caso 2. Servidor DHCP con ámbitos, reservas y relay

**Enunciado.** Dos redes. La A (192.168.10.0/24) tiene la puerta en .1, direcciones fijas de .1 a .99
para servidores y se reparte de .100 a .199. La B (192.168.20.0/24) tiene la puerta en .1 y se
reparte de .50 a .200. Concesión de 8 horas, DNS en 192.168.10.10, dominio empresa.local. El servidor
DHCP está en la red A. La impresora de la red A (MAC 00:1b:44:11:3a:b7) debe tener siempre la
192.168.10.50.

**Se pide.** Escribir la configuración de ISC DHCP, indicar cómo llega el DHCP a la red B y cómo se
verifica.

**Solución.**

```text
# /etc/dhcp/dhcpd.conf
option domain-name "empresa.local";
option domain-name-servers 192.168.10.10;
default-lease-time 28800;      # 8 horas
max-lease-time 28800;
authoritative;

subnet 192.168.10.0 netmask 255.255.255.0 {
    range 192.168.10.100 192.168.10.199;
    option routers 192.168.10.1;
}

subnet 192.168.20.0 netmask 255.255.255.0 {
    range 192.168.20.50 192.168.20.200;
    option routers 192.168.20.1;
}

host impresora {
    hardware ethernet 00:1b:44:11:3a:b7;
    fixed-address 192.168.10.50;
}
```

- **Exclusión:** la red A deja libres de .1 a .99 simplemente no incluyéndolas en el `range`; la
  impresora se reserva con `host` y una dirección fuera del rango.
- **Relay:** el Discover es de difusión y no cruza el router. En el router de la red B se configura
  `ip helper-address 192.168.10.10` (o `dhcrelay` en Linux) y el servidor responde por la puerta de
  esa red.
- **Verificación:**

```bash
dhcpd -t -cf /etc/dhcp/dhcpd.conf        # sintaxis
systemctl restart isc-dhcp-server
journalctl -u isc-dhcp-server -n 30       # DISCOVER, OFFER, REQUEST, ACK
cat /var/lib/dhcp/dhcpd.leases            # concesiones vivas
ipconfig /all   (en el cliente Windows)   # dirección, puerta, DNS, concesión
```

**Rúbrica (10 puntos).** Ámbito A: 2 puntos. Ámbito B: 2. Reserva: 2. Relay: 2. Verificación: 2.

**Error típico.** Poner la reserva dentro del rango (conflicto) o olvidar el relay en la red B y
creer que el servidor falla.

## Caso 3. Zona DNS directa e inversa con BIND

**Enunciado.** Crea la zona `empresa.local` para la red 192.168.10.0/24. Servidores de nombres:
ns1 (192.168.10.10) y ns2 (192.168.10.11). Correo: mail (192.168.10.20). Web: www (192.168.10.30) y
un alias `intranet` hacia www. Hay que poder resolver también de dirección a nombre.

**Se pide.** Escribir las dos zonas, el comando para comprobarlas y las consultas de verificación.
Explicar por qué hay que subir el número de serie.

**Solución.**

```text
; /etc/bind/db.empresa.local
$TTL 86400
@   IN SOA ns1.empresa.local. admin.empresa.local. (
        2027030101   ; serie: AAAAMMDDNN
        3600         ; refresco
        900          ; reintento
        604800       ; caducidad
        86400 )      ; TTL negativo
@        IN NS   ns1.empresa.local.
@        IN NS   ns2.empresa.local.
@        IN MX 10 mail.empresa.local.
ns1      IN A    192.168.10.10
ns2      IN A    192.168.10.11
mail     IN A    192.168.10.20
www      IN A    192.168.10.30
intranet IN CNAME www
```

```text
; /etc/bind/db.192.168.10   (zona 10.168.192.in-addr.arpa)
$TTL 86400
@   IN SOA ns1.empresa.local. admin.empresa.local. ( 2027030101 3600 900 604800 86400 )
@   IN NS  ns1.empresa.local.
@   IN NS  ns2.empresa.local.
10  IN PTR ns1.empresa.local.
11  IN PTR ns2.empresa.local.
20  IN PTR mail.empresa.local.
30  IN PTR www.empresa.local.
```

```bash
named-checkzone empresa.local /etc/bind/db.empresa.local
named-checkzone 10.168.192.in-addr.arpa /etc/bind/db.192.168.10
named-checkconf
systemctl reload bind9
dig www.empresa.local @192.168.10.10          # registro A
dig intranet.empresa.local @192.168.10.10     # CNAME y luego A
dig MX empresa.local @192.168.10.10
dig -x 192.168.10.30 @192.168.10.10           # PTR: www.empresa.local
```

**El número de serie.** El servidor secundario copia la zona (transferencia) solo si el número de
serie del primario es **mayor** que el que tiene. Si cambias un registro y no subes la serie, el
secundario sigue sirviendo la versión vieja y las respuestas serán distintas según a quién se
pregunte. La convención AAAAMMDDNN permite hasta 99 cambios al día.

**Rúbrica (10 puntos).** Zona directa con SOA, NS, MX, A y CNAME: 4 puntos. Zona inversa: 2.
Comprobación: 2. Serie explicada: 2.

**Errores típicos.** Olvidar el punto final de los nombres completos (`ns1.empresa.local.`); poner el
CNAME apuntando a una dirección y no a un nombre; apuntar un MX a un CNAME.

## Caso 4. NAT, publicación de un servicio y proxy transparente

**Enunciado.** Un servidor Linux hace de puerta de enlace: `eth0` pública (203.0.113.10) y `eth1`
hacia la red 192.168.10.0/24. Hay que: dar salida a Internet a la LAN con PAT, publicar el servidor web
192.168.10.30 (puerto 80) en el puerto 8080 de la pública, y filtrar la navegación con un proxy
transparente de Squid en el puerto 3129.

**Se pide.** Escribir las órdenes, decir en qué tabla y cadena va cada una y cómo se verifica.

**Solución.**

```bash
# Sin reenvio no hay router ni NAT
sysctl -w net.ipv4.ip_forward=1
echo "net.ipv4.ip_forward=1" > /etc/sysctl.d/99-forward.conf

# 1. PAT: salida de la LAN con la IP de eth0     (tabla nat, cadena POSTROUTING)
iptables -t nat -A POSTROUTING -s 192.168.10.0/24 -o eth0 -j MASQUERADE

# 2. Publicar el servidor web                     (tabla nat, cadena PREROUTING)
iptables -t nat -A PREROUTING -i eth0 -p tcp --dport 8080 -j DNAT --to-destination 192.168.10.30:80
iptables -A FORWARD -p tcp -d 192.168.10.30 --dport 80 -j ACCEPT

# 3. Proxy transparente: desviar el puerto 80 de la LAN a Squid
iptables -t nat -A PREROUTING -i eth1 -p tcp --dport 80 -j REDIRECT --to-port 3129
```

```bash
iptables -t nat -L -n -v          # reglas y contadores
conntrack -L | head               # traducciones activas
curl -I http://203.0.113.10:8080  # desde fuera, llega al servidor web
tail -f /var/log/squid/access.log # el proxy ve la navegacion
```

**Por qué esas cadenas.** El DNAT cambia el **destino** y debe hacerse antes de decidir la ruta:
PREROUTING. El SNAT o MASQUERADE cambia el **origen** y se hace al salir: POSTROUTING. El
REDIRECT desvía el puerto de destino a una máquina local y también va en PREROUTING.

**Rúbrica (10 puntos).** Reenvío activado: 1 punto. PAT correcto: 3. DNAT con FORWARD: 3. REDIRECT
para el proxy: 2. Verificación: 1.

**Error típico.** Aplicar la regla de publicación en POSTROUTING, o dejar `ip_forward` desactivado:
las reglas se cumplen y el paquete muere igual.

## Caso 5. VLAN en dos conmutadores, troncal y árbol de expansión

**Enunciado.** Dos conmutadores, SW1 y SW2, unidos por un troncal en el puerto 24 de cada uno. Hay
tres VLAN: 10 ADMIN, 20 VOZ y 30 INVITADOS. En SW1, los puertos 1 a 8 son de la VLAN 10 y 9 a 12 de la
VLAN 20; en SW2, los 1 a 6 de la VLAN 10 y 7 a 10 de la 30. Hay 10 equipos conectados en SW1 y 12 en
SW2. SW1 debe ser la raíz del árbol de expansión. La VLAN nativa será la 99.

**Se pide.**

1. Escribir la configuración de SW1 y la del troncal de SW2.
2. Contar dominios de colisión y de difusión.
3. Indicar qué pasa si la VLAN nativa no coincide en los dos extremos y cómo verificarlo.

**Solución.**

```text
! SW1
vlan 10
 name ADMIN
vlan 20
 name VOZ
vlan 30
 name INVITADOS
interface range gigabitEthernet0/1-8
 switchport mode access
 switchport access vlan 10
interface range gigabitEthernet0/9-12
 switchport mode access
 switchport access vlan 20
interface gigabitEthernet0/24
 switchport mode trunk
 switchport trunk allowed vlan 10,20,30
 switchport trunk native vlan 99
spanning-tree mode rapid-pvst
spanning-tree vlan 10,20,30 root primary
```

```text
! SW2 (troncal; el resto de puertos analogo a SW1 con sus VLAN)
interface gigabitEthernet0/24
 switchport mode trunk
 switchport trunk allowed vlan 10,20,30
 switchport trunk native vlan 99
```

```text
Dominios de colision: uno por equipo y uno por el troncal: 10 + 12 + 1 = 23
Dominios de difusion: uno por VLAN: 3 (10, 20 y 30)
```

**VLAN nativa distinta.** El troncal envía sin etiqueta el tráfico de la nativa; si un extremo la
tiene en 99 y el otro en 1, ese tráfico acaba en una VLAN equivocada: fugas entre VLAN y avisos de
desajuste del protocolo de descubrimiento. Se verifica con `show interfaces trunk` y
`show interfaces gigabitEthernet0/24 switchport` en los dos conmutadores, y con `show vlan brief`
para ver los puertos de cada VLAN.

**Rúbrica (10 puntos).** Configuración de SW1: 4 puntos. Troncal de SW2: 2. Conteo: 2. Nativa y
verificación: 2.

**Errores típicos.** Olvidar `allowed vlan` en el troncal; contar un dominio de difusión por
conmutador en vez de por VLAN; no marcar la raíz.

## Caso 6. Tablas de rutas, resumen CIDR y ACL

**Enunciado.** R1 tiene la LAN 192.168.1.0/24 y un enlace 10.0.0.0/30 con R2; R2 tiene la LAN
192.168.2.0/24. Una tabla de rutas contiene: `0.0.0.0/0 via 10.0.0.1`, `192.168.0.0/16 via 10.0.0.2` y
`192.168.2.0/24 via 10.0.0.6`. Hay un servidor 192.168.1.5 al que la LAN 2 no debe acceder por
Telnet (puerto 23).

**Se pide.**

1. Escribir las rutas estáticas de R1 hacia la LAN 2 y de R2 hacia la LAN 1, con ruta por defecto.
2. Decir por dónde sale cada destino de la tabla: 192.168.2.55, 192.168.9.1 y 8.8.8.8.
3. Resumir en un solo prefijo las redes 192.168.0.0/24 a 192.168.3.0/24.
4. Escribir la ACL del servidor.

**Solución.**

```text
1. R1: ip route 192.168.2.0 255.255.255.0 10.0.0.2
   R2: ip route 192.168.1.0 255.255.255.0 10.0.0.1
       ip route 0.0.0.0 0.0.0.0 10.0.0.1        ! ruta por defecto hacia R1 y de ahi a Internet

2. Coincidencia mas larga:
   192.168.2.55 -> 192.168.2.0/24 (24 bits)   -> via 10.0.0.6
   192.168.9.1  -> 192.168.0.0/16 (16 bits)   -> via 10.0.0.2
   8.8.8.8      -> 0.0.0.0/0 (por defecto)    -> via 10.0.0.1

3. 192.168.0.0/24 a 192.168.3.0/24 comparten los 22 primeros bits -> 192.168.0.0/22

4. access-list 110 deny tcp 192.168.2.0 0.0.0.255 host 192.168.1.5 eq 23
   access-list 110 permit ip any any
   interface gigabitEthernet0/1       ! hacia la LAN 1
    ip access-group 110 out
```

**Verificación:** `show ip route`, `ping` y `traceroute` entre las dos LAN, `show access-lists` para
ver contadores de la regla y un `telnet 192.168.1.5` desde la LAN 2 que debe fallar.

**Rúbrica (10 puntos).** Rutas: 3 puntos. Coincidencia más larga: 3. Resumen: 2. ACL: 2.

**Errores típicos.** Olvidar el `permit ip any any` (el denegar implícito bloquea todo); poner la ACL
en el sentido o en la interfaz equivocados; confundir máscara y máscara invertida (wildcard).

## Autocorrección

| Caso | Tu nota | Qué repasar si fallas |
| --- | --- | --- |
| 1. VLSM | | Apartado 2 |
| 2. DHCP | | Apartado 7 |
| 3. DNS | | Apartado 6 |
| 4. NAT y proxy | | Apartados 4 y 8 |
| 5. VLAN | | Apartados 9 y 10 |
| 6. Rutas y ACL | | Apartado 12 |
