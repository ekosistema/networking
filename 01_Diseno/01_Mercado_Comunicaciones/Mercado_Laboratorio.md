---
title: "Mercado de comunicaciones · Guía de laboratorio"
description: "Guía de laboratorio de la unidad Mercado de comunicaciones."
section: diseno
unit: mercado
kind: laboratorio
order: 16
tags:
  - redes
  - mercado
  - laboratorio
  - packet-tracer
  - wireshark
---

# Mercado de comunicaciones · Guía de laboratorio

> **Para qué sirve.** El caso práctico se aprueba con las manos. Estas cinco prácticas
> convierten los cálculos del [resumen técnico](Mercado_Tecnico.md) en algo que ves funcionar.
> Todas usan herramientas gratuitas y caben en una tarde cada una.

| Práctica | Herramienta | Qué aprendes | Tiempo |
| --- | --- | --- | --- |
| 1. Direccionamiento VLSM y enrutamiento | Cisco Packet Tracer o GNS3 | Aplicar el caso 2 y ver OSPF | 90 min |
| 2. Capas y protocolos en un cable | Wireshark | Ver la encapsulación y el saludo de TCP | 60 min |
| 3. Calculadora de red | Python | Comprobar subredes y decibelios | 30 min |
| 4. Claves, certificados y SSH | OpenSSL y OpenSSH | Firmar, verificar y autenticar | 60 min |
| 5. Cortafuegos con DMZ | Linux con nftables, en máquina virtual | Implantar el caso 5 | 90 min |

Cisco Packet Tracer se obtiene gratis con una cuenta de Cisco Networking Academy. Si no la tienes,
GNS3 o una máquina virtual con FRRouting dan el mismo resultado en las prácticas 1 y 5. Si una
versión concreta cambia los nombres de los interfaces, adapta los comandos con `show ip interface brief`.

## Práctica 1. VLSM y OSPF

**Objetivo.** Montar la red del caso 2 con dos routers y comprobar que todo se ve.

**Topología.**

```text
  PC-Admin ---[Gi0/0] R1 [Gi0/2]--- enlace /30 ---[Gi0/2] R2 [Gi0/0]--- PC-Almacen
  PC-Ventas --[Gi0/1] R1                                  R2 [Gi0/1]--- Servidor
```

**Plan de direccionamiento (el del caso 2).**

| Red | Prefijo | Puerta de enlace | Equipo de prueba |
| --- | --- | --- | --- |
| Administración | 192.168.40.0/26 | 192.168.40.1 en R1 Gi0/0 | PC-Admin 192.168.40.10 |
| Ventas | 192.168.40.64/27 | 192.168.40.65 en R1 Gi0/1 | PC-Ventas 192.168.40.70 |
| Enlace | 192.168.40.120/30 | .121 en R1 Gi0/2 y .122 en R2 Gi0/2 | Entre routers |
| Almacén | 192.168.40.96/28 | 192.168.40.97 en R2 Gi0/0 | PC-Almacen 192.168.40.100 |
| Servidores | 192.168.40.112/29 | 192.168.40.113 en R2 Gi0/1 | Servidor 192.168.40.114 |

**Pasos.**

1. Coloca dos routers (por ejemplo, 2911), tres PC, un servidor y cables directos o cruzados donde
   corresponda. Con interfaces GigabitEthernet, Packet Tracer admite cualquiera de los dos.
2. Configura R1 (en R2, el mismo esquema con sus direcciones):

```text
enable
configure terminal
hostname R1
interface GigabitEthernet0/0
 ip address 192.168.40.1 255.255.255.192
 no shutdown
interface GigabitEthernet0/1
 ip address 192.168.40.65 255.255.255.224
 no shutdown
interface GigabitEthernet0/2
 ip address 192.168.40.121 255.255.255.252
 no shutdown
end
```

3. Configura los PC con IP fija, máscara correcta y puerta de enlace la de su router. **Sin
   enrutamiento**, haz ping entre PC de la misma red (funciona) y entre redes de routers distintos
   (falla): es la prueba de que un router solo conoce sus redes conectadas.
4. Activa OSPF en R1 (en R2, sus redes; el área es la 0):

```text
router ospf 1
 network 192.168.40.0 0.0.0.63 area 0
 network 192.168.40.64 0.0.0.31 area 0
 network 192.168.40.120 0.0.0.3 area 0
 passive-interface GigabitEthernet0/0
 passive-interface GigabitEthernet0/1
 auto-cost reference-bandwidth 1000
```

   Los comodines (wildcard) son la máscara invertida: /26 es 0.0.0.63, /27 es 0.0.0.31 y /30 es
   0.0.0.3. Para R2: 192.168.40.96 con 0.0.0.15, 192.168.40.112 con 0.0.0.7 y el /30.

