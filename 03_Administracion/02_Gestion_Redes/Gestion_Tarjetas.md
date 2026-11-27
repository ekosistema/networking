---
title: "Gestión de redes · Tarjetas de repaso"
description: "Tarjetas de repaso de la unidad Gestión de redes."
section: administracion
unit: gestion
kind: tarjetas
order: 75
tags:
  - redes
  - gestion
  - tarjetas
---

# Gestión de redes · Tarjetas de repaso

> **Cómo usarlas.** Tapa la columna de la derecha, contesta en voz alta y comprueba. Marca las que
> falles y vuelve a ellas a 1, 3 y 7 días. Hay 104 tarjetas en 9 bloques.

## 1. Ciclo de vida y administración

| Pregunta | Respuesta |
| --- | --- |
| Fases de PDIOO | Planificar, diseñar, implantar, operar y optimizar |
| Qué añade PPDIOO | Prepare: estudiar la red existente antes de planificar |
| Administración según el programa de referencia | Las fases operar y optimizar |
| Relación con PDCA | Planificar y diseñar son plan; implantar, do; operar, check; optimizar, act |
| Qué es la retirada | Apagado ordenado, migración, borrado seguro y baja de inventario |
| Áreas de FCAPS | Fallos, configuración, contabilidad, prestaciones y seguridad |
| Áreas del programa de referencia | Configuración, disponibilidad, capacidad, seguridad e incidencias |
| Niveles del NOC | N1 atiende, N2 diagnostica, N3 especialista o fabricante |
| Indicadores del NOC | MTTR, MTBF, disponibilidad y tiempo de reconocimiento |
| Qué es la línea base | Qué equipos hay, con qué firmware y configuración y cómo se conectan |

## 2. Seguridad e incidencias

| Pregunta | Respuesta |
| --- | --- |
| Propiedades de la seguridad | Confidencialidad, integridad y disponibilidad |
| ISO/IEC 27001 y 27002 | Requisitos del sistema de gestión y guía de controles |
| Control 10.6 de 2005 | Gestión de la seguridad de las redes |
| Equivalentes de 2022 | 8.20 seguridad de redes, 8.21 servicios de red, 8.22 segregación |
| NIDS | Snort y Suricata: escuchan tráfico y comparan con firmas |
| NIPS | Además de detectar, bloquea |
| Escáner de vulnerabilidades | Nessus y OpenVAS: se conectan a los equipos |
| SIEM | Centraliza y correlaciona eventos |
| Incidente, problema y cambio | Restaurar el servicio; causa raíz; modificación planificada |
| Actividades de la gestión de incidencias | Registro, clasificación, diagnóstico, escalado, resolución y cierre |

## 3. Protocolos y SNMP

| Pregunta | Respuesta |
| --- | --- |
| Piezas de SNMP | Gestor, agente y MIB |
| Puertos SNMP | 161 consultas y 162 traps, UDP |
| Modos | Sondeo y notificación |
| Trap frente a inform | Sin confirmar frente a confirmada |
| PDUs de v1 | GET, GETNEXT, RESPONSE, SET y TRAP |
| PDUs que añade v2c | GETBULK e INFORM |
| Qué aporta v3 | USM (autenticación y cifrado) y VACM (vistas), sin nuevas PDUs |
| Niveles de v3 | noAuthNoPriv, authNoPriv y authPriv |
| Problema de las comunidades | Van en claro; public y private por defecto |
| Raíz de MIB-II | 1.3.6.1.2.1 |
| Rama de empresas | 1.3.6.1.4.1 |
| OID de sysUpTime y sysDescr | 1.3.6.1.2.1.1.3.0 y 1.3.6.1.2.1.1.1.0 |
| ifOperStatus | 1 arriba, 2 abajo |
| CMISE y CMIP | Servicio y protocolo de gestión OSI |
| Por qué perdió CMIP | Pila OSI completa, caro y tardío |
| Contador de 32 bits | Se llena en unos 344 segundos a 100 Mb/s |
| Fórmula de tráfico | (octetos 2 menos octetos 1) por 8 entre el tiempo |
| ifSpeed e ifHighSpeed | Bits por segundo y megabits por segundo |

## 4. RMON

| Pregunta | Respuesta |
| --- | --- |
| Por qué hace falta RMON | SNMP escala mal, no guarda historia y no ve el detalle del segmento |
| Qué es una sonda | Elemento que mide y guarda estadísticas en el segmento |
| Grupos de RMON1 | Statistics, History, Alarm, Host, HostTopN, Matrix, Filter, Capture y Event |
| Cuántos grupos | Nueve para Ethernet; RMON2 añade diez |
| RMON2: nivel de trabajo | Capa 3 y superiores |
| Raíces de RMON y RMON2 | 1.3.6.1.2.1.16 y 1.3.6.1.2.1.20 |
| Alarma delta y absolute | Compara el incremento o el valor directo |
| Límite de un umbral RMON | Entero de 32 bits con signo: 2 147 483 647 |
| Por qué falla el intervalo largo | El umbral en bytes de un enlace rápido supera el límite |
| Grupo que lanza el aviso | Event |

## 5. Herramientas de monitorización

