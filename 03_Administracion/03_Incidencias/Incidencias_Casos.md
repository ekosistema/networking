---
title: "Incidencias · Casos prácticos resueltos"
description: "Casos prácticos resueltos de la unidad Incidencias."
section: administracion
unit: incidencias
kind: casos
order: 83
tags:
  - redes
  - incidencias
  - casos
---

# Incidencias · Casos prácticos resueltos

> **Cómo usar esto.** Cada caso trae enunciado, solución y una rúbrica de diez puntos para autoevaluarte.
> Resuélvelo primero sin mirar la solución y puntúate. Lo que más enseña es **justificar** cada decisión:
> una respuesta correcta sin razón sirve de poco en un trabajo real.

Los seis casos recorren los temas de la unidad: gestión y prioridad
(contenido 1), diagnóstico local o de operador, descubrimiento de nodos, captura y
análisis de tráfico, herramientas hardware y problemas, conocimiento y
negocio.

## Caso 1. Prioridad, SLA e indicadores

**Enunciado.** Plazos: P1 respuesta 15 min y resolución 4 h; P2 1 h y 8 h; P3 4 h y 16 h laborables;
P4 8 h y 40 h laborables. El reloj se pausa mientras se espera al usuario. Tickets del mes:

| Ticket | Descripción | Impacto | Urgencia | Duración total | Pausa por usuario |
| --- | --- | --- | --- | --- | --- |
| T1 | Sede sin red | Alto | Alta | 3,5 h | 0 |
| T2 | Facturación sin red el último día del mes | Medio | Alta | 9,5 h | 2 h |
| T3 | Un puesto sin impresora | Bajo | Media | 20 h | 0 |
| T4 | Cambio de ratón en un puesto | Bajo | Baja | 30 h | 0 |
| T5 | Servidor de ficheros inaccesible, servicio crítico | Alto | Alta | 5,25 h | 0 |
| T6 | Aula sin red | Medio | Alta | 6 h | 0 |

**Se pide.**

1. Asignar la prioridad de cada ticket con la matriz de impacto por urgencia.
2. Comprobar el cumplimiento de resolución de cada uno (con el reloj pausado).
3. Calcular el porcentaje de cumplimiento del SLA y el MTTR.
4. Decir qué ocurre si el compromiso es del 90 por ciento.

**Solución.**

| Ticket | Prioridad | Tiempo contado | Plazo | ¿Cumple? |
| --- | --- | --- | --- | --- |
| T1 | P1 (alto y alta) | 3,5 h | 4 h | Sí |
| T2 | P2 (medio y alta) | 9,5 - 2 = 7,5 h | 8 h | Sí |
| T3 | P4 (bajo y media) | 20 h | 40 h | Sí |
| T4 | P4 (bajo y baja) | 30 h | 40 h | Sí |
| T5 | P1 (alto y alta) | 5,25 h | 4 h | **No** |
| T6 | P2 (medio y alta) | 6 h | 8 h | Sí |

Cinco de los seis cumplen: solo T5, un servicio crítico, se pasa del plazo de 4 h.

```text
Cumplimiento = 5 de 6 = 83,3 por ciento
MTTR (tiempos contados) = (3,5 + 7,5 + 20 + 30 + 5,25 + 6) / 6 = 72,25 / 6 = 12,0 h
```

Si el compromiso es del 90 por ciento, **se incumple** (83,3 es menor que 90): hay que abrir una
revisión de la causa del T5 (servicio crítico fuera de plazo) y, según el contrato, aplicar el
crédito. El MTTR medio engaña: lo dominan los tickets de prioridad baja; conviene el MTTR **por
prioridad**.

**Rúbrica (10 puntos).** Apartado 1: 3 puntos. Apartado 2: 3. Apartado 3: 3. Apartado 4: 1.

**Error típico.** Contar el tiempo de espera del usuario dentro del SLA (T2 parecería incumplir) o
asignar la prioridad por la gravedad técnica.

