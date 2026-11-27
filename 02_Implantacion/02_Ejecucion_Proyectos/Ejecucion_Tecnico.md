---
title: "Ejecución de proyectos · Resumen técnico"
description: "Resumen técnico de la unidad Ejecución de proyectos."
section: implantacion
unit: ejecucion
kind: tecnico
order: 52
tags:
  - redes
  - ejecucion
  - tecnico
  - certificacion
---

# Ejecución de proyectos · Resumen técnico

> **Alcance.** Siete bloques: seguimiento y control, protocolos de intervención, suministro eléctrico y SAI, certificación del cableado, diagnóstico, calidad y cierre. Con las tablas de límites, las fórmulas y los procedimientos del caso práctico.

## 1. Seguimiento y control del proyecto

El control se hace sobre valores acumulados a una fecha de corte, nunca sobre el gasto del mes suelto:

| Magnitud | Nombre | Sigla inglesa | Qué es |
| --- | --- | --- | --- |
| PV | Valor planificado | BCWS | Coste presupuestado del trabajo que tocaba tener hecho |
| EV | Valor ganado | BCWP | Coste presupuestado del trabajo terminado y aceptado |
| AC | Coste real | ACWP | Dinero gastado en ese trabajo |

De ahí salen: **CV = EV - AC** (desviación en coste), **SV = EV - PV** (desviación en plazo, medida en euros), **CPI = EV / AC** y **SPI = EV / PV**. La proyección es **EAC = BAC / CPI**, con ETC = EAC - AC y VAC = BAC - EAC. La proyección lineal solo vale si el resto del proyecto mantiene la eficiencia; si la desviación fue puntual y ya está corregida, se suma al coste real el presupuesto de lo que queda.

Ejemplo con 240 000 euros y 16 semanas. A la semana 8, PV = 128 000 (cableado terminado y electrónica a la mitad), EV = 120 000 (electrónica al 25 por ciento) y AC = 138 000. CV = -18 000, SV = -8 000, CPI = 0,87, SPI = 0,94, EAC = 275 862 y VAC = -35 862. Mensaje al cliente: retraso pequeño, sobrecoste proyectado del 15 por ciento, y el trabajo que queda es el de más horas propias.

**Incidencias.** Se registran con identificador, fecha, quien detecta, síntoma, elemento afectado, impacto en alcance y plazo, coste estimado, prioridad, responsable y estado. La prioridad sale de una matriz de impacto por urgencia, y el escalado se define por impacto y por tiempo sin resolver, nunca por quién insiste más. Una incidencia que bloquea la certificación de una planta sube al jefe de proyecto en la primera hora.

**Cambios.** Entran por solicitud escrita con qué se cambia, por qué, alternativas, impacto en alcance, plazo, coste, calidad y riesgo, y quién aprueba. Sin aprobación no se ejecuta, salvo parada de servicio, y entonces se regulariza en menos de 24 horas. La línea base solo se mueve con la solicitud aprobada.

**Control de costes.** Cada partida tiene código y cada gasto se imputa a un código; un gasto sin código es un gasto invisible. Los pedidos pendientes de recibir se controlan como coste comprometido aunque no estén facturados. La contingencia se consume con autorización, no por goteo.

**Previsto, programado y real.** El programa de referencia pide comparar tres planes. El **previsto** es la línea base aprobada; el **programado** es la versión vigente del calendario, con los cambios aprobados y los ajustes; el **real** es lo que ha ocurrido. Se comparan en cada fecha de corte: la diferencia entre previsto y real mide la desviación acumulada; la diferencia entre programado y real indica si el plan actual se está cumpliendo. Si el programado se aleja del previsto sin cambios aprobados, alguien está moviendo el plan sin control.

| Plan | Qué es | Quién lo cambia |
| --- | --- | --- |
| Previsto | Línea base aprobada | Solo una petición de cambio aprobada |
| Programado | Calendario vigente con ajustes autorizados | El jefe de proyecto, dentro de su autoridad |
| Real | Lo ocurrido: fechas, horas, gastos | Se registra, no se cambia |

**Asignación y seguimiento de tareas.** Cada tarea se asigna con nombre, fecha de inicio, fecha de fin, entregable y criterio de terminado, y se comunica por escrito al equipo. El seguimiento se hace con un parte diario o semanal (qué se ha hecho, cuánto falta, qué bloquea) y una reunión corta de seguimiento: lo hecho, lo que se hará, los bloqueos. Una tarea al 90 por ciento durante tres semanas no avanza: se define el porcentaje por hitos verificables (0, 50 o 100 por ciento) y no por impresión.

**Comunicación al equipo.** Qué cambia, por qué y desde cuándo, por un canal único y con registro. El equipo que se entera del cambio por el cliente deja de confiar en el jefe de proyecto.

**Petición de cambio.** El formato recoge lo que permite decidir:

| Campo | Contenido |
| --- | --- |
| Identificador y fecha | PC-007, 2027-03-12 |
| Solicitante | Cliente, equipo o proveedor |
| Descripción | Qué se quiere cambiar y por qué |
| Alternativas | Otras formas de resolverlo |
| Análisis de impacto | Alcance, plazo, coste, calidad y riesgo |
| Estimación de esfuerzo | Horas y coste, con la planificación de la solución |
| Decisión | Aprobada, rechazada o aplazada, con firma de quien decide |
| Registro | Versión nueva de la línea base y fecha de aplicación |

Flujo: petición, análisis, aprobación de la solución, estimación y planificación, ejecución y registro. Un cambio aprobado sin actualizar presupuesto y calendario lo paga alguien del margen.

**Documentos que genera el seguimiento:** parte de avance, informe de estado con semáforo, registro de incidencias, registro de cambios, informe de costes con PV, EV y AC, y acta de la reunión de seguimiento.

## 2. Protocolos de intervención

Un procedimiento operativo estándar (POE) es un documento controlado, con versión y fecha: objeto y alcance, responsabilidades, requisitos previos (permisos, ventana horaria, material), pasos numerados, criterio de aceptación medible, registro que genera y actuación ante desviación.

| Protocolo | Cuándo | Contenido | Registro |
| --- | --- | --- | --- |
| Implantación | Tendido y montaje | Etiquetado, tirada, pelado, crimpado, armario | Parte de trabajo, plano actualizado |
| Puesta en servicio | Al energizar y configurar | Comprobaciones, energización, configuración, aceptación | Acta de puesta en servicio |
| Mantenimiento preventivo | Calendario | Limpieza, baterías, firmware, prueba de conmutación | Informe periódico |
| Mantenimiento correctivo | Avería | Diagnóstico, sustitución, verificación | Parte de avería |
| Contingencia | Caída de servicio crítico | Activación, guardia, escalado, comunicación | Informe de evento |

Cuatro reglas que se preguntan. El POE se escribe antes de ejecutar y se prueba en un piloto. Debe decir qué hacer si el criterio no se cumple: repetir, sustituir o elevar no conformidad. El preventivo de un armario incluye revisar la fecha de las baterías del SAI y hacer una prueba de autonomía, no solo mirar la luz verde. La ventana de servicio se pacta y se documenta.

### 2.1 Cómo se elabora un procedimiento operativo estándar

El programa de referencia pide conocer las fases de elaboración. Son diez, en este orden:

| Fase | Qué se hace | Producto |
| --- | --- | --- |
| 1. Preparación de la documentación | Reunir normas, manuales del fabricante, procedimientos previos y registros de fallos | Carpeta de referencia |
| 2. Listado de actividades y secuencia | Enumerar lo que se hace y en qué orden | Lista numerada |
| 3. Diagrama de flujo | Dibujar el camino con sus decisiones | Diagrama |
| 4. Desarrollo del documento | Redactar con el formato normalizado | Borrador |
| 5. Revisión y verificación | Que lo lea quien lo va a usar y que se pruebe en un piloto | Borrador corregido |
| 6. Aprobación | Firma del responsable | Versión 1.0 aprobada |
| 7. Identificación | Código, versión y fecha | PR-RED-07 v1.0 |
| 8. Registro | Alta en el listado de documentos controlados | Documento controlado |
| 9. Distribución | Entrega controlada a quien lo aplica, retirada de la versión anterior | Acuse de recibo |
| 10. Capacitación | Formar a quien lo ejecutará | Registro de formación |

```text
Diagrama de flujo: certificar un enlace permanente

   [Inicio]
      |
   Configurar el certificador (categoria, norma, NVP)
      |
   Medir el enlace
      |
   Resultado: PASA?
      |-- si --> Guardar y etiquetar --> [Fin]
      |
      no
      |
   Identificar el parametro con peor margen
      |
   Corregir (repetir terminacion, sustituir latiguillo, revisar tirada)
      |
   Volver a medir (maximo 2 intentos) --> si sigue sin pasar: no conformidad
```

**Formato normalizado.** Este apartado enumera lo que debe recoger un procedimiento para poder aplicarse:

