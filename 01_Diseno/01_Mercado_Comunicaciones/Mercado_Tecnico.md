---
title: "Análisis del mercado de productos de comunicaciones"
description: "Resumen técnico de la unidad Mercado de comunicaciones."
section: diseno
unit: mercado
kind: tecnico
order: 12
tags:
  - redes
  - mercado
  - tecnico
  - modelo-osi
  - fibra
  - subredes
---

# Mercado de comunicaciones · Resumen técnico

> **Alcance.** Siete apartados en el orden de estudio, con las tablas de consulta, los cálculos clave resueltos, errores típicos y glosario.

## 1. Introducción a las comunicaciones y redes

### 1.1 LAN, MAN y WAN

Se clasifican por extensión y propiedad, no por tecnología.

| Criterio | LAN | MAN | WAN |
| --- | --- | --- | --- |
| Extensión | Edificio, hasta 1 km | Ciudad, hasta 50 km | País o continente |
| Propiedad | Privada | Operador local | Operador |
| Medio | Par trenzado y fibra multimodo | Fibra en anillos | Fibra, MPLS, satélite |
| Retardo | Menos de 1 ms | 1 a 5 ms | 10 a 150 ms |

WLAN es IEEE 802.11 y WPAN, IEEE 802.15. El programa de referencia cita IEEE 802.6 (DQDB) para MAN: está obsoleta y hoy se usan Ethernet de operador o MPLS.

### 1.2 Modelo OSI

| Nivel | Función | PDU | Ejemplos |
| --- | --- | --- | --- |
| 7 Aplicación | Servicio al usuario | Datos | HTTP, SMTP, SNMP |
| 6 Presentación | Sintaxis y cifrado | Datos | TLS, UTF-8 |
| 5 Sesión | Diálogo y puntos de control | Datos | RPC |
| 4 Transporte | Extremo a extremo, puertos | Segmento | TCP, UDP |
| 3 Red | Dirección lógica y encaminamiento | Paquete | IP, ICMP, OSPF |
| 2 Enlace | Tramas, MAC y errores | Trama | Ethernet, PPP |
| 1 Física | Bits, voltaje y luz | Bit | 1000BASE-T, fibra |

ISO/IEC 7498-1:1994. El nivel 2 no encamina y el nivel 3 no corrige errores.

### 1.3 Modelo TCP/IP y correspondencia

Cuatro capas: acceso a la red, internet, transporte y aplicación. Aplicación, presentación y sesión de OSI caen en aplicación; física y enlace, en el acceso a la red. IPv4 es el RFC 791 y TCP el RFC 793, actualizado por el RFC 9293.

```text
   OSI                          TCP/IP
   7 Aplicacion  \
   6 Presentacion >-----------> Aplicacion
   5 Sesion      /
   4 Transporte ---------------> Transporte
   3 Red ----------------------> Internet
   2 Enlace --------------------> Acceso a la red
   1 Fisica
```

### 1.4 Organismos de estandarización

| Organismo | Ámbito | Documentos citados |
| --- | --- | --- |
| IETF | Internet | RFC 791, 9293, 8446, 3022 |
| ISO/IEC | Normas internacionales | ISO/IEC 7498-1:1994, 11801-1:2017 |
| ITU-T | Telecomunicación | X.200, G.652, G.694.2 |
| IEEE | Redes locales | 802.3, 802.11, 802.1Q, 802.3bt |
| TIA | Cableado y centros de datos | ANSI/TIA-568.2-E, TIA-942 |
| CENELEC | Normalización europea | UNE-EN 50173, 50174, 50346 |
| UNE (AENOR) | Adopción española | UNE-EN 50173-1:2018, UNE 157001:2014 |

El programa de referencia enumera "ICT" junto a IETF, ISO e ITU sin desarrollarlo. Lo más probable es que remita a la normativa española de infraestructuras comunes de telecomunicaciones (hoy el RD 346/2011), que es un reglamento y no un organismo de normalización [interpretación, el programa de referencia no lo aclara].

### 1.5 Tareas de un sistema de telecomunicaciones

Un sistema de comunicación tiene cinco piezas: fuente, transmisor, medio, receptor y destino. Todo lo demás de la unidad es qué hace falta para que esas cinco funcionen entre dos puntos.

```text
  Fuente --> Transmisor --> Medio de transmision --> Receptor --> Destino
  (PC)       (tarjeta de    (cable, fibra,           (tarjeta     (otro PC)
              red: bits a    aire)                    de red:
              senal)                                  senal a bits)
```

| Tarea | Qué resuelve | Dónde se hace |
| --- | --- | --- |
| Interfaz y generación de señal | Convertir bits en señal adecuada al medio | Nivel 1: tarjeta, transceptor |
| Sincronización | Saber dónde empieza y acaba cada bit y cada trama | Niveles 1 y 2 |
| Control del intercambio | Quién habla y cuándo | Nivel 2: control de acceso al medio |
| Detección y corrección de errores | Descubrir bits dañados y recuperarlos | Nivel 2 (CRC) y nivel 4 (TCP) |
| Control de flujo | No desbordar al receptor | Niveles 2 y 4 |
| Direccionamiento y encaminamiento | Identificar al destino y elegir camino | Niveles 2 (MAC) y 3 (IP) |
| Formato de mensajes | Que ambos extremos entiendan la estructura | Todos los niveles (cabeceras) |
| Seguridad | Confidencialidad, integridad y autenticación | Niveles 3 a 7 |
| Gestión de red | Configurar, vigilar y reparar | Nivel 7 (SNMP) |

Comunicarse a través de una red, y no por un cable directo, añade tres problemas: compartir el medio entre muchos equipos, encontrar al destino entre miles (de ahí las direcciones) y cruzar redes distintas (de ahí los routers). Una red de N equipos con enlaces directos necesitaría N(N-1)/2 cables: con 20 equipos, 190. Con un conmutador bastan 20.

## 2. Principios de transmisión de datos

### 2.1 Señales analógicas y digitales

La analógica es continua y se describe por amplitud, frecuencia y fase; la digital toma valores finitos y se describe por tasa de bits y código de línea. Por Fourier el ancho de banda crece con la tasa de bits: un Cat 5e de 100 MHz no transporta 10GBASE-T.

Datos y señales no son lo mismo: los datos son la información (un texto, una voz) y la señal es su representación física (voltaje, luz, onda de radio). Hay cuatro combinaciones, y las cuatro existen:

| Datos | Señal | Técnica | Ejemplo |
| --- | --- | --- | --- |
| Digitales | Digital | Código de línea | Ethernet por cobre |
| Digitales | Analógica | Modulación | Wi-Fi, módem, radioenlace |
| Analógicos | Digital | Digitalización (PCM) | Telefonía digital, audio en CD |
| Analógicos | Analógica | Modulación | Radio FM clásica |

**Ventajas de la transmisión digital.** Se regenera en vez de amplificar: un repetidor digital reconstruye los bits y el ruido no se acumula; uno analógico amplifica señal y ruido a la vez. Admite detección y corrección de errores, cifrado, compresión y multiplexación por tiempo con el mismo hardware. Inconveniente: necesita más ancho de banda y exige sincronización exacta.

**Espectro acústico.** El oído humano percibe de 20 Hz a 20 kHz; la voz inteligible ocupa de 300 a 3 400 Hz, y por eso la telefonía reserva 4 kHz por canal. Es la razón de las 8 000 muestras por segundo del apartado 2.7.

### 2.2 Modos de transmisión, flujo y direccionamiento

**Sentido del flujo.**

