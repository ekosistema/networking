---
title: "Planificación de proyectos de implantación de infraestructuras"
description: "Resumen técnico de la unidad Planificación de proyectos."
section: implantacion
unit: planificacion
kind: tecnico
order: 42
tags:
  - redes
  - planificacion
  - tecnico
  - cpm
---

# Planificación de proyectos · Resumen técnico

> **Alcance.** Organización, herramientas, documentación UNE 157001:2014, alcance y técnicas de planificación, con un ejemplo completo de cinco paquetes resuelto paso a paso.

## 1. Conceptos y organización de proyectos

### 1.1 Proyecto, programa y operación

Un proyecto es un esfuerzo temporal, con principio y fin, que produce un resultado único (ISO 21502:2020, que sustituyó a la ISO 21500:2012).

| Concepto | Duración | Termina con | Ejemplo |
| --- | --- | --- | --- |
| Proyecto | Temporal | Aceptación del entregable | Implantar la red de 96 puestos |
| Programa | Plurianual | Objetivo común cumplido | Modernizar cinco sedes |
| Operación | Permanente | Nunca: niveles de servicio | Mantener la red  |

La frontera se escribe en el alcance y en el contrato de mantenimiento; si falta, el cliente la interpretará a su favor.

### 1.2 El ciclo de vida

Fases con entregable y criterio de aceptación, separadas por puertas de decisión. En infraestructura domina el modelo predictivo: la obra no se entrega por incrementos de valor, como mucho por plantas.

| Fase | Entregable | Unidad |
| --- | --- | --- |
| Inicio | Acta de constitución | Fuera del programa de referencia |
| Diseño | Proyecto técnico y presupuesto | «Proyecto de red» y «Documentación técnica» |
| Planificación | Línea base | «Planificación de proyectos» |
| Ejecución y control | Red certificada | «Ejecución de proyectos» |
| Cierre | Acta de aceptación | «Ejecución de proyectos» |

El programa de referencia ordena el ciclo en cinco fases: **aprobación** (se decide si el proyecto se hace y quién lo patrocina), **definición** (objetivos, alcance y requisitos), **planificación**, **ejecución** y **cierre**. Lo que la tabla llama inicio y diseño equivale a aprobación y definición. En cada paso de una fase a otra hay una puerta de decisión: se revisa el entregable y se decide si continuar, corregir o parar.

La asimetría del error justifica el esfuerzo inicial: corregir un fallo cuesta una unidad en diseño, diez en ejecución y cien en explotación.

### 1.3 Factores críticos de éxito

Patrocinador con poder real, alcance cerrado con exclusiones, requisitos trazables a pruebas, dedicación acordada por escrito, duraciones estimadas con datos, control de cambios formal y plazos de suministro en el calendario.

El fracaso tiene las mismas causas al revés. El informe CHAOS del Standish Group es la referencia del sector, pero sus porcentajes cambian en cada edición.

### 1.4 Modelos organizativos

| Modelo | Mando del jefe de proyecto | Equipo | Inconveniente |
| --- | --- | --- | --- |
| Funcional | Ninguno formal | A tiempo parcial | Nadie responde del plazo |
| Por proyectos | Total | Dedicado | Duplica recursos |
| Matricial débil | Coordina | Parcial | El proyecto pierde prioridad |
| Matricial equilibrada | Compartido | Parcial alta | Negociación permanente |
| Matricial fuerte | Alto | Casi dedicado | Doble dependencia |

| Modelo | Ventaja principal | Cuándo conviene |
| --- | --- | --- |
| Funcional | Especialización y eficiencia en el uso de personas | Operación estable, proyectos pequeños dentro de un área |
| Por proyectos | Mando claro, rapidez y foco | Proyectos grandes o estratégicos y largos |
| Matricial | Comparte especialistas entre proyectos | Empresas con varios proyectos a la vez, como una instaladora |

Una instaladora con tres obras simultáneas y un equipo de certificación compartido suele estar en matricial equilibrada o fuerte.

La doble dependencia nace de dos cadenas de mando: el jefe funcional decide el cómo y la carrera; el de proyecto, el qué y el cuándo. Se mitiga con RACI escrita, dedicación acordada y escalado.

### 1.5 El jefe de proyecto

Planifica, organiza, dirige, controla y comunica; responde del equilibrio entre alcance, plazo y coste, no de ser el mejor técnico. La PMO puede ser de apoyo, de control o directiva, y el marco más citado en España es el ICB4 de IPMA.

**Modelos de liderazgo.** El programa de referencia pide describirlos y compararlos. No hay uno mejor: depende de la madurez del equipo y de la urgencia.

| Estilo | Cómo decide | Funciona cuando | Riesgo |
| --- | --- | --- | --- |
| Autocrático | El jefe decide solo | Emergencia, equipo nuevo | Desmotiva y no aprovecha ideas |
| Democrático o participativo | Se decide con el equipo | Equipo experto, tiempo suficiente | Lento si hay desacuerdo |
| Laissez-faire | El equipo se organiza solo | Equipo muy senior y autónomo | Falta de dirección |
| Situacional (Hersey y Blanchard) | Adapta el estilo a la madurez de cada persona | Equipos mixtos | Exige juicio y coherencia |
| Transformacional | Inspira con una visión | Cambios grandes | Si no hay resultados, se pierde credibilidad |
| Transaccional | Recompensa y corrige según objetivos | Rutina y entregas medibles | Poco innovador |

El modelo **situacional** propone cuatro estilos según la madurez de la tarea: dirigir (poca competencia, mucha motivación), persuadir, participar y delegar (mucha competencia). Un jefe de implantación que delega todo en el técnico nuevo y que dirige al experto comete el error inverso al correcto.

### 1.6 Equipos de alto rendimiento

Cinco etapas: formación, tormenta, normalización, desempeño y disolución. Las reglas se escriben la primera semana (horario, canal único, criterio de terminado, forma de escalar) y el equipo funciona entre cuatro y nueve personas. Los nueve roles de Belbin describen conductas.

| Rol | Aporta |
| --- | --- |
| Cerebro | Ideas y soluciones |
| Investigador de recursos | Contactos y proveedores |
| Coordinador | Reparte y hace hablar |
| Impulsor | Empuja y desatasca |
| Evaluador | Analiza con frialdad |
| Cohesionador | Mantiene el clima |
| Implementador | Convierte el plan en tareas |
| Finalizador | Repasa y cierra |
| Especialista | Conocimiento profundo |

Para el conflicto hay cinco estilos: evitar, acomodar, competir, comprometer y colaborar; en una implantación conviene colaborar.

## 2. Herramientas informáticas y gestión documental

### 2.1 Ofimática de proyecto

