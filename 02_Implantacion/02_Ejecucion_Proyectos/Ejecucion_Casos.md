---
title: "Ejecución de proyectos · Casos prácticos resueltos"
description: "Casos prácticos resueltos de la unidad Ejecución de proyectos."
section: implantacion
unit: ejecucion
kind: casos
order: 53
tags:
  - redes
  - ejecucion
  - casos
---

# Ejecución de proyectos · Casos prácticos resueltos

> **Cómo usar esto.** Cada caso trae enunciado, solución y una rúbrica de diez puntos para autoevaluarte.
> Resuélvelo primero sin mirar la solución y puntúate. Lo que más enseña es **justificar** cada decisión:
> una respuesta correcta sin razón sirve de poco en un trabajo real.

Los seis casos recorren los temas de la unidad: control de proyecto
(contenido 1), protocolos de intervención, medidas eléctricas y SAI,
certificación del cableado, diagnóstico de averías y capacitación y cierre.

## Caso 1. Seguimiento con valor ganado y decisión de proyección

**Enunciado.** Un proyecto de 12 semanas tiene un presupuesto (BAC) de 120 000 euros. En la semana 6
se sabe: valor planificado 62 000, valor ganado 55 800 y coste real 63 000. La causa del sobrecoste es
una avería de material que ya se ha resuelto (proveedor sustituido).

**Se pide.**

1. Calcular CV, SV, CPI y SPI e interpretarlos.
2. Calcular la proyección del coste final con la hipótesis de que el rendimiento actual continúa.
3. Calcular la proyección si la desviación fue puntual y el resto va según presupuesto.
4. ¿Cuál usarías y qué dirías al cliente?

**Solución.**

```text
1. CV  = EV - AC = 55 800 - 63 000 = -7 200 euros   (sobrecoste a la fecha)
   SV  = EV - PV = 55 800 - 62 000 = -6 200 euros   (retraso medido en euros)
   CPI = EV / AC = 55 800 / 63 000 = 0,886          (cada euro rinde 89 centimos)
   SPI = EV / PV = 55 800 / 62 000 = 0,90           (avance del 90 por ciento de lo previsto)

2. EAC (rendimiento actual) = BAC / CPI = 120 000 / 0,886 = 135 484 euros
   Desviacion final VAC = 120 000 - 135 484 = -15 484 euros

3. EAC (desviacion puntual) = AC + (BAC - EV) = 63 000 + (120 000 - 55 800) = 127 200 euros
   Desviacion final VAC = 120 000 - 127 200 = -7 200 euros
```

**Elección.** Si la causa es puntual y está resuelta (proveedor sustituido), la hipótesis correcta es
la 3: se prevé un coste final de 127 200 euros, un 6 por ciento por encima. La 2 sería correcta si
el rendimiento bajo fuera estructural (mal rendimiento por toma, mala estimación). Al cliente se le
dice: sobrecoste de 7 200 euros por una causa concreta ya resuelta, retraso del 10 por ciento
recuperable con la holgura del calendario, y se pide aprobar la partida o el cambio que corresponda
si la causa fue ajena.

**Rúbrica (10 puntos).** Apartado 1: 4 puntos. Apartado 2: 2. Apartado 3: 2. Apartado 4: 2.

**Error típico.** Aplicar siempre BAC entre CPI sin preguntarse si la causa es puntual.

## Caso 2. Redactar un protocolo de puesta en servicio

**Enunciado.** Redacta el procedimiento operativo estándar de **puesta en servicio de un armario de
comunicaciones con SAI**, con el formato normalizado, e incluye su diagrama de flujo.

**Solución.**

| Apartado | Contenido |
| --- | --- |
| Código, versión y fecha | PR-RED-12, v1.0, 2027-03-01 |
| Objeto y alcance | Poner en servicio un armario nuevo: de la instalación terminada a la aceptación |
| Responsabilidades | Jefe de obra (aprueba), técnico de instalación (ejecuta), técnico de calidad (verifica) |
| Requisitos previos | Instalación eléctrica certificada, planos al día, ventana horaria pactada, copia de configuraciones |
| Fases | 1. Comprobaciones previas. 2. Energización sin carga. 3. Conexión de cargas. 4. Configuración. 5. Pruebas. 6. Aceptación |
| Descripción gráfica | Fotografía del armario con numeración y esquema unifilar |
| Pruebas y ajustes | Tierra, tensión, secuencia de fases; autonomía del SAI; conmutación; PoE; redundancia |
| Medios | Multímetro, telurómetro, comprobador de diferencial, certificador, carga resistiva para el SAI |
| Parámetros | Resistencia de tierra menor de 5 ohmios; tensión de 230 V ±10 por ciento; autonomía pactada |
| Normas de seguridad | Trabajo sin tensión (cinco pasos), EPI, no puentear protecciones, dos personas |
| Resultados esperados | Todos los parámetros dentro de límites y acta de puesta en servicio firmada |
| Personas | Técnico de instalación, técnico de calidad y representante del cliente |
| Documentos | Acta de puesta en servicio, parte de pruebas, registro de la fecha de baterías |
| Ante desviación | Repetir, corregir y, si persiste, abrir una no conformidad |

