---
title: "Formulario y tablas"
description: "Cómo usarlo. Es la hoja de consulta rápida: fórmulas, tablas y cifras que se usan a menudo. Cada bloque lleva una nota de cómo se plantea el problema, porque la fórmula sin el enunciado típico no sirve de nada."
section: indice
kind: portada
order: 4
tags:
  - redes
  - formulario
  - indice
---

# Formulario y tablas

> **Cómo usarlo.** Es la hoja de consulta rápida: fórmulas, tablas y cifras que se usan a menudo. Cada
> bloque lleva una nota de **cómo se plantea** el problema, porque la fórmula sin el enunciado típico
> no sirve de nada.

## 1. Decibelios

El decibelio compara dos potencias de forma logarítmica, para poder sumar en vez de multiplicar.

```text
Ganancia o perdida (dB) = 10 * log10 (P2 / P1)

Para tensiones o corrientes:  dB = 20 * log10 (V2 / V1)
```

Valores que hay que tener automatizados:

| dB | Factor de potencia | Lectura rápida |
| --- | --- | --- |
| 3 | 2 | el doble, o la mitad si es negativo |
| 6 | 4 | cuatro veces, o un cuarto |
| 10 | 10 | diez veces, o una décima |
| 20 | 100 | cien veces, o una centésima |
| 30 | 1000 | mil veces, o una milésima |

Regla mental: **cada 3 dB es el doble, cada 10 dB es diez veces**. Un enlace que pierde 23 dB
pierde aproximadamente doscientas veces su potencia (20 dB de cien, más 3 dB de dos).

### Presupuesto de enlace

```text
Margen = Potencia transmitida - Perdidas + Ganancias de antena - Sensibilidad del receptor
```

Si el margen sale positivo, el enlace funciona. Si sale negativo, no llega, por mucha potencia
que anuncie el fabricante.

Ejemplo: transmisor de 20 dBm, pérdida en cable y conectores de 3 dB, dos antenas de 12 dBi,
receptor con sensibilidad de menos 75 dBm.

```text
Margen = 20 - 3 + 12 + 12 - (-75) = 116 dB
```

### Pérdidas típicas en fibra (valores de referencia)

| Elemento | Pérdida orientativa |
| --- | --- |
| Fibra monomodo a 1310 nm | 0,35 dB por km |
| Fibra monomodo a 1550 nm | 0,20 a 0,25 dB por km |
| Fibra multimodo a 850 nm | 3,0 a 3,5 dB por km |
| Conector | 0,3 a 0,5 dB |
| Empalme por fusión | 0,1 dB |

**Cómo se plantea.** "Calcule el margen de potencia de un enlace de X km con N conectores" o
"¿cuántos empalmes admite el presupuesto?". Es una suma con signos: el error típico es restar
las ganancias.

## 2. Capacidad del canal

```text
Nyquist (canal ideal, sin ruido):   C = 2 * B * log2(M)
Shannon (canal con ruido):          C = B * log2(1 + S/N)
```

- `C` en bits por segundo, `B` en hercios, `M` niveles de señal.
- `S/N` es la relación señal a ruido **en lineal**, no en decibelios. Para pasar de dB a lineal:
  `S/N = 10^(dB/10)`.

Ejemplo: un canal de 3 kHz con relación señal a ruido de 30 dB.

```text
S/N lineal = 10^(30/10) = 1000
C = 3000 * log2(1001) = 3000 * 9,97 = unos 29 900 bps
```

**Cómo se plantea.** "Un canal de X kHz con Y dB de relación señal a ruido, ¿qué capacidad
máxima tiene?". El 90 por ciento de los fallos son dos: usar los decibelios directamente en la
fórmula, o confundir Nyquist con Shannon. Nyquist no tiene ruido; Shannon sí.

## 3. Direccionamiento IPv4 y subredes

### Tabla de prefijos

