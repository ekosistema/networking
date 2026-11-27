---
title: "Vigencia normativa"
description: "Por qué existe este documento. Los programas formativos envejecen. Algunas normas que se citan en manuales y cursos están derogadas y otras han cambiado de nombre. Aquí se recoge qué referencia antigua te puedes encontra"
section: indice
kind: portada
order: 6
tags:
  - redes
  - normativa
  - indice
---

# Vigencia normativa

> **Por qué existe este documento.** Los programas formativos envejecen. Algunas normas que se
> citan en manuales y cursos están derogadas y otras han cambiado de nombre. Aquí se recoge **qué
> referencia antigua te puedes encontrar** y **qué se usa hoy**, que es lo que te pedirán en una
> empresa.

Regla de trabajo: cuando encuentres una referencia antigua, entiende su contenido y cita la
versión vigente. Es la forma de no trabajar con conocimiento caducado.

## 1. Telecomunicaciones en edificios

| Referencia que se encuentra | Situación real | Qué usar hoy |
| --- | --- | --- |
| Real Decreto 401/2003 | **Derogado** | Real Decreto 346/2011, de 11 de marzo, Reglamento de infraestructuras comunes de telecomunicaciones (ICT) |
| Orden CTE/1296/2003 | **Derogada** | Orden ITC/1644/2011, que desarrolla el RD 346/2011 |

Qué importa en la práctica: la estructura del proyecto técnico de ICT, los recintos (superior e inferior), las
canalizaciones y la separación de servicios. Qué conviene decir: "el manual cita el RD 401/2003,
sustituido por el RD 346/2011; el contenido práctico es equivalente".

## 2. Calidad y seguridad de la información

| Referencia que se encuentra | Situación real | Qué usar hoy |
| --- | --- | --- |
| ISO 9001, sin año | Revisada. La edición vigente es **ISO 9001:2026**, publicada en septiembre de 2026 | Muchos textos siguen citando la de 2015; ten presente que la vigente es la de 2026 |
| ISO 27002 | Vigente pero revisada | ISO/IEC 27002:2022, con 93 controles en cuatro temas |
| ISO 27001 | Vigente | UNE-EN ISO/IEC 27001:2023 |

La revisión de 2026 de la ISO 9001 mantiene el enfoque a procesos y la estructura de alto nivel, y
refuerza la claridad de los requisitos y el tratamiento del riesgo y del cambio climático. Los
materiales de formación se escribieron en su mayoría sobre la de 2015, así que es la que más
verás citada: la de 2026 es un dato de cultura profesional que conviene conocer.

El cambio de 2013 a 2022 en la 27002 reorganiza los controles (organizativos, de personas,
físicos y tecnológicos) y reduce el número de dominios. Lo que se usa a diario es el concepto
de plan de calidad y de auditoría, no el listado de controles.

## 3. Cableado estructurado

| Referencia que se encuentra | Situación real | Qué usar hoy |
| --- | --- | --- |
| ISO 11801 | Revisada y dividida en partes | ISO/IEC 11801-1:2017 y siguientes partes |
| UNE EN 50173 | Revisada | UNE-EN 50173-1:2018 |
| Categoría 5 | Obsoleta | Cat 5e como mínimo; en obra nueva, Cat 6 o 6A |
| TIA/EIA-568-B | Revisada | ANSI/TIA-568 (revisión D en adelante), equivalente americano de la 50173 |

Lo importante son las **distancias**: 90 metros de enlace permanente, 100 metros de
canal, y los parámetros que mide el certificador. Eso no ha cambiado y sigue siendo el dato que más se consulta en un proyecto de cableado.

## 4. Redes y protocolos

| Lo que aparece en textos antiguos | Situación real | Comentario |
| --- | --- | --- |
| ATM y Frame Relay | En desuso en acceso | Se estudian como concepto de conmutación, no como tecnología a desplegar |
| X.25 y RDSI | Obsoletas | Interesan por la evolución histórica hacia IP |
| IGRP | Obsoleto | Sustituido por EIGRP; el concepto de vector de distancia sigue siendo útil |
| RIPv1 | Obsoleto | RIPv2 o, mejor, OSPF en cualquier red actual |
| Telnet | Inseguro | SSH. Telnet solo en laboratorio |
| FTP y TFTP | Inseguros | SFTP sobre SSH o FTPS sobre TLS |
| SNMP v1 y v2c | Inseguros | SNMPv3 con autenticación y cifrado |
| WEP y WPA | Rotos | WPA2 como mínimo, WPA3 recomendado |
| Hub | Obsoleto | Switch; el hub solo aparece en la teoría de dominios de colisión |
| BOOTP | Obsoleto | DHCP, que lo engloba |
| ISC DHCP | En fin de mantenimiento desde 2022 | Los servidores nuevos se montan con **Kea**; los manuales siguen explicando la sintaxis de `dhcpd.conf`, que es válida para estudiar |
| 802.11b y g | Obsoletos | Wi-Fi 6 (802.11ax) y Wi-Fi 7 (802.11be) |
| Cat 3 para voz | Obsoleto | Todo se cablea igual, con Cat 5e o superior |

## 5. Normas que se citan con frecuencia y conviene tener localizadas

