---
title: "Mercado de comunicaciones · Casos prácticos resueltos"
description: "Casos prácticos resueltos de la unidad Mercado de comunicaciones."
section: diseno
unit: mercado
kind: casos
order: 13
tags:
  - redes
  - mercado
  - casos
  - subredes
  - fibra
---

# Mercado de comunicaciones · Casos prácticos resueltos

> **Cómo usar esto.** Cada caso trae enunciado, solución y una rúbrica de diez puntos para autoevaluarte.
> Resuélvelo primero sin mirar la solución y puntúate. Lo que más enseña es **justificar** cada decisión:
> una respuesta correcta sin razón sirve de poco en un trabajo real.

Los seis casos recorren los temas de la unidad:
presupuesto óptico, direccionamiento, disponibilidad y contratación, capacidad del canal, seguridad perimetral (contenido 6) y comparación de ofertas
por economía y rendimiento.

## Caso 1. Enlace de fibra entre la sede y el almacén

**Enunciado.** Una empresa quiere unir su sede con un almacén a 12 km con fibra monomodo G.652 en
la ventana de 1310 nm. El transceptor entrega como mínimo menos 3 dBm y su sensibilidad mínima es
de menos 26 dBm. El trazado lleva 4 conectores de 0,3 dB y 5 empalmes de fusión de 0,1 dB. La
atenuación de la fibra es de 0,35 dB/km en 1310 nm y de 0,20 dB/km en 1550 nm. La empresa exige una
reserva de 3 dB para envejecimiento y reparaciones.

**Se pide.**

1. Calcular las pérdidas totales y el margen del enlace.
2. Decidir si el enlace es viable con la reserva exigida.
3. Calcular la distancia máxima en 1310 nm, manteniendo conectores, empalmes y reserva.
4. Calcular la misma distancia si el transceptor trabaja en 1550 nm.

**Solución.**

```text
1. Fibra:       12 km x 0,35 dB/km = 4,2 dB
   Conectores:  4 x 0,3            = 1,2 dB
   Empalmes:    5 x 0,1            = 0,5 dB
   Perdidas totales                = 5,9 dB
   Potencia recibida = -3 - 5,9    = -8,9 dBm
   Margen = -8,9 - (-26)           = 17,1 dB

2. Margen tras la reserva: 17,1 - 3 = 14,1 dB. Es positivo y holgado: es viable.

3. Presupuesto disponible = salida - sensibilidad - reserva
                          = -3 - (-26) - 3 = 20 dB
   Se quitan conectores y empalmes: 20 - 1,2 - 0,5 = 18,3 dB para la fibra
   Distancia = 18,3 / 0,35 = 52,3 km   -> unos 52 km

4. En 1550 nm: 18,3 / 0,20 = 91,5 km  -> unos 91 km
```

**Rúbrica (10 puntos).** Apartado 1: 3 puntos (1 por cada pérdida bien sumada, 1 por el margen).
Apartado 2: 2 puntos (conclusión razonada con la reserva). Apartado 3: 3 puntos (método correcto 2,
resultado 1). Apartado 4: 2 puntos.

**Comentario.** En la práctica, a 52 km habría más empalmes y probablemente hubiera que añadir
dispersión cromática al análisis. La cifra es el techo teórico del presupuesto de potencia, no una
promesa del enlace.

## Caso 2. Plan de direccionamiento con VLSM

**Enunciado.** Se dispone del bloque 192.168.40.0/24 para una pyme con estas redes: Administración
con 50 equipos, Ventas con 25, Almacén con 12, Servidores con 6 y un enlace punto a punto entre dos
routers.

**Se pide.**

1. Asignar a cada red el prefijo más ajustado y justificar el cálculo.
2. Escribir para cada una la dirección de red, la máscara, el rango de hosts útiles y el broadcast.
3. Indicar cuántas direcciones quedan libres y dónde empieza el primer bloque libre alineado.

**Solución.** Se ordena de mayor a menor y se asigna desde el principio. Hosts útiles = 2 elevado
a n menos 2, y hay que contar siempre red y broadcast.

