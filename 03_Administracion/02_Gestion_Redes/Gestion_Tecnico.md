---
title: "Gestión de redes telemáticas"
description: "Resumen técnico de la unidad Gestión de redes."
section: administracion
unit: gestion
kind: tecnico
order: 72
tags:
  - redes
  - gestion
  - tecnico
  - snmp
  - rmon
---

# Gestión de redes · Resumen técnico

> **Alcance.** Ocho secciones en el orden de estudio, más tablas, cifras, procedimientos del caso, trampas, glosario y fuentes.

## 1. Ciclo de vida de las redes

La red se administra como un servicio con vida propia. El modelo **PDIOO** reparte esa vida en cinco fases; la sexta, la retirada, se planifica igual aunque no figure en el programa de referencia.

| Fase | Qué se hace | Entregable |
| --- | --- | --- |
| Planificar | Requisitos, inventario, riesgos, coste | Caso de negocio |
| Diseñar | Topología, direccionamiento, redundancia | Documento de diseño |
| Implantar | Instalación, configuración, pruebas | Red en servicio |
| Operar | Vigilancia, incidencias, cambios, copias | Informes y registro |
| Optimizar | Tendencia, QoS, ampliaciones | Informe de capacidad |

Cisco añade **Prepare** al principio y lo llama PPDIOO: estudiar la red existente, el riesgo y la financiación antes de planificar. Evita diseñar sobre suposiciones.

La relación con la mejora continua es directa: planificar y diseñar son el *plan* del ciclo PDCA; implantar es el *do*; operar es el *check*, porque medir es verificar; y optimizar es el *act*. UNE-EN ISO 9001:2015 recoge ese ciclo para la calidad e ISO/IEC 20000 lo aplica a los servicios de TI, con fases de estrategia, diseño, transición, operación y mejora continua. Sin datos de operación no hay optimización: el ciclo se queda en apagar fuegos.

La **retirada** cierra el ciclo: apagado ordenado, migración de usuarios, borrado seguro de configuración y datos, baja de inventario. Un equipo sin soporte del fabricante sigue funcionando pero ya no recibe parches, y eso es deuda de seguridad.

## 2. Administración de redes

Los equipos que se administran aquí (conmutadores, routers, servidores y SAIs) se describen en [Equipos y servicios de red · Equipos de red y servicios](../01_Equipos_Servicios/README.md).

### 2.1 El NOC

El **NOC** (Network Operations Center) opera la red en continuo. Funciones: supervisión con alarmas priorizadas, correlación de alarmas derivadas de una misma causa, diagnóstico de primer nivel, gestión de incidencias, coordinación con operador y fabricante, e informes de disponibilidad. Se organiza en niveles: N1 atiende y ejecuta guiones, N2 diagnostica con acceso a los equipos, N3 es el especialista o el fabricante. Indicadores: MTTR, MTBF, disponibilidad por servicio y tiempo de reconocimiento de alarma.

Las áreas de administración se resumen en **FCAPS**: fallos, configuración, contabilidad, prestaciones y seguridad. El programa de referencia las reorganiza en configuración, disponibilidad, capacidad, seguridad e incidencias.

### 2.2 Configuración y cambios

La **línea base** (baseline) dice qué equipos hay, con qué firmware, con qué configuración y cómo se conectan. Prácticas mínimas: inventario con IP de gestión y serie; copia automática de configuraciones (RANCID, Oxidized); plantillas por rol; control de cambios con motivo, ventana y reversión; y NTP, porque sin hora común los logs no se pueden ordenar.

### 2.3 Disponibilidad y capacidad

```text
Disponibilidad = MTBF / (MTBF + MTTR)
```

Con 1 000 horas de servicio y 1 de parada: 1 000/1 001, el 99,9 por ciento. La **capacidad** responde a qué se consume, cuánto crecerá y cuándo ampliar; se apoya en la línea base, la tendencia y umbrales de aviso.

### 2.4 Seguridad

**ISO/IEC 27001:2022**, adoptada como **UNE-EN ISO/IEC 27001:2023**, fija los requisitos del sistema de gestión: análisis de riesgos, declaración de aplicabilidad y auditoría. **ISO/IEC 27002:2022** es la guía de controles: 93 controles en cuatro temas (organizativos, personas, físicos y tecnológicos). Los de red: 8.20 seguridad de redes, 8.21 servicios de red, 8.22 segregación, 8.23 filtrado web, 8.24 criptografía.

**El control 10.6 que cita el programa de referencia.** El programa de referencia se refiere a la edición de 2005 de la ISO/IEC 27002, donde el apartado 10.6 se titula **gestión de la seguridad de las redes**. Tiene dos controles, que hoy aparecen repartidos en la edición de 2022:

| Edición de 2005 | Objetivo | Edición de 2022 |
| --- | --- | --- |
| 10.6.1 Controles de red | Proteger la información en las redes y la infraestructura que las soporta: separar la gestión, proteger los datos que cruzan redes públicas, registrar | 8.20 Seguridad de redes |
| 10.6.2 Seguridad de los servicios de red | Identificar, en los acuerdos con el proveedor, las características de seguridad, los niveles de servicio y los requisitos de gestión | 8.21 Seguridad de servicios de red |
| 11.4.5 Segregación en las redes | Separar grupos de servicios, usuarios y sistemas | 8.22 Segregación de redes |

Los objetivos de control llevan a actividades concretas: separar la red de gestión; cifrar la gestión (SSH, TLS, SNMPv3); registrar y revisar el acceso; incluir en el contrato con el operador cláusulas de seguridad y de nivel de servicio; segmentar con VLAN y filtrado; y revisar periódicamente las reglas. [Numeración de la edición de 2005 según el texto del programa de referencia; comprobar la tabla de correspondencia oficial de ISO antes de citar.]

**Buenas prácticas básicas.** Mínimo privilegio en cuentas de administración, autenticación centralizada (RADIUS o TACACS+) con registro de comandos, gestión fuera de banda, copias de configuración cifradas, parches con calendario y revisión de reglas y cuentas al menos una vez al año.

Herramientas que no hay que confundir:

- **NIDS**: Snort y Suricata. Escuchan el tráfico, comparan con firmas y alertan; un NIPS bloquea.
- **HIDS**: vigila el propio servidor (ficheros, procesos, logs).
- **Escáner de vulnerabilidades**: **Nessus** y OpenVAS. No escuchan tráfico: se conectan a los equipos y comprueban parches y servicios. El programa de referencia los cita junto a los NIDS, pero son otra cosa.
- **SIEM**: centraliza y correlaciona eventos de toda la infraestructura.

