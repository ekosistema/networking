---
title: "Equipos y servicios de red · Tarjetas de repaso"
description: "Tarjetas de repaso de la unidad Equipos y servicios de red."
section: administracion
unit: equipos
kind: tarjetas
order: 65
tags:
  - redes
  - equipos
  - tarjetas
---

# Equipos y servicios de red · Tarjetas de repaso

> **Cómo usarlas.** Tapa la columna de la derecha, contesta en voz alta y comprueba. Marca las que
> falles y vuelve a ellas a 1, 3 y 7 días. Hay 112 tarjetas en 9 bloques.

## 1. Capas, cabeceras y transporte

| Pregunta | Respuesta |
| --- | --- |
| Unidades de datos por capa | Datos, segmento, paquete o datagrama, trama y bits |
| IP: tipo de servicio | Sin conexión y no confiable |
| TCP: tipo de servicio | Orientado a conexión y confiable |
| Cabecera IPv4: tamaño mínimo | 20 bytes |
| Campos de la cabecera IPv4 | Versión, IHL, DSCP, longitud, identificación, indicadores, desplazamiento, TTL, protocolo, suma, origen y destino |
| Qué hace el TTL | Se resta 1 por router; a cero se descarta con ICMP tipo 11 |
| Protocolo 1, 6, 17 y 89 | ICMP, TCP, UDP y OSPF |
| Suma de cabecera IP | Detecta errores solo en la cabecera y se recalcula en cada salto |
| Campos de la cabecera TCP | Puertos, secuencia, acuse, desplazamiento, banderas, ventana, suma y puntero urgente |
| Saludo de TCP | SYN, SYN-ACK y ACK |
| Qué es la ventana de TCP | Bytes que el receptor admite: control de flujo |
| Cabecera UDP | 8 bytes |
| UDP frente a TCP | Sin conexión y sin acuses frente a conexión y fiabilidad |
| MTU de Ethernet | 1 500 bytes de carga IP (1 522 de trama con etiqueta) |

## 2. Direccionamiento

| Pregunta | Respuesta |
| --- | --- |
| Clases A, B, C, D y E | 1-126, 128-191, 192-223, multicast 224-239 y experimental 240-255 |
| Máscaras por defecto de A, B y C | /8, /16 y /24 |
| Rangos privados | 10.0.0.0/8, 172.16.0.0/12 y 192.168.0.0/16 |
| Loopback y link-local | 127.0.0.0/8 y 169.254.0.0/16 |
| Hosts útiles de /24, /26, /27, /28, /29, /30 | 254, 62, 30, 14, 6 y 2 |
| Para qué sirve el /31 | Enlaces punto a punto (RFC 3021) |
| Cómo se asigna VLSM | De mayor a menor y alineando cada bloque a su tamaño |
| Qué hace CIDR | Agrega prefijos: 192.168.0.0/24 a 192.168.3.0/24 son 192.168.0.0/22 |
| Puertos conocidos, registrados y dinámicos | 0-1023, 1024-49151 y 49152-65535 |
| Puertos de SSH, SMTP, DNS, DHCP, HTTP, HTTPS | 22, 25, 53, 67 y 68, 80 y 443 |
| Puertos de NTP, SNMP, BGP, TFTP | 123, 161 y 162, 179 y 69 |
| Niveles de direccionamiento | Físico (MAC), lógico (IP), puerto y de aplicación (URL, correo) |

## 3. ARP, ICMP y NAT

| Pregunta | Respuesta |
| --- | --- |
| Qué hace ARP | Resuelve IP en MAC en la misma red |
| Petición ARP y respuesta | De difusión; unicast |
| RARP | De MAC a IP, en desuso |
| BOOTP | Base de DHCP, con tabla manual |
| ICMP tipos 0, 8, 3 y 11 | Echo reply, echo request, inalcanzable y tiempo excedido |
| Cómo funciona traceroute | Con TTL creciente y los avisos de tiempo excedido |
| NAT estático, dinámico y PAT | Uno a uno; muchos a muchos; muchos a uno con puertos |
| DNAT frente a SNAT | Cambia el destino (PREROUTING); cambia el origen (POSTROUTING) |
| MASQUERADE | SNAT con la IP de la interfaz de salida |
| Qué exige un router Linux | net.ipv4.ip_forward=1 |
| Cómo se ve la tabla de traducciones | `conntrack -L` |

## 4. DNS

| Pregunta | Respuesta |
| --- | --- |
| Estructura del DNS | Jerarquía: raíz, TLD, dominio y subdominio |
| Tipos de servidor | Primario, secundario y caché |
| Delegación | Una zona cede un subdominio a otros servidores |
| Registros SOA, NS, A, AAAA, CNAME, MX, PTR | Autoridad, servidor de nombres, IPv4, IPv6, alias, correo e inverso |
| Para qué sirve la serie del SOA | Que el secundario copie la zona si es mayor |
| Zona inversa | in-addr.arpa, con registros PTR |
| Comprobar zonas en BIND | `named-checkzone` y `named-checkconf` |
| Consultar con dig | `dig www.dominio @servidor` y `dig -x IP` |
| Qué es un reenviador | DNS al que se pasa lo que no se resuelve |
| Qué pasa si cae el DNS | Todo parece caído aunque la red funcione |

## 5. DHCP y proxy