| Modo | Sentido | Ejemplo |
| --- | --- | --- |
| Símplex | Siempre en un sentido | Radio y televisión, sensor que solo emite |
| Semidúplex | En ambos, pero no a la vez | Walkie-talkie, Ethernet con concentrador |
| Dúplex (full duplex) | En ambos a la vez | Teléfono, Ethernet con conmutador |

**Serie y paralelo.** En serie los bits van uno tras otro por un solo canal (Ethernet, USB, SATA, fibra); en paralelo viajan varios a la vez por hilos distintos (buses internos). El paralelo parecía más rápido, pero a alta frecuencia cada hilo llega con un retardo algo distinto (skew) y los bits se desalinean: por eso a larga distancia y alta velocidad todo es serie, y la velocidad se gana con más frecuencia o con varios canales serie independientes (1000BASE-T usa cuatro pares, cada uno en serie).

**Direccionamiento.** Cada nivel identifica de forma distinta, y conviene no mezclarlos:

| Nivel | Dirección | Identifica | Alcance |
| --- | --- | --- | --- |
| 2 | MAC, 48 bits | Una interfaz de red | Solo la red local |
| 3 | IP, 32 o 128 bits | Un equipo en una red | Toda la red, enrutable |
| 4 | Puerto, 16 bits | Un programa en el equipo | Dentro del equipo |
| 7 | Nombre (DNS) | Un servicio para personas | Global |

### 2.3 Atenuación, distorsión y ruido

- **Atenuación.** Pérdida de potencia con la distancia, en dB; en cobre crece con la frecuencia y la temperatura. Se compensa con repetidores o amplificadores.
- **Distorsión de la atenuación.** Como la atenuación depende de la frecuencia, las componentes de la señal se atenúan de forma desigual y la forma de onda cambia. Se corrige con ecualización, que amplifica más las frecuencias que más se pierden.
- **Distorsión de retardo.** Cada frecuencia viaja a distinta velocidad en un medio guiado, así que los componentes de un pulso llegan en instantes distintos y el pulso se ensancha. En digital es grave: un bit invade al siguiente (interferencia entre símbolos) y limita la velocidad máxima de un enlace. En fibra se llama dispersión.
- **Ruido térmico.** Agitación de los electrones por temperatura; es inevitable y uniforme en frecuencia. N = k x T x B, con k = 1,38 x 10 elevado a menos 23 J/K, T en kelvin y B el ancho de banda. A 290 K equivale a menos 174 dBm por hercio: en un canal de 100 MHz, menos 174 + 80 = menos 94 dBm. Es el suelo de ruido de cualquier receptor.
- **Ruido de intermodulación.** Aparece si el medio o un amplificador no es lineal: dos señales de frecuencias f1 y f2 generan productos en f1 + f2 y f1 - f2 que caen sobre otros canales. Típico de amplificadores saturados.
- **Diafonía.** Acoplamiento entre pares vecinos. NEXT se mide en el extremo cercano al transmisor y FEXT en el lejano; en la práctica, NEXT es el más severo porque la señal ajena aún no se ha atenuado.
- **Ruido impulsivo.** Pulsos breves y de gran amplitud, de origen externo: arranque de motores, relés, fluorescentes, descargas. No se puede predecir. A 10 Mb/s, un impulso de 1 ms estropea unos 10 000 bits.

**Efecto del ruido en una señal digital.** El receptor decide cada bit comparando con un umbral. El ruido desplaza el nivel recibido y, si cruza el umbral, el bit se interpreta mal. La métrica es la **tasa de error de bit (BER)**: bits erróneos entre bits transmitidos. Un BER de 10 elevado a menos 6 significa un error por cada millón de bits; los enlaces Ethernet de 10 Gb/s apuntan a 10 elevado a menos 12. Mejora con más SNR, menos velocidad o mejores códigos.

### 2.4 Decibelio y relación señal ruido

```text
dB   = 10 log10 (P1/P2)      dBm = 10 log10 (P/1 mW)
dBW  = 10 log10 (P/1 W)      SNR = 10 log10 (S/N)
```

Los dB se suman a lo largo de la cadena: 0 dBm, menos 3 dB y más 10 dB dejan 7 dBm.

### 2.5 Capacidad del canal

```text
Nyquist, canal ideal:   C = 2 x B x log2 (M)
Shannon, con ruido:     C = B x log2 (1 + S/N)     S/N en lineal
```

Ejercicio: 100 MHz y 25 dB de SNR. 25 dB son 316 en lineal; C = 100 000 000 × log2(317), unos 831 Mb/s. 1000BASE-T logra 1 Gb/s con cuatro pares de 250 Mb/s.

### 2.6 Codificación de datos digitales: códigos de línea

| Código | Idea | Uso |
| --- | --- | --- |
| NRZ | Un nivel por bit | Series, óptica interna |
| NRZI | Cambia de nivel para el 1 | USB, FDDI |
| Manchester | Transición en el centro del bit | 10BASE-T |
| 4B/5B | 4 bits a 5 símbolos | 100BASE-TX y FX |
| 8B/10B | 8 bits a 10 símbolos | 1000BASE-X |
| 64B/66B | 64 bits a 66 | 10G, 25G, 100G |
| MLT-3 | Tres niveles cíclicos | 100BASE-TX |
| PAM-5 | Cinco niveles | 1000BASE-T |

Manchester da una transición por bit, recupera el reloj y anula la continua, a costa de doble ancho de banda.

### 2.7 Codificación de datos analógicos y modulación

Hay dos caminos, según si la señal final es digital o analógica.

**Digitalizar un dato analógico (PCM).** Tres pasos: muestrear, cuantificar y codificar. El teorema de Nyquist dice que para recuperar una señal hay que muestrear al menos al doble de su frecuencia máxima.

```text
Voz telefonica:  4 kHz de canal x 2 = 8 000 muestras por segundo
                 8 bits por muestra -> 8 000 x 8 = 64 kb/s   (un canal DS0)
Audio de CD:     44 100 muestras/s x 16 bits x 2 canales = 1 411,2 kb/s
```

Cuantos más bits por muestra, menos error de cuantificación: cada bit extra añade unos 6 dB de relación señal a ruido. Esos 64 kb/s son la unidad con la que se construyen E1 y T1 (apartado 2.8). La delta modulation y sus variantes envían solo la diferencia entre muestras y ahorran bits a costa de más ruido.

**Modular para transmitir datos por un medio que no deja pasar la banda base** (aire, línea telefónica). Se varía una portadora:

| Técnica | Qué varía | Ejemplo |
| --- | --- | --- |
| ASK | Amplitud | Fibra por encendido y apagado, RFID |
| FSK | Frecuencia | Módems antiguos, telemetría |
| PSK | Fase | Wi-Fi básico, satélite |
| QAM | Amplitud y fase a la vez | Wi-Fi, cable, 4G y 5G |

Con QAM cada símbolo transporta varios bits: 16-QAM son 4 bits por símbolo, 256-QAM son 8, y Wi-Fi 6 llega a 1024-QAM (10 bits) y Wi-Fi 7 a 4096-QAM (12 bits). Velocidad en bits = velocidad de símbolo (baudios) x bits por símbolo. Con 1 MHz de ancho de banda y 16 niveles, Nyquist da 2 x 1 000 000 x 4 = 8 Mb/s. Más bits por símbolo exige más relación señal a ruido: por eso el Wi-Fi baja de modulación al alejarte del punto de acceso.

Las mismas ideas con otros nombres: AM, FM y PM son ASK, FSK y PSK aplicadas a una señal analógica, como en la radio.

### 2.8 Multiplexación

