---
title: "Desarrollo del proyecto de la red telemática"
description: "Resumen conceptual de la unidad Proyecto de red."
section: diseno
unit: proyecto
kind: conceptual
order: 21
tags:
  - redes
  - proyecto
  - conceptual
---

# Desarrollo del proyecto de la red telemática

> **En una frase.** Diseñar una red es decidir, con números y con norma, qué medio, qué equipo y qué topología resuelven un problema concreto al menor coste total, y dejarlo escrito para que otro pueda construirlo sin llamarte.

## Por qué existe este tema

Cuando una empresa de cien personas renueva su red no le falta cable: le falta una decisión fundada. Llegan tres instaladores, cada uno defiende lo suyo y el cliente no puede juzgar, porque ninguno ha escrito qué problema resolvía. Uno propone fibra hasta el puesto, otro categoría 5e y un tercero Wi-Fi para todo. Los tres pueden tener razón o no.

Un proyecto telemático existe porque la red es una inversión de diez a quince años, cuesta más en mano de obra que en material y condiciona el trabajo diario de toda la plantilla. Cuando el cableado va mal no falla una vez: falla todos los días, en forma de transferencias lentas o de teléfono que se entrecorta. Y corregirlo después implica obra, techos y gente sin trabajar. El proyecto es el momento en que se negocia, se mide y se documenta; todo lo demás de la unidad son los argumentos disponibles para decidir.

## El mapa

```text
  NECESIDAD                    ARGUMENTOS                   ENTREGA
+-------------+   +----------------------------------+   +------------+
| entrevista  |   | conmutacion y topologia          |   | requisitos |
| con cliente |-->| LAN, MAC y LLC, IEEE 802         |-->| propuesta  |
+-------------+   | cableado y CEM                   |   | Gantt      |
                  | herramientas de simulacion       |   | presupuesto|
                  +----------------------------------+   +------------+
                            |                                  |
                            v                                  v
                  decision: medio, equipo,           documento que otro
                  direccionamiento, respaldo          puede ejecutar
```

## Los conceptos, uno a uno

### 1. Conmutar circuitos o conmutar paquetes

**La intuición.** Reservar mesa es conmutación de circuitos: te la guardan de ocho a once y, aunque llegues tarde, no se le da a nadie. La barra libre es conmutación de paquetes: pides, te sirven cuando hay hueco y si está lleno, esperas. Para una cena con conversación, la mesa; para servir a doscientos clientes, la barra.

**Lo formal.** En circuitos se reservan recursos antes de transmitir (establecimiento, transferencia, liberación) y el caudal es constante. En paquetes el mensaje se trocea, cada paquete lleva su destino y comparte enlace mediante multiplexación estadística. Se gana eficiencia y se pierde regularidad: el retardo variable o jitter es lo que la voz no tolera.

**Un ejemplo.** Veinte empleados con un enlace de dos megabits. Con circuitos, cada llamada reserva sesenta y cuatro kilobits aunque nadie hable: veinte llamadas se comen un megabit y cuarto sin transmitir nada útil. Con paquetes solo viajan las muestras de quienes hablan a la vez y el enlace admite además correo. El precio es priorizar la voz, y eso se llama QoS.

### 2. ATM y Frame Relay: el circuito virtual

**La intuición.** Es el carril reservado de una autopista, pero solo en los tramos donde lo necesitas: no reservas la calzada entera, dejas un identificador en cada cruce para que el operador sepa por dónde va tu tráfico.

**Lo formal.** Los dos son conmutación de paquetes con circuitos virtuales: un identificador corto, con significado local en cada enlace, fija el camino. En ATM es el par VPI/VCI y la unidad es una celda fija de cincuenta y tres bytes, cinco de cabecera y cuarenta y ocho de carga. En Frame Relay es el DLCI, la trama es variable y el caudal se contrata con un CIR.

**Un ejemplo.** Un banco contrata un PVC de un megabit con CIR de doscientos cincuenta y seis kilobits: la operadora garantiza ese caudal de forma sostenida y admite ráfagas marcadas como descartables si hay congestión. Paga por caudal garantizado, no por tiempo, y sus sucursales se ven como si tuvieran un cable propio.

### 3. La topología compartida y la estrella conmutada

**La intuición.** Una sala con un solo micrófono es un bus: habla uno, escuchan todos, y si dos empiezan a la vez nadie entiende nada. Un edificio con un teléfono por mesa y una centralita es una estrella: cada uno tiene su par hasta el centro y las conversaciones no se pisan.

**Lo formal.** En difusión todos comparten el medio y hace falta una regla de turno (CSMA/CD, paso de testigo). En estrella cada nodo tiene enlace dedicado con el central, que reenvía solo al destino. Si el central es un hub, repite hacia todos y la lógica sigue siendo de difusión; si es un switch, aprende direcciones y crea un dominio de colisión por puerto.

