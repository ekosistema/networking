---
title: "Elaboración de la documentación técnica"
description: "Resumen técnico de la unidad Documentación técnica."
section: diseno
unit: documentacion
kind: tecnico
order: 32
tags:
  - redes
  - documentacion
  - tecnico
  - calidad
  - normativa
---

# Documentación técnica · Resumen técnico

> **Alcance.** Los cinco epígrafes del programa de referencia en su orden, con las dos plantillas del caso práctico, un plano de red de ejemplo, tablas de repaso, cifras de memoria, trampas y glosario. Enlaza hacia atrás con el [diseño de la red](../02_Proyecto_Red/README.md) y hacia delante con la documentación de proyecto («Planificación de proyectos»).

## 1. Normas de gestión de la calidad

### 1.1 Qué es la UNE-EN ISO 9001:2015 y qué no es

Es la norma de requisitos de los sistemas de gestión de la calidad. Es certificable y auditable, y certifica el sistema, es decir, la forma de trabajar y las evidencias que genera, no la calidad técnica del producto: una empresa certificada no tiene por qué cumplir la UNE-EN 50173-1:2018, pero su sistema le obliga a comprobarlo y a dejarlo escrito.

La edición de 2015 sustituyó a la de 2008 e introdujo cuatro novedades que se preguntan: pensamiento basado en riesgos, información documentada en lugar de una lista cerrada de procedimientos, análisis del contexto y de las partes interesadas, y diez capítulos cuyos apartados 4 al 10 son auditables. Los siete principios son enfoque al cliente, liderazgo, compromiso de las personas, enfoque a procesos, mejora, decisiones basadas en evidencias y gestión de las relaciones.

**Nota de vigencia.** ISO publicó la revisión ISO 9001:2026 en septiembre de 2026, que sustituye a la de 2015. Esta unidad trabaja con la de 2015, que es la que aún citan muchos programas y contratos; si necesitas la vigente, ten presente que la de 2026 ya está publicada. La adopción como UNE-EN puede ir con retraso [no verificado].

### 1.2 El enfoque a procesos y la ficha de proceso

El apartado 4.4 exige determinar los procesos, su secuencia e interacción, sus criterios y métodos de control, sus recursos, responsabilidades, riesgos y mejoras, y evaluarlos. Se documenta en una ficha, que es la primera forma del caso práctico.

| Campo | Ejemplo: puesta en servicio de un armario |
| --- | --- |
| Nombre y objetivo | Dejar el armario montado, etiquetado y certificado |
| Alcance | Del albarán al acta de aceptación |
| Dueño | Jefe de instalaciones |
| Entradas | Plano de planta, material de almacén |
| Actividades | Montaje, peinado, etiquetado, certificación |
| Salidas | Armario operativo para sistemas |
| Registros | Parte firmado, informe de certificación |
| Indicadores | Aceptados a la primera, meta 90 % |
| Relación con otros procesos | Recibe de compras y de diseño; entrega a sistemas, facturación y garantía |
| Riesgos y mejoras | Etiqueta impresa en lugar de manuscrita |

Tres palabras que se confunden. Un **proceso** es permanente y repetible. Un **procedimiento** es la forma especificada de realizarlo, el documento que lo describe. Un **proyecto** es un esfuerzo temporal con principio, fin y presupuesto: la implantación de una red concreta es un proyecto; el proceso de instalación se repite en todos.

### 1.3 La pirámide documental

Cuatro niveles. Arriba, la política y los objetivos, que aprueba la dirección. Después, los procedimientos y las fichas de proceso, que aprueba calidad. Luego, las instrucciones técnicas, los planos y los pliegos, que aprueba el jefe de proyecto. Abajo, los registros, que conserva calidad. El control exige identificar cada documento, fijar formato y soporte, aprobarlo antes de publicarlo, asegurar que la versión disponible es la vigente, retirar copias obsoletas y definir qué se conserva y cuánto. Una codificación habitual es `PR-RED-04 Rev. 2` con fecha en el cajetín. Un plano sin revisión ni fecha no es un documento controlado: es un dibujo.

### 1.4 Planes de calidad, registros y métricas

El plan de calidad aplica el sistema a un proyecto: qué procedimientos se usan, qué registros se generan y dónde se inspecciona.

| Actividad | Control | Registro | Criterio | Punto de parada |
| --- | --- | --- | --- | --- |
| Replanteo | Cotas y huecos | Acta | Sin discrepancias abiertas | Sí |
| Canalización | Continuidad y curvas | Parte de trabajo | Radio según fabricante | No |
| Tendido | Longitud y etiquetado | Planilla | Enlace de 90 m o menos | No |
| Certificación | Ensayo por norma | Informe | Todos los parámetros en verde | Sí |

Un **registro de calidad** es la evidencia de que una actividad se hizo y cumplió el criterio: parte firmado, acta, informe de ensayo, albarán. Debe ser legible, identificable y recuperable, y conservarse el plazo que fije el contrato o la ley; durante la instalación y al menos la garantía es una regla prudente. Un papel sin fecha, sin firma y sin identificar el elemento no es un registro.

Los indicadores se definen con fórmula y meta, nunca con adjetivos: aceptación a la primera sobre armarios entregados, con meta del noventa por ciento; tomas fuera de límite sobre tomas medidas, con meta del dos por ciento; horas de reetiquetado sobre horas instaladas, con meta del tres por ciento.

### 1.5 Auditorías, no conformidades y mejora

