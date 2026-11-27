---
title: "Resolución de incidencias en redes telemáticas"
description: "Audioapuntes de la unidad Incidencias."
section: audio
unit: incidencias
kind: audioapuntes
order: 80
duration: "10 min"
tags:
  - redes
  - incidencias
  - audioapuntes
---

Esto es la unidad de resolución de incidencias en redes telemáticas, la última del módulo de administración, y la idea que hay que llevarse es una sola. El síntoma no es la causa. Todo lo demás, las herramientas, los indicadores, los formularios, existe para sostener esa frase.

Piensa en el electricista. Cuando salta el diferencial de tu casa, no empieza cambiando el cuadro entero. Sabe que el chispazo puede venir de un electrodoméstico, de una toma con humedad o de un cable pelado. Va quitando cargas una a una hasta que aguanta. Eso es diagnosticar.

El problema de fondo es que la red funciona casi siempre, y por eso nadie la mira. El día que falla hay cuarenta personas esperando y una sola con acceso al armario. La urgencia empuja a hacer lo peor, que es cambiar tres cosas a la vez. Si al final funciona algo, nadie sabrá qué lo arregló ni si volverá. El técnico sin método apaga fuegos. El que tiene método hace una pregunta, ejecuta una prueba, apunta el resultado y avanza un paso. La diferencia no es experiencia, es orden.

Empieza por el vocabulario, porque se usa con precisión en cualquier servicio de soporte. Una incidencia es una interrupción no planificada del servicio, o una reducción no planificada de su calidad. Una petición de servicio es algo previsto en el catálogo, como dar de alta a un usuario. Un problema es la causa de una o de varias incidencias, y se gestiona aparte porque no busca restablecer sino eliminar la raíz. Y un error conocido es un problema ya diagnosticado, con solución temporal escrita.

La incidencia se mide por el tiempo que se tarda en restablecer. El problema se mide por la desaparición de la causa. Si mezclas los dos en el mismo registro, tendrás indicadores que no significan nada y un jefe que no puede decidir nada con ellos.

Ahora la prioridad, que es donde más se falla. Prioridad no es gravedad. La gravedad describe el tamaño del fallo y la prioridad describe el orden en que hay que atenderlo. Sale de dos dimensiones. El impacto dice a cuántos afecta y cuán crítico es lo afectado. La urgencia dice cuánto puede esperar sin que el daño crezca. Una caída total a las diez de la mañana no se parece a esa misma caída a las diez de la noche. De la mezcla salen cuatro niveles, con plazo de respuesta y plazo de resolución.

El escalado tiene dos formas que se confunden todo el tiempo. El escalado funcional sube la incidencia a alguien que sabe más, del segundo nivel o del tercero, el fabricante o el desarrollo. El escalado jerárquico sube la incidencia a un mando, y se usa cuando hace falta autoridad, presupuesto, o cuando se va a incumplir el acuerdo de nivel de servicio. Regla práctica para no equivocarte, se escala cuando se agota el conocimiento y no cuando se agota la paciencia.

El ticket es la memoria del servicio. No es burocracia. Un ticket bien escrito lleva la hora de apertura, la ubicación exacta, el servicio afectado, el síntoma en palabras del usuario y la traza de todo lo que se probó. Sin ubicación no se puede comprobar nada. Sin hora no se puede medir nada. Y sin causa clasificada no hay estadística posible, así que no hay prevención y el mismo fallo vuelve en tres semanas con otro técnico.

Los indicadores son cuatro y conviene decirlos despacio. El tiempo medio de resolución es la suma de los tiempos de resolución dividida entre las incidencias cerradas. El tiempo medio entre fallos es el tiempo de funcionamiento dividido entre el número de fallos. La disponibilidad es ese tiempo medio entre fallos partido por su suma con el de resolución. Y el cumplimiento del acuerdo de nivel de servicio es el porcentaje de incidencias cerradas dentro de plazo. El primero se reduce con método y repuestos. El segundo, con prevención y redundancia.

Pasemos al método. Primero se define el problema, y definirlo es la mitad del trabajo. La red no va no es un problema, es una queja. Tres puestos del aula doce no obtienen dirección desde las nueve y cinco, los demás sí, y se reproduce al reiniciar. Eso sí es un problema. Tiene que ser observable, acotado, reproducible y cuantificado. Cuando lo escribes así, el propio enunciado descarta la mitad de las hipótesis.

Para abrir hipótesis está la espina de pescado, el diagrama de causa y efecto de Ishikawa, con seis familias. Mano de obra, que es el cambio que alguien hizo sin documentar. Método, que es el procedimiento y el inventario. Máquina, que es el conmutador, el router o la fuente. Material, que es el latiguillo y el conector. Medición, que son los umbrales mal puestos y las alertas silenciadas. Y medio, que es la obra, la humedad o el calor. Te obliga a mirar donde no estabas mirando.