### 2.5 Incidencias

ITIL e ISO/IEC 20000 distinguen **incidente** (se restaura el servicio), **problema** (causa raíz) y **cambio** (modificación planificada con petición o RFC). Cada incidencia lleva severidad, impacto, propietario y estado; el cierre exige causa y acción. Se desarrolla en [Resolución de incidencias](../03_Incidencias/README.md).

### 2.6 Objetivos y actividades de cada área

El programa de referencia pide explicar los objetivos y enumerar las actividades de cada área de administración:

| Área | Objetivo | Actividades |
| --- | --- | --- |
| Configuración | Que cada equipo tenga la configuración aprobada y que todo cambio quede registrado | Inventario, copias automáticas, plantillas por rol, comparación de configuraciones, control de cambios, retirada de equipos |
| Disponibilidad | Que los servicios estén disponibles según el SLA | Monitorización, redundancia, pruebas de conmutación, análisis de caídas y de causa raíz, informes de disponibilidad |
| Capacidad | Que la red soporte la demanda actual y la prevista | Medir utilización, construir la línea base, analizar tendencias, planificar ampliaciones, dimensionar enlaces y equipos |
| Seguridad | Garantizar la disponibilidad, la integridad y la confidencialidad de la información | Gestión de cuentas y accesos, parches, filtrado y segmentación, registro y revisión de logs, detección de intrusiones, auditoría |
| Incidencias | Restaurar el servicio cuanto antes y evitar que se repita | Registro, clasificación, diagnóstico, escalado, resolución, cierre y análisis de problemas |

La **seguridad de la información** se define con tres propiedades: **confidencialidad** (solo accede quien debe), **integridad** (los datos no se alteran sin autorización) y **disponibilidad** (están cuando se necesitan). La gestión de la seguridad busca equilibrar las tres.

### 2.7 Herramientas comerciales y de código abierto

| Uso | Código abierto | Comercial | Qué decide |
| --- | --- | --- | --- |
| Inventario y configuración | RANCID, Oxidized, NetBox, Ansible | SolarWinds NCM, Cisco DNA Center | Número de equipos y fabricantes distintos |
| Monitorización | Nagios, Zabbix, LibreNMS, Prometheus con Grafana | PRTG, SolarWinds NPM, Datadog | Soporte, número de sensores y licencias |
| Detección de intrusiones | Snort, Suricata, Zeek, Security Onion | Palo Alto, Cisco Secure IPS | Capacidad de inspección y soporte |
| Escaneo de vulnerabilidades | OpenVAS | Nessus Professional, Qualys | Cobertura y cumplimiento |
| Registros y SIEM | rsyslog, Graylog, ELK | Splunk, Microsoft Sentinel | Volumen de datos y coste por GB |

Los productos abiertos no cuestan licencia, pero exigen tiempo de instalación, ajuste y mantenimiento. Los comerciales incluyen soporte y suelen cobrar por equipo, sensor o volumen de datos. La decisión se toma por coste total de propiedad, no por precio de licencia.

## 3. Protocolos de gestión de red

### 3.1 CMISE y CMIP

El modelo OSI define **CMISE** como servicio y **CMIP** como protocolo (ISO/IEC 9595 e ISO/IEC 9596), con gestión orientada a objetos descritos en GDMO (ISO/IEC 10165-4) y las cinco áreas FCAPS. Era superior técnicamente: operaciones con ámbito y filtro, notificaciones confirmadas y modelo formal de objetos. Perdió por peso: exigía la pila OSI completa, era caro y llegó tarde, con TCP/IP ya dominante. Sobrevive en redes de operador. Su valor aquí es conceptual: de ahí vienen FCAPS y el enfoque de objetos de las MIB.

### 3.2 SNMP: gestor, agente y MIB

Tres piezas. El **gestor** consulta y almacena. El **agente** corre en el equipo gestionado y responde en el puerto **161 UDP**. La **MIB** es el árbol de objetos del agente, escrito en SMIv2 (RFC 2578 y siguientes), donde cada objeto tiene nombre, OID, tipo y permiso. El transporte es UDP con codificación BER. Dos modos: **sondeo** cada cierto tiempo, normalmente 5 minutos, y **notificación**, en la que el agente envía un trap al **162 UDP**.

| Criterio | CMIP | SNMP |
| --- | --- | --- |
| Pila | OSI completa | UDP sobre IP |
| Modelo | Orientado a objetos | Variables y tablas |
| Coste | Alto | Bajo |
| Uso actual | Redes de operador | Universal |

## 4. SNMP en detalle

### 4.1 El árbol de OID

```text
iso(1)
 +-- org(3)
      +-- dod(6)
           +-- internet(1)
                +-- mgmt(2)             -> 1.3.6.1.2
                |    +-- mib-2(1)       -> 1.3.6.1.2.1
                |         +-- system(1), interfaces(2)
                |         +-- ip(4), tcp(6), udp(7)
                |         +-- rmon(16)
                +-- private(4)          -> 1.3.6.1.4
                     +-- enterprises(1) -> 1.3.6.1.4.1
```

| Objeto | OID | Uso |
| --- | --- | --- |
| sysDescr | 1.3.6.1.2.1.1.1.0 | Modelo y versión |
| sysUpTime | 1.3.6.1.2.1.1.3.0 | Tiempo encendido |
| sysName | 1.3.6.1.2.1.1.5.0 | Nombre |
| ifDescr | 1.3.6.1.2.1.2.2.1.2 | Nombre de interfaz |
| ifSpeed | 1.3.6.1.2.1.2.2.1.5 | Velocidad en b/s |
| ifOperStatus | 1.3.6.1.2.1.2.2.1.8 | 1 arriba, 2 abajo |
| ifInOctets | 1.3.6.1.2.1.2.2.1.10 | Bytes recibidos |
| ifOutOctets | 1.3.6.1.2.1.2.2.1.16 | Bytes enviados |
| ifHCInOctets | 1.3.6.1.2.1.31.1.1.1.6 | Contador de 64 bits |

La `.0` final es la instancia: única en objetos simples, índice de fila en tablas.

### 4.2 PDUs