| Tipo | Quién audita | Resultado |
| --- | --- | --- |
| Interna | Personal propio | Informe y plan de acción |
| De cliente | El cliente o su representante | Aprobación como proveedor |
| De certificación | Entidad acreditada | Certificado, ciclo de tres años |

La guía de referencia para auditar sistemas de gestión es la **ISO 19011:2018**. Una auditoría sigue siempre las mismas etapas: programa y plan, lista de verificación, reunión de apertura, recogida de evidencias (entrevista, observación, revisión de documentos y muestreo), hallazgos, conclusiones, reunión de cierre, informe y seguimiento de las acciones. El auditor no opina: **contrasta evidencias con criterios** (la norma, el procedimiento, el contrato).

Un hallazgo puede ser no conformidad mayor, menor, observación o punto fuerte. La **corrección** elimina el síntoma y la **acción correctiva** elimina la causa, con análisis previo por cinco porqués o espina de pescado. Ejemplo: una toma sin certificar. Corrección: certificarla. Causa: la planilla no se cargó en el equipo. Acción correctiva: se carga antes de empezar y el parte no se cierra sin ella.

```text
        PLANIFICAR                        HACER
     +----------------+            +----------------+
     | 4 contexto     |            | 7 apoyo        |
     | 5 liderazgo    |   ----->   | 8 operacion    |
     | 6 planificacion|            |                |
     +-------+--------+            +--------+-------+
             ^                              |
             |                              v
     +-------+--------+            +--------+-------+
     | 10 mejora      |   <-----   | 9 evaluacion   |
     | acciones       |            | auditoria, KPI |
     +----------------+            +----------------+
```

### 1.6 Métricas e indicadores de calidad

Una métrica es un número que sale de una fórmula, con una meta y un dueño. Sirve para decidir, no para decorar un informe. Un buen indicador es **medible, comparable en el tiempo, atribuible a un proceso y accionable**.

| Indicador | Fórmula | Meta | Frecuencia | Si se incumple |
| --- | --- | --- | --- | --- |
| Aceptación a la primera | Armarios aceptados sin reservas entre armarios entregados | 90 por ciento o más | Por obra | Revisar el control antes de entregar |
| Tomas fuera de límite | Tomas con algún parámetro en rojo entre tomas medidas | 2 por ciento o menos | Por obra | Análisis de causa y reentrenamiento |
| Reetiquetado | Horas de reetiquetado entre horas instaladas | 3 por ciento o menos | Mensual | Imprimir etiquetas, no escribirlas |
| Desvío de plazo | Días reales menos días previstos, entre días previstos | 5 por ciento o menos | Por obra | Revisar el plan y las entregas |
| Desvío de coste | Coste real menos coste previsto, entre coste previsto | 5 por ciento o menos | Por obra | Revisar mediciones y cambios |
| Entrega de documentación | Días desde la recepción hasta la entrega final | 10 días o menos | Por obra | Reservar horas en el plan |
| Incidencias en garantía | Incidencias por cada 100 puntos instalados | 1 o menos | Trimestral | Auditoría de la instalación |

```text
Ejemplo con datos de un trimestre:
  Aceptacion a la primera:  45 armarios aceptados de 48         = 93,75 por ciento (cumple)
  Tomas fuera de limite:    18 de 1 120 medidas                 = 1,61 por ciento  (cumple)
  Reetiquetado:             40 h de 1 500 h instaladas          = 2,67 por ciento  (cumple, cerca del limite)
```

Dos reglas para leer indicadores: un número aislado dice poco (importa la **tendencia**), y una meta que siempre se cumple sin esfuerzo es una meta mal puesta.

## 2. Implantación de una red telemática y su normativa

### 2.1 El marco vigente: el Real Decreto 346/2011

El Real Decreto 346/2011, de 11 de marzo, aprueba el Reglamento regulador de las infraestructuras comunes de telecomunicaciones (ICT) en el interior de las edificaciones. Se publicó en el BOE número 78, de 1 de abril de 2011, entró en vigor el 2 de abril y tiene modificaciones de 2019; el texto consolidado es el BOE-A-2011-5834.

La ICT es la infraestructura común del edificio: canalizaciones, recintos, registros, cableado, armarios y elementos de conexión, incluida la de radiocomunicación. No es de ningún operador, es del edificio, y debe permitir que cualquier operador autorizado preste servicio. Se aplica a obra nueva y a rehabilitación integral, y su artículo 9 exige proyecto técnico firmado por técnico competente, ejecutado por instalador de telecomunicaciones habilitado. Al terminar, la dirección de obra emite el certificado de fin de obra, que acredita que lo ejecutado corresponde al proyecto y al reglamento.

### 2.2 La Orden ITC/1644/2011 y el resto del marco

La Orden ITC/1644/2011, de 10 de junio, desarrolla el reglamento y fija en sus anexos las especificaciones de los elementos, los recintos, las canalizaciones, los registros y los ensayos. Alrededor están la Ley 9/2014 General de Telecomunicaciones, el REBT (Real Decreto 842/2002) para el cuadro, la tierra y la protección, el Código Técnico de la Edificación (Real Decreto 314/2006) para el paso de canalizaciones, y la Ley 31/1995 con el Real Decreto 1627/1997 para la seguridad en obra. El cableado se rige por la UNE-EN 50173-1:2018 (diseño), la UNE-EN 50174 (instalación) y la UNE-EN 50346 (ensayo).

### 2.3 Lo que el programa de referencia cita y ya no está vigente