La hoja de cálculo es la herramienta real de la pyme: EDT, mediciones, presupuesto y curva de coste; necesita una sola hoja de datos y fórmulas sin valores pegados. El procesador se evalúa por estructura: estilos con numeración automática, referencias cruzadas, índice actualizable y control de cambios. Para archivo se usa PDF/A.

### 2.2 Herramientas de diagramación

En actividades en los nodos (AON) la caja es la tarea y la flecha la dependencia; en actividades en las flechas (AOA) la flecha es la tarea; las herramientas actuales usan AON.

| Herramienta | Licencia | Formato | Se versiona bien |
| --- | --- | --- | --- |
| diagrams.net | Gratuita | XML de texto | Sí |
| Microsoft Visio | Comercial | Binario | No: exportar a PDF |
| LibreOffice Draw | Libre | ODF comprimido | Regular |
| Mermaid | Libre | Texto en Markdown | Sí, ideal en git |

### 2.3 Herramientas de gestión de proyectos

| Herramienta | Coste | Fuerte en | Débil en |
| --- | --- | --- | --- |
| Microsoft Project | Licencia | Recursos y calendarios | Precio y formato propietario |
| Primavera P6 | Alto | Obra grande | Curva de aprendizaje |
| ProjectLibre | Libre | Compatibilidad con Project | Interfaz anticuada |
| GanttProject | Libre | Gantt rápido | Poca gestión de recursos |
| Hoja de cálculo | Ya pagada | Flexibilidad total | Errores y sin historial |

Se elige por número de proyectos, recursos compartidos y curva S. Los binarios no se comparan: entrega en PDF e intercambio en XML o CSV.

**Código abierto frente a comercial.** El programa de referencia pide identificarlos. La diferencia útil es el coste total, no la ideología:

| Uso | Código abierto | Comercial | Criterio de elección |
| --- | --- | --- | --- |
| Diagramas | draw.io, Dia, LibreOffice Draw, yEd | Visio, Lucidchart | Formato de intercambio y colaboración |
| Planificación | ProjectLibre, GanttProject, OpenProject | Microsoft Project, Primavera P6 | Número de recursos y de proyectos |
| Seguimiento de tareas | Redmine, Taiga, OpenProject | Jira, Asana, Microsoft Planner | Quién necesita acceso y si hay integración |
| Documentación | LibreOffice, Markdown con git | Microsoft Office | Compatibilidad con el cliente |

Ventajas del código abierto: sin licencia, formato abierto, instalable en un servidor propio. Costes ocultos: alojamiento, mantenimiento y formación. Ventajas de lo comercial: soporte, integración y formato que el cliente ya usa. La regla práctica es **usar el formato que el cliente puede abrir sin comprar nada**: PDF para entregar y el formato abierto para trabajar.

### 2.4 Manuales y control documental

Al proyecto técnico se añaden manual de instalación, de usuario, de explotación, plan de pruebas, plan de calidad y, en obras, el estudio de seguridad y salud del Real Decreto 1627/1997. Solo se distribuye el documento aprobado. La nomenclatura se fija antes del primer archivo:

```text
PROY_EDT_v01_2027-01-12.xlsx
PROY_PLIEGO_v03_2027-01-28.pdf
PROY_ACTA_ACEPTACION_v01_2027-02-19.pdf
```

### 2.5 Informes, manuales operativos y guías

El criterio es transmitir información, no acumular páginas. La estructura que mejor funciona es la **pirámide invertida**: primero la conclusión o la acción que se pide, después la justificación y al final los detalles y anexos. Quien solo lee la primera página debe saber qué pasa y qué hay que decidir.

**Informe de avance** (una página, semanal o quincenal):

| Apartado | Contenido |
| --- | --- |
| Estado | Semáforo global: verde, ámbar o rojo, con una frase |
| Avance | Previsto frente a real, en porcentaje y en hitos |
| Plazo y coste | Desviación con causa |
| Incidencias y riesgos | Los tres principales, con responsable y fecha |
| Decisiones pedidas | Qué se necesita del cliente o de dirección |
| Próximo periodo | Qué se hará |

**Manual operativo.** Es un documento que alguien usará con las manos ocupadas. Estructura: portada con versión y fecha, objeto y alcance, a quién va dirigido, requisitos previos (herramientas, permisos, materiales), pasos numerados con una acción por paso, advertencias de seguridad antes del paso al que afectan, comprobación del resultado, qué hacer si falla y registros que se rellenan. Cada paso empieza con un verbo.

**Guías textuales y visuales.** Una guía visual sustituye mil palabras: capturas anotadas, fotografías del armario con números, esquemas y listas de comprobación con casillas. Se acompañan de texto breve y se prueban con alguien que no conozca el sistema: si se atasca, el fallo es de la guía.

**Identificación y archivo.** Una nomenclatura fija, versiones, un estado (borrador, revisión, aprobado) y un único lugar de archivo, con copia de seguridad. Se retira la versión anterior al publicar la nueva.

### 2.6 Control de versiones con git

El repositorio es el archivo del proyecto; la confirmación es una revisión con autor y motivo; la etiqueta es la entrega congelada; la rama es una variante en estudio.

| Concepto de git | Equivalente documental |
| --- | --- |
| Repositorio | Archivo con historial completo |
| Confirmación | Revisión con autor y motivo |
| Etiqueta | Entrega oficial congelada |
| Rama | Variante no aprobada |
| Incidencia | No conformidad o petición de cambio |

```bash
git init
git add memoria.md pliego.md mediciones.csv
git commit -m "Plan de obra inicial con cinco paquetes"
git tag -a v1.0 -m "Entrega al cliente del 12 de enero"
git checkout -b variante-fibra
```

Se versiona bien el texto: Markdown, CSV, Mermaid. El binario genera una copia por cambio, así que va en Git LFS o fuera, con ficha de ruta y versión.

## 3. Documentación del proyecto según UNE 157001:2014

### 3.1 La norma y su estructura

La UNE 157001:2014, de 18 de junio, se titula "Criterios generales para la elaboración formal de los documentos que constituyen un proyecto técnico" y sustituye a la de 2002. No dice cómo calcular la red: dice cómo se ordena el proyecto.

| Documento | Función | Quién lo usa |
| --- | --- | --- |
| Índice | Orden y localización | Todos |
| Memoria y anexos | Justifica qué se hace y por qué | Cliente y dirección |
| Planos | Define dónde y cómo | Instaladores |
| Pliego | Materiales, ejecución y garantías | Contratista y dirección |
| Mediciones | Cuantifica cada partida | Presupuesto |
| Presupuesto | Pone precio | Cliente y licitación |

Cuando hay obra se añaden estudios complementarios: seguridad y salud y, si procede, impacto ambiental.

