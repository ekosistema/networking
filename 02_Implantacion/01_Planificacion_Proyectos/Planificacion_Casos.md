---
title: "Planificación de proyectos · Casos prácticos resueltos"
description: "Casos prácticos resueltos de la unidad Planificación de proyectos."
section: implantacion
unit: planificacion
kind: casos
order: 43
tags:
  - redes
  - planificacion
  - casos
---

# Planificación de proyectos · Casos prácticos resueltos

> **Cómo usar esto.** Cada caso trae enunciado, solución y una rúbrica de diez puntos para autoevaluarte.
> Resuélvelo primero sin mirar la solución y puntúate. Lo que más enseña es **justificar** cada decisión:
> una respuesta correcta sin razón sirve de poco en un trabajo real.

Los seis casos recorren los temas de la unidad: camino crítico y
holguras, estimación PERT, EDT, paquetes y unidad de obra,
presupuesto y precios descompuestos, cargas, aprovisionamientos y plan de materiales y control económico con valor ganado.

## Caso 1. Camino crítico, holguras e incidencias

**Enunciado.** La implantación de una red tiene estas tareas (duración en días laborables):

| Código | Tarea | Duración | Predecesoras |
| --- | --- | --- | --- |
| A | Replanteo y pedidos | 2 | Ninguna |
| B | Canalizaciones | 4 | A |
| C | Cableado horizontal | 6 | B |
| D | Fibra vertical | 3 | B |
| E | Montaje de armarios | 2 | A |
| F | Configuración de electrónica | 5 | C, D, E |
| G | Pruebas y certificación | 3 | F |
| H | Entrega y formación | 2 | G |

**Se pide.**

1. Calcular ES, EF, LS, LF y las holguras total y libre de cada tarea.
2. Indicar el camino crítico y la duración total.
3. ¿Qué ocurre si C se retrasa 2 días? ¿Y si D se retrasa 2? ¿Y si D se retrasa 4?
4. Dibujar el diagrama de Gantt.

**Solución.**

```text
Pasada hacia adelante:  A 0-2 | B 2-6 | E 2-4 | C 6-12 | D 6-9
                        F empieza en max(12, 9, 4) = 12: 12-17 | G 17-20 | H 20-22
Pasada hacia atras:     H 20-22 | G 17-20 | F 12-17
                        C LF 12, LS 6 | D LF 12, LS 9 | E LF 12, LS 10
                        B LF = min(LS de C, LS de D) = 6, LS 2 | A LF = min(2, 10) = 2, LS 0
```

| Tarea | ES | EF | LS | LF | Holgura total | Holgura libre |
| --- | --- | --- | --- | --- | --- | --- |
| A | 0 | 2 | 0 | 2 | 0 | 0 |
| B | 2 | 6 | 2 | 6 | 0 | 0 |
| C | 6 | 12 | 6 | 12 | 0 | 0 |
| D | 6 | 9 | 9 | 12 | 3 | 3 |
| E | 2 | 4 | 10 | 12 | 8 | 8 |
| F | 12 | 17 | 12 | 17 | 0 | 0 |
| G | 17 | 20 | 17 | 20 | 0 | 0 |
| H | 20 | 22 | 20 | 22 | 0 | 0 |

**Camino crítico: A, B, C, F, G, H.** Duración 2 + 4 + 6 + 5 + 3 + 2 = 22 días. D tiene 3 días de
holgura y E, 8.

**Incidencias.** Si C se retrasa 2 días, el proyecto dura 24 (C es crítica). Si D se retrasa 2 días,
no pasa nada (3 de holgura). Si D se retrasa 4 días, el proyecto se retrasa 1 día (4 menos 3) y D
pasa a ser crítica.

```text
Gantt (cada columna es un dia; el punto es espera)
      1234567890123456789012
A     ==....................
B     ..====................
C     ......======..........
D     ......===.............
E     ..==..................
F     ............=====.....
G     .................===..
H     ....................==
```

**Rúbrica (10 puntos).** Apartado 1: 4 puntos. Apartado 2: 2. Apartado 3: 2. Apartado 4: 2.