| Pregunta | Respuesta |
| --- | --- |
| Monitorización activa | El sistema genera consultas o pruebas hacia el equipo |
| Monitorización pasiva | Observa lo que ya ocurre: flujos, traps, capturas y logs |
| Qué exporta NetFlow | Registros de flujo: origen, destino, puertos, bytes |
| Versiones de flujos | v5 fija, v9 con plantillas, IPFIX (RFC 7011) |
| sFlow | Muestrea paquetes |
| Objetos de Nagios | host, service, command, timeperiod y contact |
| Cómo se valida Nagios | `nagios -v` |
| MRTG, Cacti y Cricket | Gráficas de tráfico por SNMP con RRDtool |
| Plataformas actuales | Zabbix, LibreNMS, PRTG, Prometheus con Grafana |
| Prioridad de syslog | facility por 8 más severity |
| Severidades de syslog | 0 emergency a 7 debug |
| Puertos de syslog | 514 UDP y 6514 TCP con TLS |
| Por qué hace falta NTP | Para ordenar eventos de equipos distintos |
| Telemetría en flujo | gNMI y NETCONF con YANG |

## 6. Qué monitorizar y con qué impacto

| Pregunta | Respuesta |
| --- | --- |
| Niveles de criticidad | Crítico, importante y ordinario |
| Frecuencias de sondeo | 1, 5 y 15 minutos |
| Por qué no sondear a 10 segundos | Cada consulta gasta CPU del equipo |
| Cómo reducir el impacto | GETBULK, contadores de 64 bits, sondeo escalonado, VLAN de gestión |
| Qué es traducir valores en prestaciones | Pasar de contadores a tasa, porcentaje de capacidad y tendencia |
| sysUpTime | En centésimas; se desborda a los 497 días |
| Qué hacer tras activar la monitorización | Comprobar que no sube la CPU de los equipos |

## 7. Rendimiento y perfiles

| Pregunta | Respuesta |
| --- | --- |
| Utilización problemática | 70 por ciento sostenido y 80 por ciento en punta |
| Voz: retardo, jitter y pérdida | 150 ms, 30 ms y 1 por ciento |
| Percentil 95 | Valor bajo el que está el 95 por ciento de las muestras |
| Qué pasa en full duplex al saturar | Descartes y retardo, no colisiones |
| Perfil de tráfico | Cómo varía la carga por hora, día y estación |
| Relación punta a media | Concentración del uso; sirve para dimensionar |
| Dimensionar | Por la punta con margen, no por la media |
| Para qué sirve el perfil | Dimensionar, elegir ventanas, detectar anomalías y prever |
| Fórmula de tendencia geométrica | ln(final / actual) / ln(1 + tasa) |
| Regla del 70 | 70 entre la tasa mensual en tanto por ciento |
| Geométrico frente a lineal | El geométrico satura antes |
| Qué lleva un informe de monitorización | Propósito, periodo, indicadores, hallazgos, causa, propuesta y fecha |
| Qué hacer ante una anomalía | Mirar NetFlow, identificar origen y actuar |

## 8. Mantenimiento y auditoría

| Pregunta | Respuesta |
| --- | --- |
| Tipos de mantenimiento | Preventivo, correctivo, predictivo y adaptativo |
| Qué es una ventana de mantenimiento | Intervalo acordado con alcance, horario, reversión y criterio de éxito |
| Pasos de una actualización de firmware | Notas, copia, descarga y suma, ventana, equipo a equipo, verificación y vigilancia |
| Qué se extrae del manual del fabricante | Ambiente, mantenimiento, piezas con vida, firmware y fin de soporte |
| Vida típica de baterías de SAI | De 3 a 5 años |
| Calendario gráfico | Operaciones en filas y meses en columnas |
| Frecuencias típicas | Mensual, trimestral, semestral y anual |
| Qué evidencia una auditoría | Partes, copias con restauración, versiones, cambios aprobados y alarmas atendidas |
| Clasificación de hallazgos | Cumple, observación, no conformidad menor y mayor |
| Qué hace un auditor | Contrasta evidencias con criterios; no propone soluciones |
| Contenido del informe de realización | Ventana, operaciones, resultados, medidas, incidencias y firma |

## 9. Empresa

| Pregunta | Respuesta |
| --- | --- |
| Código abierto frente a comercial | Tiempo propio frente a licencia y soporte |
| Qué se compara de verdad | El coste total de propiedad |
| Licencia por sensor | Decidir qué se monitoriza |
| NOC 24 por 7 | 8 760 horas entre 1 700: unas 5 o 6 personas |
| Alternativas a la guardia continua | Horario laboral con alarmas, guardia de aviso o servicio gestionado |
| Ampliar o gestionar | Combinar: QoS y reprogramación ahora, ampliación planificada |
| Qué justifica un presupuesto de capacidad | Gráfica, tendencia y fecha |
| Qué demuestra el SLA | El informe mensual de disponibilidad |
| Crédito por incumplimiento | Descuento sobre la cuota, según el contrato |
| Evidencias para auditorías de seguridad | Registros, copias, parches y revisiones |
| Indicadores de madurez del cambio | Cambios fallidos y tiempo de reversión |
