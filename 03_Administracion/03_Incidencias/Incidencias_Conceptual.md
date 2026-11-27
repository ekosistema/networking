---
title: "Resolución de incidencias en redes telemáticas"
description: "Resumen conceptual de la unidad Incidencias."
section: administracion
unit: incidencias
kind: conceptual
order: 81
tags:
  - redes
  - incidencias
  - conceptual
  - diagnostico
---

# Resolución de incidencias en redes telemáticas

> **En una frase.** Una red casi nunca se cae por sorpresa: se cae por algo que ya estaba mal, y el oficio consiste en leer el síntoma, situarlo en la capa correcta y demostrar la causa antes de tocar un solo cable.

## Por qué existe este tema

Una red departamental funciona bien casi todo el tiempo, y por eso nadie la mira. El día que falla, cuarenta personas levantan la vista del monitor a la vez y todas miran al mismo sitio. En ese momento no sirve de nada saber configurar un conmutador si no se sabe por dónde empezar, y la urgencia empuja a cambiar tres cosas a la vez sin apuntar ninguna.

El problema real no es la falta de herramientas, que las hay buenas. Es la falta de método. Un técnico sin método reinicia el servidor, cambia el latiguillo, mueve el puerto y al final funciona algo, pero nadie sabe qué lo arregló ni si volverá. El que tiene método hace una pregunta, ejecuta una prueba, anota el resultado y avanza un paso. La diferencia no es la experiencia, es el orden.

Hay una segunda razón, más importante para la empresa: las incidencias no son accidentes aislados, son datos. Si se registran con criterio, al trimestre se ve que el cuarenta por ciento de las caídas vienen del mismo armario. Sin registro no hay serie histórica, y sin serie histórica no hay inversión que se pueda justificar.

## El mapa

El síntoma entra por la izquierda, la causa se demuestra en el centro y el cierre alimenta la incidencia siguiente.

```text
  [ SINTOMA ]        [ REGISTRO ]         [ CAPA OSI ]
  lo que el usuario  ticket, hora,        donde se
  nota, no la causa  alcance, afectados   manifiesta
       |                   |                   |
       +-------------------+-------------------+
                           |
                           v
  [ HERRAMIENTA ] --> [ CAUSA ] --> [ SOLUCION ] --> [ CIERRE ]
   mide y confirma    demostrada     minima y        documentado,
   o descarta         con prueba     verificada      con causa raiz
                           |
                           v
                    [ INDICADORES ]
             MTTR, MTBF, cumplimiento de SLA
                           |
                           v
        realimentan la prevencion de la proxima incidencia
```

La flecha que importa es la última, la que sube desde los indicadores: sin ella el equipo se pasa la vida apagando fuegos.

## Los conceptos, uno a uno

### 1. La incidencia como pérdida de servicio

**La intuición.** Un ascensor parado con el cartel de "en revisión" no es un ascensor roto: es un edificio de doce plantas por escalera. Lo que se mide no es la avería, es el servicio que deja de prestarse.

**Lo formal.** Una incidencia es una interrupción no planificada de un servicio de TI o una reducción no planificada de su calidad. No es una petición de servicio, que es algo previsto que se solicita, ni un problema, que es la causa de una o varias incidencias y se gestiona aparte porque busca eliminar la raíz. La meta es restablecer el servicio cuanto antes, aunque sea con un apaño.

**Un ejemplo.** A las nueve y diez, veinticinco personas no pueden abrir el correo. El servidor responde a ping y el disco está al noventa y ocho por ciento. Restablecer es liberar registros en dos minutos; la causa raíz, una copia sin rotación, se abre aparte como problema.

### 2. Prioridad no es gravedad

**La intuición.** En urgencias no entra primero quien llegó antes ni quien grita más, sino quien se muere antes. Y una uña rota a las tres de la mañana no es urgente aunque duela.

