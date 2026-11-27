---
title: "Resolución de incidencias en redes telemáticas"
description: "Resumen técnico de la unidad Incidencias."
section: administracion
unit: incidencias
kind: tecnico
order: 82
tags:
  - redes
  - incidencias
  - tecnico
  - itsm
---

# Incidencias · Resumen técnico

> **Alcance.** Cinco bloques: el proceso de gestión de la incidencia, el método de resolución con sus técnicas de análisis, las herramientas de hardware, las de software con su sintaxis y el árbol de decisión que las une, con tres casos resueltos.

## 1. Gestión de incidencias

### 1.1 Vocabulario

Una **incidencia** es una interrupción no planificada del servicio o una reducción no planificada de su calidad. Una **petición de servicio** es una solicitud prevista en el catálogo: un alta, una instalación. Un **problema** es la causa de una o varias incidencias. Un **error conocido** es un problema ya diagnosticado con solución temporal. Un **evento** es un cambio de estado sin juicio de valor, como un puerto que pasa a inactivo.

La incidencia se mide por el tiempo de restablecimiento y el problema por la desaparición de la causa.

### 1.2 El ciclo completo

```text
   NUEVO --> ABIERTO --> EN CURSO --> RESUELTO --> CERRADO
                 ^           |  \
                 |           |   +--> PENDIENTE (usuario o proveedor)
                 |           v
                 +------ REABIERTO
```

**Registro.** Canales: teléfono, correo, autoservicio, aviso presencial y monitorización, que abre el ticket antes de que el usuario llame. Un ticket mínimo lleva hora de apertura, solicitante y ubicación, servicio afectado, síntoma en palabras del usuario, categoría, prioridad, técnico y elemento de configuración. Sin ubicación no se comprueba nada; sin hora no se mide nada.

**Clasificación.** Categoría y subcategoría (red, cableado, direccionamiento, directorio, aplicación), servicio y elemento de configuración. Un error de clasificación consume el tiempo en un rebote.

**Prioridad.** Se calcula, no se elige. Sale del impacto (a cuántos afecta y cuán crítico es) y de la urgencia (cuánto puede esperar). La escala de cuatro niveles fija los plazos:

| Prioridad | Impacto y urgencia | Respuesta | Resolución |
| --- | --- | --- | --- |
| P1 | Alto impacto y alta urgencia, o servicio crítico | 15 minutos | 4 horas |
| P2 | Impacto medio, o urgencia alta en un departamento | 1 hora | 8 horas |
| P3 | Un puesto o tarea no crítica con urgencia media | 4 horas | 2 días |
| P4 | Impacto bajo y urgencia baja | 8 horas | 5 días |

Los plazos son convención de ejemplo. La gravedad técnica describe el tamaño del fallo y no fija la prioridad.

**La matriz de priorización.** La prioridad se obtiene cruzando impacto y urgencia, de modo que dos técnicos distintos lleguen al mismo resultado:

| Impacto \ Urgencia | Alta | Media | Baja |
| --- | --- | --- | --- |
| Alto (servicio crítico o una sede completa) | P1 | P2 | P3 |
| Medio (un departamento) | P2 | P3 | P4 |
| Bajo (un puesto) | P3 | P4 | P4 |

El **impacto** mide cuántos usuarios y qué procesos de negocio se ven afectados; la **urgencia**, cuánto tiempo se puede esperar sin que el daño crezca. Un puesto de dirección con una reunión en una hora es un impacto bajo con urgencia alta (P3), y el departamento de facturación sin red el último día del mes es un impacto medio con urgencia alta (P2). La prioridad se puede **reclasificar** si cambian los hechos, con registro del motivo; lo que no se admite es subirla porque alguien insiste.

**Escalado.** El funcional añade conocimiento: primer nivel, segundo especialista y tercero del fabricante. El jerárquico añade autoridad y se activa por riesgo de incumplir el acuerdo, presupuesto, conflicto entre equipos o servicio crítico. Se escala cuando se agota el conocimiento, no la paciencia.

**Resolución y recuperación.** La solución temporal restablece el servicio sin eliminar la causa; la definitiva exige un cambio. Recuperar es devolver el estado anterior.

**Cierre.** Con confirmación del usuario o automático tras un plazo, con causa clasificada. Un ticket sin causa no sirve para estadística, y sin estadística no hay prevención.

### 1.3 Indicadores

| Indicador | Fórmula | Qué mide |
| --- | --- | --- |
| MTTR, tiempo medio de resolución | Suma de tiempos de resolución entre incidencias cerradas | Eficacia del restablecimiento |
| MTTA, tiempo medio de respuesta | Suma de tiempos hasta el primer contacto entre incidencias | Rapidez de la mesa de ayuda |
| MTBF, tiempo medio entre fallos | Horas de funcionamiento entre número de fallos | Fiabilidad del componente |
| Disponibilidad | MTBF entre MTBF más MTTR | Servicio entregado |
| FCR, resolución en primer contacto | Cerradas en nivel uno entre total, en porcentaje | Calidad del primer nivel |
| Cumplimiento de SLA | Cerradas en plazo entre total, en porcentaje | Cumplimiento del compromiso |
| Tasa de reapertura | Reabiertas entre cerradas, en porcentaje | Calidad del cierre |

Ejemplo. 120 incidencias y 90 horas dan un MTTR de 45 minutos. Un conmutador que falla 4 veces en 2 000 horas tiene 500 horas de MTBF; con 2 horas por intervención, su disponibilidad es un 99,6 por ciento. Con 20 fallos baja al 98: ese decimal decide una sustitución.

### 1.4 Mesa de ayuda, ticketing e ITSM

La mesa de ayuda es el punto único de contacto; la plataforma ITSM añade inventario, catálogo, gestión de cambios y de problemas y motor de acuerdos de nivel de servicio.

