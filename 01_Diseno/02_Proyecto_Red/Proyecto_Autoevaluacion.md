---
title: "Proyecto de red · Autoevaluación"
description: "Autoevaluación de la unidad Proyecto de red."
section: diseno
unit: proyecto
kind: autoevaluacion
order: 24
tags:
  - redes
  - proyecto
---

# Proyecto de red · Autoevaluación

> **Cómo usarlo.** Contesta sin apuntes, de diez en diez, y corrige con las claves. Lee **todas** las
> explicaciones, también las de las preguntas que acertaste: los distractores son los errores más habituales
> y lo que más enseña.

Las preguntas con cálculo se resuelven con el [resumen técnico](Proyecto_Tecnico.md) y los
[casos](Proyecto_Casos.md).

## Conmutación y WAN

**1.** En la conmutación de circuitos, durante la transferencia:

- a) los paquetes eligen ruta de forma independiente
- b) el circuito es de uso exclusivo y el retardo es casi constante
- c) el ancho de banda se comparte de forma estadística
- d) no hay fase de establecimiento

**2.** En el modelo de datagramas, cada paquete:

- a) lleva solo un identificador local corto
- b) sigue siempre el mismo circuito virtual
- c) lleva la dirección completa de destino y cada router decide su ruta
- d) se reserva un ancho de banda fijo

**3.** La QoS en una red de paquetes:

- a) aumenta el ancho de banda del enlace
- b) elimina el retardo
- c) sustituye al cortafuegos
- d) decide a qué tráfico se atiende antes cuando hay congestión

**4.** Una celda ATM mide:

- a) 53 bytes: 5 de cabecera y 48 de datos
- b) 64 bytes: 14 de cabecera y 50 de datos
- c) 1 518 bytes con longitud variable
- d) 128 bytes fijos

**5.** ¿Qué clase de servicio ATM garantiza caudal fijo, apropiada para voz sin comprimir?

- a) UBR
- b) CBR
- c) ABR
- d) VBR-nrt

**6.** En Frame Relay, el DLCI es:

- a) la dirección IP del destino
- b) el caudal garantizado
- c) el identificador de 10 bits de la conexión, de significado local
- d) el bit de descarte

**7.** El bit DE de Frame Relay marca:

- a) las tramas urgentes
- b) el final del circuito
- c) el cifrado de la trama
- d) las tramas descartables en caso de congestión

**8.** Frame Relay, ante una trama con errores:

- a) la descarta y deja la recuperación a las capas superiores
- b) la retransmite en cada salto
- c) la corrige con FEC
- d) la reenvía por otro circuito


## LAN y normas IEEE

**9.** Un switch de 24 puertos, sin VLAN, crea:

- a) 1 dominio de colisión y 24 de difusión
- b) 24 dominios de colisión y 1 de difusión
- c) 24 dominios de cada tipo
- d) 1 dominio de cada tipo

**10.** Un hub, a diferencia de un switch, produce:

- a) un dominio de colisión por puerto
- b) VLAN automáticas
- c) un único dominio de colisión y topología lógica en bus
- d) reenvío por dirección MAC

**11.** El subnivel LLC del IEEE 802.2 aporta:

- a) acceso al medio por colisión
- b) el CRC de la trama
- c) la dirección IP
- d) independencia del medio frente al nivel de red

**12.** ¿Cuántas VLAN utilizables permite el identificador de 12 bits de 802.1Q?

- a) 4094
- b) 4096
- c) 1024
- d) 255

**13.** La norma IEEE que controla el acceso a un puerto por identidad, con servidor RADIUS, es:

- a) 802.3
- b) 802.1X
- c) 802.11
- d) 802.2

**14.** El tiempo de ranura de Ethernet a 10 Mb/s es de:

- a) 64 tiempos de bit
- b) 1 518 tiempos de bit
- c) 512 tiempos de bit, 51,2 microsegundos
- d) 5,12 microsegundos

**15.** ¿Cuándo deja de actuar el CSMA/CD en Ethernet?

- a) Con cualquier medio de fibra
- b) Solo en gigabit
- c) Nunca deja de actuar
- d) En enlaces full duplex con conmutador

**16.** Un dominio IP es:

- a) el conjunto de equipos de una misma subred
- b) el equipo que reparte las IP
- c) el conjunto de equipos que comparten un cable
- d) el rango de puertos de un servidor


## Cableado estructurado

**17.** El enlace permanente de cobre mide como máximo:

- a) 100 m
- b) 90 m
- c) 55 m
- d) 30 m

**18.** La clase EA se corresponde con la categoría:

- a) Cat 5e
- b) Cat 6
- c) Cat 6A
- d) Cat 7

