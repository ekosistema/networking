---
title: "Elaboración de la documentación técnica"
description: "Resumen conceptual de la unidad Documentación técnica."
section: diseno
unit: documentacion
kind: conceptual
order: 31
tags:
  - redes
  - documentacion
  - conceptual
  - calidad
---

# Elaboración de la documentación técnica

> **En una frase.** Documentar una red es fabricar la prueba de que está bien diseñada, bien instalada y bien cobrada; el día que falta esa prueba, la red deja de valer lo que costó.

## Por qué existe este tema

Una nave con doscientos puestos. La red funciona tres años sin que nadie la toque. Un martes, el switch del ala este empieza a perder paquetes. Llega el técnico, abre el armario y encuentra cuarenta latiguillos sin etiqueta, un panel sin numerar y ningún plano. La avería era de veinte minutos; la búsqueda duró dos días. La factura llegó después, y el cliente la discutió porque no había forma de demostrar qué se había hecho.

Alrededor de esa escena hay tres presiones que no se esquivan. La legal: un edificio con infraestructura común de telecomunicaciones no se legaliza sin proyecto y sin certificado. La contractual: lo que no está en el pliego no se exige y lo que no está medido no se cobra. La operativa: quien mantenga la red en dos mil treinta y dos necesitará el plano de hoy, no una explicación de pasillo.

Hay una cuarta razón, menos vistosa: documentar es la parte del trabajo que se factura sin que se vea. En un proyecto pequeño, entre una cuarta y una tercera parte del esfuerzo se va en memoria, planos y mediciones. Un proyecto sin planos no es un proyecto barato: es una factura con buena letra que el cliente no puede usar.

## El mapa

La unidad va de la calidad al plano, y el proyecto es lo que lo une todo.

```text
                 +---------------------------------------+
                 |   SISTEMA DE CALIDAD  (ISO 9001)      |
                 |   proceso, registro, metrica,         |
                 |   auditoria, accion correctiva        |
                 +------------------+--------------------+
                                    |
        +---------------------------+---------------------------+
        |                           |                           |
        v                           v                           v
 +--------------+          +-----------------+         +--------------+
 |  PROYECTO    |          |  EJECUCION      |         |  PLANO       |
 |  UNE 157001  |          |  direccion de   |         |  CAD, codigos|
 |  7 documentos|  ----->  |  obra, actas,   |  ---->  |  simbologia, |
 |  memoria     |          |  certificaciones|         |  materiales  |
 |  pliego      |          |  recepcion      |         |              |
 +--------------+          +-----------------+         +--------------+
        ^                           |
        |                           v
        +--------- mejora continua (PDCA) ----------
```

## Los conceptos, uno a uno

### 1. El proceso y su ficha

**La intuición.** El recorrido del equipaje en un aeropuerto. La maleta entra facturada, se etiqueta, se clasifica y sale por una cinta. La etiqueta es el registro de que pasó, y el aeropuerto cuenta las maletas perdidas para saber si el sistema funciona.

**Lo formal.** Un proceso transforma entradas en salidas aportando valor, con un responsable, unos recursos y unos criterios de control. La UNE-EN ISO 9001:2015 no obliga a escribir un procedimiento por cada proceso, pero sí a determinar cuáles son, su secuencia, sus criterios, sus recursos, sus riesgos y sus mejoras. Se concreta en una ficha de nueve casillas: nombre y objetivo, alcance, dueño, entradas y proveedor, actividades, salidas y destinatario, registros, indicadores con fórmula y meta, y mejoras o riesgos.

**Un ejemplo.** Proceso "puesta en servicio de un armario". Entran el plano de planta y el albarán. Se monta el rack, se peina, se etiqueta y se certifican los latiguillos. Sale un armario operativo. Los registros son el parte firmado y el informe del certificador. El indicador es el porcentaje de armarios aceptados a la primera, con meta del noventa por ciento. La mejora: sustituir la etiqueta manuscrita por impresa, porque un tercio de los rechazos eran etiquetas ilegibles.

### 2. Documento y registro no son lo mismo

**La intuición.** La receta del guiso y el ticket de la carnicería. La receta se corrige y se mejora; el ticket no se toca: dice lo que pasó, con fecha y con importe. Si alguien discute si la carne estaba mala, se mira el ticket.

**Lo formal.** La norma de 2015 habla de "información documentada" y distingue dos funciones. La que prescribe (documento) dice qué hay que hacer: política, procedimiento, instrucción, plano, pliego. La que evidencia (registro) demuestra que se hizo: parte, acta, informe de ensayo, albarán firmado. El documento se controla con versión, aprobación y retirada de copias obsoletas. El registro se conserva íntegro, legible y recuperable durante un plazo definido.

**Un ejemplo.** El procedimiento PR-04 dice cómo se certifica una toma: equipo, norma de ensayo y límites. El registro es el informe con fecha, operador, identificador de la toma y valor medido. Un procedimiento corregido a bolígrafo no vale como registro; un parte de trabajo no sirve de instrucción.

### 3. El proyecto como documento normalizado

