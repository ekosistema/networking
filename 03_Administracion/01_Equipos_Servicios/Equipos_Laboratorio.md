---
title: "Equipos y servicios de red · Guía de laboratorio"
description: "Guía de laboratorio de la unidad Equipos y servicios de red."
section: administracion
unit: equipos
kind: laboratorio
order: 66
tags:
  - redes
  - equipos
  - laboratorio
  - dns
  - vlan
  - nat
---

# Equipos y servicios de red · Guía de laboratorio

> **Para qué sirve.** Esta unidad se aprueba configurando y verificando. Cinco prácticas que montan
> los servicios y los equipos de los [casos](Equipos_Casos.md) en un entorno donde puedes
> equivocarte sin consecuencias.

| Práctica | Entorno | Qué demuestras | Tiempo |
| --- | --- | --- | --- |
| 1. Cabeceras y VLSM | Python | Que lees un datagrama y calculas subredes | 45 min |
| 2. DNS y DHCP | Máquina virtual Linux | Que los servicios funcionan y se verifican | 120 min |
| 3. NAT, publicación y proxy | Espacios de nombres de red en Linux | Que sabes dónde va cada regla | 90 min |
| 4. VLAN, troncales y rutas | Packet Tracer o GNS3 | Los casos 5 y 6 | 120 min |
| 5. El saludo en el cable | Wireshark | DHCP, ARP, DNS, TCP y TTL | 60 min |

**Aviso.** Los comandos de las prácticas 2, 3 y 4 están escritos de memoria y no se han ejecutado
en el entorno de esta guía; la práctica 1 sí se ha ejecutado. Úsalos en máquinas de laboratorio,
nunca en la red de producción.

## Práctica 1. Cabeceras y VLSM en Python

**Objetivo.** Descifrar una cabecera IPv4, comprobar su suma de verificación y repartir el bloque
del [caso 1](Equipos_Casos.md).

```python
import ipaddress, math

# 1. Leer una cabecera IPv4 de 20 bytes
hex_ = "4500003c1c4640004006" + "9cbc" + "c0a80068c0a80001"
b = bytes.fromhex(hex_)
ihl = (b[0] & 0x0F) * 4
print("Version", b[0] >> 4, "| IHL", ihl, "| longitud total", int.from_bytes(b[2:4], "big"))
print("DF", bool(b[6] & 0x40), "| TTL", b[8], "| protocolo", b[9])
print("Origen", ipaddress.ip_address(b[12:16]), "| destino", ipaddress.ip_address(b[16:20]))

# 2. Comprobar la suma: todas las palabras de 16 bits con acarreo dan 0xffff
s = sum(int.from_bytes(b[i:i + 2], "big") for i in range(0, ihl, 2))
while s >> 16:
    s = (s & 0xFFFF) + (s >> 16)
print("Suma", hex(s), "-> correcta" if s == 0xFFFF else "-> ERROR")

# 3. Banderas de un segmento TCP (SYN-ACK)
campo = 0x5012
flags = campo & 0x01FF
print("Desplazamiento", (campo >> 12) * 4, "bytes | SYN", bool(flags & 0x02), "| ACK", bool(flags & 0x10))

# 4. VLSM: 500, 200, 60, 20 y dos enlaces /30 en 172.16.8.0/22
bloque = ipaddress.ip_network("172.16.8.0/22")
necesidades = [("A", 500), ("B", 200), ("C", 60), ("D", 20), ("Enlace 1", 2), ("Enlace 2", 2)]
siguiente = int(bloque.network_address)
for nombre, hosts in sorted(necesidades, key=lambda x: -x[1]):
    bits = math.ceil(math.log2(hosts + 2))
    red = ipaddress.ip_network((siguiente, 32 - bits))
    h = list(red.hosts())
    print(f"{nombre:9} {str(red):18} {h[0]} a {h[-1]}  broadcast {red.broadcast_address}")
    siguiente += red.num_addresses
print("Libres:", int(bloque.broadcast_address) - siguiente + 1)
```

**Qué debes observar.** Versión 4, IHL de 20, longitud 60, DF activo, TTL 64 y protocolo 6; origen
192.168.0.104 y destino 192.168.0.1; suma correcta; desplazamiento de 20 bytes con SYN y ACK; y el
reparto del caso 1 con 152 direcciones libres. Cambia un byte de la cabecera y comprueba que la
suma falla.