**19.** Un cable de categoría 6A, ¿garantiza 10 Gb/s a 100 m?

- a) Sí, siempre
- b) Solo con conectores de fibra
- c) Solo con apantallamiento
- d) No: el enlace debe certificarse como clase EA

**20.** El subsistema que va del panel de parcheo a la toma de usuario es el:

- a) horizontal
- b) vertical
- c) de campus
- d) de entrada de servicios

**21.** Entre el cableado de datos y el de potencia de 230 V se aplica como regla de obra:

- a) pasarlos juntos para ahorrar
- b) separar las canalizaciones, unos 30 cm, y cruzar a 90 grados
- c) separarlos solo en el techo
- d) apantallar solo un extremo

**22.** La normativa vigente de ICT que sustituye al RD 401/2003 es:

- a) el Real Decreto 1531/2011
- b) la norma UNE 157001:2014
- c) el Real Decreto 346/2011, con la Orden ITC/1644/2011
- d) la ISO/IEC 11801

**23.** El estándar 802.3bt tipo 4 entrega en el puerto hasta:

- a) 15,4 W
- b) 30 W
- c) 60 W
- d) 90 W


## El proyecto telemático

**24.** La norma que ordena el proyecto técnico en índice, memoria, anexos, planos, pliego, mediciones y presupuesto es:

- a) UNE 157001:2014
- b) UNE-EN 50173-1
- c) ISO/IEC 7498-1
- d) UNE-EN 50346

**25.** En una entrevista semiestructurada:

- a) solo se hacen preguntas cerradas
- b) se lleva un guion pero se deja libertad para profundizar
- c) no se prepara nada
- d) se entrevista a todos juntos

**26.** Un requisito bien formulado es:

- a) general y ambicioso
- b) sin criterio de aceptación
- c) medible, singular y verificable
- d) una lista de deseos

**27.** El informe de diagnóstico:

- a) elige las marcas de equipos
- b) sustituye a la propuesta técnica
- c) solo lista el inventario
- d) separa síntomas de causas y prioriza acciones

**28.** Un proyecto con VAN positivo y TIR mayor que la tasa de descuento es:

- a) rentable
- b) inviable
- c) equivalente a no hacer nada
- d) solo viable si el payback es de un año

**29.** El plazo de recuperación (payback) de 12 000 euros con 4 000 al año es:

- a) 5 años
- b) 3 años
- c) 1 año
- d) 48 000 años

**30.** Con ahorros de 4 000 euros al año durante 5 años, la inversión de 12 000 euros y tasa del 8 por ciento, el VAN es aproximadamente:

- a) 8 000 euros
- b) 0 euros
- c) 3 971 euros
- d) -12 000 euros

**31.** El inventario de una red existente debe incluir, al menos:

- a) solo el precio de compra
- b) solo las contraseñas
- c) solo los planos
- d) tipo y modelo, ubicación, versión, direcciones, garantía y responsable


## Plan de acción

**32.** La regla 3-2-1 de copias de seguridad pide:

- a) 3 copias, en 2 soportes, 1 de ellas fuera de la sede
- b) 3 discos, 2 servidores, 1 usuario
- c) 2 copias en el mismo armario
- d) 1 copia diaria, 2 semanal, 3 mensual

**33.** El RPO es:

- a) cuánto tiempo se acepta estar parado
- b) cuántos datos se aceptan perder
- c) el coste de la copia
- d) el número de copias

**34.** Una copia de seguridad que nunca se ha restaurado:

- a) es válida si el programa no da errores
- b) es la más segura
- c) no se puede considerar fiable
- d) equivale a una copia replicada

**35.** El plan de explotación define:

- a) el plano de las canalizaciones
- b) la tarifa del operador
- c) las normas de cableado
- d) cómo se opera, mantiene y renueva la red tras la entrega


## Servicios finales

**36.** Una llamada con G.711, con la cabecera de Ethernet, consume aproximadamente:

- a) 87,2 kb/s
- b) 64 kb/s exactos
- c) 1 Mb/s
- d) 8 kb/s

**37.** El marcado DSCP habitual para la voz es:

- a) CS3 (24)
- b) EF (46)
- c) AF41 (34)
- d) 0

**38.** El retardo unidireccional recomendado para una buena calidad de voz (UIT-T G.114) es de hasta:

- a) 15 ms
- b) 1,5 s
- c) 150 ms
- d) 500 ms

**39.** Una cámara IP de 4 Mb/s graba al día aproximadamente:

- a) 4 GB
- b) 432 MB
- c) 4,3 TB
- d) 43,2 GB


## Empresa y herramientas

