---
title: "Documentación técnica · Casos prácticos resueltos"
description: "Casos prácticos resueltos de la unidad Documentación técnica."
section: diseno
unit: documentacion
kind: casos
order: 33
tags:
  - redes
  - documentacion
  - casos
---

# Documentación técnica · Casos prácticos resueltos

> **Cómo usar esto.** Cada caso trae enunciado, solución y una rúbrica de diez puntos para autoevaluarte.
> Resuélvelo primero sin mirar la solución y puntúate. Lo que más enseña es **justificar** cada decisión:
> una respuesta correcta sin razón sirve de poco en un trabajo real.

Los seis casos recorren los temas de la unidad: análisis de un
proceso, lectura de documentación de un proyecto existente, diferencia entre los
apartados de un proyecto, plano de red con codificación y aplicación de la norma de
calidad.

## Caso 1. Analizar un proceso y redactar su ficha

**Enunciado.** Una empresa instaladora quiere documentar su proceso de **recepción de material en
obra**: llega un camión con el pedido de cable, tomas y paneles; alguien comprueba que lo recibido
es lo pedido y en buen estado, lo anota y lo almacena. Si algo falla, se reclama al proveedor.

**Se pide.** Redactar la ficha del proceso con: nombre y objetivo, alcance, dueño, entradas,
actividades, salidas, registros, relación con otros procesos, dos indicadores con fórmula y meta,
riesgos y una mejora.

**Solución.**

| Campo | Contenido |
| --- | --- |
| Nombre y objetivo | Recibir material en obra: asegurar que lo recibido coincide con el pedido y está en buen estado |
| Alcance | Desde la llegada del transporte hasta el almacenamiento y registro del material |
| Dueño | Jefe de obra |
| Entradas | Pedido de compra, albarán del proveedor, plan de calidad de la obra |
| Actividades | 1. Comprobar el albarán contra el pedido. 2. Inspeccionar bultos y embalaje. 3. Contar y verificar referencias. 4. Aceptar, aceptar con reservas o rechazar. 5. Almacenar con identificación |
| Salidas | Material aceptado y almacenado, parte de recepción, reclamación si procede |
| Registros | Albarán firmado, parte de recepción con fecha, firma y fotos si hay daños |
| Relación con otros procesos | Recibe de Compras; entrega a Instalación; informa a Facturación y a Calidad |
| Indicadores | Recepciones sin incidencia entre recepciones totales, meta 95 por ciento; días entre incidencia y reclamación al proveedor, meta de 2 días o menos |
| Riesgos y mejora | Riesgo: aceptar material no conforme que se descubre al instalar. Mejora: verificar las referencias contra el plano de materiales, con responsable y plazo |

**Rúbrica (10 puntos).** Nombre con verbo y objeto, objetivo medible y alcance: 2 puntos. Dueño,
entradas, actividades y salidas: 3. Registros y relación con otros procesos: 2. Indicadores con
fórmula y meta: 2. Riesgo y mejora: 1.

**Error típico.** Describir las actividades sin responsable ni orden, o poner indicadores sin meta.

## Caso 2. Leer la documentación de un proyecto existente

**Enunciado.** Te entregan el proyecto de una oficina para su mantenimiento. Del plano de la planta 1
y de los listados sacas estos datos:

| Dato | Contenido |
| --- | --- |
| Plano RED-P1-01, revisión B | Armario P-02 con SW-1.02-01 (24 puertos) y PP-02 (panel de 24); tomas T-1.02-01 a T-1.02-12 |
| Medios | Fibra OM3 de 4 hilos entre el recinto de planta baja y P-02; cobre Cat 6A de P-02 a las tomas |
| Direccionamiento | VLAN 10 GESTION 10.20.10.0/28; VLAN 20 ADMIN 10.20.20.0/26 |
| Inventario | SW-1.02-01 con IP 10.20.10.12; AP-1.02-05 con IP 10.20.10.35 |
| Informes de certificación | Tomas T-1.02-01 a T-1.02-14 certificadas |

**Se pide.**

1. Indicar la ubicación de SW-1.02-01 y decir qué significa cada parte de su código.
2. Indicar los medios de transmisión que llegan al armario P-02.
3. Indicar a qué subred pertenece cada IP del inventario y si es válida.
4. Detectar al menos tres incoherencias o puntos a verificar entre los documentos.

**Solución.**

1. SW-1.02-01 es un conmutador (SW), de la planta 1, armario 02, número 01. Está en el armario P-02,
   con 24 puertos, en la planta 1.