5. Verifica:

```text
show ip route
show ip ospf neighbor
show ip interface brief
traceroute 192.168.40.100
```

**Qué debes observar.**

- En `show ip route`, las rutas conectadas con C, las aprendidas por OSPF con O, y el siguiente salto
  192.168.40.122 para llegar al Almacén.
- En `show ip ospf neighbor`, el estado FULL entre R1 y R2.
- Con `auto-cost reference-bandwidth 1000` en ambos routers, el coste de Gigabit es 1 y el de Fast
  Ethernet es 10. Cámbialo solo en uno de los dos y observa qué ocurre con los costes: los dos
  routers deben usar la misma referencia.

**Preguntas de cierre.** ¿Por qué el enlace entre routers es un /30? ¿Qué ocurre si pones la
máscara /27 en la puerta de enlace de Administración? ¿Qué haría falta para que el Servidor se vea
desde Internet?

## Práctica 2. Wireshark: el cable por dentro

**Objetivo.** Ver con tus ojos las capas del modelo y el saludo de TCP.

**Pasos.**

1. Abre Wireshark y elige tu interfaz activa. Pulsa el icono de captura.
2. En un terminal, ejecuta `ping 8.8.8.8` y `nslookup ejemplo.org`, y abre una página web.
3. Detén la captura y aplica filtros, uno a uno:

| Filtro | Qué enseña |
| --- | --- |
| `arp` | Quién tiene la IP: MAC de destino de difusión ff:ff:ff:ff:ff:ff |
| `icmp` | Petición y respuesta de eco, con el TTL |
| `dns` | Consulta al puerto 53, la respuesta y su caché |
| `tcp.flags.syn==1 && tcp.flags.ack==0` | Los SYN iniciales de conexiones |
| `tls.handshake` | El saludo de TLS: versión, cifrados y certificado |

4. Haz clic en un paquete ICMP y despliega las capas de abajo arriba: Frame, Ethernet II (MAC),
   Internet Protocol (IP), ICMP. Apunta qué direcciones aparecen en cada capa.
5. Sigue una conexión web completa con `Seguir flujo TCP` (clic derecho) y localiza SYN, SYN-ACK y
   ACK.

**Qué debes observar.**

- La MAC de destino de un paquete hacia Internet es la de tu router, no la del servidor lejano: la
  dirección de enlace cambia en cada salto y la IP no.
- El TTL baja en cada router; es lo que usa `traceroute`.
- La cabecera Ethernet pesa 14 bytes sin el FCS, la IPv4 al menos 20 y la TCP al menos 20: suma las
  tres y compara con la columna de longitud.

**Pregunta de cierre.** Si capturas todo el tráfico de HTTPS, ¿qué ves del contenido y qué no?
(Respuesta: ves IP, puertos, tamaño y el nombre del servidor en el saludo; el contenido va cifrado.)

## Práctica 3. Calculadora de red con Python

**Objetivo.** Comprobar a máquina lo que haces a mano. Python 3 trae el módulo `ipaddress`.

```python
import ipaddress, math

# Subredes: red, rango, broadcast, hosts
for p in ["192.168.40.0/26", "192.168.40.64/27", "192.168.40.96/28",
          "192.168.40.112/29", "192.168.40.120/30"]:
    r = ipaddress.ip_network(p)
    hosts = list(r.hosts())
    print(p, hosts[0], hosts[-1], r.broadcast_address, len(hosts))

# Dividir un /24 en subredes /26
print(list(ipaddress.ip_network("172.16.32.0/24").subnets(new_prefix=26)))

# Decibelios
def dbm(mw): return 10 * math.log10(mw)
def mw(dbm_): return 10 ** (dbm_ / 10)
print(dbm(10), mw(-3))

# Shannon
def shannon(b_hz, snr_db): return b_hz * math.log2(1 + 10 ** (snr_db / 10))
print(shannon(20e6, 36) / 1e6)

# Presupuesto optico
def margen(salida, sens, km, db_km, conectores, empalmes, reserva=3):
    perdidas = km * db_km + conectores * 0.3 + empalmes * 0.1
    return salida - perdidas - sens - reserva
print(margen(-3, -26, 12, 0.35, 4, 5))
```

**Qué debes observar.** Los resultados coinciden con los de los casos 1, 2 y 4: 14,1 dB de
margen con reserva, las direcciones de la tabla del caso 2 y unos 239 Mb/s. Si no coinciden,
el error está en tu cálculo a mano o en un dato mal copiado: es la mejor forma de aprender.