**La intuición.** El manual de un mueble. Si sigues las instrucciones, el resultado coincide con la foto de la portada; y si falta un tornillo, la lista de piezas dice cuál. El manual es el contrato entre lo que compraste y lo que tienes que obtener.

**Lo formal.** La UNE 157001:2014 fija siete documentos en un orden que no es arbitrario: índice, memoria y anexos, planos, pliego de condiciones, mediciones y presupuesto. Cada uno responde a una pregunta y alimenta al siguiente. La memoria justifica y calcula; los planos dibujan lo justificado; el pliego fija las reglas; las mediciones cuentan las unidades; el presupuesto les pone precio. Si alteras el orden, el presupuesto se queda sin respaldo.

**Un ejemplo.** Memoria: treinta y seis tomas de categoría 6A justificadas por los puestos previstos. Planos: tres hojas con treinta y seis símbolos numerados. Mediciones: treinta y seis tomas, treinta y seis latiguillos, veinticuatro metros de bandeja. Presupuesto: treinta y seis tomas a cuarenta y dos euros, mil quinientos doce euros. Cambia una cifra de la memoria y tocas tres documentos más: eso es "normalizado".

### 4. El pliego obliga, el presupuesto valora

**La intuición.** El contrato de alquiler y la factura de la luz. El contrato dice a qué te comprometes; la factura dice cuánto. Si la factura contradice el contrato, gana el contrato.

**Lo formal.** El pliego es el documento normativo: condiciones generales, facultativas, económicas, técnicas y legales. Fija materiales, normas de ensayo, certificaciones, garantías, plazos y penalizaciones. El presupuesto es el documento económico: precios unitarios aplicados a las mediciones, con partidas alzadas para lo que no se puede medir. El pliego dice qué es aceptable; el presupuesto, cuánto cuesta lo aceptable.

**Un ejemplo.** El pliego pide categoría 6A y certificación de cada toma según la UNE-EN 50346. El presupuesto pone cuarenta y dos euros por toma instalada, certificada y etiquetada. Si el instalador tiende categoría 6 porque le sobraba, no ha hecho un descuento: ha incumplido, y la partida se rechaza.

### 5. La trazabilidad: del plano a la toma

**La intuición.** El número de bastidor de un coche. Aparece en la documentación, en la chapa del motor y en la ficha de la ITV, y los tres tienen que coincidir. Si no coinciden, el coche no se vende, por bueno que sea.

**Lo formal.** La trazabilidad es poder seguir un elemento desde el plano hasta su existencia física, su ensayo y su factura, con un identificador único y estable. Por ejemplo T-1.02-07 para la toma siete del armario dos de la planta primera, y L-SW01-07 para el latiguillo del puerto siete. El mismo código debe aparecer en el plano, en la etiqueta, en el informe de certificación y en el inventario.

**Un ejemplo.** El certificador mide T-1.02-07 y anota longitud, atenuación y diafonía. La roseta lleva esa etiqueta, el plano la sitúa en el despacho 1.07 y el listado incluye una toma 6A. Si uno de los cuatro no cuadra, la recepción se rechaza y la certificación no se cobra hasta corregirlo.

### 6. La obra se cierra con actas

**La intuición.** La entrega de un piso en alquiler. No acaba cuando el inquilino entra con las cajas: acaba con el inventario firmado, la fianza entregada y la lista de desperfectos acordada.

**Lo formal.** Cuatro instrumentos gobiernan la ejecución. El acta de replanteo fija el inicio y comprueba que el proyecto cabe en el edificio. El libro de órdenes registra instrucciones e incidencias por orden cronológico. Las certificaciones parciales cobran lo ejecutado y medido, no lo previsto. La recepción declara la obra terminada, con o sin reservas, y la liquidación cierra las cuentas con las modificaciones aprobadas.

**Un ejemplo.** Obra de doce mil euros con tres certificaciones: cuarenta, cuarenta y veinte por ciento. Son cuatro mil ochocientos, cuatro mil ochocientos y dos mil cuatrocientos euros. Si en la segunda faltan seis tomas, se certifican treinta y la diferencia se recupera en la siguiente.

## Las confusiones que cuestan puntos

**Documento frente a registro.** El documento dice qué hacer y se revisa; el registro prueba que se hizo y no se toca. Un plano es documento; un acta de recepción es registro.

**Pliego frente a presupuesto.** El pliego obliga y no lleva precios; el presupuesto valora y no fija calidades. El pliego admite "o equivalente"; el presupuesto pone el importe.

**Medición frente a presupuesto.** La medición cuenta unidades; el presupuesto las multiplica por precios. Una medición sin precio no es presupuesto, y un presupuesto sin medición no se defiende.

**Certificación parcial frente a final.** La parcial cobra a cuenta lo ejecutado; la final cierra el contrato con modificaciones y deducciones, y sirve para liquidar.

**Auditoría frente a inspección.** La auditoría revisa el sistema y sus evidencias; el ensayo comprueba el producto físico. Se puede pasar la auditoría y suspender el ensayo de una toma.