| PDU | Función | Desde |
| --- | --- | --- |
| GET | Pide un objeto | v1 |
| GETNEXT | Pide el siguiente del árbol | v1 |
| RESPONSE | Respuesta del agente | v1 |
| SET | Escribe un valor | v1 |
| TRAP | Notificación sin confirmar | v1 |
| GETBULK | Varios objetos por petición | v2c |
| INFORM | Notificación confirmada | v2c |

`GETNEXT` es la base del recorrido: una tabla se lee pidiendo el objeto siguiente hasta salir de la rama. `GETBULK` añade un parámetro de repeticiones y reduce los paquetes de forma drástica.

### 4.3 Versiones

| Versión | Norma | Seguridad | Novedades |
| --- | --- | --- | --- |
| v1 | RFC 1157 (1990) | Comunidad en claro | Modelo básico |
| v2c | RFC 1901 a 1908 (1996) | Comunidad en claro | GETBULK, INFORM, 64 bits |
| v3 | RFC 3411 a 3418 (2002) | USM y VACM | Autenticación, cifrado, vistas |

**SNMPv3** no añade PDUs: cambia la envoltura. Usa un identificador de motor por agente, el modelo **USM** para autenticar (MD5 o SHA) y cifrar (DES o AES), y **VACM** para decidir qué rama puede leer o escribir cada usuario. Niveles: `noAuthNoPriv`, `authNoPriv` y `authPriv`. MD5 y DES son débiles y no deberían usarse en instalaciones nuevas.

### 4.4 Comunidades y su problema

La comunidad viaja **en claro en cada paquete**: quien capture tráfico la lee y hereda los permisos. `public` y `private` son los valores por defecto y el primer sitio donde mira un atacante. Riesgos: lectura de inventario sin autenticarse, escritura sobre rutas o interfaces, suplantación del gestor con traps falsos, y uso del equipo como reflector en amplificación, porque SNMP va sobre UDP.

Medidas: comunidades largas y distintas para lectura y escritura, ACL de origen, desactivar SNMP donde no haga falta y migrar a v3 con `authPriv`. Si solo hay v2c, que viva en una VLAN de gestión.

### 4.5 Herramientas

Net-SNMP es la referencia en Linux:

```bash
snmpget -v2c -c public 192.168.10.2 1.3.6.1.2.1.1.3.0
snmpwalk -v2c -c public 192.168.10.2 1.3.6.1.2.1.2.2.1.2
snmpbulkwalk -v2c -c public -Cr25 192.168.10.2 1.3.6.1.2.1.31.1.1.1.6
snmptranslate -On SNMPv2-MIB::sysUpTime.0
snmpset -v2c -c private 192.168.10.2 1.3.6.1.2.1.1.4.0 s "NOC 900 000 000"
snmpwalk -v3 -l authPriv -u monitor -a SHA -A "claveAuth" -x AES -X "clavePriv" \
  192.168.10.2 1.3.6.1.2.1.2.2
snmptrap -v2c -c public 192.168.10.10 "" 1.3.6.1.6.3.1.1.5.1
```

Agente mínimo en `/etc/snmp/snmpd.conf`:

```text
syslocation "CPD planta 1"
syscontact noc@empresa.local
rocommunity LecturaNOC 192.168.10.0/24
createUser monitor SHA "fraseDeAutenticacionLarga" AES "fraseDeCifradoLarga"
rouser monitor authpriv
```

### 4.6 Contadores

`bit/s = (octetos2 - octetos1) x 8 / (t2 - t1)`. Con 375 millones de bytes en 300 segundos, 10 Mb/s. Los contadores de 32 bits se desbordan: 2^32 bytes son 34,4 gigabits y en un enlace de 100 Mb/s se llenan en unos 344 segundos, menos de seis minutos. Por eso existen los de 64 bits, y por eso una gráfica que cae a cero de golpe suele ser un desbordamiento y no una caída del tráfico. Para el porcentaje se divide entre `ifSpeed`; por encima de 4 Gb/s hay que usar `ifHighSpeed`, que va en Mb/s.

## 5. RMON

### 5.1 Por qué no basta SNMP

Tres límites: **escala mal**, porque N equipos por M objetos por frecuencia multiplica peticiones y CPU; **no hay historia si el gestor cae**, porque el agente solo responde; y **no ve el detalle del segmento**, porque las tablas por host o por conversación no están en el agente estándar.

### 5.2 Arquitectura

RMON traslada el trabajo a una **sonda** situada en el punto de medida, que acumula estadísticas y entrega resúmenes. Puede ser dedicada (aparato en un espejo o tap), integrada (el propio conmutador, lo habitual, a menudo con grupos parciales) o distribuida (varias sondas por planta). La MIB de RMON1 cuelga de `1.3.6.1.2.1.16` y la de RMON2 de `1.3.6.1.2.1.20`. Cada grupo tiene tabla de control, que define qué se mide y cada cuánto, y tabla de datos. El gestor crea filas con `SET` y la sonda las rellena.

### 5.3 Grupos de RMON1

| Grupo | Qué mide |
| --- | --- |
| Statistics | Contadores del segmento: bytes, paquetes, broadcast, CRC, colisiones, tamaños |
| History | Muestras periódicas de esas estadísticas |
| Alarm | Umbrales de subida y bajada sobre cualquier objeto |
| Host | Tráfico por dirección MAC |
| HostTopN | Los N hosts con más actividad |
| Matrix | Conversaciones entre pares de direcciones |
| Filter | Patrón que selecciona paquetes |
| Capture | Paquetes que pasan el filtro |
| Event | Traps o registros cuando salta una alarma |

Son nueve para Ethernet; RFC 1513 añade un décimo grupo para Token Ring.

### 5.4 RMON2 y versiones

RMON2 trabaja de la capa 3 hacia arriba y añade diez grupos: directorio de protocolos, distribución por protocolo, mapa de direcciones (IP a MAC), host y matriz de nivel de red, host y matriz de aplicación, historial de usuario, configuración de sonda y conformidad.

| Norma | Contenido | Año |
| --- | --- | --- |
| RFC 1271 | Primera RMON MIB | 1991 |
| RFC 1757 | RMON1, nueve grupos | 1995 |
| RFC 2021 | RMON2 en SMIv1 | 1996 |
| RFC 2819 | RMON1 en SMIv2 | 2000 |
| RFC 3273 | RMON de alta capacidad | 2002 |
| RFC 4502 | RMON2 en SMIv2 | 2006 |

### 5.5 Configurar una sonda