Para cerrar el análisis están los cinco porqués, que van en la dirección contraria. Un aula pierde la red cada mañana. ¿Por qué? Porque el conmutador reinicia. ¿Por qué? Porque el sistema de alimentación se queda sin batería. ¿Por qué? Porque la batería está agotada. ¿Por qué no se ha cambiado? Porque nadie revisa la autonomía. ¿Por qué nadie la revisa? Porque el plan de mantenimiento no incluye esos equipos. Ahí está la acción, y no es cambiar el conmutador. Ishikawa abre, los cinco porqués profundizan, y se usan en ese orden.

Cuando ya tienes hipótesis, diseña la prueba. Una prueba buena lleva el resultado esperado escrito antes de ejecutarla, tanto si la hipótesis es cierta como si es falsa. Se cambia una variable por vez. Y el orden de intrusión importa mucho. Primero se mira, después se toca. Consultar la configuración de un puerto no molesta a nadie. Desconectar un latiguillo en producción sí, y hay que tener el plan de vuelta preparado.

Las herramientas de hardware miden cosas distintas. El polímetro mide tensión, corriente, resistencia y continuidad, y en red sirve para ver si un hilo llega, si dos están en corto y si un puerto de alimentación por Ethernet entrega tensión. El comprobador de cableado da el mapa de pines y detecta el par abierto, el cruzado y el latiguillo equivocado. El generador y el localizador de tonos no detectan averías, identifican cables, y evitan desconectar el puerto que no es.

El reflectómetro de dominio de tiempo, el que llamamos te de erre, lanza un pulso y mide el eco. Con eso te dice a qué distancia está la rotura, porque la distancia es la velocidad de la señal por el tiempo, dividido entre dos. Y el certificador es otro nivel. No dice si los hilos llegan, dice si el enlace cumple la norma, con diafonía, atenuación, pérdida de retorno y margen. Un cable puede tener continuidad perfecta y no aguantar un gigabit.

En software, el monitor de red sondea los equipos y guarda la serie histórica. Es lo que convierte una incidencia en un aviso y lo que te permite decir que un enlace lleva una semana al límite. Wireshark es el analizador de protocolos, y sirve para ver lo que de verdad viaja, con las retransmisiones, los saludos que nadie contesta y las peticiones de dirección que se quedan sin respuesta.

El ping es la herramienta más humilde y la que más se malinterpreta. Envía una petición de eco y espera la respuesta. Si no hay respuesta no puedes concluir que el equipo esté apagado, porque un cortafuegos que descarta ese tráfico produce el mismo silencio. Y hay respuestas que hablan claro. Destino inalcanzable quiere decir que el router no encuentra el equipo o que falla la resolución de direcciones físicas. Tiempo de vida excedido quiere decir bucle de enrutamiento.

El traceroute enseña el camino salto a salto. Y aquí hay una trampa clásica. Los asteriscos no marcan el salto roto, marcan un salto que no contesta, y muchos routers filtran ese tráfico a propósito. El fallo está donde las respuestas dejan de aparecer y ya no vuelven.

La orden de arp relaciona direcciones lógicas con direcciones físicas, y responde a una pregunta muy concreta, si esa dirección es de verdad ese equipo. Una entrada incompleta significa que nadie contestó. Y la dirección física de la puerta de enlace tiene que ser la del router, no la de un puesto. Con netstat ves qué puertos están a la escucha y qué conexiones están establecidas, y en Windows además qué proceso ocupa cada una.

Y llegamos a la frontera, la pregunta que más se hace en el trabajo real. ¿La avería es mía o del proveedor? Se contesta con dos pruebas. La primera es la puerta de enlace. Haces ping al router, con la máscara y la puerta confirmadas, y compruebas en la tabla de direcciones físicas que esa dirección es la del router. Si responde en menos de un milisegundo, tu red local enruta. La segunda es el primer salto. Si la puerta responde y el primer salto externo no, el tramo contratado está caído.

Queda el caso que más se repite en los exámenes. El ping a la puerta de enlace responde y el ping a internet no. Prueba primero por dirección, sin nombre, porque si por dirección funciona y solo falla el nombre, el problema es el sistema de nombres de dominio. Y si falla de las dos formas, el sospechoso es la salida o el circuito. Nunca declares una avería del proveedor sin haber probado por dirección.

Y para terminar, la filosofía de todo esto. Una red no se arregla con herramientas caras, se arregla con orden. El síntoma dice dónde duele, la capa dice dónde mirar, la herramienta confirma o descarta, y el registro dice qué aprendiste. Si no puedes demostrar la causa con una prueba, todavía no la has encontrado.
