---
title: "Mercado de comunicaciones · Tarjetas de repaso"
description: "Tarjetas de repaso de la unidad Mercado de comunicaciones."
section: diseno
unit: mercado
kind: tarjetas
order: 15
tags:
  - redes
  - mercado
  - tarjetas
---

# Mercado de comunicaciones · Tarjetas de repaso

> **Cómo usarlas.** Tapa la columna de la derecha, contesta en voz alta y comprueba. Las que
> falles, márcalas y vuelve a ellas en 1, 3 y 7 días: el repaso espaciado es lo que mueve las
> cifras a la memoria larga. Son 72 tarjetas en 8 bloques.

## 1. Modelos, redes y organismos

| Pregunta | Respuesta |
| --- | --- |
| Diferencia entre LAN, MAN y WAN | Extensión y propiedad: edificio o campus privado, ciudad con operador local, país u operador |
| Siete niveles OSI, de abajo arriba | Física, enlace, red, transporte, sesión, presentación, aplicación |
| PDU de los niveles 1 a 4 | Bit, trama, paquete, segmento |
| Capas de TCP/IP | Acceso a la red, Internet, transporte y aplicación |
| ¿En qué nivel trabaja un conmutador y en cuál un router? | Conmutador en 2, router en 3 |
| Quién publica los RFC, la familia 802, las recomendaciones G y las normas EN | IETF, IEEE, ITU-T y CENELEC |
| Cinco piezas de un sistema de comunicación | Fuente, transmisor, medio, receptor y destino |

## 2. Transmisión

| Pregunta | Respuesta |
| --- | --- |
| Tres sentidos de flujo | Símplex, semidúplex y dúplex |
| Por qué todo es serie a alta velocidad | El paralelo sufre skew: los bits se desalinean |
| Cuántos dB son el doble de potencia, y cuántos la décima parte | 3 dB y 10 dB |
| Fórmula del dBm | 10 x log10 (P / 1 mW) |
| Potencia de 1 W en dBm | 30 dBm |
| Fórmula de Nyquist | C = 2 x B x log2 (M), canal sin ruido |
| Fórmula de Shannon | C = B x log2 (1 + S/N), con S/N en lineal |
| Ruido térmico por hercio a 290 K | Menos 174 dBm |
| Distorsión de retardo: efecto | Ensancha los pulsos e interfiere con el bit siguiente |
| NEXT y FEXT | Diafonía en el extremo cercano y en el lejano |
| Qué es el BER | Bits erróneos entre bits transmitidos |
| Muestreo de la voz telefónica | 8 000 muestras por segundo x 8 bits = 64 kb/s |

## 3. Codificación y multiplexación

| Pregunta | Respuesta |
| --- | --- |
| Manchester: ventaja y coste | Recupera el reloj y no tiene continua, a costa de doble ancho de banda |
| Código de 10BASE-T, 100BASE-TX y 1000BASE-T | Manchester, 4B/5B con MLT-3 y PAM-5 |
| ASK, FSK, PSK, QAM | Modulan amplitud, frecuencia, fase, y amplitud con fase |
| Bits por símbolo de 16-QAM, 256-QAM y 1024-QAM | 4, 8 y 10 |
| FDM, TDM, WDM | Reparten frecuencia, tiempo y longitud de onda |
| E1 y T1 | 2,048 Mb/s con 32 intervalos y 1,544 Mb/s con 24 canales |
| STM-1 | 155,52 Mb/s |

## 4. Cobre y fibra

| Pregunta | Respuesta |
| --- | --- |
| Enlace permanente, canal y latiguillos | 90 m, 100 m y hasta 10 m |
| Cat 6A: ancho de banda y uso | 500 MHz y 10GBASE-T a 100 m |
| Cat 6: alcance a 10 Gb/s | 55 m |
| Cat 8.1: uso | 25GBASE-T hasta 30 m |
| Qué significa S/FTP | Malla global y lámina por cada par |
| Atenuación del monomodo en 1310 y 1550 nm | 0,35 y 0,20 dB/km |
| Atenuación del multimodo en 850 nm | Unos 3,5 dB/km |
| Alcance a 10G de OM3 y OM4 | 300 m y 400 m |
| Pérdida de un conector y de un empalme de fusión | 0,3 dB y 0,1 dB |
| Reserva de diseño en un enlace óptico | 3 dB |
| Fórmula del margen óptico | Salida menos pérdidas menos sensibilidad menos reserva |
| Qué conectores no se pueden unir | APC (verde) con UPC |

