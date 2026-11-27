---
title: "Incidencias · Tarjetas de repaso"
description: "Tarjetas de repaso de la unidad Incidencias."
section: administracion
unit: incidencias
kind: tarjetas
order: 85
tags:
  - redes
  - incidencias
  - tarjetas
---

# Incidencias · Tarjetas de repaso

> **Cómo usarlas.** Tapa la columna de la derecha, contesta en voz alta y comprueba. Marca las que
> falles y vuelve a ellas a 1, 3 y 7 días. Hay 95 tarjetas en 8 bloques.

## 1. Vocabulario y proceso

| Pregunta | Respuesta |
| --- | --- |
| Incidencia | Interrupción o degradación no planificada de un servicio |
| Petición de servicio | Solicitud prevista en el catálogo |
| Problema | Causa de una o varias incidencias |
| Error conocido | Problema diagnosticado con solución temporal |
| Evento | Cambio de estado sin juicio de valor |
| Actividades de la gestión de incidencias | Identificación, registro, clasificación, priorización, diagnóstico, escalado, resolución y cierre |
| Datos mínimos de un ticket | Hora, solicitante, ubicación, servicio, síntoma, categoría, prioridad, técnico y elemento |
| Estados de un ticket | Nuevo, abierto, en curso, pendiente, resuelto, cerrado y reabierto |
| Solución temporal frente a definitiva | Restablece sin quitar la causa; elimina la causa mediante un cambio |
| Qué exige el cierre | Confirmación y causa clasificada |

## 2. Prioridad y escalado

| Pregunta | Respuesta |
| --- | --- |
| De dónde sale la prioridad | Del impacto y la urgencia, no de la gravedad técnica |
| Impacto y urgencia | A cuántos y qué procesos afecta; cuánto se puede esperar |
| Matriz: alto y alta | P1 |
| Matriz: medio y alta | P2 |
| Matriz: bajo y alta | P3 |
| Matriz: bajo y media | P4 |
| Plazos de ejemplo de P1 | Respuesta 15 minutos, resolución 4 horas |
| Reclasificar | Solo por cambio de hechos, con registro del motivo |
| Escalado funcional | Más conocimiento: nivel 1, 2 y 3 |
| Escalado jerárquico | Más autoridad: riesgo de incumplir, presupuesto, conflicto |
| Cuándo se escala | Cuando se agota el conocimiento, no la paciencia |

## 3. Indicadores y acuerdos

| Pregunta | Respuesta |
| --- | --- |
| MTTR y MTTA | Tiempo medio de resolución; de respuesta |
| MTBF | Tiempo medio entre fallos |
| Disponibilidad | MTBF entre (MTBF más MTTR) |
| FCR | Resolución en primer contacto |
| Tasa de reapertura | Reabiertas entre cerradas |
| Cumplimiento del SLA | Cerradas en plazo entre total |
| SLA, OLA y contrato de apoyo | Con el cliente, entre equipos internos, con proveedores externos |
| Qué se exige al OLA y al contrato de apoyo | Ser al menos tan exigentes como el SLA |
| Cuándo se pausa el reloj | Si espera al usuario o a una ventana del cliente |
| Cuándo no se pausa | Si espera al fabricante o a un equipo interno |
| MTTR engañoso | Conviene calcularlo por prioridad |
| ISO/IEC 20000-1 | Norma certificable de gestión de servicios (edición de 2018) |
| ITIL | Marco de buenas prácticas, no certificable para la organización |

## 4. Problemas, conocimiento y crisis

| Pregunta | Respuesta |
| --- | --- |
| Cuándo se abre un problema | Incidencias repetidas, grave sin causa o tendencia |
| Cómo se elige el problema | Con un Pareto de incidencias por categoría |
| Estructura de un artículo de la base de conocimiento | Síntoma, afectados, causa, pasos, comprobación y cuándo escalar |
| Cómo se mide la base de conocimiento | Por su reutilización |
| Incidente grave | P1 sobre un servicio crítico, con procedimiento propio |
| Roles de un incidente grave | Responsable que coordina, técnicos, comunicación y registro |
| Qué es el runbook | Lista de actuaciones ante cada alarma |
| Revisión posterior | Sin culpables: causa, qué funcionó y qué se cambia |
| Guardia | Técnico localizable, con plazo y compensación |

## 5. Método de resolución

