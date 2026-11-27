---
title: "Gestión de redes · Autoevaluación"
description: "Autoevaluación de la unidad Gestión de redes."
section: administracion
unit: gestion
kind: autoevaluacion
order: 74
tags:
  - redes
  - gestion
---

# Gestión de redes · Autoevaluación

> **Cómo usarlo.** Contesta sin apuntes, de diez en diez, y corrige con las claves. Lee **todas** las
> explicaciones, también las de las preguntas que acertaste: los distractores son los errores más habituales
> y lo que más enseña.

Repasa con el [resumen técnico](Gestion_Tecnico.md) y los [casos](Gestion_Casos.md).

## Ciclo de vida y administración

**1.** Las fases del modelo PDIOO son:

- a) preparar, desplegar, inspeccionar, operar y olvidar
- b) planificar, diseñar, implantar, operar y optimizar
- c) planear, documentar, instalar, operar y archivar
- d) proyectar, comprar, montar, certificar y entregar

**2.** El programa de referencia define administración de redes como las fases:

- a) operar y optimizar
- b) planificar y diseñar
- c) diseñar e implantar
- d) solo operar

**3.** El NOC es:

- a) un tipo de cable
- b) un protocolo de gestión
- c) un servicio de DNS
- d) el centro de operaciones que supervisa y gestiona la red en continuo

**4.** La disponibilidad calculada con MTBF de 1 000 h y MTTR de 1 h es:

- a) 99 por ciento
- b) 90 por ciento
- c) 99,9 por ciento
- d) 100 por ciento

**5.** Las tres propiedades de la seguridad de la información son:

- a) velocidad, coste y alcance
- b) confidencialidad, integridad y disponibilidad
- c) autenticación, firma y cifrado
- d) rapidez, calidad y precio

**6.** El control 10.6 de la ISO 27002 del programa de referencia corresponde a:

- a) la gestión de la seguridad de las redes
- b) la seguridad física
- c) la gestión de personal
- d) la criptografía

**7.** Nessus es:

- a) un NIDS como Snort
- b) un protocolo de gestión
- c) un analizador de tráfico
- d) un escáner de vulnerabilidades, no un sistema de detección de intrusiones

**8.** Un NIDS:

- a) escanea parches de los equipos
- b) copia las configuraciones
- c) escucha el tráfico, lo compara con firmas y alerta
- d) calcula la disponibilidad

**9.** Un incidente, en ITIL, es:

- a) la causa raíz de varios fallos
- b) una interrupción o degradación del servicio que hay que restaurar
- c) un cambio planificado
- d) una auditoría


## Protocolos de gestión y SNMP

**10.** El puerto UDP en el que escucha un agente SNMP es:

- a) 161
- b) 162
- c) 514
- d) 123

**11.** Un trap SNMP es:

- a) una consulta del gestor
- b) una escritura de un valor
- c) un tipo de comunidad
- d) una notificación del agente al gestor sin confirmación

**12.** La MIB es:

- a) el protocolo de transporte
- b) la clave de cifrado
- c) el árbol de objetos gestionables de un agente
- d) el nombre de la comunidad

**13.** El OID de sysUpTime es:

- a) 1.3.6.1.2.1.1.1.0
- b) 1.3.6.1.2.1.1.3.0
- c) 1.3.6.1.2.1.2.2.1.10
- d) 1.3.6.1.4.1

**14.** GETBULK es una PDU de:

- a) SNMPv2c
- b) SNMPv1
- c) SNMPv3 solamente
- d) RMON1

**15.** SNMPv3 aporta sobre todo:

- a) nuevas PDUs
- b) un puerto distinto
- c) contadores de 64 bits
- d) autenticación y cifrado con USM y control de acceso con VACM

**16.** En SNMPv1 y v2c la comunidad:

- a) va cifrada
- b) solo viaja en el primer paquete
- c) viaja en claro en cada paquete
- d) se calcula con un hash

**17.** CMIP se diferencia de SNMP en que:

- a) es más ligero y universal
- b) pertenece a la pila OSI, es completo, pesado y se usa en operadores
- c) va sobre UDP
- d) se creó después de SNMP

**18.** Un contador de 32 bits en un enlace de 100 Mb/s se desborda en:

- a) unos 344 segundos
- b) unos 34 segundos
- c) unas 3 horas
- d) unos 34 días

**19.** Con lecturas de contador de 4 100 000 000 y 150 000 000 en 300 s, el tráfico es de:

- a) negativo
- b) 100 Mb/s
- c) 0 Mb/s
- d) 9,2 Mb/s


## RMON

**20.** RMON1 define:

- a) diez grupos de nivel 3
- b) cinco grupos
- c) nueve grupos para Ethernet
- d) un solo grupo

**21.** RMON frente a SNMP aporta:

- a) más seguridad que SNMPv3
- b) una sonda que mide en el segmento y guarda estadísticas aunque el gestor caiga
- c) sustitución del protocolo UDP
- d) menos objetos

**22.** El grupo RMON que dispara un aviso cuando salta una alarma es:

- a) Event
- b) Matrix
- c) Capture
- d) Filter

**23.** RMON2 trabaja desde:

- a) solo el nivel físico
- b) solo el nivel de enlace
- c) solo la aplicación
- d) el nivel de red hacia arriba

**24.** Una alarma RMON de 70 por ciento sobre 1 Gb/s con intervalo de 300 s requiere un umbral de:

- a) 875 000 000 bytes
- b) 70 bytes
- c) 26 250 000 000 bytes, que no cabe en un entero de 32 bits con signo
- d) 700 megabits


## Monitorización

**25.** NetFlow exporta:

- a) el estado de las interfaces
- b) registros de flujo: quién habla con quién, con qué puertos y cuántos bytes
- c) las configuraciones
- d) los parches

**26.** La monitorización activa es la que:

- a) genera consultas o pruebas hacia el equipo
- b) observa lo que ya ocurre
- c) solo usa NetFlow
- d) no consume recursos

**27.** Syslog usa por defecto:

- a) TCP 161
- b) UDP 123
- c) TCP 443
- d) UDP 514, y TLS en el 6514

**28.** La prioridad de un mensaje syslog con facility 16 y severidad 4 es:

- a) 20
- b) 164
- c) 132
- d) 16

**29.** Para ordenar eventos de varios equipos hace falta:

- a) más ancho de banda
- b) una hora común, con NTP
- c) SNMPv3
- d) RMON2

**30.** Una buena práctica de sondeo es:

- a) sondear con más frecuencia solo lo crítico y escalonar las consultas
- b) sondear todo cada 10 segundos
- c) no sondear nunca
- d) sondear solo por la noche

**31.** El tiempo sysUpTime se mide en:

- a) segundos y no se desborda
- b) minutos
- c) milisegundos
- d) centésimas de segundo y se desborda a los 497 días


## Rendimiento y perfiles

**32.** Un enlace se dimensiona por:

- a) la media
- b) el mínimo
- c) la punta (percentil 95) con margen, no por la media
- d) el número de usuarios

**33.** Un perfil de tráfico describe:

- a) la configuración de un switch
- b) cómo varía la carga por hora, día y estación
- c) el inventario
- d) las rutas

**34.** La mejor hora para una ventana de mantenimiento es:

- a) la de menor tráfico en el perfil
- b) la de mayor tráfico
- c) la hora de comer
- d) cualquiera

**35.** Un martes a las 03:00 hay 38 Mb/s y el perfil de esa hora es de 3 Mb/s. Lo primero es:

- a) ignorarlo
- b) reiniciar el router
- c) ampliar el enlace
- d) mirar NetFlow para ver quién habla con quién

**36.** El crecimiento del 10 por ciento mensual es:

- a) lineal
- b) constante
- c) geométrico: cada mes se multiplica por 1,1
- d) decreciente

**37.** Con crecimiento mensual del 10 por ciento, la duplicación de la carga ocurre en aproximadamente:

- a) 10 meses
- b) 7 meses (regla del 70)
- c) 1 mes
- d) 70 meses

**38.** El retardo unidireccional recomendado para la voz es de hasta:

- a) 150 ms
- b) 15 ms
- c) 1,5 s
- d) 1 ms


## Mantenimiento y empresa

**39.** Una ventana de mantenimiento debe incluir:

- a) solo la hora
- b) solo el responsable
- c) nada por escrito
- d) alcance, horario, responsable, plan de reversión, comunicación y criterio de éxito

**40.** Antes de actualizar el firmware de un equipo en producción:

- a) se actualiza todo a la vez
- b) se reinicia sin avisar
- c) se copia la configuración y la imagen actual y se programa la ventana
- d) se borra el historial

**41.** Una auditoría del mantenimiento comprueba:

- a) que el auditor propone soluciones
- b) con evidencias, que el calendario se cumplió, que las copias se restauran y que los cambios se aprobaron
- c) solo la satisfacción del cliente
- d) la marca de los equipos

**42.** Un SAI con baterías de 5,5 años cuando el fabricante indica 4 es:

- a) una no conformidad mayor por riesgo de parada
- b) una observación sin importancia
- c) un punto fuerte
- d) un cumplimiento

**43.** Cubrir un puesto de guardia 24 por 7 con 1 700 horas productivas por persona exige:

- a) 1 persona
- b) 2 personas
- c) 20 personas
- d) de 5 a 6 personas

**44.** En herramientas de monitorización, la diferencia útil entre abiertas y comerciales es:

- a) el color de la interfaz
- b) que las abiertas no funcionan
- c) el coste total (licencias, tiempo y soporte), no solo el precio de licencia
- d) que las comerciales no usan SNMP

**45.** En una licencia por sensor, para controlar el coste conviene:

- a) monitorizar todos los parámetros
- b) decidir qué se monitoriza y no medir todo por si acaso
- c) no monitorizar
- d) usar solo ping

## Claves y explicaciones

1. **b)** Cisco añade Prepare al inicio: PPDIOO.
2. **a)** Sin datos de operación no hay optimización.
3. **d)** Se organiza en niveles N1, N2 y N3.
4. **c)** 1 000 entre 1 001.
5. **b)** Gestionar la seguridad es equilibrarlas.
6. **a)** Hoy equivale a los controles 8.20 y 8.21 de la edición de 2022.
7. **d)** Snort y Suricata son NIDS.
8. **c)** Un NIPS bloquea.
9. **b)** La causa raíz es un problema; el cambio, una petición planificada.
10. **a)** El 162 es el de los traps.
11. **d)** El inform sí se confirma.
12. **c)** Cada objeto tiene un OID, un tipo y un permiso.
13. **b)** sysDescr es .1.1.0 y 1.3.6.1.4.1 es la rama de empresas.
14. **a)** Devuelve varios objetos por petición.
15. **d)** No añade PDUs: cambia la envoltura.
16. **c)** Por eso se migra a v3 con authPriv.
17. **b)** Perdió por su peso y su coste.
18. **a)** 4 294 967 296 por 8 entre 100 000 000.
19. **d)** Hubo desbordamiento: (2^32 menos 4,1 mil millones) más 150 millones.
20. **c)** El décimo, de Token Ring, lo añade el RFC 1513.
21. **b)** SNMP no guarda historia y escala mal.
22. **a)** El grupo Alarm define los umbrales.
23. **d)** RMON1 llega a los niveles 1 y 2.
24. **c)** Con un intervalo de 10 s sí cabe: 875 000 000 bytes.
25. **b)** IPFIX es el estándar derivado de la v9.
26. **a)** La pasiva observa flujos, traps, capturas y logs.
27. **d)** Son ocho severidades, de 0 a 7.
28. **c)** 16 por 8 más 4.
29. **b)** Un log sin hora fiable no ordena causas.
30. **a)** Cada consulta gasta CPU del equipo.
31. **d)** Un valor bajo indica reinicio.
32. **c)** La media esconde los momentos de saturación.
33. **b)** Se construye con semanas de datos agrupados por hora.
34. **a)** Se elige con el perfil, no por costumbre.
35. **d)** Puede ser una copia mal programada o un equipo infectado.
36. **c)** El lineal sumaría una cantidad fija.
37. **b)** 70 entre la tasa.
38. **a)** Jitter bajo 30 ms y pérdida bajo el 1 por ciento.
39. **d)** Una ventana sin reversión es una apuesta.
40. **c)** Y se actualiza equipo a equipo.
41. **b)** Contrasta evidencias con criterios.
42. **a)** Se sustituyen ya y se controlan las fechas.
43. **d)** 8 760 entre 1 700 son 5,15.
44. **c)** Lo abierto exige tiempo; lo comercial cobra por sensor o equipo.
45. **b)** Con 200 equipos y 5 sensores por equipo son 1 000 sensores.

## Cómo puntuarte

| Aciertos de 45 | Lectura |
| --- | --- |
| 40 o más | Dominas el tema |
| 34 a 39 | Repasa los apartados donde fallaste y repite en dos días |
| Menos de 34 | Vuelve al conceptual y al técnico antes de seguir |