Multiplexar es compartir un medio entre varias comunicaciones. Se reparte una de las tres dimensiones del canal:

| Técnica | Reparte | Idea | Ejemplo |
| --- | --- | --- | --- |
| FDM | Frecuencia | Cada comunicación, su banda | Radio, televisión por cable, ADSL |
| TDM | Tiempo | Cada comunicación, su turno | E1, T1, SDH |
| WDM | Longitud de onda | Cada comunicación, su color de luz | CWDM, DWDM en fibra |

FDM y WDM son lo mismo en dominios distintos: la frecuencia de la luz es la inversa de su longitud de onda. TDM puede ser **síncrono** (turno fijo, aunque no haya datos) o **estadístico** (el turno se da a quien tiene datos, más eficiente y base de la conmutación de paquetes).

Ejemplo de TDM: un E1 mete 32 intervalos de 64 kb/s, 32 x 64 = 2 048 kb/s o 2,048 Mb/s; 30 van de voz y 2 de sincronismo y señalización. T1: 1,544 Mb/s y 24 canales. SDH: STM-1 de 155,52 y STM-16 de 2 488,32 Mb/s. CWDM según G.694.2: 18 longitudes de 1271 a 1611 nm cada 20 nm. DWDM: 100 o 50 GHz en banda C, con decenas de canales por fibra.

### 2.9 Conmutación

En circuitos se reserva el camino, con retardo constante y capacidad desperdiciada en silencios. En paquetes cada uno lleva dirección y se reenvía, con uso eficiente y retardo variable: IP y MPLS. En mensajes se almacena el mensaje entero antes de reenviar, como en el correo.

| Aspecto | Circuitos | Paquetes |
| --- | --- | --- |
| Reserva de recursos | Antes de hablar | Ninguna |
| Retardo | Constante | Variable |
| Eficiencia con tráfico a ráfagas | Baja | Alta |
| Ejemplo | Telefonía clásica | Internet |

La unidad «Proyecto de red» amplía ATM, Frame Relay y las topologías.

## 3. Medios guiados

### 3.1 Par trenzado

Dos conductores trenzados para que el ruido se cancele en el receptor diferencial; cuatro pares y conector 8P8C, llamado RJ45. En xx/yyy, la primera letra es el apantallamiento global y la segunda el de cada par: U/UTP sin apantallar, F/UTP con lámina, STP con malla y S/FTP con malla y lámina por par. Sin tierra, el apantallamiento actúa de antena.

| Clase | Categoría | Ancho de banda | Uso | 10G |
| --- | --- | --- | --- | --- |
| D | Cat 5e | 100 MHz | 1000BASE-T | No |
| E | Cat 6 | 250 MHz | 1 Gb/s | 55 m |
| EA | Cat 6A | 500 MHz | 10GBASE-T | 100 m |
| F | Cat 7 | 600 MHz | 10 Gb/s con GG45 o TERA | 100 m |
| FA | Cat 7A | 1 000 MHz | 10 Gb/s con margen | 100 m |
| I | Cat 8.1 | 2 000 MHz | 25GBASE-T | 30 m |
| II | Cat 8.2 | 2 000 MHz | 40GBASE-T | 30 m |

Enlace permanente 90 m, canal 100 m, hasta cuatro conectores y 10 m de latiguillos. Se certifica según UNE-EN 50346 sobre instalación de UNE-EN 50174: longitud, atenuación, NEXT, FEXT, ACR, pérdida de retorno, retardo, skew y mapa. Código T568B en Europa.

### 3.2 Cable coaxial

Conductor central, dieléctrico, malla y cubierta. 75 ohmios en vídeo y 50 en datos; fue 10BASE5 (500 m) y 10BASE2 (185 m), y hoy sobrevive en HFC, CCTV y antena.

### 3.3 Fibra óptica

Núcleo con índice mayor que el revestimiento, que confina la luz. Se caracteriza por atenuación en dB/km y dispersión, que limita la distancia a alta velocidad.

| Tipo | Núcleo | Ventanas | Atenuación | A 10G |
| --- | --- | --- | --- | --- |
| Monomodo G.652 | 9/125 | 1310 y 1550 nm | 0,35 y 0,20 dB/km | Decenas de km |
| OM1 | 62,5/125 | 850 y 1300 nm | 3,5 dB/km | 33 m |
| OM2 | 50/125 | 850 y 1300 nm | 3,5 dB/km | 82 m |
| OM3 | 50/125 láser | 850 nm | 3,0 dB/km | 300 m |
| OM4 | 50/125 láser | 850 nm | 3,0 dB/km | 400 m |
| OM5 | 50/125 ancha | 850 a 953 nm | 3,0 dB/km | Multiplexación corta |

En 850 nm el VCSEL es barato y la dispersión modal limita el alcance; en 1310 la dispersión cromática es casi cero; en 1550 la atenuación es mínima y se amplifica con erbio. G.657 es insensible a curvaturas.

### 3.4 Conectores, empalmes y presupuesto óptico

Conectores LC, SC, ST, FC y MPO/MTP, de 0,1 a 0,7 dB según tipo. Pulido PC, UPC (retorno de 50 dB o más) y APC de 8 grados (60 dB o más, verde); nunca se unen APC y UPC. Empalme por fusión 0,1 dB, obligatorio en monomodo de planta exterior; mecánico 0,2 a 0,3 dB. La luz de 1310 y 1550 nm es invisible: clase láser IEC 60825-1 y nunca mirar un conector encendido.

```text
Margen = salida - (km x dB/km + conectores x dB + empalmes x dB)
         - sensibilidad - reserva
```

Ejercicio: salida menos 2 dBm, sensibilidad menos 24 dBm, 8 km a 0,35, 4 conectores de 0,3 y 6 empalmes de 0,1. Pérdidas 4,6 dB; recibida menos 6,6; margen 17,4; con 3 dB de reserva quedan 14,4. A 40 km baja a 6,2 y a 3,2 tras la reserva.

## 4. Medios inalámbricos

### 4.1 Espectro y bandas

| Banda | Rango | Uso |
| --- | --- | --- |
| 2,4 GHz | 2 400 a 2 483,5 MHz | Wi-Fi, Bluetooth, microondas |
| 5 GHz | 5 150 a 5 850 MHz | Wi-Fi, con DFS en parte |
| 6 GHz | 5 925 a 7 125 MHz | Wi-Fi 6E y 7 |
| 24 y 60 GHz | Ondas milimétricas | Radioenlaces, WiGig |

En 2,4 GHz hay 13 canales en Europa y 3 sin solapar. A más frecuencia, más ancho de banda, más atenuación y más directividad.

### 4.2 Antenas

Parámetros: ganancia en dBi, directividad, diagrama de radiación, ancho de haz a media potencia y polarización. La ganancia no crea energía, la concentra: dipolo de media onda 2,15 dBi, panel de 90 grados de 8 a 12 dBi, parabólica de 60 cm en 5 GHz unos 25 dBi.

```text
EIRP (dBm) = Potencia (dBm) + Ganancia (dBi) - Perdidas (dB)
FSPL (dB) = 32,44 + 20 log10 (f en MHz) + 20 log10 (d en km)
```

17 dBm de radio, 9 dBi y 2 dB de pérdidas dan 24 dBm de PIRE; el límite europeo en 2,4 GHz es 100 mW, o 20 dBm. A 2 437 MHz y 100 m la pérdida es 80,1 dB y a 1 km 100,1: cada duplicación de distancia o frecuencia cuesta 6 dB. La primera zona de Fresnel a 1 km y 2,4 GHz mide 5,6 m de radio.

### 4.3 Microondas