**Error típico.** Sumar todas las duraciones (la duración es la del camino más largo) o calcular
la holgura de E como cero porque "no tiene tiempo".

## Caso 2. Estimación PERT y probabilidad de plazo

**Enunciado.** Tres tareas críticas en serie tienen estas estimaciones (días): A con optimista 2,
probable 3 y pesimista 6; B con 3, 4 y 9; C con 5, 6 y 13.

**Se pide.**

1. Calcular el tiempo esperado y la varianza de cada tarea.
2. Calcular la duración esperada y la desviación típica del camino.
3. Calcular la probabilidad de terminar en 14, 17 y 18 días. (Dato: z de 0,56 negativo es 29 por
   ciento; 1,11, 87 por ciento; 1,67, 95 por ciento.)
4. ¿Qué fecha comprometerías con el cliente si quieres una probabilidad del 95 por ciento?

**Solución.**

```text
1. te = (o + 4m + p) / 6        varianza = ((p - o) / 6) al cuadrado
   A: (2 + 12 + 6)/6  = 3,33    ((6-2)/6)^2  = 0,44
   B: (3 + 16 + 9)/6  = 4,67    ((9-3)/6)^2  = 1,00
   C: (5 + 24 + 13)/6 = 7,00    ((13-5)/6)^2 = 1,78

2. Duracion esperada = 3,33 + 4,67 + 7,00 = 15,0 dias
   Varianza total = 0,44 + 1,00 + 1,78 = 3,22 -> desviacion = raiz de 3,22 = 1,80 dias

3. z = (fecha - media) / desviacion
   14 dias: z = -0,56  -> 29 por ciento
   17 dias: z =  1,11  -> 87 por ciento
   18 dias: z =  1,67  -> 95 por ciento

4. Para el 95 por ciento: 18 dias (z = 1,67).
```

**Rúbrica (10 puntos).** Apartado 1: 3 puntos. Apartado 2: 3. Apartado 3: 3. Apartado 4: 1.

**Errores típicos.** Sumar desviaciones en vez de varianzas; olvidar que la media (15) solo da el
50 por ciento de probabilidad; comprometer la fecha media como si fuera segura.

## Caso 3. EDT, paquete de trabajo y unidad de obra

**Enunciado.** Implantar la red de una sede de 40 puestos en una planta: obra de canalización,
cableado horizontal con 80 tomas, un armario con electrónica y SAI, configuración de VLAN y Wi-Fi,
y pruebas y entrega.

**Se pide.**

1. Construir una EDT de tres niveles cumpliendo la regla del cien por cien.
2. Desarrollar una ficha de diccionario para el paquete "Tender y conexionar el cableado horizontal".
3. Definir la unidad de obra "toma de datos" con lo que incluye, lo que excluye y su criterio de
   medición, y decir en qué se diferencia del paquete.

**Solución.**

```text
1  Implantacion de la red (40 puestos)
   1.1  Obra civil y canalizaciones
        1.1.1  Sala tecnica acondicionada
        1.1.2  Bandejas y tubos instalados
   1.2  Cableado
        1.2.1  Horizontal tendido y conexionado (80 tomas)
        1.2.2  Enlaces certificados
   1.3  Electronica y energia
        1.3.1  Armario montado con SAI
        1.3.2  Equipos activos instalados
   1.4  Configuracion logica
        1.4.1  VLAN y direccionamiento
        1.4.2  Wi-Fi y seguridad
   1.5  Pruebas y entrega
        1.5.1  Pruebas de aceptacion
        1.5.2  Documentacion final y formacion
```

| Campo del paquete 1.2.1 | Valor |
| --- | --- |
| Denominación | Tender y conexionar el cableado horizontal |
| Entregable | 80 tomas etiquetadas con mapa de cableado |
| Responsable | Un jefe de equipo concreto |
| Duración y recursos | 7 días con 3 instaladores |
| Calidad | Cat 6A, clase EA, enlace máximo 90 m |
| Aceptación | Certificación conforme en el 100 por ciento de los enlaces |
| Predecesoras | 1.1.2 |
| Riesgo | Falso techo cerrado antes de tender |