**CAD frente a CAE frente a CAM.** CAD dibuja, CAE calcula, CAM fabrica. El plano es CAD; la atenuación del enlace es CAE; el corte de una bandeja es CAM.

**Plano de planta frente a esquema lógico.** El plano dice dónde está cada cosa y a qué escala; el esquema dice cómo se conecta, sin posición física. Hacen falta los dos.

## Tres ideas que completan el cuadro

**El termómetro y la fiebre.** Un indicador es el termómetro de un proceso: da un número, y el número solo vale si sabes qué temperatura es normal. Por eso lleva fórmula (qué se divide entre qué), meta (cuánto es aceptable) y dueño (quién actúa si se pasa). Una sola lectura dice poco; lo que informa es la tendencia. Y una meta que siempre se cumple sin esfuerzo no mide nada.

**La memoria no describe, justifica.** Cualquiera puede decir qué se instala. Lo que distingue a una buena memoria es que explica por qué esta solución y no las otras: compara alternativas con unos criterios y unos pesos, nombra la que descarta y demuestra con cálculos que la elegida aguanta. Los puntos críticos, como las tiradas largas o la interferencia, no se esconden: se señalan y se resuelven.

**El plano es un producto y también un riesgo.** Un plano se entrega, se cobra, se hereda y se audita, y por eso necesita revisión, fecha y dueño. Pero un plano con direcciones, armarios y recorridos es un mapa para quien quiera entrar: se trata como información confidencial y nunca lleva contraseñas. Y un plano desactualizado es peor que ninguno, porque quien lo usa confía en él.

## Conexiones

Esta unidad convierte el diseño en algo verificable. Del [diseño de la red](../02_Proyecto_Red/README.md) salen la topología y el direccionamiento que aquí se documentan; sin ese diseño previo, la memoria no tiene nada que justificar. De la unidad de mercado viene la parte económica: un presupuesto con partidas medidas gana una licitación que una cifra global pierde. La unidad «Planificación de proyectos», de documentación de proyecto, profundiza en el mismo cuerpo documental desde la gestión.

Hacia adelante, la implantación usa tal cual el acta de replanteo, el libro de órdenes y los planos que aquí se producen. En la administración, el inventario no es más que esta trazabilidad llevada al día. El vocabulario está en el [glosario general](../../00_Indice/Glosario.md).

## Autoevaluación

1. ¿Qué cuatro elementos mínimos debe contener la ficha de un proceso?
2. ¿Por qué la norma de 2015 habla de información documentada y no de procedimientos?
3. Enumera los siete documentos de la UNE 157001:2014 en orden.
4. ¿Qué documento responde a "cuánto de cada cosa" y cuál a "cuánto dinero"?
5. Cita dos condiciones del pliego que no aparecen en el presupuesto y explica por qué.
6. El programa de referencia cita el Real Decreto 401/2003. ¿Está vigente? ¿Qué norma lo sustituye?
7. ¿Qué se firma al empezar la obra y qué se comprueba en ese acto?
8. Diferencia corrección y acción correctiva con una toma mal etiquetada.
9. ¿Qué cuatro soportes deben coincidir para que haya trazabilidad?
10. Un instalador entrega treinta y seis tomas y certifica doce. ¿Se cobra la certificación completa?
11. De una obra con cuarenta y ocho armarios, cuarenta y cinco se aceptan a la primera. ¿Qué indicador es, cuánto vale y cumple una meta del noventa por ciento?
12. ¿Qué debe contener la justificación de la solución adoptada en una memoria?
13. ¿Por qué un plano de red no debe llevar contraseñas y qué ocurre si no se actualiza?

## Claves

1. Entradas, actividades, salidas y registros; los indicadores y las mejoras completan la ficha.
2. Porque no impone formato ni soporte, sino control de la información: importa qué se conserva y quién lo aprueba.
3. Índice, memoria y anexos, planos, pliego de condiciones, mediciones, presupuesto y documentos complementarios.
4. Las mediciones cuentan unidades; el presupuesto aplica precios a esas unidades.
5. Por ejemplo la norma de ensayo de cada toma y el plazo de garantía: son obligaciones de ejecución, no importes.
6. No: lo derogó el Real Decreto 346/2011, y la Orden CTE/1296/2003 fue sustituida por la Orden ITC/1644/2011.
7. El acta de replanteo, que comprueba que el proyecto es ejecutable en el emplazamiento real.
8. La corrección es reetiquetar esa toma; la acción correctiva es cambiar el procedimiento de etiquetado.
9. El plano, la etiqueta física, el informe de certificación y el inventario o listado de materiales.
10. No: se certifican doce y el resto queda pendiente hasta su ensayo, porque se cobra lo ejecutado y comprobado.
11. Aceptación a la primera: cuarenta y cinco entre cuarenta y ocho es el noventa y tres coma setenta y cinco por ciento, así que cumple.
12. La alternativa descartada y el criterio que decide, comparadas con pesos, más los cálculos y los puntos críticos que demuestran que la elegida aguanta.
13. Porque es información confidencial y sirve de mapa a quien quiera entrar; las credenciales van en un gestor. Un plano desactualizado engaña a quien confía en él.