Comerciales: ServiceNow, Jira Service Management, BMC Helix, ManageEngine, Freshservice, Zendesk. Libres: GLPI, muy extendido en España; Znuny, antes OTRS; osTicket; Request Tracker. Criterio: inventario enlazable con tickets, motor de SLA, informes exportables y API.

### 1.5 ISO/IEC 20000-1:2018 e ITIL

**ISO/IEC 20000-1:2018** (tercera edición, septiembre de 2018) especifica los requisitos del sistema de gestión de servicios y es certificable. El auditor pedirá la política de prioridades, los registros trazables, los informes de indicadores y las acciones ante desviaciones.

**ITIL** no es certificable para la organización: es un marco de buenas prácticas. ITIL 4 (febrero de 2019) describe la gestión de incidentes en tres etapas: identificar y registrar, clasificar y priorizar, resolver y recuperar. PeopleCert anunció ITIL 5 en enero de 2026 [fuente secundaria]; los conceptos de incidente, problema y cambio de este apartado son los de ITIL 4 y se mantienen como vocabulario base [no verificado en la documentación oficial de ITIL 5]. La norma dice qué cumplir; ITIL, cómo hacerlo bien.

### 1.6 Problemas, errores conocidos y base de conocimiento

La gestión de **problemas** busca la causa de una o varias incidencias para que no se repitan. Se abre un problema cuando hay incidencias repetidas, una incidencia grave sin causa clara o una tendencia detectada en los informes.

| Concepto | Qué es | Ejemplo |
| --- | --- | --- |
| Problema | Causa de una o varias incidencias | Baterías de SAI sin plan de revisión |
| Error conocido | Problema diagnosticado con solución temporal | "Reiniciar el puerto hasta cambiar el cable" |
| Solución temporal (workaround) | Restablece el servicio sin quitar la causa | Latiguillo provisional |
| Solución definitiva | Elimina la causa, normalmente con un cambio | Recablear el tramo |

**Cómo se detectan los problemas: el Pareto de incidencias.** Con las categorías del trimestre:

| Categoría | Incidencias | Porcentaje | Acumulado |
| --- | --- | --- | --- |
| Puestos sin dirección IP | 42 | 35 por ciento | 35 por ciento |
| Latiguillos y cableado | 30 | 25 por ciento | 60 por ciento |
| DNS y nombres | 18 | 15 por ciento | 75 por ciento |
| Wi-Fi | 15 | 12,5 por ciento | 87,5 por ciento |
| Otras | 15 | 12,5 por ciento | 100 por ciento |

Con 120 incidencias, las dos primeras categorías explican el 60 por ciento. Abrir un problema sobre las direcciones IP (por ejemplo, revisar el DHCP y las VLAN de aula) elimina más tickets que cualquier mejora en la velocidad de resolución.

**Base de conocimiento (KB).** Es el repositorio de soluciones que reutiliza la mesa de ayuda. Un buen artículo lleva título con el síntoma, a quién afecta, causa, pasos de resolución numerados, comprobación y cuándo escalar. Se mide por su **reutilización**: un artículo sobre "puesto sin IP" que resuelve 8 casos al mes y ahorra 10 minutos cada uno supone 16 horas al año; con un coste de 35 euros por hora, 560 euros anuales frente a una hora de redacción (35 euros). Un artículo sin fecha ni responsable caduca y deja de usarse.

### 1.7 Incidentes graves, guardias y escalado con tiempos

Un **incidente grave** (P1 con impacto sobre un servicio crítico) tiene un procedimiento propio:

| Rol o paso | Qué hace |
| --- | --- |
| Responsable del incidente | Coordina; no repara |
| Sala de crisis (física o virtual) | Reúne a los técnicos y a quien decide |
| Comunicación | Un canal único, avisos periódicos al negocio con la hora del siguiente |
| Registro cronológico | Quién hizo qué y a qué hora |
| Revisión posterior | Análisis sin culpables: causa, qué funcionó, qué se cambia |

La **guardia** cubre fuera de horario: un técnico localizable con plazo de respuesta pactado, compensado y con una lista de actuaciones (*runbook*) que dice qué hacer ante cada alarma sin improvisar. Escalado típico con tiempos:

| Tiempo sin avance | Acción |
| --- | --- |
| 15 minutos en P1 | Escalado funcional al segundo nivel |
| 1 hora en P1 | Escalado al especialista o fabricante y aviso al jefe |
| Riesgo de incumplir el SLA | Escalado jerárquico y comunicación al cliente |

### 1.8 SLA, OLA y el reloj del acuerdo

El **SLA** es el acuerdo con el cliente; el **OLA** (acuerdo de nivel operativo) es el acuerdo entre equipos internos; el **contrato de apoyo** (UC) es el que se firma con un proveedor externo. Para cumplir el SLA, el OLA y el contrato de apoyo deben ser al menos igual de exigentes.

El **reloj** del SLA se pausa cuando la incidencia espera al usuario o a una ventana autorizada por el cliente, pero no cuando espera al proveedor interno ni al fabricante. Ejemplo: una incidencia P1 se resuelve en 6 horas, de las cuales 2 estuvo pendiente de que el usuario facilitara un acceso. Tiempo contado: 4 horas, dentro del plazo de resolución de P1.

```text
Cumplimiento de SLA: 120 incidencias del mes, 108 cerradas en plazo = 90 por ciento
Compromiso del 95 por ciento: faltan 6 incidencias en plazo (114 de 120); se incumple el acuerdo.
```

## 2. Resolución de incidencias: el método

### 2.1 Definición del problema

Un enunciado útil responde a qué falla, a quién, desde cuándo, dónde, cuántos y si se reproduce. "La red no va" no sirve; "tres puestos del aula 12 no obtienen dirección IP desde las 9:05, los demás sí, se reproduce al reiniciar y sus puertos están en la VLAN 1 mientras el resto está en la 30" sí sirve. Debe ser observable, acotado, reproducible y cuantificado: la mitad de las incidencias se resuelven al escribirlo.