**Lo formal.** La prioridad combina dos dimensiones. El impacto mide a cuántos afecta y cuán crítico es lo afectado; la urgencia mide cuánto puede esperar sin que el daño crezca. De ahí sale una escala de cuatro niveles con tiempos de respuesta y de resolución. La gravedad técnica describe el tamaño del fallo, no su efecto.

**Un ejemplo.** La impresora de dirección se atasca con una reunión en veinte minutos: impacto bajo, urgencia alta. El servidor de facturación pierde una tarjeta redundante: impacto alto, urgencia media. El conmutador principal se apaga: prioridad crítica con aviso inmediato.

### 3. El ticket como memoria del servicio

**La intuición.** El parte de taller del mecánico. Si no está escrito, no ocurrió, y el coche vuelve con el mismo ruido y otro mecánico empieza de cero.

**Lo formal.** El ciclo tiene estados y transiciones definidas: abierta, en curso, pendiente de tercero o de usuario, resuelta y cerrada, con reapertura posible. Cada transición deja hora y autor. El escalado funcional sube la incidencia a alguien con más conocimiento técnico, del segundo o tercer nivel; el jerárquico la sube a un mando cuando hace falta autoridad, presupuesto o se va a incumplir el acuerdo de nivel de servicio.

**Un ejemplo.** Cuatro incidencias idénticas en tres meses por el mismo puerto, cada una cerrada rápido y bien. Al agruparlas en la base de conocimiento aparece el patrón, se abre un problema y se cambia el conmutador: eso compra el registro.

### 4. El síntoma no es la causa

**La intuición.** La luz roja del salpicadero no es el motor averiado: es la consecuencia visible de algo que puede estar en el sensor, en el cableado o en la presión del aceite. Cambiar el motor por una luz roja es gastar dinero sin diagnosticar.

**Lo formal.** El síntoma es la manifestación observable; la causa es el defecto que lo produce, y casi nunca están en la misma capa. Un síntoma de capa tres, como no tener dirección IP, puede tener la causa en capa dos, en la VLAN del puerto. Un síntoma de capa siete, como una aplicación lenta, puede tenerla en un par abierto de capa uno. Situar el síntoma sirve para elegir la herramienta, no para saber dónde está el fallo.

**Un ejemplo.** El usuario dice que "internet no va". El ping a la puerta de enlace responde y el ping a una dirección pública no. El síntoma es de capa tres y la causa puede ser el cortafuegos, el DNS o el circuito: tres pruebas distintas para separarlas.

### 5. La causa raíz: Ishikawa y los cinco porqués

**La intuición.** El grifo que gotea. Cambiar la junta lo arregla hoy; preguntar por qué se ha deshecho la junta lo arregla para siempre, y la respuesta suele ser una presión mal regulada que afecta a toda la planta.

**Lo formal.** El diagrama de causa y efecto, o espina de pescado, ordena las hipótesis en seis familias: mano de obra, método, máquina, material, medición y medio, y obliga a mirar donde no se estaba mirando. Los cinco porqués son la otra cara: encadenar preguntas hasta dar con una causa corregible con una acción concreta. Se para cuando la respuesta ya no depende de la organización.

**Un ejemplo.** Se cae la red cada media hora. ¿Por qué? El conmutador bloquea un puerto. ¿Por qué? Detecta un bucle. ¿Por qué hay bucle? Hay dos latiguillos entre el mismo par de equipos. ¿Por qué nadie retiró el segundo? No había inventario de puertos. La causa raíz es la falta de inventario, no el latiguillo.

### 6. La frontera entre la red local y la red de área extensa

**La intuición.** Cuando se va la luz, lo primero es mirar si el vecino también está a oscuras. Si el vecino tiene luz, el problema es de tu cuadro; si no, es de la calle y solo queda llamar.