### 3.2 Memoria y anexos

Responde a cinco preguntas en orden: qué se quiere, por qué, con qué normas, cómo y cuánto cuesta. Contenido: identificación, objeto, antecedentes, normativa, descripción, cálculos justificativos y conclusiones.

En una red: necesidades por planta, número de tomas, ocupación de canalizaciones, armario y ventilación, carga del SAI, direccionamiento y VLAN y cobertura inalámbrica. Los anexos llevan índice propio.

### 3.3 Planos

Todo plano lleva cajetín con título, número, escala, fecha, autor, revisión y organismo. Escala 1:100 o 1:200 para plantas, 1:50 para detalle de armario y sin escala para esquemas lógicos.

1. Situación y emplazamiento con accesos y acometida.
2. Planta con canalizaciones, bandejas y tomas acotadas.
3. Detalle de sala técnica y armario, con alzado frontal y paneles numerados.
4. Esquema lógico: núcleo, distribución, acceso y enlaces.
5. Direccionamiento, VLAN y cobertura inalámbrica.

Un cambio de plano posterior al tendido obliga a repetirlo.

### 3.4 Pliego de condiciones

Es el documento que se usa en la ejecución y en las reclamaciones. Se divide en cinco partes.

| Parte | Contenido |
| --- | --- |
| Técnicas generales | UNE-EN 50173-1:2018, UNE-EN 50174, UNE-EN 50346 |
| Técnicas particulares | Materiales, ejecución, ensayos, certificación |
| Facultativas | Dirección facultativa y responsabilidades |
| Económicas | Precios, certificaciones, garantías, penalizaciones |
| Legales | Plazos, recepción, arbitraje |

No puede faltar: categoría y clase, conector, norma de certificación, aceptación de la cobertura, garantía y documentación final.

**Los tres tipos de pliego del programa de referencia y su importancia legal.** El programa de referencia distingue tres, que son documentos contractuales: lo que dicen obliga a las dos partes.

| Pliego | Contenido | Quién lo usa |
| --- | --- | --- |
| Condiciones generales | Reglas comunes a toda obra: facultativas, legales y económicas básicas | Todas las obras de la empresa o del cliente |
| Prescripciones técnicas particulares | Materiales, ejecución, ensayos y certificación de **esta** obra | Contratista y dirección técnica |
| Cláusulas administrativas particulares | Plazos, precio, forma de pago, penalizaciones, garantías, resolución del contrato | Contratación y asesoría jurídica |

La importancia es doble. **Legal**: en un conflicto, lo escrito en el pliego es lo exigible, y lo no escrito se discute. **Contractual**: forma parte del contrato, y los documentos suelen tener un orden de prelación que el propio contrato fija (si dos documentos se contradicen, prevalece el que ocupa un lugar superior, normalmente el contrato y los pliegos sobre la memoria y los planos) [el orden concreto lo fija el contrato de cada obra].

### 3.5 Estado de mediciones y presupuesto

El estado de mediciones cuantifica cada partida con unidad y dimensiones; el presupuesto multiplica por precio unitario, justificado con un descompuesto.

La cadena es: ejecución material, más gastos generales y beneficio industrial, da la base de licitación sin IVA. Los porcentajes de referencia vienen del Reglamento general de la Ley de Contratos de las Administraciones Públicas (Real Decreto 1098/2001, artículo 131): del 13 al 17 por ciento de gastos generales y el 6 por ciento de beneficio industrial [texto del artículo 131 comprobado en el BOE consolidado; se aplica a los contratos de obras públicas y se usa por referencia en la empresa privada]. Con 100.000 euros de ejecución material y los mínimos (13 y 6): 119.000 de base, 24.990 de IVA y 143.990 de total. El plan de obra va como anexo de la memoria y es el puente con esta unidad.

**Apartados del presupuesto.** El programa de referencia pide distinguir cuatro:

| Apartado | Qué es | Ejemplo |
| --- | --- | --- |
| Mediciones | Cantidades con criterio de medida | 260 tomas |
| Precios unitarios | Precio de una unidad terminada | Toma instalada: 104,45 euros |
| Precios descompuestos | El desglose del unitario en material, mano de obra y medios | Tabla de abajo |
| Presupuesto | Mediciones por precios, agrupado en capítulos | Suma de los capítulos |

```text
Precio descompuesto: toma RJ45 Cat 6A instalada, etiquetada y certificada (ilustrativo)
  Cable U/FTP 6A, 55 m a 0,62 euros/m ................................ 34,10
  Toma RJ45 6A (keystone y marco) y conector de panel ................ 12,00
  Latiguillos de 2 m, 2 ud a 3,10 euros .............................. 6,20
  Mano de obra: 0,90 h oficial a 27 + 0,45 h ayudante a 21 ........... 33,75
  Medios auxiliares, 2 por ciento de los directos .................... 1,72
  Costes directos .................................................... 87,77
  Gastos generales, 13 por ciento .................................... 11,41
  Beneficio industrial, 6 por ciento ................................. 5,27
  Precio unitario .................................................... 104,45
```

Un precio sin descompuesto no se puede defender ni revisar: quien lo discute no tiene a qué agarrarse.

### 3.6 Leer la documentación técnica para planificar

Antes de planificar hay que entender lo que se va a construir. Se trata de extraer ocho datos de la documentación de un proyecto. Cada uno se busca en un sitio concreto:

| Dato que hay que extraer | Dónde se mira | Para qué sirve al planificar |
| --- | --- | --- |
| Ubicación de los equipos de voz y datos | Planos de planta y esquema lógico | Recorridos, plazos de tendido, dependencias entre zonas |
| Medios y herramientas necesarios | Pliego y memoria | Personal, alquiler de certificadora, escaleras, elevadores |
| Distribución de energía y protecciones | Esquema unifilar y memoria | Coordinar con el electricista; ventana de corte |
| Envolventes, cuadros, armarios y cableado | Alzado de armario y listado de materiales | Compras y montaje |
| Ventilación forzada y alimentación especial | Memoria y planos de sala técnica | Pedidos de larga entrega, obra civil |
| Tipo de canalización y distribución en plantas | Planos de canalizaciones | Orden de obra: vertical y horizontal |
| Características de los cableados y conexionado | Pliego y planos | Estimación de horas por toma |
| Identificación y señalización | Plano, listado y pliego | Etiquetado y documentación final |

**Partes de una red** que aparecen en esa documentación: red de cableado (horizontal, vertical, campus), redes inalámbricas (puntos de acceso, controladora), equipos de comunicación telemática (conmutadores, routers, cortafuegos), centralitas privadas de telefonía (PBX tradicionales o IP, y troncales SIP), terminales (teléfonos, PC, impresoras, cámaras) y la energía (SAI, cuadros, tierra). Cada parte lleva sus propios plazos de entrega y sus propios especialistas.