### 2.2 Análisis de causas

**Espina de pescado (Ishikawa).** Efecto a la derecha y seis ramas: mano de obra (cambio sin documentar), método (procedimiento, etiquetado, inventario), máquina (conmutador, router, fuente, SAI), material (latiguillo, cable, conector), medición (umbrales mal puestos, alertas silenciadas) y medio (obra, humedad, temperatura, interferencia). Abre hipótesis donde no se miraba.

**Cinco porqués.** Convergente, sobre una sola línea. Un aula pierde la red cada mañana: ¿por qué? El conmutador reinicia. ¿Por qué? El SAI se queda sin batería. ¿Por qué? La batería está agotada. ¿Por qué no se ha cambiado? Nadie revisa la autonomía. ¿Por qué? El plan de mantenimiento no incluye los SAI. La acción no es cambiar el conmutador, es incluir la prueba de autonomía en el plan.

### 2.3 Diseño de pruebas

Toda prueba lleva hipótesis falsable, acción mínima y resultado esperado tanto si es cierta como si es falsa. Se cambia una variable por vez. Ejemplo: hipótesis "el puerto está en otra VLAN", prueba "consultar su configuración", cierto si la VLAN difiere de la del resto, falso si coincide y se sigue con el DHCP.

Orden de intrusión: primero mirar (consultar configuración, contadores, captura en espejo), después tocar (desconectar, reiniciar, cambiar configuración), siempre con plan de reversión.

### 2.4 Intervención, comprobación y documentación

Se prepara la ventana, el repuesto y la autorización, se aplica el cambio mínimo y se comprueba en dos tiempos: la prueba que falló debe pasar, y hay que hacer una de no regresión sobre el resto de puertos, la VLAN de voz y los demás servicios del equipo. Un cambio que arregla el síntoma y rompe otra cosa no es una resolución.

El cierre documentado lleva síntoma del usuario, causa demostrada, prueba que la demuestra, acción, tiempo, piezas y medida preventiva. Así la incidencia pasa a ser material de formación.

### 2.5 Interpretar la documentación y estimar la magnitud

Se trata de dos documentos y una estimación. Se empieza por la documentación **del proyecto** (qué se instaló: planos, esquemas, direccionamiento, inventario) y la **técnica de los equipos** (manuales, hojas de datos, notas de versión):

| Documento | Qué se busca | Para qué |
| --- | --- | --- |
| Plano y esquema lógico | Dónde está el equipo y qué lo une al resto | Acotar el alcance |
| Plan de direccionamiento | VLAN, subred y pasarela de los afectados | Descubrir un error de configuración |
| Inventario | Modelo, versión y garantía | Saber si hay actualización o cobertura |
| Manual del equipo | Significado de los LED y los códigos de error | Diagnosticar sin tocar |
| Notas de versión | Defectos conocidos | Reconocer un fallo ya documentado |

**Estimar la magnitud.** Antes de actuar hay que saber cuánto duele: usuarios afectados, procesos críticos parados, coste por hora y duración probable.

```text
Magnitud economica = usuarios afectados x coste por hora de cada uno x horas de parada
Ejemplo: 40 puestos x 25 euros/hora x 2 horas = 2 000 euros de productividad perdida
```

Con ese número se decide la actuación: si son 2 000 euros por una incidencia de dos horas, se justifica enviar a un técnico de inmediato; si es un puesto con una hora de espera, se atiende en su turno.

### 2.6 Procedimientos del fabricante

Se trata de usar los procedimientos del fabricante para hallar la causa de un mal funcionamiento. El orden habitual:

1. **Leer el estado del equipo**: LED, pantalla, códigos de error, y compararlos con la tabla del manual.
2. **Obtener los registros y el volcado de diagnóstico** que el fabricante exige para soporte (por ejemplo, el volcado de soporte técnico de la consola del equipo).
3. **Comprobar versión y notas de versión**: ¿es un defecto conocido de esa versión?
4. **Probar los modos de diagnóstico** del equipo (autotest de arranque, prueba de puerto, prueba de memoria).
5. **Abrir un caso con el fabricante** con número de serie, versión, síntoma, registros y qué se ha probado.
6. **Sustitución (RMA)** si el equipo está en garantía: se confirma el número de serie, el modo de envío (con o sin adelanto del reemplazo) y se guarda la configuración para restaurarla.

| Elemento | Qué anotar | Por qué |
| --- | --- | --- |
| Número de serie y modelo | El de la etiqueta y el de la consola | Identifica la garantía |
| Versión instalada | Firmware y módulos | Defectos conocidos |
| Registros y volcado | Antes y después de reproducir | Que el soporte vea el fallo |
| Qué se ha probado | Cada prueba y su resultado | Evitar repetir pasos |
| Contrato de soporte | Tiempo de respuesta y de sustitución | Planificar la espera |

Un caso abierto sin número de serie ni registros se queda parado: el fabricante lo primero que pide es lo que faltaba.

## 3. Herramientas hardware

> **Véase también.** La certificación del cableado, sus parámetros y límites se desarrollan en el apartado 4 de la unidad «Ejecución de proyectos». [Ejecución de proyectos, resumen técnico](../../02_Implantacion/02_Ejecucion_Proyectos/Ejecucion_Tecnico.md).

### 3.1 Polímetro

Mide tensión continua y alterna, corriente, resistencia y continuidad. En redes sirve para tres cosas: continuidad de un conductor (zumbador, menos de un ohmio), cortocircuito entre pares (no debe pitar entre hilos distintos) y comprobación de alimentación. Para PoE se mide continua en los pares de alimentación: 48 voltios nominales, margen de 44 a 57. Para un SAI, alterna, unos 230 voltios.