**Unidad de obra "toma de datos 6A instalada, etiquetada y certificada".**

- **Incluye:** cable de 55 m de media, toma y conector de panel, latiguillos, mano de obra, etiquetado
  y ensayo con certificadora.
- **Excluye:** canalización principal, armario y electrónica.
- **Criterio de medición:** por unidad terminada, con informe de certificación conforme.
- **Diferencia con el paquete:** la unidad se mide y se cobra (80 tomas a un precio unitario); el
  paquete se planifica y se asigna (7 días y 3 personas).

**Rúbrica (10 puntos).** EDT con regla del cien por cien y entregables: 4 puntos. Ficha del paquete:
3. Unidad de obra: 3.

**Error típico.** Incluir "reuniones" o "gestión" como paquetes de la EDT, o descomponer por
departamentos y no por entregables.

## Caso 4. Precio descompuesto y base de licitación

**Enunciado.** Se pide el precio unitario de un enlace de fibra OM4 de 8 hilos de 60 m entre
armarios, instalado y certificado. Datos: cable a 4,20 euros por metro; 2 paneles con 8 conectores
LC a 118 euros cada uno; 16 empalmes o pigtails a 4,50 euros; 6 horas de oficial a 27 euros y 6
horas de ayudante a 21 euros; certificación del enlace, 38 euros; medios auxiliares, el 2 por
ciento; gastos generales, 13 por ciento; beneficio industrial, 6 por ciento. Además, un presupuesto
de ejecución material de 84 000 euros.

**Se pide.**

1. Calcular el precio descompuesto y el precio unitario del enlace.
2. Calcular la base de licitación y el total con IVA del presupuesto de 84 000 euros.

**Solución.**

```text
1. Material:  cable 60 x 4,20 ........... 252,00
              paneles 2 x 118,00 ........ 236,00
              empalmes 16 x 4,50 ........  72,00        Material = 560,00
   Mano de obra: 6 x 27 + 6 x 21 = 162 + 126 ........... 288,00
   Certificacion ........................................ 38,00
   Directos = 560 + 288 + 38 ........................... 886,00
   Medios auxiliares, 2 por ciento ...................... 17,72
   Costes directos ..................................... 903,72
   Gastos generales, 13 por ciento ..................... 117,48
   Beneficio industrial, 6 por ciento ................... 54,22
   Precio unitario del enlace ......................... 1 075,42

2. Ejecucion material ............... 84 000,00
   Gastos generales 13 por ciento .... 10 920,00
   Beneficio industrial 6 por ciento .. 5 040,00
   Base de licitacion (sin IVA) ...... 99 960,00
   IVA 21 por ciento ................. 20 991,60
   Total con IVA .................... 120 951,60
```

**Rúbrica (10 puntos).** Apartado 1: 6 puntos (material 2, mano de obra 1, medios y certificación 1,
GG y BI 1, precio 1). Apartado 2: 4.

**Errores típicos.** Aplicar el IVA a la ejecución material en vez de a la base de licitación;
aplicar los gastos generales y el beneficio sobre el precio con IVA; olvidar los medios auxiliares.

## Caso 5. Cargas, nivelación y aprovisionamientos

**Enunciado.** Un técnico, Luis, tiene tres tareas de 8 horas diarias: T1 los días 1 a 5, T2 los
días 4 a 8 (con 3 días de holgura) y T3 los días 12 y 13. Además se necesitan estos materiales, con
el proyecto empezando el día 0:

| Material | Se necesita el día | Plazo de entrega (días) | Margen (días) |
| --- | --- | --- | --- |
| Cable U/FTP 6A | 6 | 10 | 2 |
| Conmutadores | 15 | 20 | 3 |
| SAI | 14 | 15 | 2 |
| Paneles de parcheo | 8 | 5 | 2 |

**Se pide.**

1. Detectar la sobreasignación de Luis y resolverla sin mover el plazo.
2. Calcular la fecha de pedido de cada material e indicar cuál hay que pedir antes.
3. ¿Qué sentido tiene dibujar el histograma por perfil y no con el total?