**Ampliación.** Escribe una función que dado un número de hosts devuelva el prefijo mínimo y
compárala con tu método de potencias de dos.

## Práctica 4. Claves, certificados y SSH

**Objetivo.** Hacer una firma, verificarla y montar una pequeña infraestructura de claves. Necesitas
OpenSSL (incluido en Git para Windows) y OpenSSH (incluido en Windows 10 y 11).

**Parte A. Una firma digital.**

```text
openssl genpkey -algorithm RSA -pkeyopt rsa_keygen_bits:2048 -out privada.pem
openssl pkey -in privada.pem -pubout -out publica.pem
echo "orden de compra 1234" > mensaje.txt
openssl dgst -sha256 -sign privada.pem -out firma.bin mensaje.txt
openssl dgst -sha256 -verify publica.pem -signature firma.bin mensaje.txt
```

En Git Bash en Windows, añade `MSYS_NO_PATHCONV=1` delante de los comandos con `-subj "/CN=..."`, o la ruta se interpreta mal.

La verificación debe responder `Verified OK`. Cambia una letra de `mensaje.txt` y repite el último
comando: ahora falla. Es la integridad en acción.

**Parte B. Una autoridad y un certificado.**

```text
openssl req -x509 -newkey rsa:2048 -nodes -keyout ca.key -out ca.crt -days 365 -subj "/CN=CA de laboratorio"
openssl req -newkey rsa:2048 -nodes -keyout web.key -out web.csr -subj "/CN=web.lab"
openssl x509 -req -in web.csr -CA ca.crt -CAkey ca.key -CAcreateserial -out web.crt -days 90
openssl verify -CAfile ca.crt web.crt
openssl x509 -in web.crt -noout -subject -issuer -dates
```

Observa quién es `subject` y quién es `issuer`, y las fechas de vigencia. Comprueba que el
certificado de la web **no** valida contra otra CA distinta.

**Parte C. SSH con clave.**

```text
ssh-keygen -t ed25519 -f clave_lab
ssh-keygen -lf clave_lab.pub
```

Instala la clave pública en un servidor de pruebas (una máquina virtual con SSH) y conéctate sin
contraseña. Anota la huella que SSH pide aceptar la primera vez: es la defensa frente a un servidor
suplantado.

**Qué debes entender.** Quién guarda cada clave, por qué la privada no sale nunca del equipo y qué
pasa cuando caduca un certificado.

## Práctica 5. Cortafuegos con DMZ en Linux

**Objetivo.** Implantar las reglas del caso 5 en una máquina virtual con tres interfaces:
`eth0` externa, `eth1` DMZ y `eth2` interna. Se usa nftables.

**Preparación.** Una máquina virtual Linux con tres tarjetas de red en redes internas distintas, y
otras dos máquinas pequeñas: una en la DMZ (servidor web) y una en la interna (cliente).

```text
sudo sysctl -w net.ipv4.ip_forward=1
sudo nft add table inet filtro
sudo nft add chain inet filtro forward '{ type filter hook forward priority 0 ; policy drop ; }'
sudo nft add rule inet filtro forward ct state established,related accept
sudo nft add rule inet filtro forward iifname "eth0" oifname "eth1" tcp dport 443 accept
sudo nft add rule inet filtro forward iifname "eth2" oifname "eth0" tcp dport '{ 80, 443 }' accept
sudo nft add rule inet filtro forward iifname "eth2" oifname "eth1" tcp dport 22 accept
sudo nft list ruleset
```

**Pruebas.**

| Prueba | Debe resultar |
| --- | --- |
| Desde fuera, `curl -k https://IP-del-servidor` | Responde |
| Desde la red interna, SSH al servidor de la DMZ | Conecta |
| Desde el servidor de la DMZ, SSH o ping a la red interna | No conecta: lo bloquea la política por defecto |
| Desde fuera, SSH al servidor de la DMZ | No conecta |

**Qué debes observar.** La política por defecto `drop` hace el trabajo de las reglas de denegación.
Cada regla nueva abre exactamente un camino. Verifica con `sudo nft list ruleset` y con la captura
de Wireshark que el tráfico bloqueado no sale por la otra interfaz.

**Aviso.** Estas reglas no sobreviven a un reinicio hasta guardarlas en el fichero de configuración
de nftables de tu distribución. Prueba siempre desde otra máquina y con la consola de la máquina
virtual abierta: un cortafuegos mal puesto puede dejarte sin acceso.

## Entrega y reflexión

Al terminar, escribe en media página: qué te sorprendió, qué no funcionó a la primera y cuál fue la
causa. Es el informe de incidencias en pequeño, y la costumbre que más se valora en un técnico de
redes.
