---
title: "Equipos de interconexión y servicios de red"
description: "Resumen técnico de la unidad Equipos y servicios de red."
section: administracion
unit: equipos
kind: tecnico
order: 62
tags:
  - redes
  - equipos
  - tecnico
  - dns
  - dhcp
  - vlan
---

# Equipos y servicios de red · Resumen técnico

> **Alcance.** Doce apartados en el orden de estudio, con la configuración real de cada servicio y la orden que demuestra que funciona. Al final, tablas de repaso, cifras de memoria, los procedimientos del caso práctico y las errores típicos.

## 1. El modelo TCP sobre IP y la encapsulación

Cada capa tiene su unidad de datos, su dirección y sus equipos: hub en física, puente y conmutador en enlace, router en red, proxy y servidores en aplicación.

```text
 aplicacion   GET /notas HTTP/1.1                     200 bytes de datos
      |
 transporte  + puertos 51544 y 80, secuencia, banderas      20 bytes
      |
 red         + IP 192.168.1.20 y 192.168.1.30                20 bytes
      |
 enlace      + MAC origen, MAC destino, tipo 0x0800, FCS      18 bytes
```

Son 258 bytes en el cable. El MTU de Ethernet es 1 500 bytes de carga IP, 1 522 con etiqueta 802.1Q; un paquete mayor con el bit de no fragmentar se descarta con un ICMP de fragmentación necesaria.

### 1.1 El datagrama IPv4: formato campo a campo

IP es un protocolo **sin conexión y no confiable**: cada datagrama se encamina por separado, puede perderse, duplicarse o llegar desordenado, y no avisa. La cabecera mínima ocupa 20 bytes.

```text
 0                   1                   2                   3
 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1
+-------+-------+---------------+-------------------------------+
|Version|  IHL  |  DSCP / ECN   |        Longitud total         |
+-------+-------+---------------+---+---------------------------+
|        Identificacion         |Flg|    Desplazamiento fragm.  |
+---------------+---------------+---+---------------------------+
|      TTL      |   Protocolo   |     Suma de cabecera          |
+---------------+---------------+-------------------------------+
|                    Direccion de origen                        |
+---------------------------------------------------------------+
|                    Direccion de destino                       |
+---------------------------------------------------------------+
|                Opciones (si IHL mayor que 5)                  |
+---------------------------------------------------------------+
```

| Campo | Bits | Para qué sirve |
| --- | --- | --- |
| Versión | 4 | Vale 4 |
| IHL | 4 | Longitud de la cabecera en palabras de 4 bytes (mínimo 5, es decir, 20 bytes) |
| DSCP y ECN | 8 | Clase de servicio y aviso de congestión |
| Longitud total | 16 | Cabecera más datos, máximo 65 535 bytes |
| Identificación, indicadores y desplazamiento | 16, 3 y 13 | Fragmentación: reunir los trozos; el indicador DF prohíbe fragmentar |
| TTL | 8 | Saltos que le quedan; cada router resta 1 y a cero lo descarta (ICMP tipo 11) |
| Protocolo | 8 | Qué lleva dentro: 1 ICMP, 6 TCP, 17 UDP, 89 OSPF |
| Suma de cabecera | 16 | Detecta errores solo en la cabecera, y se recalcula en cada salto |
| Origen y destino | 32 y 32 | Direcciones IPv4 |

**Ejemplo resuelto.** La cabecera `45 00 00 3c 1c 46 40 00 40 06 9c bc c0 a8 00 68 c0 a8 00 01` se lee así:

```text
45        versión 4, IHL 5 (20 bytes)
00        DSCP 0
00 3c     longitud total 60 bytes (20 de cabecera y 40 de datos)
1c 46     identificación
40 00     indicador DF activado, desplazamiento 0 (no fragmentar)
40        TTL 64
06        protocolo 6: TCP
9c bc     suma de cabecera
c0 a8 00 68   origen 192.168.0.104
c0 a8 00 01   destino 192.168.0.1
```

La suma se comprueba sumando todas las palabras de 16 bits con acarreo: el resultado de la cabecera completa, con su suma incluida, debe ser `ffff`.

### 1.2 El segmento TCP

TCP es **orientado a conexión y confiable**: abre una conexión, numera los bytes, confirma lo recibido, retransmite lo perdido y ordena. Cabecera mínima de 20 bytes.

| Campo | Bits | Para qué sirve |
| --- | --- | --- |
| Puerto de origen y de destino | 16 y 16 | Identifican los extremos (con las IP, el socket) |
| Número de secuencia | 32 | Posición en el flujo del primer byte del segmento |
| Número de acuse | 32 | Siguiente byte que se espera recibir |
| Desplazamiento de datos | 4 | Longitud de la cabecera en palabras de 4 bytes |
| Banderas | 9 | URG, ACK, PSH, RST, SYN, FIN y otras |
| Ventana | 16 | Bytes que el receptor admite: control de flujo |
| Suma de comprobación | 16 | Cabecera, datos y una pseudocabecera |
| Puntero urgente | 16 | Posición de los datos urgentes |

```text
Segmento SYN-ACK del servidor: desplazamiento 5, banderas SYN y ACK -> campo 50 12 en hexadecimal
   (5 palabras = 20 bytes; 0x012 = ACK 0x010 + SYN 0x002)
```

## 2. IPv4: clases, máscaras, subredes y VLSM

> **Véase también.** El primer contacto con el direccionamiento está en la unidad «Mercado de comunicaciones» (apartado 6.1); aquí se profundiza con más cálculos. [Mercado de comunicaciones, resumen técnico](../../01_Diseno/01_Mercado_Comunicaciones/Mercado_Tecnico.md).

Una dirección son 32 bits en cuatro octetos. La máscara marca con unos la parte de red. Todo a cero en la parte de host es la dirección de red; todo a uno, la de difusión.

| Clase | Primer octeto | Máscara por defecto | Uso |
| --- | --- | --- | --- |
| A | 1 a 126 | 255.0.0.0 (/8) | Redes muy grandes |
| B | 128 a 191 | 255.255.0.0 (/16) | Redes medianas |
| C | 192 a 223 | 255.255.255.0 (/24) | Redes pequeñas |
| D | 224 a 239 | No aplica | Multidifusión |
| E | 240 a 255 | No aplica | Experimental |

De memoria: `127.0.0.0/8` loopback; `169.254.0.0/16` link-local o APIPA; `10.0.0.0/8`, `172.16.0.0/12` y `192.168.0.0/16` privadas (RFC 1918); `0.0.0.0` comodín o ruta por defecto; `255.255.255.255` difusión limitada.