**Cómo se hace.** Se lee el proyecto con la lista de arriba, se anotan las lagunas (¿dónde está el esquema unifilar? ¿falta la ventilación de la sala?) y se devuelven como consulta antes de planificar. Un hueco no resuelto es un riesgo de plazo.

## 4. Definición del alcance

### 4.1 Los cuatro objetivos

Alcance, plazo, coste y calidad no son variables libres: el alcance manda. Sin alcance no hay nada que estimar. Más alcance implica más plazo y coste; menos plazo, más coste o menos alcance; menos coste, menos prestaciones, nunca menos pruebas.

### 4.2 El enunciado del alcance

Contiene objetivo, entregables, criterios de aceptación, exclusiones, casos e hitos. Las exclusiones evitan discusiones: obra civil, licencias, mobiliario, eléctrica general y equipos de usuario. Los verbos deben ser verificables: instalar, configurar, certificar, documentar; optimizar no es alcance.

### 4.3 La estructura de desglose del trabajo

Reglas: se descompone por entregables, no por departamentos; cada nivel cumple la regla del cien por cien; cada nodo tiene de tres a siete hijos; el paquete se estima entre ocho y ochenta horas.

```text
1  Implantación de la red (96 puestos)
   1.1  Obra y canalizaciones
        1.1.1  Sala técnica acondicionada
        1.1.2  Bandejas y tubos instalados
   1.2  Cableado
        1.2.1  Horizontal tendido y conexionado
        1.2.2  Enlaces certificados
   1.3  Electrónica y energía
   1.4  Configuración lógica
   1.5  Pruebas y entrega
```

La EDT no es el organigrama: el organigrama dice quién depende de quién y la EDT dice qué hay que producir.

### 4.4 Paquetes y diccionario del proyecto

Cada paquete tiene código, entregable, responsable único, duración, coste, predecesoras y criterio de aceptación. El diccionario lo desarrolla para que otra persona pueda ejecutarlo sin llamarte.

| Campo del paquete 1.2.1 | Valor |
| --- | --- |
| Denominación | Tender y conexionar el cableado horizontal |
| Entregable | 96 tomas etiquetadas con mapa de cableado |
| Responsable | Una persona, no un departamento |
| Duración y coste | 8 días y 5.600 euros |
| Calidad | Categoría 6, clase E, enlace máximo 90 m |
| Aceptación | UNE-EN 50346 conforme en el 100 % de los enlaces |
| Riesgo | Falso techo cerrado antes de tender: impacto alto |

### 4.5 Línea base y control de cambios

La línea base es la versión aprobada y congelada de alcance, calendario y coste. Congelada no significa inmóvil: moverse exige procedimiento. La solicitud se analiza en sus tres impactos, se aprueba en comité y se registra con nueva versión. Un cambio aprobado sin actualizar el presupuesto lo paga alguien del margen.

### 4.6 Métodos para obtener información sobre el trabajo

Antes de fijar el alcance hay que saber qué hay que hacer. Cuatro vías, que se combinan:

| Método | Qué aporta | Cuidado con |
| --- | --- | --- |
| Análisis de la documentación del proyecto | La base objetiva: planos, pliegos, contratos | Documentación obsoleta o incompleta |
| Entrevistas individuales | Información sincera y detallada | Sesgo de quien responde |
| Entrevistas o reuniones de grupo | Consenso y detección de contradicciones | Voces dominantes |
| Reuniones con expertos | Experiencia en trabajos parecidos y riesgos | Dependencia de una sola opinión |

Se contrasta una fuente con otra: lo que dice el pliego, lo que cuenta el cliente y lo que dice el técnico de campo rara vez coinciden. Se registra todo en actas.

### 4.7 Estrategias para construir la EDT

El programa de referencia pide comparar tres:

| Estrategia | Cómo se construye | Ventaja | Inconveniente |
| --- | --- | --- | --- |
| Descendente (top-down) | Del entregable final hacia abajo, dividiendo | Visión de conjunto y control del cien por cien | Puede pasar por alto detalles |
| Ascendente (bottom-up) | Se listan todas las tareas y se agrupan hacia arriba | Exhaustiva, la usa quien conoce el trabajo | Puede perder la estructura global |
| Tormenta de ideas | El equipo propone tareas sin filtrar, luego se ordenan | Recoge ideas y compromete al equipo | Necesita una fase final de orden y de eliminación de duplicados |

En la práctica se combinan: tormenta de ideas para que salga todo, agrupación ascendente por afinidad y comprobación descendente de la regla del cien por cien.

### 4.8 La unidad de obra

Una **unidad de obra** es el conjunto de operaciones, materiales y medios que, ejecutados, dan una cantidad medible de un resultado terminado, con un precio unitario. Es la base de la medición, el presupuesto y la certificación (véase [Documentación técnica](../../01_Diseno/03_Documentacion_Tecnica/README.md)).

Cómo se define, en cinco pasos: nombrarla con el resultado ("toma de datos 6A instalada, etiquetada y certificada"), listar lo que incluye (cable, conector, mano de obra, etiquetado, ensayo), listar lo que excluye (obra civil, canalización principal), fijar el criterio de medición (por unidad terminada) y asignarle precio descompuesto.

| Concepto | Unidad de obra | Paquete de trabajo de la EDT |
| --- | --- | --- |
| Se mide en | Cantidad de resultado (tomas, metros) | Esfuerzo y duración |
| Sirve para | Medir y cobrar | Planificar y asignar |
| Ejemplo | Toma 6A instalada | Tender y conexionar el horizontal |

## 5. Técnicas de planificación

### 5.1 El diagrama de Gantt

Barras sobre un eje de tiempo: duración, solapes, hitos y avance. Es el formato que entiende todo el mundo, pero oculta la lógica. Un Gantt completo lleva fechas, dependencias, recursos, línea base y avance.

### 5.2 CPM y PERT

El CPM nace en 1957 en DuPont, con Walker y Kelley, para paradas de planta química: determinista, una duración por tarea, busca la cadena que manda y el coste de comprimirla. El PERT nace en 1958 en la Armada de Estados Unidos, en el proyecto Polaris: probabilístico, tres duraciones por tarea.

| Rasgo | CPM | PERT |
| --- | --- | --- |
| Origen | DuPont, 1957 | Armada de EE. UU., 1958 |
| Duración | Un valor conocido | Optimista, probable, pesimista |
| Enfoque | Plazo y coste de compresión | Probabilidad de cumplir la fecha |
| Resultado | Camino crítico y holguras | Media y desviación |
| Uso | Obra con datos propios | Proyecto nuevo sin historia |