| Referencia del programa de referencia | Estado | Norma vigente |
| --- | --- | --- |
| Real Decreto 401/2003, de 4 de abril | Derogado | Real Decreto 346/2011 |
| Orden CTE/1296/2003, de 14 de mayo | Sustituida | Orden ITC/1644/2011 |

Si la pregunta pide la norma aplicable, se cita la vigente con la equivalencia. Si pide la referencia del programa de referencia, se responde la antigua advirtiendo que está derogada. Nunca se presenta la de 2003 como vigente: un proyecto con esa referencia se devuelve.

### 2.4 Qué documentación genera la norma

Proyecto técnico antes de ejecutar, acta de replanteo al inicio, libro de órdenes durante la obra, certificaciones parciales por fase, certificado de fin de obra y acta de recepción al terminar, y al cierre los planos de estado final con el manual de uso y mantenimiento.

## 3. Estructura del proyecto técnico (UNE 157001:2014)

### 3.1 Los siete documentos básicos

| Nº | Documento | Pregunta que responde | Si falta |
| --- | --- | --- | --- |
| 1 | Índice | Qué hay y dónde | El proyecto es inmanejable |
| 2 | Memoria y anexos | Por qué esta solución y con qué cálculos | No hay justificación técnica |
| 3 | Planos | Dónde queda cada elemento | No se puede ejecutar ni medir |
| 4 | Pliego de condiciones | Con qué reglas se ejecuta y se acepta | No se puede exigir calidad |
| 5 | Mediciones | Cuánto hay de cada unidad | El presupuesto no tiene base |
| 6 | Presupuesto | Cuánto cuesta | No hay oferta económica |
| 7 | Complementarios | Seguridad y salud y estudios exigidos | No se puede iniciar la obra |

Además: portada, formato A4 o A3, numeración de hojas, firma del técnico competente y visado cuando proceda.

### 3.2 Índice y memoria

El índice coincide con la paginación. La memoria se ordena así: antecedentes y objeto, normativa aplicable, descripción de la instalación, justificación con cálculos, cumplimiento normativo, resumen del presupuesto, plazo y conclusiones. Los anexos son los cálculos: atenuación y margen de cada enlace, ocupación de canalización, cálculo eléctrico, autonomía de la SAI, cobertura Wi-Fi y plan de obra. Una tabla de cumplimiento con cuatro columnas (exigencia, norma, cómo se cumple, hoja) resuelve la defensa del proyecto en dos minutos.

### 3.3 Planos

Tipos: situación y emplazamiento, planta de canalizaciones, planta de cableado y tomas, alzado del armario, esquema lógico y esquema unifilar eléctrico. Todo plano lleva cajetín, escala, leyenda, cotas, número, revisión y orientación. Formatos y cajetín se rigen por la UNE-EN ISO 5457 y la UNE-EN ISO 7200; rotulación por la UNE-EN ISO 3098; símbolos eléctricos por la UNE-EN 60617. Escalas: de 1:500 a 1:200 para emplazamiento, 1:100 para planta de oficinas en A3, 1:50 para sala técnica y de 1:20 a 1:10 para alzado de armario y detalles.

### 3.4 Pliego de condiciones

Cinco bloques: generales (legislación, documentación, garantías), facultativas (dirección, ejecución, recepción), económicas (precios, revisión, penalizaciones, abonos a cuenta), técnicas (materiales, normas de ensayo, certificaciones, marcas u "o equivalente") y legales. Debe contener la norma de ensayo de cada toma, la certificación del cien por cien de las tomas, el plazo de entrega de la documentación final, la garantía y la penalización por retraso. El pliego no lleva precios: si los lleva, es un presupuesto.

### 3.5 Mediciones y presupuesto

La medición es la lista de unidades con cantidad y criterio: "toma doble instalada, cableada, etiquetada y certificada, incluido latiguillo de dos metros, medida por unidad terminada". Sin criterio, cada uno mide a su manera. El presupuesto aplica precios unitarios y agrupa por capítulos.

| Capítulo | Ud | Cantidad | Precio | Importe |
| --- | --- | --- | --- | --- |
| Bandeja de 200 mm | m | 24 | 12,00 | 288,00 |
| Toma 6A instalada | ud | 36 | 42,00 | 1.512,00 |
| Armario de 24 U con SAI | ud | 1 | 850,00 | 850,00 |
| Certificación por toma | ud | 36 | 25,00 | 900,00 |
| Total de ejecución material | | | | 3.550,00 |

Las partidas alzadas cubren lo que no se puede medir, como una acometida de longitud incierta: a justificar (se abona lo ejecutado) o a tanto alzado (precio cerrado).

### 3.6 La memoria en la práctica: alternativas, justificación y puntos críticos

El programa de referencia pide que la memoria contenga el **estudio de alternativas**, la **justificación de la solución adoptada** y los **cálculos y puntos críticos**. Un ejemplo breve, para 36 tomas de una oficina:

| Criterio (peso) | A. Cobre Cat 6A F/UTP | B. Cobre Cat 6 U/UTP | C. Fibra hasta el puesto |
| --- | --- | --- | --- |
| Coste por toma instalada (30) | 42 euros, puntuación 4 | 34 euros, puntuación 5 | 95 euros, puntuación 1 |
| Prestaciones (30) | 10 Gb/s a 100 m, puntuación 5 | 10 Gb/s solo a 55 m, puntuación 3 | 10 Gb/s o más y sin interferencias, puntuación 5 |
| Vida útil y futuro (25) | Puntuación 4 | Puntuación 2 | Puntuación 5 |
| Complejidad de instalación (15) | Puntuación 4 | Puntuación 5 | Puntuación 2 |
| **Total ponderado** | **4,30** | **3,65** | **3,35** |