Detecta par cortado, corto entre pares, puerto PoE sin tensión, batería agotada y tensión parásita en una pantalla mal conectada. No ve nada de alta frecuencia: ni diafonía ni atenuación. Un cable con continuidad perfecta puede no servir para gigabit.

### 3.2 Comprobador de cableado

Comprueba el mapa de conductores: qué pin de un extremo llega a qué pin del otro, más continuidad y cortos. Con terminador remoto lo hace una sola persona y muestra correcto, abierto, cruzado, invertido o en corto recorriendo los ocho hilos.

Detecta par abierto por crimpado deficiente, hilos invertidos, pares cruzados y latiguillo del tipo equivocado. Su límite es que da veredicto de continuidad, no de calidad: un par abierto en los pines 4 y 5 puede pasar y es justo el que necesita el gigabit.

### 3.3 Generador y localizador de tonos

El generador inyecta una señal audible en un par y la sonda inductiva la convierte en sonido al acercarse al cable. Se conecta en la roseta, se recorre el panel hasta oír el tono más fuerte y se etiqueta el puerto. No detecta averías: evita errores, y su valor es no desconectar el puerto equivocado en un armario con doscientos latiguillos iguales. No se inyecta en un cable activo sin comprobar el modelo, y nunca en fibra.

### 3.4 Reflectómetro TDR

Envía un pulso y mide el tiempo del eco. Con la velocidad de propagación del cobre, entre el 60 y el 80 por ciento de la de la luz (el factor que el aparato pide como NVP), la distancia es velocidad por tiempo dividido entre dos. Un pico al final marca el extremo del cable y un pico intermedio, un defecto; el circuito abierto devuelve eco en fase y el cortocircuito invertido.

Localiza roturas y cortos a una distancia concreta, mide longitud real y detecta empalmes y conectores mal montados. No mide comportamiento en frecuencia: dice "hay una rotura a 23 metros", no "este enlace no aguanta un gigabit".

### 3.5 Certificador

Mide los parámetros de **UNE-EN 50346** (ensayo del cableado instalado) contra los límites de **UNE-EN 50173-1:2018** o **ISO/IEC 11801-1:2017**: longitud, atenuación de inserción, NEXT y su suma de potencias, ACR-F, ACR, pérdida de retorno, retardo, skew, resistencia del bucle y mapa de cableado. Se elige norma y clase, se conectan unidad principal y remota, y en segundos da apto o no apto con margen por parámetro; el informe se guarda por enlace.

Detecta lo que no rompe el enlace: NEXT fuera de margen por destrenzado excesivo, pérdida de retorno alta por crimpado, longitud por encima de los 90 metros del enlace permanente. Exige calibración y referencia correctas; mal referenciado da veredictos falsos.

| Herramienta | Magnitud | No puede confirmar |
| --- | --- | --- |
| Polímetro | Tensión, resistencia, continuidad | Diafonía, atenuación |
| Comprobador | Mapa de pines | Parámetros de norma |
| Tonos | Identificación de cable | Ninguna avería |
| TDR | Distancia por eco | Calidad en frecuencia |
| Certificador | Parámetros de norma | Errores de configuración |

## 4. Herramientas software

### 4.1 Monitor de red

Sondea equipos y guarda series temporales: ICMP para disponibilidad, SNMP en el 161 y avisos en el 162, syslog en el 514, NetFlow o sFlow para tráfico por conversación. Se configura con intervalo de un minuto en equipo crítico y cinco en el resto, umbrales y escaladas. Libres: Zabbix, LibreNMS, Nagios, Cacti; comerciales: PRTG y SolarWinds.

Detecta caídas, saturación, errores de interfaz, puertos que suben y bajan, temperatura y consumo PoE. Convierte una incidencia en un aviso y aporta la serie histórica. Su límite: ve contadores, no el contenido del paquete.

### 4.2 Analizador de protocolos

Captura y decodifica tramas capa por capa. Wireshark es la referencia; tcpdump y tshark sirven en servidores sin entorno gráfico. En un conmutador se captura con puerto espejo (SPAN) o con derivador pasivo (TAP).

```bash
tcpdump -i eth0 -nn -s 0 -w captura.pcap 'tcp port 443 and host 192.168.10.20'
```

El filtro de captura, sintaxis de Berkeley, se aplica antes de guardar; el de visualización, después:

```text
ip.addr == 192.168.10.24 && icmp
tcp.analysis.retransmission
tcp.analysis.zero_window
bootp || dhcp
arp.duplicate-address-detected
dns.flags.rcode != 0
tcp.flags.syn == 1 && tcp.flags.ack == 0
```

Se busca: retransmisiones y ACK duplicados (pérdida o latencia), ventana cero (receptor saturado), ICMP de destino inalcanzable, DHCP sin respuesta, ARP duplicado, error de DNS y saludos TCP sin contestar (filtrado o servicio parado). Límites: el tráfico cifrado se ve como bytes y un punto de captura mal situado solo enseña parte del camino.

### 4.3 ping

Envía ICMP tipo 8 (echo request) y espera el tipo 0 (echo reply).

```bash
ping -n 4 -l 1472 -f 192.168.10.1     # Windows
ping -c 4 -s 1472 -M do 192.168.10.1  # Linux
```

- Respuesta con tiempo y TTL: hay conectividad en ambos sentidos.
- Request timed out o pérdida del cien por cien: silencio, host apagado, ruta ausente o ICMP filtrado.
- Destination host unreachable (ICMP 3, código 1): el router no encuentra el host o falla el ARP local.
- Destination net unreachable (3, 0): no hay ruta hacia esa red.
- TTL expired in transit (11, 0): bucle de enrutamiento.
- Fragmentation needed (3, 4): la MTU del camino es menor.
- Puerto inalcanzable (3, 3, en UDP): el host responde pero no hay servicio.

