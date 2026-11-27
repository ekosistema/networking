---
title: "Gestión de redes telemáticas · Parte dos"
description: "Audioapuntes de la unidad Gestión de redes."
section: audio
unit: gestion
kind: audioapuntes
order: 71
duration: "11 min"
tags:
  - redes
  - gestion
  - audioapuntes
---

Esta es la segunda parte de la unidad de gestión de redes. La primera te dio el ciclo de vida, el protocolo de gestión, el análisis del rendimiento y el mantenimiento. Esta añade lo que falta para defender una operación ante una auditoría o ante quien paga: los controles de seguridad, las herramientas, el perfil de tráfico, el calendario y el coste.

Empecemos por la seguridad. El programa de referencia nombra un control de la norma de seguridad de la información: el diez punto seis. Pertenece a la edición antigua y se llama gestión de la seguridad de las redes. Hoy esos controles están repartidos en la edición de dos mil veintidós. La seguridad de las redes, la seguridad de los servicios de red y la segregación de redes. Las actividades que de ahí salen son concretas. Separar la red de gestión. Cifrar la administración con protocolos seguros. Registrar y revisar quién accede. Incluir en el contrato con el operador cláusulas de seguridad y de nivel de servicio. Segmentar con redes virtuales y filtros. Y revisar las reglas al menos una vez al año.

Recuerda las tres propiedades que define la seguridad de la información. Confidencialidad, que solo acceda quien debe. Integridad, que los datos no se alteren sin permiso. Y disponibilidad, que estén cuando se necesitan. Gestionar la seguridad es equilibrar las tres.

Pasemos a las cinco áreas, porque el programa de referencia pide objetivos y actividades de cada una. En configuración, que cada equipo tenga la configuración aprobada y que todo cambio quede registrado: inventario, copias automáticas, plantillas y control de cambios. En disponibilidad, cumplir el nivel de servicio: monitorización, redundancia y análisis de las caídas. En capacidad, que la red soporte la demanda de hoy y la de mañana: medir, tendencias, ampliaciones planificadas. En seguridad, lo que acabamos de ver. Y en incidencias, restaurar el servicio cuanto antes y evitar que se repita.

Hablemos de herramientas. Hay de código abierto y comerciales, y la diferencia útil no es el precio de la licencia sino el coste total. Lo abierto no cuesta licencia, pero exige tiempo para instalarlo, ajustarlo y mantenerlo. Lo comercial incluye soporte, y suele cobrar por equipo, por sensor o por volumen de datos. Para configuración, hay herramientas que guardan copias de cada equipo cada noche y avisan de qué cambió. Para monitorización, además de las clásicas que cita el programa de referencia, hoy se usan plataformas con descubrimiento automático y paneles, y también la combinación de recogida de métricas con visualización. Y para los registros, plataformas que centralizan y permiten buscar.

Una aclaración que confunde. El programa de referencia habla de monitorización activa, con el protocolo simple de gestión, y de monitorización pasiva, con los flujos de red y con Nagios. La distinción útil es otra. La activa es aquella en la que el sistema pregunta: un ping, un sondeo, una comprobación. La pasiva es aquella en la que el sistema observa lo que ya ocurre: flujos, capturas, avisos que envía el equipo, registros. La activa responde a si funciona ahora. La pasiva, a qué ha pasado. Se combinan.

Ahora, qué se monitoriza y con qué impacto. No todos los equipos valen igual. Los críticos, como el núcleo, el cortafuegos y los servidores de nombres, se sondean cada minuto. Los importantes, cada cinco. Los ordinarios, cada quince. Y hay una razón: cada consulta gasta un poco de procesador del equipo. Con doscientos equipos y treinta objetos por equipo, sondear cada cinco minutos son unos cuarenta kilobits por segundo. Hacerlo cada diez segundos es treinta veces más. El ancho de banda no importa, pero el procesador de un equipo pequeño sí. Usa consultas por bloques, contadores de sesenta y cuatro bits, sondeos escalonados y comprueba, tras activarlo, que la carga de los equipos no sube.