**40.** La exposición de un riesgo se calcula como:

- a) probabilidad por impacto
- b) probabilidad más impacto
- c) impacto entre probabilidad
- d) el coste de la solución

**41.** Para validar con imágenes reales de sistemas de red lo que se va a instalar conviene usar:

- a) Packet Tracer
- b) GNS3 o EVE-NG
- c) una hoja de cálculo
- d) ns-3

**42.** Dos kilovatios de equipos en una sala de servidores exigen:

- a) unos 200 W
- b) ninguna si hay SAI
- c) unos 2 kW de refrigeración
- d) 20 kW

**43.** Los pagos de una obra de cableado conviene ligarlos a entregables porque:

- a) reduce el IVA
- b) evita tener contrato
- c) elimina la garantía
- d) el último pago condicionado a planos y certificados asegura su entrega

## Claves y explicaciones

1. **b)** Se reserva el camino antes de hablar, con tres fases: establecimiento, transferencia y liberación.
2. **c)** Es el modelo de IP. El identificador local corto es del circuito virtual (ATM, Frame Relay, MPLS).
3. **d)** No crea capacidad: clasifica, marca y encola por clases.
4. **a)** Su tamaño fijo permite conmutar en hardware con retardo constante.
5. **b)** UBR no garantiza nada, ABR garantiza un mínimo y aprovecha huecos.
6. **c)** El CIR es el caudal garantizado y el bit DE marca lo descartable.
7. **d)** Lo que excede del CIR se marca DE y se descarta primero.
8. **a)** Por eso tiene poco retardo: confía en la fiabilidad de las líneas de fibra.
9. **b)** El switch rompe la colisión por puerto; la difusión solo la rompe un router o una VLAN.
10. **c)** El hub repite hacia todos los puertos.
11. **d)** El MAC gestiona la dirección de 48 bits, el acceso y el FCS.
12. **a)** Hay 4096 valores, pero 0 y 4095 están reservados.
13. **b)** 802.3 es Ethernet, 802.11 las redes inalámbricas y 802.2 el subnivel LLC.
14. **c)** Es el mínimo para detectar una colisión mientras se transmite.
15. **d)** Sin medio compartido no hay colisiones.
16. **a)** Casi siempre coincide con un dominio de difusión o VLAN.
17. **b)** El canal son 100 m, incluidos 10 m de latiguillos.
18. **c)** La categoría califica los componentes y la clase el enlace montado.
19. **d)** Un buen cable mal instalado no da la clase.
20. **a)** El vertical une los armarios entre plantas y el de campus, los edificios.
21. **b)** Reduce el acoplamiento por interferencia electromagnética.
22. **c)** El programa de referencia cita aún la norma antigua; En la documentación puede aparecer.
23. **d)** Tipo 3 son 60 W, at son 30 W y af son 15,4 W.
24. **a)** La 50346 es de ensayo del cableado instalado.
25. **b)** Es la modalidad más útil para sacar requisitos.
26. **c)** La red debe ser rápida no vale; cien megabytes por segundo sostenidos, sí.
27. **d)** La solución concreta es la propuesta técnica.
28. **a)** El VAN trae los flujos futuros a hoy con la tasa exigida.
29. **b)** 12 000 entre 4 000. No descuenta el tiempo ni mira lo posterior.
30. **c)** 4 000 x 3,993 = 15 971; menos 12 000 son 3 971.
31. **d)** Es un registro vivo con una fila por activo.
32. **a)** Una copia en el propio equipo no protege de un incendio ni de un robo.
33. **b)** El RTO es el tiempo de recuperación.
34. **c)** Hay que probar la restauración de forma periódica.
35. **d)** Incluye monitorización, mantenimiento, cambios, informes y formación.
36. **a)** 218 bytes cada 20 ms: 218 x 8 / 0,02 son 87 200 bits por segundo.
37. **b)** CS3 es señalización y AF41 videoconferencia interactiva.
38. **c)** Más variación del retardo y pérdida deben mantenerse bajos.
39. **d)** 4 000 000 x 86 400 / 8 son 43,2 gigabytes.
40. **a)** Se ordena para empezar por la más alta.
41. **b)** Packet Tracer simula con modelos simplificados.
42. **c)** Toda la potencia eléctrica consumida acaba en calor.
43. **d)** Es la forma más barata de garantizar la documentación.

## Cómo puntuarte

| Aciertos de 43 | Lectura |
| --- | --- |
| 39 o más | Dominas el tema |
| 32 a 38 | Repasa los apartados donde fallaste y repite en dos días |
| Menos de 32 | Vuelve al conceptual y al técnico antes de seguir |