| Prefijo | Máscara | Direcciones | Hosts útiles (2^h - 2) |
| --- | --- | --- | --- |
| /30 | 255.255.255.252 | 4 | 2 |
| /29 | 255.255.255.248 | 8 | 6 |
| /28 | 255.255.255.240 | 16 | 14 |
| /27 | 255.255.255.224 | 32 | 30 |
| /26 | 255.255.255.192 | 64 | 62 |
| /25 | 255.255.255.128 | 128 | 126 |
| /24 | 255.255.255.0 | 256 | 254 |
| /23 | 255.255.254.0 | 512 | 510 |
| /22 | 255.255.252.0 | 1024 | 1022 |
| /21 | 255.255.248.0 | 2048 | 2046 |
| /20 | 255.255.240.0 | 4096 | 4094 |
| /16 | 255.255.0.0 | 65536 | 65534 |

### Las tres cuentas de siempre

```text
Subredes posibles  = 2^n        (n = bits tomados de la parte de host)
Hosts por subred   = 2^h - 2    (h = bits que quedan para hosts)
Tamano del bloque  = 256 - valor del octeto de la mascara
```

El `-2` descuenta la dirección de red (todos los bits de host a cero) y la de difusión (todos a
uno). Con /31 y /32 no se aplica la regla clásica, pero en estos materiales se usa la fórmula
general.

### Procedimiento para dividir una red, paso a paso

1. Escribe la dirección y el prefijo en binario solo en el octeto que cambia.
2. Calcula el tamaño del bloque: `256 - máscara`.
3. Enumera las subredes sumando el bloque desde cero.
4. Para cada subred, la primera dirección es la de red, la última la de difusión, y el resto son
   hosts.
5. Comprueba: la dirección de red siempre es múltiplo del tamaño del bloque.

Ejemplo: dividir 192.168.10.0/24 en cuatro subredes iguales.

```text
Necesito 4 subredes -> 2^2 = 4, tomo 2 bits -> prefijo /26
Bloque = 256 - 192 = 64

Subred 1: 192.168.10.0/26     hosts 192.168.10.1  a 192.168.10.62    difusion .63
Subred 2: 192.168.10.64/26    hosts 192.168.10.65 a 192.168.10.126   difusion .127
Subred 3: 192.168.10.128/26   hosts 192.168.10.129 a 192.168.10.190  difusion .191
Subred 4: 192.168.10.192/26   hosts 192.168.10.193 a 192.168.10.254  difusion .255
```

### VLSM, el orden importa

Con máscaras distintas se asignan **primero las subredes más grandes**. Si empiezas por la
pequeña, fragmentas el espacio y no cabe la grande.

Ejemplo: 192.168.20.0/24 para 100, 50, 25 y 10 hosts.

```text
100 hosts -> /25 (126 utiles)  -> 192.168.20.0/25      .0   a .127
 50 hosts -> /26 (62 utiles)   -> 192.168.20.128/26    .128 a .191
 25 hosts -> /27 (30 utiles)   -> 192.168.20.192/27    .192 a .223
 10 hosts -> /28 (14 utiles)   -> 192.168.20.224/28    .224 a .239
```

**Cómo se plantea.** "¿Cuántas subredes se obtienen al aplicar la máscara X?", "¿cuál es la
dirección de difusión?", "¿es válida la dirección 192.168.1.64/26 como host?". Practica hasta
que puedas hacerlo en menos de un minuto y sin calculadora.

### Rangos que hay que reconocer al vuelo

| Rango | Uso |
| --- | --- |
| 10.0.0.0/8 | privado, clase A |
| 172.16.0.0/12 | privado, clase B (de 172.16 a 172.31) |
| 192.168.0.0/16 | privado, clase C |
| 169.254.0.0/16 | link local, aparece cuando falla DHCP |
| 127.0.0.0/8 | loopback |
| 224.0.0.0/4 | multicast |
| 240.0.0.0/4 | reservado, experimental |

**Truco de diagnóstico**: si un equipo muestra una dirección que empieza por 169.254, no ha
obtenido respuesta del servidor DHCP. Es la causa número uno de "no tengo internet" en una red
con DHCP.

## 4. Gestión de proyectos

### PERT, tres valores

```text
Duracion esperada = (Optimista + 4 * Mas probable + Pesimista) / 6
Desviacion tipica = (Pesimista - Optimista) / 6
```

Ejemplo: optimista 4 días, probable 6, pesimista 14.

```text
t = (4 + 24 + 14) / 6 = 7 dias
sigma = (14 - 4) / 6 = 1,67 dias
```

### CPM, fechas y holguras