| Apartado | Ejemplo en "certificar un enlace de cobre" |
| --- | --- |
| Fases que seguir | Las del diagrama de flujo |
| Descripción textual y gráfica | Texto numerado y fotografía de los adaptadores de enlace permanente |
| Pruebas y ajustes | Autotest completo; repetir desde el otro extremo si el margen es menor de 1 dB |
| Medios que se deben utilizar | Certificador con calibración vigente, adaptadores del modelo, latiguillos de referencia |
| Parámetros que hay que controlar | Mapa, longitud, atenuación, NEXT, pérdida de retorno, ACR |
| Normas de seguridad | No medir con la línea PoE conectada; no mirar fibra con luz; orden y limpieza |
| Resultados esperados | Todos los parámetros en verde con margen superior a 1 dB |
| Personas que deben intervenir | Dos técnicos, uno en cada extremo |
| Documento que se debe cumplimentar | Informe del certificador y planilla de enlaces |

**Modificar un procedimiento existente.** El procedimiento nuevo debe nacer de un problema justificado: se documenta qué falla del actual (por ejemplo, 9 de 14 fallos por destrenzado), se prueba la solución antes de adoptarla (piloto en una planta), se cuantifica el ahorro de tiempo y de personal y se recoge el cambio con su motivo en el historial del documento.

**Tipologías.** Los de **implantación** (tendido, montaje, etiquetado), **puesta en servicio** (pruebas, verificaciones y registros antes de dar el servicio por entregado) y **mantenimiento** (preventivo con calendario y correctivo ante avería). Cada uno tiene su registro.

## 3. Sistemas de suministro eléctrico

### 3.1 Medidas y con qué se toman

| Magnitud | Instrumento | Referencia |
| --- | --- | --- |
| Tensión fase neutro | Multímetro o analizador de redes | 230 V, tolerancia del ±10 por ciento |
| Corriente por fase | Pinza amperimétrica | Equilibrio entre fases |
| Potencia y factor de potencia | Analizador de redes | Potencia real contratada |
| Armónicos | Analizador de redes | THD de tensión por debajo del 5 por ciento |
| Aislamiento | Megóhmetro a 500 V | Mínimo 0,5 MΩ |
| Resistencia de tierra | Telurómetro de tres picos o pinza | La que fije la ITC-BT-18 |
| Disparo del diferencial | Comprobador de diferenciales | Tiempo y corriente de disparo |

Un armario con todo el consumo en una fase y 3 A en las otras dos tiene el neutro cargado y calentamiento: se corrige repartiendo cargas en el cuadro.

### 3.2 Protecciones

**Magnetotérmico.** Protege contra sobrecarga (bimetal) y cortocircuito (bobina). Curva B, disparo magnético entre 3 y 5 veces la nominal, para líneas largas y cargas resistivas; curva C, entre 5 y 10, uso general; curva D, entre 10 y 20, motores. El poder de corte debe superar la corriente de cortocircuito del punto; en un cuadro de planta suele haber 6 kA. Protege el cable solo si la sección es la adecuada: 16 A con 1,5 mm² es un error.

**Diferencial.** Detecta la corriente derivada a tierra. En España el esquema habitual es TT, con el neutro a tierra en el transformador y las masas a tierra local, así que el diferencial es obligatorio y no funciona sin tierra. 30 mA para alumbrado y tomas de uso general; 300 mA para protección contra incendios en pública concurrencia. Tipos: AC (alterna senoidal), A (alterna y continua pulsante, el habitual), F y B (continua pura, obligatorio con variadores y algunos SAIs trifásicos).

**Toma de tierra.** La ITC-BT-18 exige que la resistencia sea tal que no aparezcan tensiones de contacto superiores a 50 V en locales secos y 24 V en húmedos. En un armario de comunicaciones se busca por debajo de 5 ohmios y se mide con telurómetro.

**Sobretensiones.** Protectores de tipo 1 (descarga directa), tipo 2 (inducida, en el cuadro general) y tipo 3 (junto al equipo), según UNE-EN 61643-11. Se eligen por Up (cuanto menor, mejor), In e Imax. Sin coordinación entre tipos y sin tierra corta no sirven.

### 3.3 SAI: clases

La clasificación está en **UNE-EN IEC 62040-3**:

| Clase | Tipo | Comportamiento | Transferencia | Rendimiento |
| --- | --- | --- | --- | --- |
| VFI | Doble conversión | Rectifica, carga e invierte siempre | 0 ms | 90 a 95 por ciento |
| VI | Interactivo | Sigue la red y corrige tensión con transformador | 2 a 4 ms | 96 a 98 por ciento |
| VFD | Pasivo | Entrega la red y conmuta ante fallo | 2 a 10 ms | 98 por ciento |

Solo el VFI aísla de huecos, microcortes, variación de frecuencia y armónicos. El VI corrige tensión en un margen de ±15 por ciento y no corrige frecuencia. El VFD no protege de microcortes. En todos hay que mirar el factor de potencia de salida (0,9 habitual), el factor de cresta (3:1), los kVA frente a los kW y el tiempo de transferencia.

### 3.4 Dimensionamiento con ejemplo

1. Sumar potencia real de la carga, medida o estimada al 80 o 90 por ciento de la fuente.
2. Añadir un 20 a 25 por ciento de crecimiento.
3. No pasar del 80 por ciento de la capacidad del SAI.
4. Calcular la energía para la autonomía pedida.
5. Convertir a amperios hora con rendimiento y factor de descarga.

```text
C (Ah) = (P (W) x t (h)) / (rendimiento x Vbat (V)) x 1,25
```

El 1,25 agrupa envejecimiento y pérdida de capacidad a descarga rápida (efecto Peukert).

Ejemplo. Carga medida de 1 450 W; con un 25 por ciento de margen, 1 812 W. Un SAI de 3 kVA con factor 0,9 da 2 700 W, así que trabaja al 67 por ciento. Autonomía de 20 minutos con rendimiento 0,94 y batería de 240 V: energía en continua = (1 450 x 0,333) / 0,94 = 514 Wh; capacidad = 514 / 240 x 1,25 = 2,68 Ah. Dos ramas de 9 Ah dan margen para envejecimiento y permiten sustituir una sin quedarse sin respaldo. La autonomía de catálogo se mide con carga resistiva a media carga: a plena carga y con batería de tres años baja mucho.

### 3.5 Reglamento Electrotécnico de Baja Tensión

**Real Decreto 842/2002**, con las instrucciones ITC-BT-01 a ITC-BT-51 y la ITC-BT-52 posterior. Consecuencias prácticas: la instalación eléctrica del armario y su circuito los ejecuta un instalador autorizado en baja tensión; al terminar se emite el certificado de instalación (el antiguo boletín); y en locales de pública concurrencia, con riesgo de incendio o de características especiales hay inspección inicial por organismo de control (ITC-BT-05). Las verificaciones incluyen continuidad, aislamiento (0,5 MΩ a 500 V), resistencia de tierra y comprobación de protecciones.

### 3.6 Fusible, perturbaciones y elección del SAI

**Fusible.** Es una protección de un solo uso: un hilo calibrado que se funde cuando la corriente supera su valor durante un tiempo. Protege contra cortocircuito y sobrecarga y tiene poder de corte muy alto.

| Protección | Rearmable | Ventaja | Inconveniente | Uso típico |
| --- | --- | --- | --- | --- |
| Fusible gG | No, se sustituye | Poder de corte muy alto, barato | Hay que reponerlo y se puede puentear | Cabecera de cuadro, protección de equipos |
| Fusible aM | No | Admite arranques de motor | Solo cortocircuito | Motores |
| Magnetotérmico | Sí | Rearmable, indica el disparo | Poder de corte menor | Circuitos de distribución |

**Perturbaciones del suministro.** El programa de referencia pide conocerlas y saber qué clase de SAI las resuelve:

| Perturbación | Qué es | Efecto en un armario | VFD (pasivo) | VI (interactivo) | VFI (doble conversión) |
| --- | --- | --- | --- | --- | --- |
| Corte | Pérdida total de tensión | Parada | Sí, con transferencia | Sí | Sí, sin transferencia |
| Microcorte | Corte de menos de un ciclo | Reinicio de equipos | No siempre | Parcial | Sí |
| Hueco de tensión (sag) | Bajada breve de la tensión | Reinicios, errores | Solo con batería | Con transformador | Sí |
| Sobretensión transitoria | Pico muy breve | Daño de fuentes | No | Parcial | Sí |
| Sobretensión sostenida | Tensión alta mantenida | Calentamiento, daño | No | Sí, con regulación | Sí |
| Subtensión sostenida | Tensión baja mantenida | Fallos de fuentes | No | Sí | Sí |
| Armónicos y ruido | Distorsión de la onda | Calentamiento, errores | No | Poco | Sí |
| Variación de frecuencia | Frecuencia fuera de 50 Hz | Problemas con grupos electrógenos | No | No | Sí |

