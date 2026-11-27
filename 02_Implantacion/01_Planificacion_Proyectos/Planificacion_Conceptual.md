---
title: "Planificación de proyectos de implantación de infraestructuras"
description: "Resumen conceptual de la unidad Planificación de proyectos."
section: implantacion
unit: planificacion
kind: conceptual
order: 41
tags:
  - redes
  - planificacion
  - conceptual
  - edt
---

# Planificación de proyectos de implantación de infraestructuras

> **En una frase.** Planificar es convertir "hay que montar la red" en una lista corta de paquetes que alguien puede empezar el lunes, con una fecha y un coste que se sostienen cuando el cliente pregunta dos veces.

## Por qué existe este tema

Instalar una red no es difícil. Coordinar una instalación sí. En una obra coinciden el electricista que cuelga las bandejas, el de climatización que quiere el mismo techo, el albañil que debe cerrarlo, el transportista que trae el armario y el técnico que configura las VLAN. Cada uno tiene su fecha, su jefe y su idea de la urgencia. Sin un plan común, el orden lo decide quien grita más fuerte, y el cable llega después de cerrar el techo.

El segundo problema es incómodo: nadie te paga por tirar cable, te pagan por un resultado en una fecha. Si el día de la entrega faltan dos semanas de trabajo, ya no las puedes comprar. La planificación existe para descubrir eso en la semana dos y no en la semana nueve, y para decir "la entrega se va al jueves 18 porque el material llegó seis días tarde" en lugar de un "vamos mal" sin datos.

## El mapa

Dos ejes: uno vertical, el del compromiso (promesa, alcance, plan, coste), y otro horizontal, el de las personas (quién manda sobre qué).

```text
               +---------------------------+
               |  LA PROMESA: fecha, coste |
               |  y calidad acordadas      |
               +-------------+-------------+
                             |
              +--------------+--------------+
              v                             v
     +------------------+          +------------------+
     |     ALCANCE      |          |   ORGANIZACION   |
     |  EDT y paquetes  |          |    matricial     |
     +--------+---------+          +--------+---------+
              v                             v
     +------------------+          +------------------+
     |    PLANIFICAR    |          |     EQUIPO       |
     |  Gantt, CPM/PERT |          |  personas y dias |
     +--------+---------+          +--------+---------+
              |                             |
              +--------------+--------------+
                             v
                 +-------------------------+
                 |  COSTE EN EL TIEMPO     |
                 |  curva acumulada, S     |
                 +-------------------------+
```

La izquierda contesta a qué y cuándo; la derecha, a quién y con cuánto esfuerzo. Las dos desembocan en el dinero que se gasta cada semana.

## Los conceptos, uno a uno

### 1. El proyecto es una promesa, no una tarea

**La intuición.** Reformar el baño es una tarea. Reformarlo con la boda de tu hermana el día 14 es un proyecto: tiene fecha, tiene un presupuesto que no se puede pasar y tiene una calidad mínima por debajo de la cual la boda se celebra sin baño.

**Lo formal.** Un proyecto es un esfuerzo temporal, con principio y fin, que produce un resultado único. Lo temporal no significa que dure poco, sino que no es indefinido; lo de único, que no se repite igual. Sobre él actúan tres restricciones acopladas, alcance, plazo y coste, con la calidad como resultado de equilibrarlas.

**Un ejemplo.** Sede de 96 puestos, 20 días laborables y 16.900 euros de coste directo. Alguien pide 48 fibras en lugar de 24 para "dejar el edificio preparado": son más tubo, más soldadura y dos días más. La respuesta no es sí ni no, es "son 900 euros y dos días; decidme cuál os quito".

### 2. El ciclo de vida: fases con puerta

**La intuición.** Cocinar no es servir. Puedes tener la salsa perfecta y aun así no emplatar hasta que la mesa esté puesta. Cada fase termina con algo que se puede enseñar y alguien que dice "adelante".