```text
ES = max(EF de las predecesoras)      EF = ES + duracion
LF = min(LS de las sucesoras)         LS = LF - duracion
Holgura total = LS - ES  (o LF - EF)
```

Camino crítico: la cadena de tareas con **holgura cero**. Cualquier retraso en ella retrasa el
proyecto entero; cualquier retraso en las demás se absorbe.

**Cómo se plantea.** "Calcule la duración total del proyecto", "¿qué tarea puede retrasarse sin
afectar al plazo?", "¿cuál es el camino crítico?". Dibuja la red en papel, no lo intentes de
cabeza.

### Valor ganado, para el seguimiento

```text
CV (desviacion de coste) = EV - AC      positivo es bueno
SV (desviacion de plazo) = EV - PV      positivo es bueno
CPI = EV / AC                           mayor que 1 es eficiente
SPI = EV / PV                           mayor que 1 va adelantado
EAC = BAC / CPI                         estimacion del coste final
```

Donde PV es el valor planificado, EV el valor ganado por el trabajo hecho y AC el coste real.
Si CPI vale 0,8, cada euro presupuestado se está convirtiendo en ochenta céntimos de trabajo:
el proyecto acabará costando un veinticinco por ciento más.

## 5. Electricidad y SAI

```text
Potencia activa (W)      = V * I * cos(phi)
Potencia aparente (VA)   = V * I
Autonomia (h)            = (Capacidad de bateria en Ah * V de bateria * rendimiento) / Potencia de carga
```

Al dimensionar un SAI, el dato del fabricante en voltiamperios no es la potencia útil: hay que
aplicar el factor de potencia (0,8 o 0,9 habitual). Un SAI de 1000 VA con factor 0,8 entrega
800 W reales, y conviene no pasar del setenta u ochenta por ciento de esa cifra.

Ejemplo: carga de 400 W, SAI de 1500 VA con factor 0,8, es decir 1200 W.

```text
Carga utilizable al 80 por ciento = 960 W
Margen disponible = 560 W
```

**Cómo se plantea.** "¿Cuántos vatios admite este SAI?", "¿qué autonomía tendrá?". Y en el
apartado de protecciones: qué protege el magnetotérmico (sobrecarga y cortocircuito) y qué
protege el diferencial (fuga a tierra, personas).

## 6. Disponibilidad y rendimiento

```text
Disponibilidad = MTBF / (MTBF + MTTR)
Tiempo de transferencia (s) = Tamano del fichero (bits) / Caudal (bps)
Utilizacion de un enlace (%) = Trafico real / Capacidad * 100
```

Ejemplo de disponibilidad: MTBF de 2000 horas, MTTR de 4 horas.

```text
A = 2000 / 2004 = 0,998 = 99,8 por ciento
```

Equivalencias útiles de disponibilidad anual:

| Disponibilidad | Caída al año |
| --- | --- |
| 99 por ciento | 3,65 días |
| 99,9 por ciento | 8,76 horas |
| 99,99 por ciento | 52,6 minutos |
| 99,999 por ciento | 5,26 minutos |

**Cómo se plantea.** "¿Cuánto tarda en transferirse un fichero de X con un enlace de Y?", "¿qué
disponibilidad tiene un equipo que falla una vez al año y tarda cuatro horas en repararse?".
No olvides convertir megabytes a megabits multiplicando por ocho.

## 7. Tablas que se memorizan

### Puertos

| Puerto | Servicio | Transporte |
| --- | --- | --- |
| 20 y 21 | FTP (datos y control) | TCP |
| 22 | SSH y SFTP | TCP |
| 23 | Telnet | TCP |
| 25 | SMTP | TCP |
| 53 | DNS | UDP y TCP |
| 67 y 68 | DHCP servidor y cliente | UDP |
| 69 | TFTP | UDP |
| 80 | HTTP | TCP |
| 110 | POP3 | TCP |
| 123 | NTP | UDP |
| 143 | IMAP | TCP |
| 161 | SNMP | UDP |
| 162 | SNMP TRAP | UDP |
| 389 | LDAP | TCP |
| 443 | HTTPS | TCP |
| 445 | SMB | TCP |
| 3389 | RDP | TCP |

### Categorías de par trenzado