## Caso 2. ¿Avería local o del operador?

**Enunciado.** Desde un PC de la sede se obtienen estos resultados:

```text
ping 192.168.10.1 (puerta)  -> 4 respuestas, 0,5 ms
arp -a                      -> 192.168.10.1  00-1a-2b-3c-4d-5e  (MAC del router)
ping 203.0.113.1 (1.er salto del operador) -> Tiempo de espera agotado (4 de 4)
ping 8.8.8.8                -> Tiempo de espera agotado (4 de 4)
tracert -d 8.8.8.8          -> 1: 192.168.10.1  <1 ms   2: *  *  *   3: *  *  *   ...
Desde el propio router:  ping 203.0.113.1 -> sin respuesta;  el equipo del operador, sin sincronía
```

**Se pide.**

1. Diagnosticar y situar la capa y el alcance.
2. Decidir si la avería es local o del operador, con las tres comprobaciones.
3. Redactar el aviso al operador.
4. ¿Qué cambiaría si, desde el router, el ping público respondiera y desde los puestos no?

**Solución.**

1. Con enlace, dirección y puerta de enlace correctas (ping y MAC del router), la red local funciona.
   El fallo está más allá de la puerta: capa 3 y 1 del acceso. Alcance: toda la sede.
2. **Prueba de la puerta:** responde. **Primer salto del operador:** no responde, y desde el router
   tampoco. **Destino:** no responde. Es el caso "responde, no responde, no responde": **fallo del
   proveedor**. La refuerza que el equipo del operador no tiene sincronía (capa 1 del acceso).
3. **Aviso:** cliente y circuito; inicio hoy a las 9:05; síntoma: sin salida a Internet, equipo del operador sin
   sincronía; alcance: toda la sede (unos 120 usuarios); pruebas: ping a la puerta ok, primer salto sin
   respuesta (también desde el router), traceroute con salida completa adjunta, red local sin errores;
   contacto: responsable de sistemas con disponibilidad. Se pide número de incidencia y se anota la hora.
4. Si el router tuviera salida y los puestos no, el fallo sería de **traducción de direcciones o de
   filtrado en el router**: se revisarían NAT, rutas y listas de acceso, no se escalaría al operador.

**Rúbrica (10 puntos).** Apartado 1: 2 puntos. Apartado 2: 3. Apartado 3: 3. Apartado 4: 2.

**Error típico.** Declarar avería del proveedor sin la prueba desde el router ni la tabla de rutas.

## Caso 3. Lectura de mtr, TTL y MTU

**Enunciado.** Se ejecuta `mtr -rwc 100 8.8.8.8` y se obtiene:

```text
HOST: pc12                 Loss%   Snt   Last   Avg  Best  Wrst
  1. 192.168.10.1            0.0   100    0.4   0.5   0.3   1.2
  2. 10.10.0.1               0.0   100    2.1   2.3   1.9   5.0
  3. 203.0.113.1            31.0   100   11.0  12.2  10.5  80.1
  4. 198.51.100.9           30.0   100   13.0  14.0  12.0  95.0
  5. 8.8.8.8                30.0   100   15.0  16.2  14.1  99.0
```

Además, un ping a un servidor devuelve TTL 61 (el servidor usa un TTL inicial de 64), y las pruebas
con el bit de no fragmentar dan: 1 372 bytes de datos, respuesta; 1 472, "Fragmentation needed".

**Se pide.**

1. Decir dónde empieza el problema y por qué.
2. Decir qué conclusión sacarías si solo el salto 3 mostrara pérdida.
3. Calcular cuántos routers hay hasta el servidor con TTL 61.
4. Calcular la MTU del camino.

**Solución.**

1. La pérdida aparece en el salto 3 y se mantiene en los siguientes (30 por ciento): **el problema
   empieza en el salto 3 o en el enlace hacia él**, ya fuera de la red propia (los saltos 1 y 2 están
   limpios). La regla es que la pérdida real se propaga.