```text
A: 4x30 + 5x30 + 4x25 + 4x15 = 120 + 150 + 100 + 60 = 430  -> 4,30
B: 5x30 + 3x30 + 2x25 + 5x15 = 150 +  90 +  50 + 75 = 365  -> 3,65
C: 1x30 + 5x30 + 5x25 + 2x15 =  30 + 150 + 125 + 30 = 335  -> 3,35
Coste de las tomas: A 36 x 42 = 1 512 euros; B 36 x 34 = 1 224; C 36 x 95 = 3 420
```

**Justificación de la solución.** Se adopta la A porque es la única que da 10 Gb/s a la distancia completa de 100 m con un coste razonable, y la B se descarta porque su techo de 55 m a 10 Gb/s limita el crecimiento. La C se reserva para el vertical entre armarios. Una justificación correcta cita la alternativa descartada y el criterio que decide.

**Cálculos y puntos críticos.** Son los datos que el proyecto debe demostrar:

- **Ocupación de la canalización.** Un cable 6A F/UTP de unos 7,5 mm de diámetro ocupa unos 44 mm cuadrados; 36 cables son unos 1 590 mm cuadrados; una bandeja de 200 por 60 mm tiene 12 000 mm cuadrados, es decir, una ocupación de un 13 por ciento, muy por debajo del límite de buena práctica del 40 al 50 por ciento [límite orientativo, confirmar con la norma de instalación].
- **Longitudes.** Todas las tiradas por debajo de 90 m; las que se acercan a ese límite se marcan.
- **Potencia del SAI.** Carga de 900 W con factor de potencia de 0,9 son 1 000 VA; con un 30 por ciento de margen, 1 300 VA, así que se instala un SAI de 1 500 VA.
- **Punto crítico de interferencia.** La sala con fluorescentes o variadores, donde se separa la canalización de potencia.
- **Punto crítico de plazo.** La entrega de equipos, que fija el camino crítico.

### 3.7 Equivalencia entre el pliego del programa de referencia y el de la UNE 157001

El programa de referencia organiza el pliego en cinco bloques y la UNE 157001 en otros cinco. Es una confusión frecuente:

| Programa de referencia | Equivale a (UNE 157001) | Qué contiene |
| --- | --- | --- |
| Condiciones generales | Condiciones generales y legales | Legislación, documentación contractual, garantías |
| Prescripciones técnicas | Condiciones técnicas | Materiales, normas de ensayo, certificaciones, marcas "o equivalente" |
| Condiciones de ejecución | Condiciones facultativas | Dirección, ejecución, replanteo, recepción |
| Condiciones de certificación | Parte de las facultativas y de las económicas | Cómo se mide, se certifica y se recibe |
| Condiciones económico-administrativas | Condiciones económicas | Precios, abonos a cuenta, revisión, penalizaciones |

La equivalencia es orientativa [interpretación, ambas listas ordenan lo mismo con nombres distintos]. Al leer un documento, usa el nombre que emplee y añade el otro entre paréntesis.

## 4. Dirección de obra y certificación final

### 4.1 Agentes y funciones

| Agente | Función documental |
| --- | --- |
| Promotor | Contrata, aprueba cambios con valoración y recibe |
| Proyectista | Firma el proyecto y responde de la solución |
| Director de obra | Interpreta el proyecto, firma órdenes y certificaciones |
| Director de ejecución | Controla la ejecución material y su calidad |
| Coordinador de seguridad | Aprueba y vigila el plan de seguridad |
| Contratista | Ejecuta, documenta y solicita certificación |

### 4.2 Acta de replanteo

Acto de inicio. Se comprueba sobre el terreno que el proyecto es ejecutable: cotas, huecos, pasos de canalización, disponibilidad del recinto, servicios existentes y estado de la obra civil. Se levanta acta con las discrepancias y su solución, firmada por dirección y contratista. Si afecta a precio o plazo, se tramita como modificación; si es menor, se resuelve con una orden. Un replanteo limpio también se documenta: fija la fecha real de comienzo, de la que cuelgan plazos y penalizaciones.

### 4.3 Libro de órdenes y asistencias

Registro cronológico, foliado y firmado por ambas partes: fecha, orden o incidencia y conformidad del contratista. Deja constancia de las instrucciones, fija la fecha de las incidencias y sostiene las reclamaciones. No sustituye al proyecto: una orden no cambia el objeto del contrato sin valoración y aprobación del promotor. Lo que se habla en obra y no está en el libro no existió.

### 4.4 Certificaciones parciales

Se emiten por obra ejecutada y medida en el sitio, con los precios del contrato. El contratista presenta la medición, la dirección la comprueba, se aplican precios y deducciones, se firma y se factura. No se certifica material a pie de obra sin instalar salvo pacto. La parcial es a cuenta: si al final lo ejecutado es menor, la diferencia se descuenta en la última.

### 4.5 Recepción, garantía y liquidación

La recepción se documenta en acta, sin reservas o con reservas y plazo de subsanación. Desde la recepción corre la garantía, habitualmente un año salvo pacto. La certificación final recoge lo ejecutado con las modificaciones aprobadas y sirve de base a la liquidación: se cierran cuentas, se devuelven garantías y se archiva la documentación final, con planos de estado final, manual de uso, certificados de equipos e informes de certificación del cableado.

## 5. Documentación técnica con programas CAD, CAM y CAE

### 5.1 Qué hace cada uno

