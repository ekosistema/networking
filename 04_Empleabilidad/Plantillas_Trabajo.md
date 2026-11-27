---
title: "Plantillas de trabajo"
description: "Cómo usarlas. Copia la plantilla que necesites, rellénala con datos sin información confidencial (nombres genéricos, rangos de ejemplo) y enséñasela a tu mentor antes de darla por buena. Cada una indica el área de compet"
section: empleabilidad
kind: plantillas
order: 2
tags:
  - redes
  - practicas
  - plantillas
---

# Plantillas de trabajo

> **Cómo usarlas.** Copia la plantilla que necesites, rellénala con datos **sin información
> confidencial** (nombres genéricos, rangos de ejemplo) y enséñasela a tu mentor antes de darla por
> buena. Cada una indica el área de competencia a la que responde y la unidad donde se explica el método.

## 1. Acta de entrevista de requisitos (C1.1)

Método: [Proyecto de red, apartado 4.2](../01_Diseno/02_Proyecto_Red/Proyecto_Tecnico.md).

```text
ACTA DE ENTREVISTA
Fecha y lugar:           Duracion:
Asistentes (nombre y cargo):
Objetivo de la reunion:
Que se dijo (resumen por temas):
  1. Puestos actuales y a cinco anos:
  2. Aplicaciones criticas y su consumo:
  3. Tolerancia a paradas:
  4. Quien mantiene la red:
  5. Presupuesto y plazos:
  6. Normas que cumple el negocio:
Acuerdos:
Dudas abiertas y quien las resuelve:
Proximo paso y fecha:
Estado: pendiente de validacion por el cliente   [ ]  validada  [ ]
```

## 2. Documento de requisitos (C1.2)

Un buen requisito es medible, singular y verificable.

| ID | Requisito | Criterio de aceptación | Prioridad | Origen |
| --- | --- | --- | --- | --- |
| RF-01 | | | | |
| RF-02 | | | | |
| RNF-01 | | | | |
| RNF-02 | | | | |

Se añaden las **restricciones** (presupuesto, plazo, normas) y los **supuestos** (qué se da por cierto
mientras no se demuestre lo contrario).

## 3. Estudio de viabilidad técnico-económica (C1.3)

Método: [Proyecto de red, apartado 4.3](../01_Diseno/02_Proyecto_Red/Proyecto_Tecnico.md).

| Apartado | Contenido |
| --- | --- |
| Alternativas | Al menos dos (por ejemplo, ampliar lo existente o rediseñar) |
| Viabilidad técnica | Distancias, canalizaciones, potencia, climatización, espacio |
| Viabilidad legal | Protección de datos, normativa del sector |
| Inversión | Material, mano de obra, licencias, formación |
| Explotación anual | Soporte, energía, administración, renovación |
| Ahorros previstos | Paradas evitadas, soporte, telefonía, otros |
| Indicadores | Plazo de recuperación, VAN y TIR con una tasa de descuento acordada |
| Sensibilidad | ¿Y si los ahorros son un 30 por ciento menores? |
| Conclusión | Recomendación razonada |

```text
VAN = -Inversion + suma de (Flujo del ano t / (1 + r) elevado a t)
Payback = Inversion / Ahorro anual
```

## 4. Inventario de equipos y servicios (C2.1)

| ID | Tipo, marca y modelo | Serie | Ubicación | Firmware | IP y MAC de gestión | Garantía | Responsable |
| --- | --- | --- | --- | --- | --- | --- | --- |
| | | | | | | | |

Servicios de telecomunicación: operador, tipo de acceso, caudal, contrato y vencimiento. **No copies
contraseñas ni claves.**

## 5. Propuesta de diseño: topología, medios, ubicación, WAN y respaldo (C1.4 a C1.9)

| Decisión | Alternativas | Criterios y pesos | Elegida y justificación |
| --- | --- | --- | --- |
| Topología | | Rendimiento, coste, calidad del servicio | |
| Medios de transmisión | Cobre, fibra, inalámbrico | Distancia, velocidad, coste, futuro | |
| Ubicación de equipos | | Distancias de 90 m, acceso, ventilación, energía | |
| Interconexión WAN | | Caudal garantizado, disponibilidad, coste | |
| Línea de respaldo | Sin respaldo, 4G, segunda fibra | Coste de la parada frente al coste de la línea | |

Se resuelve con una **matriz ponderada**: pesos que suman 100, puntuaciones de 1 a 5 y total. Se
anota por qué se descarta cada alternativa. Método en [Mercado de comunicaciones](../01_Diseno/01_Mercado_Comunicaciones/Mercado_Tecnico.md).

## 6. Plan de direccionamiento y VLAN (C1.7, C6.1 y C6.2)

| VLAN | Nombre | Subred | Máscara | Pasarela | Hosts previstos con margen | Observaciones |
| --- | --- | --- | --- | --- | --- | --- |
| | | | | | | |

Reglas: ordenar de mayor a menor, margen del 30 por ciento, bloques alineados y espacio libre
documentado. En la **revisión de VLAN** se comprueba: tipo de agrupación (por puerto en un
conmutador, por puerto en dos, por MAC), troncales con las VLAN permitidas, VLAN nativa igual en los
dos extremos y aislamiento de invitados.

## 7. Ficha de lectura de documentación técnica (C2.1 y C4.1)