| Prefijo | Máscara | Direcciones | Hosts útiles |
| --- | --- | --- | --- |
| /24 | 255.255.255.0 | 256 | 254 |
| /25 | 255.255.255.128 | 128 | 126 |
| /26 | 255.255.255.192 | 64 | 62 |
| /27 | 255.255.255.224 | 32 | 30 |
| /28 | 255.255.255.240 | 16 | 14 |
| /29 | 255.255.255.248 | 8 | 6 |
| /30 | 255.255.255.252 | 4 | 2 |
| /31 | 255.255.255.254 | 2 | 0 (enlace punto a punto, RFC 3021) |
| /32 | 255.255.255.255 | 1 | 1 (ruta a un host) |

### 2.1 Cálculo resuelto: cuatro subredes iguales

Red `192.168.10.0/24` partida en cuatro. Se toman dos bits de host, el bloque es de 64 y la máscara pasa a `/26`.

| Subred | Red | Primer host | Último host | Difusión |
| --- | --- | --- | --- | --- |
| 1 | 192.168.10.0/26 | .1 | .62 | .63 |
| 2 | 192.168.10.64/26 | .65 | .126 | .127 |
| 3 | 192.168.10.128/26 | .129 | .190 | .191 |
| 4 | 192.168.10.192/26 | .193 | .254 | .255 |

### 2.2 VLSM: distinto tamaño para cada necesidad

Dos reglas: ordenar las necesidades de mayor a menor y empezar cada subred en un múltiplo del tamaño de su bloque.

| Necesidad | Hosts | Prefijo | Red | Rango útil | Difusión |
| --- | --- | --- | --- | --- | --- |
| Administración | 100 | /25 | 192.168.20.0 | .1 a .126 | .127 |
| Profesores | 50 | /26 | 192.168.20.128 | .129 a .190 | .191 |
| Alumnos | 25 | /27 | 192.168.20.192 | .193 a .222 | .223 |
| Invitados | 10 | /28 | 192.168.20.224 | .225 a .238 | .239 |
| Enlace WAN | 2 | /30 | 192.168.20.252 | .253 y .254 | .255 |

Quedan libres de `.240` a `.251`, doce direcciones que ya no se pueden repartir sin romper la alineación.

Ejercicio: reparte `172.16.8.0/22` para 500, 200, 60 y 20 hosts. Salen un `/23`, un `/24`, un `/26` y un `/27`.

## 3. Puertos, sockets y transporte

| Puerto | Protocolo | Servicio |
| --- | --- | --- |
| 20 y 21 | TCP | FTP, datos y control |
| 22 | TCP | SSH |
| 23 | TCP | Telnet |
| 25 | TCP | SMTP |
| 53 | UDP y TCP | DNS (TCP para transferencias de zona) |
| 67 y 68 | UDP | DHCP, servidor y cliente |
| 69 | UDP | TFTP |
| 80 | TCP | HTTP |
| 110 | TCP | POP3 |
| 123 | UDP | NTP |
| 143 | TCP | IMAP |
| 161 y 162 | UDP | SNMP y traps |
| 179 | TCP | BGP |
| 389 | TCP | LDAP |
| 443 | TCP | HTTPS |
| 445 | TCP | SMB |
| 3389 | TCP | RDP |

UDP lleva 8 bytes fijos: puertos, longitud y suma. TCP lleva 20 o más: puertos, secuencia, acuse, banderas (URG, ACK, PSH, RST, SYN, FIN), ventana y suma.

```text
 cliente                                   servidor
    |  SYN  seq=1000  ------------------------>  |
    |  <-------------------  SYN ACK seq=5000, ack=1001
    |  ACK  ack=5001  ------------------------>  |
```

El control de flujo lo marca el receptor con el campo ventana: si llega a cero, el emisor sondea. El de congestión lo decide el emisor: arranque lento duplicando por acuse, evitación creciendo de uno en uno y retransmisión rápida a los tres acuses duplicados.

| Criterio | UDP | TCP |
| --- | --- | --- |
| Conexión | Sin conexión | Orientado a conexión |
| Fiabilidad | Ninguna, la pone la aplicación | Acuses y retransmisión |
| Orden | No garantizado | Garantizado |
| Cabecera | 8 bytes | 20 o más |
| Uso típico | DNS, DHCP, NTP, VoIP, vídeo | HTTP, SMTP, FTP, SSH |

## 4. ARP, ICMP y NAT

ARP resuelve una IP en una MAC dentro del mismo dominio de difusión: si el destino está en su red pregunta por él, y si no, por la puerta de enlace. La petición es de difusión y la respuesta unicast; el ARP gratuito anuncia un cambio de tarjeta.

```bash
ip neigh show                 # tabla ARP en Linux
arp -a                        # equivalente antiguo, tambien en Windows
ip neigh flush dev eth0       # vaciar la tabla
arping -I eth0 192.168.1.1    # preguntar por una MAC concreta
```

El ARP spoofing responde a todas las peticiones para ponerse en medio; se frena con tablas estáticas o inspección dinámica.

**RARP y BOOTP.** ARP resuelve de IP a MAC; **RARP** (RFC 903) hacía lo contrario: un equipo sin disco que conocía su MAC preguntaba cuál era su IP. Solo devolvía la IP, y como era de difusión no cruzaba routers. **BOOTP** (RFC 951) lo mejoró: sobre UDP, con servidor y relay, entregaba IP, puerta de enlace y fichero de arranque, con una tabla manual MAC a IP. **DHCP** (RFC 2131) añadió las concesiones y los rangos dinámicos. Hoy RARP está en desuso y BOOTP sobrevive como base de DHCP.

| Tipo ICMP | Nombre | Uso |
| --- | --- | --- |
| 0 y 8 | Echo reply y request | Ping |
| 3 | Destination unreachable | Red, host o puerto inalcanzable |
| 11 | Time exceeded | TTL agotado, base de traceroute |

```bash
ping -c 4 192.168.1.1
traceroute 8.8.8.8         # Linux, UDP por defecto, con -I usa ICMP
tracert 8.8.8.8            # Windows, ICMP
mtr 8.8.8.8                # traceroute continuo
```

| NAT | Qué traduce | Cuántos a cuántos | Uso |
| --- | --- | --- | --- |
| Estático | IP privada por IP pública fija | Uno a uno | Publicar un servidor |
| Dinámico | IP privada por una del grupo | Muchos a muchos | Salidas con varias públicas |
| PAT o sobrecarga | IP y puerto de origen | Muchos a uno | Salida a Internet de la red |