```text
te = (o + 4m + p) / 6        tiempo esperado de la tarea
desviacion = (p - o) / 6     dispersion de la tarea
varianza = desviacion al cuadrado

Te = suma de te del camino critico
varianza del proyecto = suma de varianzas de ese camino
desviacion del proyecto = raiz cuadrada de esa suma
```

El valor más probable pesa cuatro veces más porque es el escenario que se repite. Supone tareas independientes y distribución beta; si dos tareas comparten equipo, la desviación real es mayor.

Con la media y la desviación se tipifica la fecha objetivo: z igual a 1,65 da un 95 %, z igual a 2,00 da un 97,7 %.

### 5.3 Dependencias, adelantos y retrasos

| Tipo | Significado | Ejemplo |
| --- | --- | --- |
| Fin a comienzo (FC) | B empieza al terminar A | Cablear tras canalizar |
| Comienzo a comienzo (CC) | B empieza con A | Configurar mientras se cablea |
| Fin a fin (FF) | B termina con A | Certificar con el último enlace |
| Comienzo a fin (CF) | B termina al empezar A | Relevo de turno; excepcional |

El adelanto permite solapar y el retraso impone espera, como un día de curado. La restricción de fecha no es una dependencia: puede generar holgura negativa. Las dependencias son obligatorias, discrecionales o externas; las externas son las que más se olvidan. El programa de referencia las nombra **primarias, secundarias y externas**, y la equivalencia es directa:

| Nombre del programa de referencia | También se llama | Origen | Ejemplo |
| --- | --- | --- | --- |
| Primaria | Obligatoria o física | Naturaleza del trabajo | No se cablea sin canalizar |
| Secundaria | Discrecional | Elección del planificador | Cablear primero la planta baja |
| Externa | Ajena al proyecto | Un tercero o el calendario | Licencia municipal, entrega del operador |

Las primarias no se pueden saltar; las secundarias se pueden cambiar si ayuda a recortar plazo; las externas se vigilan y se amarran con fechas.

### 5.4 Holguras, camino crítico e hitos

Se calcula en dos pasadas. Hacia adelante, el comienzo más temprano es el mayor de los fines más tempranos de las predecesoras; hacia atrás, el fin más tardío es el menor de los comienzos más tardíos de las sucesoras.

```text
holgura total = LS - ES = LF - EF
holgura libre = ES de la sucesora mas temprana - EF de la tarea
```

Las tareas con holgura cero forman el camino crítico, y puede haber varios. Si la holgura es negativa hay que comprimir, solapar o recortar. Un hito marca un estado verificable; los de facturación se amarran a hitos técnicos.

### 5.5 Estimación de duraciones

| Método | Cómo | Cuándo |
| --- | --- | --- |
| Juicio experto | Consulta a quien lo hizo | Siempre, como contraste |
| Delphi | Expertos anónimos hasta converger | Sin datos y riesgo alto |
| Análoga | Se escala un proyecto parecido | Fases tempranas |
| Paramétrica | Coste o duración por unidad | Muchos elementos iguales |
| Tres valores | Optimista, probable, pesimista | Sin histórico |
| Ascendente | Suma de paquetes | EDT madura |

En redes el parámetro útil es el rendimiento por toma y jornada, corregido por altura, techo y horario. Se combaten el optimismo del que firma la oferta y el anclaje en la fecha pedida. La contingencia cubre riesgos identificados; la de gestión, lo no identificado.

### 5.6 Recursos, cargas de trabajo y costes

El histograma muestra personas por día; la sobreasignación aparece cuando dos paquetes piden la misma persona. Se resuelve nivelando, que retrasa dentro de la holgura y no encarece, o comprimiendo, que añade recursos y baja el rendimiento.

Hay coste directo (material, mano de obra, alquiler de certificadora) e indirecto (jefe de proyecto, oficina, seguros). La curva S crece despacio, se acelera en compras e instalación y se aplana en las pruebas.

El punto de pedido es consumo diario por plazo de entrega más stock de seguridad. Con 40 metros diarios, 12 días de plazo y un 10 % de seguridad: 528 metros, dos bobinas. La recepción anota albarán, lote y ubicación: un material sin lote no se puede reclamar.

### 5.7 Ejemplo completo resuelto

Sede de 96 puestos en tres plantas, jornadas de ocho horas.

Paso 1. Paquetes, precedencias, duración y coste.

| Código | Paquete | Predecesoras | Días | Recursos | Coste |
| --- | --- | --- | --- | --- | --- |
| A | Acondicionar sala y canalizaciones | ninguna | 5 | 2 instaladores | 3.000 |
| B | Tender y conexionar el cableado | A | 8 | 3 instaladores | 5.600 |
| C | Montar armario, electrónica y SAI | A | 3 | 2 técnicos | 3.600 |
| D | Configurar VLAN y Wi-Fi | B y C | 4 | 2 técnicos | 3.200 |
| E | Probar, documentar y entregar | D | 3 | 2 técnicos | 1.500 |

Paso 2. Red de precedencias.

```text
 A (5 dias)
   |--> B (8 dias) ---+
   |                  |--> D (4 dias) --> E (3 dias) --> fin
   +--> C (3 dias) ---+
```

Paso 3. Pasada hacia adelante. A va de 0 a 5. B y C empiezan en 5; B acaba en 13 y C en 8. D empieza en 13 y acaba en 17; E va de 17 a 20. Duración: 20 días.

Paso 4. Pasada hacia atrás desde 20. E de 17 a 20, D de 13 a 17, B de 5 a 13. C termina cuando empieza D, en 13, y empieza en 10; A termina en 5.

| Paquete | ES | EF | LS | LF | Holgura total | Holgura libre |
| --- | --- | --- | --- | --- | --- | --- |
| A | 0 | 5 | 0 | 5 | 0 | 0 |
| B | 5 | 13 | 5 | 13 | 0 | 0 |
| C | 5 | 8 | 10 | 13 | 5 | 5 |
| D | 13 | 17 | 13 | 17 | 0 | 0 |
| E | 17 | 20 | 17 | 20 | 0 | 0 |

Camino crítico: A, B, D y E, 5 más 8 más 4 más 3 igual a 20 días. El camino A, C, D y E suma 15, y por eso C tiene 5 días de holgura total y libre: su sucesora no puede empezar antes del día 13.

Paso 5. Gantt: cada carácter es un día y el punto es espera.

```text
   12345678901234567890
A  =====...............
B  .....========.......
C  .....===............
D  .............====...
E  .................===
```