```text
rmon event 1 log trap public description "Utilización alta" owner netops
rmon alarm 10 ifHCInOctets.24 300 delta rising-threshold 3000000000 1 \
  falling-threshold 2600000000 1 owner netops
rmon collection history 1 interval 300 buckets 288 owner netops
```

Tres mil millones de bytes en 300 segundos son 80 Mb/s, el umbral crítico; 288 muestras de 300 segundos cubren 24 horas. Se comprueba leyendo las tablas:

```bash
snmpwalk -v2c -c public 192.168.10.2 1.3.6.1.2.1.16.3.1
snmpwalk -v2c -c public 192.168.10.2 1.3.6.1.2.1.16.9.1
```

La alarma `delta` compara el incremento del contador en el intervalo; `absolute` compara el valor directo, útil con `sysUpTime` o temperatura.

## 6. Monitorización

### 6.1 Diagnóstico

`ping` para alcance y RTT; `traceroute` para el camino; `mtr` para pérdida por salto; `iperf3` para rendimiento real; `dig` para nombres; `tcpdump` y Wireshark para captura; `nmap` para descubrimiento; `show interfaces` y `show processes cpu` en el equipo.

### 6.2 Disponibilidad con SNMP

ICMP dice si responde; SNMP dice cómo. Un `sysUpTime` bajo indica reinicio. `ifAdminStatus` arriba con `ifOperStatus` abajo indica enlace caído o mal negociado. `ifInErrors` y los descartes crecen cuando hay problema físico o de cola.

### 6.3 NetFlow

Exporta **registros de flujo**: quién habla con quién, con qué puertos, protocolo, bytes y paquetes. No mide estado de interfaz, describe tráfico. v5 tiene formato fijo; v9 usa plantillas; IPFIX (RFC 7011) es el estándar derivado de v9; sFlow (RFC 3176) muestrea paquetes. El exportador envía al colector y una herramienta de análisis lo presenta. Sirve para los mayores consumidores, capacidad con datos reales, facturación y detección de anomalías. Con muestreo 1:1000 los valores son aproximados.

### 6.4 Nagios

Motor de comprobaciones con plugins. Objetos: `host`, `service`, `command`, `timeperiod`, `contact`. Configuración típica:

```text
define host {
    use                 generic-host
    host_name           sw-acceso-01
    alias               Conmutador acceso planta 1
    address             192.168.10.2
    check_command       check-host-alive
    max_check_attempts  5
    check_interval      5
    retry_interval      1
}

define service {
    use                 generic-service
    host_name           sw-acceso-01
    service_description SNMP UPTIME
    check_command       check_snmp!-C public -o 1.3.6.1.2.1.1.3.0
    check_interval      5
    retry_interval      3
    max_check_attempts  4
}
```

Se valida con `nagios -v /etc/nagios/nagios.cfg` antes de recargar: un error de sintaxis deja el motor sin arrancar. Para equipos remotos se usa NRPE y para informar desde el propio equipo, comprobaciones pasivas.

### 6.5 MRTG, Cacti y Cricket

| Herramienta | Base | Fuerte | Límite |
| --- | --- | --- | --- |
| MRTG | Propia y RRDtool | Simple, `cfgmaker` | Una gráfica por interfaz |
| Cacti | RRDtool y MySQL | Plantillas y plugins | Más pesado |
| Cricket | RRDtool | Muchos equipos | Configuración por ficheros |

Las tres miden tráfico de entrada y salida por interfaz, errores y, con plantillas, CPU y memoria. Sondean por SNMP cada 5 minutos y dibujan día, semana, mes y año. Cacti añade usuarios y umbrales; Cricket está pensado para colecciones grandes.

### 6.6 SYSLOG

Transporta eventos en texto. Norma vigente: **RFC 5424** (2009). Puerto **514 UDP**, también TCP y TLS en el 6514. La prioridad es `facility x 8 + severity` y hay ocho severidades: 0 emergency, 1 alert, 2 critical, 3 error, 4 warning, 5 notice, 6 informational y 7 debug. Sirve para reconstruir qué pasó antes de una caída, detectar accesos, auditar cambios y correlacionar equipos; exige NTP, porque un log sin hora fiable no ordena causas. Receptores habituales: rsyslog y syslog-ng.

### 6.7 Monitorización activa y pasiva, y herramientas actuales

El programa de referencia habla de monitorización **activa** (SNMP) y **pasiva** (NetFlow, Nagios). La distinción útil es esta:

| Tipo | Cómo se obtiene el dato | Ejemplos |
| --- | --- | --- |
| Activa | El sistema de monitorización genera consultas o pruebas hacia el equipo | `ping`, sondeo SNMP, comprobaciones de Nagios (`check_snmp`, `check_http`) |
| Pasiva | El sistema recibe o observa lo que ya ocurre | NetFlow, sFlow, captura de tráfico, traps SNMP, syslog, comprobaciones pasivas de Nagios |

Nagios hace las dos cosas: sus comprobaciones normales son activas y admite resultados pasivos enviados por el propio equipo. La activa responde a "¿funciona ahora?"; la pasiva, a "¿qué ha pasado?". Se combinan.

**Herramientas más usadas hoy** (a las que cita el programa de referencia, como MRTG, Cacti y Cricket, se suman otras):

| Herramienta | Idea | Fuerte | Cuidado |
| --- | --- | --- | --- |
| Zabbix | Plataforma completa: sondeo, traps, plantillas, mapas y alertas | Descubrimiento automático, plantillas ya hechas | Base de datos que crece |
| LibreNMS | Monitorización de red por SNMP con autodescubrimiento | Muy ágil para equipos de red | Orientado a red |
| PRTG | Producto comercial por sensores | Fácil, con soporte | La licencia se calcula por sensores |
| Prometheus con Grafana | Métricas en series temporales, consultas potentes y paneles | Estándar en servicios y contenedores | En red necesita un exportador de SNMP |
| Graylog o ELK | Registros centralizados | Búsqueda y correlación | Volumen y retención |

**Telemetría en flujo** (gNMI, NETCONF con YANG) es la evolución: el equipo envía datos en cuanto cambian y de forma estructurada, sin esperar al sondeo de cinco minutos. Es la tendencia, pero SNMP sigue siendo universal.

### 6.8 Qué monitorizar y con qué impacto

Se trata de distinguir los equipos por su importancia operativa; y planificar la monitorización con la menor incidencia en la red.