## 5. Medios inalámbricos y enlace de datos

| Pregunta | Respuesta |
| --- | --- |
| Canales de 2,4 GHz sin solaparse en Europa | 3 |
| Altitud de GEO y de LEO | 35 786 km y 500 a 2 000 km |
| Pérdida al duplicar distancia o frecuencia | 6 dB |
| Trama Ethernet: mínimo y máximo | 64 y 1 518 bytes (1 522 con VLAN) |
| Qué hace el CRC y qué no | Detecta errores por división polinómica; no corrige |
| Polinomio del CRC-32 de Ethernet | 0x04C11DB7 |
| Parada y espera: eficiencia | Tt / (Tt + 2Tp) |
| Control de flujo frente a control de congestión | Flujo protege al receptor; congestión protege a la red |

## 6. IP, enrutamiento y transporte

| Pregunta | Respuesta |
| --- | --- |
| Hosts útiles con n bits de host | 2 elevado a n menos 2 |
| Rangos privados del RFC 1918 | 10.0.0.0/8, 172.16.0.0/12 y 192.168.0.0/16 |
| APIPA y loopback | 169.254.0.0/16 y 127.0.0.0/8 |
| Hosts útiles de /24, /26, /27, /28 y /30 | 254, 62, 30, 14 y 2 |
| Cabeceras IPv4, IPv6, TCP y UDP | 20, 40, 20 y 8 bytes |
| Prefijos IPv6: global, link-local y multicast | 2000::/3, fe80::/10 y ff00::/8 |
| OSPF: protocolo, hello y dead | IP 89, 10 s y 40 s |
| BGP: transporte y qué decide | TCP 179 y política entre sistemas autónomos |
| Rangos de puertos | 0 a 1023 conocidos, 1024 a 49151 registrados, 49152 a 65535 dinámicos |
| Qué hace PAT | Comparte una IP pública usando el puerto |

## 7. Seguridad

| Pregunta | Respuesta |
| --- | --- |
| Cinco propiedades de una comunicación segura | Confidencialidad, integridad, autenticación, no repudio y disponibilidad |
| Por qué se combina simétrica y asimétrica | La asimétrica acuerda la clave y la simétrica cifra rápido |
| Cuántas claves simétricas para N usuarios | N(N-1)/2 |
| Qué da una firma digital | Autenticación, integridad y no repudio; no confidencialidad |
| Qué liga un certificado X.509 | Una identidad con una clave pública, firmado por una CA |
| Versiones de TLS vigentes | 1.2 y 1.3 |
| IPsec: ESP, AH e IKE | Protocolo 50 (cifra y autentica), 51 (solo autentica), UDP 500 |
| Zonas de una arquitectura con DMZ | Externa, DMZ e interna, con denegación por defecto |

## 8. Equipos, contratación y empresa

| Pregunta | Respuesta |
| --- | --- |
| Qué rompe cada equipo: concentrador, conmutador, router | Ninguno, dominio de colisión y dominio de broadcast |
| Diferencia entre CIR y PIR | Garantizado frente a máximo con ráfaga |
| Corte anual con 99, 99,9 y 99,99 por ciento | 87,6 h, 8,76 h y 52,6 min |
| Disponibilidad en serie y en paralelo | Producto de las disponibilidades; 1 menos el producto de las indisponibilidades |
| Fórmula con MTBF y MTTR | MTBF / (MTBF + MTTR) |
| CAPEX y OPEX | Inversión inicial y gasto recurrente |
| Cómo se compara una oferta con otra | TCO a cinco años y matriz ponderada con pesos fijados antes |
| Qué pedir antes de comprar un equipo | Fechas de fin de venta y de soporte, por escrito |