**Nombres comerciales y clase.** El catálogo habla de otra manera que la norma: *off-line* o *standby* es VFD, *line-interactive* es VI y *on-line* de doble conversión es VFI. El **ferrorresonante** usa un transformador saturado que regula la tensión y filtra el ruido; da buena protección pero es pesado, de poco rendimiento y está en desuso.

**Criterios de selección** (de menor a mayor exigencia):

| Entorno | SAI recomendado | Motivo |
| --- | --- | --- |
| Puesto de trabajo o pequeña oficina | VFD o VI | Coste bajo, cortes poco frecuentes |
| Armario de comunicaciones con red estable | VI | Corrige tensión sin pagar la doble conversión |
| Armario crítico, grupo electrógeno o red inestable | VFI | Aísla la carga y da transferencia nula |
| Industria con variadores | VFI con filtro de armónicos | Armónicos y ruido |

Regla: no pagar VFI donde un VI basta, y no poner VFD donde un microcorte para el servicio.

## 4. Certificación de redes de área local

### 4.1 Normas

- **ISO/IEC 11801-1:2017**, cableado genérico, y su serie por tipo de edificio.
- **UNE-EN 50173-1:2018**, versión europea armonizada; define las clases D a FA y sus categorías.
- **UNE-EN 50174-1, -2 y -3**, planificación y prácticas de instalación.
- **UNE-EN 50346**, ensayo del cableado instalado: dice cómo se mide en campo.
- **TIA-568**, referencia norteamericana, con límites parecidos pero no idénticos.

Longitudes: enlace permanente máximo **90 m**; canal máximo **100 m**, hasta **4 conectores** y hasta **10 m** de latiguillos. El margen existe porque el latiguillo es de hilo flexible y atenúa más que el cable rígido.

### 4.2 Parámetros

| Parámetro | Unidad | Qué mide | Mejor cuando |
| --- | --- | --- | --- |
| Mapa de cableado | pasa o falla | Continuidad, orden de pares, cortos, blindaje | Correcto |
| Longitud | m | Longitud eléctrica por retardo y NVP | Bajo el límite |
| Atenuación (IL) | dB | Pérdida por resistencia, dieléctrico y efecto pelicular | Menor |
| Pérdida de retorno (RL) | dB | Energía reflejada por desadaptación de impedancia | Mayor |
| NEXT | dB | Acoplamiento entre pares en el extremo del emisor | Mayor |
| PSNEXT | dB | Suma de los tres pares perturbadores | Mayor |
| FEXT / ELFEXT | dB | Acoplamiento en el extremo lejano, normalizado | Mayor |
| ACR | dB | NEXT menos atenuación: margen señal ruido | Mayor |
| Retardo | ns | Tiempo de ida por el par | Menor |
| Skew | ns | Diferencia de retardo entre pares | Menor |
| Resistencia de bucle | Ω | Ida y vuelta del par, delata cable fino o empalmes | Menor |

Cada uno se mide con el certificador en un barrido de toda la banda de la categoría: 100 MHz en 5e, 250 en 6, 500 en 6A, 600 en 7, 1000 en 7A. La longitud no se mide con cinta: se calcula con el retardo de propagación y el NVP del cable (0,69 típico en Cat 6), y por eso un NVP mal configurado da longitudes falsas.

**Por qué empeora el NEXT al pelar.** El par trenzado cancela los campos de sus dos hilos porque van juntos y girando. Al destrenzar para montar el conector, ese tramo pierde la cancelación, los conductores quedan paralelos y crece la capacidad mutua con los pares vecinos. Más destrenzado, más diafonía, y el efecto crece con la frecuencia. El límite práctico es 13 mm de destrenzado, mantener el trenzado hasta la boca del conector y no abrir más de lo necesario.

**Por qué empeora la pérdida de retorno al crimpar mal.** El par tiene 100 ohmios de impedancia característica que deben mantenerse constantes. Un pin mal asentado, un cable aplastado, un destrenzado largo o un latiguillo doblado en ángulo cerrado crean una discontinuidad local; en ella parte de la energía se refleja hacia el emisor. Menos señal llega, más vuelve y baja el dB de retorno. En tendido, las causas son grapas apretadas, curvas por debajo de cuatro veces el diámetro y empalmes con conectores de otra categoría.

### 4.3 Valores límite orientativos

Valores a 100 MHz, canal de 100 m y enlace permanente, según las tablas de ensayo de campo de TIA-568 y la serie ISO/IEC 11801. El certificador aplica la tabla completa en cada frecuencia.

| Categoría | IL canal | NEXT canal | RL canal | ACR canal | IL enlace | NEXT enlace | RL enlace |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 5e / D | 24,0 dB | 30,1 dB | 10,0 dB | 6,1 dB | 20,4 dB | 32,3 dB | 12,0 dB |
| 6 / E | 21,7 dB | 39,9 dB | 12,0 dB | 18,2 dB | 18,5 dB | 41,8 dB | 14,0 dB |
| 7 / F | 20,8 dB | 62,9 dB | 12,0 dB | 42,1 dB | 17,7 dB | 65,0 dB | 14,0 dB |

Lectura: en 5e el ACR es de solo 6 dB, por eso aguanta 1000BASE-T con poco margen y no aguanta 10GBASE-T. En 6 sube a 18 dB porque el NEXT mejora mucho más de lo que empeora la atenuación. La clase F no usa RJ45 y su NEXT es altísimo porque cada par va apantallado. La 6A mantiene el NEXT de la 6 a 100 MHz pero con límites más estrictos de atenuación y de diafonía exógena hasta 500 MHz. El certificador informa del margen: aprobar con 0,1 dB es frágil.

### 4.4 Procedimiento de certificación

1. Fijar el criterio antes de medir: categoría, norma de ensayo (UNE-EN 50346), modelo de enlace y norma de límites.
2. Comprobar el certificador: calibración vigente, batería, adaptadores del modelo correcto.
3. Configurar categoría, límites, NVP y tipo de conector.
4. Identificar cada enlace con el código del plano, igual en el informe y en la roseta.
5. Medir con adaptadores de enlace permanente en panel y roseta, o con los latiguillos definitivos si es canal.
6. Ejecutar el autotest completo y guardar el resultado etiquetado.
7. Repetir en el otro extremo si el resultado está cerca del límite.
8. Analizar los fallos por causa, no por enlace: un mapa mal repetido es error de montaje; NEXT bajo en una tirada es destrenzado.
9. Corregir y volver a medir con el mismo criterio y el mismo instrumento.
10. Emitir informe con resumen, fallos, márgenes mínimos, firmware, fecha, técnico y norma.

### 4.5 Comprobador frente a certificador

| | Comprobador | Certificador |
| --- | --- | --- |
| Mide | Continuidad, mapa, a veces longitud y tono | Todos los parámetros en toda la banda |
| Precisión | Baja, sin incertidumbre declarada | Declarada y calibrable |
| Resultado | Correcto o incorrecto | Pasa o falla con margen en dB |
| Uso | Verificar una toma, localizar un cable | Emitir el informe contractual |

Un comprobador no certifica ni una 5e; un certificador no se usa para cada toma recién crimpada.

### 4.6 Referencias normativas del programa de referencia y su estado

El programa de referencia cita varias normas con su numeración antigua. En la documentación pueden aparecer así:

| Cita del programa de referencia | Qué regula | Referencia actual |
| --- | --- | --- |
| ISO 11801 y UNE-EN 50173 | Cableado estructurado | ISO/IEC 11801-1:2017 y UNE-EN 50173-1:2018 |
| UNE-EN 50081 y 50082 | Compatibilidad electromagnética: emisión e inmunidad genéricas | Sustituidas por la serie EN 61000-6 (por ejemplo, 61000-6-3 de emisión y 61000-6-1 de inmunidad en entornos residencial y comercial) [verificar la edición vigente] |
| IEC 331 | Resistencia al fuego de cables (mantenimiento del circuito) | IEC 60331 |
| IEC 332 | No propagación de la llama de cables | IEC 60332 |
| IEC 754 | Emisión de gases halógenos ácidos | IEC 60754 |
| IEC 1034 | Densidad de humos | IEC 61034 |
| IEC 61935 | Ensayo de cableado de comunicaciones | IEC 61935-1: especificación de ensayo del cableado balanceado según ISO/IEC 11801 |
| Reglamentación ICT | Infraestructuras comunes de telecomunicaciones | RD 346/2011 y Orden ITC/1644/2011 |

Las cuatro normas IEC de fuego se reúnen en el cable **LSZH** (baja emisión de humos, cero halógenos). En la Unión Europea, la reacción al fuego de los cables de construcción se clasifica por el Reglamento (UE) 305/2011, el Reglamento delegado (UE) 2016/364 (clases Aca, B1ca, B2ca, Cca, Dca, Eca y Fca) y la UNE-EN 50575 [la clase exigida la fija el proyecto de protección contra incendios del edificio]. La compatibilidad electromagnética se rige por la Directiva 2014/30/UE y sus normas armonizadas.

