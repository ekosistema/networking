---
title: "Análisis del mercado de productos de comunicaciones"
description: "Resumen conceptual de la unidad Mercado de comunicaciones."
section: diseno
unit: mercado
kind: conceptual
order: 11
tags:
  - redes
  - mercado
  - conceptual
  - modelo-osi
  - decibelio
  - subredes
---

# Análisis del mercado de productos de comunicaciones

> **En una frase.** Comprar red es comprar física disfrazada de catálogo: aquí van los dos modelos de capas, la aritmética del decibelio y la tabla de medios y equipos con la que se decide qué se paga y por qué.

## Por qué existe este tema

Una empresa pide la red de la nueva planta y recibe tres presupuestos incompatibles: uno con categoría 8 en todos los puestos, otro con fibra hasta la mesa, otro solo con Wi-Fi 6. Los tres llevan razón en algo y ninguno explica lo único que importa: qué distancia hay que cubrir, qué velocidad se necesita de verdad y cuánto margen queda cuando el cable envejezca. Sin un modelo común se compara por precio y adjetivos.

El problema de fondo es que las cifras del catálogo no son comparables entre sí. Mil megabits es una velocidad de capa física; cien metros, un límite de norma; cero coma tres decibelios, una pérdida por conector; noventa y nueve coma nueve por ciento, una cláusula contractual. Solo se suman si se sabe en qué capa vive cada una, y ese error se paga dos veces: un latiguillo equivocado se cambia, pero un enlace mal presupuestado o un caudal asimétrico se arrastran años.

## El mapa

De la idea al contrato: cada etapa filtra la siguiente.

```text
        +---------------------------------------+
        | 1. MODELO (OSI y TCP/IP)              |
        |    que capa hace que y quien habla    |
        +------------------+--------------------+
                           |
                           v
        +---------------------------------------+
        | 2. FISICA (senal, dB, Nyquist)        |
        |    cuanto pasa y con que margen       |
        +------------------+--------------------+
             +-------------+-------------+
             v                           v
  +---------------------+     +---------------------+
  | 3. MEDIO Y ENLACE   |     | 4. RED Y EQUIPOS    |
  | cobre, fibra, aire  |     | IP, subredes, router|
  | tramas y errores    |     | conmutador, firewall|
  +----------+----------+     +----------+----------+
             +-------------+-------------+
                           v
        +---------------------------------------+
        | 5. MERCADO (producto y contrato)      |
        |    caudal, simetria, SLA, precio      |
        +---------------------------------------+
```

## Los conceptos, uno a uno

### 1. Las capas: dos modelos que dicen lo mismo

**La intuición.** En una mudanza nadie hace todo: el que embala no conduce y el que conduce no decide qué mueble va en qué habitación. Cada uno recibe algo terminado y le añade su parte.

**Lo formal.** OSI (ISO/IEC 7498-1:1994) tiene siete capas: física, enlace, red, transporte, sesión, presentación y aplicación. TCP/IP agrupa en cuatro: acceso a la red, internet, transporte y aplicación. Aplicación, presentación y sesión caen dentro de la capa de aplicación; física y enlace, en el acceso a la red. Cada capa habla con su igual y maneja su unidad: bits, tramas, paquetes, segmentos y datos.

**Un ejemplo.** Una trama con 1 500 bytes de datos útiles lleva 14 de cabecera Ethernet, 20 de IP y 20 de TCP: 1 554 bytes en el cable, un 3,5 por ciento de envoltorio.

### 2. El decibelio: sumar en vez de multiplicar

**La intuición.** El volumen de una sala: si un altavoz suena el doble, no dices dos unidades más, dices un escalón. Los decibelios son esos escalones, y una cadena de pérdidas se resuelve sumándolos en lugar de multiplicar fracciones.

**Lo formal.** dB = 10 × log10(P1/P2); para tensiones, 20 × log10(V1/V2). El dBm es potencia absoluta referida a 1 mW: 0 dBm es 1 mW y menos 10 dBm son 0,1 mW. Tres reglas cubren casi todo: 3 dB es el doble, 10 dB diez veces, 20 dB cien veces. La atenuación se da en dB positivos por convenio, aunque sea pérdida, y la relación señal ruido también va en dB.