**Lo formal.** Se comprueba con una escalera de pruebas de dentro hacia fuera: dirección propia, puerta de enlace, primer salto del proveedor, resolución de nombres y destino externo. La puerta de enlace se confirma además en la tabla de direcciones físicas, porque un ping que responde puede venir de otro equipo con la misma dirección. Si la puerta responde y el primer salto no, el fallo está en el tramo contratado y se escala con datos.

**Un ejemplo.** Un puesto no navega. El ping a su puerta de enlace responde en cero coma cuatro milisegundos, el rastro muere en el primer salto externo y desde el router tampoco hay respuesta: la red local está sana y el circuito está caído.

### 7. Medir en vez de opinar

**La intuición.** El electricista no discute si hay tensión: pone el polímetro. La opinión se acaba donde empieza la medida.

**Lo formal.** Cada herramienta mide una magnitud concreta y por eso confirma o descarta un grupo cerrado de hipótesis. El polímetro mide tensión, continuidad y resistencia; el comprobador, el mapa de conductores; el generador de tonos identifica un cable entre muchos; el reflectómetro localiza una rotura por el eco de un pulso; el certificador mide los parámetros de la norma y dicta apto o no apto; el analizador de protocolos muestra el tráfico real, paquete a paquete.

**Un ejemplo.** Un puesto va lento. El comprobador dice que el cable está bien porque los ocho hilos tienen continuidad; el certificador dice que no cumple porque la diafonía está fuera de margen. Los dos tenían razón, pero solo uno respondía a la pregunta.

## Las confusiones que cuestan puntos

**Incidencia frente a problema.** La incidencia es el servicio caído y se restablece rápido; el problema es la causa, que se investiga aparte.

**Incidencia frente a petición de servicio.** La incidencia es algo que se rompe; la petición es algo previsto, como un alta o una instalación.

**Prioridad frente a gravedad.** La gravedad describe el fallo; la prioridad fija el orden de atención y sale del impacto y la urgencia.

**Escalado funcional frente a jerárquico.** El funcional busca más conocimiento técnico; el jerárquico busca autoridad o presupuesto.

**Tiempo medio de resolución frente a tiempo medio entre fallos.** Uno mide lo que se tarda en arreglar; el otro, lo que se tarda en volver a fallar.

**Comprobador de cableado frente a certificador.** El comprobador dice si los hilos llegan; el certificador dice si el enlace cumple la norma y con cuánto margen.

**"No responde al ping" frente a "está apagado".** Un cortafuegos que descarta ICMP produce el mismo silencio que un equipo apagado; solo se distinguen con la tabla de direcciones físicas.

## Tres ideas que completan el cuadro

**Atender primero lo que más duele.** Una sala de urgencias no atiende por orden de llegada ni por quién grita más: atiende por gravedad y por urgencia. Con las incidencias pasa igual. El impacto dice a cuánta gente y a qué procesos afecta; la urgencia, cuánto se puede esperar. Cruzados, dan la prioridad, y dos técnicos distintos llegan al mismo número. Subir la prioridad porque alguien insiste es la forma más rápida de que lo importante espere.

**Apagar el fuego y quitar la causa.** Resolver una incidencia es volver a dar servicio; resolver un problema es que no vuelva a pasar. Son trabajos distintos, con indicadores distintos. Y la forma de saber qué problema atacar no es la intuición: es contar. Si dos de cada cinco tickets son puestos sin dirección, arreglar eso elimina más trabajo que cualquier mejora en la rapidez de resolución. Cada solución que se escribe en la base de conocimiento convierte a un técnico en muchos.

**La pérdida de verdad se propaga.** Si un tramo está roto, todo lo que hay detrás lo nota. En un diagnóstico de ruta, un salto que pierde paquetes y deja los siguientes limpios no está roto: solo limita sus respuestas. Un salto que pierde y sigue perdiendo en todos los siguientes es donde empieza el problema. Y con esa evidencia (el recorrido completo y la hora) se escala al operador: un aviso con datos no se puede devolver con otra pregunta.