```bash
# Sin reenvio no hay ni NAT ni router
sysctl -w net.ipv4.ip_forward=1
echo "net.ipv4.ip_forward=1" > /etc/sysctl.d/99-forward.conf

# PAT con la IP de la interfaz de salida
iptables -t nat -A POSTROUTING -s 192.168.1.0/24 -o eth0 -j MASQUERADE

# NAT dinamico con un grupo de publicas
iptables -t nat -A POSTROUTING -s 192.168.1.0/24 -o eth0 \
         -j SNAT --to-source 203.0.113.10-203.0.113.20

# NAT estatico para un servidor concreto
iptables -t nat -A POSTROUTING -s 192.168.1.30 -o eth0 \
         -j SNAT --to-source 203.0.113.10

# Publicar un servicio interno: redireccion de puerto
iptables -t nat -A PREROUTING -i eth0 -p tcp --dport 8080 \
         -j DNAT --to-destination 192.168.1.30:80

# Verificacion
iptables -t nat -L -n -v
conntrack -L | head
```

PREROUTING sirve para DNAT y POSTROUTING para SNAT; sin `ip_forward` las reglas se cumplen y el paquete muere igual.

## 5. Protocolos de aplicación

> **Véase también.** SNMP, syslog y NTP se desarrollan en la unidad «Gestión de redes» (apartados 3 a 6). [Gestión de redes, resumen técnico](../02_Gestion_Redes/Gestion_Tecnico.md).

**SNMP** usa gestor, agente y MIB; la 2c se autentica con comunidad en claro y la 3 cifra. Los traps son avisos del agente y las consultas van con `snmpget` o `snmpwalk`. **NTP** ordena los relojes por estratos; un desfase de minutos rompe Kerberos. **BGP** es vector de camino y se usa entre operadores. **FTP** usa el 21 para control y el 20 para datos en activo; en pasivo el servidor abre un puerto alto, que es lo que atraviesa NAT, y como viaja en claro se usa SFTP o FTPS. **SMTP** entrega en el 25 y los clientes envían por el 587; el MX dice a quién. **HTTP** no tiene estado y sus cabeceras de caché son las que aprovecha un proxy. **NFS** comparte directorios entre equipos Unix y Linux por red (puerto TCP 2049): el servidor los publica en `/etc/exports` y el cliente los monta como si fueran locales; la versión 4 usa un solo puerto y admite autenticación con Kerberos, y las anteriores confiaban en la IP del cliente. **TFTP** transfiere ficheros pequeños sin autenticación por UDP 69 y se usa para cargar configuraciones y firmware en equipos de red.

## 6. DNS

```text
                        . (raiz, trece identidades A a M)
                        |
        +---------------+---------------+
        |               |               |
      .es             .com            .org
        |               |
   aula.es          ejemplo.com
        |
   www.aula.es
```

La raíz son trece identidades replicadas: cada servidor conoce su zona y delega el resto.

| Tipo de servidor | Tiene zona | Autoritativo | Uso |
| --- | --- | --- | --- |
| Primario o maestro | Sí, es la fuente | Sí | Editar aquí |
| Secundario o esclavo | Sí, copia | Sí | Redundancia y carga |
| De caché | No | No | Acelerar y reenviar |
| Reenviador | No | No | Concentrar la salida |

| Registro | Función | Ejemplo |
| --- | --- | --- |
| SOA | Autoridad y tiempos de la zona | `@ IN SOA ns1.aula.local. admin.aula.local. (` |
| NS | Servidores de nombres | `@ IN NS ns1.aula.local.` |
| A | Nombre a IPv4 | `www IN A 192.168.1.20` |
| AAAA | Nombre a IPv6 | `www IN AAAA 2001:db8::20` |
| CNAME | Alias | `intranet IN CNAME www` |
| MX | Correo con preferencia | `@ IN MX 10 correo.aula.local.` |
| PTR | IP a nombre, zona inversa | `20 IN PTR www.aula.local.` |
| TXT | Texto libre, SPF | `@ IN TXT "v=spf1 mx -all"` |
| SRV | Servicio, puerto y destino | `_ldap._tcp IN SRV 0 100 389 dc1` |
| CAA | Quién emite certificados | `@ IN CAA 0 issue "letsencrypt.org"` |

El SOA lleva siete campos: primario, correo del responsable con punto en vez de arroba, serie, refresco, reintento, caducidad y TTL negativo; el serie sube en cada cambio. Un CNAME no convive con otros registros ni se usa en la raíz.

La directa usa A y AAAA; la inversa, PTR en `in-addr.arpa` con los octetos invertidos. En la recursiva el servidor lo resuelve todo; en la iterativa la caché recibe referencias hasta el autoritativo.

### 6.1 BIND en Linux

```text
// /etc/bind/named.conf.options
options {
    directory "/var/cache/bind";
    listen-on { 192.168.1.10; 127.0.0.1; };
    allow-query { 192.168.1.0/24; localhost; };
    recursion yes;
    forwarders { 80.58.61.250; 80.58.61.254; };
    dnssec-validation auto;
};

// /etc/bind/named.conf.local
zone "aula.local" { type master; file "/etc/bind/db.aula.local"; };
zone "1.168.192.in-addr.arpa" { type master; file "/etc/bind/db.192.168.1"; };
zone "aula.local" {
    type slave;
    file "/var/cache/bind/db.aula.local";
    masters { 192.168.1.10; };
};
```

```text
; /etc/bind/db.aula.local
$TTL 86400
$ORIGIN aula.local.
@       IN  SOA ns1.aula.local. admin.aula.local. (
                2026111301 ; serial
                3600       ; refresh
                900        ; retry
                604800     ; expire
                86400 )    ; TTL negativo
        IN  NS      ns1.aula.local.
        IN  NS      ns2.aula.local.
        IN  MX  10  correo.aula.local.
        IN  TXT     "v=spf1 mx -all"
ns1     IN  A       192.168.1.10
ns2     IN  A       192.168.1.11
www     IN  A       192.168.1.20
correo  IN  A       192.168.1.30
intranet IN CNAME   www

; /etc/bind/db.192.168.1
$TTL 86400
@   IN  SOA ns1.aula.local. admin.aula.local. (
        2026111301 3600 900 604800 86400 )
    IN  NS  ns1.aula.local.
10  IN  PTR ns1.aula.local.
20  IN  PTR www.aula.local.
30  IN  PTR correo.aula.local.
```

```bash
named-checkconf /etc/bind/named.conf
named-checkzone aula.local /etc/bind/db.aula.local
systemctl restart named
rndc reload

dig www.aula.local @192.168.1.10
dig -x 192.168.1.20 @192.168.1.10
dig +trace www.aula.local
nslookup www.aula.local 192.168.1.10
host 192.168.1.20 192.168.1.10
```