| Dato | Dónde se mira | Qué se ha encontrado |
| --- | --- | --- |
| Ubicación de los equipos de voz y datos | Planos y esquema lógico | |
| Medios y herramientas necesarios | Pliego y memoria | |
| Energía y protecciones | Esquema unifilar | |
| Envolventes, cuadros, armarios y elementos del cableado | Alzado y listado | |
| Ventilación forzada y alimentación especial | Memoria y sala técnica | |
| Canalizaciones y su distribución | Planos | |
| Cableados y conexionado | Pliego y planos | |
| Identificación y señalización | Plano, listado y pliego | |

Al final: **lagunas detectadas** y **consultas que se devuelven** antes de planificar.

## 8. Plan de implantación o de mantenimiento (C3.1 a C3.12)

Método: [Planificación de proyectos](../02_Implantacion/01_Planificacion_Proyectos/Planificacion_Tecnico.md).

| Código | Tarea (verbo y resultado) | Fase | Duración | Predecesoras | Recursos | Coste | Hito |
| --- | --- | --- | --- | --- | --- | --- | --- |
| | | | | | | | |

A partir de la tabla:

1. **EDT** con la regla del cien por cien (C3.2).
2. **Camino crítico y holguras** con pasada adelante y atrás (C3.5 y C3.6).
3. **Gantt** y diagrama de red (C3.6).
4. **Histograma de cargas por perfil** y nivelación (C3.10).
5. **Estimación de costes** con material, mano de obra y medios (C3.8).
6. **Hitos** verificables (C3.9).

Documento de aprovisionamiento (C3.11 y C3.12):

| Código | Material o herramienta | Cantidad | Proveedor y plazo | Se necesita el día | Fecha de pedido | Stock de seguridad |
| --- | --- | --- | --- | --- | --- | --- |
| | | | | | | |

Fecha de pedido = fecha de necesidad menos plazo de entrega menos margen.

## 9. Informe de avería (C4.2 a C4.7)

Método: [Ejecución de proyectos, apartado 5](../02_Implantacion/02_Ejecucion_Proyectos/Ejecucion_Tecnico.md) y
[Incidencias](../03_Administracion/03_Incidencias/Incidencias_Tecnico.md).

```text
INFORME DE AVERIA                                    N.:        Fecha:
Quien avisa / quien interviene:
Sintomas (efectos observados, hora de inicio, alcance):
Documentacion consultada:
Hipotesis (al menos una, relacionada con los sintomas):
  H1:                                  H2:
Plan de intervencion (pruebas ordenadas por lo que discriminan):
Medidas y resultados (valor obtenido frente a referencia):
Causa raiz y elemento responsable (fisico o logico):
Correccion o sustitucion (que se cambio y por que equivalente):
Comprobaciones y ajustes (el servicio se restablece segun especificacion):
Prueba de no regresion:
Accion correctiva y prevencion (responsable y plazo):
Tiempo total y piezas:
```

## 10. Calidad: plan de control, ficha de toma de datos e informe de no conformidad (C5.1 a C5.5)

**Plan de control.**

| Característica | Instrumento | Tarea | Frecuencia | Registro | Punto de parada |
| --- | --- | --- | --- | --- | --- |
| | | | | | |

**Ficha de toma de datos.**

| Obra, fase y fecha | Elemento | Característica y criterio | Valor medido | Resultado | Instrumento y calibración | Inspector |
| --- | --- | --- | --- | --- | --- | --- |
| | | | | | | |

**Informe de no conformidad.**

```text
N. de no conformidad:            Fecha:
Elemento afectado:
Requisito incumplido (norma o procedimiento):
Evidencia (medida, captura, fotografia):
Alcance (cuantos elementos):
Correccion inmediata:
Causa raiz (cinco porques o Ishikawa):
Accion correctiva (responsable y plazo):
Verificacion del cierre:
Firma:
```

## 11. Revisión de rutas, ACL y DHCP (C6.3 a C6.6)

| Apartado | Qué se comprueba | Resultado |
| --- | --- | --- |
| Tabla de rutas | Destinos, siguiente salto, ruta por defecto, coincidencia más larga | |
| Pruebas | `ping` y `traceroute` entre las redes que deben verse y entre las que no | |
| ACL propuesta | Origen, destino, puerto, sentido e interfaz; el denegar implícito | |
| DHCP | Ámbito, exclusiones, reservas, puerta, DNS y relay | |

```text
ACL propuesta: [objetivo en una frase]
  1. deny   [origen]  [destino]  [puerto]     (por que)
  2. permit ip any any                         (por que)
  Aplicada en: [interfaz y sentido]
  Prueba de verificacion: [que debe fallar y que debe funcionar]
```

## 12. Informe de evolución de la red (C7.1 y C7.2)

Método: [Gestión de redes, apartados 7.3 y 7.5](../03_Administracion/02_Gestion_Redes/Gestion_Tecnico.md).

| Apartado | Contenido |
| --- | --- |
| Propósito y destinatario | Para qué se hace y quién lo lee |
| Periodo y fuente de datos | Contadores, flujos, equipos medidos |
| Perfil de tráfico | Media, punta y percentil 95 por hora y tipo de día |
| Tendencia | Tasa de crecimiento mensual y meses hasta el umbral |
| Hallazgos | Qué se sale del perfil y cuándo |
| Propuesta | Calidad de servicio, reprogramación, ampliación o cambio |
| Coste y fecha | Importe, plazo y responsable |

## 13. Informe de realización de una intervención (mantenimiento)

```text
Fecha y ventana:                 Responsable:
Operaciones realizadas y resultado de cada una:
Medidas antes y despues:
Version instalada (si hay actualizacion):
Incidencias y reversion (si la hubo):
Comprobaciones posteriores:
Registro del cambio (peticion y aprobacion):
Firma:
```
