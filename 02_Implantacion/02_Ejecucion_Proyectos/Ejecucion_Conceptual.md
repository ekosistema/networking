---
title: "Ejecución de proyectos de implantación de infraestructuras"
description: "Resumen conceptual de la unidad Ejecución de proyectos."
section: implantacion
unit: ejecucion
kind: conceptual
order: 51
tags:
  - redes
  - ejecucion
  - conceptual
  - certificacion
  - valor-ganado
---

# Ejecución de proyectos de implantación de infraestructuras

> **En una frase.** Ejecutar una red no es instalar cable, es demostrar con papeles y con medidas que lo instalado cumple lo prometido, en plazo, en coste y en prestaciones.

## Por qué existe este tema

Un proyecto de red se aprueba sobre un plano y un presupuesto. Meses después, en el edificio hay otra cosa: un armario que no cabía, un tramo de veinte metros más porque el cliente cambió de despacho, un switch con tres semanas de retraso. Nada de eso es un desastre; es lo normal. El problema es no saber cuánto se ha desviado, por qué ni quién lo autorizó.

Esta unidad convierte la ejecución en un proceso observable: un jefe de proyecto que dice "llevamos el cuarenta y dos por ciento del presupuesto y el treinta y cinco por ciento del trabajo, y la causa es el retraso de los latiguillos" gestiona, porque tiene números y una causa.

La segunda mitad es más física: la red se entrega con una certificación que dice que cada enlace de cobre cumple la categoría que se pagó. Se produce midiendo, y medir mal da una garantía falsa. La tercera pata es la eléctrica: un armario sin toma de tierra decente, sin diferencial y sin SAI es un punto único de fallo que nadie presupuestó.

## El mapa

Cómo se encadenan las piezas de la unidad.

```text
        PLAN («Planificación de proyectos»)
             |
             v
   +---------------------+      +----------------------+
   | SEGUIMIENTO Y       |<---->| GESTION DE CAMBIOS   |
   | CONTROL (PV EV AC)  |      | e incidencias        |
   +----------+----------+      +----------------------+
              |
              v
   +---------------------+      +----------------------+
   | PROTOCOLOS DE       |      | SUMINISTRO ELECTRICO |
   | INTERVENCION (POE)  |      | protecciones y SAI   |
   +----------+----------+      +----------+-----------+
              |                            |
              v                            v
   +---------------------+      +----------------------+
   | EJECUCION: cableado |----->| CERTIFICACION        |
   | armarios, equipos   |      | 11801 / 50173 / 50346|
   +----------+----------+      +----------+-----------+
              |                            |
              v                            v
   +---------------------+      +----------------------+
   | DIAGNOSTICO DE      |      | CALIDAD: Pareto,     |
   | AVERIAS fisicas     |      | control, no conform. |
   +----------+----------+      +----------+-----------+
              |                            |
              +------------+---------------+
                           v
              +--------------------------+
              | SEGURIDAD, RECEPCION     |
              | Y CIERRE DEL PROYECTO    |
              +--------------------------+
```

## Los conceptos, uno a uno

### 1. El proyecto se controla con tres números

**La intuición.** Reformas la cocina con diez mil euros y un mes de plazo. A los quince días has pagado seis mil y el albañil ha terminado los azulejos, la mitad del trabajo. Vas mal, pero no por lo gastado, sino por la relación entre lo gastado y lo hecho. Con seis mil pagados y el ochenta por ciento hecho, irías bien.

**Lo formal.** Todo se mide acumulado a una fecha de corte. El **valor planificado** (PV, BCWS) es el coste presupuestado del trabajo que debería estar hecho. El **valor ganado** (EV, BCWP) es el coste presupuestado del trabajo terminado y aceptado. El **coste real** (AC, ACWP) es lo que ha costado ese trabajo hecho. De ahí: CV = EV - AC (coste), SV = EV - PV (plazo, en euros), CPI = EV / AC y SPI = EV / PV. Todo en euros o en porcentaje, nunca en adjetivos.