| Sigla | Qué hace | Ejemplo en una red |
| --- | --- | --- |
| CAD | Dibuja y documenta | Planta de tomas, alzado de armario |
| CAE | Calcula y simula | Atenuación del enlace, cobertura Wi-Fi, carga de la SAI |
| CAM | Ordena la fabricación | Corte de bandeja a medida, latiguillos a medida |

Herramientas: AutoCAD y sus variantes eléctricas, DraftSight y BricsCAD para planos; QGIS si el plano es geográfico; Visio o Draw.io para la lógica; EPLAN y KiCad para cuadro y electrónica. El flujo es siempre el mismo: capas y bloques, cajetín, escala, revisión, PDF y control de versiones por nombre y fecha.

### 5.2 Capas, simbología, escalas y cajetín

| Capa | Contenido | Tipo de línea |
| --- | --- | --- |
| A-001 | Arquitectura de referencia | Continua fina gris |
| R-CAN | Canalizaciones y bandejas | Continua gruesa azul |
| R-CAB | Cableado horizontal | Discontinua verde |
| R-TOM | Tomas y rosetas | Continua fina roja |
| R-ARM | Armarios y racks | Continua gruesa magenta |

Reglas que evitan rechazos: no usar el color como única información, porque el plano se imprime en blanco y negro; grosores distintos para canalización y cableado; cotas en milímetros o en metros indicándolo; textos legibles al tamaño impreso; simbología coherente con la leyenda. El cajetín lleva título, número, revisión, escala, fecha, autor, cliente, emplazamiento y hoja.

### 5.3 Codificación de tomas y latiguillos

| Elemento | Formato | Ejemplo | Lectura |
| --- | --- | --- | --- |
| Toma | T-P.AA-NN | T-1.02-07 | Planta 1, armario 02, toma 07 |
| Latiguillo | L-SWnn-PP | L-SW01-07 | Switch 01, puerto 07 |
| Cable horizontal | C-P.AA-NN | C-1.02-07 | Del armario 02 a la toma 07 |
| Panel de parcheo | PP-AA | PP-02 | Panel del armario 02 |

Criterios: evitar caracteres que se confunden en una etiqueta (cero y o, uno e i), numerar de izquierda a derecha y de arriba abajo, imprimir en lugar de escribir a mano y etiquetar los dos extremos. La misma cadena debe aparecer en plano, etiqueta, informe de certificación e inventario.

### 5.4 Listado de materiales y referencias comerciales

El listado traduce el plano en una compra: código, descripción, referencia, fabricante, cantidad, unidad y precio.

| Código | Descripción | Referencia | Cant. | Ud |
| --- | --- | --- | --- | --- |
| MAT-001 | Cable U/FTP 6A LSZH | 7A-4P-6A-305 | 3 | rollo |
| MAT-002 | Toma RJ45 6A blindada | RJ45-6A-S | 36 | ud |
| MAT-003 | Latiguillo 6A de 2 m | LP-6A-2-GR | 72 | ud |
| MAT-006 | Switch 24 p PoE+ gestionable | SW-24-P | 3 | ud |

Las referencias son de ejemplo: en un proyecto real se copia la del catálogo con su revisión. En el pliego se admite "o equivalente" para no cerrar la competencia; en el presupuesto se pone la referencia concreta para poder comprar y comparar.

### 5.5 Ejemplo de plano de red

Plano de planta primera de una sede con tres armarios, con cajetín, simbología y escala.

```text
+------------------------------------------------------------------------+
| RED DEPARTAMENTAL SEDE CENTRAL      RED-P1-01   REV. B   ESCALA 1:100  |
| ---------------------------------------------------------------------- |
|                                                                        |
|   PLANTA BAJA                          PLANTA PRIMERA                  |
|                                                                        |
|  +---------+         +---------+    +---------+        +---------+     |
|  |  RITI   |  4H OM3 |  P-01   |    |  P-02   | Cat 6A |  P-03   |     |
|  |  RACK A |-------->|  SW-01  |--->|  SW-02  |------->|  SW-03  |     |
|  |  44 U   |         |  48 p   |    |  24 p   |        |  24 p   |     |
|  +----+----+         +----+----+    +----+----+        +----+----+     |
|       |                   |              |                  |          |
|  +----+----+         +----+----+    +----+----+        +----+----+     |
|  |  SAI    |         | 12 tomas|    | 12 tomas|        | 12 tomas|     |
|  |  3 kVA  |         | T-1.01  |    | T-2.01  |        | T-3.01  |     |
|  |  2 U    |         |  a T-12 |    |  a T-12 |        |  a T-12 |     |
|  +---------+         +---------+    +---------+        +---------+     |
|                                                                        |
| ---------------------------------------------------------------------- |
| 4H OM3 = fibra multimodo 4 hilos   --->  Cat 6A   ->  enlace de cobre  |
|                                                                        |
+------------------------------------------------------------------------+
```

| Símbolo | Significado |
| --- | --- |
| Caja P-0n | Armario de comunicaciones de planta |
| Caja RITI | Recinto inferior de telecomunicaciones, planta baja |
| 4H OM3 | Cuatro hilos de fibra multimodo OM3 en tubo interior |
| Caja T-x.0n | Doce tomas servidas por ese armario |

| Código | Material | Cantidad | Ud |
| --- | --- | --- | --- |
| MAT-001 | Cable U/FTP 6A LSZH | 3 | rollo |
| MAT-002 | Toma RJ45 6A | 36 | ud |
| MAT-003 | Latiguillo 6A de 2 m | 72 | ud |
| MAT-004 | Patch panel 24 p 6A | 3 | ud |
| MAT-009 | Fibra OM3 de 4 hilos, 40 m | 40 | m |