De 1 a 40 GHz, punto a punto, con visibilidad directa y torres. Une sedes sin fibra, sirve de respaldo y alimenta el backhaul móvil. Necesita licencia en muchas bandas y sufre atenuación por lluvia por encima de 10 GHz.

### 4.4 Satélite

| Órbita | Altitud | Ida y vuelta | Uso |
| --- | --- | --- | --- |
| GEO | 35 786 km | 250 ms teóricos, 500 a 700 reales | Difusión, zonas remotas |
| MEO | 8 000 a 20 000 km | 50 a 150 ms | Navegación |
| LEO | 500 a 2 000 km | 20 a 60 ms | Banda ancha, IoT |

GEO gira con la Tierra y permite antena fija, pero su retardo impide conversar. LEO exige seguimiento entre satélites y permite voz y vídeo.

### 4.5 Radio e infrarrojos

La radio va de HF a UHF: telemetría, trunking y sensores; atraviesa obstáculos y sufre interferencia. Los infrarrojos usan luz modulada con línea de vista; IrDA llegó a 4 Mb/s y solo queda en mandos.

## 5. Control de enlace de datos

### 5.1 Control de línea y delimitación de trama

Decide quién transmite: maestro y esclavo, sondeo, paso de testigo o acceso aleatorio con escucha. En Ethernet semidúplex era CSMA/CD, que desapareció porque el conmutador da un dominio de colisión por puerto y el enlace es full duplex.

HDLC delimita con la bandera 01111110 y relleno de bits; PPP (RFC 1661) añade autenticación. Ethernet delimita por silencio, con preámbulo de 7 bytes y 96 tiempos de bit entre tramas. Trama: 6 de destino, 6 de origen, 2 de tipo, 46 a 1 500 de datos y 4 de FCS; mínimo 64 bytes con relleno y máximo 1 518, o 1 522 con VLAN.

### 5.2 Detección de errores

| Método | Bits | Detecta | Límite |
| --- | --- | --- | --- |
| Paridad | 1 | Número impar de bits | No ve pares ni localiza |
| Checksum | 8 o 16 | Errores simples | Se compensa al reordenar |
| CRC-16 | 16 | Ráfagas menores de 17 bits | Mayores con probabilidad |
| CRC-32 | 32 | Ráfagas menores de 33 bits | Residual de 2 elevado a menos 32 |

Ethernet usa CRC-32 con polinomio 0x04C11DB7. Detecta toda ráfaga menor o igual al grado y no corrige: si el FCS falla, se descarta y recupera TCP. La FEC corrige sin retorno a cambio del 7 al 25 por ciento de sobrecarga.

### 5.3 ARQ y ventana deslizante

Parada y espera envía una trama y aguarda confirmación, con eficiencia Tt/(Tt + 2Tp). Retroceso N permite N tramas sin confirmar y retransmite desde la errónea. Repetición selectiva retransmite solo la perdida y reordena en el receptor.

Ejercicio: 10 Mb/s, tramas de 10 000 bits y 10 ms de propagación. Tt es 1 ms y el viaje 20 ms; parada y espera da 1/21, un 4,8 por ciento, o 476 kb/s. Para saturar hace falta ventana de 1 + 2a, con a = 10: 21 tramas.

### 5.4 Control de flujo

Evita desbordar al receptor: XON/XOFF, créditos o ventana. TCP anuncia ventana disponible y puede anunciar cero. No es control de congestión: slow start y evitación protegen la red sobre la misma ventana.

## 6. Protocolos

### 6.1 IP: direccionamiento y subredes

> **Véase también.** Primera aproximación. Se amplía en la unidad «Equipos y servicios de red» (apartados 2 y 4): VLSM con más casos, ARP, ICMP y NAT con sus comandos. [Equipos y servicios de red, resumen técnico](../../03_Administracion/01_Equipos_Servicios/Equipos_Tecnico.md).

IPv4 tiene 32 bits y cabecera de 20 a 60, con TTL, protocolo, checksum y direcciones; máscara contigua y prefijo CIDR.

| Prefijo | Máscara | Direcciones | Hosts |
| --- | --- | --- | --- |
| /24 | 255.255.255.0 | 256 | 254 |
| /25 | 255.255.255.128 | 128 | 126 |
| /26 | 255.255.255.192 | 64 | 62 |
| /27 | 255.255.255.224 | 32 | 30 |
| /28 | 255.255.255.240 | 16 | 14 |
| /30 | 255.255.255.252 | 4 | 2 |

Privadas del RFC 1918: 10.0.0.0/8, 172.16.0.0/12 y 192.168.0.0/16; APIPA 169.254.0.0/16; loopback 127.0.0.0/8. La dirección de red tiene los bits de host a cero y la de broadcast a uno.

Ejercicio: 172.16.32.0/24 en subredes de 50 hosts. 52 direcciones piden 64, o sea 6 bits de host y /26 con salto 64: la primera de .1 a .62 con broadcast .63, la segunda de .65 a .126 con .127, la tercera de .129 a .190 con .191 y la cuarta de .193 a .254 con .255. Con VLSM se ordena de mayor a menor: /26, /28 y /30.

IPv6: 128 bits, cabecera fija de 40, ocho grupos hexadecimales y compresión con doble dos puntos una sola vez. Global 2000::/3, link-local fe80::/10, loopback ::1, multicast ff00::/8 y sin broadcast; SLAAC con descubrimiento de vecinos del RFC 4861.

### 6.2 Enrutamiento: estático, OSPF y BGP

> **Véase también.** Primera aproximación. Las tablas de rutas, la distancia administrativa y la configuración se amplían en el apartado 12 de la unidad «Equipos y servicios de red». [Equipos y servicios de red, resumen técnico](../../03_Administracion/01_Equipos_Servicios/Equipos_Tecnico.md).

Un router decide por la **tabla de rutas**: busca la entrada con el prefijo más largo que contenga la IP de destino (longest prefix match) y reenvía al siguiente salto. Las rutas llegan de tres formas.

| Origen | Cómo se aprende | Cuándo conviene |
| --- | --- | --- |
| Conectada | Del propio interfaz | Siempre |
| Estática | La escribe el administrador | Redes pequeñas, ruta por defecto hacia el operador |
| Dinámica | La anuncia un protocolo de enrutamiento | Redes con varios routers o caminos alternativos |

Los protocolos dinámicos se clasifican por dónde operan y cómo calculan:

| Clase | Protocolos | Cálculo | Ámbito |
| --- | --- | --- | --- |
| Vector de distancia | RIP | Número de saltos, máximo 15 | Interior, obsoleto |
| Estado de enlace | OSPF, IS-IS | Dijkstra sobre el mapa completo | Interior (IGP) |
| Vector de ruta | BGP | Atributos y política | Exterior (EGP) |

**OSPF** (RFC 2328 para IPv4). Cada router describe sus enlaces en LSA, que se inundan por el área, y todos construyen el mismo mapa y calculan el camino más corto con el algoritmo de Dijkstra. El coste de un interfaz es el ancho de banda de referencia entre el del interfaz, con 100 Mb/s por defecto en muchos equipos: así 100 Mb/s cuesta 1 y 10 Mb/s cuesta 10, pero 1 Gb/s también cuesta 1, y por eso hay que subir la referencia en redes modernas. Se organiza en áreas con una troncal, el área 0; el protocolo IP es 89 y usa los multicast 224.0.0.5 (todos los routers OSPF) y 224.0.0.6 (designado). Hello cada 10 s y dead interval de 40 s en redes de difusión. Converge en segundos.