**Un ejemplo.** Diez equipos a diez megabits en un hub comparten esos diez: cada uno obtiene un megabit de media y menos con colisiones. Los mismos diez en un switch permiten diez conversaciones a la vez. El cable es idéntico; cambia el central y con él la topología lógica.

### 4. Los dos subniveles: MAC y LLC

**La intuición.** Un servicio de mensajería separa la moto y el repartidor, que conocen las calles, del departamento que decide si un envío lleva firma o acuse. Si cambian las motos, el papeleo sigue igual.

**Lo formal.** La familia IEEE 802 dividió el enlace en dos. El subnivel MAC resuelve la dirección física de cuarenta y ocho bits, el formato de trama y el acceso al medio, y es propio de cada tecnología. El subnivel LLC (norma 802.2) ofrece al nivel de red un interfaz común, independiente del medio, y multiplexa por puntos de acceso al servicio.

**Un ejemplo.** Un mismo paquete IP sale por cobre, por fibra o por radio: cambia la trama y cambia la dirección física, y el nivel de red no se entera. Por eso IP sobrevive a cualquier tecnología de enlace, y por eso Ethernet ganó la guerra del nivel de enlace aunque perdiera la del nivel de red.

### 5. Los noventa metros

**La intuición.** Una manguera larga pierde presión: si el grifo llena un cubo a diez metros, a doscientos no llena nada. El cable se comporta igual, y se come más señal cuanto más alta es la frecuencia.

**Lo formal.** La atenuación se mide en decibelios por unidad de longitud y crece con la frecuencia: en categoría 5e, a cien megahercios, la pérdida del canal ronda los veinte a veinticuatro decibelios en cien metros. Se suman el retardo, unos cinco nanosegundos por metro, y la diafonía, que empeora con la longitud porque la señal útil se debilita y el ruido del par vecino no.

**Un ejemplo.** En cien metros la señal tarda unos quinientos nanosegundos. A diez megabits el tiempo de ranura es de cincuenta y un microsegundos y la red podía medir kilómetros. A cien megabits la trama dura diez veces menos, el margen se estrecha y la norma fija cien metros y ningún repetidor. Los noventa metros del enlace permanente son el reparto de ese presupuesto de pérdidas, y también la longitud que cubre una planta desde un armario centrado.

### 6. El proyecto como argumento

**La intuición.** Un buen presupuesto de obra no dice veinte sacos de cemento: dice por qué veinte y qué pasa si se ponen diez. El proyecto de red es eso, no la lista de la compra sino su justificación.

**Lo formal.** Se parte de una entrevista que produce requisitos medibles; sigue un estudio de viabilidad técnica y económica con dos alternativas y plazo de retorno; continúa la propuesta (medio, equipos, direccionamiento, cableado, seguridad) y termina en un plan de tareas con dependencias y calendario. La forma la fija la norma UNE 157001:2014.

**Un ejemplo.** El cliente pide que la red vaya más rápida. Traducido: cien megabytes por segundo sostenidos contra el servidor, menos de un milisegundo de latencia y armario a menos de noventa metros. Con eso se descarta el Wi-Fi como enlace principal, se elige categoría 6A y el precio se defiende con un número, no con una opinión.

## Las confusiones que cuestan puntos

**Física frente a lógica.** La física es el cable; la lógica, por dónde circula la trama. Un hub dibuja estrella y funciona como bus.

**Colisión frente a difusión.** La colisión la rompe el switch; la difusión solo la corta el router o la VLAN.

**Circuitos frente a paquetes.** La primera reserva y garantiza; la segunda comparte y gana eficiencia. La voz no exige circuitos, exige QoS.

**ATM frente a Frame Relay.** ATM usa celdas fijas de cincuenta y tres bytes; Frame Relay, tramas variables sin retransmisión.

**Categoría frente a clase.** La categoría califica el componente; la clase, el enlace montado. Un cable de 6A mal instalado no da clase EA.

**Switch frente a router.** El switch decide por MAC dentro de la misma red; el router, por IP entre redes distintas.

## Tres ideas que completan el cuadro

**El médico antes del tratamiento.** Nadie opera sin diagnóstico, y una red tampoco. El informe de diagnóstico separa el síntoma (la gente dice que va lenta) de la causa (una sola red con seiscientos equipos y difusión por todas partes). Si el proyecto salta ese paso, resuelve el problema que el cliente cree tener y no el que tiene. Por eso se entrevista, se inventaría, se mide durante una semana y solo entonces se propone.

**El dinero de hoy y el de mañana.** Mil euros hoy valen más que mil euros dentro de cinco años, porque hoy se pueden invertir. El valor actual neto trae los ahorros futuros a hoy con una tasa de descuento, y si sale positivo el proyecto compensa. La tasa interna de retorno es la rentabilidad que el proyecto ofrece, y se compara con lo mínimo que exige quien paga. El plazo de recuperación es el más fácil de entender y el más incompleto: no sabe qué pasa después.