2. Si solo el 3 perdiera y los 4 y 5 estuvieran limpios, sería un router que limita las respuestas
   ICMP: **no es una avería** y el servicio no se ve afectado.
3. TTL inicial 64, llega 61: **3 routers** en el camino.
4. Con 1 372 bytes de datos pasa: la MTU es al menos 1 372 + 28 = 1 400. Con 1 472 (que daría 1 500) no pasa:
   la MTU es menor que 1 500. Está **entre 1 400 y 1 499** y se afina probando tamaños intermedios. Algún
   tramo del camino (un túnel, por ejemplo) tiene menos de 1 500.

**Rúbrica (10 puntos).** Apartado 1: 3 puntos. Apartado 2: 3. Apartado 3: 2. Apartado 4: 2.

## Caso 4. Análisis de una captura

**Enunciado.** Tres capturas distintas muestran:

- **A.** Cinco paquetes DHCP DISCOVER cada pocos segundos desde un PC, sin ningún OFFER.
- **B.** Un 4,2 por ciento de segmentos marcados como retransmisión, con muchos ACK duplicados.
- **C.** Consultas DNS que reciben respuestas con código NXDOMAIN para un nombre interno.

**Se pide.**

1. Diagnosticar cada captura y proponer una comprobación.
2. Escribir el filtro de visualización de cada una.
3. Decir qué puntos de captura serían más fiables y qué límite tiene el tráfico cifrado.

**Solución.**

| Captura | Diagnóstico | Comprobación |
| --- | --- | --- |
| A | El DHCP no contesta en esa red: servidor caído, VLAN errónea o falta de relay | Mirar la VLAN del puerto y si el DHCP escucha en esa subred |
| B | Pérdida o congestión en el camino (más del 1 por ciento es significativo) | Contadores de errores de las interfaces, ping largo y revisar el enlace |
| C | El nombre no existe en la zona o el cliente usa un DNS que no la contiene | Consultar el DNS interno con `nslookup` y revisar el DNS del cliente |

```text
A:  bootp || dhcp
B:  tcp.analysis.retransmission || tcp.analysis.duplicate_ack
C:  dns.flags.rcode == 3
```

3. Lo más fiable es capturar en el **puerto espejo (SPAN)** o con un **TAP** del punto sospechoso,
   y cerca del cliente que falla y del servidor. Un punto mal situado solo enseña parte del camino.
   El tráfico cifrado (TLS) se ve como bytes: se puede ver quién habla con quién, puertos, tamaños y
   tiempos, pero no el contenido.

**Rúbrica (10 puntos).** Apartado 1: 4 puntos. Apartado 2: 3. Apartado 3: 3.

## Caso 5. Herramientas hardware: elegir e interpretar

**Enunciado.** Cinco casos y sus lecturas:

1. Un puesto sin enlace; el comprobador de cableado muestra los pares 4 y 5 abiertos.
2. Un reflectómetro (TDR) mide un eco con tiempo de ida y vuelta de 230 ns, con NVP de 0,69.
3. Un teléfono IP se reinicia; el polímetro mide 36 V en el puerto PoE.
4. Un enlace pasa el mapa, pero el certificador da NEXT fuera de margen.
5. En un armario con 200 latiguillos iguales, hay que identificar el puerto de una roseta concreta.

**Se pide.** Para cada caso, indicar herramienta, interpretación y acción.

**Solución.**

```text
2. Distancia = c x NVP x t / 2 = 300 000 000 x 0,69 x 230 x 10^-9 / 2 = 23,8 m
```