| Red | Necesita | Potencia de 2 | Prefijo | Máscara |
| --- | --- | --- | --- | --- |
| Administración | 50 | 64 (6 bits de host) | /26 | 255.255.255.192 |
| Ventas | 25 | 32 (5 bits) | /27 | 255.255.255.224 |
| Almacén | 12 | 16 (4 bits) | /28 | 255.255.255.240 |
| Servidores | 6 | 8 (3 bits) | /29 | 255.255.255.248 |
| Enlace | 2 | 4 (2 bits) | /30 | 255.255.255.252 |

| Red | Dirección de red | Hosts útiles | Broadcast |
| --- | --- | --- | --- |
| Administración | 192.168.40.0/26 | .1 a .62 | .63 |
| Ventas | 192.168.40.64/27 | .65 a .94 | .95 |
| Almacén | 192.168.40.96/28 | .97 a .110 | .111 |
| Servidores | 192.168.40.112/29 | .113 a .118 | .119 |
| Enlace | 192.168.40.120/30 | .121 y .122 | .123 |

Libres: de .124 a .255, es decir 132 direcciones. El primer bloque libre alineado de tamaño /30
empieza en 192.168.40.124 y el primero de tamaño /25 en 192.168.40.128.

**Rúbrica (10 puntos).** Prefijos correctos: 5 puntos (1 por red). Direcciones de red, rango y
broadcast: 3 puntos. Orden de asignación justificado: 1 punto. Espacio libre: 1 punto.

**Errores típicos.** Asignar un /27 a los 25 equipos de Ventas y otro /27 a los 50 de Administración
(el segundo no cabe: 30 hosts útiles). Dar el prefijo por hosts y no por hosts más dos. Empezar por
el más pequeño y dejar huecos sin alinear.

## Caso 3. Disponibilidad de una cadena de equipos

**Enunciado.** La conexión a Internet de una oficina depende, en serie, de un router (99,95 por
ciento de disponibilidad anual), un conmutador (99,9) y el enlace del operador (99,9). Una hora de
parada cuesta 600 euros.

**Se pide.**

1. Disponibilidad total y horas de corte al año.
2. Lo mismo si se contrata un segundo operador con el mismo 99,9, en paralelo con el primero.
3. Lo mismo si además se duplica el router. ¿Cuál es ahora el eslabón dominante?
4. Disponibilidad de un equipo con MTBF de 4 000 horas y MTTR de 6 horas.
5. Coste anual de las paradas en los casos 1 y 2.

**Solución.**

```text
1. En serie se multiplica:
   A = 0,9995 x 0,999 x 0,999 = 0,99750  -> 99,75 por ciento
   Corte = 8 760 x (1 - 0,99750) = 21,9 horas al ano

2. Dos operadores en paralelo: 1 - (0,001 x 0,001) = 0,999999
   A = 0,9995 x 0,999 x 0,999999 = 0,99850 -> 99,85 por ciento
   Corte = 8 760 x 0,0015 = 13,1 horas al ano

3. Router doble: 1 - (0,0005 x 0,0005) = 0,99999975
   A = 0,99999975 x 0,999 x 0,999999 = 0,99900 -> 99,90 por ciento
   Corte = 8,8 horas al ano. El eslabon dominante es el conmutador (99,9), unico.

4. A = MTBF / (MTBF + MTTR) = 4 000 / 4 006 = 0,99850 -> 99,85 por ciento

5. Caso 1: 21,9 h x 600 = 13 140 euros al ano
   Caso 2: 13,1 h x 600 =  7 860 euros al ano  (se ahorran 5 280 euros al ano)
```

**Rúbrica (10 puntos).** Apartado 1: 2 puntos. Apartado 2: 2. Apartado 3: 2 (1 por el cálculo, 1 por
identificar el conmutador). Apartado 4: 2. Apartado 5: 2.

**Conclusión de diseño.** Duplicar el operador ahorra 5 280 euros al año; duplicar además el router
ahorra otros 4,3 horas de parada. La cadena es tan fiable como su peor eslabón: cuando todos los
demás están duplicados, el siguiente a duplicar es el conmutador.

## Caso 4. Capacidad del canal y relación señal a ruido

**Enunciado.** Un punto de acceso trabaja en un canal de 20 MHz. A 8 metros del cliente, la señal
recibida es de menos 65 dBm. El nivel de ruido térmico viene dado por la constante de Boltzmann a
290 K, que equivale a menos 174 dBm por hercio.