**BGP** (RFC 4271). Es el protocolo con el que se unen los **sistemas autónomos** (AS), conjuntos de redes bajo una misma política de enrutamiento e identificados por un número (ASN). Funciona sobre TCP 179 y no busca el camino más corto sino el que cumple la política: sus atributos (AS_PATH, LOCAL_PREF, MED) permiten preferir un proveedor frente a otro. Con **eBGP** se habla entre AS distintos y con **iBGP** dentro de uno. Los ASN de 16 bits van de 1 a 65534 y los privados, de 64512 a 65534 (RFC 6996); desde el RFC 6793 hay también ASN de 32 bits.

| Aspecto | OSPF | BGP |
| --- | --- | --- |
| Pregunta que responde | ¿Cuál es el camino más corto dentro de mi red? | ¿Qué camino me conviene a través de otras redes? |
| Métrica | Coste por ancho de banda | Atributos y política |
| Transporte | Directo sobre IP (89) | TCP 179 |
| Escala | Cientos de routers | Toda Internet |
| Quién lo usa | Cualquier empresa con varias sedes | Operadores y empresas con dos o más proveedores |

Una pyme con una sola salida a Internet usa una ruta estática por defecto; con dos operadores y direccionamiento propio (multihoming) aparece BGP; con varias sedes propias, OSPF.

### 6.3 Transporte: TCP, UDP, puertos y NAT

TCP es fiable y orientado a conexión: SYN, SYN-ACK y ACK, numeración de bytes, confirmación acumulativa y ventana. UDP no conecta, no confirma ni reordena; 8 bytes de cabecera, para DNS, DHCP, VoIP y SNMP. Un socket es la pareja dirección y puerto, y la conexión se identifica por la cuádrupla de origen y destino. Los puertos de 0 a 1023 son bien conocidos (servicios estándar), de 1024 a 49151 registrados y de 49152 a 65535 dinámicos, los que un cliente toma al azar como origen.

NAT (RFC 3022) traduce privadas a públicas y PAT comparte una IP usando el puerto. Rompe protocolos con direcciones en la carga y complica IPsec sin NAT-T. Los operadores usan CGNAT en 100.64.0.0/10.

### 6.4 Seguridad en redes

**Propiedades de una comunicación segura.**

| Propiedad | Garantiza | Se logra con |
| --- | --- | --- |
| Confidencialidad | Que solo el destinatario lea | Cifrado |
| Integridad | Que el mensaje no cambió | Hash, HMAC, firma |
| Autenticación | Quién es el otro extremo | Certificados, claves, contraseñas |
| No repudio | Que el emisor no pueda negar el envío | Firma digital |
| Disponibilidad | Que el servicio responda | Redundancia, cortafuegos, copias |

**Criptografía simétrica y asimétrica.**

| Tipo | Clave | Algoritmos | Ventaja | Límite |
| --- | --- | --- | --- | --- |
| Simétrica | Una compartida | AES (128, 192, 256 bits), ChaCha20 | Muy rápida | Hay que repartir la clave |
| Asimétrica | Par pública y privada | RSA, curvas elípticas (ECC), Diffie-Hellman | Resuelve el reparto | Cientos de veces más lenta |
| Hash | Ninguna | SHA-256, SHA-3 | Huella de tamaño fijo | No se puede invertir |

La razón de la asimétrica es numérica: con claves simétricas, N usuarios que quieran hablar entre sí por parejas necesitan N(N-1)/2 claves distintas, 4 950 para 100 usuarios; con asimétrica basta un par por usuario, 200 claves. En la práctica se combinan: la asimétrica acuerda una clave de sesión y la simétrica cifra los datos. RSA de 2 048 bits es hoy el mínimo razonable y una curva de 256 bits da una seguridad equivalente a RSA de 3 072. MD5 y SHA-1 están rotos para colisiones y no deben usarse para firmar.

**Integridad y autenticación de mensajes.** Un hash da una huella: si el mensaje cambia un bit, la huella cambia por completo. Un HMAC (RFC 2104) mezcla el hash con una clave compartida y así también autentica. La **firma digital** es el hash del mensaje cifrado con la clave privada del emisor: cualquiera lo comprueba con la clave pública, y solo el dueño pudo firmarlo.

```text
Firmar:     huella = SHA-256(mensaje)  ->  firma = cifrar(huella, clave privada)
Verificar:  descifrar(firma, clave publica) == SHA-256(mensaje)  ?  valido
```

**Distribución de claves y certificación.** Diffie-Hellman permite que dos extremos acuerden una clave secreta sobre un canal abierto. Queda por saber si la clave pública que recibes es de quien dice: para eso existe la **infraestructura de clave pública (PKI)**. Una autoridad de certificación (CA) firma un **certificado X.509** (RFC 5280) que liga una identidad con una clave pública; el cliente confía en la CA y valida la cadena hasta una raíz que ya trae instalada. Los certificados se pueden revocar (listas CRL o consulta OCSP, RFC 6960) y caducan. La vigencia máxima de los certificados TLS públicos se está acortando por decisión de los navegadores y las CA (de 398 días a 200 en 2026, con rebajas previstas en 2027 y 2029) [calendario del ballot SC-081v3 del CA/Browser Forum; las fechas intermedias de 2026 y 2027 coinciden en varias fuentes]: renovar a mano ya no es viable y se automatiza.

**SSL y TLS.** TLS 1.3 (antes SSL, RFC 8446) reduce el saludo a un viaje y elimina RC4, SHA-1 y el RSA estático. SSL 2.0 y 3.0 están prohibidos (RFC 6176 y RFC 7568) y TLS 1.0 y 1.1 se retiraron en 2021 (RFC 8996). Hoy solo se admiten TLS 1.2 y 1.3. Es lo que protege HTTPS, el correo seguro y muchas VPN de acceso remoto.

**SSH** (RFC 4251 a 4254, puerto 22) sustituye a Telnet con cifrado y autenticación del servidor (la huella se guarda en known_hosts) y del usuario, mejor con clave pública que con contraseña. Además de terminal, hace transferencia de ficheros (SFTP, SCP) y túneles.

**IPsec** (RFC 4301) protege en el nivel de red. Cifra la carga entre hosts en modo transporte y envuelve el paquete entre pasarelas en modo túnel; ESP (protocolo 50) cifra y autentica y AH (51) solo autentica y falla tras NAT. IKEv2 (RFC 7296) negocia las claves por UDP 500, y con NAT se encapsula en UDP 4500 (NAT-T).

**Redes privadas virtuales (VPN).** Extienden la red privada por una red pública con un túnel cifrado.

| Tipo | Une | Tecnologías habituales |
| --- | --- | --- |
| Sitio a sitio | Dos redes (sede y sede) | IPsec entre routers o cortafuegos |
| Acceso remoto | Un usuario con la red | TLS VPN, IPsec con IKEv2, WireGuard |

**Cortafuegos.** Filtra el tráfico entre zonas según reglas, evaluadas en orden y con denegación por defecto.

| Tipo | Mira | Límite |
| --- | --- | --- |
| Filtro sin estado | IP y puerto de cada paquete | No sabe si es respuesta |
| Con estado | Lo anterior y la conexión | No entiende la aplicación |
| Proxy | La conversación completa | Más lento, uno por protocolo |
| NGFW | Aplicación, usuario, amenaza | Licencias y potencia |

La arquitectura habitual separa tres zonas: externa (Internet), **DMZ** (servidores públicos) e interna. Lo que entra a la DMZ no entra a la interna sin permiso explícito.