| Caso | Herramienta | Interpretación | Acción |
| --- | --- | --- | --- |
| 1 | Comprobador | Par abierto por crimpado deficiente: mapa incorrecto aunque hay "enlace" a 100 Mb/s | Recrimpar y certificar si el enlace debe ir a gigabit |
| 2 | TDR | Rotura o defecto a unos 24 m del extremo de medida | Abrir la canalización a esa distancia y reparar |
| 3 | Polímetro | 36 V está fuera del margen de 44 a 57 V: potencia insuficiente o cable largo o dañado | Medir la alimentación, usar PoE+ o acortar el tramo |
| 4 | Certificador | Destrenzado excesivo en el conector (el mapa no lo detecta) | Rehacer la terminación y volver a certificar |
| 5 | Generador y localizador de tonos | Identificación del cable sin desconectar el equivocado | Etiquetar el puerto |

**Límites a recordar.** El polímetro no ve la diafonía ni la atenuación; el comprobador da un
veredicto de continuidad, no de calidad; el TDR dice dónde está la rotura, no si el enlace aguanta
gigabit; el localizador de tonos no detecta averías.

**Rúbrica (10 puntos).** Dos puntos por caso (herramienta correcta, interpretación y acción).

## Caso 6. Problemas, conocimiento y coste

**Enunciado.** En un mes hay 150 incidencias: 45 de direcciones IP y DHCP, 33 de cableado, 21 de DNS,
18 de Wi-Fi, 15 de impresoras y 18 de otros tipos. Una incidencia cuesta de media 60 euros (técnico y
espera del usuario). Un rediseño del DHCP y las VLAN de aula costaría 3 000 euros y eliminaría el 80 por
ciento de las incidencias de IP.

**Se pide.**

1. Hacer el Pareto y decir qué problema se abre primero.
2. Calcular el ahorro y el plazo de recuperación del rediseño.
3. Escribir la estructura de un artículo de la base de conocimiento para ese síntoma.
4. Proponer tres indicadores del mes para dirección.

**Solución.**

| Categoría | Incidencias | Porcentaje | Acumulado |
| --- | --- | --- | --- |
| IP y DHCP | 45 | 30 por ciento | 30 por ciento |
| Cableado | 33 | 22 por ciento | 52 por ciento |
| DNS | 21 | 14 por ciento | 66 por ciento |
| Wi-Fi | 18 | 12 por ciento | 78 por ciento |
| Impresoras | 15 | 10 por ciento | 88 por ciento |
| Otros | 18 | 12 por ciento | 100 por ciento |

```text
2. Incidencias eliminadas = 45 x 0,80 = 36 al mes
   Ahorro mensual = 36 x 60 = 2 160 euros; anual = 2 160 x 12 = 25 920 euros
   Recuperacion = 3 000 / 2 160 = 1,4 meses
```

1. El primero: **IP y DHCP**, la mayor categoría y con el mejor retorno.
2. (calculado arriba).
3. **Artículo:** título "Puesto sin dirección IP (169.254.x.x)"; afecta a puestos de aula; causa: sin
   respuesta del DHCP, VLAN errónea o falta de relay; pasos: 1. `ipconfig /all`; 2. comprobar el puerto y la
   VLAN; 3. probar otro puerto; 4. mirar el DHCP; comprobación: `ipconfig /renew` y ping a la puerta;
   escalar: si el DHCP no responde en toda la VLAN.
4. **Indicadores:** cumplimiento del SLA por prioridad, MTTR por prioridad, resolución en primer contacto
   y número de incidencias repetidas con problema abierto.

**Rúbrica (10 puntos).** Apartado 1: 3 puntos. Apartado 2: 3. Apartado 3: 2. Apartado 4: 2.

## Autocorrección

| Caso | Tu nota | Qué repasar si fallas |
| --- | --- | --- |
| 1. Prioridad y SLA | | Apartados 1.2, 1.3 y 1.8 |
| 2. Local u operador | | Apartados 5.3 y 5.5 |
| 3. mtr, TTL y MTU | | Apartados 4.3, 4.4 y 4.7 |
| 4. Capturas | | Apartado 4.2 |
| 5. Hardware | | Apartado 3 |
| 6. Problemas y coste | | Apartado 1.6 y perspectiva empresarial |