**Ampliación.** Escribe una función que dada una lista de redes devuelva el prefijo común más
largo (el resumen CIDR) y pruébala con 192.168.0.0/24 a 192.168.3.0/24.

## Práctica 2. DNS y DHCP en una máquina virtual Linux

**Objetivo.** Implantar el DHCP del [caso 2](Equipos_Casos.md) y la zona del
[caso 3](Equipos_Casos.md). Máquina virtual con Debian o Ubuntu, con una interfaz en una red
interna de laboratorio (nunca en tu red real, para no repartir direcciones a otros equipos).

**Pasos.**

1. Fija la IP del servidor, por ejemplo 192.168.10.10/24, en la interfaz de la red interna.
2. Instala y configura DHCP:

```text
sudo apt install isc-dhcp-server bind9 bind9-utils dnsutils
# Escribe /etc/dhcp/dhcpd.conf como en el caso 2
# En /etc/default/isc-dhcp-server: INTERFACESv4="enp0s8"   (la interfaz interna)
sudo dhcpd -t -cf /etc/dhcp/dhcpd.conf
sudo systemctl restart isc-dhcp-server
```

3. Escribe las dos zonas del caso 3 en `/etc/bind/`, decláralas en
   `/etc/bind/named.conf.local` y valida:

```text
zone "empresa.local" { type master; file "/etc/bind/db.empresa.local"; };
zone "10.168.192.in-addr.arpa" { type master; file "/etc/bind/db.192.168.10"; };
```

```text
sudo named-checkzone empresa.local /etc/bind/db.empresa.local
sudo named-checkconf
sudo systemctl restart bind9
```

4. Arranca una segunda máquina virtual en la misma red interna como cliente DHCP y comprueba:

| Prueba | Debe resultar |
| --- | --- |
| `dhclient -v` en el cliente | Recibe dirección del rango, puerta y DNS |
| `dig www.empresa.local @192.168.10.10` | Registro A 192.168.10.30 |
| `dig intranet.empresa.local @192.168.10.10` | CNAME a www y luego el A |
| `dig -x 192.168.10.30 @192.168.10.10` | `www.empresa.local.` |
| `cat /var/lib/dhcp/dhcpd.leases` | La concesión del cliente |

**Qué debes entender.** Que el DHCP entrega también el DNS y que ambos servicios se prueban con
las mismas herramientas con que se diagnostican: `dig` y los registros del servidor.

**Ampliación.** Cambia un registro sin subir la serie y observa (con un secundario) que no se
actualiza; sube la serie y vuelve a probar. Añade una reserva por MAC para el cliente.

## Práctica 3. NAT, publicación y proxy con espacios de nombres

**Objetivo.** Probar el [caso 4](Equipos_Casos.md) en una sola máquina Linux, sin máquinas
virtuales, con tres espacios de nombres de red: `lan`, `gw` (la pasarela) y `wan`. Necesitas permisos
de administrador; todo desaparece al limpiar.

```text
# Topologia: lan (192.168.10.2) -- gw (192.168.10.1 / 203.0.113.10) -- wan (203.0.113.1)
sudo ip netns add lan; sudo ip netns add gw; sudo ip netns add wan
sudo ip link add v-lan type veth peer name v-gw1
sudo ip link set v-lan netns lan; sudo ip link set v-gw1 netns gw
sudo ip link add v-gw2 type veth peer name v-wan
sudo ip link set v-gw2 netns gw; sudo ip link set v-wan netns wan

sudo ip -n lan addr add 192.168.10.2/24 dev v-lan
sudo ip -n gw  addr add 192.168.10.1/24 dev v-gw1
sudo ip -n gw  addr add 203.0.113.10/24 dev v-gw2
sudo ip -n wan addr add 203.0.113.1/24  dev v-wan
for ns in lan gw wan; do sudo ip -n $ns link set lo up; done
sudo ip -n lan link set v-lan up; sudo ip -n gw link set v-gw1 up
sudo ip -n gw link set v-gw2 up; sudo ip -n wan link set v-wan up
sudo ip -n lan route add default via 192.168.10.1

# La pasarela reenvia y hace PAT
sudo ip netns exec gw sysctl -w net.ipv4.ip_forward=1
sudo ip netns exec gw iptables -t nat -A POSTROUTING -s 192.168.10.0/24 -o v-gw2 -j MASQUERADE
```