**Un ejemplo.** Transmisor de 0 dBm, 2 km de fibra a 0,35 dB/km, dos conectores de 0,3 y dos empalmes de 0,1. Total: 0,7 + 0,6 + 0,2 = 1,5 dB; llegan menos 1,5 dBm. Con sensibilidad de menos 20 dBm el margen es 18,5 dB, y se reservan 3 para envejecimiento: quedan 15,5 útiles. Ese margen, no la potencia, es lo que se firma.

### 3. El techo del canal: Nyquist y Shannon

**La intuición.** Una autopista: el ancho de banda son los carriles y el ruido es la niebla. Puedes añadir carriles o despejar la niebla, pero no hacer que quepan más coches de los que la visibilidad permite distinguir.

**Lo formal.** Nyquist da el máximo en un canal ideal: C = 2 × B × log2(M), con B en hercios y M niveles por símbolo. Shannon añade el ruido: C = B × log2(1 + S/N), con S/N en lineal. Ninguna codificación supera a Shannon.

**Un ejemplo.** Canal telefónico de 3 000 Hz: con cuatro niveles, Nyquist permite 12 000 b/s; con 30 dB de relación, que en lineal es 1 000, Shannon permite 3 000 × log2(1 001), unos 29 900 b/s. De ahí salen los 33,6 kb/s de módem y los 56 kb/s cuando parte del trayecto ya era digital. El límite no era el chip, era la fórmula.

### 4. Los medios: cobre, fibra y aire

**La intuición.** Llevar agua a una huerta: la manguera de goma es barata y se pinza en las curvas; la tubería de cristal no se pinza pero cada empalme hay que saber hacerlo; y regar con lluvia no necesita tubería, aunque depende del viento.

**Lo formal.** En cobre, la categoría fija el ancho de banda: Cat 5e son 100 MHz, Cat 6 son 250, Cat 6A son 500, Cat 7 y 7A son 600 y 1 000, Cat 8 llega a 2 000. El canal admite 100 m, con 90 de enlace permanente y hasta 10 de latiguillos. La fibra monomodo tiene núcleo de 9 micrómetros y ventanas de 1310 y 1550 nm; la multimodo, 50 o 62,5 micrómetros y ventanas de 850 y 1300 nm. El aire es un espectro con bandas libres y bandas con licencia.

**Un ejemplo.** Dos ofertas de 10GBASE-T a 100 m: Cat 6A con RJ45 o Cat 7 "superior" con conector especial. La velocidad es la misma y el Cat 7 solo añade ancho de banda que ese PHY no usa. En fibra, 850 nm pierde unos 3,5 dB/km y 1310 nm unos 1,5: el multimodo barato deja de serlo cuando la distancia crece.

### 5. La trama: detectar el error y no ahogar al receptor

**La intuición.** Enviar cajas con etiqueta y número de seguimiento: si llega una abollada se pide repetir, y si el almacén se llena se avisa al que envía para que frene.

**Lo formal.** El enlace delimita tramas, las direcciona, detecta errores y regula el ritmo. La paridad detecta un número impar de bits erróneos; el checksum es aritmética débil; el CRC, con su polinomio, detecta cualquier ráfaga menor que su grado y es el que usa Ethernet con 32 bits. Para recuperar se usa ARQ: parada y espera, retroceso N o repetición selectiva, con ventana. Flujo y errores no son lo mismo: uno protege al receptor, el otro al dato.

**Un ejemplo.** Enlace de 1 Mb/s, tramas de 1 000 bits y 20 ms de propagación: transmitir cuesta 1 ms y esperar otros 40, así que la eficiencia con parada y espera es 1/41, un 2,4 por ciento. Con ventana de 7 sube a 7/41, un 17. El tiempo de ida y vuelta, no la velocidad del cable, es lo que se desperdicia.

### 6. La dirección y la ruta