Dos lecturas finas. El TTL estima saltos: si el origen usa 64 y llega 61, hay 3 routers. Y el tamaño: 1 472 más 8 de ICMP más 20 de IP son 1 500, la MTU de Ethernet, de ahí la prueba sin fragmentar.

La escalera de ping va de dentro hacia fuera y cada peldaño descarta un tramo: 127.0.0.1 (pila del equipo), dirección propia (tarjeta y cable), puerta de enlace (red local), dirección pública (salida y traducción) y nombre (DNS).

### 4.4 traceroute

Descubre el camino salto a salto con el TTL creciente y recoge los ICMP de tiempo excedido. Linux usa UDP a puertos altos por defecto, con opción de ICMP o TCP; Windows usa ICMP de eco.

```bash
traceroute -n -m 20 -I 8.8.8.8   # Linux
tracert -d -h 20 8.8.8.8         # Windows
```

Cada línea es un salto con tres tiempos. Los asteriscos significan que ese salto no contesta, y eso no implica fallo: muchos routers filtran ICMP. El fallo está donde las respuestas dejan de aparecer y no vuelven. La ruta puede ser asimétrica, y entonces el rastro de ida no explica los tiempos de vuelta.

### 4.5 arp

Relaciona direcciones IP con direcciones físicas y responde a la pregunta de si esa IP es de verdad ese equipo.

```bash
arp -a                            # tabla completa
arp -d 192.168.10.50              # borrar entrada
ip neigh show                     # Linux
arping -D -I eth0 192.168.10.50   # detectar IP duplicada
```

Entradas incompletas o en estado FAILED significan que nadie contestó al ARP: equipo apagado o en otra VLAN. Una MAC que cambia de dirección delata un conflicto. La MAC de la puerta de enlace debe ser la del router, no la de un puesto.

### 4.6 netstat y ss

Lista conexiones, puertos a la escucha y estadísticas, y en Windows relaciona cada conexión con su proceso.

```bash
netstat -ano                     # Windows, con numero de proceso
netstat -ano | findstr :445      # quien ocupa el 445
ss -tulpn                        # Linux, a la escucha con proceso
```

Estados: LISTEN (si falta, el servicio no está levantado), ESTABLISHED, SYN_SENT (saludo sin respuesta, cortafuegos o destino caído), TIME_WAIT (muchas indican rotación alta) y CLOSE_WAIT (el otro cerró y la aplicación no, fuga del programa).

### 4.7 Descubrir los nodos intermedios

Se trata de descubrir los nodos de red por los que pasa el tráfico con aplicaciones específicas. Tres escenarios y sus herramientas:

| Qué se descubre | Herramienta | Orden |
| --- | --- | --- |
| El camino a un destino, salto a salto | traceroute o tracert | `traceroute -n 8.8.8.8` |
| El camino con estadísticas de pérdida por salto | mtr, pathping | `mtr -rwc 100 8.8.8.8`, `pathping 8.8.8.8` |
| Los equipos de una red local | nmap, arp-scan | `nmap -sn 192.168.10.0/24`, `arp-scan -l` |
| Los vecinos directos de un equipo de red | LLDP o CDP | `show lldp neighbors`, `show cdp neighbors` |
| Los equipos que pasan por un conmutador | Tabla MAC | `show mac address-table` |

```text
$ mtr -rwc 100 8.8.8.8
HOST: pc12                 Loss%   Snt   Last   Avg  Best  Wrst
  1. 192.168.10.1            0.0   100    0.4   0.5   0.3   1.2
  2. 10.10.0.1               0.0   100    2.1   2.3   1.9   5.0
  3. 203.0.113.1            31.0   100   11.0  12.2  10.5  80.1
  4. 198.51.100.9           30.0   100   13.0  14.0  12.0  95.0
  5. 8.8.8.8                30.0   100   15.0  16.2  14.1  99.0
```

**Lectura.** La pérdida aparece en el salto 3 y se mantiene en los siguientes (30 por ciento): el problema empieza en el salto 3 o en el enlace hacia él, ya fuera de la red propia (los saltos 1 y 2 están limpios). Si solo el salto 3 mostrara pérdida y los siguientes no, sería un router que limita las respuestas ICMP y no una avería. Es la regla: **la pérdida real se propaga a los saltos siguientes**.

El escaneo de red (`nmap`) **solo se hace en redes propias o con autorización**: un escaneo no autorizado puede ser delito y dispara alarmas.

## 5. El árbol de decisión

### 5.1 Procedimiento de diagnóstico en siete pasos

1. **Confirmar y acotar el síntoma.** Quién, qué, desde cuándo, a cuántos afecta y si se reproduce.
2. **Situar capa y alcance.** Sin enlace es capa uno; con enlace y sin dirección, capa tres; con dirección y sin servicio, transporte o aplicación. Un puesto, un aula, una planta o toda la sede.
3. **Enunciar hipótesis** ordenadas por probabilidad y por coste de comprobación.
4. **Elegir la prueba mínima** que separe la primera hipótesis, con el resultado esperado escrito antes.
5. **Ejecutar y registrar la medida.** Si la prueba no distingue, está mal elegida.
6. **Corregir lo mínimo y verificar** con la prueba que falló, más una de no regresión.
7. **Documentar y cerrar**, con causa demostrada, prevención y, si procede, apertura de un problema.

### 5.2 Tabla maestra