**Se pide.**

1. Calcular el suelo de ruido térmico en el canal.
2. Calcular la relación señal a ruido en dB y como razón lineal.
3. Calcular el límite de Shannon.
4. Comparar con un canal de 40 MHz con la misma señal total. ¿Qué cambia y por qué no se duplica la
   velocidad?
5. ¿Cuántos bits por símbolo hay que usar con 256-QAM, y cuántos con 1024-QAM?

**Solución.**

```text
1. N = -174 + 10 log10(20 000 000) = -174 + 73,0 = -101 dBm
2. SNR = -65 - (-101) = 36 dB  ->  10 elevado a 3,6 = 3 981 en lineal
3. C = B x log2(1 + S/N) = 20 000 000 x log2(3 982) = 20 000 000 x 11,96
     = unos 239 Mb/s
4. Con 40 MHz: N = -174 + 76 = -98 dBm; SNR = -65 - (-98) = 33 dB = 1 986
   C = 40 000 000 x log2(1 996) = 40 000 000 x 10,96 = unos 438 Mb/s
   La velocidad sube un 83 por ciento, no el 100: al ensanchar el canal entra mas ruido
   y la relacion senal a ruido baja 3 dB.
5. 256-QAM: 8 bits por simbolo (2 elevado a 8). 1024-QAM: 10 bits por simbolo.
```

**Rúbrica (10 puntos).** Apartado 1: 2 puntos. Apartado 2: 2. Apartado 3: 2. Apartado 4: 3 (2 por el
cálculo, 1 por la explicación). Apartado 5: 1.

**Comentario.** Shannon es un techo teórico. Los equipos reales rinden entre el 40 y el 60 por
ciento de esa cifra por sobrecarga de protocolo, retransmisiones y modulaciones no ideales. Y el
ruido real de un receptor es mayor que el térmico: hay que sumar su figura de ruido.

## Caso 5. Cortafuegos con zona desmilitarizada

**Enunciado.** Una empresa publica su web (HTTPS) desde un servidor y quiere administrarlo por SSH
desde la red interna. Los empleados deben poder navegar por Internet. El servidor web consulta una
base de datos en la red interna. El cortafuegos tiene tres interfaces: externa (eth0), DMZ (eth1) e
interna (eth2).

**Se pide.**

1. Dibujar la tabla de reglas en orden, con denegación por defecto.
2. Indicar qué ocurre si se compromete el servidor web: qué puede alcanzar el atacante.
3. Resolver el problema de la base de datos sin abrir la DMZ hacia el interior.

**Solución.**

| Regla | Origen | Destino | Servicio | Acción |
| --- | --- | --- | --- | --- |
| 1 | Conexiones ya establecidas | Cualquiera | Cualquiera | Permitir |
| 2 | Internet (eth0) | Servidor web (eth1) | 443/TCP | Permitir |
| 3 | Interna (eth2) | Internet (eth0) | 80 y 443/TCP | Permitir |
| 4 | Interna (eth2) | Servidor web (eth1) | 22/TCP | Permitir |
| 5 | Cualquiera | Cualquiera | Cualquiera | Denegar |

1. La regla 1 deja pasar las respuestas, y la 5 deniega todo lo demás; por eso no hace falta una
   regla explícita de DMZ a interna: queda cubierta por la denegación por defecto.
2. El atacante que domine el servidor web solo ve lo que las reglas permiten: no puede iniciar
   conexiones hacia la red interna (la 4 es solo de interna a DMZ). Puede intentar saltar a otros
   equipos de la DMZ y salir a Internet si hubiera regla; por eso la DMZ debe ser mínima.
3. Dos soluciones válidas. La mejor es que el servidor web **no** consulte la base de datos
   directamente: se pone una réplica de solo lectura dentro de la DMZ, o una API intermedia, y los
   datos viajan desde el interior hacia la DMZ (nunca al revés). Si no queda más remedio, se abre
   una única regla de DMZ a la base de datos, con un puerto concreto, solo desde la IP del
   servidor web, y se registra en el log.