**Solución.**

```text
1. T1 (dias 1-5) y T2 (dias 4-8) coinciden los dias 4 y 5: 16 horas al dia (200 por ciento).
   T2 tiene 3 dias de holgura: se retrasa 2 dias (dias 6 a 10). Queda fuera de T1 (1-5)
   y antes de T3 (12-13). Sin sobrecarga y sin mover el plazo.

2. Fecha de pedido = fecha de necesidad - plazo - margen
   Cable:        6 - 10 - 2 = -6    (6 dias antes de empezar el proyecto)
   Conmutadores: 15 - 20 - 3 = -8   (8 dias antes)
   SAI:          14 - 15 - 2 = -3   (3 dias antes)
   Paneles:      8 - 5 - 2  =  1    (el dia 1)
   Se pide primero: los conmutadores.
```

3. Cada perfil tiene su plantilla y su capacidad. Con un histograma total, 5 personas parecen un pico,
   pero si son 3 instaladores y 2 técnicos con esa plantilla, no hay sobrecarga en ninguno. Y al
   revés: un total bajo puede esconder un perfil saturado.

**Rúbrica (10 puntos).** Apartado 1: 4 puntos (detección 1, solución 2, comprobación 1). Apartado 2:
4 puntos (1 por material y 1 por la conclusión). Apartado 3: 2.

**Observación.** Los conmutadores obligan a pedir antes de que empiece el proyecto: la compra está
en el camino crítico, y por eso el plan debe empezar en la fecha del pedido.

## Caso 6. Control económico con valor ganado

**Enunciado.** Un proyecto de 20 días tiene un presupuesto (BAC) de 40 000 euros y se ha vendido por
45 000. En el día 10 se sabe: valor planificado (PV) 22 000, valor ganado (EV) 18 000 y coste real
(AC) 21 000.

**Se pide.**

1. Calcular SPI y CPI e interpretarlos.
2. Estimar el coste final (EAC) y la desviación final prevista.
3. Calcular el margen del proyecto con esa estimación, sabiendo que se vendió por 45 000.
4. Proponer tres acciones.

**Solución.**

```text
1. SPI = EV / PV = 18 000 / 22 000 = 0,82   -> se avanza al 82 por ciento de lo previsto
   CPI = EV / AC = 18 000 / 21 000 = 0,86   -> cada euro gastado rinde 86 centimos

2. EAC = BAC / CPI = 40 000 / 0,857 = 46 667 euros
   Desviacion final prevista = 40 000 - 46 667 = -6 667 euros
   Falta por gastar (ETC) = EAC - AC = 46 667 - 21 000 = 25 667 euros

3. Margen = (45 000 - 46 667) / 45 000 = -3,7 por ciento
   El proyecto, vendido a 45 000, pierde dinero si no se corrige.
```

**Acciones propias de un jefe de proyecto.**

1. Identificar la causa del bajo rendimiento (rendimiento por toma, retrabajo, mala estimación) y
   corregirla en el resto de la obra.
2. Reprogramar con el camino crítico y comprobar si hay holgura en tareas no críticas para nivelar
   recursos.
3. Avisar al cliente con datos y, si procede, abrir una petición de cambio por lo que se debe a
   causas ajenas (acceso al edificio, información tardía).

**Rúbrica (10 puntos).** Apartado 1: 3 puntos. Apartado 2: 3. Apartado 3: 2. Apartado 4: 2.

**Error típico.** Pensar que gastar menos de lo previsto es buena noticia sin mirar cuánto se ha
avanzado.

## Autocorrección

| Caso | Tu nota | Qué repasar si fallas |
| --- | --- | --- |
| 1. Camino crítico | | Secciones 5.3, 5.4 y 5.7 |
| 2. PERT | | Sección 5.2 y procedimiento 2 |
| 3. EDT y unidad de obra | | Secciones 4.3, 4.4 y 4.8 |
| 4. Presupuesto | | Sección 3.5 |
| 5. Cargas y aprovisionamiento | | Secciones 5.10 y 5.11 |
| 6. Valor ganado | | Perspectiva empresarial |
