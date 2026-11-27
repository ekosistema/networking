---
title: "Gestión de redes telemáticas"
description: "Resumen conceptual de la unidad Gestión de redes."
section: administracion
unit: gestion
kind: conceptual
order: 71
tags:
  - redes
  - gestion
  - conceptual
  - snmp
  - monitorizacion
---

# Gestión de redes telemáticas

> **En una frase.** Una red no se termina el día que se enchufa: se administra midiendo, decidiendo y anotando lo decidido, en un ciclo que se cierra cuando la red se apaga.

## Por qué existe este tema

Montar una red lleva unas semanas. Sostenerla lleva años. En ese tiempo entran usuarios nuevos, las aplicaciones piden más ancho de banda, el fabricante publica firmware porque alguien encontró un fallo, y a las tres de la mañana se cae el enlace del que nadie se acordaba. El técnico que solo sabe instalar entrega la red y desaparece; el que sabe administrarla sigue allí cuando esa red tiene que aguantar el doble de tráfico.

El problema de fondo es que la red no avisa. Un enlace saturado solo va más lento, sin mensaje y sin alarma, y la primera señal es una queja imprecisa: "esto va mal". Sin datos se discute con opiniones y gana el que grita más fuerte. Con datos la conversación cambia: el enlace de salida crece un veinte por ciento al mes, a ese ritmo se llena en cuatro meses, así que o se amplía o se prioriza el tráfico. De ahí el orden del módulo: en la unidad «Equipos y servicios de red» se ven los equipos, aquí cómo se vigilan, y en la unidad «Incidencias» qué se hace cuando algo falla.

## El mapa

El ciclo de vida con la medición en el centro: los datos de operación alimentan la decisión de optimizar.

```text
              +-------------------------------+
              |  PLANIFICAR  Y  DISEÑAR       |
              +---------------+---------------+
                              |
                              v
              +-------------------------------+
              |          IMPLANTAR            |
              +---------------+---------------+
                              |
                              v
  +---------+   +-------------------------------+   +-----------+
  |   NOC   |-->|            OPERAR             |<--| USUARIOS  |
  | turnos  |   | configuración, fallos, carga  |   |  quejas   |
  +---------+   +---------------+---------------+   +-----------+
                                |
                   SNMP, RMON,  |
                   NetFlow,     v
                   SYSLOG       +-------------------------------+
                                |          OPTIMIZAR            |
                                | tendencia, umbrales, cambios  |
                                +---------------+---------------+
                                                |
                                vuelve a planificar
```

## Los conceptos, uno a uno

### 1. El ciclo de vida: planificar, diseñar, implantar, operar, optimizar

**La intuición.** Una cocina de restaurante no se termina el día de la inauguración. Se piensa el menú, se reparten las zonas, se monta, se cocina a diario y cada cierto tiempo se cambia la campana porque el menú creció.

**Lo formal.** El ciclo PDIOO: Plan, Design, Implement, Operate, Optimize. Cisco añade Prepare y lo llama PPDIOO. Es el mismo fondo que el PDCA de mejora continua (planificar, hacer, verificar, actuar) de UNE-EN ISO 9001:2015 y de ISO/IEC 20000, y no es una línea recta: optimizar realimenta la planificación.

**Un ejemplo.** Un enlace de 100 Mb/s cursa 45 Mb/s de media en hora punta. Con telefonía IP sube a 54 Mb/s; esa cifra entra en el informe de operación, dispara la optimización (priorizar voz) y de ahí sale una decisión de diseño: separar la VLAN de voz.

### 2. El NOC y las cinco cosas que se administran

**La intuición.** Un aeropuerto tiene una torre de control que no vuela ningún avión, pero sin ella nadie despega. No arregla nada: mira, avisa y coordina.

**Lo formal.** El NOC (Network Operations Center) es el centro de operaciones de red: turnos de personas y un panel donde se concentran alarmas, estado de enlaces y tickets. Vigila, correlaciona alarmas, diagnostica en primer nivel y coordina con el operador. Se organiza en niveles: el primero filtra, el segundo diagnostica con acceso a los equipos y el tercero es el especialista. La administración se agrupa en cinco áreas, conocidas por las siglas FCAPS (fallos, configuración, contabilidad, prestaciones y seguridad); el programa de referencia usa una división equivalente: configuración, disponibilidad, capacidad, seguridad e incidencias.