| Norma | Para qué sirve |
| --- | --- |
| UNE 157001:2014 | Estructura formal de los documentos de un proyecto técnico |
| UNE-EN 50174 | Instalación del cableado; prácticas de tendido y separación |
| UNE-EN 50346 | Ensayo del cableado instalado, la base de la certificación |
| UNE-EN IEC 62040-3 | Clasificación de SAI en VFI, VI y VFD |
| RD 842/2002 | Reglamento Electrotécnico de Baja Tensión |
| ISO/IEC 20000 | Gestión de servicios de TI, útil en la unidad de incidencias |
| UNE-EN 50600 | Infraestructura de centros de datos |
| IEEE 802.1Q | Etiquetado de VLAN |
| IEEE 802.1X | Autenticación de puerto, base del Wi-Fi empresarial |

## 5 bis. Normas añadidas en la ampliación del material (noviembre de 2026)

Las unidades ampliadas citan estas normas. La columna final dice si el enlace del BOE se comprobó al
escribir el material; el resto procede de conocimiento general y debe comprobarse antes de citarlo.

| Norma | Para qué se cita | Dónde | Estado de la comprobación |
| --- | --- | --- | --- |
| Real Decreto 311/2022 (Esquema Nacional de Seguridad) | Seguridad en el sector público | «Mercado de comunicaciones» | Enlace del BOE comprobado |
| Real Decreto 513/2017 (instalaciones de protección contra incendios) | Salas técnicas y CPD | «Proyecto de red», «Ejecución de proyectos» | Enlace del BOE comprobado |
| Ley 9/2017 de Contratos del Sector Público | Contratación y umbrales | «Proyecto de red», «Planificación de proyectos» | Comprobado en el BOE consolidado: contrato menor por debajo de 40 000 euros en obras y 15 000 en suministros y servicios (artículo 118) |
| Real Decreto 1098/2001 (reglamento de contratos) | Gastos generales y beneficio de referencia | «Planificación de proyectos» | Artículo 131 comprobado en el BOE consolidado: gastos generales del 13 al 17 por ciento y beneficio industrial del 6 por ciento, aplicables a obras públicas |
| Ley 31/1995 y Reales Decretos 1627/1997, 614/2001, 485/1997 y 773/1997 | Prevención de riesgos en obra | «Ejecución de proyectos» | Enlaces del BOE comprobados |
| Real Decreto 2177/2004 (trabajos temporales en altura) | Seguridad en altura | «Ejecución de proyectos» | Comprobado en el BOE (BOE-A-2004-19311): modifica el RD 1215/1997 |
| Reglamento (UE) 305/2011 y Reglamento delegado (UE) 2016/364 | Reacción al fuego de los cables (clases Aca a Fca) | «Proyecto de red», «Ejecución de proyectos» | Comprobados en EUR-Lex; la UNE-EN 50575 no es consultable de forma gratuita |
| Serie EN 61000-6 (sustituye a UNE-EN 50081 y 50082) | Compatibilidad electromagnética | «Ejecución de proyectos» | No verificado, comprobar edición |
| IEC 60331, 60332, 60754 y 61034 (antes 331, 332, 754 y 1034) | Cable LSZH | «Ejecución de proyectos» | No verificado |
| IEC 61935-1 | Ensayo del cableado balanceado | «Ejecución de proyectos» | No verificado |
| Reglamento (UE) 2016/679 y Ley Orgánica 3/2018 | Protección de datos | Varias | Existencia comprobada en EUR-Lex y BOE; el texto consolidado conviene leerlo antes de citar artículos |
| Directiva (UE) 2022/2555 (NIS2) | Seguridad de redes y sistemas | «Mercado de comunicaciones» | La Directiva existe (EUR-Lex); el estado de su transposición en España no se ha podido comprobar |
| ISO/IEC 27002:2022 y ISO/IEC 19011:2018 | Controles y auditoría | «Documentación técnica», «Gestión de redes» | Enlaces de iso.org no comprobables desde aquí |
| ISO/IEC 20000-1:2018 | Gestión de servicios | «Incidencias» | Enlace de iso.org no comprobable |
| CA/Browser Forum, ballot SC-081v3 | Vigencia de los certificados TLS: 398 a 47 días entre 2026 y 2029 | «Mercado de comunicaciones» | Comprobado en cabforum.org; fechas intermedias en fuentes secundarias coincidentes |
| ITIL 5 (PeopleCert, enero de 2026) | Marco de gestión de servicios | «Incidencias» | Fuente secundaria; no comprobado en la documentación de PeopleCert |
| RFC 8996 (retirada de TLS 1.0 y 1.1) | Seguridad en transporte | «Mercado de comunicaciones» | Existe; comprobada |
| UIT-T G.114 | Retardo de la voz | «Proyecto de red» | Existe; comprobada |
| IEEE 802.1AX | Agregación de enlaces | «Equipos y servicios de red» | Confirmado en fuente secundaria: define LACP y sustituye a la 802.3ad |

## 6. Cómo citar en un informe

- Cita la norma **con su código completo y su año** la primera vez, y después solo el código.
- Si un documento antiguo nombra una norma derogada, responde a lo que pide y añade la
  equivalencia vigente como nota.
- En un informe técnico real, la referencia antigua es un defecto de forma: usa la vigente y
  deja constancia de la fecha de consulta.

## 7. Fecha de esta revisión

Comprobado el **13 de noviembre de 2026**, con la ampliación del apartado 5 bis del **21 de noviembre
de 2026**. Los datos de vigencia cambian: si lees esto un año después, revisa al menos los reales
decretos y las versiones de ISO. Los datos marcados como `[no verificado]` en el resto del material están pendientes de contraste con la fuente.

Fuentes consultadas: Boletín Oficial del Estado (texto consolidado del RD 346/2011), catálogo de
normas UNE de AENOR, catálogo ISO/IEC, IEEE 802 y Wi-Fi Alliance.