`dig` marca `aa` si la respuesta es autoritativa; `SERVFAIL` apunta a la zona y `REFUSED` a que el cliente no está en `allow-query`.

### 6.2 DNS en Windows Server

```powershell
Install-WindowsFeature DNS -IncludeManagementTools
Add-DnsServerPrimaryZone -Name "aula.local" -ZoneFile "aula.local.dns"
Add-DnsServerResourceRecordA -Name "www" -ZoneName "aula.local" -IPv4Address "192.168.1.20"
Add-DnsServerResourceRecordCName -Name "intranet" -HostNameAlias "www.aula.local." -ZoneName "aula.local"
Add-DnsServerResourceRecordMX -Name "." -MailExchange "correo.aula.local." -Preference 10 -ZoneName "aula.local"
Add-DnsServerPrimaryZone -NetworkId "192.168.1.0/24" -ReplicationScope "Domain"
Add-DnsServerResourceRecordPtr -Name "20" -ZoneName "1.168.192.in-addr.arpa" -PtrDomainName "www.aula.local."
Add-DnsServerForwarder -IPAddress 80.58.61.250
Get-DnsServerZone
Resolve-DnsName www.aula.local
```

En Active Directory las zonas se integran en el directorio y admiten actualizaciones dinámicas seguras, que es como cada cliente registra su nombre.

## 7. DHCP

| Modo | Qué hace | Dónde se configura |
| --- | --- | --- |
| Manual o estática | La dirección se fija a mano en el equipo | En el cliente, fuera del rango |
| Automática | Asigna una libre y la conserva mientras pueda | En el servidor, sin reserva previa |
| Dinámica | Concesión con tiempo de vida renovable | En el servidor, con rango y tiempos |

El cliente emite Discover en difusión, el servidor responde Offer, el cliente pide con Request y el servidor confirma con Acknowledge; el servidor escucha en el 67 y el cliente en el 68. Opciones habituales: máscara (1), puerta de enlace (3), DNS (6), dominio (15), concesión (51) y fichero de arranque (67).

```text
# /etc/dhcp/dhcpd.conf
option domain-name "aula.local";
option domain-name-servers 192.168.1.10, 192.168.1.11;
default-lease-time 600;
max-lease-time 7200;
authoritative;

subnet 192.168.1.0 netmask 255.255.255.0 {
    range 192.168.1.100 192.168.1.199;
    option routers 192.168.1.1;
    option broadcast-address 192.168.1.255;
}

subnet 192.168.2.0 netmask 255.255.255.0 {
    range 192.168.2.100 192.168.2.150;
    option routers 192.168.2.1;
}

host impresora {
    hardware ethernet 00:1b:44:11:3a:b7;
    fixed-address 192.168.1.50;
}
```

Las exclusiones se hacen dejando direcciones fuera del rango o con un `pool` con `deny members of`. La reserva se declara con `host` y la MAC.

```bash
dhcpd -t -cf /etc/dhcp/dhcpd.conf     # comprobar sintaxis
systemctl restart isc-dhcp-server
journalctl -u isc-dhcp-server -n 30
cat /var/lib/dhcp/dhcpd.leases        # concesiones vivas
dhcrelay -i eth1 192.168.1.10         # relay en Linux
```

En un router Cisco el relay es `ip helper-address 192.168.1.10`, porque el Discover es de difusión y no cruza routers: el agente lo reenvía en unicast.

DHCP es la evolución de BOOTP, que entregaba una configuración fija con una entrada por equipo; DHCP añade concesiones con caducidad, rangos y opciones. Un cliente BOOTP sí es atendido por DHCP, no al revés.

Se comprueba con `ip a`, `ifconfig` y `dhclient -v eth0` en Linux, y con `ipconfig /all`, `/release` y `/renew` en Windows; una `169.254.x.x` significa que nadie contestó.

## 8. Servidor proxy

| Tipo | Dónde se pone | Para qué |
| --- | --- | --- |
| Directo o explícito | Configurado en el navegador | Control de acceso y registro |
| Transparente | Interceptando el tráfico con una regla | Sin tocar los clientes |
| De caché | Delante de la salida | Ahorrar ancho de banda |
| Inverso | Delante de los servidores | Publicar, repartir y cachear |

```text
# /etc/squid/squid.conf
http_port 3128
http_port 3129 intercept
visible_hostname proxy.aula.local
acl lan src 192.168.1.0/24
acl bloqueados dstdomain .tiktok.com .twitch.tv
acl horario time M T W H F 08:00-15:00
http_access deny bloqueados
http_access allow lan horario
http_access allow localhost
http_access deny all
cache_mem 256 MB
maximum_object_size 32 MB
cache_dir ufs /var/spool/squid 10000 16 256
```

El proxy hace de NAT del tráfico que pasa por él y sirve de intermediario de SMTP y FTP, donde filtra y guarda copia. El modo transparente exige desviar con `iptables -t nat -A PREROUTING -i eth1 -p tcp --dport 80 -j REDIRECT --to-port 3129`.

```bash
squid -k parse                # validar configuracion
squid -z                      # crear la estructura de cache
systemctl restart squid
curl -x http://192.168.1.5:3128 http://example.com -I
tail -f /var/log/squid/access.log
```

| Criterio | Proxy | Cortafuegos |
| --- | --- | --- |
| Capa | Aplicación | Red y transporte |
| Qué ve | URL, método, cabeceras, contenido | IP, puerto, estado |
| Qué aporta | Caché, registro, filtrado por URL | Bloqueo, NAT, publicación |

## 9. Hubs, puentes y conmutadores

El hub repite a todos los puertos: todos comparten dominio de colisión y solo habla uno a la vez. El puente y el conmutador aprenden la MAC de origen y la asocian a un puerto, así que cada puerto es su propio dominio de colisión; la difusión sigue siendo una hasta que hay VLAN.

| Modo | Qué lee antes de reenviar | Ventaja | Riesgo |
| --- | --- | --- | --- |
| Cut-through | Los primeros 6 bytes, la MAC de destino | Latencia mínima y fija | Reenvía tramas corruptas y runt |
| Store-and-forward | La trama completa y el CRC | Descarta errores | Más latencia, crece con el tamaño |
| Fragment-free | Los primeros 64 bytes | Evita casi todos los runt | No detecta errores posteriores |

El Spanning Tree (IEEE 802.1D, con 802.1w y 802.1s) evita bucles: se elige raíz por prioridad y, en empate, por MAC más baja, y los demás calculan la ruta de menor coste y bloquean el resto. Los estados son bloqueo, escucha, aprendizaje y reenvío, con 30 a 50 segundos de convergencia; el rápido converge en segundos.