**Un ejemplo.** Un NOC de una cadena con doscientas sedes recibe 4 000 alarmas al día y 3 800 son ruido, casi todas un puerto que se cae cada noche por un latiguillo suelto. El trabajo fino es reducirlas: un panel con 4 000 avisos no se mira.

### 3. Gestor, agente y MIB: quién pregunta y a quién

**La intuición.** En un almacén hay un encargado con un inventario numerado por pasillos y estanterías. Se le pide la caja 3 del pasillo 7 solo con la ruta.

**Lo formal.** Hay dos papeles: el gestor, que pregunta y guarda, y el agente, el programa que corre en el equipo gestionado y responde. La información vive en la MIB (Management Information Base), un árbol donde cada objeto tiene un OID en notación decimal con puntos. El agente escucha en el puerto 161 UDP y las notificaciones van al 162. La estructura y los tipos los define el SMI, un subconjunto de ASN.1 con reglas propias.

**Un ejemplo.** El tiempo encendido es `sysUpTime`, OID `1.3.6.1.2.1.1.3.0`, que se lee `iso(1).org(3).dod(6).internet(1).mgmt(2).mib-2(1).system(1).sysUpTime(3).0`. Si al consultarlo cada cinco minutos el valor baja en vez de subir, el equipo se ha reiniciado.

### 4. SNMP: preguntar cada cinco minutos y recibir avisos

**La intuición.** Para saber si el congelador de la tienda está frío puedes ir a mirar el termómetro cada rato o poner uno con alarma que te llame si sube de menos dieciocho. Lo primero es barato y no te enteras entre visita y visita.

**Lo formal.** SNMP (Simple Network Management Protocol) tiene las dos cosas. El gestor consulta con `GET` (un objeto), `GETNEXT` (el siguiente del árbol) y `GETBULK` (varios de golpe, desde la versión 2), y escribe con `SET`, que conviene restringir. El agente responde con `RESPONSE` y, cuando algo cruza un umbral, envía un `TRAP` al puerto 162. La versión 2 añade `INFORM`, un trap con confirmación. La 1 y la 2c usan comunidades, una contraseña en claro; la 3 autentica y cifra con USM y controla el acceso por vistas.

**Un ejemplo.** `ifInOctets` (OID `1.3.6.1.2.1.2.2.1.10`) cuenta bytes recibidos desde que se arrancó: no es una velocidad, es un contador que solo sube. Si en 300 segundos sube 375 millones de bytes, son 3 000 millones de bits en 300 segundos, es decir, 10 Mb/s de media.

### 5. RMON: medir donde no hay nadie mirando

**La intuición.** Un vigilante en cada pasillo es carísimo y solo ve su turno. Una cámara que graba sola y guarda las últimas veinticuatro horas cuesta menos y permite rebobinar lo que pasó de madrugada.

**Lo formal.** SNMP no escala: preguntar cada cinco minutos a doscientos equipos son 2 400 consultas por hora, y si el gestor se cae no queda historia. RMON (Remote MONitoring) pone la inteligencia en el otro extremo: una sonda, dedicada o dentro del conmutador, acumula estadísticas y el gestor recoge el resumen. RMON1 (RFC 1757, revisado en RFC 2819) trabaja en niveles 1 y 2 con nueve grupos: estadísticas, historial, alarma, hosts, hosts top N, matriz, filtro, captura y eventos. RMON2 (RFC 2021, reescrito en RFC 4502) sube a niveles 3 a 7 y añade diez grupos, entre ellos el directorio de protocolos.

**Un ejemplo.** Una sonda muestrea cada 30 segundos el puerto del servidor de ficheros y guarda 24 horas. El lunes aparece un pico del 98 por ciento el sábado a las 02:40, justo cuando corre la copia. Con SNMP puro se pierde entre muestra y muestra.

### 6. Las magnitudes que se miden

**La intuición.** Para juzgar una carretera no basta con contar carriles: hay que saber cuántos coches pasan, a qué velocidad, cuánto se tarda y cuántos baches hay. Un carril ancho con un camión lento delante es peor que uno estrecho y libre.

