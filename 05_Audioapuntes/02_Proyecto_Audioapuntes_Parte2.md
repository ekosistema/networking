---
title: "Desarrollo del proyecto de la red telemática · Parte dos"
description: "Audioapuntes de la unidad Proyecto de red."
section: audio
unit: proyecto
kind: audioapuntes
order: 21
duration: "11 min"
tags:
  - redes
  - proyecto
  - audioapuntes
---

Esta es la segunda parte de la unidad del proyecto de red. La primera te dio las redes, el cableado y el caso de las tres plantas. Esta se centra en lo que el programa de referencia llama el proyecto telemático: cómo se pasa de una necesidad a una red entregada, y cómo se defiende ante quien paga.

Empecemos por la idea de fondo. Un proyecto no es instalar equipos. Es cumplir unos requisitos con un coste y un plazo acordados. Y se recorre en orden: estudio previo, diagnóstico, diseño, plan de acción, ejecución y entrega. Cada fase deja un documento. Si saltas una, lo notas más tarde y te sale caro.

La primera fase es escuchar. Y escuchar bien es una técnica. La información útil casi nunca está en una sola persona. La dirección te cuenta los objetivos y el presupuesto. Informática te cuenta el estado técnico. Los usuarios te cuentan cómo se trabaja de verdad. Y los datos medidos, que son una semana de tráfico, te cuentan lo que nadie sabe que pasa.

Para entrevistar, lo más útil es una entrevista semiestructurada. Llevas un guion, pero dejas espacio para profundizar. Empiezas con preguntas abiertas, del estilo cuéntame cómo trabajáis con los ficheros. Cierras con las cerradas que fijan datos, como cuántos puestos habrá dentro de cinco años. Y cuando alguien te cuenta un problema, preguntas por qué cinco veces, hasta llegar a la causa. Después de cada entrevista redactas un acta con fecha, asistentes y acuerdos, y pides que te la validen por escrito. Entrevista por separado a dirección y a informática, porque no dirán lo mismo delante del otro.

Con eso, haces el estudio de viabilidad. Hay una parte técnica: distancias, canalizaciones, potencia, espacio. Y una parte económica, con la inversión y la explotación de cinco años, siempre con dos alternativas por lo menos.

Aquí aparecen tres indicadores que conviene entender, no solo memorizar. El plazo de recuperación dice cuánto tarda en volver lo invertido. Es fácil, pero no sabe qué pasa después. El valor actual neto trae los ahorros futuros a hoy, con una tasa de descuento, porque un euro de hoy vale más que uno de dentro de cinco años. Si sale positivo, el proyecto compensa. Y la tasa interna de retorno es la rentabilidad que ofrece el proyecto. Si es mayor que lo mínimo que exige quien paga, es rentable.

Pon un ejemplo. Doce mil euros de inversión, cuatro mil de ahorro al año durante cinco años, con una tasa del ocho por ciento. Se recupera en tres años. El valor actual neto sale positivo, unos cuatro mil euros, y la rentabilidad ronda el veinte por ciento. Y el argumento más sólido suele ser el coste de la no calidad: ciento veinticuatro puestos que pierden hora y media al año por caídas, a veinticinco euros la hora, son casi cinco mil euros que nadie ve en una factura.

Pasemos al diagnóstico, que es donde se ve la diferencia entre un técnico y un instalador. Cuando ya existe una red, el informe de diagnóstico va antes que cualquier propuesta. Tiene cinco fases: recoger datos, analizarlos frente a los requisitos y las normas, diagnosticar separando síntomas de causas, recomendar con prioridades y presentarlo al cliente para validarlo. Fíjate en el tercer paso. El síntoma es que va lenta. La causa puede ser una sola red con seiscientos equipos y difusión por todas partes. Si te saltas el diagnóstico, resuelves el problema que el cliente cree tener.

Aquí entra el inventario. Un registro con una fila por cada activo: tipo, modelo, número de serie, ubicación, versión de sistema, direcciones, garantía y responsable. Y otro, igual, para los servicios de telecomunicación: operador, caudal, contrato y vencimiento. Un inventario vivo es la base de todo lo que viene después.

Con el diagnóstico y el inventario, se redactan los requisitos. Y un buen requisito es medible, singular y verificable. La red debe ser rápida no vale. Cien megabytes por segundo sostenidos sí. Menos de una hora de parada al año sí. Todo requisito lleva un identificador, un criterio de aceptación y una prioridad.