Paso 6. Cargas. Días 1 a 5: 2 instaladores. Días 6 a 8: 3 de B más 2 de C, el pico de 5 personas. Días 9 a 13: 3 instaladores. Días 14 a 20: 2 técnicos. Totales: 34 jornadas de instalador, 20 de técnico y 6 de jefe.

Paso 7. Coste y curva acumulada, con 130 euros por jornada de instalador, 200 por jornada de técnico y 350 de jefe de proyecto.

| Paquete | Material | Mano de obra | Total | Coste por día |
| --- | --- | --- | --- | --- |
| A | 1.700 | 1.300 (10 jornadas) | 3.000 | 600 |
| B | 2.480 | 3.120 (24 jornadas) | 5.600 | 700 |
| C | 2.400 | 1.200 (6 jornadas) | 3.600 | 1.200 |
| D | 1.600 | 1.600 (8 jornadas) | 3.200 | 800 |
| E | 300 | 1.200 (6 jornadas) | 1.500 | 500 |
| Total | 8.480 | 8.420 | 16.900 | |

Acumulado: 3.000 al día 5, un 17,8 %; 8.700 al día 8, un 51,5 %; 12.200 al día 13, un 72,2 %; 15.400 al día 17, un 91,1 %; y 16.900 al día 20, el total.

```text
dia  5 |####                   |  3.000   17,8 %
dia  8 |###########            |  8.700   51,5 %
dia 13 |###############        | 12.200   72,2 %
dia 17 |###################    | 15.400   91,1 %
dia 20 |###################### | 16.900  100,0 %
```

La curva se adelanta en el día 8 porque el armario se compra e instala en C, corto y caro. Con las 6 jornadas del jefe de proyecto, 2.100 euros, el coste sube a 19.000 y, con una contingencia del 10 %, el presupuesto queda en 20.900 euros.

Paso 8. Estimación PERT de los mismos paquetes.

| Paquete | Optimista | Probable | Pesimista | te | Varianza |
| --- | --- | --- | --- | --- | --- |
| A | 4 | 5 | 7 | 5,17 | 0,25 |
| B | 6 | 8 | 13 | 8,50 | 1,36 |
| C | 2 | 3 | 5 | 3,17 | 0,25 |
| D | 3 | 4 | 6 | 4,17 | 0,25 |
| E | 2 | 3 | 5 | 3,17 | 0,25 |

Para B: 6 más cuatro veces 8 más 13 son 51, entre 6 da 8,50; la desviación es 13 menos 6 entre 6, 1,17, y la varianza 1,36. El camino crítico suma 21,01 días, con varianza 2,11 y desviación 1,45. Para 24 días, z es 2,06, en torno al 98 %; para 22 días, z es 0,68, cerca del 75 %.

Paso 9. Compresión. Con una fecha de 17 días hay que quitar tres del camino crítico. Comprimir C no sirve: tiene cinco de holgura. La vía es partir A en dos zonas, de 5 a 3 días, y mantener B con 24 jornadas en 6 días con cuatro instaladores. El proyecto baja a 16 días, el pico sube a 6 personas y el coste directo aumenta en 260 euros, más el riesgo de dos frentes.

### 5.8 Análisis de tareas y su documentación

Descomponer en tareas es pasar de paquetes a trabajo asignable. El programa de referencia cita cuatro técnicas de análisis:

| Técnica | Qué muestra | Cuándo se usa |
| --- | --- | --- |
| Tabla de decisión | Qué hacer según condiciones | Procesos con reglas ("si hay falso techo, entonces...") |
| Diagrama de flujo de decisiones | La secuencia con sus bifurcaciones | Procedimientos y diagnósticos |
| Diagrama de conectividad | Cómo se enlazan tareas y entregables | Ver dependencias de un vistazo |
| Diagrama de barras | Duración y solape | Comunicar el calendario |

```text
Tabla de decision: tender el horizontal de una zona
Condicion                      R1     R2     R3     R4
Falso techo registrable        Si     Si     No     No
Canalizacion ya instalada      Si     No     Si     No
Accion
  Tender directamente          X
  Instalar bandeja antes              X
  Abrir regata o usar suelo                  X
  Replantear con la propiedad                       X
```

**Buenas prácticas** al descomponer: una tarea tiene un verbo y un resultado, un responsable, una duración estimable (entre uno y diez días suele ser un buen tamaño), predecesoras claras y un criterio de terminado.

| Documento | Contenido |
| --- | --- |
| Lista de tareas | Código, nombre, paquete, responsable, duración, predecesoras |
| Descripción de una tarea | Objetivo, entradas, pasos, recursos, resultado, criterio de aceptación, riesgos |

### 5.9 Optimización de tiempo y coste

Existe una relación opuesta: acortar una tarea suele costar más (más personas, horas extra, envío urgente). El coste de acelerar un día es la **pendiente** de la tarea:

```text
Pendiente = (coste acelerada - coste normal) / (dias normal - dias acelerada)

Tarea A: normal 5 dias, 3 000 euros; acelerada 3 dias, 3 500 -> (3 500 - 3 000) / 2 = 250 euros/dia
Tarea B: normal 8 dias, 5 600 euros; acelerada 6 dias, 6 300 -> (6 300 - 5 600) / 2 = 350 euros/dia
```

Se acelera **solo el camino crítico** y empezando por la tarea más barata de acelerar. Para pasar de 20 a 17 días en el ejemplo resuelto: A baja 2 días (2 x 250 = 500) y B baja 1 día (350); el coste directo sube 850 euros. Pero hay costes indirectos (jefe de proyecto, oficina, alquiler de medios) que bajan con la duración. Con 350 euros por día:

| Duración | Coste directo | Coste indirecto | Total |
| --- | --- | --- | --- |
| 20 días | 16.900 | 7.000 | 23.900 |
| 17 días | 17.750 | 5.950 | 23.700 |

El plazo óptimo es el que minimiza el total: aquí 17 días ahorran 200 euros además de entregar antes. Si el coste de acelerar superase el ahorro indirecto, no compensaría. Un proyecto no se acorta siempre: se acorta mientras la pendiente sea menor que el coste indirecto diario y otro motivo (penalización, fecha del cliente) lo justifique.

### 5.10 Cargas de trabajo y nivelación

El gráfico de cargas se hace **por perfil**, no por total: instaladores por un lado y técnicos por otro. En el ejemplo resuelto, los instaladores llegan a 3 (días 6 a 13) y los técnicos a 2, así que con una plantilla de 3 y 2 no hay sobrecarga; mezclar los 5 en un solo histograma engaña.

Sobreasignación y su solución con un ejemplo mínimo: Ana tiene la tarea T1 (días 1 a 4, 8 horas al día) y la tarea T2 (días 3 a 6, 8 horas al día). Los días 3 y 4 tiene 16 horas, el 200 por cien de su capacidad.