**Lo formal.** La capacidad es el máximo teórico (100 Mb/s, 1 Gb/s). La utilización es qué parte se usa, en porcentaje y en una ventana de tiempo (cinco minutos suele ser el estándar). El rendimiento es lo que realmente se cursa, siempre por debajo por cabeceras y protocolos. El retardo es el tiempo de ida y el RTT el de ida y vuelta. El jitter es la variación del retardo entre paquetes consecutivos y la pérdida el porcentaje que no llega. La disponibilidad es el tiempo operativo, en nueves.

**Un ejemplo.** Un enlace de 100 Mb/s que cursa 62 Mb/s está al 62 por ciento. Si además el RTT sube de 8 a 60 ms y hay un 2 por ciento de pérdidas, no falta ancho de banda: hay colas, y aparecen cuando la ráfaga supera la capacidad durante intervalos cortos. La media de cinco minutos engaña; hay que mirar el pico.

### 7. Mantenimiento preventivo: la parada que se planifica

**La intuición.** La ITV no arregla nada, pero evita la avería en mitad de un viaje. Se elige fecha, se deja el coche y al recogerlo se comprueba que todo va antes de salir a la autopista.

**Lo formal.** El mantenimiento preventivo reduce la probabilidad de fallo con actuaciones planificadas: firmware, revisión de configuraciones, copias de configuración, limpieza de logs e inventario, certificados y latiguillos. Se ejecuta en una ventana de mantenimiento, un intervalo acordado con el negocio en el que se admite interrupción, con alcance definido, plan de reversión y verificación posterior.

**Un ejemplo.** Actualizar el firmware de un apilamiento de cuatro conmutadores en horario de oficina es una imprudencia; hacerlo a las 22:00, con la ventana aprobada y de uno en uno comprobando que el apilamiento sigue viendo los cuatro equipos, es rutina.

## Las confusiones que cuestan puntos

**SNMP frente a RMON.** SNMP es el protocolo de consulta; RMON es una MIB que vive en una sonda y acumula datos por su cuenta. SNMP pregunta; RMON ya tiene la respuesta preparada.

**RMON frente a NetFlow.** RMON mide el tráfico del segmento y de sus hosts; NetFlow describe conversaciones (quién habla con quién y cuánto) y lo genera el router o el conmutador, no una sonda.

**Snort frente a Nessus.** Snort es un sistema de detección de intrusos: mira el tráfico y busca patrones de ataque. Nessus es un escáner de vulnerabilidades: se conecta a los equipos y comprueba parches pendientes. Uno vigila lo que pasa, el otro audita lo instalado.

**Monitorizar frente a administrar.** Monitorizar es obtener datos; administrar incluye decidir, cambiar y documentar.

**Capacidad frente a utilización.** La capacidad es el techo; la utilización, lo ocupado de ese techo. Se puede tener mucha capacidad y estar mal por una configuración de colas.

**Trap frente a Inform.** El trap se envía una vez y no se confirma, así que puede perderse; el inform espera confirmación y se reenvía. El primero es más barato, el segundo más fiable.

## Tres ideas que completan el cuadro

**Medir cambia lo que mides.** Preguntarle a un equipo cómo está le cuesta un poco de trabajo, y si le preguntas cada pocos segundos lo agotas. Por eso no todo se vigila con la misma frecuencia: lo crítico, cada minuto; lo importante, cada cinco; lo ordinario, cada quince. Y cuando se activa una monitorización, lo primero que se comprueba es que no ha subido la carga de los equipos que se vigilan.

**La media miente.** Un enlace puede tener un uso medio del veinte por ciento y estar saturado media hora al día, justo cuando más se necesita. Por eso se dibuja el perfil de cada hora y se dimensiona por la punta, no por el promedio. Y el perfil sirve para más: para elegir la hora de menor tráfico en que hacer un mantenimiento, y para notar que un martes a las tres de la madrugada algo está hablando por la red cuando nadie debería hacerlo.