| Nivel | Qué equipos | Frecuencia de sondeo | Qué se vigila |
| --- | --- | --- | --- |
| 1, crítico | Núcleo, cortafuegos, enlaces WAN, servidores DNS y DHCP | 1 minuto | Disponibilidad, utilización, errores, CPU, memoria, temperatura |
| 2, importante | Conmutadores de distribución, servidores de aplicación | 5 minutos | Disponibilidad, utilización y errores |
| 3, ordinario | Acceso, impresoras | 15 minutos | Disponibilidad |

**El coste de sondear.** Cada consulta consume ancho de banda y CPU del equipo. Con 200 equipos y 30 objetos por equipo, son 6 000 consultas por ciclo. Con un tamaño medio de unos 250 bytes por consulta y respuesta:

```text
Sondeo cada 5 minutos (300 s): 6 000 x 250 x 8 / 300 = 40 kb/s
Sondeo cada 10 segundos:       6 000 x 250 x 8 / 10  = 1 200 kb/s, 30 veces mas
Con GETBULK de 25 objetos por peticion: 6 000 / 25 = 240 peticiones por ciclo
```

El ancho de banda es despreciable en cualquiera de los dos casos, pero la CPU de un equipo pequeño no lo es. Reglas: sondear más a menudo solo lo crítico; usar `GETBULK` y contadores de 64 bits; escalonar las consultas en vez de lanzarlas todas a la vez; dejar el SNMP en una VLAN de gestión; y comprobar, tras activar la monitorización, que la CPU de los equipos no sube.

**Traducir valores en prestaciones**. Un número bruto no es información. `ifInOctets` es un contador; la prestación es la utilización del 62 por ciento. `sysUpTime` es un tiempo en centésimas de segundo (se desborda a los 497 días); la información es "reinició hace 3 horas". La monitorización convierte contadores en tasa, en porcentaje de la capacidad y en tendencia.

## 7. Análisis del rendimiento

### 7.1 Magnitudes y umbrales

| Magnitud | Cómo se mide | Umbral problemático |
| --- | --- | --- |
| Utilización | Contadores SNMP cada 5 min | 70 % sostenido, 80 % en punta |
| Rendimiento | Contadores, NetFlow, `iperf3` | Menos del 60 % de la capacidad |
| Retardo | ICMP, sondas | 150 ms en voz |
| Jitter | Sondas, VoIP | 30 ms |
| Pérdida | Contadores, captura | 1 % |
| Disponibilidad | Sondas, `sysUpTime` | Menos del 99,9 % del SLA |
| CPU | SNMP `hrProcessorLoad` | 80 % durante 15 min |
| Memoria | `hrStorage`, UCD | 85 % |

### 7.2 Utilización

En un enlace conmutado **full duplex** no hay colisiones: la utilización es tráfico dividido entre capacidad y la saturación se manifiesta como descartes en cola y más retardo. La media de 5 minutos suaviza los picos y oculta micro-ráfagas; el **percentil 95** descarta el 5 por ciento de muestras más altas y es la base de muchas facturaciones.

El retardo de ida recomendado por UIT-T G.114 es de menos de 150 ms para voz interactiva; el jitter se absorbe con un búfer de 30 a 50 ms; la pérdida por encima del 1 por ciento dispara retransmisiones TCP y realimenta el problema.

| Disponibilidad | Caída al año | Caída al mes |
| --- | --- | --- |
| 99 % | 87,6 horas | 7,2 horas |
| 99,9 % | 8,76 horas | 43,2 minutos |
| 99,99 % | 52,6 minutos | 4,3 minutos |

En equipos de red, la CPU alta indica proceso desbocado, tormenta de broadcast o bucle. En servidores, `hrProcessorLoad` (1.3.6.1.2.1.25.3.3.1.2) y `ssCpuIdle` (1.3.6.1.4.1.2021.11.11.0). La memoria se vigila por tamaño de tablas (rutas, ARP, MAC).

### 7.3 Tendencia: cuándo se satura el enlace

Enlace de 100 Mb/s con la punta mensual:

| Mes | Punta | Utilización |
| --- | --- | --- |
| Enero | 30,0 Mb/s | 30 % |
| Febrero | 36,0 Mb/s | 36 % |
| Marzo | 43,2 Mb/s | 43 % |
| Abril | 51,8 Mb/s | 52 % |
| Mayo | 62,2 Mb/s | 62 % |

El crecimiento es geométrico, un 20 por ciento mensual: cada mes multiplica por 1,2. Para saber cuándo llega a un valor se despeja con logaritmos:

```text
meses = ln(final / actual) / ln(1 + tasa)
hasta el 80 %:  ln(80 / 62,2) / ln(1,2) = 1,41 meses
hasta el 100 %: ln(100 / 62,2) / ln(1,2) = 2,63 meses
```

En el informe: unas seis semanas para el umbral de aviso y unos dos meses y medio para saturar. La regla del 70 da el tiempo de duplicación de cabeza: 70/20 = 3,5 meses, frente a 3,8 exactos.

Con crecimiento **lineal** es una regla de tres: a 6 Mb/s por mes y 62,2 actuales, los 37,8 de margen se agotan en 6,3 meses. El geométrico acelera y el lineal no, así que con el mismo punto de partida el primero satura antes. Antes de ampliar hay que comprobar con NetFlow si el tráfico es legítimo o hay un equipo infectado, y si basta con QoS o mover la copia de seguridad. La ampliación se justifica con gráfica, tendencia y fecha, no con una queja.

### 7.4 Analizar una captura

```bash
tcpdump -i eth1 -s 0 -w captura.pcap -G 60 -W 1
tshark -r captura.pcap -q -z conv,tcp
tshark -r captura.pcap -Y "tcp.analysis.flags" | wc -l
```

Cuatro pasos: filtrar por el problema, mirar estadísticas de conversaciones, revisar el informe de expertos (retransmisiones, fuera de orden, ventana cero, resets) y concluir. Retransmisión por encima del 1 por ciento indica pérdida; muchos `RST`, servicios cerrados o escaneos; ventana cero, receptor lento. El informe debe llevar hora, filtro y evidencia.

### 7.5 Perfiles de tráfico y utilización

Se trata de emplear los **perfiles de tráfico** para saber cómo evolucionará el uso. Un perfil describe cómo varía la carga a lo largo del día, de la semana y del año. Se construye con muestras de varias semanas, agrupando por hora y por tipo de día, y tomando la mediana o el percentil 95 de cada hora.