### 4.7 Certificación de fibra óptica

El programa de referencia pide certificar cobre **y fibra**. En fibra se mide distinto: no hay diafonía, y lo que importa es cuánta luz se pierde.

| Nivel | Instrumento | Qué mide | Cuándo |
| --- | --- | --- | --- |
| Tier 1 | Fuente y medidor de potencia (OLTS) | Pérdida del enlace, longitud y polaridad | Siempre |
| Tier 2 | OTDR | Cada evento: conector, empalme, curvatura, con su distancia | Cuando hay que localizar o documentar cada elemento |

**Límite de pérdida** de un enlace: suma de lo que aporta cada elemento, con valores de referencia como los de la unidad «Mercado de comunicaciones» (0,3 dB por conector, 0,1 dB por empalme de fusión, atenuación kilométrica de la fibra). El enlace pasa si la pérdida medida es menor o igual al límite calculado.

```text
Enlace multimodo OM4 de 120 m con 2 conectores y 1 empalme
Limite = 0,12 km x 3,0 dB/km + 2 x 0,3 + 1 x 0,1 = 0,36 + 0,6 + 0,1 = 1,06 dB
Medido: 0,84 dB -> pasa con 0,22 dB de margen
```

Antes de medir se **limpia** y se inspecciona cada conector con un microscopio: la mayor parte de los fallos de fibra son suciedad. Y se usan cordones de referencia de calidad y se anota el método (uno, dos o tres cordones) en el informe.

### 4.8 Calibración y documentación de resultados

Un certificador debe tener **calibración vigente**, que fija el fabricante (suele ser anual) [orientativo]. Una medida sin calibración vigente no tiene valor contractual. Cada informe incluye: identificador del enlace (el del plano), norma y límites, modelo, firmware y fecha de calibración del certificador, fecha, técnico y resultado por parámetro con su margen. Se archivan los ficheros originales además del PDF.

### 4.9 El informe-memoria de mediciones

Cada actividad de medida termina en un informe-memoria. Estructura:

| Apartado | Contenido |
| --- | --- |
| Objetivo y alcance | Qué se midió y por qué |
| Descripción del proceso seguido | Pasos, norma y procedimiento aplicado |
| Medios utilizados | Instrumentos con calibración, adaptadores, software |
| Esquemas y planos | Dónde está cada enlace o punto medido |
| Resultados | Tablas con valores, límites y márgenes |
| Interpretación | Qué significan, diferencias frente a la referencia y causa de cada fallo |
| Conclusiones y acciones | Aprobado o no, correcciones, nueva medición |
| Anexos | Informes originales y fotografías |

La parte que más puntúa es la **interpretación**: comparar con el valor de referencia, señalar la diferencia y justificar el resultado.

## 5. Diagnóstico de averías físicas y lógicas

> **Véase también.** Las herramientas de diagnóstico se describen en los apartados 3 y 4 de la unidad «Incidencias», y el método de resolución en el apartado 2. [Incidencias, resumen técnico](../../03_Administracion/03_Incidencias/Incidencias_Tecnico.md).

Fases: detectar y registrar, delimitar (puesto, latiguillo, roseta, armario, planta, sede), priorizar, formular al menos dos hipótesis, aplicar la prueba que más discrimina, confirmar causa raíz, corregir, verificar y cerrar documentado.

El diagrama de Ishikawa ordena las causas en seis ramas: método (destrenzado, longitud, curvas), máquina (crimpadora gastada, certificador sin calibrar), mano de obra (formación, prisa, rotación), material (categoría, conectores, latiguillos), medición (NVP, adaptadores, límite equivocado) y medio (temperatura, humedad, interferencias).

Diagrama de causa efecto aplicado a un enlace que no certifica.

```text
   METODO        MAQUINA        MANO DE OBRA
      \             |              /
       +-----------+--------------+
       |                          |
       |  ENLACE NO CERTIFICA     |----> efecto
       |                          |
       +-----------+--------------+
      /             |              \
   MATERIAL      MEDICION        MEDIO
```

Hardware: comprobador, certificador, reflectómetro de cobre (TDR) que localiza el defecto a una distancia, OTDR para fibra, generador de tono y sonda, analizador wifi, comprobador de PoE, multímetro y pinza. Software:

```bash
ping -c 4 192.168.10.1          # alcance y latencia
traceroute 10.20.0.1            # camino y punto de pérdida
ipconfig /all                   # direcciones, puerta, DNS
arp -a                          # conflictos de IP
nslookup equipo.dominio.local   # resolución de nombres
iperf3 -c 10.0.0.20 -t 30       # rendimiento real
```

Además, captura de tráfico, contadores SNMP del puerto, registros del switch y syslog. La primera decisión es separar físico de lógico: si el enlace no sincroniza es físico; si sincroniza y pierde paquetes, los contadores de errores CRC del puerto resuelven la duda en segundos.

### 5.1 Averías físicas: tipología, síntomas y pruebas

| Avería | Síntoma típico | Prueba que discrimina | Herramienta |
| --- | --- | --- | --- |
| Cable cortado o aplastado | Sin enlace; el LED no se enciende | Mapa de cableado y distancia al fallo | Comprobador, TDR |
| Conector mal crimpado | Enlace intermitente, errores de CRC | Mapa y pérdida de retorno | Certificador |
| Par invertido, cruzado o abierto | Enlace a 10 o 100 Mb/s en lugar de 1 Gb/s | Mapa de cableado | Comprobador |
| Longitud excesiva | Errores y velocidad baja | Longitud por retardo | Certificador |
| Interferencia electromagnética | Fallos al conectar maquinaria | Medida con y sin el equipo; trazado cerca de potencia | Certificador, inspección |
| Fallo de alimentación (SAI, PoE) | Reinicios, equipos apagados | Medir tensión y carga | Multímetro, comprobador PoE |
| Equipo averiado (puerto, fuente, ventilador) | Un solo puerto o equipo falla | Probar otro puerto y otro latiguillo | Sustitución |
| Fibra sucia o doblada | Pérdida alta, enlace inestable | Inspección y medida de pérdida | Microscopio, OLTS, OTDR |

### 5.2 Averías lógicas: tipología, síntomas y pruebas

| Avería | Síntoma típico | Prueba que discrimina | Herramienta |
| --- | --- | --- | --- |
| IP duplicada | Fallos intermitentes en dos equipos | Conflicto en ARP | `arp -a`, captura |
| Máscara o puerta de enlace erróneas | Funciona en la subred y no fuera | Revisar configuración y rutas | `ipconfig /all`, `traceroute` |
| DHCP agotado o servidor falso | Dirección 169.254.x.x o red ajena | Revisar el reparto y el servidor | Captura, registro del DHCP |
| VLAN incorrecta en el puerto | Equipo en otra red; sin acceso a servicios | Revisar la asignación del puerto | Consola del switch |
| DNS | Se llega por IP pero no por nombre | `nslookup` frente a `ping` por IP | `nslookup` |
| Bucle de nivel 2 (sin STP) | Red muy lenta, tormenta de difusión | Contadores de difusión y CPU del switch | Consola, monitor de red |
| Dúplex no coincidente | Enlace activo pero lento, errores | Contadores de colisiones tardías y CRC | Consola del switch |
| ACL o cortafuegos | Un servicio no responde, el resto sí | Registros del cortafuegos | Registros, captura |
| MTU o fragmentación | Páginas que no cargan, ping pequeño sí | Ping con tamaño y bit de no fragmentar | `ping -f -l` |
| Certificado caducado | Fallo de servicios seguros | Fechas del certificado | Navegador, `openssl` |

**Separar físico de lógico.** Si el enlace no sincroniza, es físico. Si sincroniza y hay errores de CRC, es físico o de dúplex. Si no hay errores y el fallo es de acceso, es lógico.

### 5.3 Caso resuelto: planta lenta a media mañana

1. **Síntoma.** "La red va lenta" en la segunda planta, desde las 10:30, en todo el piso.
2. **Documentación.** Un switch de acceso de planta, conectado al núcleo con dos enlaces, y dos mesas con un switch pequeño propio.
3. **Hipótesis.** (a) Un bucle de nivel 2 por un cable puesto entre dos tomas de la misma mesa. (b) Un enlace con dúplex no coincidente. (c) Un equipo que satura la red.
4. **Plan.** Mirar contadores de difusión y CPU del switch (descarta o confirma el bucle); mirar errores y colisiones por puerto (dúplex); mirar el tráfico por puerto (saturación).
5. **Resultado.** La difusión sube a decenas de miles de paquetes por segundo y la CPU del switch está al 95 por ciento; las luces de la mesa 12 parpadean a la vez. Hipótesis (a) confirmada.
6. **Causa raíz.** Alguien conectó un latiguillo entre dos tomas de un mini switch no gestionable, sin protección contra bucles.
7. **Corrección.** Retirar el latiguillo. **Acción correctiva:** activar la protección contra bucles y la detección de difusión en los puertos de acceso, y prohibir y retirar los mini switches no gestionados.
8. **Verificación.** Contadores normales durante una hora y confirmación de los usuarios.
9. **Informe-memoria.** Síntoma, hipótesis, pruebas, causa, corrección, acción correctiva, tiempo de resolución y lección aprendida.

