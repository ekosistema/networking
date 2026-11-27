---
title: "Gestión de redes telemáticas"
description: "Audioapuntes de la unidad Gestión de redes."
section: audio
unit: gestion
kind: audioapuntes
order: 70
duration: "11 min"
tags:
  - redes
  - gestion
  - audioapuntes
---

Esto es la unidad de gestión de redes telemáticas, y la idea que hay que llevarse es una sola: una red no se termina el día que se instala, se administra. Montarla lleva semanas. Sostenerla lleva años.

El primer concepto es el ciclo de vida, y se resume en cinco palabras, que son planificar, diseñar, implantar, operar y optimizar. Planificar es decidir qué necesita el negocio y con cuánto dinero. Diseñar es elegir la topología, el direccionamiento y la redundancia. Implantar es montarlo y probarlo. Operar es vigilarlo todos los días. Y optimizar es mirar los datos y decidir el siguiente cambio. Cisco añade una fase previa, preparar, y entonces lo llama con seis letras, pero la idea es la misma.

Lo importante es que el ciclo no es una línea recta. Lo que aprendes operando es lo que justifica el diseño del año siguiente. Y encaja con el ciclo clásico de mejora continua, que es planificar, hacer, verificar y actuar. Operar es la parte de verificar, porque medir es la forma de comprobar que lo que diseñaste funciona. Si no mides, el ciclo se queda dando vueltas entre operar y apagar fuegos.

Quien opera la red es el NOC, es decir, el centro de operaciones de red. Es una sala, unos turnos de personas y un panel con alarmas, estado de enlaces y tickets. El NOC no diseña la red: mira, avisa, correlaciona y coordina. Correlacionar es la palabra importante, porque un solo edificio sin luz genera decenas de avisos de equipos inaccesibles, y el trabajo fino es convertirlos en un solo aviso. Se organiza por niveles. El primero atiende y sigue un guion. El segundo entra en los equipos y diagnostica. El tercero es el especialista o el fabricante.

La administración se agrupa en cinco bloques, que son configuración, disponibilidad, capacidad, seguridad e incidencias. La configuración es tener la línea base: saber qué equipos hay, con qué versión y con qué configuración. La disponibilidad se mide con dos tiempos, el tiempo medio entre fallos y el tiempo medio de reparación, y con los dos se calcula el porcentaje de servicio. La capacidad responde a tres preguntas: qué gasto hoy, cuánto voy a crecer y cuándo tengo que ampliar. La seguridad se apoya en la familia de normas de la serie dos siete cero cero cero, con la dos siete cero cero uno para los requisitos y la dos siete cero cero dos para los controles. Y las incidencias se gestionan con un proceso: severidad, propietario, escalado y cierre con causa.

En seguridad hay una confusión que cuesta puntos. Un sistema de detección de intrusos en red, un NIDS, escucha el tráfico y busca patrones de ataque; Snort es el ejemplo clásico. Nessus, en cambio, no escucha nada: se conecta a los equipos y comprueba si les faltan parches. Nessus es un escáner de vulnerabilidades, no un detector de intrusos. El programa de referencia los pone juntos, pero cumplen funciones distintas.

Para medir hace falta un modelo. Hay un gestor, que es la estación que pregunta y guarda, y un agente, que es el programa que corre en el equipo y responde. La información vive en la MIB, es decir, la base de información de gestión, que es un árbol donde cada dato tiene su identificador de objeto, escrito con números separados por puntos. El agente escucha en un puerto de datagramas, el ciento sesenta y uno, y las notificaciones van al ciento sesenta y dos. El protocolo se llama SNMP, es decir, protocolo simple de gestión de red.

El gestor pregunta de varias formas. Pide un objeto concreto, o pide el siguiente del árbol para recorrer una tabla entera. Desde la segunda versión puede pedir varios de golpe, y eso ahorra muchísimos paquetes. También puede escribir un valor, aunque en producción conviene tener la escritura cerrada. Y cuando algo se sale de lo normal, el agente no espera a que le pregunten: manda un aviso, que se llama trap, al gestor.

La diferencia entre preguntar y que te avisen es como la del termómetro de la tienda. Puedes ir a mirarlo cada rato, y entre visita y visita no te enteras de nada. O puedes poner un termómetro con alarma que te llame si sube de menos dieciocho. Lo primero es el sondeo, y lo segundo es el trap.

Hay tres versiones en uso. La versión uno y la versión dos c se protegen con una comunidad, que es una contraseña que viaja en claro en cada paquete. Eso significa que cualquiera que capture tráfico la lee y hereda los permisos. Los valores por defecto, public y private, son el primer sitio donde mira un atacante. La versión tres añade autenticación y cifrado de verdad, con un modelo de usuario y un control de acceso por vistas, así que es la que hay que usar siempre que se pueda. Si un equipo solo admite la dos c, al menos que viva en una red de gestión aparte y con acceso restringido por dirección de origen.