| Categoría | Clase | Frecuencia | Distancia y uso |
| --- | --- | --- | --- |
| Cat 5e | D | 100 MHz | 100 m, 1 Gb/s |
| Cat 6 | E | 250 MHz | 100 m a 1 Gb/s, 10 Gb/s hasta 55 m |
| Cat 6A | EA | 500 MHz | 100 m, 10 Gb/s |
| Cat 7 | F | 600 MHz | 100 m, 10 Gb/s, conectores no RJ45 |
| Cat 7A | FA | 1000 MHz | 100 m, 10 Gb/s con margen |
| Cat 8.1 | I | 2000 MHz | 30 m, 25 Gb/s |
| Cat 8.2 | II | 2000 MHz | 30 m, 40 Gb/s |

### Distancias de cableado estructurado

| Tramo | Máximo | Nota |
| --- | --- | --- |
| Enlace permanente (horizontal) | 90 m | del panel de parcheo a la toma |
| Canal completo | 100 m | incluye latiguillos en ambos extremos |
| Latiguillos | 10 m en total | reparto libre entre los dos |
| Backbone de edificio (cobre) | 500 m | fibra si se supera |
| Backbone de campus (fibra multimodo) | 2000 m | según norma y fibra |

### Normas IEEE 802 de uso habitual

| Norma | Qué es |
| --- | --- |
| 802.1D | Spanning Tree |
| 802.1Q | etiquetado de VLAN |
| 802.1X | autenticación de puerto |
| 802.2 | subcapa LLC |
| 802.3 | Ethernet |
| 802.3af / at / bt | PoE, PoE+ y PoE++ |
| 802.11 | red local inalámbrica |
| 802.15 | red de área personal, Bluetooth |
| 802.16 | acceso inalámbrico de banda ancha, WiMAX |

### Códigos de colores del par trenzado

| Pin | T568A | T568B |
| --- | --- | --- |
| 1 | blanco verde | blanco naranja |
| 2 | verde | naranja |
| 3 | blanco naranja | blanco verde |
| 4 | azul | azul |
| 5 | blanco azul | blanco azul |
| 6 | naranja | verde |
| 7 | blanco marrón | blanco marrón |
| 8 | marrón | marrón |

Cable directo: misma norma en los dos extremos. Cable cruzado: una norma en cada extremo. Hoy el
cruzado solo hace falta entre equipos antiguos, porque las tarjetas modernas negocian
automáticamente (Auto MDI-X).

## 8. Coste, rentabilidad y contratación

```text
Payback (anos)       = Inversion / Ahorro anual
VAN                  = -Inversion + suma de Flujo_t / (1 + r) elevado a t
TIR                  = tasa r que hace el VAN igual a cero
TCO a n anos         = CAPEX + n x (soporte + energia + administracion) + coste de paradas
Precio con margen m  = Coste / (1 - m)        no es Coste x (1 + m)
Base de licitacion   = Ejecucion material + gastos generales (13 a 17 %) + beneficio (6 %), sin IVA
Precio descompuesto  = material + mano de obra + medios auxiliares (2 %), mas GG y beneficio
Coste de una incidencia = tecnico + usuarios x coste hora x horas de parada
```

Ejemplo de VAN: 12 000 euros de inversión y 4 000 de ahorro durante 5 años con una tasa del 8 por
ciento. Factor de anualidad (1 - 1,08 elevado a menos 5) / 0,08 = 3,993; VAN = -12 000 + 4 000 x 3,993 =
3 971 euros, positivo. TIR de unos 19,9 por ciento.

Ejemplo de margen: coste de 19 000 euros y margen del 15 por ciento sobre el precio: 19 000 / 0,85 =
22 353. Con un recargo del 15 por ciento sobre el coste saldrían 21 850, y el margen real sería del 13.

**Cómo se plantea.** "¿Es rentable el proyecto?", "¿qué oferta es mejor a cinco años?", "¿cuál es
el precio de venta con un margen dado?". En ofertas se usa una matriz ponderada: pesos que suman 100,
puntuaciones de 1 a 5, total entre 100.

## 9. Planificación avanzada, calidad y disponibilidad en cadena