### 5.4 El informe-memoria de una avería

| Apartado | Contenido |
| --- | --- |
| Identificación | Número, fecha, quién avisa, quién interviene |
| Síntomas | Efectos observados, hora de inicio y alcance |
| Documentación consultada | Planos, esquemas y registros |
| Hipótesis | Al menos una, relacionada con los síntomas |
| Plan de intervención | Pruebas ordenadas por lo que discriminan |
| Medidas y resultados | Valores obtenidos y comparación con la referencia |
| Causa raíz y elemento responsable | Física o lógica, y cuál |
| Corrección y sustitución | Qué se cambió y con qué equivalente |
| Comprobaciones y ajustes | Que se restablece el servicio según las especificaciones |
| Acción correctiva y cierre | Cambio de procedimiento, responsable y plazo |

## 6. Gestión de la calidad

El plan de calidad dice qué se inspecciona, con qué criterio, con qué instrumento, con qué frecuencia, quién firma y qué registro queda. El aseguramiento son los procesos que evitan el defecto (formación, POE, proveedores homologados); el control es la inspección que lo detecta. Se certifica el cien por cien de los enlaces y se muestrean los materiales por lote.

El diagrama de control representa una característica medible en el tiempo con línea central y límites. Puntos fuera de límites, siete puntos seguidos al mismo lado de la media, tendencias y ciclos indican causa especial. La variación dentro de límites es causa común y se corrige cambiando el proceso.

El Pareto ordena las causas por frecuencia: con cuatro o cinco se cubre el 80 por ciento de los defectos. De 14 fallos, nueve por destrenzado son el 64 por ciento, y la acción es formativa, no de revisión uno a uno.

| Causa | Enlaces | Porcentaje | Acumulado |
| --- | --- | --- | --- |
| NEXT bajo | 9 | 64 por ciento | 64 por ciento |
| Longitud sobre 90 m | 3 | 21 por ciento | 85 por ciento |
| Mapa incorrecto | 1 | 7 por ciento | 92 por ciento |
| Pérdida de retorno | 1 | 7 por ciento | 100 por ciento |

El informe de no conformidad lleva identificador, fecha, elemento afectado, requisito incumplido con la norma, evidencia (medida y captura), alcance, corrección inmediata, causa raíz, acción correctiva con responsable y plazo, verificación del cierre y firma. Una no conformidad sin causa raíz se repite. Marco: **UNE-EN ISO 9001:2015**.

### 6.1 Procesos de la calidad del proyecto

Los tres procesos de la gestión de la calidad del proyecto son: **planificar** (qué normas y criterios se aplican y cómo se comprobarán), **asegurar** (que los procesos están bien hechos: formación, procedimientos, proveedores homologados) y **controlar** (inspeccionar y medir para detectar el defecto). Hay dos niveles de normas: de gestión del proyecto (UNE-EN ISO 9001:2015, ISO 21502) y del producto (UNE-EN 50173-1, 50174, 50346).

**Plan de calidad frente a sistema de calidad.** El **sistema** es de la empresa y vale para todos sus proyectos; el **plan** aplica el sistema a un proyecto concreto: qué se inspecciona, con qué criterio, con qué instrumento, quién firma. El plan se prepara, se revisa con el cliente, se acepta y se actualiza cuando cambia algo del proyecto.

**Criterios de valoración de las características de control.** Para cada característica se fija cómo se mide, el valor aceptable y la acción si no se cumple:

| Característica | Instrumento | Criterio | Frecuencia | Si no cumple |
| --- | --- | --- | --- | --- |
| Longitud del enlace | Certificador | 90 m o menos | 100 por cien | Rehacer o añadir armario |
| NEXT, atenuación, retorno | Certificador | Pasa con margen superior a 1 dB | 100 por cien | Corregir y repetir |
| Etiquetado | Inspección visual | Código igual en plano, roseta y panel | Muestreo 10 por ciento | Reetiquetar |
| Material recibido | Revisión de albarán | Referencia y cantidad iguales al pedido | Cada lote | Rechazar o reservas |
| Puesta a tierra | Telurómetro | Menos de 5 ohmios | 1 por armario | Mejorar la toma |

**Fases de control** de una implantación: recepción de materiales, replanteo, canalización, tendido, terminación, certificación, configuración, pruebas de aceptación. Cada fase tiene un punto de inspección y, en las críticas, un **punto de parada**: no se pasa a la siguiente sin firma.

**Ficha de toma de datos.** Es la hoja con la que el inspector registra lo medido:

| Campo | Ejemplo |
| --- | --- |
| Obra, fase y fecha | Sede central, certificación, 2027-03-18 |
| Elemento | T-1.02-07 |
| Característica y criterio | NEXT, margen superior a 1 dB |
| Valor medido | Margen de 2,4 dB |
| Resultado | Cumple |
| Instrumento y calibración | Certificador n.º 123, calibrado hasta 2027-09 |
| Inspector y firma | Nombre y firma |

### 6.2 Histogramas y control de la variación

Un **histograma** agrupa los valores medidos en intervalos y muestra cómo se reparten. Sirve para ver el centro, la dispersión y los casos peligrosos. Con el margen de NEXT de 40 enlaces:

| Margen (dB) | Enlaces | Barras |
| --- | --- | --- |
| 0 a 1 | 2 | ## |
| 1 a 2 | 5 | ##### |
| 2 a 3 | 9 | ######### |
| 3 a 4 | 12 | ############ |
| 4 a 5 | 8 | ######## |
| 5 a 6 | 4 | #### |

La media es de unos 3,3 dB, pero el dato clave es la cola: 7 enlaces (el 17,5 por ciento) pasan con menos de 2 dB y son los que fallarán si cambia un latiguillo o la temperatura. Un histograma sin cola a la izquierda es un proceso sano; con cola, hay que revisar el método de terminación.

| Herramienta | Qué responde | Cuándo |
| --- | --- | --- |
| Histograma | ¿Cómo se reparten los valores? | Analizar una característica medida |
| Pareto | ¿Qué causas explican la mayoría de los defectos? | Priorizar acciones |
| Diagrama de control | ¿El proceso está bajo control o ha cambiado? | Vigilar una característica en el tiempo |
| Ishikawa | ¿Qué causas posibles hay? | Buscar el origen |

**Herramientas informáticas para la calidad:** hoja de cálculo para gráficos y fichas, software de gestión documental o de no conformidades (ticketing), y los propios programas de los certificadores, que exportan resultados.

## 7. Seguridad, recepción y cierre

**Seguridad.** Ley 31/1995 de prevención; RD 1627/1997 si hay obra, con estudio básico y plan de seguridad; RD 614/2001 para riesgo eléctrico, con los cinco pasos del trabajo sin tensión: desconectar, bloquear y señalizar, verificar ausencia de tensión, poner a tierra y cortocircuitar, proteger los elementos próximos. Riesgos típicos: eléctrico, caída en altura, cortes, polvo, espacios confinados, ergonomía, gases de baterías. El EPI es la última barrera. La formación se registra con nombre, contenido, fecha y evaluación.

**Recepción.** Se hace contra el pliego y el plan de pruebas, con el cliente delante. Entregables: planos as-built, esquemas de armario, etiquetado, direccionamiento, inventario con números de serie, certificados, configuraciones respaldadas y manuales. Pruebas de aceptación reales: apagar una fuente para comprobar la redundancia, medir la autonomía del SAI, probar PoE. Acta con defectos pendientes, plazo, garantías por elemento y formación entregada.

**Cierre.** Sin cambios sin aprobar ni incidencias abiertas. Liquidación de subcontratas, devolución de material, lecciones aprendidas en una página, informe final (alcance ejecutado, desviaciones con causa, coste final, calidad y recomendaciones) y expediente archivado con nombre normalizado.

### 7.1 Plan de seguridad y emergencia

El **plan de seguridad** de una obra de red se apoya en la Ley 31/1995 de Prevención de Riesgos Laborales y en sus reglamentos. Los más usados:

| Norma | Regula |
| --- | --- |
| Ley 31/1995 | Marco de prevención: deberes de la empresa y de los trabajadores |
| RD 1627/1997 | Seguridad en obras: estudio básico y plan de seguridad |
| RD 614/2001 | Riesgo eléctrico |
| RD 485/1997 | Señalización de seguridad y salud |
| RD 773/1997 | Equipos de protección individual (EPI) |
| RD 1215/1997 y RD 2177/2004 | Equipos de trabajo y trabajos temporales en altura |
| RD 513/2017 | Instalaciones de protección contra incendios |

[Comprobar el texto consolidado de cada una antes de citarla en un documento.]

**Contenido de un plan de seguridad.** Identificación de la obra y sus responsables; evaluación de riesgos por tarea (eléctrico, altura, cortes, polvo, ergonomía, gases de baterías); medidas preventivas y protecciones colectivas antes que EPI; procedimientos de trabajo seguro (como los cinco pasos del trabajo sin tensión); formación e información registrada; vigilancia de la salud; coordinación con otras empresas; y plan de emergencia.

**Medios y equipos de seguridad y protección:**

| Medio | Para qué | Especificación |
| --- | --- | --- |
| Casco, gafas, guantes aislantes, calzado de seguridad | Cabeza, ojos, manos y pies | Marcado CE y categoría adecuada al riesgo |
| Arnés y línea de vida | Trabajos en altura | Con punto de anclaje certificado |
| Escalera de tijera o plataforma | Acceso | Según el RD 2177/2004 |
| Pértiga y detector de tensión | Verificar ausencia de tensión | Tensión nominal adecuada |
| Gafas y protección de fibra | Cortes de fibra y luz láser | Protección ocular y recogida de restos |
| Extintor portátil | Primer ataque al fuego | Tipo ABC o CO2 junto a los cuadros |
| Botiquín | Primeros auxilios | Contenido y revisión periódica |

**Documentación de emergencia.** Se trata de elaborar la documentación donde aparezcan la ubicación de los equipos de emergencia, las señales, las alarmas y los puntos de salida. Se resuelve con un **plano de emergencia** a escala con: extintores y su tipo, botiquín, pulsadores de alarma, salidas y recorridos de evacuación, punto de reunión, cuadro eléctrico y llave de corte general, teléfonos de emergencia. Las señales siguen la UNE-EN ISO 7010: **prohibición** (círculo rojo), **obligación** (círculo azul), **advertencia** (triángulo amarillo), **emergencia y salvamento** (cuadrado o rectángulo verde) y **equipos contra incendios** (cuadrado rojo).

```text
Plano de emergencia: sala de comunicaciones (resumen)
  [S]  Salida de emergencia          [E]  Extintor CO2 junto al cuadro
  [P]  Pulsador de alarma            [B]  Botiquin
  [Q]  Cuadro electrico, corte general   [R]  Punto de reunion fuera del edificio
  Recorrido de evacuacion: puerta de la sala -> pasillo -> escalera -> [R]
```

**Informe de no conformidad de seguridad.** Mismo formato que el de calidad, con el riesgo concreto (por ejemplo, trabajo en altura sin arnés), la evidencia fotográfica, la medida inmediata (parar), la causa y la acción correctiva.

### 7.2 Recepción provisional, garantía y recepción definitiva

La recepción es un proceso en dos tiempos:

| Hito | Qué ocurre | Qué se firma | Consecuencia |
| --- | --- | --- | --- |
| Recepción provisional | Se comprueba la obra contra el pliego y las pruebas de aceptación | Acta de recepción provisional, con o sin reservas | Empieza el plazo de garantía y se entrega la documentación |
| Plazo de garantía | El contratista corrige defectos y atiende averías cubiertas | Partes de garantía | Se retiene una parte del precio (la retención) |
| Recepción definitiva | Al terminar la garantía se comprueba que no hay defectos pendientes | Acta de recepción definitiva | Se devuelve la retención y se cancela la fianza |
| Liquidación | Cierre económico | Certificación final y saldo | Se cierra el contrato |

La garantía depende de lo pactado (con frecuencia un año). La recepción provisional con reservas obliga a fijar plazo de subsanación; hasta que se cumplan, no se devuelve la retención.

### 7.3 Cierre del proyecto

El cierre es una fase con tareas propias. Si no se hace, el proyecto nunca termina y los costes siguen corriendo.

| Tarea | Contenido |
| --- | --- |
| Transferencia de conocimiento | Entrega de la documentación y formación al equipo de explotación |
| Comunicado de finalización | Aviso formal a cliente, equipo y dirección de que el proyecto ha terminado |
| Informe de costes y cierre económico | Coste final frente a presupuesto, desviaciones con causa, facturas y liquidaciones |
| Archivado | Expediente con nombre normalizado, con la documentación de gestión |
| Inventario de proyectos | Alta del proyecto en el registro de la empresa, con sus datos de referencia |
| Valoración y lecciones aprendidas | Qué salió bien, qué salió mal y qué se cambia |
| Liberación de recursos | Devolución de material, cierre de subcontratas y reasignación del equipo |

**Lecciones aprendidas** en una página: contexto, qué se esperaba, qué ocurrió, causa, qué se hará de otra forma y quién lo asume. Sin responsable y sin fecha, no hay lección: hay un lamento.

## 8. Plan de capacitación técnica

El programa de referencia dedica a la capacitación un bloque completo . Es el momento del proyecto en que se transfiere el conocimiento al equipo que operará la red, y también la formación que una empresa instaladora da a sus técnicos.

### 8.1 Diagnóstico de necesidades

Antes de formar hay que saber qué falta. Si no, se forma lo que ya se sabe. El diagnóstico compara **lo que hace falta** (el perfil del puesto) con **lo que cada persona sabe hacer**, y la diferencia es la necesidad de formación.

| Técnica | Qué aporta | Cuándo se usa |
| --- | --- | --- |
| Análisis del puesto de trabajo | Competencias que exige el puesto | Antes de cualquier plan |
| Análisis de tareas | Pasos y habilidades de cada tarea | Para procedimientos concretos |
| Inventario de habilidades | Lista de lo que cada persona sabe | Grupos con niveles distintos |
| Evaluación del desempeño | Cómo trabaja hoy cada persona | Detectar carencias con datos |
| Observación directa en el puesto | Lo que ocurre realmente | Cuando el cuestionario no basta |
| Encuestas y entrevistas, estructuradas o abiertas | Percepción de necesidades | Con grupos grandes o para matizar |
| Discusión dirigida: lluvia de ideas, foro, mesa redonda, panel | Opiniones y consenso | Equipos que saben de su trabajo |
| Pruebas técnicas | Medir una competencia | Verificar nivel inicial |

Se registra el resultado **individualizado**: una ficha por persona con su nivel de partida en cada competencia (sin conocimiento, básico, autónomo, experto).

### 8.2 Objetivos de capacitación

Un objetivo bien formulado describe lo que la persona será capaz de **hacer**, en términos **observables, alcanzables, concretos y medibles**. Se escribe con un verbo de acción, una condición y un criterio:

| Objetivo mal formulado | Objetivo bien formulado |
| --- | --- |
| Conocer la certificación de cableado | Al terminar, el técnico certificará con el equipo un enlace de cobre Cat 6 y obtendrá un informe con todos los parámetros, en menos de 10 minutos y sin error de configuración |
| Entender el SAI | El técnico medirá la autonomía real de un SAI con carga resistiva y la comparará con la del catálogo |

Verbos útiles: medir, configurar, certificar, identificar, montar. Verbos que no valen: saber, conocer, comprender, interiorizar (no se pueden observar).

En la **capacitación basada en competencias** se forma para un desempeño real y se evalúa con evidencias de que la persona lo hace. Una competencia es la suma de tres tipos de contenido.

### 8.3 Los tres tipos de contenido

| Tipo | Qué es | Ejemplo | Cómo se enseña bien |
| --- | --- | --- | --- |
| Conceptual (saber) | Hechos, conceptos y principios | Qué es el NEXT y por qué empeora al destrenzar | Explicación, esquemas, ejemplos |
| Procedimental (saber hacer) | Cómo se ejecuta una técnica | Certificar un enlace paso a paso | Demostración y práctica supervisada |
| Actitudinal (saber ser) | Valores, hábitos y comportamientos | Etiquetar siempre, trabajar sin tensión, avisar de un error | Ejemplo del formador, normas, feedback |

Las fases para elaborar los contenidos son: analizar las capacidades que se quieren lograr, seleccionar contenidos de los tres tipos, elegir el formato (texto, presentación, vídeo, práctica) y organizarlos en una secuencia (de lo simple a lo complejo, de lo conocido a lo nuevo).

### 8.4 Métodos y técnicas de formación

| Método | Cómo es | Cuándo es el mejor |
| --- | --- | --- |
| Expositivo | El formador explica | Contenido conceptual, grupos grandes |
| Demostrativo | El formador hace y explica | Procedimientos |
| Interrogativo | Preguntas y respuestas | Comprobar y fijar |
| Práctica guiada | El alumno hace con el formador al lado | Procedimientos nuevos |
| Estudio de casos | Se analiza un caso real | Diagnóstico de averías |
| Simulación o laboratorio | Se practica en un entorno seguro | Medidas, configuración, averías |
| Juego de roles | Se interpretan situaciones | Atención al cliente, comunicación |
| Aprendizaje entre iguales | Un técnico forma a otro | Transmisión del oficio |

