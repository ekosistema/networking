---
title: "Incidencias · Autoevaluación"
description: "Autoevaluación de la unidad Incidencias."
section: administracion
unit: incidencias
kind: autoevaluacion
order: 84
tags:
  - redes
  - incidencias
---

# Incidencias · Autoevaluación

> **Cómo usarlo.** Contesta sin apuntes, de diez en diez, y corrige con las claves. Lee **todas** las
> explicaciones, también las de las preguntas que acertaste: los distractores son los errores más habituales
> y lo que más enseña.

Repasa con el [resumen técnico](Incidencias_Tecnico.md) y los [casos](Incidencias_Casos.md).

## Gestión de incidencias

**1.** Una incidencia es:

- a) la causa de varios fallos
- b) una solicitud prevista del catálogo
- c) una interrupción o degradación no planificada de un servicio
- d) una modificación planificada

**2.** Un problema, en ITIL, es:

- a) un fallo puntual
- b) la causa de una o varias incidencias
- c) una petición de alta
- d) un cambio aprobado

**3.** La prioridad de una incidencia sale de:

- a) impacto y urgencia
- b) la gravedad técnica solamente
- c) quien llama más veces
- d) la hora de apertura

**4.** Con impacto medio y urgencia alta, la matriz da:

- a) P1
- b) P3
- c) P4
- d) P2

**5.** El escalado funcional:

- a) añade autoridad
- b) sustituye al registro
- c) añade conocimiento técnico: primer, segundo y tercer nivel
- d) cierra la incidencia

**6.** Se escala jerárquicamente cuando:

- a) el técnico no tiene tiempo
- b) hay riesgo de incumplir el acuerdo, un conflicto o un servicio crítico
- c) el usuario lo pide con insistencia
- d) es más difícil técnicamente

**7.** La disponibilidad se calcula como:

- a) MTBF entre (MTBF más MTTR)
- b) MTTR entre MTBF
- c) MTBF por MTTR
- d) MTBF menos MTTR

**8.** El FCR es:

- a) el tiempo medio de reparación
- b) el coste por ticket
- c) la tasa de reapertura
- d) la resolución en primer contacto

**9.** El reloj del SLA se pausa cuando la incidencia espera:

- a) al fabricante
- b) a otro equipo interno
- c) al usuario o a una ventana autorizada por el cliente
- d) a un técnico libre

**10.** El SLA, el OLA y el contrato de apoyo son, por orden, acuerdos con:

- a) proveedores, clientes y equipos
- b) el cliente, otros equipos internos y proveedores externos
- c) solo clientes
- d) solo el fabricante

**11.** Con 120 incidencias y 108 en plazo, el cumplimiento del SLA es:

- a) 90 por ciento
- b) 10 por ciento
- c) 108 por ciento
- d) 75 por ciento

**12.** ISO/IEC 20000-1:2018 es:

- a) un marco no certificable de buenas prácticas
- b) una herramienta de ticketing
- c) un protocolo de red
- d) una norma certificable de gestión de servicios


## Problemas y conocimiento

**13.** Un error conocido es:

- a) un problema resuelto
- b) una incidencia cerrada
- c) un problema diagnosticado con una solución temporal documentada
- d) una petición de servicio

**14.** El Pareto de incidencias sirve para:

- a) calcular el MTTR
- b) decidir qué problema abrir primero
- c) pausar el reloj
- d) medir la disponibilidad

**15.** Un artículo de base de conocimiento útil incluye:

- a) síntoma, causa, pasos numerados, comprobación y cuándo escalar
- b) solo el nombre del autor
- c) solo el precio
- d) una opinión

**16.** En un incidente grave, el responsable del incidente:

- a) repara personalmente
- b) no interviene
- c) cierra el ticket sin más
- d) coordina y comunica; los técnicos reparan

**17.** La revisión posterior de un incidente grave debe ser:

- a) una búsqueda del responsable
- b) opcional y secreta
- c) sin culpables, para ver causa, qué funcionó y qué se cambia
- d) solo técnica


## Método de resolución

**18.** Un buen enunciado del problema responde a:

- a) solo quién llama
- b) qué falla, a quién, desde cuándo, dónde, cuántos y si se reproduce
- c) solo el nombre del equipo
- d) solo la hora

**19.** El diagrama de Ishikawa tiene:

- a) seis familias de causas
- b) tres familias
- c) diez familias
- d) cinco preguntas

**20.** En el método de diagnóstico, antes de tocar un equipo se debe:

- a) reiniciarlo
- b) cambiarlo
- c) borrar su configuración
- d) mirar: consultar configuración, contadores o capturar

**21.** Tras una reparación, la verificación incluye:

- a) solo la prueba que falló
- b) ninguna
- c) la prueba que falló y una de no regresión
- d) solo cerrar el ticket

**22.** La magnitud económica de una incidencia se estima con:

- a) solo las horas del técnico
- b) usuarios afectados por coste hora por horas de parada
- c) el precio del equipo
- d) el número de tickets

**23.** Al abrir un caso con el fabricante conviene aportar:

- a) número de serie, versión, síntomas, registros y pruebas realizadas
- b) solo el síntoma
- c) solo la factura
- d) nada, se pide después


## Herramientas hardware

**24.** El comprobador de cableado verifica:

- a) los parámetros de norma en toda la banda
- b) la distancia exacta a una rotura
- c) la tensión PoE
- d) el mapa de pines y la continuidad

**25.** El reflectómetro (TDR) sirve para:

- a) medir la diafonía
- b) certificar la categoría
- c) localizar roturas y cortos a una distancia concreta
- d) identificar un cable entre muchos

**26.** El margen de tensión de un puerto PoE es de:

- a) 12 a 24 V
- b) 44 a 57 V
- c) 100 a 230 V
- d) 0 a 5 V

**27.** El generador y el localizador de tonos sirven para:

- a) identificar un cable sin desconectar el equivocado
- b) detectar averías
- c) certificar un enlace
- d) medir la atenuación

**28.** El certificador detecta, y el comprobador no:

- a) un cable cortado
- b) un par cruzado
- c) una conexión sin enlace
- d) un NEXT fuera de margen por destrenzado excesivo

**29.** Un TDR mide un eco de 230 ns con NVP 0,69. La distancia es de aproximadamente:

- a) 240 m
- b) 2,4 m
- c) 24 m
- d) 48 m


## Herramientas software

**30.** ping usa los mensajes ICMP:

- a) tipo 3 y tipo 11
- b) tipo 8 (petición) y tipo 0 (respuesta)
- c) tipo 5 y tipo 8
- d) tipo 11 y tipo 0

**31.** Un ping sin respuesta indica:

- a) silencio: puede ser host apagado, ruta ausente o ICMP filtrado
- b) siempre que el equipo está apagado
- c) siempre un fallo del cable
- d) que el DNS falla

**32.** Con TTL inicial 64 y TTL recibido 61, hay:

- a) 61 routers
- b) 64 routers
- c) ninguno
- d) 3 routers en el camino

**33.** Los 1 472 bytes de datos de un ping sin fragmentar se deben a que:

- a) son el máximo de Windows
- b) son el tamaño del TTL
- c) 1 472 más 8 de ICMP y 20 de IP suman 1 500, la MTU de Ethernet
- d) es un valor arbitrario

**34.** Los asteriscos en un traceroute significan:

- a) que ese salto está roto
- b) que ese salto no contesta, lo que no implica fallo
- c) que el destino no existe
- d) que hay un bucle

**35.** En un mtr, si el salto 3 pierde el 30 por ciento y los siguientes también, el problema:

- a) empieza en el salto 3 o en el enlace hacia él
- b) es del salto 1
- c) no existe
- d) es del DNS

**36.** Un estado CLOSE_WAIT en netstat indica:

- a) un saludo sin respuesta
- b) un servicio a la escucha
- c) una conexión recién abierta
- d) que el otro extremo cerró y la aplicación local no

**37.** Un filtro de captura (Berkeley) se aplica:

- a) después de guardarlos
- b) solo en Wireshark
- c) antes de guardar los paquetes
- d) nunca

**38.** Para capturar el tráfico de un puerto de un conmutador se usa:

- a) un cable cruzado
- b) puerto espejo (SPAN) o un TAP
- c) el protocolo ARP
- d) un ping largo


## Árbol de decisión

**39.** Ping a la puerta de enlace responde, el primer salto del operador y el destino no. La conclusión es:

- a) fallo del proveedor: escalar con datos
- b) fallo del cableado local
- c) fallo del DNS
- d) fallo de la VLAN

**40.** Ping por IP funciona y por nombre no. El sospechoso es:

- a) el cable
- b) el conmutador
- c) el operador
- d) el DNS

**41.** Un puesto con 169.254.x.x y enlace correcto indica:

- a) un cable cortado
- b) un fallo de DNS
- c) que no obtuvo dirección del DHCP: revisar VLAN, DHCP y relay
- d) un fallo del operador