Otra idea: traducir números en prestaciones. Un contador de bytes no es información. La utilización del sesenta y dos por ciento sí. El tiempo encendido es un contador en centésimas de segundo, que se desborda a los cuatrocientos noventa y siete días. La información es que reinició hace tres horas.

Pasemos al perfil de tráfico, que el programa de referencia pide expresamente. Un perfil describe cómo varía la carga a lo largo del día, de la semana y del año. Se construye con varias semanas de datos, agrupando por hora y por tipo de día. Con un día laborable típico, la media puede ser de veintisiete megabits y la punta de cincuenta y seis. La relación entre ambas, algo más de dos, indica lo concentrado que está el uso.

El perfil sirve para cuatro cosas. Dimensionar, siempre por la punta con un margen, no por la media. Elegir la ventana de mantenimiento, en las horas valle. Detectar anomalías: si un martes a las tres de la madrugada hay treinta y ocho megabits y el perfil dice tres, algo habla por la red cuando no debería. Y prever el crecimiento, mirando cómo sube la punta mes a mes. Ante esa anomalía, miras los flujos para ver quién habla con quién y por qué puerto. Si es la copia de seguridad, corriges su horario. Si es un equipo hacia Internet, lo aíslas y abres una incidencia de seguridad.

Y el informe de monitorización tiene que proponer. No basta medir. Lleva el propósito y el destinatario, el periodo, los indicadores con su umbral, lo que se salió del perfil, la causa probable, la propuesta con su coste y la fecha.

Vamos con el mantenimiento. Del manual del fabricante se extrae qué temperatura admite, cada cuánto se limpia, qué piezas caducan, como los ventiladores y las baterías, cuándo se actualiza el firmware y cuándo termina el soporte del modelo. Con eso se hace el calendario, y el programa de referencia pide que sea gráfico: una tabla con los meses en columnas y las operaciones en filas. Copia de configuración y revisión de registros, cada mes. Limpieza, cada trimestre. Prueba de baterías y de conmutación, cada semestre. Auditoría de configuración y de cuentas, cada año. Cada operación lleva responsable, duración, ventana y registro.

Y ese mantenimiento se audita. Una auditoría comprueba con evidencias seis cosas. Que el calendario se cumplió. Que las copias existen y se pueden restaurar. Que el firmware está al día, o que hay una excepción justificada. Que los cambios fueron aprobados. Que las alarmas se atendieron. Y que las baterías están en plazo. El auditor contrasta evidencias con criterios, no propone soluciones.

Cerremos con el lado de quien paga. Monitorizar cuesta, y se decide qué vigilar. Con una licencia por sensor, medir todo por si acaso multiplica el precio. En capacidad, ampliar un enlace cuesta cada año; gestionar con prioridades y mover la copia a la noche cuesta unas horas. Normalmente se hacen las dos cosas: lo barato ahora y la ampliación planificada, con el informe de tendencia en la mano. Sin gráfica y fecha no hay presupuesto.

Cubrir una guardia de red las veinticuatro horas, los siete días, son más de ocho mil horas al año. Con unas mil setecientas productivas por persona, necesitas cinco o seis personas solo para un puesto continuo. Por eso las empresas pequeñas trabajan en horario laboral con alarmas automáticas y guardia de aviso, o externalizan.

Y recuerda lo que defiende todo esto ante el cliente y ante el auditor: el informe mensual de disponibilidad, el calendario cumplido y registrado, las copias que se restauran y los cambios aprobados con plan de reversión. Son evidencias baratas de conseguir y muy caras de no tener.

Si te quedas con una idea de esta parte: una red bien gestionada no es la que no falla, es la que se mide, se prevé, se mantiene con calendario y puede demostrar todo eso con registros.