```text
[Inicio] -> Comprobar tierra, tension y secuencia de fases
              |
         Dentro de limites?
          |-- no --> Corregir y repetir (maximo 2 veces) --> no conformidad si persiste
          |
         si
          |
         Energizar con el SAI apagado y medir salida
          |
         Conectar cargas repartidas y encender el SAI
          |
         Simular corte: medir autonomia y conmutacion
          |
         Probar PoE y redundancia (apagar una fuente)
          |
         Todo correcto? -- no --> Corregir, repetir y registrar
          |
         si
          |
         Acta firmada y fecha de baterias registrada --> [Fin]
```

**Rúbrica (10 puntos).** Los nueve elementos del formato normalizado: 5 puntos. Diagrama de flujo
con decisiones: 3. Criterio de aceptación medible y acción ante desviación: 2.

**Error típico.** No decir qué hacer si el criterio no se cumple, o dejar los parámetros sin valores.

## Caso 3. Medidas eléctricas y dimensionamiento del SAI

**Enunciado.** En un armario se miden 2 100 W de carga. Se prevé un 25 por ciento de crecimiento,
una autonomía de 15 minutos, rendimiento del inversor de 0,94, batería de 192 V y factor de potencia
de salida de 0,9. La resistencia de tierra medida es de 12 ohmios. El local tiene microcortes
frecuentes pero no hay grupo electrógeno.

**Se pide.**

1. Calcular la carga con margen y elegir entre un SAI de 3 kVA y uno de 4 kVA (sin pasar del 80 por
   ciento).
2. Calcular la capacidad de batería con la fórmula del resumen técnico.
3. Elegir la clase de SAI y justificarla.
4. Interpretar la resistencia de tierra: ¿es segura? ¿es aceptable en un armario de comunicaciones?
5. Elegir diferencial y tipo.

**Solución.**

```text
1. Carga con margen = 2 100 x 1,25 = 2 625 W
   SAI de 3 kVA: 3 000 x 0,9 = 2 700 W -> carga = 2 625 / 2 700 = 97 por ciento. No vale (limite 80).
   SAI de 4 kVA: 4 000 x 0,9 = 3 600 W -> carga = 2 625 / 3 600 = 73 por ciento. Vale.

2. Energia en continua = (2 100 x 0,25 h) / 0,94 = 558,5 Wh
   C = 558,5 / 192 x 1,25 = 3,64 Ah  (se instala una bateria de mayor capacidad con margen,
   por ejemplo dos ramas de 9 Ah)

3. Clase: VI (interactivo) como minimo; VFI (doble conversion) si los microcortes son criticos
   para el servicio, ya que el VFI es el unico que los aisla por completo. Sin grupo
   electrogeno, no hace falta aislar frecuencia: VI suele bastar si los equipos toleran
   2 a 4 ms de transferencia.

4. Seguridad: tension de contacto = Idiferencial x R = 0,030 A x 12 ohm = 0,36 V, muy por debajo
   de 50 V. Resistencia maxima para 30 mA: 50 / 0,030 = 1 667 ohm. Es segura.
   Aceptable en comunicaciones: no: se busca menos de 5 ohm para que la tierra sea buen
   referente y disipe sobretensiones; hay que mejorar la toma (mas picas, o un anillo).

5. Diferencial de 30 mA, tipo A (o tipo B si hay SAI trifasico o variadores).
```

**Rúbrica (10 puntos).** Apartado 1: 2 puntos. Apartado 2: 3. Apartado 3: 2. Apartado 4: 2. Apartado
5: 1.

**Errores típicos.** Dimensionar sin margen o pasarse del 80 por ciento; confundir kVA con kW;
creer que una tierra de 12 ohmios es peligrosa con un diferencial de 30 mA (no lo es) o que es
buena para comunicaciones (tampoco).

## Caso 4. Certificación de cobre: resultados, causas y Pareto