**Lo formal.** El ciclo de vida parte el proyecto en fases, cada una con un entregable y un criterio de aceptación, separadas por puertas de decisión. En modo predictivo se recorren en orden y el alcance se cierra pronto; en modo iterativo se entregan porciones y se reajusta. Lo que no cambia es la asimetría del error: corregir un fallo de diseño cuesta una unidad, corregirlo en la ejecución cuesta diez y descubrirlo en explotación cuesta cien.

**Un ejemplo.** El ciclo está repartido entre unidades: diseño en la unidad «Proyecto de red», planificación en esta, ejecución y seguimiento en la unidad «Ejecución de proyectos». Si el diseño llega con los puestos sin cerrar no hay planificación que lo arregle; solo se puede planificar el desconcierto.

### 3. La estructura de desglose: partir hasta poder estimar

**La intuición.** En una mudanza nadie dice "traer la casa". Se dice "cocina: vajilla en cajas pequeñas, jueves por la tarde". Cuando una caja se puede etiquetar, ya sabes cuánto pesa y quién la baja.

**Lo formal.** La EDT, o estructura de desglose del trabajo, es una descomposición jerárquica orientada a entregables, no a departamentos. El último nivel se llama paquete de trabajo: la unidad mínima que se estima, se asigna a un responsable único y se acepta con un criterio escrito. La sostienen dos reglas: la del cien por cien, por la que los hijos de un nodo suman el alcance exacto del padre, y el tamaño, un paquete de entre ocho horas y ochenta, o sea, de uno a diez días.

**Un ejemplo.** "Instalar la red" no es un paquete. "Tender y conexionar el cableado horizontal de las plantas primera a tercera, 96 tomas, certificado con UNE-EN 50346", eso sí: tiene unidad de medida, fin y prueba.

### 4. El camino crítico: la cadena que manda

**La intuición.** Vas al aeropuerto y dependes de tres cosas: que tu hermano llegue con el coche, que la maleta esté cerrada y que la carretera no tenga obras. Puedes planchar la camisa más rápido, pero la camisa no está en la cadena.

**Lo formal.** En una red con dependencias, el camino crítico es la secuencia más larga desde el inicio hasta el fin. Su longitud es la duración del proyecto. Sus tareas tienen holgura cero: cada día que pierden se pierde en la entrega. Puede haber más de uno a la vez, y eso es peor, porque hay dos frentes que vigilar.

**Un ejemplo.** Cinco paquetes: preparar obra 5 días, cablear 8, montar armario 3, configurar 4, probar 3. Un camino suma 5 más 8 más 4 más 3, veinte días; el otro suma 5 más 3 más 4 más 3, quince. El proyecto dura veinte, no la suma de todos ni la media.

### 5. La holgura: el colchón que se puede gastar

**La intuición.** Sales de casa con diez minutos de más para el tren. Si te entretienes cinco, lo coges; si te entretienes once, lo pierdes, y los cinco que ya gastaste no vuelven.

**Lo formal.** La holgura total es el retraso que admite una tarea sin mover la fecha final, y se obtiene restando a su comienzo más tardío el más temprano. La holgura libre es más estrecha: el retraso que admite sin mover el comienzo de la siguiente. Holgura total cero significa crítica. La holgura no es un permiso para dormir: si dos tareas de la misma cadena la consumen, la segunda se queda sin ella.

**Un ejemplo.** El montaje del armario dura tres días y puede empezar el 5 o el 10: holgura total de cinco. Si se retrasa seis, la configuración empieza el 14 y la entrega se va al 21.

### 6. Tres formas de organizar y la doble dependencia

**La intuición.** El dependiente de una tienda responde ante el encargado del turno y ante el jefe de compras de la central. Un día los dos le piden cosas urgentes y distintas a la misma hora.

**Lo formal.** En la funcional la autoridad va por especialidad: redes, sistemas, instalaciones. En la de proyectos cada uno tiene equipo dedicado y jefe con mando real. La matricial mezcla las dos: el trabajador pertenece a un departamento y trabaja a la vez en varios proyectos, y se gradúa en débil, equilibrada o fuerte según quién tenga el poder. Su ventaja es aprovechar especialistas sin duplicarlos; su coste es la doble dependencia: el jefe funcional decide el cómo y la carrera, el de proyecto el qué y el cuándo.