**Un ejemplo.** Presupuesto 100 000 euros, doce semanas. A la semana seis el plan era llevar el 50 por ciento: PV = 50 000. Real: 40 por ciento hecho, EV = 40 000. Facturado: 55 000, AC = 55 000. CV = -15 000, SV = -10 000, CPI = 0,73, SPI = 0,80. Coste final estimado: 100 000 / 0,73 = 137 000 euros si nada cambia. Esa es la conversación de la semana seis, no de la doce.

### 2. Cambiar el alcance es barato; no registrarlo es carísimo

**La intuición.** El cliente pide "solo una toma más" en cada visita. Ninguna es grave. Al final hay cuarenta tomas que nadie presupuestó ni firmó, y la discusión ya no es técnica, es sobre quién paga.

**Lo formal.** La línea base (alcance, plazo y coste aprobados) solo se mueve con una solicitud de cambio formal: descripción, motivo, impacto en alcance, plazo, coste, calidad y riesgo, aprobación por quien tenga delegación y actualización de la base. Lo que no pasa por ahí no se ejecuta. Las incidencias son otra cosa: hechos no planificados que consumen tiempo, se registran con fecha, causa, impacto y responsable, y se escalan por una matriz de impacto y urgencia.

**Un ejemplo.** El armario de la tercera planta no tiene sitio para el panel de 48 puertos. Se abre incidencia y se propone mover la electrónica a la segunda planta con dos latiguillos de fibra de 15 metros: 380 euros y dos días, aprobado y registrado. Resuelto "hablando con el del almacén", el sobrecoste aparecería en la factura final sin justificar y sin responsable.

### 3. El protocolo hace que el turno de noche trabaje igual que el de día

**La intuición.** Una receta no existe porque el cocinero sea tonto, sino porque el plato tiene que salir igual cuando cocina otro. El lunes instala un equipo y el miércoles otro, y la certificación tiene que salir idéntica.

**Lo formal.** Un procedimiento operativo estándar (POE) es un documento con alcance, responsabilidades, materiales, pasos numerados, criterios de aceptación medibles, el registro que genera y qué hacer si algo no cumple. Hay cuatro familias: implantación (tendido, etiquetado, crimpado, armario), puesta en servicio, mantenimiento (preventivo con calendario, correctivo con tiempos de respuesta) y contingencia.

**Un ejemplo.** POE de una toma: marcar caja, taladrar, tirar cable sin superar la tensión de tiro, dejar holgura de 30 centímetros en la roseta y un metro en el armario, pelar 25 milímetros, destrenzar como máximo 13, crimpar, comprobar mapa y etiquetar con el código del plano. El criterio de aceptación no es "que funcione", es "que certifique".

### 4. Certificar no es que funcione

**La intuición.** Un coche con la dirección desalineada arranca y te lleva. No está bien. Un enlace de cobre puede sincronizar a un gigabit y suspender la certificación de Cat 6, porque el gigabit usa hasta 100 MHz y la categoría promete 250.

**Lo formal.** Se mide en toda la banda de la categoría. Mandan: longitud, atenuación o pérdida de inserción (dB, menor es mejor), **NEXT** o diafonía en el extremo cercano (dB, mayor es mejor), **FEXT** en el lejano, **ACR** (NEXT menos atenuación, el margen real de señal), pérdida de retorno (energía que vuelve por desadaptación), retardo, skew o desfase entre pares, resistencia de bucle y mapa de cableado. El informe da un margen: pasar con 0,2 dB es pasar, pero es una bomba de relojería.

**Un ejemplo.** Un enlace de 88 metros de Cat 6 da NEXT de 44 dB a 100 MHz (límite 41,8 en enlace permanente) y atenuación de 17 dB frente a 18,5. Pasa con margen. Mal crimpado en un extremo, da 38 dB: falla. El cable es el mismo; el conector no.

### 5. La avería se busca por hipótesis

**La intuición.** Cuando se va la luz no desmontas el cuadro: miras si es tu vivienda o todo el edificio, luego si saltó el diferencial, luego qué aparato lo provocó. Descartas de lo general a lo particular.