Las herramientas de consola son sencillas. Se pide un objeto, se recorre una rama, se traduce un nombre a su identificador, se escribe un valor y se manda un trap de prueba. Todo eso se hace con la familia de utilidades de Net SNMP, y conviene conocer los comandos concretos.

Ahora el límite de SNMP, que es de donde nace RMON, es decir, la monitorización remota. Preguntar cada cinco minutos a doscientos equipos son miles de consultas a la hora, con su carga de procesador y de red, y si el gestor se cae no queda historia de lo que pasó. La solución es poner la inteligencia en el otro extremo: una sonda, que puede ser un aparato dedicado o el propio conmutador, acumula estadísticas y el gestor solo recoge el resumen. Es la diferencia entre un vigilante en cada pasillo y una cámara que graba sola.

La primera versión de RMON tiene nueve grupos para Ethernet. Están las estadísticas, el historial, las alarmas, los hosts, el ranking de hosts, la matriz de conversaciones, el filtro, la captura y los eventos. Su sucesora sube a las capas de red y aplicación y añade diez grupos más, entre ellos la distribución por protocolo. Con eso ya no solo sabes cuánto pasa, sabes qué es y quién lo manda.

Al medir el rendimiento hay seis magnitudes que se repiten. La utilización, que es qué parte de la capacidad se usa. El retardo, que es cuánto tarda un paquete en llegar. El jitter, que es la variación de ese retardo entre paquetes seguidos. La pérdida, que es el porcentaje que no llega. La disponibilidad, que es el tiempo que el servicio estuvo en pie. Y la carga de procesador y de memoria del propio equipo.

Los umbrales que conviene recordar son pocos. Una utilización sostenida por encima del setenta por ciento es un aviso, y por encima del ochenta es un problema. En voz, más de ciento cincuenta milisegundos de retardo se nota, y más de treinta milisegundos de jitter corta las palabras. Una pérdida por encima del uno por ciento ya dispara retransmisiones. Y una disponibilidad del noventa y nueve coma nueve por ciento suena a mucho, pero son casi nueve horas de caída al año.

Vamos con el cálculo que pide el caso. Tienes un enlace de cien megabits y miras la hora punta de cada mes. En enero, treinta megabits. En febrero, treinta y seis. En marzo, cuarenta y tres. En abril, cincuenta y uno. En mayo, sesenta y dos. Cada mes es un veinte por ciento más que el anterior, o sea, un crecimiento geométrico. Para saber cuándo se llena no se extrapola de cabeza: se usan logaritmos. El número de meses es el logaritmo del cociente entre el valor final y el actual, dividido por el logaritmo de uno más la tasa. Con esos datos salen unas seis semanas para llegar al ochenta por ciento y unos dos meses y medio para llenar el enlace. Y hay un atajo para estimar: el tiempo de duplicación es setenta dividido entre la tasa, así que con un veinte por ciento son tres meses y medio.

Ojo con una cosa: si el crecimiento fuera lineal, la cuenta sería una regla de tres y daría más meses. El geométrico acelera, y por eso un enlace que parece holgado se llena de golpe. Antes de pedir más ancho de banda hay que mirar quién está consumiendo, porque a veces no es crecimiento, es un equipo infectado o una copia de seguridad mal programada.

Y el último bloque es el mantenimiento preventivo. La ITV del coche no arregla nada, pero evita la avería en mitad del viaje. Aquí igual: se planifica una ventana de mantenimiento, que es el rato acordado en el que se admite cortar el servicio. Esa ventana lleva alcance, duración, responsable, comunicación a los usuarios y un plan de vuelta atrás. Una ventana sin plan de vuelta atrás no es una ventana, es una apuesta.

La actuación estrella es la actualización de firmware. Se leen las notas de versión y la tabla de compatibilidad, se comprueba si corrige agujeros de seguridad, se verifica la suma de control de la imagen, se copia la configuración y la imagen actual por si hay que volver, se actualiza un equipo cada vez y nunca la pila entera de golpe. Después se comprueba la versión, el tiempo encendido, las interfaces que deben estar arriba, las rutas, el apilamiento y los registros. Y se vigila un día entero, porque hay fallos que tardan horas en aparecer.

Si algo sale mal, se vuelve a la imagen anterior y se documenta el intento. Documentar no es burocracia: es lo que evita repetir el mismo error dentro de seis meses.

Y para cerrar, la filosofía de todo esto. Gestionar una red es tener datos antes de tener opiniones. El panel, la gráfica y el comando no son adornos: son la forma de convertir una queja en una decisión con fecha.