**Un ejemplo.** El técnico que configura tus VLAN también atiende incidencias de la sede central. El martes su jefe funcional le pide una guardia y tú necesitas esa tarde para las pruebas. Ninguno está equivocado, así que no se resuelve hablando: hacen falta una regla escrita y un escalado al patrocinador.

### 7. Estimar con tres números

**La intuición.** Para ir al aeropuerto tardas veinticinco minutos un domingo, cuarenta un martes y noventa el día que llueve. Si siempre dices cuarenta, un día pierdes el avión.

**Lo formal.** Sin datos históricos se piden tres valores: optimista, el escenario en que todo sale bien; más probable, el que se repite; pesimista, el del accidente. PERT los combina dando cuatro veces más peso al central: el tiempo esperado es optimista más cuatro veces el más probable más pesimista, todo dividido entre seis. La desviación es el pesimista menos el optimista partido por seis.

**Un ejemplo.** Canalizaciones: cuatro días si nada se tuerce, cinco lo normal, siete si el techo está lleno. El tiempo esperado es 4 más 20 más 7, treinta y uno, entre seis: 5,17 días. Reconoce que el escenario malo es más malo de lo que el bueno es bueno.

## Las confusiones que cuestan puntos

**Proyecto frente a operación.** El proyecto es temporal y acaba en una entrega; la operación es permanente y se mide con niveles de servicio.

**Duración frente a esfuerzo.** Ocho jornadas son ocho días con una persona o cuatro con dos, pero no dos con cuatro: hay tareas que no se paralelizan.

**Crítico frente a importante.** Crítico no significa caro ni difícil, sino sin holgura: el SAI puede ser lo más caro y no ser crítico.

**Holgura total frente a holgura libre.** La total mira la fecha final; la libre, el comienzo de la siguiente. Una tarea puede tener total y tener libre cero.

**EDT frente a lista de tareas.** La EDT descompone entregables y responde a qué hay que producir; la lista responde a qué hay que hacer. Una EDT con "reuniones" dentro es un diario.

**Matricial débil frente a fuerte.** En la débil el jefe de proyecto coordina y el funcional decide; en la fuerte el de proyecto manda y el funcional cede personal.

**Aprobado frente a actualizado.** Aprobado es un estado, actualizado es una versión: la revisión B sigue siendo la buena solo si se retiró de circulación.

## Tres ideas que completan el cuadro

**Mandar según quien tienes delante.** No hay un estilo de jefe correcto. A quien no sabe, hay que decirle qué hacer. A quien sabe pero duda, hay que explicarle el porqué. A quien sabe y quiere, hay que dejarle decidir. El liderazgo situacional dice justo eso: el estilo se adapta a la madurez de cada persona en cada tarea, y el error clásico es delegar en el novato y dirigir al experto.

**Acortar tiene precio.** Cada día que se gana en una tarea se paga: más personas, horas extra, un envío urgente. Por eso solo se acelera lo crítico y empezando por lo más barato de acelerar. Pero la obra también cuesta cada día que dura (el jefe, la oficina, el alquiler de medios), y por eso a veces acortar sale gratis o incluso ahorra. El plazo óptimo es donde el coste directo que sube se cruza con el indirecto que baja.

**El cuentakilómetros y el velocímetro.** Saber cuánto has gastado no dice si vas bien: puedes haber gastado mucho porque has avanzado mucho. El valor ganado compara el trabajo realmente hecho con lo gastado y con lo previsto. Si rindes noventa céntimos por cada euro, y no cambias nada, acabarás gastando más de lo presupuestado. Es la forma de avisar al cliente en el día trece, no en el veinte.

## Conexiones