**Lo que no está en el calendario no se hace.** Cambiar una batería, revisar un firmware o comprobar que una copia se restaura son tareas aburridas y urgentes solo el día que fallan. El plan de mantenimiento las convierte en fechas, con responsable y registro, y esos registros son lo que enseñas cuando alguien audita. Una red que funciona sin que nadie lo note es una red bien mantenida.

## Conexiones

Los equipos y servicios que aquí se administran se describen en [Equipos y servicios de red · Equipos de red y servicios](../01_Equipos_Servicios/README.md): sin saber qué es una pila de conmutadores o un servidor DHCP, la MIB es un jeroglífico. Las alarmas que este ciclo detecta se convierten en tickets en [Resolución de incidencias](../03_Incidencias/README.md), donde se aplica el escalado.

El diseño y el direccionamiento salen de [Proyecto de red](../../01_Diseno/02_Proyecto_Red/README.md): un plan ordenado hace que inventarios y MIB tengan sentido. Los términos sueltos están en el [glosario general](../../00_Indice/Glosario.md) y las fórmulas en el [formulario](../../00_Indice/Formulario_y_tablas.md).

## Autoevaluación

1. Enumera las cinco fases del ciclo PDIOO y di qué sale de cada una.
2. ¿En qué se diferencian FCAPS y los cinco bloques del programa de referencia?
3. ¿Qué tres funciones cumple un NOC y cuáles no le corresponden?
4. Define gestor, agente y MIB con una frase cada uno.
5. Escribe el OID de `sysUpTime` y explica cómo se lee.
6. ¿Para qué sirve `GETNEXT` y por qué `GETBULK` lo mejora?
7. Explica el problema de seguridad de las comunidades y cómo lo resuelve la versión 3.
8. Un contador `ifOutOctets` sube 900 MB en 10 minutos. ¿Cuál es el tráfico medio en Mb/s?
9. ¿Por qué existe RMON si SNMP ya funciona? Da dos razones concretas.
10. Nombra cuatro grupos de RMON1 y dos de RMON2 con lo que mide cada uno.
11. Un enlace de 1 Gb/s cursa 850 Mb/s con picos en el techo. ¿Qué pasa y qué pedirías?
12. Vas a actualizar el firmware de un conmutador en producción. Enumera los pasos.
13. ¿Por qué no se sondean todos los equipos cada diez segundos? Pon un criterio de frecuencias por criticidad.
14. Un enlace de 100 Mb/s tiene una media de 27 Mb/s y una punta de 56 Mb/s. ¿Cuál usas para dimensionar y por qué?
15. ¿Qué evidencias pedirías en una auditoría del mantenimiento preventivo?

## Claves

1. Planificar, diseñar, implantar, operar y optimizar; salen el diseño, la red en servicio y el informe de capacidad.
2. FCAPS usa contabilidad; el programa de referencia la cambia por capacidad e incidencias.
3. Vigilar, correlacionar alarmas y coordinar; no diseña la red ni decide el presupuesto.
4. El gestor pregunta y guarda; el agente responde; la MIB es el árbol de objetos.
5. `1.3.6.1.2.1.1.3.0`: iso, org, dod, internet, mgmt, mib-2, system, sysUpTime, instancia cero.
6. `GETNEXT` da el siguiente objeto en orden lexicográfico; `GETBULK` trae varios por petición.
7. Viaja en claro y suele ser el valor por defecto; la versión 3 autentica y cifra con USM.
8. 900 MB son 7 200 Mb; en 600 segundos, 12 Mb/s.
9. Descarga al gestor del sondeo continuo y guarda historial si el gestor cae.
10. Estadísticas, historial, alarma y eventos; en RMON2, distribución por protocolo y mapa de direcciones.
11. Hay colas: pediría pérdidas y descartes, y el desglose por conversación.
12. Notas de versión, copia de configuración e imagen, ventana, un equipo, comprobar apilamiento y `sysUpTime`, vigilar 24 horas.
13. Porque cada consulta gasta CPU del equipo y el exceso lo perjudica; crítico cada 1 minuto, importante cada 5 y ordinario cada 15.
14. La punta (o el percentil 95): la media esconde los momentos de saturación, que es cuando el enlace falla.
15. Partes firmados del calendario, copias con prueba de restauración, inventario con versiones de firmware, registro de cambios aprobados, tickets de alarmas y fechas de baterías.