**Operar es la mitad del proyecto.** Una red entregada sin plan de explotación empieza a deteriorarse el primer día: nadie sabe cuándo renovar, qué vigilar ni cómo restaurar. Las copias siguen la regla del tres, dos, uno: tres copias, en dos soportes distintos, una fuera de la sede. Y se miden con dos relojes: cuántos datos aceptas perder y cuánto tiempo aceptas estar parado. Una copia que nunca se ha restaurado no es una copia, es una esperanza.

## Conexiones

De [Mercado de comunicaciones](../01_Mercado_Comunicaciones/README.md) llegan los medios y los protocolos: aquí ya no se estudian, se eligen y se justifican con precio y distancia. De [Documentación técnica](../03_Documentacion_Tecnica/README.md) llega la forma del documento: pliego, planos y presupuesto. Hacia delante, [Planificación de proyectos](../../02_Implantacion/01_Planificacion_Proyectos/README.md) convierte el plan de acción en gestión de plazos y riesgos, y [Ejecución de proyectos](../../02_Implantacion/02_Ejecucion_Proyectos/README.md) lo ejecuta en obra. En [Gestión de redes](../../03_Administracion/02_Gestion_Redes/README.md) volverás a las VLAN que aquí solo diseñas.

## Autoevaluación

1. Explica con un ejemplo económico por qué los paquetes desplazaron a los circuitos en las redes de datos.
2. ¿Qué dos problemas introduce la multiplexación estadística y con qué se mitigan?
3. ¿Cuántos bytes de carga útil lleva una celda ATM y por qué el tamaño fijo ayuda a la voz?
4. ¿Qué significa contratar un CIR de doscientos cincuenta y seis kilobits en un PVC?
5. Un switch de veinticuatro puertos, ¿cuántos dominios de colisión y de difusión crea?
6. ¿Por qué un hub y un switch con el mismo cable producen topologías lógicas distintas?
7. ¿Qué resuelve el subnivel LLC que no resuelve el MAC?
8. Cita tres normas IEEE 802 y di en una línea qué regula cada una.
9. Explica el origen físico de los noventa metros, con atenuación y retardo.
10. Enumera los seis subsistemas de cableado de menor a mayor proximidad al puesto.
11. Un cliente pide que la red no se caiga nunca: redacta dos requisitos medibles y su decisión de diseño.
12. ¿Qué diferencia hay entre simular con Packet Tracer y emular con GNS3?
13. ¿Por qué el informe de diagnóstico no propone todavía la solución?
14. Una inversión de doce mil euros ahorra cuatro mil al año durante cinco años. ¿Cuál es el plazo de recuperación y por qué no basta para decidir?
15. Define RPO y RTO con un ejemplo de una oficina que pierde su servidor de ficheros.

## Claves

1. Porque el tráfico de datos es a ráfagas: reservar un canal para quien transmite el diez por ciento del tiempo multiplica el coste.
2. Retardo variable y pérdida por desbordamiento de colas; se mitigan con QoS: clasificación, prioridad y encolado.
3. Cuarenta y ocho bytes. La celda fija permite conmutar en hardware con retardo constante y predecible.
4. Que la operadora cursa ese caudal de forma sostenida y admite ráfagas marcadas como descartables.
5. Veinticuatro de colisión y uno de difusión, salvo que haya VLAN configuradas.
6. Porque el hub repite hacia todos los puertos y el switch reenvía solo al destino tras aprender las MAC.
7. La independencia del medio: el nivel de red no depende de si el enlace es cobre, fibra o radio.
8. 802.3 regula Ethernet; 802.11 las redes inalámbricas; 802.1Q el etiquetado de VLAN; 802.1X el acceso al puerto.
9. La atenuación crece con la frecuencia y la longitud, la diafonía empeora al debilitarse la señal y el retardo consume el tiempo de ranura.
10. Puesto, horizontal, armario, vertical, distribución de campus y entrada de servicios.
11. Menos de una hora de parada al año con redundancia de enlace y alimentación; recuperación en cuatro horas con repuestos y documentación.
12. Packet Tracer simula con modelos simplificados; GNS3 emula imágenes reales y sirve para validar lo que se va a instalar.
13. Porque su trabajo es separar síntomas de causas y priorizar; la solución depende de requisitos y presupuesto que el diagnóstico solo informa.
14. Tres años, doce mil entre cuatro mil. No basta porque no descuenta el valor del dinero en el tiempo ni mira lo que ocurre después de recuperar; se completa con VAN y TIR.
15. RPO: cuántos datos se aceptan perder, por ejemplo veinticuatro horas si hay copia nocturna. RTO: cuánto se acepta estar parado, por ejemplo cuatro horas hasta restaurar y volver a trabajar.