| Solución | Cómo | Efecto |
| --- | --- | --- |
| Nivelar | Retrasar T2 dentro de su holgura (si tiene 2 días: de 3 a 5) | Sin sobrecarga; si T2 no es crítica, el plazo no cambia |
| Reasignar | Dar T2 a otra persona | Coste y curva de aprendizaje |
| Comprimir | Añadir recursos a T1 para que acabe antes | Más coste |

Regla: primero nivelar usando la holgura, después reasignar, y solo al final comprimir. Y se equilibra la carga entre personas: una persona al 120 por cien y otra al 40 por cien es un riesgo de plazo y de calidad.

### 5.11 Aprovisionamientos, utillaje y stocks intermedios

Se trata de generar la información que define lo que hay que comprar, con qué herramientas y cuánto material se almacena entre fases.

| Campo | Ejemplo |
| --- | --- |
| Código normalizado | MAT-001 (cable U/FTP 6A LSZH) |
| Cantidad y unidad | 6 bobinas de 305 m |
| Proveedor y plazo | Distribuidor A, 10 días laborables |
| Fecha en que se necesita | Inicio de la tarea B (día 5) |
| **Fecha de pedido** | Fecha de necesidad menos plazo menos margen de seguridad |
| Stock de seguridad | 10 por ciento sobre el consumo del plazo |
| Ubicación y receptor | Almacén de obra, jefe de obra |

Con la regla de la tabla: el cable se necesita el día 5, el plazo es de 10 días y se deja un margen de 2, así que se pide **7 días antes del inicio del proyecto**. Es la razón por la que la compra aparece muchas veces en el camino crítico y por la que el plan debe empezar en la fecha del pedido, no en la del primer trabajo en obra.

Además del material, se listan el **utillaje y las herramientas** (certificadora, crimpadora, comprobador, fusionadora si hay fibra, escaleras, elevadores, EPI) con su calibración y disponibilidad, y los **stocks intermedios**: material que se almacena entre fases (todo el cable antes de empezar a tender, los paneles antes de montar el armario) con su ubicación y su custodia, para que ningún equipo quede parado por falta de un conector.

## Perspectiva empresarial

Planificar bien es la mitad de ganar dinero con un proyecto, y la otra mitad es controlarlo. Esta sección da las herramientas de quien responde de la cuenta de resultados. Las cifras son ilustrativas.

### Partes interesadas

Cada proyecto tiene personas que lo pueden favorecer o torpedear. Se clasifican por **poder** e **interés** y se decide cuánta atención dar:

| Grupo | Poder | Interés | Qué hacer | Ejemplo |
| --- | --- | --- | --- | --- |
| Alto poder, alto interés | Alto | Alto | Gestionar de cerca | Cliente que paga, dirección |
| Alto poder, bajo interés | Alto | Bajo | Mantener satisfecho | Propiedad del edificio, comunidad |
| Bajo poder, alto interés | Bajo | Alto | Mantener informado | Usuarios finales |
| Bajo poder, bajo interés | Bajo | Bajo | Vigilar | Proveedores secundarios |

Una parte interesada olvidada (el administrador del edificio que no autoriza el paso de cables) se convierte en un retraso.

### Contratación y precio

El tipo de contrato reparte el riesgo entre las partes:

| Tipo | Quién asume el riesgo de coste | Cuándo conviene |
| --- | --- | --- |
| Precio cerrado (llave en mano) | El contratista | Alcance bien definido |
| Por unidades de obra | Compartido: el cliente paga lo medido | Cantidades inciertas |
| Tiempo y materiales | El cliente | Alcance incierto, trabajo de diagnóstico |

El precio de venta se calcula sobre el margen, no sobre el sobrecoste. Con un coste de 19.000 euros y un margen deseado del 15 por ciento sobre el precio de venta: precio = 19.000 / (1 - 0,15) = 22.353 euros. Si se aplicara un 15 por ciento de recargo sobre el coste, saldrían 21.850: el margen real sería del 13 por ciento, no del 15. Es un error clásico y barato de evitar.

### Control económico: valor ganado (EVM)

El valor ganado compara tres números a una fecha: el **valor planificado (PV)**, el **valor ganado (EV)** (el presupuesto del trabajo realmente hecho) y el **coste real (AC)**.

```text
En el dia 13 del ejemplo resuelto: BAC (presupuesto total) = 16 900 euros
   PV = 12 200 (lo previsto a esa fecha)
   EV = 10 980 (el trabajo realmente hecho vale 10 980)
   AC = 12 500 (lo gastado realmente)

   SPI = EV / PV = 10 980 / 12 200 = 0,90   -> avanzamos al 90 por ciento de lo previsto
   CPI = EV / AC = 10 980 / 12 500 = 0,88   -> cada euro gastado rinde 88 centimos
   EAC = BAC / CPI = 16 900 / 0,878 = 19 240 euros (estimacion al terminar)
   Desviacion final prevista = 16 900 - 19 240 = -2 340 euros
```

SPI y CPI menores que 1 son malas noticias; los dos indican una tendencia que, si no se corrige, se mantendrá. Es la herramienta con la que se avisa al cliente a tiempo, no al final.

### Riesgos y contingencia

Cada riesgo se registra con probabilidad, impacto y respuesta (véase la matriz de la [Proyecto de red](../../01_Diseno/02_Proyecto_Red/Proyecto_Tecnico.md)). La **contingencia** cubre riesgos identificados y se calcula por su exposición; la **reserva de gestión** cubre lo no identificado y la controla la dirección, no el jefe de proyecto. Presentar al cliente un presupuesto sin contingencia no es ser competitivo: es mentir por omisión.

### Cierre del plan: qué se entrega al empezar

El plan que se firma es la **línea base**: alcance con exclusiones, calendario con camino crítico, presupuesto con contingencia, riesgos y plan de cambios. Todo cambio posterior se controla (apartado 4.5), y de cada desviación se deja constancia escrita, con su causa. Es lo que protege al contratista y también al cliente.

## Tablas de referencia rápida

| Cuestión | Respuesta corta |
| --- | --- |
| Modelos organizativos | Funcional, por proyectos y matricial débil, equilibrada o fuerte |
| Documentos UNE 157001:2014 | Índice, memoria con anexos, planos, pliego, mediciones, presupuesto |
| Estimación | Experto, Delphi, análoga, paramétrica, tres valores, ascendente |
| Coste | Material, mano de obra, medios, 13 % generales, 6 % beneficio, 21 % IVA |

## Cifras que hay que saber de memoria