**Lo formal.** El método: detectar y registrar el síntoma, priorizar, delimitar (un puesto, un armario, una planta, una sede), formular hipótesis, elegir la prueba que más discrimina, confirmar causa raíz, corregir, verificar y documentar. Ishikawa ordena las causas en seis ramas: método, máquina, mano de obra, material, medición y entorno. Las herramientas van de hardware (comprobador, certificador, reflectómetro, analizador wifi, comprobador de PoE) a software (ping, trazado de ruta, captura de tráfico, SNMP, registros del switch).

**Un ejemplo.** "La planta cuarta va lenta". Delimitar: solo el ala norte. Hipótesis uno, saturación del enlace de subida: el switch marca 80 por ciento, pero también en horas valle. Hipótesis dos, latiguillo: el certificador marca NEXT en el puesto 4.12. Se cambia y desaparece.

### 6. La calidad se demuestra repitiendo el criterio

**La intuición.** Un examen con un corrector distinto por alumno no mide nada. Una instalación con un criterio de aceptación por instalador tampoco.

**Lo formal.** El plan de calidad define qué se inspecciona, con qué instrumento, con qué frecuencia, quién firma y qué registro queda. El diagrama de control separa la variación normal (causas comunes) de la anómala (causa especial, tendencia, punto fuera de límites). El Pareto ordena las causas por frecuencia: unas pocas explican la mayoría de los defectos. El informe de no conformidad recoge el defecto, su alcance, la corrección, la causa raíz y la acción para que no vuelva.

**Un ejemplo.** De 120 enlaces fallan 14: nueve por NEXT (destrenzado excesivo), tres por pasar de 90 metros, uno por mapa invertido y uno por pérdida de retorno. Nueve de catorce son la misma causa, un 64 por ciento. La acción es formar al equipo y añadir esa comprobación al POE.

## Las confusiones que cuestan puntos

**PV frente a AC.** PV es el coste presupuestado de lo que tocaba tener hecho; AC es lo pagado. Comparar AC con el presupuesto total no dice nada a mitad de obra.

**Valor ganado frente a porcentaje de tiempo.** Llevar el 50 por ciento del plazo no es llevar el 50 por ciento del trabajo. El avance se mide por entregables aceptados.

**Incidencia frente a cambio.** La incidencia es un hecho que ya ocurrió y se resuelve; el cambio modifica la línea base y exige aprobación.

**Atenuación frente a NEXT.** La atenuación es cuánto se debilita la señal al viajar, y empeora con la longitud; el NEXT es cuánto se cuela de un par a otro en el conector, y empeora con el destrenzado.

## Tres ideas que completan el cuadro

**Formar es cambiar lo que alguien hace.** Explicar no es lo mismo que enseñar: se enseña cuando la persona hace algo que antes no sabía hacer. Por eso un objetivo de formación empieza con un verbo que se pueda ver, como certificar o configurar, y nunca con conocer o comprender. Y por eso se forma en tres cosas a la vez: saber (el concepto), saber hacer (el procedimiento) y saber ser (el hábito de etiquetar, de avisar, de no dar por buena una medida sin margen). El hábito se contagia con el ejemplo, no con diapositivas.

**Cuándo termina un proyecto.** No cuando se instala el último cable, ni siquiera cuando se firma la recepción. La recepción provisional empieza la garantía, y solo la recepción definitiva, al acabar ese plazo, devuelve la retención y cierra el contrato. Entre medias, el proyecto sigue costando. Y el cierre no es un trámite: es el momento de transferir el conocimiento al que operará la red, archivar el expediente y escribir lo que se ha aprendido.

**La formación se mide fuera del aula.** Que a los asistentes les haya gustado el curso es el primer escalón, y el más barato de comprobar. Lo que cuenta es si lo aprendieron, si lo aplican al volver a obra y si los números mejoran. Un plan de formación de dos mil euros que reduce los repetidos de obra se amortiza en meses; uno que solo da certificados no se amortiza nunca.

## Conexiones

Lo que aquí se controla nace en [Planificación de proyectos](../01_Planificacion_Proyectos/README.md): sin línea base, presupuesto detallado y calendario no hay contra qué comparar el valor ganado.

La certificación y el diagnóstico desembocan en [Resolución de incidencias](../../03_Administracion/03_Incidencias/README.md), donde el registro de incidencias se convierte en gestión de servicios con acuerdos de nivel de servicio.

