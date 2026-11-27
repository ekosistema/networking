---
title: "Análisis del mercado de productos de comunicaciones"
description: "Toda decisión de compra en una red se reduce a tres preguntas: qué límite físico tiene el enlace, qué medio lo sostiene y qué garantía firma el proveedor; esta unidad enseña a responderlas con números."
section: diseno
unit: mercado
kind: portada
order: 10
tags:
  - redes
  - mercado
---

# Análisis del mercado de productos de comunicaciones

> **Diseño de redes telemáticas** · unidad 1 de 8

**En una frase.** Toda decisión de compra en una red se reduce a tres preguntas: qué límite físico tiene el enlace, qué medio lo sostiene y qué garantía firma el proveedor; esta unidad enseña a responderlas con números.

## Qué te llevas de aquí

- Explicar de memoria qué hace cada capa de OSI y de TCP/IP, y en qué capa vive cada equipo que vas a comprar.
- Calcular en decibelios el presupuesto de un enlace y decidir si el margen aguanta el envejecimiento del cable.
- Dimensionar una subred con máscara contigua y decir sin dudar cuál es la dirección de red, la de broadcast y el rango útil.
- Elegir categoría de par trenzado o tipo de fibra a partir de la velocidad, la distancia y el presupuesto, y no por la etiqueta del catálogo.
- Leer un contrato de acceso y separar caudal de simetría, y disponibilidad de velocidad comercial.

## El recorrido

```text
   +------------------+      +------------------+      +------------------+
   | 1. El modelo     |      | 2. La senal      |      | 3. La decision   |
   |    y sus capas   | -->  |    y el medio    | -->  |    y el contrato |
   |    (OSI, TCP/IP) |      |    (dB, cobre)   |      |    (equipos, SLA)|
   +------------------+      +------------------+      +------------------+
```

Las tres etapas se recorren en el mismo orden en que se diseña: primero se elige el modelo mental, después se comprueba si la física lo permite y solo al final se compra.

## Los materiales

| Documento | Para qué sirve | Tiempo |
| --- | --- | --- |
| [Resumen conceptual](Mercado_Conceptual.md) | Entender las ideas sin fricción | 15 min |
| [Resumen técnico](Mercado_Tecnico.md) | Datos, tablas y procedimientos, con perspectiva empresarial | 120 min |
| [Audioapuntes, parte uno](../../05_Audioapuntes/01_Mercado_Audioapuntes.md) | Repasar escuchando: modelos, medios, subredes | 10 min |
| [Audioapuntes, parte dos](../../05_Audioapuntes/01_Mercado_Audioapuntes_Parte2.md) | Repasar escuchando: seguridad, enrutamiento, coste | 11 min |
| [Casos prácticos resueltos](Mercado_Casos.md) | Seis casos con solución y rúbrica de diez puntos | 120 min |
| [Autoevaluación](Mercado_Autoevaluacion.md) | 43 preguntas con explicación de cada distractor | 45 min |
| [Tarjetas de repaso](Mercado_Tarjetas.md) | 72 tarjetas para repaso espaciado | 15 min por pasada |
| [Guía de laboratorio](Mercado_Laboratorio.md) | Cinco prácticas con herramientas gratuitas | 5 tardes |

## Por dónde empiezo

1. Lee el conceptual de una tirada, sin apuntar nada.
2. Escucha los audioapuntes al día siguiente.
3. Vuelve al técnico con las preguntas del conceptual en la cabeza.

## Antes de pasar a la siguiente unidad

- Sabes decir en qué capa trabaja un conmutador y en cuál un router sin mirar la tabla.
- Resuelves un presupuesto óptico de tres componentes y distingues margen de sensibilidad.
- Ante una oferta de "hasta 1 Gb", preguntas por caudal garantizado, simetría y tiempo de reparación.