**Pruebas.**

1. En un terminal aparte, abre en `wan` un servidor web **en primer plano** para ver su registro: `sudo ip netns exec wan python3 -m http.server 80 --bind 203.0.113.1`.
2. Desde `lan`: `sudo ip netns exec lan curl http://203.0.113.1/`. Responde: es la **salida con PAT**.
3. En el registro del servidor de `wan`, la petición llega con origen **203.0.113.10** (la IP de la
   pasarela), no 192.168.10.2: esa es la traducción.
4. **Publicación:** en otro terminal abre en `lan` `sudo ip netns exec lan python3 -m http.server 8000` y en la pasarela:
   `sudo ip netns exec gw iptables -t nat -A PREROUTING -i v-gw2 -p tcp --dport 8080 -j DNAT --to-destination 192.168.10.2:8000`.
   Desde `wan`: `sudo ip netns exec wan curl http://203.0.113.10:8080/`. Responde el servidor interno.
5. Comprueba las reglas y las traducciones: `sudo ip netns exec gw iptables -t nat -L -n -v` y
   `sudo ip netns exec gw conntrack -L`.
6. **Qué rompe.** Desactiva el reenvío (`sysctl -w net.ipv4.ip_forward=0` en `gw`) y repite: las reglas
   siguen ahí y no funciona nada.

**Limpieza:** `sudo ip netns del lan; sudo ip netns del gw; sudo ip netns del wan` y para los servidores
Python.

**Ampliación.** Instala Squid en `gw`, configura el puerto 3129 con `intercept` y añade la regla
`REDIRECT` del caso 4; verifica con el registro de acceso de Squid.

## Práctica 4. VLAN, troncales, STP y rutas en un simulador

**Objetivo.** Reproducir los casos 5 y 6 en Packet Tracer o GNS3.

1. **VLAN.** Dos conmutadores unidos por un troncal, tres VLAN y equipos, con la configuración del
   caso 5. Comprueba con `show vlan brief` y `show interfaces trunk`. Pruebas: dos equipos de la
   misma VLAN en conmutadores distintos se ven; de VLAN distinta no.
2. **Nativa.** Cambia la nativa de un extremo y observa el aviso y la fuga. Corrígelo.
3. **STP.** Une los conmutadores con un segundo cable (redundancia), mira con `show spanning-tree`
   cuál es raíz, qué puerto se bloquea y qué ocurre al desconectar el enlace activo (convergencia
   con `rapid-pvst`).
4. **Rutas y ACL.** Dos routers, dos LAN y un enlace, con las rutas y la ACL del caso 6. Verifica
   con `show ip route`, `ping`, `traceroute` y `show access-lists`: debe fallar solo el Telnet.
5. **DHCP con relay.** Pon el servidor DHCP en una LAN y el `ip helper-address` en el router de la
   otra; comprueba que los clientes reciben dirección.

**Qué debes observar.** Las tablas de rutas con su coincidencia más larga, el contador de la ACL
que sube con cada intento de Telnet y el cambio de puerto bloqueado del STP al cortar un cable.

## Práctica 5. El saludo en el cable con Wireshark

**Objetivo.** Ver en una captura lo que has configurado.

| Filtro | Qué observas |
| --- | --- |
| `bootp` (o `dhcp`) | Las cuatro tramas Discover, Offer, Request y Acknowledge, con el servidor en el 67 y el cliente en el 68 |
| `arp` | La petición de difusión y la respuesta unicast |
| `dns` | La consulta al puerto 53, el tipo de registro y la respuesta |
| `tcp.flags.syn==1` | El inicio de las conexiones, con SYN y SYN-ACK |
| `icmp.type==11` | Los avisos de tiempo excedido que genera `traceroute` |

**Pasos.** Captura mientras haces `dhclient`, `ping`, `dig` y `traceroute`. Para cada una, localiza el
paquete y completa: capas, direcciones de cada capa y campos de interés (TTL, protocolo, banderas).

**Preguntas de cierre.** ¿Por qué el Discover va a la dirección 255.255.255.255? ¿Qué dirección
física tiene la respuesta ARP al salir de la red? ¿Qué número de secuencia lleva el SYN-ACK y qué
acuse? Responde con el campo de la captura.
