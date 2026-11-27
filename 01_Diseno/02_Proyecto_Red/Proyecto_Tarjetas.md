---
title: "Proyecto de red · Tarjetas de repaso"
description: "Tarjetas de repaso de la unidad Proyecto de red."
section: diseno
unit: proyecto
kind: tarjetas
order: 25
tags:
  - redes
  - proyecto
  - tarjetas
---

# Proyecto de red · Tarjetas de repaso

> **Cómo usarlas.** Tapa la columna de la derecha, contesta en voz alta y comprueba. Marca las que
> falles y vuelve a ellas a 1, 3 y 7 días. Hay 83 tarjetas en 8 bloques.

## 1. Conmutación y redes de difusión

| Pregunta | Respuesta |
| --- | --- |
| Tres fases de la conmutación de circuitos | Establecimiento, transferencia y liberación |
| Ventaja y coste de los circuitos | Retardo casi constante; se paga el circuito aunque no se use |
| Datagrama frente a circuito virtual | Cada paquete con destino completo, frente a identificador local corto |
| Qué hace la QoS y qué no | Clasifica, marca y encola por clases; no crea ancho de banda |
| Topologías de difusión | Bus, anillo y estrella |
| Por qué ganó la estrella | El par trenzado abarató el cable y el central pasó de repetir a conmutar |
| Hub frente a switch: dominios de colisión | Hub, uno solo; switch, uno por puerto |

## 2. ATM y Frame Relay

| Pregunta | Respuesta |
| --- | --- |
| Tamaño de la celda ATM | 53 bytes: 5 de cabecera y 48 de datos |
| Por qué la celda es fija | Conmutar en hardware con retardo constante |
| VPI y VCI: bits | 8 o 12 y 16 |
| Clases ATM | CBR, VBR-rt, VBR-nrt, ABR y UBR |
| Capa de adaptación para datos | AAL5 |
| DLCI | Identificador de 10 bits, local por interfaz |
| PVC y SVC | Circuito permanente del operador o establecido bajo demanda |
| Bit DE | Marca lo descartable ante congestión |
| BECN y FECN | Avisos de congestión hacia atrás y hacia delante |
| Qué hace Frame Relay con un error | Descarta; recupera TCP |

## 3. LAN e IEEE 802

| Pregunta | Respuesta |
| --- | --- |
| MAC y LLC | Acceso, dirección y FCS; independencia del medio |
| Trama Ethernet: mínimo y máximo | 64 y 1 518 bytes (1 522 con etiqueta) |
| Por qué existe el mínimo | Detectar la colisión mientras se transmite |
| Tiempo de ranura a 10 Mb/s | 512 tiempos de bit, 51,2 microsegundos |
| 802.1Q: etiqueta | 4 bytes: 3 bits de prioridad y 12 de identificador |
| VLAN utilizables | 4094 |
| 802.1X: actores | Suplicante, autenticador y servidor RADIUS |
| Qué corta la difusión | Router o VLAN; no el switch |
| Dominio IP | Equipos de una misma subred |
| Regla de interconexión | Misma subred, switch; distintas, router |
| NIC: qué debe vigilarse | Velocidad, bus, puertos, funciones y controladores |

## 4. Criterios de diseño y topologías

| Pregunta | Respuesta |
| --- | --- |
| Margen de crecimiento recomendado | 25 por ciento de puertos y 30 por ciento de direcciones |
| Cómo se agrupa para segmentar | Por función y política, no por ubicación |
| Por qué la voz va en su VLAN | Para marcarla y priorizarla; lo crítico es el retardo |
| Por qué una sola /24 es un error | Sin separación no hay política ni invitados controlados |
| Respaldo en una pyme | Agregación de enlaces, doble WAN, SAI y configuración fuera del equipo |
| Núcleo de una pyme | Dos switches apilados que hacen de distribución y núcleo |

## 5. Cableado estructurado