### 5.6 Codificación de equipos de interconexión y direcciones

Se trata de interpretar la codificación de los equipos de interconexión; y aplicarla en un plano. La regla es que **cada equipo tenga un código único, legible y repetido en todos los documentos**.

| Tipo | Prefijo | Formato | Ejemplo | Lectura |
| --- | --- | --- | --- | --- |
| Conmutador | SW | SW-P.AA-nn | SW-1.02-01 | Conmutador 01 del armario 02, planta 1 |
| Router | RT | RT-P.AA-nn | RT-0.01-01 | Router 01 del armario 01, planta baja |
| Cortafuegos | FW | FW-P.AA-nn | FW-0.01-01 | Cortafuegos del armario 01, planta baja |
| Punto de acceso | AP | AP-P.AA-nn | AP-1.02-05 | Punto de acceso 05 servido desde el armario 02, planta 1 |
| SAI | UPS | UPS-P.AA-nn | UPS-0.01-01 | SAI del armario 01, planta baja |
| Panel de parcheo | PP | PP-AA | PP-02 | Panel del armario 02 |

Las direcciones también se codifican con una regla que se pueda leer: una convención habitual es que el tercer octeto repita el número de VLAN, de modo que la VLAN 20 es la 10.20.20.0/24. Quien lee el plano debe poder deducir la subred sin abrir una hoja de cálculo.

| VLAN | Nombre | Subred | Pasarela |
| --- | --- | --- | --- |
| 10 | GESTION | 10.20.10.0/28 | 10.20.10.1 |
| 20 | ADMIN | 10.20.20.0/26 | 10.20.20.1 |
| 70 | VOZ | 10.20.70.0/24 | 10.20.70.1 |

### 5.7 Leer la documentación de un proyecto existente

Se parte de un proyecto ya hecho y se piden **cuatro** cosas. Aplícalas al plano del apartado 5.5:

| Pregunta | Dónde se mira | Respuesta en el ejemplo |
| --- | --- | --- |
| Ubicación de los equipos | Plano y cajetín | SW-01 (48 puertos) en el armario P-01; SW-02 y SW-03 (24 puertos) en P-02 y P-03; RITI y SAI en planta baja |
| Medios de transmisión | Leyenda | Fibra OM3 de 4 hilos entre RITI y P-01; cobre Cat 6A entre SW-02 y SW-03 y hacia las tomas |
| Direcciones de red | Tabla de direccionamiento | La del plan de direccionamiento (VLAN, subred y pasarela) |
| Codificación de equipos | Etiquetas y listado | Código por equipo y tipo, y T-P.AA-NN para las tomas |

Método: empieza por el cajetín (qué plano es y qué revisión), sigue por la leyenda (qué significa cada símbolo), localiza los equipos y sus códigos, cruza con el listado de materiales y con la tabla de direcciones, y anota las incoherencias: es lo primero que se pregunta a un proyecto heredado.

### 5.8 Formatos, archivo y herramientas libres

| Formato | Para qué sirve | Nota |
| --- | --- | --- |
| DWG | Plano editable de AutoCAD y compatibles | Propietario |
| DXF | Intercambio entre programas de dibujo | Abierto, pierde algunos detalles |
| PDF | Entrega y firma | Para archivo a largo plazo, PDF/A |
| IFC | Intercambio de modelos de edificio | Útil si hay proyecto de arquitectura |
| SVG o draw.io | Esquemas lógicos | Editable y ligero |

Alternativas libres a AutoCAD para dibujar planos: LibreCAD y QCAD en 2D, FreeCAD en 2D y 3D; para esquemas lógicos, draw.io. Regla de archivo: se entrega el **PDF firmado** y se conserva el **editable** con la misma revisión, en un repositorio con nombre `código_título_revX_fecha`.

## Perspectiva empresarial

La documentación técnica es un producto del proyecto: se factura, se audita, se hereda y se defiende. Esta sección da la visión de quien la paga y de quien la custodia.

### El coste de la calidad

La calidad cuesta, y la no calidad cuesta más. Se clasifica así:

| Tipo | Qué es | Ejemplo |
| --- | --- | --- |
| Prevención | Evitar el defecto | Plantillas, formación, revisión del plano |
| Evaluación | Detectarlo | Certificar el cableado, inspeccionar el armario |
| Fallo interno | Se detecta antes de entregar | Recablear una toma en obra |
| Fallo externo | Lo detecta el cliente | Visita en garantía, penalización, pérdida de cliente |

Cuanto más tarde se detecta, más cuesta. Con valores ilustrativos: detectar una toma defectuosa al certificarla cuesta 25 euros; tras la entrega, con visita y diagnóstico, 120; y tras la garantía, con rehacer el tendido, 600. Es la razón económica de poner puntos de parada en el plan de calidad y de certificar el cien por cien de las tomas.

### Qué aporta certificarse (y qué no)

- **A favor.** Muchas licitaciones y clientes grandes piden la UNE-EN ISO 9001 como requisito de solvencia técnica; ordena el trabajo; reduce errores repetidos.
- **En contra.** Cuesta (implantación, auditorías anuales, tiempo del personal); si se hace solo por el sello, genera papel sin mejora.
- **Criterio.** Se certifica el sistema que ya se usa, no uno nuevo para el auditor. El mismo razonamiento vale para ISO/IEC 27001 y el Esquema Nacional de Seguridad (Real Decreto 311/2022) cuando el cliente es sector público.