| Pregunta | Respuesta |
| --- | --- |
| Preguntas de un buen enunciado | Qué falla, a quién, desde cuándo, dónde, cuántos y si se reproduce |
| Fases del programa de referencia | Definir, describir, causas, probar, verificar, planificar, comprobar y documentar |
| Familias de Ishikawa | Mano de obra, método, máquina, material, medición y medio |
| Cinco porqués | Una sola línea de preguntas hasta la causa accionable |
| Qué lleva una prueba | Hipótesis falsable, acción mínima y resultado esperado |
| Una variable por vez | Para saber qué cambió el resultado |
| Primero mirar, después tocar | Consultar y capturar antes de cambiar, con reversión |
| Verificación tras reparar | La prueba que falló y una de no regresión |
| Magnitud económica | Usuarios por coste hora por horas de parada |
| Qué aportar al fabricante | Número de serie, versión, síntoma, registros y pruebas |
| RMA | Autorización de devolución o sustitución en garantía |

## 6. Herramientas hardware

| Pregunta | Respuesta |
| --- | --- |
| Polímetro: qué mide | Tensión, corriente, resistencia y continuidad |
| Polímetro: qué no ve | Diafonía ni atenuación |
| Margen de tensión de PoE | 44 a 57 V |
| Comprobador de cableado | Mapa de pines y continuidad, no calidad |
| Generador y localizador de tonos | Identifican un cable; nunca en fibra |
| TDR | Distancia a una rotura por el eco |
| Distancia con TDR | c por NVP por t entre 2 |
| Certificador | Parámetros de norma con margen, UNE-EN 50346 |
| Qué detecta el certificador y no el comprobador | NEXT y pérdida de retorno fuera de margen |
| Un cable con continuidad ¿sirve para gigabit? | No necesariamente: hacen falta los cuatro pares y cumplir la norma |

## 7. Herramientas software

| Pregunta | Respuesta |
| --- | --- |
| Monitor de red | Sondea y guarda series: ICMP, SNMP, syslog, NetFlow |
| Analizador de protocolos | Wireshark, tcpdump y tshark |
| Puntos de captura | Puerto espejo (SPAN) o TAP |
| Filtro de captura y de visualización | Antes de guardar y después |
| ping: tipos ICMP | 8 petición y 0 respuesta |
| ICMP 3 códigos 0, 1, 3 y 4 | Red, host, puerto inalcanzables y fragmentación necesaria |
| ICMP 11 | Tiempo excedido |
| Estimar saltos con el TTL | TTL inicial menos TTL recibido |
| TTL inicial habitual | 64 Linux, 128 Windows, 255 equipos de red |
| 1 472 bytes en el ping | 1 472 más 8 y 20 son 1 500 |
| Escalera de ping | 127.0.0.1, IP propia, puerta, pública y nombre |
| Asterisco en traceroute | Salto que no contesta, no fallo |
| mtr | Traceroute con estadísticas de pérdida por salto |
| Regla de lectura de mtr | La pérdida real se propaga a los saltos siguientes |
| arp -a | IP asociadas a MAC; la de la puerta debe ser la del router |
| netstat -ano y ss -tulpn | Conexiones y puertos a la escucha con proceso |
| CLOSE_WAIT y SYN_SENT | El otro cerró y la aplicación no; saludo sin respuesta |
| nmap -sn y arp-scan | Descubren equipos de una red; solo en redes propias o con permiso |
| LLDP y CDP | Vecinos directos de un equipo de red |

## 8. Árbol de decisión y negocio

| Pregunta | Respuesta |
| --- | --- |
| Pasos del diagnóstico | Confirmar, situar capa, hipótesis, prueba mínima, ejecutar, corregir y documentar |
| Sin enlace, con enlace sin IP, con IP sin servicio | Capa 1, capa 3, transporte o aplicación |
| Puerta ok, primer salto no, destino no | Fallo del proveedor |
| Puerta no responde | Fallo local |
| Ping por IP sí, por nombre no | DNS |
| 169.254.x.x | Sin respuesta del DHCP |
| Todos a la vez, con tormenta | Bucle de nivel 2 |
| Un puesto lento a 100 Mb/s | Par abierto, dúplex o tarjeta |
| Qué datos dar al operador | Circuito, inicio, síntoma, alcance, pruebas, equipo propio y contacto |
| Coste de una incidencia | Técnico, espera del usuario y riesgo |
| Mesa de ayuda mixta | Primer nivel externo; segundo y tercero internos |
| Indicador más rentable | La resolución en primer contacto |
| Informe mensual a dirección | Volumen por categoría, MTTR, SLA, repetidas y problemas |