2. Fibra OM3 de 4 hilos desde el recinto de planta baja (troncal) y cobre Cat 6A hacia las tomas.
3. 10.20.10.12 está en la VLAN 10, subred 10.20.10.0/28 (de .1 a .14): válida. 10.20.10.35 **no**
   es válida en esa subred, que termina en .15 (broadcast); parece un error de dirección o de VLAN.
4. Incoherencias:
   - AP-1.02-05 tiene una IP fuera de la subred de gestión: error en el inventario o en el plan.
   - Hay informes de certificación de T-1.02-13 y T-1.02-14, pero el plano solo dibuja tomas hasta
     la 12: faltan en el plano o están en el informe por error. Es incoherencia de trazabilidad.
   - El plano está en revisión B y el inventario no indica a qué revisión corresponde: no se sabe
     cuál es vigente.
   - (Otras válidas) El panel PP-02 es de 24 puertos y hay 12 tomas: reserva del 50 por ciento, no
     documentada; o no consta qué conmutador sirve al AP.

**Rúbrica (10 puntos).** Apartado 1: 2 puntos. Apartado 2: 2. Apartado 3: 3 (1,5 por IP). Apartado
4: 3 (1 por incoherencia bien justificada).

**Método.** Cajetín y revisión, leyenda, equipos y códigos, cruce con listados y direcciones.

## Caso 3. Confeccionar un plano de red

**Enunciado.** Dibuja el plano de una planta única con dos zonas. En la zona A hay 12 tomas servidas
desde el armario P-01; en la zona B, otras 12 desde el armario P-02. En P-01 están el cortafuegos
(FW-1.01-01), el conmutador SW-1.01-01 de 24 puertos y el SAI. En P-02 está SW-1.02-01 de 24
puertos. Entre ambos armarios hay 25 m de fibra OM4 de 4 hilos. Escala 1:100, formato A3, plano
RED-P1-02, revisión A.

**Se pide.** Un plano con cajetín, leyenda, códigos de equipos y tomas, medios y listado de
materiales básico.

**Solución.**

```text
+------------------------------------------------------------------------+
| OFICINA CENTRAL - RED DEPARTAMENTAL     RED-P1-02   REV. A   ESC. 1:100|
| ---------------------------------------------------------------------- |
|                                                                        |
|   ZONA A                                   ZONA B                      |
|                                                                        |
|  +------------+                          +------------+                |
|  |   P-01     |   OM4 4H, 25 m           |   P-02     |                |
|  | FW-1.01-01 |------------------------->| SW-1.02-01 |                |
|  | SW-1.01-01 |                          |  24 puertos|                |
|  | UPS-1.01-01|                          +-----+------+                |
|  +-----+------+                                |                       |
|        | Cat 6A                                | Cat 6A                |
|  +-----+------+                          +-----+------+                |
|  | 12 tomas   |                          | 12 tomas   |                |
|  | T-1.01-01  |                          | T-1.02-01  |                |
|  | a T-1.01-12|                          | a T-1.02-12|                |
|  +------------+                          +------------+                |
|                                                                        |
| ---------------------------------------------------------------------- |
| OM4 4H = fibra multimodo de 4 hilos     Cat 6A = enlace de cobre       |
+------------------------------------------------------------------------+
```

| Código | Material | Cantidad | Ud |
| --- | --- | --- | --- |
| MAT-001 | Cable U/FTP 6A LSZH | 2 | rollo |
| MAT-002 | Toma RJ45 6A | 24 | ud |
| MAT-003 | Latiguillo 6A de 2 m | 48 | ud |
| MAT-004 | Panel de parcheo 24 p 6A | 2 | ud |
| MAT-005 | Fibra OM4 de 4 hilos | 25 | m |

**Lista de comprobación del plano.**

- Cajetín completo: título, número, revisión, escala, fecha, autor y hoja.
- Leyenda con cada símbolo y cada medio.
- Códigos únicos de equipos (SW, FW, UPS) y tomas (T-P.AA-NN) y coincidentes con el listado.
- Medios con su tipo y longitud.
- Todas las tiradas por debajo de 90 m: indicar la máxima.
- El plano no usa solo el color como información.

**Rúbrica (10 puntos).** Cajetín: 2 puntos. Equipos y tomas con código correcto: 3. Medios y leyenda: 2.
Listado de materiales: 2. Comprobación de longitudes: 1.