### La documentación como activo y como responsabilidad

- **Entrega.** La documentación final (planos del estado final, informes de certificación, manual de uso) se pacta como entregable y se liga al último pago.
- **Firma y responsabilidad.** El proyecto lo firma un técnico competente; su firma implica responsabilidad profesional, normalmente cubierta por un seguro de responsabilidad civil.
- **Clasificación de la información.** Un plano con direcciones IP, ubicación de armarios y rutas de cableado es información **confidencial**: se entrega con control, nunca con contraseñas, y no se publica. Las credenciales van en un gestor de contraseñas, no en el plano.
- **Vida del documento.** Cada cambio posterior (una toma nueva, un switch sustituido) obliga a actualizar plano, inventario y listado, con nueva revisión y fecha. Un plano desactualizado es peor que no tenerlo: engaña.
- **Custodia y plazos.** Se conserva al menos durante la garantía y el plazo que fijen el contrato y la ley.

### Cumplimiento documental en licitaciones

En un procedimiento público, la oferta se evalúa por criterios y sobre la documentación: memoria técnica, solvencia, certificados (calidad, seguridad, medio ambiente), plan de trabajo y plan de calidad. Una oferta técnicamente buena con la documentación incompleta se descarta. La regla práctica: leer el pliego, hacer una **lista de verificación** con cada documento exigido y comprobarla antes de presentar.

## Tablas de referencia rápida

| Norma | De qué va |
| --- | --- |
| UNE 157001:2014 | Documentos y estructura del proyecto técnico |
| UNE-EN ISO 9001:2015 | Sistema de gestión de la calidad (revisión 2026 publicada) |
| RD 346/2011 | Reglamento de ICT, sustituye al RD 401/2003 |
| Orden ITC/1644/2011 | Desarrollo del reglamento, sustituye a la Orden CTE/1296/2003 |
| RD 842/2002 | REBT, baja tensión |
| UNE-EN 50173-1:2018 | Diseño del cableado estructurado |
| UNE-EN 50174 y 50346 | Instalación y ensayo del cableado |
| UNE-EN ISO 5457 y 7200 | Formatos de hoja y campos del cajetín |
| UNE-EN 60617 | Símbolos gráficos para esquemas |

| Fase PDCA | Capítulos | Qué se hace |
| --- | --- | --- |
| Planificar | 4, 5, 6 | Contexto, liderazgo, objetivos, riesgos |
| Hacer | 7, 8 | Recursos y operación |
| Verificar | 9 | Seguimiento, auditoría, revisión |
| Actuar | 10 | No conformidad y mejora |

## Cifras que hay que saber de memoria

- Documentos básicos del proyecto: 7.
- Capítulos de la ISO 9001: 10, auditables del 4 al 10.
- Principios de la calidad: 7. Fases del PDCA: 4.
- RD 346/2011: de 11 de marzo, BOE de 1 de abril de 2011.
- Orden ITC/1644/2011: de 10 de junio.
- Enlace permanente: 90 m. Canal completo: 100 m.
- Escala de planta de oficinas en A3: 1:100.
- Garantía habitual: 1 año salvo pacto.
- Auditoría de sistemas de gestión: guía ISO 19011:2018.
- Indicadores: fórmula, meta, frecuencia y dueño.
- Codificación de equipos: tipo, planta, armario y número (SW-1.02-01).
- Ocupación de canalización de buena práctica: del 40 al 50 por ciento [orientativo].
- Coste de la calidad: prevención, evaluación, fallo interno y fallo externo.
- Dimensionado del SAI: carga entre factor de potencia, más margen del 30 por ciento.

## Procedimientos paso a paso

### Procedimiento A. Analizar un proceso y describir su ficha

1. Nombrar con verbo y objeto: "certificar el cableado horizontal", no "calidad".
2. Fijar el objetivo en una frase medible.
3. Acotar alcance con el documento que marca el inicio y el final.
4. Identificar dueño e intervinientes con su papel.
5. Listar entradas con proveedor y formato.
6. Describir actividades en orden, con acción y responsable.
7. Definir salidas y destinatario.
8. Enumerar registros con firma, archivo y plazo de conservación.
9. Proponer dos o tres indicadores con fórmula y meta.
10. Cerrar con riesgos y una mejora con responsable y plazo.

### Procedimiento B. Elaborar un plano de red

1. Reunir la planta a escala, el número de puestos por zona y los requisitos del cliente.
2. Situar armarios y recinto principal, con sus recorridos de canalización.
3. Contar tomas por zona y asignar código T-P.AA-NN.
4. Elegir escala según formato: 1:100 en A3 para oficinas.
5. Crear las capas de arquitectura, canalización, cableado, tomas, armarios y textos.
6. Dibujar la canalización con cotas y radios de curva.
7. Situar las tomas con símbolo y código, agrupadas por armario.
8. Trazar el cableado de cada toma a su panel, sin cruces innecesarios.
9. Dibujar el alzado del armario en unidades de rack.
10. Completar el cajetín con título, número, revisión, escala, fecha, autor y hoja.
11. Añadir leyenda, notas de montaje y tabla de tomas por armario.
12. Revisar longitudes contra los 90 m y cerrar la relación de materiales.

### Procedimiento C. Certificar y cerrar la obra

