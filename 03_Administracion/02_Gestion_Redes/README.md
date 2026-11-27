---
title: "Gestión de redes telemáticas"
description: "Una red no se termina el día que se instala: se mide, se decide con lo medido y se deja constancia, en un ciclo que solo acaba cuando la red se apaga."
section: administracion
unit: gestion
kind: portada
order: 70
tags:
  - redes
  - gestion
---

# Gestión de redes telemáticas

> **Administración de redes telemáticas** · unidad 7 de 8

**En una frase.** Una red no se termina el día que se instala: se mide, se decide con lo medido y se deja constancia, en un ciclo que solo acaba cuando la red se apaga.

## Qué te llevas de aquí

- Leer una gráfica de utilización y calcular con logaritmos cuándo se satura un enlace.
- Sacar el estado y el tráfico de un equipo con comandos de SNMP, sin depender de la interfaz web del fabricante.
- Distinguir un sistema de detección de intrusos de un escáner de vulnerabilidades, y saber qué mide cada herramienta de monitorización.
- Planificar una actualización de firmware con ventana, reversión y verificación posterior.

## El recorrido

La unidad sigue el mismo orden que el trabajo real: medir, decidir y actuar.

```text
        +-------------+      +-------------+      +-------------+
        |   MEDIR     |      |   DECIDIR   |      |   ACTUAR    |
        | SNMP, RMON  |----->| umbrales y  |----->| cambios y   |
        | NetFlow,    |      | tendencia   |      | firmware    |
        | SYSLOG      |      |             |      |             |
        +-------------+      +-------------+      +-------------+
               ^                                        |
               |________________________________________|
                        vuelve a medir
```

## Los materiales

| Documento | Para qué sirve | Tiempo |
| --- | --- | --- |
| [Resumen conceptual](Gestion_Conceptual.md) | Entender las ideas sin fricción | 15 min |
| [Resumen técnico](Gestion_Tecnico.md) | Datos, tablas, procedimientos, perfiles de tráfico, calendario y perspectiva empresarial | 150 min |
| [Audioapuntes, parte uno](../../05_Audioapuntes/07_Gestion_Audioapuntes.md) | Repasar escuchando: SNMP, RMON, monitorización y mantenimiento | 11 min |
| [Audioapuntes, parte dos](../../05_Audioapuntes/07_Gestion_Audioapuntes_Parte2.md) | Repasar escuchando: seguridad, perfiles de tráfico, calendario y coste | 11 min |
| [Casos prácticos resueltos](Gestion_Casos.md) | Seis casos con solución y rúbrica | 150 min |
| [Autoevaluación](Gestion_Autoevaluacion.md) | 45 preguntas con explicación | 50 min |
| [Tarjetas de repaso](Gestion_Tarjetas.md) | 104 tarjetas para repaso espaciado | 20 min por pasada |
| [Guía de laboratorio](Gestion_Laboratorio.md) | Cinco prácticas | 6 tardes |

## Por dónde empiezo

1. Lee el conceptual de una tirada, sin apuntar nada.
2. Escucha los audioapuntes al día siguiente.
3. Vuelve al técnico con las preguntas del conceptual en la cabeza.

## Antes de pasar a la siguiente unidad

- Sabes explicar qué mide cada una de las cinco áreas de administración con un ejemplo propio.
- Puedes escribir de memoria `snmpget`, `snmpwalk` y `snmptrap` con la versión y la comunidad.
- Sabes calcular en cuántos meses se llena un enlace que crece un veinte por ciento al mes.