```text
Regla  Origen      Destino       Servicio    Accion
1      Internet    Web (DMZ)     443/TCP     permitir
2      Interna     Internet      80,443      permitir
3      Interna     Web (DMZ)     22/TCP      permitir (administracion)
4      Web (DMZ)   Interna       cualquiera  denegar
5      cualquiera  cualquiera    cualquiera  denegar (por defecto)
```

### 6.5 Arquitectura cliente-servidor

En el modelo cliente-servidor un programa servidor espera peticiones en un puerto conocido y uno o más clientes las inician desde puertos dinámicos. El servidor ofrece un servicio, el cliente lo consume y el servidor nunca llama primero. Se contrapone a la arquitectura entre iguales (P2P), donde cada nodo es a la vez cliente y servidor.

```text
  Cliente (192.168.1.20:51334) ---- peticion ---> Servidor (10.0.0.5:443)
                               <--- respuesta ---
  El cliente elige un puerto dinamico; el servidor escucha en uno conocido.
```

| Arquitectura | Capas | Ejemplo |
| --- | --- | --- |
| Dos capas | Cliente y servidor de datos | Aplicación de escritorio contra una base de datos |
| Tres capas | Presentación, lógica y datos | Navegador, servidor de aplicaciones, base de datos |

Una visita web enseña el reparto de funciones: el cliente pregunta al DNS por el nombre, abre una conexión TCP al puerto 443 (SYN, SYN-ACK, ACK), negocia TLS y envía GET; el servidor responde con el código y el contenido. En el diseño de red importa porque el servidor concentra el tráfico y los fallos: es donde se pone la redundancia y la DMZ, y por eso conviene calcular su ancho de banda y su disponibilidad por separado de los de los clientes.

### 6.6 Protocolos de aplicación

| Protocolo | Puerto | Transporte | Para qué |
| --- | --- | --- | --- |
| HTTP y HTTPS | 80 y 443 | TCP | Web, con y sin TLS |
| FTP | 20 y 21 | TCP | Ficheros, dos canales |
| TFTP | 69 | UDP | Configuración de equipos |
| SMTP | 25 y 587 | TCP | Envío de correo |
| DNS | 53 | UDP y TCP | Nombres |
| DHCP | 67 y 68 | UDP | Configuración automática |
| Telnet | 23 | TCP | Terminal sin cifrar |
| SNMP | 161 y 162 | UDP | Gestión y traps |
| NTP | 123 | UDP | Hora |

FTP usa control en 21 y datos en 20 en modo activo, lo que falla tras NAT: se sustituye por SFTP o FTPS. SMTP solo envía; POP3 (110) e IMAP (143) descargan. Telnet manda la contraseña en claro y SNMP v3 es la única versión con autenticación y cifrado.

## 7. Equipos de interconexión, instalación y contratación

### 7.1 Equipos y su nivel OSI

| Equipo | Nivel | Decide por | Dominio que rompe |
| --- | --- | --- | --- |
| Repetidor | 1 | Nada | Ninguno |
| Concentrador | 1 | Nada | Ninguno, una sola colisión |
| Puente | 2 | MAC | Colisión |
| Conmutador | 2 | MAC | Colisión |
| Conmutador de nivel 3 | 2 y 3 | MAC e IP | Colisión y broadcast con VLAN |
| Router | 3 | IP | Broadcast |
| Pasarela | 4 a 7 | Sesión o aplicación | Toda la pila |
| Cortafuegos | 3, 4 y 7 | IP, puerto, aplicación | Segmenta zonas |
| Servidor VPN | 3 a 7 | Política y certificado | Extiende la red |

El conmutador aprende qué MAC hay en cada puerto y solo inunda si no la conoce. VLAN (802.1Q) divide en redes lógicas y exige nivel 3 para cruzar; STP (802.1D) y RSTP evitan bucles. Al comprar importan puertos y PoE, reenvío en paquetes por segundo, tabla MAC, VLAN, LACP, gestión fuera de banda y garantía.

### 7.2 Requisitos ambientales

| Parámetro | Valor | Motivo |
| --- | --- | --- |
| Temperatura | 18 a 27 grados | Vida útil y ruido de ventiladores |
| Humedad | 40 a 60 por ciento sin condensación | Condensación en contactos y óptica |
| Alimentación | Circuito dedicado, SAI, tierra | Cortes y picos dañan fuentes |
| Ruido | Menos de 60 dBA | Salud laboral |
| Armario | Rack 19 pulgadas, 42U, fondo 600 u 800 | Medida estándar |

Sin armario en cuarto húmedo ni junto a cuadros eléctricos, con 1U entre equipos que calientan y etiqueta en ambos extremos. El SAI se clasifica por UNE-EN IEC 62040-3, preferiblemente VFI, y la instalación sigue el REBT (Real Decreto 842/2002). En viviendas, la ICT se rige por el Real Decreto 346/2011 y la Orden ITC/1644/2011: el programa de referencia cita el RD 401/2003 y la Orden CTE/1296/2003, ya derogados, y En la documentación puede aparecer la referencia antigua.

### 7.3 Contratación de acceso a redes públicas

| Acceso | Medio | Simetría | Caudal |
| --- | --- | --- | --- |
| ADSL | Par de cobre | Asimétrica | Hasta 20 Mb/s |
| VDSL2 | Par corto | Asimétrica | Hasta 100 Mb/s |
| HFC | Coaxial y fibra | Asimétrica | 600 Mb/s a 1 Gb/s |
| Fibra hasta el local | Monomodo | Simétrica | 100 Mb/s a 10 Gb/s |
| Línea dedicada | Fibra o cobre | Simétrica garantizada | 2 Mb/s a 10 Gb/s |
| Ethernet de operador | Fibra | Simétrica | 10 Mb/s a 100 Gb/s |
| Fibra oscura | Fibra sin electrónica | No aplica | La del cliente |

El CIR es el caudal garantizado y el PIR el máximo. Un contrato 1:1 no tiene sobreventa; 1:10 o 1:50 es lo habitual en residencial.

| Disponibilidad | Corte al año |
| --- | --- |
| 99 por ciento | 87,6 horas |
| 99,5 por ciento | 43,8 horas |
| 99,9 por ciento | 8,76 horas |
| 99,99 por ciento | 52,6 minutos |

### 7.4 Hardware o software: elegir con criterio

Se trata de comparar un equipo dedicado con la solución software equivalente (un router o cortafuegos sobre un servidor, como pfSense, OPNsense, VyOS o Linux con nftables).

| Criterio | Equipo dedicado | Solución software |
| --- | --- | --- |
| Rendimiento | Circuitos específicos (ASIC), previsible | Depende de la CPU y de las tarjetas |
| Coste inicial | Mayor | Menor, si ya hay un servidor |
| Flexibilidad | Limitada al fabricante | Muy alta |
| Facilidad de administración | Interfaz homogénea y soporte | Requiere más conocimiento propio |
| Fiabilidad | Sin discos ni piezas móviles | Un servidor falla más; se duplica |
| Soporte | Contrato único con el fabricante | Comunidad o contrato aparte |
| Consumo y espacio | Bajo | Mayor |

Regla de decisión: lo dedicado gana en el núcleo y en el acceso, donde importan la velocidad de reenvío y la disponibilidad; el software gana en servicios con lógica propia (cortafuegos con reglas a medida, proxy, VPN) y en laboratorios.

### 7.5 Leer una hoja de características

Lo que el catálogo pone en grande no suele ser lo que decide la compra.