1. Recibir la medición con unidades ejecutadas y referencias.
2. Comprobar sobre el terreno una muestra; si hay duda, medir todo.
3. Verificar que lo medido tiene su registro de calidad.
4. Aplicar precios del contrato y deducciones pactadas.
5. Separar lo ejecutado de lo acopiado, que solo se abona si está pactado.
6. Firmar, numerar y archivar con la medición y los registros.
7. Levantar acta de recepción con o sin reservas, y revisar la documentación final.
8. Emitir la certificación final, liquidar saldos y garantías e iniciar el plazo de garantía.

## Errores típicos

1. **"El proyecto consta de memoria, planos y presupuesto".** Son siete documentos: faltan índice, anexos, pliego y mediciones.
2. **"El pliego fija los precios".** Los precios están en el presupuesto; el pliego fija condiciones y calidades.
3. **"La ISO 9001 certifica la calidad del producto".** Certifica el sistema de gestión.
4. **"El RD 401/2003 está vigente".** Lo derogó el RD 346/2011, aunque el programa de referencia lo cite.
5. **"El acta de replanteo se firma al terminar".** Se firma al inicio.
6. **"La certificación parcial se emite por el total del contrato".** Por lo ejecutado y medido, a cuenta.
7. **"Un registro se corrige si tiene un error".** Se anula, se explica y se conserva.
8. **"El libro de órdenes sustituye al proyecto".** Documenta instrucciones; todo cambio de precio necesita valoración y aprobación.
9. **"Un indicador es un porcentaje".** Es una fórmula con meta, frecuencia y dueño; el porcentaje es solo una de sus formas.
10. **"La corrección y la acción correctiva son lo mismo".** La corrección arregla el síntoma; la acción correctiva elimina la causa.
11. **"Las condiciones de certificación del programa de referencia son una parte del presupuesto".** Son un bloque del pliego: cómo se mide, se certifica y se recibe.
12. **"El plano de red vale sin revisión si está bien dibujado".** Sin revisión, fecha y cajetín no es un documento controlado.
13. **"El auditor propone la solución".** Contrasta evidencias con criterios y reporta hallazgos; la solución es de quien audita.
14. **"Certificarse en ISO 9001 garantiza que la instalación cumple la norma de cableado".** Garantiza que hay un sistema para comprobarlo y registrarlo.
15. **"Se entregan planos con las contraseñas para ahorrar tiempo".** Es información confidencial: las credenciales van aparte, en un gestor.

## Glosario de la unidad

- **Acta de recepción**: declara la obra terminada y aceptada, con o sin reservas.
- **Acta de replanteo**: comprueba al inicio que el proyecto es ejecutable.
- **Acción correctiva**: elimina la causa de una no conformidad.
- **Auditoría**: examen de las evidencias del sistema frente a unos criterios.
- **Cajetín**: recuadro normalizado con título, número, revisión, escala y fecha.
- **Certificación final**: cierra la obra con lo ejecutado y sus modificaciones.
- **Certificación parcial**: cobro a cuenta por la obra ejecutada en una fase.
- **Corrección**: elimina el síntoma de una no conformidad.
- **Enlace permanente**: tramo fijo entre toma y panel, de 90 m como máximo.
- **Ficha de proceso**: describe entradas, actividades, salidas, registros e indicadores.
- **ICT**: infraestructura común de telecomunicaciones, regulada por el RD 346/2011.
- **Latiguillo**: cable flexible corto entre toma o panel y equipo.
- **Libro de órdenes**: registro cronológico de instrucciones e incidencias.
- **Liquidación**: cierre económico del contrato tras la certificación final.
- **Medición**: cuantificación de unidades de obra con su criterio de medida.
- **No conformidad**: incumplimiento de un requisito, documentado y tratado.
- **Partida alzada**: unidad valorada en conjunto porque no se puede medir.
- **PDCA**: planificar, hacer, verificar y actuar, ciclo de mejora continua.
- **Pliego de condiciones**: reglas técnicas, facultativas, económicas y legales.
- **Presupuesto**: valoración de las mediciones con precios unitarios.
- **Registro**: evidencia objetiva de una actividad realizada, conservada sin alteración.
- **Coste de la calidad**: suma de prevención, evaluación y fallos internos y externos.
- **Estudio de alternativas**: comparación razonada de soluciones en la memoria.
- **Hallazgo**: resultado de contrastar una evidencia con un criterio en una auditoría.
- **Indicador**: número con fórmula, meta, frecuencia y dueño que sirve para decidir.
- **ISO 19011**: guía de auditoría de sistemas de gestión.
- **Lista de verificación**: relación de requisitos a comprobar, usada en auditorías y en licitaciones.
- **Plan de calidad**: aplicación del sistema de calidad a un proyecto concreto.
- **Puntos críticos**: aspectos del diseño que deben demostrarse con cálculo.
- **Trazabilidad**: seguir un elemento desde el plano hasta su ensayo y su factura.

## Para profundizar

- [Real Decreto 346/2011, texto consolidado en el BOE](https://www.boe.es/buscar/act.php?id=BOE-A-2011-5834)
- [ISO 9001:2015, ficha de la norma](https://www.iso.org/standard/62085.html)
- [ISO 9001:2026, qué cambia en la revisión](https://www.iso.org/quality-management/iso-9001-2026)
- [UNE, Asociación Española de Normalización](https://www.une.org/)
- [ISO 19011:2018, auditoría de sistemas de gestión](https://www.iso.org/standard/70017.html)
- [Real Decreto 311/2022, Esquema Nacional de Seguridad, en el BOE](https://www.boe.es/buscar/act.php?id=BOE-A-2022-7191)