| Síntoma | Capa | Herramienta | Causa probable | Solución |
| --- | --- | --- | --- | --- |
| Sin enlace, led apagado | 1 | Comprobador, polímetro | Par abierto, crimpado malo, puerto muerto | Recrimpar, cambiar latiguillo o puerto |
| Hay enlace pero no hay IP | 3 | Captura DHCP, ipconfig | DHCP sin respuesta, VLAN errónea, sin repetidor | Corregir VLAN, añadir ayudante |
| Solo un puesto va lento | 1 y 4 | Certificador, captura, contadores | Par abierto, duplex desajustado, tarjeta a 100 | Recrimpar, fijar autonegociación |
| Todos pierden la red a la vez | 2 | Registros y monitor del conmutador | Bucle, tormenta de difusión, alimentación | Retirar latiguillo, STP y agregación |
| Ping a la puerta responde, a internet no | 3 y 4 | Ping por IP, traceroute, nslookup | Traducción, DNS caído, circuito | Probar IP externa, revisar DNS, escalar |
| Ping por IP sí, por nombre no | 7 | nslookup, captura DNS | DNS mal configurado o inalcanzable | Corregir servidor, abrir el 53 |
| Ping responde, aplicación no conecta | 4 y 7 | netstat, captura por puerto | Cortafuegos, servicio parado, otro puerto | Abrir regla, arrancar servicio |
| Host unreachable al ping | 3 | ping, arp -a | Sin ARP en la subred, host apagado | Revisar host, cable y VLAN |
| Dos equipos con la misma IP | 3 | arp -a, captura ARP | Fija duplicada o reserva mal hecha | Reservar por MAC |
| Wi-Fi conecta sin salida | 2 y 3 | Monitor del AP, ping al AP | VLAN de invitados, portal cautivo, DHCP | Revisar VLAN y política |
| Caídas intermitentes de un puerto | 1 | Contadores CRC y FCS, certificador | Cable dañado, interferencia, conector flojo | Certificar y recablear |
| Teléfono IP se reinicia solo | 1 | Monitor PoE, polímetro | Potencia insuficiente, cable largo | Repartir carga, PoE+, acortar cable |
| Conmutador inaccesible | 7 | ping, netstat, captura | VLAN de gestión, lista de acceso | Corregir VLAN y reglas |
| Correo lento y web rápida | 7 | Captura, monitor de ancho de banda | MTU y MSS, saturación de subida | Ajustar MSS, calidad de servicio |
| Pérdida del 30 por ciento a un destino | 3 y 4 | ping de 100 paquetes, mtr | Congestión, enlace degradado, duplex | Revisar uso y sustituir cable u óptica |

### 5.3 Avería local o avería del proveedor

```text
  [ puesto ] -- [ switch ] -- [ router ] -- [ proveedor ] -- [ internet ]
       |            |             |              |
     capa 1-3     capa 2        puerta        primer salto
                                 de enlace
       <---- red local ---->  <---- red de area extensa ---->
```

La frontera se cruza con tres comprobaciones. Primera, la **prueba de la puerta de enlace**: ping al router con máscara y puerta confirmadas, y comprobación en `arp -a` de que la MAC asociada es la del router. Segunda, la **prueba del primer salto**: traceroute al destino; si el primer salto externo no responde y el siguiente tampoco, el tramo contratado está caído. Tercera, **prueba desde el propio router**: si allí funciona el ping público y en los puestos no, el fallo está en la traducción o el filtrado.

| Puerta | Primer salto | Destino | Conclusión |
| --- | --- | --- | --- |
| Responde | Responde | Responde | Salida correcta: mirar DNS o aplicación |
| Responde | No responde | No responde | Fallo del proveedor: escalar con datos |
| Responde | Responde | No responde | Filtrado en el router o destino caído |
| No responde | No aplica | No aplica | Fallo local: cableado, VLAN o direccionamiento |

El caso del enunciado se resuelve así: si falla por dirección IP y también el nombre, el sospechoso es la salida; si por IP funciona y solo falla el nombre, el sospechoso es el DNS. Nunca se declara avería del proveedor sin probar por IP y sin mirar la tabla de rutas.

### 5.4 Tres casos resueltos

**Caso 1. Hay enlace pero no hay dirección IP.** Tres puestos del aula 12 muestran 169.254.18.7 y el resto navega. Hipótesis: el DHCP no contesta en esa VLAN o el puerto está en otra. Prueba: `ipconfig /all` confirma la autoconfiguración; una captura con filtro `bootp` muestra DISCOVER sin OFFER; `arp -a` no tiene la puerta; `show vlan brief` revela los puertos 14 a 16 en la VLAN 1 y el resto en la 30. Hallazgo: los latiguillos se movieron en una intervención anterior y quedaron en la VLAN por defecto, sin repetidor DHCP. Cierre: reasignar VLAN, verificar con `ipconfig /renew` y ping a la puerta, comprobar la navegación por nombre y documentar el error con acción preventiva de etiquetado.

**Caso 2. Solo un puesto va lento.** El puesto 214 tarda veinte segundos en abrir una carpeta; la tarjeta negocia a 100 megabits y marca errores. Hipótesis: par abierto, tarjeta degradada, puerto con errores o duplex desajustado. Prueba: el comprobador da los pares 1 a 3 correctos y abre el 7 y 8; el certificador lo confirma; el contador de FCS del puerto crece; una captura de dos minutos muestra retransmisiones. Hallazgo: crimpado con herramienta mal ajustada, sin contacto en el par 7 y 8; el gigabit necesita los cuatro pares y la negociación bajó a 100. Cierre: latiguillo certificado de categoría 6, negociación a 1 000 megabits y dúplex completo, y revisión del lote.

**Caso 3. Todos pierden la red a la vez.** Toda la planta pierde la conexión unos cuarenta segundos, varias veces al día, desde hace una semana, sin patrón horario. Hipótesis: bucle de capa dos, PoE, alimentación o enlace de subida. Prueba: los registros muestran cambios del árbol de expansión cada pocos minutos y tormentas de difusión en el puerto 24; el monitor dibuja picos; la captura en espejo muestra unidades del árbol duplicadas. Hallazgo: un segundo latiguillo entre los dos conmutadores "para redundar", sin agregación; el árbol bloqueaba uno y cada recálculo congelaba la red. Cierre: retirar el sobrante, configurar agregación, comprobar veinticuatro horas sin cambios de topología y abrir un problema para revisar el resto de armarios.