```text
Pendiente de aceleracion = (coste acelerada - coste normal) / (dias normal - dias acelerada)
Fecha de pedido          = fecha de necesidad - plazo de entrega - margen
Valor ganado             = EV / PV (SPI) y EV / AC (CPI); EAC = BAC / CPI
Proyeccion si fue puntual = EAC = AC + (BAC - EV)
Disponibilidad en serie    = A1 x A2 x A3
Disponibilidad en paralelo = 1 - (1 - A1) x (1 - A2)
Exposicion de un riesgo  = probabilidad x impacto
Tendencia geometrica     = meses = ln(final / actual) / ln(1 + tasa);  duplicacion = 70 / tasa (%)
Tendencia lineal         = meses = (final - actual) / incremento mensual
```

Ejemplos: tres equipos al 99,9 por ciento en serie dan 99,70; dos al 99 en paralelo dan 99,99.
Una tarea de 5 días a 3 000 euros que acelerada a 3 días cuesta 3 500 tiene una pendiente de
250 euros por día. Una cadena de calidad se mide con indicadores (fórmula, meta, frecuencia y
dueño): por ejemplo, aceptación a la primera = armarios aceptados / armarios entregados.

## 10. Servicios, gestión y seguridad

```text
Trafico (bit/s)            = (octetos2 - octetos1) x 8 / (t2 - t1)
Vuelta de un contador de 32 bits = 2^32 x 8 / velocidad del enlace   (a 100 Mb/s, unos 344 s)
Umbral RMON en bytes       = porcentaje x velocidad / 8 x intervalo   (cabe en 2 147 483 647)
Voz G.711 por Ethernet     = 218 bytes cada 20 ms = 87,2 kb/s por llamada;  G.729 = 31,2 kb/s
Camara de vigilancia       = bitrate x 86 400 / 8 = bytes por dia  (4 Mb/s = 43,2 GB)
Distancia con TDR          = c x NVP x t / 2
Magnitud de calor          = 1 kW electrico exige 1 kW de refrigeracion (3 412 BTU/h por kW)
Ocupacion de canalizacion  = suma de secciones de cables / seccion de la bandeja  (maximo 40 a 50 %)
SAI                        = potencia con margen / (kVA x factor de potencia) <= 80 %
Bateria (Ah)               = (P x t) / (rendimiento x V) x 1,25
Claves simetricas para N usuarios = N x (N - 1) / 2
Dimensionado de un ambito DHCP    = pico de dispositivos x 1,3, y la mascara que lo cubra
Guardia 24 x 7             = 8 760 h / horas productivas por persona (unas 5 o 6 personas)
```

| Dato | Valor |
| --- | --- |
| Puertos de gestión | SNMP 161 y 162 UDP, syslog 514 UDP y 6514 TCP, NTP 123 UDP, NFS 2049 |
| Prioridad de syslog | facility x 8 + severity |
| Retardo de voz | 150 ms, con jitter menor de 30 ms y pérdida menor del 1 por ciento |
| Disponibilidad | 99,9 por ciento son 8,76 horas al año; 99,99, 52,6 minutos |
| Matriz de prioridad | alto y alta = P1; medio y alta = P2; bajo y alta = P3; bajo y baja = P4 |
| Regla de copias | 3-2-1: tres copias, dos soportes, una fuera de la sede |
| ISO/IEC 27002:2022 | 93 controles; red: 8.20, 8.21, 8.22 |
| DSCP habituales | EF 46 voz, AF41 34 vídeo, CS3 24 señalización |

**Cómo se plantea.** "¿Qué tráfico hay en la interfaz?", "¿cabe el umbral en la alarma?", "¿cuánto
ancho de banda necesitan las llamadas?", "¿cuánto almacenamiento ocupan las cámaras?".

## 11. Reglas de bolsillo

- Los dos tercios de las averías de una red local son físicas: cable, conector, toma, latiguillo.
- Un enlace por encima del setenta por ciento de utilización sostenida está pidiendo ampliación.
- Si el ping a la puerta de enlace funciona y el ping a internet no, el problema está fuera de
  la red local o en la traducción de direcciones.
- Si el ping a la puerta de enlace no funciona pero hay enlace, mira direccionamiento, VLAN y
  máscara antes de tocar el cable.
- Un switch con Spanning Tree mal configurado puede tardar treinta segundos en converger después
  de un cambio: parece una avería y es un temporizador.
- Fibra: nunca mires el extremo con el ojo, usa el instrumento. La luz infrarroja no se ve y sí
  daña la retina.