Una regla útil: se aprende más haciendo que escuchando. Un esquema habitual es una cuarta parte de exposición, otra cuarta parte de demostración y la mitad práctica [orientativo].

**Presentaciones multimedia.** Se trata de una presentación de apoyo. Reglas: un guion previo con estructura (portada, objetivos, desarrollo, práctica, resumen y evaluación); **una idea por diapositiva**; elementos gráficos de calidad y con texto explicativo; efectos y transiciones sobrios (solo para mostrar secuencia); contraste, tamaño de letra legible y cuidado estético; y elementos multimedia (vídeo corto, animación o foto del equipo real) como apoyo, no como adorno.

### 8.5 Evaluación del aprendizaje

Se formulan **evidencias de desempeño** (lo que la persona demuestra que sabe hacer) y **criterios de realización** (cómo se juzga). Para un procedimiento se usa una **rúbrica** con niveles:

| Criterio | No logrado | En desarrollo | Logrado |
| --- | --- | --- | --- |
| Configura el certificador | Necesita ayuda en todo | Necesita ayuda en un paso | Lo hace solo y bien |
| Mide el enlace | Mide en la posición incorrecta | Mide correctamente con algún fallo | Mide correctamente |
| Interpreta el resultado | No identifica el fallo | Identifica el parámetro | Identifica la causa y la corrección |
| Documenta | Sin informe | Informe incompleto | Informe completo y archivado |

Un modelo para evaluar el efecto del plan de formación es el de **Kirkpatrick**, con cuatro niveles: **reacción** (¿les ha gustado?), **aprendizaje** (¿han aprendido?), **comportamiento** (¿lo aplican en el trabajo?) y **resultados** (¿mejoran los indicadores?). Los dos primeros se miden al terminar; los dos últimos, semanas o meses después. Los registros de seguimiento incluyen asistencia, ficha de evaluación y certificado de formación.

### 8.6 Cómo se diseña un plan completo

El proceso general es el modelo **ADDIE**: análisis (necesidades), diseño (objetivos, contenidos, métodos), desarrollo (materiales), implementación (impartición) y evaluación.

| Elemento del plan | Contenido |
| --- | --- |
| Destinatarios | Quiénes y con qué nivel de partida |
| Objetivos | Observables y medibles, con tiempo |
| Contenidos | Conceptuales, procedimentales y actitudinales |
| Metodología | Métodos elegidos y razón |
| Actividades y secuencia | Qué se hace, en qué orden y cuánto dura |
| Recursos | Aula, equipos, material y formador |
| Evaluación | Qué evidencias y con qué instrumentos |
| Calendario y coste | Cuándo y cuánto cuesta |

**Ejemplo resuelto.** Plan para 6 técnicos de soporte que no certifican bien los enlaces (22 tomas fuera de límite sobre 800 medidas, el 2,75 por ciento):

1. **Diagnóstico.** Observación en obra y prueba práctica: 4 de 6 destrenzan más de 13 mm y 2 de 6 configuran mal el NVP.
2. **Objetivos.** Al terminar, cada técnico terminará 10 conectores con destrenzado de 13 mm o menos y certificará 5 enlaces con la configuración correcta, sin ayuda.
3. **Contenidos.** Conceptual: por qué empeora el NEXT. Procedimental: terminación y certificación. Actitudinal: no dar por buena una medida sin margen.
4. **Metodología.** Demostración y práctica guiada en un banco de pruebas.
5. **Secuencia (8 horas).** 1 hora de teoría, 1 hora de demostración, 5 horas de práctica por parejas y 1 hora de evaluación con rúbrica.
6. **Evaluación.** Prueba práctica con rúbrica y seguimiento del indicador de tomas fuera de límite durante 3 meses.

```text
Coste del plan (ilustrativo)
  Tiempo de los alumnos: 6 tecnicos x 8 h x 30 euros/h ..... 1 440
  Formador: 8 h x 60 euros/h ............................... 480
  Material y consumibles ................................... 150
  Total .................................................. 2 070 euros

Beneficio esperado (ilustrativo)
  Retrabajo por toma fuera de limite: 38 euros (1,1 h x 35 euros)
  Antes: 22 de 800 tomas (2,75 por ciento) -> 22 x 38 = 836 euros por 800 tomas
  Despues (objetivo 1 por ciento): 8 x 38 = 304 euros -> ahorro de 532 euros por 800 tomas
  Con 8 000 tomas al ano: 5 320 euros de ahorro anual
  Recuperacion: 2 070 / 5 320 = 0,39 anos, unos 4,7 meses
```

### 8.7 Impartir la formación (simulación)

Se trata de impartir de forma simulada. Se prepara y se ensaya: guion de la sesión con tiempos, ayudas visuales, material para práctica y rúbrica de evaluación. Durante la impartición se explica con detenimiento cada acción **como si fuese real** (qué se hace, por qué y qué se comprueba), se pregunta para verificar, se corrige en el momento y se cierra con el resumen y la evaluación. Se registra la asistencia y los resultados de cada persona.

## Perspectiva empresarial

La ejecución es donde se gana o se pierde el margen. Esta sección da las herramientas con las que una empresa instaladora convierte el cumplimiento técnico en resultado. Las cifras son ilustrativas.

### El coste de la ejecución mal hecha

Cada defecto detectado más tarde cuesta más (la regla de 1, 10 y 100 de la unidad «Planificación de proyectos»). Un conector mal terminado cuesta unos minutos si lo detecta quien lo hace, una hora si lo detecta la certificación, y una visita con diagnóstico y recableado si lo detecta el cliente en garantía. Las medidas baratas son las **preventivas**: formación, procedimientos y herramientas calibradas.

### Mantenimiento: contratos y precio

Tras la recepción, el negocio recurrente es el mantenimiento. Se vende por niveles:

| Modalidad | Qué incluye | Para quién |
| --- | --- | --- |
| Preventivo | Revisiones programadas: baterías del SAI, firmware, limpieza, pruebas de conmutación | Todos los clientes |
| Correctivo con tiempo de respuesta | Atención de averías en horas pactadas | Clientes con servicio crítico |
| Todo incluido con disponibilidad | Preventivo, correctivo y sustitución de equipos | Clientes grandes |

Un orden de magnitud habitual es entre el 5 y el 10 por ciento anual del valor de los equipos [orientativo]. Con unos equipos de 40 000 euros y un 8 por ciento, son 3 200 euros anuales. El contrato fija el **SLA**: horas de respuesta, de resolución y disponibilidad, con penalizaciones. Un contrato sin **horario cubierto** ni exclusiones (daños por tormenta, vandalismo, cambios de terceros) se convierte en pérdidas.

### Garantía, retención y fianza

La retención (parte del precio que el cliente conserva hasta la recepción definitiva) es un coste financiero para el contratista: si es del 5 por ciento de 100 000 euros, son 5 000 euros inmovilizados durante el plazo de garantía. Se puede sustituir por un **aval** bancario, que tiene coste pero libera caja. El jefe de proyecto debe saber si el margen soporta ese plazo.

### Subcontratación y seguridad

Subcontratar traslada trabajo pero no la responsabilidad: la empresa principal responde de la coordinación de seguridad y de la calidad. Se exigen a la subcontrata la documentación de prevención (evaluación, formación, seguros), la certificación de sus técnicos y los registros de calidad. Una subcontrata sin documentación en regla puede parar la obra.

### El cierre como negocio

Un cierre bien hecho (informe de costes, lecciones aprendidas, inventario) alimenta las estimaciones del próximo proyecto: el coste real por toma de este año es el dato con el que se calculará la oferta del año siguiente. Y la satisfacción del cliente al cierre es el mejor argumento para el mantenimiento y para la próxima obra.

## Tablas de referencia rápida

| Elemento | Límite |
| --- | --- |
| Enlace permanente | 90 m |
| Canal | 100 m, 4 conectores, 10 m de latiguillos |
| Destrenzado en conector | 13 mm |
| Radio de curvatura | 4 veces el diámetro |
| Clase D | 5e, 100 MHz |
| Clase E | 6, 250 MHz |
| Clase EA | 6A, 500 MHz |
| Clase F | 7, 600 MHz |
| Clase FA | 7A, 1000 MHz |
| Clase I y II | 8.1 y 8.2, 2000 MHz, 30 m |

## Cifras que hay que saber de memoria