```bash
show spanning-tree
show spanning-tree vlan 10
spanning-tree mode rapid-pvst
spanning-tree vlan 10 root primary
spanning-tree portfast
spanning-tree bpduguard enable
```

### 9.1 Hubs apilables y segmentación

Un hub apilable es un conjunto de repetidores que, unidos por un bus propio, se comportan como **un solo repetidor** con más puertos. Al apilarlos no se suman dominios de colisión: sigue habiendo uno. Las reglas de apilado limitan cuántos repetidores se pueden encadenar (la regla 5-4-3 en Ethernet de 10 Mb/s: cinco segmentos, cuatro repetidores y tres segmentos con equipos; en Fast Ethernet, uno o dos repetidores según su clase).

La **segmentación** consiste en partir un dominio de colisión con un puente o un conmutador. Con 24 equipos en un hub de 10 Mb/s, si todos hablan a la vez, el reparto medio es de unos 0,42 Mb/s por equipo; con un conmutador, cada puerto dispone de los 10 Mb/s. Es la razón de que los hubs desaparecieran.

### 9.2 Tabla MAC y comportamiento del conmutador

El conmutador **aprende** la MAC de origen de cada trama y la asocia al puerto por el que llegó; **reenvía** si conoce el destino, **inunda** si no lo conoce o si es de difusión, y **filtra** si destino y origen están en el mismo puerto. Las entradas caducan (300 s por defecto).

```text
Trama 1: A (puerto 1) -> B (desconocida)   Aprende A=1, inunda por 2, 3 y 4
Trama 2: B (puerto 2) -> A                 Aprende B=2, reenvia solo por el 1
Trama 3: A -> B                            Reenvia solo por el 2
Tabla MAC: A=1, B=2
```

```bash
show mac address-table
show mac address-table dynamic vlan 10
clear mac address-table dynamic
```

### 9.3 Puentes transparentes, remotos y comparación con el conmutador

Un **puente transparente** aprende MAC y reenvía sin que los equipos sepan que existe; une redes 802.x iguales (Ethernet con Ethernet) o distintas (Ethernet con Wi-Fi, con traducción de formato de trama). Un **puente remoto** une dos LAN a través de un enlace de área extensa: cada extremo encapsula las tramas y las envía por la WAN, de modo que las dos LAN parecen una sola (hoy se hace con túneles de nivel 2 como VXLAN o con VPN). El riesgo es que la difusión cruza la WAN y que los bucles son más difíciles de controlar.

| Criterio | Puente | Conmutador |
| --- | --- | --- |
| Puertos | Pocos (2 a 4) | Decenas |
| Reenvío | Por software, más lento | Por hardware (ASIC), a velocidad de línea |
| Funciones añadidas | Pocas | VLAN, agregación, calidad de servicio, gestión |
| Idea | La misma | La misma, con más puertos y más velocidad |

Un conmutador es un puente multipuerto con hardware dedicado. Los conmutadores de **nivel 3** añaden encaminamiento IP entre VLAN a velocidad de línea, y los de **nivel 4** deciden por puertos y sesiones (balanceo y calidad de servicio).

## 10. VLAN y enlaces troncales

Una VLAN es un dominio de difusión lógico: el puerto de acceso lleva tráfico sin etiquetar y el troncal varias etiquetadas con 802.1Q, 4 bytes con 12 bits de identificador, 4 094 VLAN útiles. La nativa cruza sin etiqueta y debe coincidir en ambos extremos.

| Criterio de agrupación | Cómo se asigna | Cuándo se usa |
| --- | --- | --- |
| Por puerto, estática | El administrador fija la VLAN del puerto | Lo normal en cableado fijo |
| Por MAC, dinámica | El conmutador consulta una base de MAC | Equipos que se mueven |
| Por protocolo | Según el protocolo de capa 3 | Casos heredados, en desuso |

```bash
vlan 10
 name alumnos
vlan 20
 name profesores
interface gigabitEthernet0/1
 switchport mode access
 switchport access vlan 10
interface gigabitEthernet0/24
 switchport mode trunk
 switchport trunk allowed vlan 10,20,30
 switchport trunk native vlan 99
show vlan brief
show interfaces trunk
show interfaces gigabitEthernet0/24 switchport
```

Para cruzar de una VLAN a otra se usa router-on-a-stick, con una subinterfaz por VLAN (`encapsulation dot1Q 10`), o un conmutador de capa 3.

VTP sincroniza la base de VLAN del mismo dominio, con modos servidor, cliente y transparente y un número de revisión. Un equipo con revisión alta puede borrar la configuración de toda la red, así que se usa transparente o se desactiva.

### 10.1 VLAN dinámicas, usos recomendados y riesgos

En una VLAN **dinámica** el puerto no se fija a mano: el servidor decide la VLAN según quién se conecta. Dos mecanismos: por **MAC** (el conmutador consulta una base) y por **identidad** con 802.1X, donde el servidor RADIUS devuelve la VLAN en la respuesta de autenticación. Ventaja: el usuario conserva su VLAN al cambiar de mesa. Coste: más infraestructura (servidor RADIUS) y una base que mantener.

| Recomendado | Evitar |
| --- | --- |
| Segmentar por función y política: administración, voz, invitados, gestión, servidores | Una única VLAN para todo el edificio |
| Voz en su propia VLAN con prioridad | Usar la VLAN 1 para el tráfico de usuarios |
| VLAN de invitados aislada con filtros hacia el interior | Confiar en la VLAN como única barrera de seguridad sin filtrado entre ellas |
| VLAN de gestión separada | VLAN que se extienden por todo el campus sin necesidad |
| Un puerto de acceso por equipo | Troncales con todas las VLAN permitidas por defecto |

**VLAN hopping.** Es el salto entre VLAN. Se hace con la negociación de troncal (DTP) o con doble etiqueta (la VLAN nativa permite que una trama con dos etiquetas atraviese). Se previene desactivando la negociación (`switchport nonegotiate`), usando una VLAN nativa sin uso y sin hosts, y permitiendo en cada troncal solo las VLAN necesarias.

### 10.2 Agregación de enlaces (link aggregation)

Es otra cosa distinta del troncal. Un **troncal** lleva varias VLAN por un enlace; la **agregación** une varios enlaces físicos en uno lógico para ganar ancho de banda y redundancia. Se negocia con LACP (IEEE 802.1AX, antes 802.3ad).