| Hora | 0 | 3 | 6 | 8 | 10 | 12 | 14 | 15 | 17 | 19 | 22 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Mb/s | 5 | 3 | 12 | 45 | 55 | 40 | 54 | 56 | 44 | 30 | 8 |

Con las 24 horas de un día laborable: media de 27,2 Mb/s, punta de 56 Mb/s (a las 15:00) y percentil 95 de 55 Mb/s. La **relación punta a media** (2,06) indica lo concentrado que está el uso: cuanto mayor, más cara es la capacidad ociosa fuera de hora.

Qué se obtiene de un perfil:

| Uso | Cómo |
| --- | --- |
| Dimensionar | El enlace se calcula por la punta del percentil 95 con un margen, no por la media |
| Planificar ventanas de mantenimiento | Se eligen las horas valle (de 2 a 5 de la madrugada, en el ejemplo) |
| Detectar anomalías | Un valor muy distinto del perfil de su hora y de su día sugiere un problema |
| Prever el crecimiento | La tendencia de la punta mes a mes (apartado 7.3) |

**Caso.** Un martes a las 03:00 se miden 38 Mb/s; el perfil de esa hora es de 3. Es 35 Mb/s por encima: hipótesis (copia de seguridad no planificada, equipo infectado, actualización masiva). Se mira NetFlow para ver quién habla con quién y con qué puertos; si es el servidor de copias, se corrige la planificación; si es un equipo de usuario hacia Internet, se aísla y se abre una incidencia de seguridad.

**Análisis de los resultados de monitorización y propuesta de modificaciones.** El informe sigue esta estructura: propósito y destinatario, periodo, indicadores con su umbral, hallazgos (qué se salió del perfil y cuándo), causa probable, propuesta (QoS, ampliación, cambio de ventana, corrección), coste y fecha. Es lo que pide el criterio CE1.8: no basta medir, hay que proponer.

## 8. Mantenimiento preventivo

Tipos: **preventivo** (planificado), **correctivo** (tras el fallo), **predictivo** (según tendencia) y **adaptativo** (por cambio de necesidad).

Las paradas se clasifican en planificadas y no planificadas; el SLA suele descontar las primeras si se avisan con antelación. Una **ventana de mantenimiento** es el intervalo acordado en el que se admite interrupción, y debe constar de alcance, duración, hora de inicio y fin, responsable, plan de reversión, comunicación y criterio de éxito. Una ventana sin reversión no es una ventana, es una apuesta: antes de tocar nada se copia configuración e imagen actual.

Actualización de firmware:

1. Leer notas de versión y matriz de compatibilidad (módulos, apilamiento, licencias).
2. Comprobar si corrige vulnerabilidades y si cambia comportamiento.
3. Descargar del fabricante y verificar la suma de control.
4. Copiar configuración e imagen actual a un servidor.
5. Programar ventana, avisar y actualizar equipo a equipo, nunca el apilamiento entero.
6. Verificar versión, arranque, interfaces, rutas, apilamiento y logs.
7. Vigilar 24 horas y cerrar el cambio en el registro.

```text
copy running-config startup-config
copy flash:imagen-actual.bin tftp://192.168.10.50/
copy tftp://192.168.10.50/imagen-nueva.bin flash:
verify /md5 flash:imagen-nueva.bin
boot system flash:imagen-nueva.bin
reload
show version
show ip interface brief
```

Verificación posterior: versión esperada, `sysUpTime` coherente, interfaces que deben estar arriba, tabla de rutas y vecinos, apilamiento completo, logs sin errores nuevos, tráfico y latencia en la línea base, copia nueva guardada. Si algo falla, se revierte a la imagen anterior y se documenta.

### 8.1 Interpretar el manual del fabricante

Se trata de interpretar el manual de operación para el mantenimiento. Qué se busca en él y qué se hace con ello:

| Apartado del manual | Qué se extrae | Acción de mantenimiento |
| --- | --- | --- |
| Especificaciones ambientales | Temperatura y humedad de funcionamiento | Revisar el armario cada trimestre |
| Mantenimiento recomendado | Periodicidad de limpieza y sustituciones | Calendario de operaciones |
| Piezas con vida limitada | Ventiladores, baterías (3 a 5 años), fuentes | Sustitución programada antes del fin de vida |
| Actualizaciones | Política de firmware y de parches | Revisión semestral de boletines |
| Fin de venta y de soporte | Fechas del modelo | Renovación planificada |
| Procedimiento de recuperación | Arranque de emergencia, restablecimiento | Prueba de recuperación documentada |

### 8.2 Calendario de operaciones

Se trata de elaborar **gráficamente** el calendario del plan de mantenimiento.

```text
Plan anual de mantenimiento preventivo
                           E  F  M  A  M  J  J  A  S  O  N  D
Copia de configuracion     X  X  X  X  X  X  X  X  X  X  X  X   (mensual)
Revision de logs y alarmas X  X  X  X  X  X  X  X  X  X  X  X   (mensual)
Limpieza y ventilacion           X        X        X        X   (trimestral)
Prueba de SAI y baterias        X                    X          (semestral)
Revision de firmware              X           X                  (semestral)
Prueba de conmutacion      X                    X                (semestral)
Auditoria de configuracion                   X                  (anual)
Revision de cuentas y reglas                          X         (anual)
```

Cada operación del calendario lleva responsable, duración, ventana de servicio y registro. Las ventanas se acuerdan con el cliente con antelación y se evitan los cierres de mes, las campañas y los periodos de máxima actividad.

### 8.3 Relación con la calidad y auditoría

El mantenimiento preventivo forma parte del **plan de calidad**: cada operación tiene criterio de aceptación y registro, y los registros son la evidencia que una auditoría examina. Se trata de aplicar el plan de calidad en una **auditoría**. Una auditoría de mantenimiento comprueba, con evidencias:

| Criterio | Evidencia que se busca |
| --- | --- |
| El calendario se ha cumplido | Partes firmados de cada operación |
| Las copias de configuración existen y se restauran | Ficheros, fechas y una prueba de restauración |
| El firmware está al día o hay excepción justificada | Inventario con versiones y boletines |
| Los cambios se aprobaron | Registro de cambios con aprobación |
| Las alarmas se atendieron | Tickets con tiempos |
| Las baterías están en plazo | Fechas del inventario y prueba de autonomía |