- Enlace permanente: 90 m.
- Canal: 100 m.
- Destrenzado máximo: 13 mm.
- NEXT de Cat 6 en canal a 100 MHz: 39,9 dB.
- Atenuación de Cat 6 en canal a 100 MHz: 21,7 dB.
- Impedancia del par: 100 ohmios.
- NVP típico de Cat 6: 0,69.
- Diferencial de personas: 30 mA tipo A.
- Tensión de contacto: 50 V en seco, 24 V en húmedo.
- Aislamiento mínimo: 0,5 MΩ a 500 V.
- Curva C: disparo entre 5 y 10 veces la nominal.
- SAI VFI: rendimiento 90 a 95 por ciento, transferencia 0 ms.
- Carga recomendada de un SAI: máximo 80 por ciento.
- Factor de potencia de salida habitual: 0,9.
- POE: 10 fases, de preparación de la documentación a capacitación.
- Fibra: Tier 1 mide pérdida con OLTS; Tier 2 localiza eventos con OTDR.
- Señales: prohibición roja, obligación azul, advertencia amarilla, emergencia verde, incendios rojo.
- Recepción: provisional (empieza la garantía) y definitiva (devuelve la retención).
- Capacitación: ADDIE y Kirkpatrick de cuatro niveles; contenidos conceptual, procedimental y actitudinal.
- Retorno de la formación: coste del plan entre ahorro anual por 12 meses.

## Procedimientos paso a paso

**Certificar un enlace permanente.** Seleccionar Cat 6 y enlace permanente, configurar NVP 0,69, conectar certificador en panel y remoto en roseta, etiquetar, ejecutar autotest, guardar, leer el parámetro con peor margen si falla, corregir, repetir y exportar.

**Diagnosticar un puesto sin red.** Comprobar si tiene dirección (169.254 indica que no hay DHCP), probar otro latiguillo y otro puesto, mirar el led y los contadores del switch, comprobar el mapa en roseta y panel, revisar VLAN y asignación del puerto, documentar y cerrar.

**Poner en servicio un armario con SAI.** Medir y registrar la tierra, comprobar tensión y secuencia de fases, conectar cargas repartidas con el SAI apagado, encender con red presente y medir salida, simular corte y medir autonomía real, revisar el registro de eventos y anotar la fecha de baterías.

## Errores típicos

1. **"No se ha gastado todo el presupuesto, vamos bien".** Hay que comparar lo gastado con lo hecho (CPI), no con el total.
2. **"SPI alto significa buen coste".** SPI mide plazo; SPI 1,2 con CPI 0,7 es más trabajo del previsto gastando mucho más.
3. **"El comprobador da correcto, está certificado".** No mide transmisión ni emite certificación.
4. **"El cable es Cat 6, el enlace es Cat 6".** La categoría la da el conjunto: cable, conectores, latiguillos, montaje y certificación.
5. **"La autonomía es la del catálogo".** Se mide con carga resistiva a media carga; a plena carga y con batería vieja baja mucho.
6. **"Un VI protege como un VFI".** No regenera frecuencia ni aísla de huecos; corrige tensión y conmuta.
7. **"El diferencial protege sin tierra".** Sin camino de retorno no hay corriente de fuga que detectar.
8. **"El magnetotérmico de 16 A protege cualquier cable".** Solo si la sección es la adecuada.
9. **"Aprobar con 0,1 dB de margen es cómodo".** Es frágil: cambia el latiguillo o la temperatura y falla.
10. **"La 50174 y la 50346 son lo mismo".** Una dice cómo se instala, la otra cómo se ensaya.
11. **"Un SAI off-line es mejor que uno on-line porque rinde más".** Rinde más, pero protege menos: off-line es VFD y on-line de doble conversión es VFI.
12. **"En fibra se certifica NEXT".** No hay diafonía en fibra: se mide la pérdida y, si hace falta, los eventos con OTDR.
13. **"El diagrama de Pareto sirve para saber qué causó una avería concreta".** Sirve para priorizar causas por frecuencia; la causa de una avería concreta se busca con Ishikawa y pruebas.
14. **"El objetivo de formación es conocer la certificación".** No es observable ni medible: se formula con un verbo de acción y un criterio.
15. **"La recepción provisional cierra el contrato".** Inicia el plazo de garantía; el cierre llega con la recepción definitiva y la liquidación.
16. **"Una avería lógica se localiza con el certificador de cableado".** El certificador mide el medio físico; la lógica se localiza con contadores, captura de tráfico y configuración.
17. **"El plan de calidad y el sistema de calidad son lo mismo".** El sistema es de la empresa; el plan aplica ese sistema a un proyecto.
18. **"Evaluar la formación es pasar un examen al terminar".** Es solo el nivel 2 de Kirkpatrick; faltan comportamiento y resultados.

## Glosario de la unidad

- **AC (ACWP):** coste real del trabajo ejecutado.
- **ACR:** NEXT menos atenuación; margen de señal frente a diafonía.
- **As-built:** documentación de la instalación tal como quedó.
- **BAC:** presupuesto total aprobado.
- **Certificador:** instrumento que mide todos los parámetros y emite informe con márgenes.
- **CPI:** EV entre AC; eficiencia en coste.
- **Diferencial:** dispara cuando la suma de fase y neutro no es cero.
- **EAC:** estimación del coste final.
- **ELFEXT:** FEXT normalizado con la atenuación.
- **Enlace permanente:** tramo fijo del panel a la roseta, 90 m.
- **EV (BCWP):** valor ganado del trabajo terminado.
- **FEXT:** diafonía en el extremo lejano.
- **Ishikawa:** diagrama causa efecto de seis ramas.
- **Línea base:** alcance, plazo y coste aprobados.
- **NEXT:** diafonía en el extremo cercano.
- **No conformidad:** incumplimiento de un requisito con evidencia.
- **NVP:** factor de velocidad de propagación.
- **Pareto:** ordenación de causas por frecuencia.
- **Pérdida de retorno:** energía reflejada por desadaptación.
- **POE:** procedimiento operativo estándar.
- **PV (BCWS):** valor planificado.
- **REBT:** Real Decreto 842/2002.
- **Skew:** diferencia de retardo entre pares.
- **SPI:** EV entre PV; cumplimiento del plazo.
- **Telurómetro:** mide la resistencia de tierra.
- **VAC:** desviación prevista entre presupuesto y coste final.
- **ADDIE:** modelo de diseño de formación: análisis, diseño, desarrollo, implementación y evaluación.
- **Competencia:** suma de contenidos conceptuales, procedimentales y actitudinales que se demuestra en el desempeño.
- **Contenido actitudinal:** valores y hábitos que se enseñan con el ejemplo y la norma.
- **Evidencia de desempeño:** lo que la persona demuestra que sabe hacer.
- **Histograma:** gráfico de la distribución de los valores medidos.
- **Kirkpatrick:** modelo de evaluación en cuatro niveles: reacción, aprendizaje, comportamiento y resultados.
- **LSZH:** cable de baja emisión de humos y cero halógenos.
- **OLTS y OTDR:** medidor de pérdida de fibra y reflectómetro óptico que localiza eventos.
- **Plan de capacitación:** documento que fija destinatarios, objetivos, contenidos, metodología, evaluación y calendario.
- **Punto de parada:** inspección que bloquea el paso a la fase siguiente hasta su firma.
- **Recepción definitiva:** acta al terminar la garantía que devuelve la retención.
- **Recepción provisional:** acta que inicia el plazo de garantía.
- **Retención:** parte del precio que se conserva hasta la recepción definitiva.
- **Rúbrica:** tabla de criterios y niveles para evaluar un desempeño.
- **SAI VFD, VI y VFI:** pasivo (off-line), interactivo y de doble conversión (on-line).

## Para profundizar

- Texto consolidado del REBT, Real Decreto 842/2002: [boe.es](https://www.boe.es/buscar/act.php?id=BOE-A-2002-18099)
- ISO/IEC 11801-1:2017, corrección técnica: [iso.org](https://www.iso.org/standard/75698.html)
- IEEE 802.3, Ethernet y PoE: [ieee802.org](https://www.ieee802.org/3/)
- UNE (AENOR), catálogo de normas 50173, 50174 y 50346: [une.org](https://www.une.org/)
- TIA, normas TIA-568: [tiaonline.org](https://tiaonline.org/)
- Ley 31/1995 de Prevención de Riesgos Laborales: [BOE](https://www.boe.es/buscar/act.php?id=BOE-A-1995-24292)
- Real Decreto 1627/1997, seguridad en obras: [BOE](https://www.boe.es/buscar/act.php?id=BOE-A-1997-22614)
- Real Decreto 614/2001, riesgo eléctrico: [BOE](https://www.boe.es/buscar/act.php?id=BOE-A-2001-11881)
- Real Decreto 485/1997, señalización: [BOE](https://www.boe.es/buscar/act.php?id=BOE-A-1997-8668)
- Real Decreto 773/1997, equipos de protección individual: [BOE](https://www.boe.es/buscar/act.php?id=BOE-A-1997-12735)