## Conexiones

De [Ejecución de proyectos](../../02_Implantacion/02_Ejecucion_Proyectos/README.md) llega el diagnóstico físico y la certificación: el mapa de pines, la diafonía y el veredicto del certificador son las herramientas de capa uno que aquí se usan para resolver.

De [Gestión de redes](../02_Gestion_Redes/README.md) llega la monitorización, que es la forma de enterarse de una incidencia antes que el usuario. Un sistema bien ajustado convierte incidencias en avisos, y los avisos se atienden con el método de esta unidad.

De [Proyecto de red](../../01_Diseno/02_Proyecto_Red/README.md) llegan las decisiones de diseño que explican la mitad de las incidencias crónicas: una VLAN mal planificada se cobra años después en forma de ticket.

## Autoevaluación

1. Define incidencia y distínguela de problema y de petición de servicio.
2. ¿Qué dos dimensiones forman la prioridad y qué fija cada nivel?
3. Enumera los estados de un ticket desde que se abre hasta que se cierra.
4. Diferencia escalado funcional y jerárquico con un ejemplo de cada uno.
5. Un síntoma de capa tres, ¿puede tener la causa en capa dos? Pon un caso.
6. ¿Para qué sirven las seis familias de la espina de pescado y cuáles son?
7. ¿Cuándo se deja de preguntar "por qué" en los cinco porqués?
8. Escribe la escalera de pruebas que separa una avería local de una del proveedor.
9. El ping a la puerta de enlace responde pero el rastro muere en el primer salto externo. ¿Dónde está el fallo?
10. ¿Qué mide un certificador que no mide un comprobador, y por qué importa?
11. Un enlace negocia a cien megabits con el cable íntegro. ¿Qué herramienta lo confirma?
12. ¿Qué indicador justifica sustituir un conmutador que falla cada tres semanas?
13. Impacto medio y urgencia alta: ¿qué prioridad da la matriz? ¿Y impacto bajo y urgencia alta?
14. De 120 incidencias, 42 son puestos sin dirección IP y 30 son latiguillos. ¿Qué problema abres primero y por qué?
15. En un mtr, el salto 3 pierde el 31 por ciento y los saltos 4 y 5 también. ¿Dónde empieza el problema? ¿Y si solo el salto 3 perdiera?

## Claves

1. Incidencia: interrupción o reducción no planificada del servicio. Problema: su causa. Petición: algo previsto que se pide.
2. Impacto y urgencia. Cada nivel fija tiempos de respuesta y resolución; el más alto activa aviso inmediato.
3. Abierta, en curso, pendiente, resuelta y cerrada, con reapertura si reaparece.
4. Funcional: sube a un grupo con más conocimiento. Jerárquico: sube a un mando por autoridad o presupuesto.
5. Sí: sin dirección IP por un puerto en la VLAN equivocada.
6. Ordenar hipótesis en mano de obra, método, máquina, material, medición y medio.
7. Cuando la respuesta ya no depende de la organización.
8. Dirección propia, puerta de enlace, primer salto del proveedor, DNS y destino externo.
9. En el tramo contratado; se escala con horas, direcciones y resultado de las pruebas.
10. La diafonía, la atenuación y el margen frente a la norma, que es lo que falla a más velocidad.
11. El certificador, o el contador de errores de la interfaz. Se busca un par abierto en los pares cuatro y cinco o siete y ocho.
12. El tiempo medio entre fallos y el coste acumulado de las intervenciones.
13. Impacto medio y urgencia alta da P2; impacto bajo y urgencia alta da P3.
14. El de las direcciones IP: es el 35 por ciento de los tickets, y con los latiguillos suman el 60 por ciento; eliminar la causa quita más trabajo que acelerar la resolución.
15. En el salto 3, o en el enlace hacia él, porque la pérdida se propaga. Si solo perdiera el salto 3, sería un router que limita las respuestas ICMP, no una avería.
