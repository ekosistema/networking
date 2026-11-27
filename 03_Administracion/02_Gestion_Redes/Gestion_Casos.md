---
title: "Gestión de redes · Casos prácticos resueltos"
description: "Casos prácticos resueltos de la unidad Gestión de redes."
section: administracion
unit: gestion
kind: casos
order: 73
tags:
  - redes
  - gestion
  - casos
  - snmp
  - monitorizacion
---

# Gestión de redes · Casos prácticos resueltos

> **Cómo usar esto.** Cada caso trae enunciado, solución y una rúbrica de diez puntos para autoevaluarte.
> Resuélvelo primero sin mirar la solución y puntúate. Lo que más enseña es **justificar** cada decisión:
> una respuesta correcta sin razón sirve de poco en un trabajo real.

Los seis casos recorren los temas de la unidad: protocolos de gestión y
SNMP, RMON, perfiles de tráfico y análisis, tendencia y
capacidad, mantenimiento, calendario y auditoría y planificación de la
monitorización y su coste.

## Caso 1. SNMP: contadores, desbordamiento y utilización

**Enunciado.** Se sondea una interfaz de 100 Mb/s (ifSpeed 100 000 000) cada 300 segundos. En la
primera lectura, `ifInOctets` vale 4 100 000 000; en la segunda, 150 000 000.

**Se pide.**

1. Calcular el tráfico y la utilización en el intervalo.
2. Explicar por qué el valor ha bajado y en cuánto tiempo se desborda un contador de 32 bits en este
   enlace.
3. Escribir las órdenes para leer el estado, el contador de 64 bits y el recorrido de la tabla de
   interfaces.
4. Indicar qué cambiaría con SNMPv3 y por qué conviene.

**Solución.**

```text
1. El contador de 32 bits llega a 4 294 967 296 y vuelve a cero. Hubo un desbordamiento:
   incremento = (4 294 967 296 - 4 100 000 000) + 150 000 000 = 344 967 296 bytes
   tráfico = 344 967 296 x 8 / 300 = 9,2 Mb/s
   utilización = 9,2 / 100 = 9,2 por ciento

2. Un contador de 32 bits se llena en 4 294 967 296 x 8 / 100 000 000 = 343,6 segundos (menos
   de 6 minutos) en un enlace de 100 Mb/s. Con sondeo de 300 s hay riesgo de perder dos vueltas
   si el enlace está lleno. Solución: contadores de 64 bits (ifHCInOctets).
```

```bash
# 3. Estado, contador de 64 bits y tabla de interfaces
snmpget  -v2c -c LecturaNOC 192.168.10.2 1.3.6.1.2.1.1.3.0
snmpget  -v2c -c LecturaNOC 192.168.10.2 1.3.6.1.2.1.31.1.1.1.6.24
snmpwalk -v2c -c LecturaNOC 192.168.10.2 1.3.6.1.2.1.2.2.1.2
```

4. SNMPv3 no añade PDUs: cambia la envoltura. Usa el modelo USM para **autenticar y cifrar** (nivel
   `authPriv`) y VACM para limitar qué ramas ve cada usuario. Con v1 y v2c la comunidad viaja en claro:
   quien capture tráfico la lee y hereda los permisos.

**Rúbrica (10 puntos).** Apartado 1: 4 puntos. Apartado 2: 3. Apartado 3: 2. Apartado 4: 1.

**Error típico.** Restar sin tener en cuenta el desbordamiento y concluir "tráfico negativo".

## Caso 2. RMON: alarma de utilización y su límite de 32 bits

**Enunciado.** En un enlace de 1 Gb/s se quiere una alarma RMON cuando la entrada supere el 70 por
ciento (subida) y vuelva por debajo del 60 por ciento (bajada), con el contador de 64 bits.

**Se pide.**

1. Calcular los umbrales en bytes para un intervalo de 300 segundos.
2. Comprobar si son configurables si los umbrales de la alarma son enteros de 32 bits con signo.
3. Proponer el intervalo y los umbrales que sí sirven.
4. Nombrar el grupo RMON que se usa y el que genera el aviso.