Esta unidad es la bisagra del módulo. Lo que planificas nace del [diseño del proyecto](../../01_Diseno/02_Proyecto_Red/README.md), donde se elige topología, cableado y direccionamiento, y se ejecuta en [la unidad de ejecución y seguimiento](../02_Ejecucion_Proyectos/README.md), donde aparecen las desviaciones y las actas de aceptación. La documentación formal que aquí se enumera se detalla en [la unidad de documentación técnica](../../01_Diseno/03_Documentacion_Tecnica/README.md). El vocabulario común está en el [glosario](../../00_Indice/Glosario.md) y las fórmulas, en el [formulario](../../00_Indice/Formulario_y_tablas.md).

## Autoevaluación

1. ¿Qué hace que un trabajo sea un proyecto y no una tarea repetitiva?
2. Enumera las fases del ciclo de vida y el entregable que cierra cada una.
3. ¿Por qué el coste de corregir un error crece con la fase en que se descubre?
4. ¿Qué significa que una EDT cumple la regla del cien por cien?
5. ¿Por qué "instalar la red" no puede ser un paquete de trabajo?
6. Dos ramas, de 20 y 15 días. ¿Cuánto dura el proyecto y cuánta holgura tiene la corta?
7. ¿Qué diferencia hay entre holgura total y holgura libre?
8. ¿Puede un proyecto tener dos caminos críticos? ¿Qué implica?
9. Explica la doble dependencia con un caso de un técnico de redes.
10. Aplica PERT a una tarea con optimista 3, más probable 5 y pesimista 11.
11. ¿Por qué el valor central pesa cuatro veces más que los extremos?
12. Si el cliente impone una fecha más corta que el camino crítico, ¿qué palancas tienes?
13. Un técnico nuevo y un técnico veterano reciben la misma tarea. ¿Cómo adaptas el estilo de dirección a cada uno?
14. Una tarea cuesta tres mil euros en cinco días y tres mil quinientos en tres. ¿Cuál es la pendiente de aceleración y cuándo compensa acelerarla?
15. A mitad de proyecto, el valor ganado es 9 000, el coste real 10 000 y el valor planificado 10 000. Calcula CPI y SPI e interpreta.

## Claves

1. Que es temporal, único y produce un resultado que no existía; la operación se repite.
2. Inicio con el acta de constitución, diseño con el proyecto técnico, planificación con la línea base, ejecución certificada y cierre con la aceptación.
3. Porque cada fase arrastra lo anterior: en diseño se cambia un plano, en ejecución se rompe obra hecha y en explotación se para el servicio.
4. Que los hijos cubren todo el alcance del padre, sin trabajo escondido.
5. Porque no tiene entregable verificable ni criterio de aceptación, ni se puede estimar.
6. Dura 20 días; la rama de 15 tiene 5 de holgura.
7. La total es el retraso que no mueve la fecha final; la libre, el que no mueve la siguiente.
8. Sí, cuando dos cadenas independientes duran lo mismo. Hay que vigilar las dos.
9. Responde por el cómo a su jefe de departamento y por el cuándo al de proyecto; si ambos exigen dedicación total, hacen falta prioridad escrita y escalado.
10. Tiempo esperado: (3 + 20 + 11) / 6 = 5,67. Desviación: (11 - 3) / 6 = 1,33.
11. Porque representa el escenario que se repite; los extremos son colas.
12. Comprimir con más recursos, que encarece y baja el rendimiento, o solapar tareas, que arriesga. Recortar alcance es la tercera.
13. Al nuevo se le dirige: pasos concretos y revisión frecuente. Al veterano se le delega: objetivo y plazo, sin supervisar cada paso.
14. Doscientos cincuenta euros por día ((3 500 menos 3 000) entre 2). Compensa si es crítica y el coste indirecto diario supera esa cifra, o si hay una penalización mayor.
15. CPI igual a 9 000 entre 10 000, es 0,90; SPI igual a 9 000 entre 10 000, es 0,90. Se avanza y se rinde al 90 por ciento: hay que corregir antes de que el sobrecoste crezca.