**La intuición.** Una dirección postal con portal, planta y puerta: no dice por qué calles va el cartero, solo dónde acaba el envío. El cartero puede cambiar de ruta sin que tú cambies de dirección.

**Lo formal.** IPv4 usa 32 bits y máscara contigua que separa red y host. Con n bits de host hay 2 elevado a n direcciones, menos dos: la de red y la de broadcast. El prefijo se escribe en CIDR, por ejemplo /26. IPv6 usa 128 bits, sin broadcast, con multicast y anycast. El encaminamiento elige el siguiente salto por el prefijo más específico.

**Un ejemplo.** 192.168.10.0/24 en cuatro subredes /26: de 1 a 62 con broadcast 63; de 65 a 126 con 127; de 129 a 190 con 191; de 193 a 254 con 255. El error clásico es contar 64 hosts en vez de 62, y el siguiente es dar la dirección de broadcast a un servidor.

### 7. El equipo y el contrato

**La intuición.** Comprar un coche no es comparar potencia: cuentan el consumo, el taller y la garantía. Dos ofertas con la misma potencia pueden costar lo mismo al año y no valer lo mismo el día de la avería.

**Lo formal.** Cada equipo trabaja en un nivel: repetidor y concentrador en el físico; puente y conmutador en el enlace; router y conmutador de nivel 3 en red; pasarela en niveles altos; cortafuegos y servidor VPN según configuración. En el contrato, el CIR es el caudal garantizado y el PIR el techo; la simetría dice si la subida iguala a la bajada; el SLA fija disponibilidad, latencia, fluctuación y tiempo de reparación.

**Un ejemplo.** Veinte puestos con videollamada necesitan unos 5 Mb/s de subida cada uno en hora punta, 100 Mb/s sostenidos. Una oferta de 1 Gb con 300 de subida y CIR de 100 cumple; una de 600/100 no, aunque su bajada sea mayor. Y 99,9 por ciento anual son 8,76 horas de corte; 99,5 son casi 44. Esa cláusula decide si la planta trabaja un martes por la mañana.

## Las confusiones que cuestan puntos

**Ancho de banda frente a caudal.** El ancho de banda es capacidad física; el caudal es lo medido, y en radio suele quedar entre el 40 y el 60 por ciento de la cifra teórica.

**dB frente a dBm.** El dB es una diferencia, ganancia o pérdida, sin referencia; el dBm es potencia absoluta referida a 1 mW. Un cable no tiene dBm.

**Control de flujo frente a control de errores.** El flujo evita desbordar el búfer del receptor; los errores evitan entregar datos corruptos.

**Conmutador frente a router.** El conmutador decide por MAC dentro de la misma red; el router decide por IP entre redes distintas.

**Cat 7 frente a Cat 6A.** Cat 7 tiene más ancho de banda y peor compatibilidad: sus conectores no son RJ45. Para 10GBASE-T a 100 m, Cat 6A es la elección estándar.

**Caudal contratado frente a caudal garantizado.** El "hasta" del folleto es el PIR; lo reclamable es el CIR. La sobreventa vive en esa diferencia.

## Tres ideas que completan el cuadro

**El candado y la llave.** Cifrar con una sola clave es un candado cuya llave tienes que hacer llegar al otro, y ahí está el riesgo. La criptografía asimétrica da a cada persona un buzón público: cualquiera deja un mensaje cifrado con la clave pública, y solo el dueño lo abre con la privada. Lo que queda es saber que el buzón es de quien dice, y para eso están los certificados, que son el sello de una autoridad en que todos confían. TLS, SSH e IPsec son tres formas de aplicar la misma idea en sitios distintos.

**El callejero y los acuerdos entre ciudades.** OSPF es el callejero de tu ciudad: cada router conoce el mapa entero y calcula la ruta más corta. BGP es el acuerdo entre ciudades: no importa cuál es la calle más corta, importa con quién has firmado el paso, y por eso decide por política. Una empresa con una sola salida necesita una ruta fija; con varias sedes, el callejero; con dos operadores propios, los acuerdos.