**Solución.**

```text
1. 70 por ciento de 1 Gb/s = 700 Mb/s = 87,5 MB/s; en 300 s: 26 250 000 000 bytes
   60 por ciento: 22 500 000 000 bytes

2. Un entero de 32 bits con signo llega a 2 147 483 647. Ambos umbrales lo superan:
   no se pueden configurar con intervalo de 300 s.

3. Intervalo de 10 s:
   subida = 0,70 x 1 000 000 000 / 8 x 10 = 875 000 000 bytes
   bajada = 0,60 x 1 000 000 000 / 8 x 10 = 750 000 000 bytes
   Ambos caben. Alarma de tipo delta con esos umbrales.
```

```text
rmon event 1 log trap public description "Utilizacion alta" owner netops
rmon alarm 10 ifHCInOctets.24 10 delta rising-threshold 875000000 1 \
  falling-threshold 750000000 1 owner netops
```

4. Grupo **Alarm** (umbrales de subida y bajada sobre cualquier objeto) y grupo **Event** (el trap o el
   registro que se dispara cuando salta la alarma). Si además se quiere historia, el grupo
   **History**.

**Rúbrica (10 puntos).** Apartado 1: 3 puntos. Apartado 2: 3. Apartado 3: 3. Apartado 4: 1.

**Observación.** Las alarmas RMON de intervalo largo no sirven en enlaces rápidos: o se acorta el
intervalo o se calcula en una herramienta externa a partir de los contadores de 64 bits.

## Caso 3. Perfil de tráfico y detección de una anomalía

**Enunciado.** El perfil de un día laborable, en Mb/s, es: hora 0: 5; 3: 3; 6: 12; 8: 45; 10: 55;
12: 40; 14: 54; 15: 56; 17: 44; 19: 30; 22: 8. Se sabe también que, en la hora 3, el histórico de 20
días laborables tiene media 3 Mb/s y desviación 0,8. Un martes se miden 38 Mb/s a las 03:00.

**Se pide.**

1. Con los 24 valores horarios (media 27,2 y punta 56), calcular la relación punta a media e
   indicar con cuál dimensionarías un enlace.
2. Indicar la mejor hora para una ventana de mantenimiento.
3. Calcular cuántas desviaciones se aleja la lectura de las 03:00 de su histórico y razonar por qué
   la desviación de todo el día no sirve para detectar la anomalía.
4. Proponer tres hipótesis y las pruebas, y redactar las conclusiones del informe.

**Solución.**

```text
1. Relación punta a media = 56 / 27,2 = 2,06. Se dimensiona por la punta (percentil 95 con margen),
   no por la media: una media de 27 esconde una punta de 56.

2. La hora de menor tráfico: las 03:00 (3 Mb/s), entre las 2 y las 5 de la madrugada.

3. z = (38 - 3) / 0,8 = 43,75 desviaciones: es una anomalia clara.
   La desviacion de todo el dia (unos 20 Mb/s) valdria para un umbral de 27 + 3 x 20 = 88 Mb/s:
   los 38 Mb/s no lo superarian y la anomalia pasaria desapercibida. Hay que comparar cada hora
   con SU histórico, no con el del día completo.
```

4. **Hipótesis y pruebas:** (a) copia de seguridad fuera de horario: mirar NetFlow por origen y
   destino y el calendario de copias; (b) equipo infectado o exfiltración: ver destino y puertos y
   volumen hacia Internet; (c) actualización masiva de equipos: comprobar con el departamento de
   sistemas.
   **Conclusión del informe:** a las 03:00 se midió una carga 12 veces el perfil; se propone
   confirmar el origen con NetFlow, aislar el equipo si es externo y, si es la copia, reprogramarla;
   y establecer una alarma que compare cada hora con su perfil.

**Rúbrica (10 puntos).** Apartado 1: 2 puntos. Apartado 2: 1. Apartado 3: 4. Apartado 4: 3.