**Enunciado.** Se certifican 10 enlaces permanentes Cat 6 con límites a 100 MHz de pérdida de
inserción de 18,5 dB o menos, NEXT de 41,8 dB o más y pérdida de retorno de 14,0 dB o más. Resultados
(margen en dB; negativo es fallo):

| Enlace | Mapa | Longitud | Margen IL | Margen NEXT | Margen RL |
| --- | --- | --- | --- | --- | --- |
| L01 | Correcto | 62 m | 1,8 | 3,1 | 2,0 |
| L02 | Correcto | 70 m | 1,5 | 2,4 | 1,7 |
| L03 | Correcto | 83 m | 1,1 | 0,1 | 1,4 |
| L04 | Correcto | 55 m | 2,0 | -0,8 | 1,6 |
| L05 | Correcto | 76 m | 1,2 | -1,5 | 1,1 |
| L06 | Correcto | 68 m | 1,6 | -0,3 | 1,9 |
| L07 | Correcto | 94 m | -0,6 | 1,0 | 1,2 |
| L08 | Par 3-6 cruzado | 66 m | 1,7 | 2,0 | 1,8 |
| L09 | Correcto | 58 m | 1,3 | 2,9 | 2,2 |
| L10 | Correcto | 72 m | 1,6 | 3,3 | 1,9 |

**Se pide.**

1. Indicar qué enlaces pasan y cuáles fallan, y cuáles pasan con riesgo.
2. Identificar la causa más probable de cada fallo y la acción correctiva.
3. Hacer el Pareto de causas.
4. Indicar qué hacer con el enlace de 94 m.

**Solución.**

1. **Pasan:** L01, L02, L03, L09 y L10. **Fallan:** L04, L05 y L06 (NEXT), L07 (pérdida de inserción) y
   L08 (mapa). **Pasa con riesgo:** L03, con un margen de NEXT de solo 0,1 dB.
2. L04, L05 y L06: destrenzado excesivo al terminar el conector (más de 13 mm); se rehacen las
   terminaciones y se forma al personal. L07: longitud de 94 m, superior a los 90 m del enlace
   permanente, que eleva la atenuación; hay que acortar la tirada, reubicar el armario o añadir
   un punto intermedio. L08: par cruzado en la terminación; se repite en el extremo mal conectado.
3. Pareto:

| Causa | Enlaces | Porcentaje | Acumulado |
| --- | --- | --- | --- |
| Destrenzado (NEXT) | 3 | 60 por ciento | 60 por ciento |
| Longitud sobre 90 m | 1 | 20 por ciento | 80 por ciento |
| Mapa incorrecto | 1 | 20 por ciento | 100 por ciento |

La acción que más reduce los fallos es **formativa y de procedimiento** (destrenzado), no
revisar enlace por enlace.

4. El enlace de 94 m incumple el límite del enlace permanente: aunque funcione, no es conforme y no
   se acepta. La solución se estudia en el diseño (ruta más corta, armario intermedio, fibra).

**Rúbrica (10 puntos).** Apartado 1: 3 puntos. Apartado 2: 3. Apartado 3: 2. Apartado 4: 2.

**Error típico.** Dar por bueno el enlace con margen de 0,1 dB; no es seguro: cambia un latiguillo y
falla.

## Caso 5. Diagnóstico de una avería lógica y informe-memoria

**Enunciado.** Esta mañana, tres PC de una misma mesa de la planta 2 muestran la dirección
169.254.x.x y no tienen red. El resto de la oficina funciona con normalidad. Cada PC se conecta a
una toma de la mesa que acaba en un pequeño switch bajo la mesa, y de ahí un cable sube a la toma de
pared hasta el armario. Acaba de pasar el servicio de limpieza.

**Se pide.** Elaborar el informe-memoria con síntomas, hipótesis, plan, causa, corrección y acción
correctiva.

**Solución.**

| Apartado | Contenido |
| --- | --- |
| Síntomas | Tres PC con 169.254 (sin DHCP) de la misma mesa; el resto de la oficina funciona; empezó esta mañana |
| Documentación | Plano de la planta 2 y esquema de conexión: mesa con switch propio, enlace a la toma T-2.02-09 |
| Hipótesis | (a) El switch de la mesa está apagado o sin alimentación. (b) El latiguillo entre el switch y la toma está desconectado. (c) El puerto del switch de planta está caído o en otra VLAN. (d) Se ha agotado el DHCP (poco probable: el resto funciona) |
| Plan de intervención | 1. Mirar los LED del switch de la mesa (descarta o confirma a). 2. Revisar el latiguillo y probar con otro. 3. Mirar el estado y la VLAN del puerto en el switch de planta. 4. Probar un PC en otra toma |
| Medidas y resultados | El switch de la mesa tiene todos los LED apagados; el regletero está desenchufado |
| Causa raíz | El enchufe del switch compartía regleta con la aspiradora y alguien la desconectó |
| Corrección | Reenchufar; el servicio se restablece; las tres máquinas obtienen dirección por DHCP |
| Comprobaciones | Ping a la puerta de enlace y a un servidor; las tres máquinas funcionan |
| Acción correctiva | Señalizar y fijar la alimentación del switch con una regleta con interruptor protegido, y retirar las tomas compartidas con equipos de limpieza |
| Cierre | Parte de avería, tiempo de resolución de 20 minutos |

