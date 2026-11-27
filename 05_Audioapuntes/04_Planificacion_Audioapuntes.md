---
title: "Planificación de proyectos de implantación de infraestructuras"
description: "Audioapuntes de la unidad Planificación de proyectos."
section: audio
unit: planificacion
kind: audioapuntes
order: 40
duration: "10 min"
tags:
  - redes
  - planificacion
  - audioapuntes
---

Esto es la unidad de planificación de proyectos de implantación de infraestructuras, y la idea que hay que llevarse es una sola. Un plan no sirve para adivinar el futuro. Sirve para darte cuenta de que algo se ha torcido mientras todavía queda margen para arreglarlo.

Piensa en una obra de verdad. En el mismo techo coinciden el electricista que cuelga las bandejas, el de climatización que quiere pasar sus tubos, el albañil que tiene que cerrar el falso techo y el transportista que trae el armario de comunicaciones. Cada uno tiene su fecha, su jefe y su idea de la urgencia. Si no hay un plan común, el orden lo decide quien grita más fuerte, y el cable acaba llegando el martes siguiente a que cerraran el techo.

Un proyecto no es una tarea larga. Es una promesa con fecha. Esfuerzo temporal, con principio y fin, y un resultado que no existía antes. Sobre esa promesa se apoyan tres cosas que se mueven juntas, el alcance, el plazo y el coste. Si alguien pide cuarenta y ocho fibras ópticas en lugar de veinticuatro para dejar el edificio preparado, no está pidiendo material, está pidiendo más tubo, más horas de soldadura y probablemente dos días más. La respuesta correcta no es sí ni no. Es decir cuánto cuesta, cuánto retrasa y devolver la decisión a quien la pidió.

Todo proyecto recorre fases, y cada fase termina en algo que se puede enseñar y en alguien que dice adelante. Eso es una puerta de decisión. Y hay una asimetría que conviene memorizar. Un fallo de diseño se corrige cambiando un plano. El mismo fallo en la ejecución rompe obra hecha. Y en explotación obliga a parar el servicio. Por eso se planifica antes de instalar y no después.

Para poder estimar hay que partir el trabajo. Eso es la EDT, la estructura de desglose del trabajo. No se parte por departamentos, se parte por entregables, y la regla que lo sostiene es sencilla, los hijos de un nodo suman exactamente el alcance del padre. Ni trabajo escondido, ni trabajo huérfano. El último nivel es el paquete de trabajo, la unidad que se estima, se asigna a una sola persona y se acepta con un criterio escrito. Instalar la red no es un paquete. Tender y conexionar el cableado horizontal de tres plantas, con noventa y seis tomas y certificación, eso sí lo es.

Con los paquetes en la mano se dibuja la red de dependencias y aparece la idea central de toda la unidad, el camino crítico. No es la tarea más difícil ni la más cara. Es la cadena más larga desde el principio hasta el final, y su longitud es la duración del proyecto. Imagina cinco paquetes. Preparar la obra cinco días, cablear ocho, montar el armario tres, configurar cuatro y probar tres. Un camino suma cinco más ocho más cuatro más tres, veinte días. El otro suma cinco más tres más cuatro más tres, quince. El proyecto dura veinte, no la suma de todo y no la media.

La holgura es el margen que admite una tarea sin mover la fecha de entrega. Como cuando sales de casa con diez minutos de más para el tren. Si te entretienes cinco, lo coges. Si te entretienes once, lo pierdes, y los cinco que ya gastaste no vuelven. En el ejemplo, montar el armario puede empezar el día cinco o el día diez, así que tiene cinco días de holgura. La holgura total mira la fecha final. La holgura libre mira el comienzo de la tarea siguiente. Y hay dos trampas que caen siempre. Recortar una tarea con holgura no adelanta la entrega. Y un proyecto puede tener varios caminos críticos a la vez, lo que significa dos frentes que vigilar.

Cuando no hay datos históricos se estima con tres valores, que es lo que hace el PERT, la técnica de evaluación y revisión de programas. Se pide al que sabe un escenario optimista, uno probable y uno pesimista. El tiempo esperado es el optimista más cuatro veces el probable más el pesimista, todo dividido entre seis. Cuatro veces, porque el escenario probable es el que de verdad se repite. Para unas canalizaciones, cuatro días si nada se tuerce, cinco lo normal, siete si el techo está lleno, el tiempo esperado es treinta y uno entre seis, algo más de cinco días. La desviación de esa tarea es el pesimista menos el optimista partido por seis.