## Caso 4. Tendencia y decisión de capacidad

**Enunciado.** Un enlace de 200 Mb/s tiene estas puntas mensuales: enero 80, febrero 88, marzo 96,8,
abril 106,5 y mayo 117,1 Mb/s. El umbral de aviso es el 80 por ciento y el crítico, el 100 por ciento.
Ampliar a 1 Gb/s cuesta 1 200 euros al año; reprogramar copias y aplicar QoS, 8 horas a 40 euros.

**Se pide.**

1. Calcular la tasa de crecimiento mensual y decir si es lineal o geométrica.
2. Calcular en cuántos meses se llega al umbral de aviso y al de saturación, con las dos hipótesis.
3. Proponer una decisión justificada.

**Solución.**

```text
1. 88 / 80 = 1,10; 96,8 / 88 = 1,10; 106,5 / 96,8 = 1,10: crecimiento geometrico del 10 por ciento
   mensual (con la hipotesis lineal seria +9,3 Mb/s por mes).

2. Geometrica: meses = ln(final / actual) / ln(1,10)
   aviso (160 Mb/s): ln(160 / 117,1) / ln(1,1) = 3,3 meses
   saturacion (200): ln(200 / 117,1) / ln(1,1) = 5,6 meses
   Lineal: (160 - 117,1) / 9,28 = 4,6 meses; (200 - 117,1) / 9,28 = 8,9 meses
   Con la misma situacion de partida, la geometrica satura antes.
   Regla del 70: 70 / 10 = 7 meses para duplicar.
```

3. **Decisión.** Hay tiempo (unos 3 meses hasta el aviso y unos 5 hasta saturar), así que primero se
   comprueba con NetFlow si el tráfico es legítimo y se actúa sobre lo barato: QoS y mover la copia de
   seguridad (320 euros, una semana). En paralelo se solicita la ampliación para que esté lista antes
   del mes 5, con la gráfica y la fecha como justificación. Ampliar sin comprobar cuesta 1 200 euros al
   año y puede enmascarar un equipo infectado.

**Rúbrica (10 puntos).** Apartado 1: 3 puntos. Apartado 2: 4. Apartado 3: 3.

**Error típico.** Aplicar una regla de tres lineal a un crecimiento geométrico y fiarse de un plazo
excesivamente largo.

## Caso 5. Plan de mantenimiento, firmware y auditoría

**Enunciado.** Una red tiene 12 conmutadores (dos de ellos apilados), 2 routers y un SAI. El manual
del fabricante indica limpieza cada seis meses, revisión de boletines de firmware cada seis meses, baterías
del SAI con vida de 4 años y fin de soporte del modelo en 3 años. Una auditoría interna encuentra:
(a) tres conmutadores con firmware dos versiones por detrás sin justificación; (b) copias de
configuración que existen pero nunca se han restaurado; (c) baterías del SAI de 5,5 años; (d) un cambio
sin petición registrada.

**Se pide.**

1. Dibujar el calendario anual de operaciones.
2. Escribir el procedimiento de actualización del firmware de un conmutador.
3. Clasificar los cuatro hallazgos y proponer correcciones y acciones correctivas.

**Solución.**

```text
1. Calendario anual de mantenimiento preventivo
                              E  F  M  A  M  J  J  A  S  O  N  D
   Copia de configuracion     X  X  X  X  X  X  X  X  X  X  X  X   (mensual)
   Revision de logs           X  X  X  X  X  X  X  X  X  X  X  X   (mensual)
   Limpieza y ventilacion              X              X            (semestral)
   Boletines de firmware                X              X            (semestral)
   Prueba de conmutacion/SAI                   X                 X   (semestral)
   Auditoria interna                                  X             (anual)
   Revision de cuentas                                         X    (anual)
   Fin de soporte (3 anos): planificar la renovacion al ano 2,5
```