## Caso 4. Memoria: alternativas, justificación y puntos críticos

**Enunciado.** Para dar cobertura Wi-Fi a una oficina de 600 metros cuadrados con 70 usuarios se
valoran tres alternativas:

| Alternativa | Descripción | Coste | Cobertura y capacidad |
| --- | --- | --- | --- |
| A | 4 puntos de acceso Wi-Fi 6 gestionados, con controladora en la nube | 2 400 euros | Buena y escalable |
| B | 1 router doméstico con repetidores | 380 euros | Mala en los extremos, sin gestión |
| C | 2 puntos de acceso Wi-Fi 6 gestionados | 1 250 euros | Aceptable, con zonas débiles |

**Se pide.**

1. Comparar con una matriz ponderada (coste 30, cobertura 30, gestión 25, escalabilidad 15), con
   puntuaciones: A (3, 5, 5, 5), B (5, 2, 1, 1), C (4, 3, 5, 3).
2. Redactar la justificación de la solución adoptada.
3. Indicar tres puntos críticos con su cálculo: la carga de PoE si cada punto de acceso consume 20 W
   y el conmutador tiene 370 W de presupuesto PoE (con 12 teléfonos de 5 W), la potencia del SAI
   para una carga de 450 W con factor de potencia 0,9 y margen del 30 por ciento, y el
   interferente más probable.

**Solución.**

```text
1. A: 3x30 + 5x30 + 5x25 + 5x15 =  90 + 150 + 125 + 75 = 440  -> 4,40
   B: 5x30 + 2x30 + 1x25 + 1x15 = 150 +  60 +  25 + 15 = 250  -> 2,50
   C: 4x30 + 3x30 + 5x25 + 3x15 = 120 +  90 + 125 + 45 = 380  -> 3,80

3. PoE: 4 AP x 20 W = 80 W; 12 telefonos x 5 W = 60 W; total 140 W < 370 W (cumple, 38 por ciento).
   SAI: 450 / 0,9 = 500 VA; con 30 por ciento: 650 VA; se elige un SAI de 750 VA o 1 000 VA.
```

**Justificación.** Se adopta la A porque es la que mejor puntúa (4,40) gracias a su cobertura y a su
gestión centralizada, que a 70 usuarios es decisiva. La B se descarta por cobertura y por falta de
gestión; la C, por zonas débiles que obligarían a ampliar después, con un sobrecoste. La
diferencia de coste entre A y C es de 1 150 euros y se compensa con el ahorro de una futura
ampliación.

**Puntos críticos.** El presupuesto de PoE del conmutador (cumple con holgura), la autonomía del SAI
y el solape de canales en 2,4 GHz con redes vecinas (se planifica con canales de 5 GHz y 20 MHz
en 2,4 GHz). Se deja constancia de que se hará un estudio de cobertura con medidas en obra.

**Rúbrica (10 puntos).** Apartado 1: 4 puntos. Apartado 2: 3 (incluye citar las descartadas y el
criterio). Apartado 3: 3.

## Caso 5. Mediciones, presupuesto y certificación parcial

**Enunciado.** Contrato de ejecución material con estos precios y cantidades:

| Unidad | Cantidad | Precio (euros) |
| --- | --- | --- |
| Bandeja de 200 mm (m) | 24 | 12,00 |
| Toma 6A instalada (ud) | 36 | 42,00 |
| Armario de 24 U con SAI (ud) | 1 | 850,00 |
| Certificación por toma (ud) | 36 | 25,00 |

A final de mes el contratista presenta como ejecutado: toda la bandeja, 20 tomas instaladas, el
armario instalado y 12 tomas certificadas. Además solicita que se le abonen 16 tomas que tiene
acopiadas en el almacén de la obra. El promotor pide 4 tomas más, no incluidas en el contrato.

**Se pide.**

1. Calcular el presupuesto de ejecución material del contrato.
2. Calcular la certificación parcial número 1 y el porcentaje certificado.
3. Resolver la petición de abonar el acopio.
4. Resolver la petición de las 4 tomas adicionales y su valoración.
5. Indicar qué retención de garantía se descontaría si se pacta un 5 por ciento.

**Solución.**