- Tamaño del paquete: de 8 a 80 horas. Hijos por nodo: de 3 a 7.
- Divisor de PERT: 6. Peso del valor más probable: 4.
- Desviación de una tarea: (pesimista menos optimista) entre 6.
- Gastos generales: del 13 al 17 por ciento. Beneficio industrial: 6 por ciento. IVA: 21 por ciento.
- Pendiente de aceleración: (coste acelerada menos coste normal) entre días ganados.
- EVM: SPI igual a EV entre PV; CPI igual a EV entre AC; EAC igual a BAC entre CPI.
- Fecha de pedido: fecha de necesidad menos plazo de entrega menos margen.
- Precio de venta con margen: coste entre (1 menos margen), no coste por (1 más margen).
- Ejemplo resuelto: 20 días, 16.900 euros y 5 días de holgura en C.
- Etapas del equipo: 5. Roles de Belbin: 9.
- Enlace permanente: 90 m. Canal completo: 100 m.

## Procedimientos paso a paso

1. Calcular el camino crítico a mano.
   1. Listar paquetes con duración y predecesoras.
   2. Dibujar la red en AON y comprobar que no hay ciclos.
   3. Pasada adelante: ES es el mayor EF de las predecesoras.
   4. Pasada atrás: LF es el menor LS de las sucesoras.
   5. Holgura igual a LS menos ES; críticas las de holgura cero.

2. Estimar con tres valores.
   1. Pedir optimista, probable y pesimista a quien hizo algo parecido.
   2. Calcular te y varianza por tarea.
   3. Sumar te y varianzas del camino crítico por separado.
   4. Tipificar la fecha objetivo y buscar la probabilidad.

3. Montar el paquete documental.
   1. Fijar nomenclatura y estados antes de crear archivos.
   2. Redactar memoria y anexos con la numeración de la EDT.
   3. Dibujar planos con cajetín y revisión.
   4. Redactar pliego con normas, ensayos y aceptación.
   5. Medir por partidas, presupuestar con precios descompuestos y entregar en PDF/A.

4. Versionar el proyecto con git: repositorio con README de índice, confirmaciones por bloques con mensaje de qué cambia y etiqueta en cada entrega al cliente.

## Errores típicos

1. "La duración es la suma de todas las tareas": falso, es la del camino más largo.
2. "Comprimir la tarea más cara adelanta la entrega": falso, solo si es crítica; C es el paquete más caro por día y no lo es.
3. "CPM y PERT son sinónimos": falso, PERT es probabilístico y CPM determinista.
4. "En PERT se suman las desviaciones": falso, se suman varianzas y luego se hace la raíz.
5. "La ejecución material lleva IVA": falso, el IVA se aplica sobre la base de licitación.
6. "La EDT puede incluir reuniones": falso, descompone entregables; la gestión va en el plan.
7. "La matricial evita conflictos de prioridad": falso, los crea y hay que gestionarlos.
8. "Un plano aprobado no cambia": falso, cambia con revisión y retirada del anterior.
9. "Acelerar toda la obra reduce costes": falso, acelerar cuesta; solo se acelera el camino crítico y mientras la pendiente sea menor que el ahorro indirecto.
10. "El histograma de cargas se hace con el total de personas": falso, se hace por perfil.
11. "Una unidad de obra es lo mismo que un paquete de trabajo": falso, la unidad de obra se mide y se cobra; el paquete se planifica y se asigna.
12. "El margen del 15 por ciento es un recargo del 15 por ciento sobre el coste": falso, el margen es sobre el precio de venta; el recargo da un margen menor.
13. "CPI mayor que 1 es malo": falso, mayor que 1 significa que se rinde mejor de lo previsto; menor que 1 es la mala noticia.
14. "El pliego de prescripciones técnicas particulares fija el precio y la forma de pago": falso, eso es de las cláusulas administrativas.
15. "Las dependencias primarias se pueden saltar para ganar tiempo": falso, son físicas; las secundarias sí se pueden cambiar.

## Glosario de la unidad

**AON.** Red con la actividad en el nodo.
**Camino crítico.** Secuencia con holgura total cero que fija la duración.
**Compresión.** Reducir plazo añadiendo recursos o solapando tareas.
**CPM.** Método del camino crítico, determinista.
**Curva S.** Coste acumulado en el tiempo.
**Doble dependencia.** Trabajador con jefe funcional y jefe de proyecto.
**EDT.** Desglose jerárquico del trabajo por entregables.
**Gantt.** Barras sobre eje de tiempo.
**Hito.** Suceso de duración cero que marca un estado.
**Holgura libre.** Retraso que no mueve la sucesora.
**Holgura total.** Retraso que no mueve la fecha final.
**Línea base.** Versión aprobada de alcance, plazo y coste.
**Paquete de trabajo.** Último nivel de la EDT, estimable y con un responsable.
**PEM.** Presupuesto de ejecución material, sin generales ni beneficio.
**PERT.** Técnica probabilística con tres duraciones.
**PMO.** Oficina de proyectos: apoyo, control o directiva.
**RACI.** Matriz de responsable, aprueba, consultado e informado.
**AC, EV y PV.** Coste real, valor ganado y valor planificado a una fecha.
**BAC y EAC.** Presupuesto total y estimación del coste al terminar.
**CPI y SPI.** Índices de rendimiento de coste y de plazo: EV entre AC y EV entre PV.
**Dependencia primaria, secundaria y externa.** Física, discrecional y ajena al proyecto.
**Pendiente de aceleración.** Coste de ganar un día en una tarea.
**Precio descompuesto.** Desglose de un precio unitario en material, mano de obra y medios.
**Pliego de prescripciones técnicas particulares.** Condiciones técnicas de una obra concreta.
**Pliego de cláusulas administrativas particulares.** Plazo, precio, pagos, penalizaciones y garantías.
**Reserva de gestión.** Fondo para riesgos no identificados, en manos de dirección.
**Unidad de obra.** Resultado terminado medible, con su precio unitario.

## Para profundizar

- UNE, buscador de normas: https://www.une.org
- AENOR, certificación y formación: https://www.aenor.com
- BOE, Real Decreto 1531/2011, programa de referencia de este material: https://www.boe.es/buscar/act.php?id=BOE-A-2011-19503
- PMI, estándares de dirección de proyectos: https://www.pmi.org
- IPMA, marco de competencias ICB4: https://www.ipma.world
- Documentación oficial de git: https://git-scm.com/doc
- BOE, Real Decreto 1098/2001, Reglamento de contratos de las Administraciones Públicas: https://www.boe.es/buscar/act.php?id=BOE-A-2001-19995
- BOE, Ley 9/2017 de Contratos del Sector Público: https://www.boe.es/buscar/act.php?id=BOE-A-2017-12902