| Concepto | Qué hace |
| --- | --- |
| Troncal | Varias VLAN etiquetadas en un enlace |
| Agregación | Varios enlaces físicos como un único enlace lógico |
| Reparto de la carga | Por hash de MAC, IP o puertos: un flujo concreto siempre va por el mismo enlace |
| Consecuencia | Cuatro enlaces de 1 Gb/s dan 4 Gb/s en conjunto, pero un solo flujo no supera 1 Gb/s |

```bash
interface range gigabitEthernet0/1-2
 channel-group 1 mode active
interface port-channel 1
 switchport mode trunk
show etherchannel summary
```

Se pueden combinar: una agregación que además es troncal. Los dos extremos deben coincidir en velocidad, dúplex y VLAN.

## 11. Wi-Fi

| Norma | Nombre | Banda | Velocidad teórica | Año |
| --- | --- | --- | --- | --- |
| 802.11b | sin nombre | 2,4 GHz | 11 Mb/s | 1999 |
| 802.11a | sin nombre | 5 GHz | 54 Mb/s | 1999 |
| 802.11g | sin nombre | 2,4 GHz | 54 Mb/s | 2003 |
| 802.11n | Wi-Fi 4 | 2,4 y 5 GHz | 600 Mb/s | 2009 |
| 802.11ac | Wi-Fi 5 | 5 GHz | unos 6,9 Gb/s | 2013 |
| 802.11ax | Wi-Fi 6 y 6E | 2,4, 5 y 6 GHz | unos 9,6 Gb/s | 2019 |
| 802.11be | Wi-Fi 7 | 2,4, 5 y 6 GHz | unos 46 Gb/s | 2024 |

Las cifras son teóricas; el rendimiento real queda entre el 40 y el 60 por ciento. En infraestructura el cliente se asocia a un punto de acceso con SSID; en ad-hoc hablan sin él. En 2,4 GHz solo se solapan 1, 6 y 11.

Seguridad: WEP está roto, WPA con TKIP está obsoleto, WPA2 con AES-CCMP es el mínimo y WPA3 con SAE es el actual; la variante empresarial usa 802.1X con RADIUS. Ocultar el SSID y filtrar por MAC no son seguridad. Buenas prácticas: WPA3 empresarial, WPS desactivado, firmware al día e invitados en su VLAN.

### 11.1 Riesgos de seguridad y buenas prácticas

| Riesgo | Qué ocurre | Defensa |
| --- | --- | --- |
| Escucha en red abierta | Cualquiera captura el tráfico | Redes con cifrado individual (OWE) o WPA3 |
| Punto de acceso falso (rogue) | Alguien conecta un AP no autorizado a la red | Detección por el controlador y 802.1X en los puertos |
| Gemelo malvado (evil twin) | AP falso con el mismo SSID para robar credenciales | Certificados validados y WPA3 empresarial |
| Contraseña débil con WPA2 personal | Ataque de diccionario sobre el saludo capturado | Contraseña larga o 802.1X con certificados |
| WPS | El PIN de ocho cifras se adivina en horas | Desactivarlo |
| Desautenticación | Tramas falsas que expulsan clientes | Tramas de gestión protegidas (802.11w, obligatorio en WPA3) |
| Cliente invitado con acceso a la red interna | Un invitado ve servidores | VLAN de invitados con filtrado |

**Buenas prácticas.** WPA3 (o WPA2 con AES) y 802.1X con RADIUS en la red corporativa; una red de invitados aislada y con límite de ancho de banda; WPS apagado; potencia y canales planificados tras un estudio de cobertura; firmware al día; y separación de la red de gestión de los puntos de acceso. En empresa, el itinerario entre puntos de acceso se mejora con 802.11k, v y r.

**Planificación de capacidad.** La célula de un punto de acceso comparte el medio: más clientes, menos velocidad por cliente. Se suele diseñar para unas pocas decenas de clientes por punto [orientativo, depende del uso] y se ponen más puntos de menor potencia en lugar de pocos de mucha.

## 12. Encaminamiento

> **Véase también.** BGP y OSPF se presentan en la unidad «Mercado de comunicaciones» (apartado 6.2); aquí se añade la configuración y la comparación completa. [Mercado de comunicaciones, resumen técnico](../../01_Diseno/01_Mercado_Comunicaciones/Mercado_Tecnico.md).

La tabla de rutas asocia destino, máscara, puerta de enlace, interfaz y métrica, y se consulta por coincidencia más larga. La ruta por defecto es `0.0.0.0/0` y solo se usa si no hay otra. La distancia administrativa desempata: conectada 0, estática 1, EIGRP 90, OSPF 110, RIP 120.

```bash
ip route                                   # tabla en Linux
ip route add 10.0.0.0/8 via 192.168.1.254  # ruta estatica
ip route add default via 192.168.1.254     # ruta por defecto
ip route del 10.0.0.0/8                    # borrarla
ip route get 8.8.8.8                       # que ruta se usaria
ip -6 route
route print                                # Windows
```

CIDR agrega: `192.168.0.0/24` a `192.168.3.0/24` se anuncian como `192.168.0.0/22` porque comparten los 22 primeros bits. VLSM hace lo contrario: parte el bloque.

| Criterio | Vector de distancia | Estado de enlace |
| --- | --- | --- |
| Qué intercambia | La tabla completa con sus métricas | El estado de sus enlaces |
| Qué calcula | El camino por saltos o por coste acumulado | El mapa completo y la ruta más corta |
| Convergencia | Lenta, con bucles posibles | Rápida |
| Consumo | Poco cálculo, mucho tráfico periódico | Más memoria y CPU |
| Ejemplos | RIP, IGRP, EIGRP | OSPF, IS-IS |

| Protocolo | Tipo | Métrica | Notas |
| --- | --- | --- | --- |
| RIP | Vector de distancia | Saltos, máximo 15 | Actualiza cada 30 s, 16 es infinito |
| IGRP | Vector de distancia | Ancho de banda y retardo | Propietario de Cisco, sustituido por EIGRP |
| EIGRP | Híbrido | Ancho de banda y retardo | DUAL, sucesor factible, sin bucles |
| OSPF | Estado de enlace | Coste, proporcional al ancho de banda | Áreas, área 0 como columna, Dijkstra |
| BGP | Vector de camino | Atributos y AS_PATH | Entre sistemas autónomos, TCP 179 |

Un router software libre usa el reenvío del núcleo y FRR o BIRD cuando hace falta OSPF o BGP.

```bash
sysctl -w net.ipv4.ip_forward=1
apt install frr
vtysh -c "conf t" -c "router ospf" -c "network 192.168.1.0/24 area 0"
vtysh -c "show ip route" -c "show ip ospf neighbor"
```