### 5.5 Qué entregar al operador para que actúe

Escalar a un operador sin datos hace perder horas. Un buen aviso lleva: identificación del cliente y del circuito, hora de inicio, síntoma, alcance, pruebas hechas (ping a la puerta de enlace y al primer salto, traceroute con la salida completa), confirmación de que el equipo propio funciona (el ping desde el router, las luces del equipo del operador) y datos de contacto con disponibilidad. Se pide número de incidencia y se anota la hora de apertura. Con esa evidencia, el operador no puede devolverte la pregunta de si es tu red.

| Dato | Ejemplo |
| --- | --- |
| Circuito y cliente | Fibra FTTO sede central, referencia del contrato |
| Inicio | 9:05, martes |
| Síntoma | Sin salida a Internet, el equipo del operador sin sincronía |
| Pruebas | Ping a la puerta responde; el primer salto del operador no responde; el router propio sin errores |
| Alcance | Toda la sede, 120 usuarios |
| Contacto | Responsable de sistemas, guardia fuera de horario |

## Perspectiva empresarial

Resolver incidencias es un servicio con coste y valor. Las cifras son ilustrativas.

### Cuánto cuesta una incidencia

El coste tiene tres partes: lo que cuesta el técnico, lo que cuesta la espera del usuario y lo que cuesta el riesgo para el negocio. La segunda suele ser la mayor.

```text
Incidencia de un puesto, 1 hora de espera, 25 euros/hora de coste del usuario, tecnico 35 euros/hora:
   tecnico 35 + espera 25 = 60 euros
Incidencia de 40 puestos, 2 horas:
   tecnico 70 + espera 40 x 25 x 2 = 2 000 -> 2 070 euros
```

La conclusión es que el tiempo de resolución se reduce con dinero bien gastado: formación, base de conocimiento, repuestos en armario, monitorización que avisa antes de que llame el usuario.

### Mesa de ayuda propia o externalizada

| Opción | Ventaja | Inconveniente |
| --- | --- | --- |
| Propia | Conoce el negocio y responde con rapidez | Coste fijo y cobertura limitada de horario |
| Externalizada | Cobertura amplia y coste variable por ticket | Conocimiento del negocio limitado, hace falta supervisar el SLA |
| Mixta | Primer nivel externo, segundo y tercero internos | Coordinación entre equipos |

El coste por ticket depende del nivel: un primer nivel con autoservicio y base de conocimiento resuelve a un coste muy inferior al de un especialista. Por eso el indicador **FCR** (resolución en primer contacto) es el más rentable de mejorar [orden de magnitud orientativo: el coste de un ticket de primer nivel es una fracción del de un especialista].

### SLA, penalizaciones y credibilidad

Un SLA con penalizaciones solo es creíble si se mide con datos que el cliente puede comprobar. Se pactan los **horarios cubiertos**, las **exclusiones** (causas del cliente, fuerza mayor, ventanas avisadas) y el **cálculo del tiempo**. Un proveedor que acepta un SLA que no puede medir lo pagará caro. Con el 95 por ciento de cumplimiento comprometido y un 90 por ciento real, el crédito suele aplicarse como descuento de la cuota mensual.

### Cumplimiento, registros y auditoría

La ISO/IEC 20000-1 y los esquemas de seguridad (ISO/IEC 27001, ENS) exigen registros trazables: quién abrió, quién resolvió, cuándo y con qué causa. Un ticket cerrado sin causa no sirve para estadísticas ni para auditoría, y los datos personales que contenga (nombres, correos, direcciones) están sujetos al RGPD y a la política de retención de la empresa.

### Qué enseña al negocio un informe de incidencias

Un informe mensual de una página con el volumen por categoría, el MTTR, el cumplimiento del SLA, las incidencias repetidas y los problemas abiertos con fecha. Y dos preguntas que dirección entiende: ¿cuánto nos cuesta la parada y qué estamos haciendo para que no se repita?

## Tablas de referencia rápida

| Tipo ICMP | Nombre | Uso |
| --- | --- | --- |
| 0 | Echo reply | Respuesta al ping |
| 3 | Destination unreachable | Códigos 0 red, 1 host, 3 puerto, 4 fragmentación |
| 5 | Redirect | Ruta subóptima |
| 8 | Echo request | Petición de ping |
| 11 | Time exceeded | Base de traceroute |

Puertos habituales: 53 DNS, 67 y 68 DHCP, 123 NTP, 161 y 162 SNMP, 389 LDAP, 443 HTTPS, 514 syslog, 3389 RDP.

## Cifras que hay que saber de memoria

- MTTR, MTBF y disponibilidad: fórmulas en la tabla de indicadores.
- MTU de Ethernet: 1 500 bytes; datos útiles en ping: 1 472; cabeceras: 20 de IP y 8 de ICMP.
- TTL inicial: 64 en Linux, 128 en Windows, 255 en equipos de red.
- PoE: 48 voltios nominales, margen de 44 a 57; 802.3af 15,4 W; 802.3at 30 W; 802.3bt hasta 90 W.
- Enlace permanente: 90 metros; canal completo: 100 metros con hasta 4 conectores.
- Ishikawa: seis familias. Cinco porqués: cinco preguntas.
- ISO/IEC 20000-1: edición de 2018, certificable.
- Prioridad: matriz de impacto por urgencia, de P1 a P4.
- Magnitud económica: usuarios por coste hora por horas de parada.
- SLA, OLA y contrato de apoyo: cliente, interno y proveedor.
- Reloj del SLA: se pausa por el usuario, no por el proveedor ni el fabricante.
- Pareto de incidencias: pocas categorías explican la mayoría de los tickets.
- Pérdida real en mtr: se propaga a los saltos siguientes.