2. **Firmware:** leer notas de versión y compatibilidad; copiar configuración e imagen actual a un
   servidor; descargar del fabricante y verificar la suma; avisar y pactar la ventana con plan de
   reversión; actualizar **un equipo cada vez** (nunca el apilamiento completo a la vez); verificar
   versión, arranque, interfaces, rutas y registros; vigilar 24 horas y cerrar el cambio.

3. **Hallazgos:**

| Hallazgo | Clasificación | Justificación | Corrección y acción correctiva |
| --- | --- | --- | --- |
| a) Firmware desfasado | No conformidad menor | Incumple la política de parches, pero no hay parada | Actualizar; revisión semestral con responsable |
| b) Copias sin restaurar | Observación o menor | Existen, pero sin prueba no hay garantía | Probar una restauración; añadirla al calendario |
| c) Baterías de 5,5 años | No conformidad mayor | Superan la vida del fabricante (4 años): riesgo de parada | Sustituir ya; control de fechas en el inventario |
| d) Cambio sin petición | No conformidad menor | Incumple el procedimiento de cambios | Regularizar el registro; recordar y auditar el proceso |

**Rúbrica (10 puntos).** Apartado 1: 3 puntos. Apartado 2: 3. Apartado 3: 4.

## Caso 6. Plan de monitorización y análisis de coste

**Enunciado.** Una empresa quiere monitorizar 200 equipos con unos 5 sensores por equipo. Opción A:
un producto comercial con licencia por sensor de 2 400 euros al año para 1 000 sensores y 10 horas de
implantación a 40 euros la hora. Opción B: código abierto con 50 horas de implantación y 30 horas al
año de mantenimiento, a 40 euros la hora. Se plantea además tener un puesto de guardia 24 por 7.

**Se pide.**

1. Calcular el coste a 5 años de cada opción.
2. Clasificar los equipos por criticidad y fijar su frecuencia de sondeo.
3. Calcular cuántas personas hacen falta para un puesto 24 por 7 con 1 700 horas productivas por
   persona y año, y proponer alternativa.
4. Redactar la recomendación.

**Solución.**

```text
1. A: 10 x 40 + 5 x 2 400 = 400 + 12 000 = 12 400 euros
   B: 50 x 40 + 5 x 30 x 40 = 2 000 + 6 000 = 8 000 euros
   La B es un 35 por ciento mas barata, pero exige conocimiento propio.

3. 24 x 365 = 8 760 horas / 1 700 = 5,15 -> 5 a 6 personas para un solo puesto continuo.
```

2. **Criticidad:** nivel 1 (núcleo, cortafuegos, WAN, DNS y DHCP): 1 minuto; nivel 2 (distribución,
   servidores de aplicación): 5 minutos; nivel 3 (acceso, impresoras): 15 minutos.
3. **Alternativa a la guardia 24 por 7:** horario laboral con monitorización automática, alarmas con
   escalado a una guardia de aviso (de alcance limitado) o un servicio gestionado para fuera de horario.
4. **Recomendación:** opción B si hay o se puede formar a una persona que mantenga la herramienta;
   opción A si no hay tiempo ni conocimiento o se necesita soporte formal. En ambos casos, monitorizar
   por criticidad (no los 1 000 sensores a la misma frecuencia), con sondeo escalonado y consultas por
   bloques, y no montar una guardia 24 por 7 salvo exigencia contractual.

**Rúbrica (10 puntos).** Apartado 1: 3 puntos. Apartado 2: 3. Apartado 3: 2. Apartado 4: 2.

## Autocorrección

| Caso | Tu nota | Qué repasar si fallas |
| --- | --- | --- |
| 1. SNMP y contadores | | Apartados 3, 4 y 4.6 |
| 2. RMON | | Apartado 5 |
| 3. Perfil de tráfico | | Apartado 7.5 |
| 4. Tendencia y capacidad | | Apartado 7.3 y perspectiva empresarial |
| 5. Mantenimiento y auditoría | | Apartado 8 |
| 6. Plan y coste | | Apartados 6.7 y 6.8 y perspectiva empresarial |