| Dato del catálogo | Qué significa | Cómo comprobarlo |
| --- | --- | --- |
| Capacidad de conmutación | Suma de puertos por dos (full duplex) | 48 puertos de 1 Gb/s dan 96 Gb/s |
| Velocidad de reenvío (Mpps) | Paquetes de 64 bytes por segundo | 1 Gb/s son 1,488 Mpps; 48 puertos, 71,4 Mpps |
| Presupuesto PoE | Vatios totales, no por puerto | 48 puertos a 15,4 W serían 739 W: con 370 W no alimentan todos |
| Tabla MAC | Direcciones que aprende | Debe superar los equipos más los que haya detrás |
| Puertos de enlace ascendente | Velocidad hacia el núcleo | Si 48 x 1 Gb/s suben por 2 x 10 Gb/s, hay sobresuscripción 2,4 a 1 |
| Garantía y soporte | Sustitución, actualizaciones | Años de actualizaciones, no solo de garantía |
| Fin de venta y fin de soporte | Ciclo de vida del modelo | Pedir las fechas por escrito |

## Perspectiva empresarial

Un buen diseño tiene que rendir y ser económico a la vez. Esta sección da las herramientas para justificar una compra ante quien paga. Las cifras son ilustrativas, no precios de mercado.

### Coste total de propiedad (TCO)

El precio de compra es solo una parte. El **CAPEX** es la inversión inicial (equipos, cableado, instalación); el **OPEX** es el gasto recurrente (soporte, energía, administración, formación, paradas). El TCO suma ambos durante la vida útil.

```text
TCO a 5 anos = CAPEX + 5 x (soporte + energia + administracion) + coste de paradas

Oferta A (gama empresarial):  2 400 + 5 x (200 + 60 + 0)      = 3 700
Oferta B (gama economica):    1 100 + 5 x (0 + 90 + 300) + 400 = 3 450
                              (400 de sustitucion por una averia prevista)
Con paradas a 500 euros la hora:
   A: 99,99 por ciento -> 0,88 h/ano -> 5 anos = 2 190  -> TCO 5 890
   B: 99,9 por ciento  -> 8,76 h/ano -> 5 anos = 21 900 -> TCO 25 350
```

La oferta B es un 54 por ciento más barata al comprar y cuatro veces más cara en total. Lo que parece una diferencia de 0,09 puntos en la disponibilidad es diez veces más tiempo parado.

### Comparar ofertas con una matriz ponderada

1. Elige criterios y pesos que sumen 100, antes de ver las ofertas.
2. Puntúa cada oferta de 1 a 5 por criterio.
3. Multiplica puntuación por peso, suma y divide por 100.

| Criterio | Peso | Oferta X | Oferta Y | Oferta Z |
| --- | --- | --- | --- | --- |
| Coste total (TCO) | 30 | 4 | 5 | 3 |
| Prestaciones | 25 | 3 | 2 | 5 |
| Soporte y garantía | 20 | 5 | 2 | 4 |
| Escalabilidad | 15 | 3 | 2 | 5 |
| Facilidad de gestión | 10 | 4 | 3 | 4 |
| **Total** | 100 | **3,80** | **3,00** | **4,10** |

La más barata (Y) queda la última, y la vencedora (Z) no es la más barata ni la mejor en soporte. Una matriz honesta documenta por qué cada nota y qué pasa si cambian los pesos: es el criterio de economía y rendimiento que pide el programa de referencia, hecho comprobable.

### Nivel de servicio (SLA)

Un SLA bien escrito fija la disponibilidad, el tiempo de respuesta, el tiempo de resolución, cómo se mide, qué no cuenta (mantenimientos programados) y qué penalización paga el proveedor (normalmente un crédito en la factura, no una indemnización por el daño).

```text
Disponibilidad = MTBF / (MTBF + MTTR)
  MTBF 2 000 h, MTTR 4 h  ->  2 000 / 2 004 = 99,80 por ciento

En serie (todos deben funcionar):  A = A1 x A2 x A3
  tres equipos al 99,9 por ciento -> 0,999 al cubo = 99,70 por ciento
En paralelo (basta uno):  A = 1 - (1 - A1) x (1 - A2)
  dos equipos al 99 por ciento    -> 1 - 0,01 x 0,01 = 99,99 por ciento
```

Conclusión de diseño: la cadena es tan fiable como su peor eslabón; duplicar el eslabón débil rinde más que mejorar el resto.

### Riesgo y cumplimiento

Una red es el soporte de datos personales y de negocio, y varias normas se apoyan en ella:

| Norma | Qué exige a la red | Nota |
| --- | --- | --- |
| RGPD, Reglamento (UE) 2016/679, y LOPDGDD, Ley Orgánica 3/2018 | Seguridad del tratamiento (artículo 32): cifrado, control de acceso, capacidad de recuperación | Aplica a cualquier empresa con datos de personas |
| Esquema Nacional de Seguridad, Real Decreto 311/2022 | Medidas de seguridad por categoría de sistema | Sector público y quienes le prestan servicios |
| ISO/IEC 27001:2022 | Sistema de gestión de seguridad de la información | Certificable; la pide el cliente grande al proveedor |
| Directiva (UE) 2022/2555 (NIS2) | Gestión de riesgos y notificación de incidentes en sectores esenciales | Estado de la transposición en España [no verificado en noviembre de 2026] |

En un diseño se traduce en cuatro decisiones: segmentar (VLAN y DMZ), cifrar lo que sale de la sede, registrar el acceso y dejar las copias fuera de la red principal.

### Ciclo de vida

Los activos pasivos duran más que los activos de red: el cableado estructurado se planifica a 15 a 20 años y los conmutadores y routers se renuevan a los 5 a 7 [valores orientativos]. De ahí un criterio de diseño: invertir en cableado de categoría holgada, que se instala una vez, y no sobredimensionar la electrónica, que se cambiará. Antes de comprar, pide por escrito la fecha de fin de venta y fin de soporte del modelo.

## Tablas de referencia rápida

| Ethernet | Velocidad | Medio y alcance | Codificación |
| --- | --- | --- | --- |
| 10BASE-T | 10 Mb/s | UTP, 100 m | Manchester |
| 100BASE-TX | 100 Mb/s | UTP, 100 m, 2 pares | 4B/5B y MLT-3 |
| 1000BASE-T | 1 Gb/s | UTP, 100 m, 4 pares | PAM-5 |
| 10GBASE-T | 10 Gb/s | Cat 6A 100 m, Cat 6 55 m | PAM-16 |
| 10GBASE-SR | 10 Gb/s | OM4 400 m, OM3 300 m | 64B/66B |
| 10GBASE-LR | 10 Gb/s | 1310 nm, 10 km | 64B/66B |

## Cifras que hay que saber de memoria

- Enlace permanente 90 m; canal 100 m; latiguillos hasta 10 m.
- 3 dB mitad; 10 dB décima parte; 20 dB centésima; 0 dBm un milivatio.
- Monomodo 0,35 dB/km en 1310 y 0,20 en 1550; multimodo 3,5 en 850.
- Conector 0,3 dB; empalme de fusión 0,1 dB; reserva de diseño 3 dB.
- GEO 35 786 km; LEO 500 a 2 000 km; 6 dB al duplicar distancia o frecuencia.
- Trama Ethernet de 64 a 1 518 bytes, 1 522 con VLAN; MTU de IPv4 1 500.
- Cabeceras: IPv4 20, IPv6 40, TCP 20, UDP 8 bytes; IPv4 32 bits, IPv6 128.
- E1 2,048 Mb/s; T1 1,544; STM-1 155,52; STM-16 2 488,32.
- Voz digital: 8 000 muestras por segundo x 8 bits = 64 kb/s. CD: 1 411,2 kb/s.
- Ruido térmico: menos 174 dBm por hercio a 290 K; 100 MHz son menos 94 dBm.
- 1 Gb/s a 64 bytes son 1,488 Mpps. PoE: af 15,4 W, at 30 W, bt 60 y 90 W en el PSE.
- Disponibilidad en serie, producto; en paralelo, 1 menos el producto de las indisponibilidades.
- Puertos: 0 a 1023 conocidos, 1024 a 49151 registrados, 49152 a 65535 dinámicos.
- OSPF: protocolo IP 89, hello 10 s, dead 40 s, área 0. BGP: TCP 179.
- TLS 1.2 y 1.3 vigentes; SSL y TLS 1.0 y 1.1 retirados. RSA mínimo 2 048 bits.