**La factura de cinco años.** El precio del equipo es la punta del iceberg: debajo están el soporte, el consumo, las horas de quien lo administra y, sobre todo, las horas con la red parada. Por eso una oferta a la mitad de precio puede costar cuatro veces más al final. Y la disponibilidad se compone: tres piezas en fila, cada una con un 99,9 por ciento, no dan un 99,9 sino un 99,7; dos piezas en paralelo, cada una con un 99, dan un 99,99. Duplicar el eslabón débil rinde más que mejorar todos los demás.

## Conexiones

Esta unidad es el suelo de las demás. El [proyecto y el cableado](../02_Proyecto_Red/README.md) usan el presupuesto de potencia, las categorías y las longitudes de 90 y 100 m que aquí se justifican: allí se dibuja el plano, aquí se decide con qué se rellena. La [documentación técnica](../03_Documentacion_Tecnica/README.md) convierte estas decisiones en memoria y pliego según la norma UNE 157001:2014.

En el tercer módulo, la [Equipos y servicios de red](../../03_Administracion/01_Equipos_Servicios/README.md) retoma IP, TCP y los protocolos de aplicación y los lleva al detalle de configuración: lo que aquí es un mapa de capas, allí es una sesión de consola.

## Autoevaluación

1. ¿En qué capa trabaja un conmutador y en cuál un router?
2. Un enlace tiene cuatro conectores de 0,4 dB y 60 m de cable a 0,2 dB/m. ¿Cuánto pierde?
3. Expresa 0,5 mW en dBm y explica el paso.
4. ¿Por qué 3 dB equivale a duplicar?
5. Canal de 4 kHz con relación señal ruido de 20 dB: ¿límite de Shannon?
6. ¿Por qué un código con componente continua no atraviesa un transformador?
7. ¿Qué aporta la WDM frente al TDM?
8. ¿Cuántas subredes de 30 hosts útiles salen de 10.0.0.0/24 y cuál es el broadcast de la tercera?
9. ¿Qué detecta un CRC de 32 bits que no detecta la paridad simple?
10. Con 99,9 por ciento de disponibilidad, ¿cuántas horas de corte al año?
11. ¿Qué tabla usa un conmutador y qué decide con ella?
12. ¿Por qué la criptografía asimétrica no sustituye a la simétrica en el cifrado de datos?
13. ¿Cuándo usarías OSPF y cuándo BGP?
14. Tres equipos en serie al 99,9 por ciento cada uno: ¿qué disponibilidad total hay?

## Claves

1. El conmutador en enlace (nivel 2) y el router en red (nivel 3); un equipo multicapa suma funciones, no cambia de nivel.
2. Conectores 1,6 dB y cable 12 dB: 13,6 dB.
3. La mitad de 1 mW son menos 3 dBm.
4. Porque el dB es logarítmico: 10 × log10(2) es 3,01. Sumar 3 unidades multiplicaría por 1 000.
5. S/N de 20 dB es 100; C = 4 000 × log2(101), unos 26,6 kb/s.
6. Porque el transformador no transmite nivel continuo y además se pierde la referencia de reloj; Manchester y 4B/5B lo evitan.
7. La WDM reparte longitudes de onda en la misma fibra sin repartir tiempo; el TDM reparte el tiempo de un solo canal.
8. Hace falta un /27, así que ocho subredes; la tercera es 10.0.0.64/27 con broadcast 10.0.0.95.
9. Ráfagas menores que el grado del polinomio y errores múltiples con altísima probabilidad; la paridad solo ve impares.
10. El 0,1 por ciento de 8 760 horas: 8,76 horas.
11. La tabla de direcciones MAC; decide por qué puerto reenviar cada trama.
12. Porque es cientos de veces más lenta: se usa para acordar una clave de sesión y con esa clave la simétrica cifra los datos.
13. OSPF dentro de una red con varios routers, para el camino más corto; BGP entre sistemas autónomos, cuando hay política entre operadores.
14. El producto: 0,999 al cubo, un 99,70 por ciento, unas 26 horas de corte al año.