**Rúbrica (10 puntos).** Tabla ordenada con denegación por defecto: 4 puntos. Cada regla con
origen, destino y servicio completos: 2. Consecuencia del compromiso: 2. Solución a la base de datos
razonada: 2.

**Error típico.** Poner la regla de denegar antes de las de permitir, o permitir "cualquiera a
cualquiera" en la DMZ por comodidad.

## Caso 6. Elegir entre tres ofertas por economía y rendimiento

**Enunciado.** Una oficina de 30 puestos necesita un conmutador de acceso. Se reciben tres ofertas.
Una hora de parada cuesta 400 euros y se evalúa a cinco años.

| Dato | Oferta P | Oferta Q | Oferta R |
| --- | --- | --- | --- |
| Compra (euros) | 3 000 | 1 800 | 2 200 |
| Soporte al año (euros) | 250 | 0 | 120 |
| Energía al año (euros) | 70 | 110 | 90 |
| Administración al año (euros) | 100 | 350 | 200 |
| Sustitución prevista (euros, una vez) | 0 | 500 | 0 |
| Disponibilidad | 99,99 por ciento | 99,9 por ciento | 99,95 por ciento |

**Se pide.**

1. Calcular el TCO a cinco años de cada oferta, sin y con el coste de las paradas.
2. Aplicar una matriz ponderada con los pesos: coste total 40, rendimiento 20, soporte 20,
   escalabilidad 10, facilidad de gestión 10. Las puntuaciones de 1 a 5 son: P (5, 4, 5, 4, 4),
   Q (2, 3, 2, 2, 2) y R (3, 4, 3, 3, 3).
3. ¿Qué oferta ganaría si solo se mirase el precio de compra? Comentar.

**Solución.**

```text
1. TCO sin paradas = compra + 5 x (soporte + energia + administracion) + sustitucion
   P: 3 000 + 5 x (250 + 70 + 100)       = 5 100
   Q: 1 800 + 5 x (0 + 110 + 350) + 500  = 4 600
   R: 2 200 + 5 x (120 + 90 + 200)       = 4 250

   Paradas: horas al ano = 8 760 x (1 - disponibilidad); a 5 anos y 400 euros/hora
   P: 0,876 h/ano x 5 = 4,38 h   x 400 =  1 752
   Q: 8,76  h/ano x 5 = 43,8 h   x 400 = 17 520
   R: 4,38  h/ano x 5 = 21,9 h   x 400 =  8 760

   TCO con paradas:   P = 6 852    Q = 22 120    R = 13 010

2. P: 5x40 + 4x20 + 5x20 + 4x10 + 4x10 = 200 + 80 + 100 + 40 + 40 = 460 -> 4,60
   Q: 2x40 + 3x20 + 2x20 + 2x10 + 2x10 =  80 + 60 +  40 + 20 + 20 = 220 -> 2,20
   R: 3x40 + 4x20 + 3x20 + 3x10 + 3x10 = 120 + 80 +  60 + 30 + 30 = 320 -> 3,20

3. Solo por precio de compra ganaria Q (1 800), que es la peor opcion con diferencia:
   su TCO con paradas es 3,2 veces el de P.
```

**Rúbrica (10 puntos).** Apartado 1: 5 puntos (3 por el TCO sin paradas, 2 por las paradas).
Apartado 2: 3 puntos. Apartado 3: 2 puntos (identificar Q y razonar con el TCO).

**Qué se evalúa de verdad.** Que no recomiendes lo barato por inercia y que sepas justificar con
números una decisión que otro firma.

## Autocorrección

| Caso | Tu nota | Qué repasar si fallas |
| --- | --- | --- |
| 1. Fibra | | Sección 3.4 y procedimiento 1 del técnico |
| 2. VLSM | | Sección 6.1 y procedimiento 2 |
| 3. Disponibilidad | | Sección de perspectiva empresarial, SLA |
| 4. Shannon y ruido | | Secciones 2.3 a 2.7 |
| 5. Cortafuegos | | Sección 6.4 |
| 6. Ofertas | | Sección de perspectiva empresarial, TCO y matriz |

Por debajo de 7 sobre 10 en un caso, repítelo en blanco a los dos días. Por encima de 8, pasa
al siguiente.