```text
1. Presupuesto: 24 x 12 = 288 | 36 x 42 = 1 512 | 1 x 850 = 850 | 36 x 25 = 900
   Total ejecucion material = 3 550,00 euros

2. Certificacion 1: bandeja 24 x 12 = 288 | tomas 20 x 42 = 840 | armario 850
                    | certificacion 12 x 25 = 300      Total = 2 278,00 euros
   Porcentaje: 2 278 / 3 550 = 64,17 por ciento

3. Acopio: 16 x 42 = 672 euros. No se abona salvo que el contrato lo prevea: se certifica lo
   ejecutado y medido en el sitio, no el material sin instalar.

4. Tomas adicionales: 4 x 42 = 168; certificacion 4 x 25 = 100; total 268 euros. Es una
   modificacion: no cambia el contrato sin orden valorada y aprobacion del promotor, y se
   anota en el libro de ordenes.

5. Retencion del 5 por ciento: 2 278 x 0,05 = 113,90 euros; se abonan 2 164,10.
```

**Rúbrica (10 puntos).** Apartado 1: 2 puntos. Apartado 2: 3. Apartado 3: 2 (razón). Apartado 4: 2.
Apartado 5: 1.

**Error típico.** Certificar el acopio, o añadir las tomas nuevas sin aprobación previa.

## Caso 6. Indicadores, auditoría y acciones correctivas

**Enunciado.** El informe trimestral de la instaladora recoge: 800 tomas medidas con 22 fuera de
límite; 30 armarios entregados con 28 aceptados a la primera; 60 horas de reetiquetado sobre 1 800
instaladas; un plazo real de 46 días frente a 40 previstos; y un coste real de 52 000 euros frente
a 50 000 previstos. Metas: tomas fuera de límite 2 por ciento o menos, aceptación a la primera 90
por ciento o más, reetiquetado 3 por ciento o menos, desvío de plazo 5 por ciento o menos y desvío
de coste 5 por ciento o menos.

**Se pide.**

1. Calcular los cinco indicadores y decir cuáles incumplen la meta.
2. Para el de tomas fuera de límite, proponer una corrección y una acción correctiva, con análisis
   de causa por cinco porqués si la causa es que las planillas de certificación no se cargaron.
3. Clasificar el hallazgo de plazo (no conformidad mayor, menor u observación) y justificarlo.

**Solución.**

| Indicador | Cálculo | Resultado | Meta | Estado |
| --- | --- | --- | --- | --- |
| Tomas fuera de límite | 22 / 800 | 2,75 por ciento | 2 por ciento o menos | Incumple |
| Aceptación a la primera | 28 / 30 | 93,3 por ciento | 90 por ciento o más | Cumple |
| Reetiquetado | 60 / 1 800 | 3,33 por ciento | 3 por ciento o menos | Incumple |
| Desvío de plazo | (46 - 40) / 40 | 15 por ciento | 5 por ciento o menos | Incumple |
| Desvío de coste | (52 000 - 50 000) / 50 000 | 4 por ciento | 5 por ciento o menos | Cumple |

**Análisis de causa.** Por qué hay tomas fuera de límite: porque no se detectó la desviación al
instalar. Por qué no se detectó: porque la certificación se hizo al final. Por qué se hizo al
final: porque la planilla de certificación no se cargó en el equipo al empezar. Por qué no se cargó:
porque nadie tenía la tarea. Por qué nadie la tenía: porque el procedimiento no la incluye.

- **Corrección:** recertificar y rehacer las 22 tomas fuera de límite.
- **Acción correctiva:** modificar el procedimiento para que la planilla se cargue antes de empezar y
  el parte de trabajo no se cierre sin certificación.

**Clasificación del plazo.** Una desviación del 15 por ciento frente a una meta del 5 es un
incumplimiento reiterable de un requisito del sistema: no conformidad **menor** si es un caso
aislado y se corrige; **mayor** si es sistemática en varias obras o afecta al compromiso con el
cliente. Se justifica con evidencias de cuántas obras presentan el desvío.

**Rúbrica (10 puntos).** Apartado 1: 4 puntos. Apartado 2: 4 (2 por el análisis, 1 por la corrección,
1 por la acción correctiva). Apartado 3: 2.

## Autocorrección

| Caso | Tu nota | Qué repasar si fallas |
| --- | --- | --- |
| 1. Ficha de proceso | | Sección 1.2 y procedimiento A |
| 2. Leer un proyecto | | Secciones 5.6 y 5.7 |
| 3. Plano | | Secciones 5.2, 5.3 y procedimiento B |
| 4. Memoria | | Sección 3.6 |
| 5. Presupuesto y certificación | | Secciones 3.5, 4.4 y procedimiento C |
| 6. Indicadores y auditoría | | Secciones 1.5 y 1.6 |