Un ACL filtra por dirección y puerto: las estándar (1 a 99) miran solo el origen y las extendidas (100 a 199) el resto. Al final hay un denegar implícito.

```bash
access-list 10 permit 192.168.10.0 0.0.0.255
access-list 110 deny tcp any host 192.168.10.5 eq 23
access-list 110 permit ip any any
interface gigabitEthernet0/1
 ip access-group 110 in
show access-lists
show ip interface gigabitEthernet0/1
```

### 12.1 Protocolos enrutables y tipos de comunicación

Un protocolo es **enrutable** si lleva una dirección de red que un router puede interpretar: IP (y, históricamente, IPX y AppleTalk). Es **no enrutable** si solo usa direcciones de enlace y no cruza routers: NetBEUI, por ejemplo, que solo funciona en una LAN o dentro de un túnel.

| Tipo | Destino | Ejemplo IPv4 |
| --- | --- | --- |
| Unicast | Un equipo | 192.168.1.20 |
| Broadcast | Todos los de la red | 192.168.1.255 y 255.255.255.255 |
| Multicast | Un grupo suscrito | 224.0.0.0/4: 224.0.0.5 OSPF, 224.0.0.251 mDNS |

El multicast IPv4 usa direcciones MAC que empiezan por `01:00:5e`. Los equipos se suscriben a un grupo con **IGMP**; los conmutadores con *IGMP snooping* reenvían el tráfico solo a los puertos suscritos en lugar de inundar. Se usa en vídeo, en protocolos de enrutamiento y en descubrimiento de servicios.

### 12.2 Conceptos de los protocolos de encaminamiento

| Concepto | Qué es |
| --- | --- |
| Métrica | El valor con que un protocolo compara caminos: saltos (RIP), coste por ancho de banda (OSPF), ancho de banda y retardo (EIGRP) |
| Distancia administrativa | La fiabilidad de la fuente de la ruta: gana la menor entre protocolos distintos |
| Convergencia | El tiempo que tarda toda la red en conocer un cambio; menor es mejor |
| Protocolo interior (IGP) y exterior (EGP) | Dentro de un sistema autónomo (RIP, OSPF, EIGRP); entre sistemas autónomos (BGP) |

**Estado de IGRP y EIGRP.** IGRP, propietario de Cisco, está obsoleto y desapareció de los equipos actuales. EIGRP lo sustituyó; Cisco publicó una versión como RFC informativo (RFC 7868), pero sigue siendo sobre todo un protocolo de ese fabricante. En redes mixtas se usa OSPF.

### 12.3 Router software o router hardware

| Criterio | Router hardware | Router software (Linux, FRR, VyOS, pfSense) |
| --- | --- | --- |
| Rendimiento | Previsible, por ASIC | Depende de la CPU y de las tarjetas |
| Coste inicial | Mayor | Menor si hay servidor |
| Flexibilidad | Limitada | Muy alta (servicios, VPN, cortafuegos en el mismo equipo) |
| Administración | Interfaz del fabricante, soporte | Requiere más conocimiento propio |
| Fiabilidad | Sin discos ni piezas móviles | El servidor falla más; se duplica |
| Consumo y espacio | Bajo | Mayor |
| Soporte | Un contrato único | Comunidad o contrato aparte |

Un router software encaja en laboratorios, sedes pequeñas y servicios con lógica propia; en el núcleo con alto tráfico y alta disponibilidad suele ganar el hardware.

## Perspectiva empresarial

Los servicios de red son invisibles cuando funcionan y paralizan la empresa cuando fallan. Esta sección da el punto de vista de quien responde de ellos. Las cifras son ilustrativas.

### DNS y DHCP: continuidad ante todo

Si el DNS cae, **todo** parece caído aunque la red funcione. Por eso: al menos dos servidores DNS en equipos distintos (a ser posible en ubicaciones distintas), un reenviador de respaldo y copia de las zonas. En DHCP, dos servidores en reparto de ámbitos o en **failover**, para que un fallo no deje a la oficina sin direcciones.

```text
Dimensionado de un ambito DHCP para una red de invitados
  Pico de dispositivos simultaneos: 120. Margen del 30 por ciento: 120 x 1,3 = 156 direcciones.
  Una /25 da 126 hosts: no basta. Una /24 da 254: basta.
  Concesion: 2 horas, para recuperar las direcciones de quien se va rapido.
  En una oficina estable: concesion de 8 dias y reservas para impresoras y servidores.
```

### Segmentar es una decisión de negocio

La segmentación no es un capricho técnico: limita el daño de un ataque y permite aplicar política (invitados, voz, gestión, servidores). Su coste es de diseño y de mantenimiento, no de equipos. La pregunta de quien paga es: ¿qué ocurre si alguien entra por el Wi-Fi de invitados? Con VLAN y filtrado, nada; sin ellas, accede a los servidores.

### Proxy y cortafuegos

El proxy ahorra ancho de banda (caché) y registra y filtra navegación; un cortafuegos de nueva generación (NGFW) lo integra con inspección de aplicaciones, pero con licencias anuales. Para una pyme, un NGFW con filtrado web suele ser más rentable que mantener un proxy aparte. Para una escuela con mucho tráfico repetido, el proxy de caché sigue teniendo sentido.

### Router software frente a hardware: el coste real

```text
Comparacion a 5 anos (ilustrativa)
  Hardware: 1 800 euros + soporte 5 x 250 = 3 050 euros
  Software: servidor 900 euros + administracion 20 h/ano x 40 euros/h x 5 = 4 000
            = 4 900 euros
```

La opción software parece más barata, pero cuando se cuenta el tiempo de quien la mantiene, deja de serlo. Si la empresa ya tiene ese conocimiento, o necesita funciones que el hardware no da, compensa. Si no, el soporte del fabricante es un seguro.

### Wi-Fi como servicio y cumplimiento

El Wi-Fi corporativo es un acceso a la red y por eso entra en el alcance de las normas de seguridad (RGPD, ENS, ISO 27001). Se justifica con políticas escritas (quién se conecta, con qué), registro de acceso y red de invitados separada. Ofrecer Wi-Fi gratuito a clientes exige además conservar los datos de conexión durante el plazo que marque la normativa vigente [comprobar con asesoría jurídica].

### Documentación operativa que dirección sí lee

Un diagrama de la red con VLAN y servicios, un inventario de equipos con garantías y versiones, un plan de direccionamiento y un cuadro de contactos de operador. Es lo que permite que la empresa no dependa de una sola persona.

## Tablas de referencia rápida

Los puertos, los prefijos, los modos de conmutación, los estándares Wi-Fi y los protocolos de encaminamiento ya están en su apartado (3, 2, 9, 11 y 12). Falta la de tiempos y distancias:

| Dato | Valor |
| --- | --- |
| Distancia administrativa | 0 conectada, 1 estática, 90 EIGRP, 110 OSPF, 120 RIP |
| RIP | actualiza cada 30 s, 15 saltos útiles, 16 es infinito |
| OSPF | saludo 10 s, muerte 40 s, 224.0.0.5 y 224.0.0.6 |
| STP | 30 a 50 s de convergencia, RSTP en segundos |
| Trama Ethernet | 64 a 1 518 bytes, MTU 1 500 |

## Cifras que hay que saber de memoria

- IPv4: 32 bits en cuatro octetos; IPv6: 128 bits.
- Cabecera TCP: 20 bytes mínimo; UDP: 8 bytes.
- VLAN: 12 bits, 4 094 útiles. DNS: trece raíces. DHCP: 67 y 68.
- `/30`: dos hosts útiles. `/31`: punto a punto.
- Cobre: 90 m de enlace y 100 m de canal.
- 2,4 GHz: canales 1, 6 y 11.
- Cabecera IPv4: 20 bytes mínimo, TTL de 8 bits, protocolo 6 TCP y 17 UDP.
- LACP: IEEE 802.1AX; un flujo no supera la velocidad de un enlace.
- Multicast IPv4: 224.0.0.0/4, MAC 01:00:5e.
- NFS: TCP 2049.
- RARP: de MAC a IP, en desuso; BOOTP: base de DHCP.

## Procedimientos paso a paso

1. DNS con BIND: zonas en `named.conf.local`, `db.aula.local` y `db.192.168.1`, `named-checkzone`, y `dig www.aula.local @192.168.1.10` con `dig -x`.
2. DNS en Windows: `Install-WindowsFeature DNS`, zona directa y zona inversa, A, CNAME y MX, reenviador, y `Resolve-DnsName` con `nslookup`.
3. DHCP: `dhcpd.conf` con `subnet`, `range` y `host`, `dhcpd -t`, y prueba con `dhclient -v` y `dhcpd.leases`.
4. Proxy con NAT: `acl` y `http_access`, `squid -z`, `squid -k parse`, `MASQUERADE`, `REDIRECT` al 3129 y `curl -x`.
5. Router Linux: `ip addr`, `ip route add default`, `iptables`, y `ip route get` con `traceroute`.
6. VLAN: alta de VLAN, puertos de acceso, troncal con `allowed` y `native`, y `show vlan brief`.
7. Rutas, ACL y DHCP en el router: `ip route`, `access-list`, `ip access-group`, `ip dhcp pool`, y `show ip dhcp binding`.

## Errores típicos

1. `192.168.1.255` solo es difusión en un `/24`: en un `/26` la de la primera subred es `.63`.
2. Un `/31` no tiene hosts útiles por la regla general, pero se usa en enlaces punto a punto (RFC 3021).
3. La puerta de enlace debe caer dentro de la subred del cliente; si no, no hay salida.
4. El proxy no sustituye al cortafuegos ni al NAT, y STP no evita bucles de capa 3.
5. La VLAN nativa mal igualada en un troncal provoca fugas entre VLAN.
6. DHCP asigna por MAC, no por nombre de equipo.
7. `169.254.x.x` es link-local, no privada: el DHCP falló.
8. **"Un troncal y una agregación son lo mismo".** El troncal lleva varias VLAN; la agregación une varios enlaces en uno lógico.
9. **"Cuatro enlaces agregados de 1 Gb/s dan 4 Gb/s a cada conexión".** Un flujo va siempre por un enlace; 4 Gb/s es el total.
10. **"Apilar hubs reduce las colisiones".** Los apilables siguen formando un solo dominio de colisión.
11. **"La VLAN es una barrera de seguridad por sí sola".** Separa difusión; sin filtrado entre VLAN no hay política.
12. **"WPA2 personal con contraseña corta es seguro".** El saludo capturado se ataca por diccionario; hace falta contraseña larga o 802.1X.
13. **"RARP sirve para encaminar".** RARP traducía MAC a IP en equipos sin disco; está en desuso.
14. **"EIGRP es un estándar abierto como OSPF".** Es de Cisco, con un RFC informativo.
15. **"La suma de la cabecera IP protege los datos".** Solo detecta errores en la cabecera y se recalcula en cada salto.

## Glosario de la unidad

**BPDU**: trama de control del Spanning Tree.
**CIDR**: prefijo que sustituyó a las clases.
**Concesión**: asignación temporal de una dirección DHCP.
**Forwarder**: DNS que reenvía lo que no resuelve.
**MIB**: base de información de SNMP.
**NAT**: traducción de direcciones de red.
**PAT**: NAT con traducción de puertos.
**PTR**: registro inverso, de dirección a nombre.
**Relay**: agente que reenvía DHCP entre redes.
**SOA**: registro de autoridad de una zona.
**Troncal**: enlace con varias VLAN etiquetadas.
**TTL**: vida de un paquete en caché.
**VLSM**: máscaras de distinta longitud.
**VTP**: sincronización de VLAN de Cisco.
**Wildcard**: máscara invertida de las ACL.
**802.1AX (LACP)**: agregación de enlaces.
**BOOTP**: protocolo que antecedió a DHCP.
**DSCP**: marca de clase de servicio en la cabecera IP.
**Failover (DHCP)**: dos servidores que se respaldan.
**IGMP**: suscripción a grupos multicast.
**NFS**: sistema de ficheros en red de Unix y Linux.
**OWE**: cifrado individual en redes Wi-Fi abiertas.
**RARP**: de dirección física a IP, en desuso.
**VLAN hopping**: salto entre VLAN por negociación o doble etiqueta.

## Para profundizar

- [RFC 1918, direcciones privadas](https://www.rfc-editor.org/rfc/rfc1918)
- [Registro de puertos de la IANA](https://www.iana.org/assignments/service-names-port-numbers/service-names-port-numbers.xhtml)
- [Manual de BIND 9](https://bind9.readthedocs.io/en/latest/)
- [Directivas de configuración de Squid](http://www.squid-cache.org/Doc/config/)
- [FRRouting, suite de encaminamiento libre](https://frrouting.org/)
- [RFC 791, protocolo IP](https://www.rfc-editor.org/rfc/rfc791)
- [RFC 9293, TCP](https://www.rfc-editor.org/rfc/rfc9293)
- [RFC 2131, DHCP](https://www.rfc-editor.org/rfc/rfc2131)
- [RFC 7868, EIGRP](https://www.rfc-editor.org/rfc/rfc7868)