**42.** Toda una planta cae unos 40 segundos varias veces al día, con tormentas de difusión. Lo más probable es:

- a) un fallo del DNS
- b) un bucle de nivel 2
- c) un fallo del operador
- d) una rotura del cable de un puesto

**43.** Un enlace negocia a 100 Mb/s con el cable íntegro. Lo más probable es:

- a) un par abierto en los pares 4, 5, 7 y 8, necesarios para el gigabit
- b) un fallo del DNS
- c) un fallo del switch de núcleo
- d) una configuración de VLAN


## Negocio

**44.** El coste de una incidencia de 40 puestos de 2 horas, a 25 euros por hora y técnico a 35, es de aproximadamente:

- a) 70 euros
- b) 200 euros
- c) 20 euros
- d) 2 070 euros

**45.** Una mesa de ayuda mixta suele:

- a) internalizar todo
- b) no tener niveles
- c) externalizar el primer nivel y mantener el segundo y tercero internos
- d) externalizar el conocimiento del negocio

**46.** Una base de conocimiento que resuelve 8 casos al mes y ahorra 10 minutos cada uno ahorra al año:

- a) 160 horas
- b) unas 16 horas
- c) 1,6 horas
- d) 800 horas

## Claves y explicaciones

1. **c)** La causa es un problema y la solicitud prevista, una petición de servicio.
2. **b)** Un error conocido es un problema con solución temporal.
3. **a)** La gravedad técnica describe el tamaño del fallo, no la prioridad.
4. **d)** Impacto bajo con urgencia alta daría P3.
5. **c)** El jerárquico añade autoridad o presupuesto.
6. **b)** Para lo técnicamente difícil está el escalado funcional.
7. **a)** Con MTBF 500 h y MTTR 2 h: 99,6 por ciento.
8. **d)** Es el indicador más rentable de mejorar.
9. **c)** Si espera a un proveedor, el reloj sigue.
10. **b)** Los dos últimos deben ser al menos tan exigentes como el primero.
11. **a)** 108 entre 120. Con un compromiso del 95 por ciento se incumple.
12. **d)** ITIL es el marco de buenas prácticas, no certificable para la organización.
13. **c)** La causa sigue ahí.
14. **b)** Pocas categorías explican la mayoría de los tickets.
15. **a)** Se mide por su reutilización.
16. **d)** Hay sala de crisis, canal único y registro cronológico.
17. **c)** Se documenta y se convierte en material de formación.
18. **b)** La mitad de las incidencias se resuelven al escribirlo.
19. **a)** Los cinco porqués son una sola línea de preguntas.
20. **d)** Primero mirar, después tocar, siempre con plan de reversión.
21. **c)** Un cambio que arregla el síntoma y rompe otra cosa no es una resolución.
22. **b)** 40 puestos, 25 euros/h y 2 h son 2 000 euros.
23. **a)** Sin número de serie el caso se queda parado.
24. **d)** No certifica el enlace.
25. **c)** No mide el comportamiento en frecuencia.
26. **b)** Con 36 V un teléfono se reinicia.
27. **a)** Nunca se inyectan en fibra.
28. **d)** El mapa de pines no ve la diafonía.
29. **c)** c por NVP por t entre 2.
30. **b)** El tipo 3 es destino inalcanzable y el 11, tiempo excedido.
31. **a)** Hay que seguir con otras pruebas.
32. **d)** Cada router resta 1.
33. **c)** Sirve para probar la MTU del camino.
34. **b)** El fallo está donde las respuestas dejan de aparecer y no vuelven.
35. **a)** La pérdida real se propaga.
36. **d)** Suele ser una fuga del programa.
37. **c)** El filtro de visualización se aplica después.
38. **b)** Hay que situar bien el punto de captura.
39. **a)** Si no responde ni la puerta, es fallo local.
40. **d)** Se prueba con nslookup.
41. **c)** Es la dirección de enlace local.
42. **b)** Se previene con STP y agregación de enlaces.
43. **a)** Se confirma con el certificador o el comprobador.
44. **d)** Técnico 70 más espera de 40 por 25 por 2, que son 2 000.
45. **c)** Exige coordinación entre equipos.
46. **b)** 8 por 10 por 12 son 960 minutos.

## Cómo puntuarte

| Aciertos de 46 | Lectura |
| --- | --- |
| 41 o más | Dominas el tema |
| 34 a 40 | Repasa los apartados donde fallaste y repite en dos días |
| Menos de 34 | Vuelve al conceptual y al técnico antes de seguir |