| Pregunta | Respuesta |
| --- | --- |
| Mensajes DHCP | Discover, Offer, Request y Acknowledge |
| Puertos DHCP | 67 servidor, 68 cliente |
| Métodos de asignación | Manual, automática y dinámica |
| Rangos, exclusiones, concesiones y reservas | Direcciones a repartir; excluidas; temporales; fijas por MAC |
| Opciones DHCP habituales | Máscara (1), puerta (3), DNS (6), dominio (15), concesión (51) |
| Cómo llega el DHCP a otra red | Relay o `ip helper-address` |
| DHCP frente a BOOTP | DHCP añade concesiones y rangos dinámicos |
| Qué indica 169.254.x.x | Nadie contestó al DHCP |
| Tipos de proxy | Explícito, transparente, de caché e inverso |
| Cómo se hace transparente | Regla REDIRECT en PREROUTING |
| Proxy frente a cortafuegos | Aplicación, URL y caché frente a red y transporte |
| Orden de Squid para validar | `squid -k parse` |

## 6. Conmutación

| Pregunta | Respuesta |
| --- | --- |
| Hub | Repite a todos: un dominio de colisión |
| Hub apilable | Varios repetidores como uno solo; sigue un dominio de colisión |
| Puente | Aprende MAC y segmenta colisiones |
| Puente transparente y remoto | Los equipos no lo notan; une LAN por una WAN |
| Conmutador frente a puente | Más puertos y reenvío por hardware |
| Comportamiento del conmutador | Aprende, reenvía, inunda o filtra |
| Cut-through | Lee solo la MAC de destino |
| Store-and-forward | Lee la trama completa y comprueba el CRC |
| Fragment-free | Lee los primeros 64 bytes |
| Conmutación de nivel 3 y 4 | Encaminamiento IP; decisión por puertos y sesiones |
| Qué evita el Spanning Tree | Bucles de nivel 2 |
| Estados del STP clásico | Bloqueo, escucha, aprendizaje y reenvío |
| Convergencia de STP y de RSTP | 30 a 50 segundos; segundos |

## 7. VLAN

| Pregunta | Respuesta |
| --- | --- |
| Qué es una VLAN | Un dominio de difusión lógico |
| Puerto de acceso y troncal | Una VLAN sin etiqueta; varias etiquetadas |
| Etiqueta 802.1Q | 4 bytes, con 12 bits de identificador |
| VLAN utilizables | 4 094 |
| VLAN nativa | Cruza el troncal sin etiqueta; debe coincidir |
| VLAN estática y dinámica | Fija por puerto; por MAC o identidad |
| Cómo se cruza de una VLAN a otra | Router en un solo enlace o conmutador de nivel 3 |
| Troncal frente a agregación | Varias VLAN en un enlace; varios enlaces como uno |
| Protocolo de agregación | LACP, IEEE 802.1AX |
| Velocidad de una conexión en una agregación | La de un solo enlace |
| VLAN hopping | Salto entre VLAN por negociación o doble etiqueta |
| Defensa contra el hopping | Apagar la negociación y usar nativa sin uso |
| Riesgo de VTP | Una revisión alta puede borrar la base de VLAN |

## 8. Wi-Fi y encaminamiento

| Pregunta | Respuesta |
| --- | --- |
| Wi-Fi 4, 5, 6 y 7 | 802.11n, ac, ax y be |
| Modos de funcionamiento | Infraestructura y ad-hoc |
| Canales sin solape en 2,4 GHz | 1, 6 y 11 |
| Seguridad mínima actual | WPA2 con AES; WPA3 es el actual |
| Qué no es seguridad | Ocultar el SSID y filtrar por MAC |
| Riesgos principales | Escucha, AP falso, gemelo malvado, contraseña débil, WPS, desautenticación |
| Defensa de empresa | 802.1X con RADIUS, tramas de gestión protegidas, invitados separados |
| Tabla de rutas | Destino, máscara, puerta, interfaz y métrica |
| Regla de elección de ruta | Coincidencia más larga |
| Distancia administrativa | 0, 1, 90, 110 y 120: conectada, estática, EIGRP, OSPF y RIP |
| Vector de distancia y estado de enlace | RIP, IGRP, EIGRP; OSPF, IS-IS |
| Métrica de RIP y de OSPF | Saltos (máximo 15); coste por ancho de banda |
| Convergencia | Tiempo en que toda la red conoce un cambio |
| Protocolo enrutable | Lleva dirección de red que el router entiende |
| Unicast, broadcast y multicast | Un equipo, todos y un grupo suscrito |
| Estándar y wildcard de las ACL | 1-99 solo origen; 100-199 el resto; máscara invertida |
| Final de una ACL | Denegar implícito |

## 9. Empresa

| Pregunta | Respuesta |
| --- | --- |
| Dimensionar un ámbito DHCP | Pico de dispositivos más 30 por ciento y la máscara que lo cubra |
| Concesión de invitados y de oficina | Corta (horas) y larga (días) |
| Continuidad del DNS | Al menos dos servidores en máquinas distintas |
| Continuidad del DHCP | Dos servidores en reparto o failover |
| Router software frente a hardware | Flexible y barato al inicio frente a previsible y con soporte |
| Coste real del software | Hay que contar las horas de administración |
| Por qué segmentar | Limita el daño y permite aplicar política |
| NGFW frente a proxy | Integra aplicaciones y licencias frente a caché y filtrado |
| Qué es el Wi-Fi para la normativa | Un acceso a la red dentro del alcance de la seguridad |
| Documentación para dirección | Diagrama, inventario, plan de direccionamiento y contactos |