Los hallazgos se clasifican (cumple, observación, no conformidad) y cada no conformidad lleva corrección y acción correctiva (véase la [Documentación técnica](../../01_Diseno/03_Documentacion_Tecnica/README.md)).

### 8.4 Informe de realización

Tras cada intervención se emite un informe corto: fecha y ventana, operaciones realizadas, resultado de cada una, medidas antes y después, incidencias, versión instalada, reversión si la hubo y firma. Es la evidencia de que se hizo, y la base del informe de disponibilidad mensual.

## Perspectiva empresarial

Gestionar una red es un negocio de números: lo que se mide, lo que cuesta medirlo y lo que se arriesga por no hacerlo. Las cifras son ilustrativas.

### Coste de la monitorización

| Opción | Coste inicial | Coste anual | Observaciones |
| --- | --- | --- | --- |
| Código abierto (Zabbix o LibreNMS) | Horas de implantación (30 a 60) | Mantenimiento (20 a 40 horas) | Sin licencia; hace falta conocimiento |
| Comercial por sensores (PRTG) | Licencia según sensores | Renovación anual | Soporte y facilidad, pero el coste crece con los sensores |
| Servicio gestionado | Bajo | Cuota mensual | Se externaliza; depende del proveedor |

Con 200 equipos y 30 objetos por equipo son 6 000 sensores potenciales; en un producto de licencia por sensor, ese número cambia el precio por completo. Hay que **decidir qué se monitoriza** (los equipos críticos y los parámetros que importan) y no medir todo por si acaso.

### Capacidad: ampliar o gestionar

Con una tendencia del 20 por ciento mensual y un enlace al 62 por ciento, la ampliación es cuestión de semanas. La decisión es económica:

```text
Ampliar el enlace de 100 Mb/s a 1 Gb/s: +1 200 euros al ano
Gestionar con QoS y mover la copia de seguridad a la noche: 8 horas de trabajo = 320 euros
Riesgo de no actuar: saturacion en 2,6 meses; si una hora parada cuesta 500 euros
  y hay 6 horas de degradacion al mes: 6 x 500 = 3 000 euros al mes
```

Lo razonable es combinar: QoS y reprogramación ahora (barato y rápido) y ampliación planificada con el informe de tendencia en la mano. Sin gráfica y fecha no hay presupuesto.

### SLA, informes y credibilidad

El informe mensual de disponibilidad es la prueba de que se cumple el SLA. Un contrato al 99,9 por ciento mensual admite 43,2 minutos de caída; una incidencia de 3 horas supone 2,3 horas por encima, y suele traducirse en un **crédito** sobre la cuota (por ejemplo un 10 por ciento) [orientativo]. Se pactan las exclusiones (mantenimientos avisados, causas del cliente) y quién mide: el cliente se fía de datos que él puede comprobar.

### NOC propio o externalizado

Cubrir 24 horas los 7 días son 8 760 horas al año; con unas 1 700 horas productivas por persona al año, se necesitan **5 a 6 personas** solo para un puesto de guardia continuo. Con un coste de 40 000 euros anuales por persona, son de 200 000 a 240 000 euros, frente a un servicio gestionado que puede costar una fracción [orientativo]. Para una pyme, lo habitual es un horario laboral con monitorización automática y guardia por alarma.

### Cumplimiento y auditoría

Las normas (ISO/IEC 27001, ENS, RGPD) piden **evidencias**: registros de acceso, copias de configuración, parches aplicados y revisiones periódicas. Un calendario de mantenimiento cumplido y registrado es una evidencia barata; su ausencia, una no conformidad cara. Los registros se conservan el tiempo que fije la política y la normativa aplicable [comprobar con asesoría].

### Gestión del cambio y del riesgo

Cada cambio en producción es un riesgo. Un buen control de cambios exige petición, análisis de impacto, aprobación, ventana, plan de reversión y registro; los cambios de **emergencia** se regularizan después, en 24 horas. La proporción de cambios fallidos y el tiempo medio de reversión son indicadores de madurez que dirección entiende.

## Tablas de referencia rápida

| Puerto | Servicio |
| --- | --- |
| 161 UDP | SNMP consultas |
| 162 UDP | SNMP traps |
| 514 UDP | SYSLOG |
| 6514 TCP | SYSLOG sobre TLS |
| 123 UDP | NTP |

| Familia | Norma | Clave |
| --- | --- | --- |
| SNMPv1 | RFC 1157 | Comunidades, PDUs básicas |
| SNMPv2c | RFC 1901 a 1908 | GETBULK, INFORM, 64 bits |
| SNMPv3 | RFC 3411 a 3418 | USM y VACM |
| RMON1 | RFC 1757 y 2819 | Nueve grupos, capas 1 y 2 |
| RMON2 | RFC 2021 y 4502 | Diez grupos, capas 3 a 7 |
| NetFlow | v5, v9 e IPFIX | RFC 7011 |
| SYSLOG | RFC 5424 | Ocho severidades |

## Cifras que hay que saber de memoria

- Puertos: 161 y 162 UDP, 514 UDP, 6514 TCP, 123 UDP.
- Sondeo estándar: 5 minutos.
- Contador de 32 bits: 4 294 967 296; en 100 Mb/s se llena en unos 344 segundos.
- RMON1: 9 grupos; RMON2: 10 grupos.
- Raíces: RMON 1.3.6.1.2.1.16, RMON2 1.3.6.1.2.1.20, empresas 1.3.6.1.4.1.
- SYSLOG: 8 severidades, prioridad facility x 8 + severity.
- Disponibilidad 99,9 por ciento: 8,76 horas al año.
- Umbrales: 70 por ciento aviso, 80 por ciento crítico.
- Voz: 150 ms de retardo, 30 ms de jitter, 1 por ciento de pérdida.
- Duplicación: 70 dividido entre la tasa mensual.
- ISO/IEC 27002: control 10.6 de 2005 equivale a 8.20 y 8.21 de 2022; segregación, 8.22.
- sysUpTime en centésimas de segundo: se desborda a los 497 días.
- Sondeo escalonado por criticidad: 1, 5 y 15 minutos.
- Perfil de tráfico: percentil 95 y relación punta a media.
- NOC 24x7: unas 5 a 6 personas por puesto continuo.
- Calendario de mantenimiento: mensual, trimestral, semestral y anual.

## Procedimientos paso a paso

**1. Identificar un equipo y su estado.**

