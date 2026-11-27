---
title: "Ejecución de proyectos de implantación de infraestructuras"
description: "Aquí se aprende a ejecutar una red y a demostrarlo: controlar plazo y coste con números, medir el cableado con criterio, alimentar el armario sin sustos y cerrar el proyecto con un acta y no con un \"ya funciona\"."
section: implantacion
unit: ejecucion
kind: portada
order: 50
tags:
  - redes
  - ejecucion
---

# Ejecución de proyectos de implantación de infraestructuras

> **Gestión de la implantación de redes telemáticas** · unidad 5 de 8

**En una frase.** Aquí se aprende a ejecutar una red y a demostrarlo: controlar plazo y coste con números, medir el cableado con criterio, alimentar el armario sin sustos y cerrar el proyecto con un acta y no con un "ya funciona".

## Qué te llevas de aquí

- Calcular valor planificado, valor ganado y coste real, y decir en una frase si el proyecto va caro, lento o las dos cosas.
- Distinguir una incidencia de una solicitud de cambio y saber qué se hace con cada una.
- Medir un enlace de cobre con un certificador y explicar por qué falla un NEXT o una pérdida de retorno.
- Dimensionar un SAI con la carga real, la autonomía pedida y el margen de envejecimiento de la batería.
- Diagnosticar una avería por hipótesis, con la prueba que más discrimina, y documentar la causa raíz.

## El recorrido

La unidad va del control a la entrega, pasando por la obra.

```text
  CONTROL           EJECUCION            DEMOSTRACION
  -------           ---------            ------------
  PV / EV / AC  ->  protocolos      ->   certificacion
  cambios           electricidad         diagnostico
  incidencias       armarios y SAI       calidad
        \                 |                   /
         +----------------+------------------+
                          v
                    RECEPCION Y CIERRE
```

## Los materiales

| Documento | Para qué sirve | Tiempo |
| --- | --- | --- |
| [Resumen conceptual](Ejecucion_Conceptual.md) | Entender las ideas sin fricción | 15 min |
| [Resumen técnico](Ejecucion_Tecnico.md) | Datos, tablas, límites, procedimientos, capacitación y perspectiva empresarial | 150 min |
| [Audioapuntes, parte uno](../../05_Audioapuntes/05_Ejecucion_Audioapuntes.md) | Repasar escuchando: control, eléctrica, certificación y diagnóstico | 11 min |
| [Audioapuntes, parte dos](../../05_Audioapuntes/05_Ejecucion_Audioapuntes_Parte2.md) | Repasar escuchando: protocolos, seguridad, cierre y capacitación | 12 min |
| [Casos prácticos resueltos](Ejecucion_Casos.md) | Seis casos con solución y rúbrica | 120 min |
| [Autoevaluación](Ejecucion_Autoevaluacion.md) | 47 preguntas con explicación | 50 min |
| [Tarjetas de repaso](Ejecucion_Tarjetas.md) | 98 tarjetas para repaso espaciado | 20 min por pasada |
| [Guía de laboratorio](Ejecucion_Laboratorio.md) | Cinco prácticas | 5 tardes |

## Por dónde empiezo

1. Lee el conceptual de una tirada, sin apuntar nada.
2. Escucha los audioapuntes al día siguiente, andando.
3. Vuelve al técnico con las preguntas del conceptual en la cabeza y quédate con las tablas de límites y el procedimiento de certificación.
4. Haz el cálculo del SAI a mano, con tus propios números, hasta que salga sin mirar.

## Antes de pasar a la siguiente unidad

- Sabes explicar la diferencia entre valor ganado y coste real con un ejemplo tuyo.
- Sabes decir qué parámetro se degrada al destrenzar demasiado y cuál al crimpar mal.
- Sabes por qué un diferencial no protege si la toma de tierra no existe.