| Pregunta | Respuesta |
| --- | --- |
| Enlace permanente, canal y latiguillos | 90 m, 100 m y hasta 10 m |
| Subsistemas | Entrada de servicios, vertical, armario, horizontal, puesto de trabajo y campus |
| Categoría frente a clase | Componente frente a enlace montado |
| Clase EA | Cat 6A, 10GBASE-T a 100 m |
| Cat 6: alcance a 10 Gb/s | 55 m |
| Cat 8: uso | 25 y 40 Gb/s hasta 30 m |
| Por qué 90 m | Atenuación, diafonía y retardo |
| Retardo en cobre | Unos 5 ns por metro |
| Separación de potencia | Unos 30 cm, cruces a 90 grados |
| Apantallamiento | Solo con tierra, y en ambos extremos |
| Toma de usuario | RJ45 con keystone, T568A o T568B en toda la obra, dos por puesto |
| Normas de cableado | ISO/IEC 11801-1:2017 y UNE-EN 50173-1:2018 |
| Instalación y ensayo | UNE-EN 50174 y UNE-EN 50346 |
| ICT vigente y derogada | RD 346/2011 y Orden ITC/1644/2011; RD 401/2003 y Orden CTE/1296/2003 |

## 6. El proyecto telemático

| Pregunta | Respuesta |
| --- | --- |
| Fases de un proyecto telemático | Estudio previo, diagnóstico, diseño, plan de acción, ejecución y entrega |
| Entrevista más útil | La semiestructurada |
| Técnica para hallar causas | Cinco porqués |
| Qué se redacta tras una entrevista | Un acta validada por escrito |
| Cinco fases del informe de diagnóstico | Recogida, análisis, diagnóstico, recomendaciones, presentación |
| Qué NO hace el diagnóstico | Elegir marcas: eso es la propuesta |
| Requisito bien formulado | Medible, singular y verificable |
| Campos de un requisito | Identificador, requisito, criterio de aceptación y prioridad |
| Campos del inventario | Tipo, modelo, serie, ubicación, versión, direcciones, garantía y responsable |
| Norma que estructura el proyecto | UNE 157001:2014 |

## 7. Plan de acción, seguridad y servicios finales

| Pregunta | Respuesta |
| --- | --- |
| Qué incluye el plan de explotación | Monitorización, mantenimiento, cambios, inventario, informes, formación y renovación |
| Regla 3-2-1 | 3 copias, 2 soportes, 1 fuera de la sede |
| RPO y RTO | Datos que se aceptan perder y tiempo que se acepta parado |
| Qué hace falta para fiarse de una copia | Probar la restauración |
| Principio de acceso | Privilegio mínimo |
| Documentación que se entrega | Diseño, planos, esquemas, guías, certificación, garantías y soporte |
| Calor de un CPD | 1 kW de equipos exige 1 kW de refrigeración (3 412 BTU/h por kW) |
| Norma de instalaciones contra incendios | RD 513/2017 |
| Voz G.711 por Ethernet | 87,2 kb/s por llamada |
| Voz G.729 por Ethernet | 31,2 kb/s por llamada |
| Retardo de la voz | Hasta 150 ms en un sentido (UIT-T G.114) |
| DSCP de voz, vídeo y señalización | EF 46, AF41 34 y CS3 24 |
| Una cámara de 4 Mb/s al día | 43,2 GB |

## 8. Empresa y herramientas

| Pregunta | Respuesta |
| --- | --- |
| Payback | Inversión entre ahorro anual; no descuenta el tiempo |
| VAN | Flujos futuros descontados a hoy menos la inversión |
| TIR | Tasa que anula el VAN |
| Cuándo es rentable | VAN positivo y TIR mayor que la tasa exigida |
| Coste de la no calidad | Lo que cuesta no tener la red: horas perdidas, paradas |
| Exposición de un riesgo | Probabilidad por impacto |
| Cuatro respuestas a un riesgo | Evitar, mitigar, transferir y aceptar |
| Qué cubre la contingencia | Riesgos del proyecto, justificados con la matriz |
| Pagos de una obra | Ligados a entregables; el último, a planos y certificados |
| Packet Tracer, GNS3, EVE-NG, ns-3 | Simula didáctico, emula imágenes reales, emula en multiusuario, investigación |
| Software de planificación | GanttProject, ProjectLibre y MS Project |
| Qué es el camino crítico | La cadena de tareas sin holgura que fija la duración total |