**Rúbrica (10 puntos).** Hipótesis relacionadas con los síntomas: 3 puntos. Plan ordenado por
discriminación: 3. Causa raíz y corrección: 2. Acción correctiva y cierre: 2.

**Observación.** La avería es **física** (alimentación) con síntoma **lógico** (la ausencia de DHCP).
Por eso se separa lo físico de lo lógico antes de tocar configuraciones.

## Caso 6. Plan de capacitación, retorno y cierre

**Enunciado.** Cinco técnicos de mantenimiento no miden bien las magnitudes eléctricas de un
armario: en el último año hubo 15 revisitas por medidas mal tomadas, de 90 euros cada una. Se
propone un plan de formación de 6 horas.

**Se pide.**

1. Diseñar el plan: diagnóstico, objetivo medible, contenidos de los tres tipos, metodología,
   secuencia y evaluación con rúbrica.
2. Calcular el coste del plan (tiempo de los alumnos a 30 euros la hora, formador a 60 euros la hora
   y 120 euros de material) y el plazo de recuperación.
3. Decir cómo se evaluarían los cuatro niveles de Kirkpatrick.
4. Indicar tres tareas de cierre del proyecto de formación.

**Solución.**

| Elemento | Contenido |
| --- | --- |
| Diagnóstico | Observación en obra y prueba práctica: 3 de 5 conectan mal la pinza y 4 de 5 no interpretan el resultado |
| Objetivo | Al terminar, cada técnico medirá tensión, corriente y resistencia de tierra de un armario con el instrumento correcto y registrará el resultado sin errores, en 20 minutos |
| Contenido conceptual | Qué miden la tensión, la corriente y la resistencia de tierra y sus valores de referencia |
| Contenido procedimental | Conexión de la pinza y del telurómetro, lectura y registro |
| Contenido actitudinal | Trabajar sin tensión, comprobar antes de medir, no puentear protecciones |
| Metodología | Demostración y práctica guiada en un banco con armario real |
| Secuencia (6 h) | 1 h teoría, 1 h demostración, 3 h práctica por parejas, 1 h evaluación |
| Evaluación | Rúbrica: conexión, lectura, interpretación y documentación, en tres niveles |

```text
2. Coste: tiempo de alumnos 5 x 6 h x 30 = 900 | formador 6 h x 60 = 360 | material 120
          Total = 1 380 euros
   Ahorro esperado: 15 revisitas x 90 = 1 350 euros al ano
   Recuperacion: 1 380 / 1 350 = 1,02 anos, unos 12 meses
```

3. **Reacción:** encuesta al terminar. **Aprendizaje:** la rúbrica de la prueba práctica.
   **Comportamiento:** observación en obra a las 4 a 6 semanas. **Resultados:** número de revisitas
   por medidas mal tomadas durante los 6 meses siguientes.
4. Tareas de cierre: transferencia (entregar el material y la guía a los técnicos), informe de
   costes y de resultados de la formación, y lecciones aprendidas (qué mejorar en la próxima edición).

**Valoración.** La formación **no compensa claramente en el primer año** (recuperación en 12 meses).
Se justifica si además evita riesgos de seguridad (medir sin tensión) o si se aprovecha para otras
tareas del puesto. Es un buen ejemplo de plan que se defiende con números y no solo con intuición.

**Rúbrica (10 puntos).** Apartado 1: 5 puntos. Apartado 2: 2. Apartado 3: 2. Apartado 4: 1.

## Autocorrección

| Caso | Tu nota | Qué repasar si fallas |
| --- | --- | --- |
| 1. Valor ganado | | Sección 1 |
| 2. Protocolo | | Secciones 2 y 2.1 |
| 3. Eléctrica y SAI | | Secciones 3.1 a 3.6 |
| 4. Certificación | | Secciones 4.2 a 4.5 y 6.2 |
| 5. Avería | | Secciones 5, 5.1 a 5.4 |
| 6. Capacitación | | Sección 8 |