## Procedimientos paso a paso

**Diagnosticar.** Los siete pasos del apartado 5.1, con el resultado esperado anotado antes de cada prueba.

**Capturar en un puerto conmutado.** Localizar el puerto con `show mac address-table`; configurar espejo de origen ese puerto y destino el del analizador; capturar con filtro; reproducir el fallo; guardar con fecha y equipo; analizar y retirar el espejo.

**Comprobar un latiguillo.** Mapa con terminador remoto; correspondencia uno a uno de los ocho hilos; repetir moviéndolo para detectar intermitencias; certificar si el enlace debe pasar de 100 megabits; etiquetar y registrar.

**Cerrar.** Confirmar con el usuario; repetir la prueba que falló y una de no regresión; clasificar causa y anotar acción y tiempo; registrar piezas y cambios; abrir problema si procede; cerrar.

## Errores típicos

1. **Prioridad igual a gravedad.** Falso: la prioridad sale de impacto y urgencia.
2. **El escalado jerárquico es para lo técnicamente difícil.** No: para eso está el funcional; el jerárquico aporta autoridad o presupuesto.
3. **El MTBF mide el tiempo de reparación.** Falso: eso es el MTTR.
4. **El comprobador certifica el enlace.** Falso: comprueba continuidad y mapa de pines.
5. **El TDR mide la diafonía.** Falso: mide distancias por reflexión.
6. **Si el ping no responde, el equipo está apagado.** Falso: puede ser filtrado de ICMP.
7. **Los asteriscos del traceroute marcan el salto roto.** Falso: marcan un salto que no contesta.
8. **Un cable con continuidad sirve para gigabit.** Falso: hacen falta los cuatro pares y cumplir NEXT y pérdida de retorno.
9. **Cerrar la incidencia es cerrar el problema.** Falso: uno restablece el servicio y el otro elimina la causa.
10. **Si el salto 3 de un mtr muestra pérdida, el salto 3 está roto.** Solo si la pérdida se propaga a los siguientes; si desaparece, es limitación de ICMP.
11. **El reloj del SLA siempre corre.** Se pausa si espera al usuario o una ventana del cliente, no si espera al fabricante.
12. **Un SLA con el cliente se cumple con un OLA más relajado.** El OLA debe ser al menos tan exigente como el SLA.
13. **Subir la prioridad porque el usuario insiste.** La prioridad sale de impacto y urgencia; se reclasifica solo por hechos.
14. **Un error conocido es un problema resuelto.** Tiene solución temporal; la causa sigue ahí.
15. **Abrir un caso con el fabricante sin número de serie.** Se parará: es lo primero que piden.
16. **El responsable de un incidente grave es quien repara.** Coordina y comunica; los técnicos reparan.

## Glosario de la unidad

**Acuerdo de nivel de servicio (SLA).** Compromiso documentado de tiempos por prioridad.
**Certificador.** Instrumento que mide los parámetros de norma y emite veredicto.
**Cinco porqués.** Preguntas encadenadas hasta la causa accionable.
**Diafonía (NEXT).** Interferencia de un par sobre otro en el extremo cercano.
**Error conocido.** Problema diagnosticado con solución temporal documentada.
**Escalado funcional.** Ascenso a un nivel con más conocimiento técnico.
**Espina de pescado.** Diagrama de causa y efecto con seis familias.
**Incidencia.** Interrupción o reducción no planificada de un servicio.
**Mesa de ayuda.** Punto único de contacto entre usuarios y servicio de TI.
**MTBF.** Tiempo medio entre fallos.
**MTTR.** Tiempo medio de resolución.
**Petición de servicio.** Solicitud prevista en el catálogo.
**Prioridad.** Orden de atención calculado con impacto y urgencia.
**Problema.** Causa de una o varias incidencias.
**Reflectómetro (TDR).** Instrumento que localiza defectos por el eco de un pulso.
**Base de conocimiento.** Repositorio de soluciones reutilizables de la mesa de ayuda.
**FCR.** Resolución en primer contacto.
**Incidente grave.** Incidencia de máxima prioridad sobre un servicio crítico, con procedimiento propio.
**Matriz de priorización.** Cruce de impacto y urgencia que da la prioridad.
**mtr.** Herramienta que combina ping y traceroute con estadísticas por salto.
**OLA.** Acuerdo de nivel operativo entre equipos internos.
**Revisión posterior.** Análisis sin culpables de un incidente grave.
**RMA.** Autorización de devolución y sustitución de un equipo en garantía.
**Runbook.** Lista de actuaciones ante cada alarma, para no improvisar.
**Solución temporal.** Medida que restablece el servicio sin eliminar la causa.

## Para profundizar

- [RFC 792, Internet Control Message Protocol](https://www.rfc-editor.org/rfc/rfc792.html), documento original de ICMP.
- [RFC 2151, A Primer on Internet and TCP/IP Tools](https://www.rfc-editor.org/rfc/rfc2151.html), guía clásica de ping y traceroute.
- [IANA, parámetros de ICMP](https://www.iana.org/assignments/icmp-parameters/icmp-parameters.xhtml), registro oficial de tipos y códigos.
- [Documentación de Wireshark](https://www.wireshark.org/docs/), manual y filtros.
- [Página de manual de traceroute](https://man7.org/linux/man-pages/man8/traceroute.8.html), opciones y funcionamiento.
- [ISO/IEC 20000-1:2018](https://www.iso.org/standard/70636.html), ficha oficial de la norma.
- [Documentación de mtr](https://github.com/traviscross/mtr), herramienta de diagnóstico de ruta.
- [Documentación de Nmap](https://nmap.org/docs.html), descubrimiento de red.