## Procedimientos paso a paso

**1. Presupuesto de potencia de un enlace de fibra.**

1. Toma la potencia mínima de salida y la sensibilidad mínima, en dBm.
2. Suma la fibra: kilómetros por dB/km de la ventana.
3. Suma 0,3 dB por conector y 0,1 por empalme de fusión.
4. Resta salida menos pérdidas menos sensibilidad y reserva 3 dB.

```text
-2 dBm de salida, -24 dBm de sensibilidad
8 km x 0,35 = 2,8 dB    4 conectores x 0,3 = 1,2 dB
6 empalmes x 0,1 = 0,6 dB
perdidas 4,6 dB -> recibida -6,6 dBm -> margen 17,4 dB
con reserva de 3 dB: 14,4 dB
```

**2. Subredes y broadcast.**

1. Suma dos hosts a los necesarios: red y broadcast.
2. Sube a la potencia de dos inmediata: son los bits de host.
3. Resta de 32 para el prefijo y calcula el salto.
4. Enumera sumando el salto; el broadcast es la última dirección.

```text
50 hosts en 172.16.32.0/24 -> 52 -> 64 = 2^6 -> /26, salto 64
.0/26    .1 a .62     broadcast .63
.64/26   .65 a .126   broadcast .127
.128/26  .129 a .190  broadcast .191
.192/26  .193 a .254  broadcast .255
```

**3. Certificar un enlace de cobre.**

1. Verifica el mapa de cableado y el orden de los ocho hilos.
2. Mide longitud, atenuación, NEXT y ACR en ambos extremos; manda el peor caso.
3. Guarda el informe con modelo de certificador, fecha y calibración.

## Errores típicos

1. **"El conmutador es de nivel 3 porque tiene VLAN".** La VLAN es nivel 2; encamina el conmutador de nivel 3 o el router.
2. **"Cat 7 supera a Cat 6A en 10GBASE-T".** A 100 m rinden igual y Cat 7 rompe la compatibilidad con RJ45.
3. **"El canal admite 100 m más los latiguillos".** 100 m es el total, con 90 de enlace permanente.
4. **"El multimodo llega más lejos".** Llega menos por dispersión modal; es más barato, no mejor.
5. **"20 dB cuadruplican la potencia".** La multiplican por 100; 6 dB es por 4.
6. **"El broadcast se puede asignar si está libre".** Está reservado por definición.
7. **"Con /26 caben 64 equipos".** Caben 62: se pierden red y broadcast.
8. **"OSPF y BGP hacen lo mismo".** OSPF calcula el camino más corto dentro de una red; BGP aplica política entre redes distintas, sobre TCP 179.
9. **"La firma digital cifra el mensaje".** Cifra el hash con la clave privada: da autenticación e integridad, no confidencialidad.
10. **"Para enviar algo confidencial cifro con mi clave privada".** Se cifra con la pública del receptor; la privada propia se usa para firmar.
11. **"Con 99,9 por ciento no hay paradas apreciables".** Son 8,76 horas al año; 99,99 por ciento son 52,6 minutos.
12. **"Más baudios son más bits".** Bits por segundo = baudios x bits por símbolo; con QAM un baudio lleva varios bits.
13. **"El ruido de impulsos se corrige con ecualización".** La ecualización compensa la distorsión de la atenuación; el ruido impulsivo se evita con apantallamiento y separación de cables de potencia.
14. **"FDM y WDM son técnicas distintas".** Son la misma: repartir frecuencias, de radio una y de luz la otra.

## Glosario de la unidad

**Atenuación**: pérdida de potencia al propagarse, en dB.

**Broadcast**: dirección que alcanza a toda la red local.

**CIDR**: notación de prefijo que fija los bits de red.

**CIR**: caudal garantizado en el contrato de acceso.

**CRC**: código de redundancia cíclica que detecta errores por división polinómica.

**dBm**: potencia absoluta referida a 1 mW.

**Diafonía**: interferencia entre pares vecinos; NEXT en el extremo cercano y FEXT en el lejano.

**EIRP o PIRE**: potencia radiada equivalente, potencia más ganancia menos pérdidas.

**MAC**: dirección física de 48 bits del interfaz.

**Nyquist**: límite de capacidad de un canal ideal sin ruido.

**PIR**: caudal máximo permitido, sujeto a ráfaga.

**AS (sistema autónomo)**: conjunto de redes con una política de enrutamiento común, identificado por un ASN.

**BER**: tasa de error de bit, bits erróneos entre bits transmitidos.

**CAPEX y OPEX**: gasto de inversión inicial y gasto recurrente de explotación.

**Certificado X.509**: documento firmado por una CA que liga una identidad con una clave pública.

**DMZ**: zona intermedia entre Internet y la red interna para los servidores públicos.

**eBGP e iBGP**: BGP entre sistemas autónomos distintos o dentro de uno.

**Firma digital**: hash cifrado con la clave privada del emisor; da autenticación, integridad y no repudio.

**MTBF y MTTR**: tiempo medio entre fallos y tiempo medio de reparación.

**PCM**: digitalización de una señal analógica por muestreo, cuantificación y codificación.

**PKI**: infraestructura de clave pública: CA, certificados y revocación.

**QAM**: modulación de amplitud y fase a la vez, con varios bits por símbolo.

**SLA**: acuerdo de nivel de servicio con disponibilidad y penalizaciones.

**TCO**: coste total de propiedad: CAPEX más OPEX durante la vida útil.

**SNR**: relación señal ruido, en dB.

**Subred**: división lógica de una red IP con máscara propia.

**VLAN**: red lógica sobre la misma infraestructura, etiquetada con 802.1Q.

**WDM**: multiplexación por longitud de onda, en CWDM y DWDM.

## Para profundizar

- IETF, RFC 791 (IPv4): https://www.rfc-editor.org/rfc/rfc791.html
- IETF, RFC 8446 (TLS 1.3): https://www.rfc-editor.org/rfc/rfc8446.html
- IANA, registro de puertos: https://www.iana.org/assignments/service-names-port-numbers/service-names-port-numbers.xhtml
- ITU-T, G.652 (fibra monomodo): https://www.itu.int/rec/T-REC-G.652
- BOE, Real Decreto 346/2011 de ICT: https://www.boe.es/buscar/act.php?id=BOE-A-2011-5834
- IETF, RFC 4271 (BGP-4): https://www.rfc-editor.org/rfc/rfc4271.html
- IETF, RFC 2328 (OSPF versión 2): https://www.rfc-editor.org/rfc/rfc2328.html
- IETF, RFC 8996 (retirada de TLS 1.0 y 1.1): https://www.rfc-editor.org/rfc/rfc8996.html
- IETF, RFC 7296 (IKEv2): https://www.rfc-editor.org/rfc/rfc7296.html
- BOE, Real Decreto 311/2022 (Esquema Nacional de Seguridad): https://www.boe.es/buscar/act.php?id=BOE-A-2022-7191