Llegamos a la propuesta técnica. Tiene tres bloques. El primero es el sistema informático y los servicios. Si hay que reubicar la sala de servidores, hay criterios claros. Lejos del agua, con acceso restringido, con circuito eléctrico propio y un sistema de alimentación sin cortes. La climatización sigue una regla simple: toda la potencia eléctrica acaba en calor, así que dos kilovatios de equipos exigen dos kilovatios de refrigeración. Y protección contra incendios con detección y extinción adecuadas al local.

También entra la política de seguridad de la información. Qué se protege, quién es responsable, qué se permite, cómo se tratan las contraseñas y las copias, y cada cuánto se revisa.

El segundo bloque es el cableado. Se decide en orden: cuántos puestos y cuántas tomas por puesto, qué servicios llevan, qué cable y qué norma, qué nivel de prestaciones y qué requisitos de seguridad, entre ellos la reacción al fuego de los cables. Y los costes. La mano de obra se estima con tiempos unitarios por punto: tender, conectar los dos extremos y certificar. Con doscientos sesenta puntos y poco más de una hora por punto, salen unas doscientas ochenta y seis horas. Multiplicas por el coste horario y tienes la mano de obra directa.

Siguiente, el plan de acción. Además de los plazos, que ya vimos en el diagrama de Gantt, hay dos piezas que se olvidan. La primera es el plan de explotación: cómo se opera la red cuando tú ya no estás. Qué se vigila y con qué alarmas, qué mantenimiento se hace y cuándo, cómo se piden y se aprueban los cambios, quién actualiza el inventario, qué informe se entrega cada mes y cuándo se renuevan los equipos.

La segunda pieza es la seguridad del sistema, y dentro está la copia de seguridad. Se aplica la regla del tres, dos, uno. Tres copias, en dos soportes distintos, y una de ellas fuera de la sede. Se miden con dos relojes. El primero dice cuántos datos aceptas perder, por ejemplo las últimas veinticuatro horas. El segundo dice cuánto tiempo aceptas estar parado, por ejemplo cuatro horas. Y se prueba la restauración, porque una copia que nunca se ha restaurado no es una copia, es una esperanza.

Los usuarios se gestionan por roles. Una matriz dice qué ve cada rol: dirección, administración, soporte, invitado. Con el principio de privilegio mínimo: cada uno accede a lo que necesita y a nada más. Y cuando alguien se va, la baja es inmediata.

Quedan los servicios finales, que el programa de referencia pide expresamente. La voz es la gran sorpresa. Una llamada con el códec habitual consume unos ochenta y siete mil bits por segundo con la cabecera de Ethernet. Es muy poco. Veinticinco llamadas a la vez son poco más de dos megabits. Lo que la voz necesita no es ancho de banda: es que no espere en la cola. El retardo en un sentido no debería pasar de ciento cincuenta milisegundos. Por eso va en su propia red virtual y con prioridad marcada.

La videoconferencia sí consume más, entre uno y cuatro megabits por flujo en alta definición. Y la videovigilancia es constante: una cámara de cuatro megabits graba unos cuarenta y tres gigabytes al día. Dieciséis cámaras durante un mes son unos veintiún terabytes. Es el cálculo que evita comprar un disco pequeño.

Para terminar, el lado de quien paga. Todo proyecto lleva riesgos, y se ordenan por exposición, que es la probabilidad multiplicada por el impacto. El retraso de la entrega de equipos suele ser el primero de la lista, y la respuesta es pedir pronto y tener un proveedor alternativo. Los pagos se ligan a entregables, y el último, a la entrega de planos y certificados: es la mejor garantía de que se entregan. Y cualquier cambio de alcance se registra con su coste y su plazo, y lo aprueba quien paga.

Y ten presente la vida de cada pieza. El cableado dura décadas, así que se pone de categoría holgada una sola vez. Los equipos activos duran cinco o siete años, así que no se sobredimensionan. Antes de comprar, pide por escrito cuándo dejarán de tener soporte.

Si te quedas con una idea de esta parte: un proyecto de red se aprueba por lo que resuelve, se defiende con números y se mide por lo bien que funciona el día después de la entrega.