El lado eléctrico engancha con [Equipos y servicios](../../03_Administracion/01_Equipos_Servicios/README.md), porque el SAI se dimensiona con la carga real de esos equipos, y con el diseño de [Proyecto de red](../../01_Diseno/02_Proyecto_Red/README.md). Lo ejecutado se documenta según [Documentación técnica](../../01_Diseno/03_Documentacion_Tecnica/README.md).

## Autoevaluación

1. Define PV, EV y AC y explica por qué el control de costes no es comparar lo gastado con el presupuesto total.
2. Un proyecto tiene CPI de 0,85 y SPI de 1,05. ¿Qué pasa y qué se puede decir del coste final?
3. ¿Qué diferencia hay entre registrar una incidencia y abrir una solicitud de cambio?
4. Enumera los elementos mínimos de un POE y explica para qué sirve el criterio de aceptación.
5. ¿Por qué un enlace puede funcionar a un gigabit y suspender la certificación de Cat 6?
6. Explica físicamente por qué el NEXT empeora si se destuerce demasiado el par.
7. ¿Por qué una mala crimpada degrada la pérdida de retorno?
8. ¿Qué mide el ACR y por qué se dice que es el parámetro que de verdad importa?
9. Un SAI de 6 kVA con factor de potencia 0,9 alimenta 3,2 kW. ¿Qué carga tiene y por qué no se pasa del 80 por ciento?
10. ¿Qué distingue un SAI VFI de uno VFD?
11. En un diagnóstico, ¿por qué conviene la prueba que más discrimina y no la más fácil?
12. Corrige este objetivo de formación: "el técnico conocerá la certificación de cableado".
13. ¿Qué diferencia hay entre recepción provisional y recepción definitiva, y qué ocurre con la retención?
14. Una formación de dos mil euros reduce los repetidos en cinco mil euros al año. ¿En cuánto tiempo se recupera y qué niveles de evaluación has usado para saberlo?

## Claves

1. PV es el coste presupuestado de lo planificado; EV el del trabajo hecho; AC lo pagado. Comparar AC con el total mezcla trabajo hecho y no hecho.
2. Gasta más por unidad de trabajo (CPI 0,85) pero va adelantado en plazo (SPI 1,05). Coste final: el presupuesto entre 0,85, un 17,6 por ciento más.
3. La incidencia es un hecho no planificado que se resuelve y se registra; el cambio altera la línea base y exige aprobación.
4. Alcance, responsabilidades, materiales, pasos numerados, criterio medible, registro y actuación ante desviación. El criterio evita que "funciona" sustituya a "cumple".
5. Porque el gigabit usa hasta 100 MHz y la Cat 6 se certifica hasta 250, con límites que puede incumplir en alta frecuencia.
6. El trenzado cancela los campos de los dos hilos; al destrenzar, los pares quedan paralelos y crece el acoplamiento capacitivo.
7. La impedancia del par es 100 ohmios; una crimpada floja o un cable aplastado crean una discontinuidad que refleja energía y baja el dB de retorno.
8. La diferencia entre diafonía y atenuación a la misma frecuencia. Si es negativo, la diafonía tapa la señal.
9. 3,2 kW sobre 5,4 kW útiles, un 59 por ciento; por encima del 80 la autonomía cae y el inversor trabaja al límite térmico.
10. El VFI regenera siempre onda senoidal con tensión y frecuencia propias; el VFD entrega la red tal cual y solo pasa a batería si falla o se sale de rango.
11. Porque cada prueba cuesta tiempo y hay que reducir hipótesis rápido; la prueba fácil puede no distinguir entre dos causas.
12. "Al terminar, el técnico certificará con el equipo un enlace de cobre y obtendrá el informe con todos los parámetros, sin errores de configuración": verbo observable, condición y criterio.
13. La provisional inicia el plazo de garantía; la definitiva, al terminarlo, cierra la obra. La retención se devuelve con la definitiva.
14. Dos mil entre cinco mil por doce: unos cinco meses. Se han usado los niveles de comportamiento y de resultados de Kirkpatrick; los de reacción y aprendizaje se miden al terminar.