```bash
snmpget -v2c -c public 192.168.10.2 1.3.6.1.2.1.1.1.0 1.3.6.1.2.1.1.3.0
snmpwalk -v2c -c public 192.168.10.2 1.3.6.1.2.1.2.2.1.8
```

**2. Calcular el tráfico de una interfaz.**

```bash
A=$(snmpget -v2c -c public -Ovq 192.168.10.2 1.3.6.1.2.1.31.1.1.1.6.24)
sleep 300
B=$(snmpget -v2c -c public -Ovq 192.168.10.2 1.3.6.1.2.1.31.1.1.1.6.24)
echo "$(( (B-A)*8/300/1000000 )) Mb/s"
```

**3. Dar de alta un host en Nagios.** Crear el objeto `host` con `address` y `check-host-alive`; añadir un `service` con `check_snmp` a `sysUpTime` y otro a `ifOperStatus`; validar con `nagios -v`; recargar y comprobar que pasa a OK.

**4. Configurar una sonda RMON.** Definir evento con destino de trap; crear alarma con OID, intervalo, tipo `delta` y umbrales; crear historial con intervalo y muestras; leer `alarmTable` y `eventTable` para confirmar.

**5. Centralizar logs.** Configurar destino SYSLOG, abrir el puerto en el receptor, filtrar por severidad, sincronizar por NTP y probar con un mensaje buscando su hora exacta.

**6. Analizar una captura.** Capturar en espejo o tap, filtrar por host y puerto, mirar conversaciones y expertos, cuantificar retransmisiones y resets, y escribir la conclusión con evidencia.

**7. Predecir la saturación.** Sacar la punta de 4 a 6 meses, calcular la tasa, aplicar `ln(final/actual)/ln(1+tasa)`, comprobar con NetFlow y proponer medida y fecha.

**8. Actualizar firmware.** Notas y compatibilidad, copia de configuración e imagen, ventana avisada, equipo a equipo, verificación y vigilancia.

## Errores típicos

- **Nessus no es un IDS.** Es un escáner de vulnerabilidades; Snort y Suricata son NIDS.
- **SNMPv3 no añade PDUs.** Añade USM y VACM; GETBULK es de la v2.
- **El trap no se confirma.** El inform sí.
- **RMON1 son nueve grupos Ethernet.** El décimo es la extensión Token Ring del RFC 1513.
- **`ifSpeed` va en bits por segundo.** `ifHighSpeed`, en megabits por segundo.
- **La `.0` no siempre es la instancia.** En tablas es el índice de fila.
- **Un contador que baja no es menos tráfico.** Es desbordamiento o reinicio del agente.
- **Full duplex no genera colisiones.** Genera descartes en cola.
- **La disponibilidad es tiempo**, no porcentaje de pings correctos.
- **El firmware se actualiza con ventana y reversión.** Nunca aprovechando un hueco.
- **El control 10.6 de la ISO 27002 no existe con ese número en 2022.** Pasó a 8.20 y 8.21.
- **Monitorización pasiva no es la que no hace nada.** Observa lo que ya ocurre (NetFlow, traps, captura); la activa genera las pruebas.
- **Sondear más a menudo no es siempre mejor.** Consume CPU de los equipos; se reserva para lo crítico.
- **El perfil de tráfico se dimensiona por la punta, no por la media.** Una media baja esconde una punta que satura.
- **Una auditoría no propone la solución.** Contrasta evidencias con criterios y reporta hallazgos.
- **El informe de monitorización debe proponer.** Medir sin proponer una modificación no cumple el criterio.

## Glosario de la unidad

**Agente.** Programa del equipo gestionado que responde a SNMP y envía traps.
**Baseline.** Línea base de comportamiento normal.
**CMIP.** Protocolo de gestión OSI, completo y pesado.
**Comunidad.** Cadena compartida de SNMPv1 y v2c, sin cifrado.
**FCAPS.** Fallos, configuración, contabilidad, prestaciones y seguridad.
**GETBULK.** PDU de v2 que devuelve varios objetos por petición.
**INFORM.** Notificación con confirmación.
**Jitter.** Variación del retardo entre paquetes.
**MIB.** Árbol de objetos gestionables de un agente.
**MTBF.** Tiempo medio entre fallos.
**MTTR.** Tiempo medio de reparación.
**NIDS.** Sistema que detecta intrusiones en el tráfico.
**NOC.** Centro de operaciones de red.
**OID.** Identificador numérico de un objeto.
**PDIOO.** Planificar, diseñar, implantar, operar, optimizar.
**Percentil 95.** Valor que deja por debajo el 95 por ciento de las muestras.
**RMON.** MIB de monitorización remota con sonda.
**SLA.** Acuerdo de nivel de servicio.
**SMI.** Reglas de definición de la MIB.
**Sonda.** Elemento que recoge y almacena estadísticas RMON.
**SYSLOG.** Protocolo de envío de eventos.
**Trap.** Notificación SNMP sin confirmación.
**USM.** Modelo de seguridad de usuario de SNMPv3.
**VACM.** Control de acceso por vistas.
**Ventana de mantenimiento.** Intervalo acordado con posible interrupción.
**Confidencialidad, integridad y disponibilidad.** Las tres propiedades de la seguridad de la información.
**Monitorización activa y pasiva.** Generar pruebas hacia el equipo frente a observar lo que ya ocurre.
**Perfil de tráfico.** Descripción de cómo varía la carga por hora, día y estación.
**Percentil de utilización.** Valor por debajo del cual está un porcentaje de las muestras.
**Plan de mantenimiento.** Calendario de operaciones preventivas con responsable y registro.
**Telemetría en flujo.** Envío estructurado y continuo de datos desde el equipo (gNMI).

## Para profundizar

- IETF, RFC 3411, arquitectura de SNMPv3: https://datatracker.ietf.org/doc/rfc3411/
- IETF, RFC 1757, RMON1: https://datatracker.ietf.org/doc/rfc1757/
- Net-SNMP, documentación: http://www.net-snmp.org/docs/
- Nagios Core, definiciones de objetos: https://assets.nagios.com/downloads/nagioscore/docs/nagioscore/4/en/objectdefinitions.html
- Cacti, documentación: https://docs.cacti.net/
- Snort, documentación: https://www.snort.org/documents
- Zabbix, documentación: https://www.zabbix.com/documentation/current/
- IETF, RFC 7011, IPFIX: https://datatracker.ietf.org/doc/rfc7011/
- ISO/IEC 27002:2022, ficha de la norma: https://www.iso.org/standard/75652.html