Y aquí está la diferencia que más se confunde. El CPM, el método del camino crítico, es determinista, una duración por tarea, y nació para decidir cuánto cuesta comprimir un plazo. El PERT es probabilístico, tres duraciones por tarea, y sirve para responder con qué probabilidad se llega a una fecha. En el proyecto no se suman las desviaciones, se suman las varianzas y al final se saca la raíz cuadrada. Si te acuerdas de eso, tienes el ejercicio resuelto.

Queda el dinero, que es donde el caso práctico aprieta. Cada paquete se descompone en material y en mano de obra, y el coste se reparte entre los días que dura, para poder dibujar la curva de coste acumulado. Esa curva crece despacio, se acelera cuando se compran los equipos y se aplana en las pruebas. Los materiales tienen su propia cadena, porque el punto de pedido es el consumo diario por el plazo de entrega más un margen de seguridad. Si gastas cuarenta metros de cable al día y el proveedor tarda doce días, pides cuando te quedan unos quinientos metros, no cuando te queda una bobina. Un material sin lote no se puede reclamar, y un pedido tardío no se arregla metiendo gente.

Y los hitos, que son sucesos de duración cero, se amarran a hechos verificables y no a fechas, sobre todo cuando de ellos depende una factura. Un hito de facturación atado a una fecha del calendario se convierte en un problema de tesorería en cuanto el proyecto se retrasa una semana.

La otra mitad de la unidad son las personas. En una organización funcional la autoridad va por especialidad y nadie responde del plazo. En una organización por proyectos el jefe manda de verdad, pero los recursos se duplican. Y en la matricial el trabajador pertenece a un departamento y trabaja a la vez en varios proyectos. Ahí aparece el conflicto de doble dependencia, porque el jefe funcional decide el cómo y la carrera profesional, y el jefe de proyecto decide el qué y el cuándo. El martes, el técnico que configura tus redes locales virtuales recibe una guardia de su jefe de departamento justo la tarde que tú necesitas para las pruebas. Ninguno está equivocado. Por eso el conflicto no se resuelve hablando, se resuelve con una regla escrita antes, con un porcentaje de dedicación acordado y con un escalado al patrocinador.

Los equipos no nacen maduros. Pasan por formación, por tormenta, que es cuando chocan los criterios y los roles, por normalización, cuando se acuerdan las reglas, y por desempeño, cuando el equipo se organiza solo. Las reglas se escriben la primera semana, y son cosas tan simples como el horario, el canal único de comunicación y la forma de escalar un bloqueo. Los nueve roles de Belbin ayudan a repartir el trabajo, y el papel que más se olvida es el del finalizador, el que repasa y cierra, porque sin él el proyecto se entrega con flecos.

Todo esto se documenta, y en España la referencia es la norma UNE mil quinientos setenta, en su edición de dos mil catorce, que ordena el proyecto técnico en índice, memoria con anexos, planos, pliego de condiciones, estado de mediciones y presupuesto. La memoria justifica el qué y el porqué, los planos dicen dónde y cómo, y el pliego fija materiales, ensayos y garantías. El presupuesto se construye desde abajo, con precios unitarios justificados, y luego se le suman los gastos generales y el beneficio industrial. En el sector público, como máximo un trece por ciento y un seis por ciento, y sobre eso el impuesto sobre el valor añadido.

Y como el proyecto son documentos, hay que versionarlos. Un repositorio es el archivo del proyecto. Cada confirmación es una revisión con autor y motivo. Una etiqueta es la entrega oficial congelada, la que no se mueve. Y una rama es una variante que todavía no está aprobada. La regla es simple, si dos personas tienen el mismo archivo con nombres distintos, el problema no es el archivo, es que no hay repositorio.

Para terminar, la idea que sostiene todo. Planificar no es rellenar una plantilla, es repartir el trabajo hasta que se pueda estimar, ordenarlo hasta que se vea qué manda, y poner precio a lo que se ha ordenado. Cuando el plan está bien hecho, el día de la entrega no hay sorpresas, solo comprobaciones.
