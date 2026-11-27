---
title: "Desarrollo del proyecto de la red telemática"
description: "Un proyecto de red no es un dibujo bonito con cajas y flechas: es un documento que justifica cada metro de cable, cada switch y cada euro con un requisito del cliente y un número medible."
section: diseno
unit: proyecto
kind: portada
order: 20
tags:
  - redes
  - proyecto
  - cableado
---

# Desarrollo del proyecto de la red telemática

> **Diseño de redes telemáticas** · unidad 2 de 8

**En una frase.** Un proyecto de red no es un dibujo bonito con cajas y flechas: es un documento que justifica cada metro de cable, cada switch y cada euro con un requisito del cliente y un número medible.

## Qué te llevas de aquí

- Justificar la elección entre conmutación de circuitos y de paquetes con criterios de coste, QoS y patrón de tráfico, no con la lista de ventajas memorizada.
- Decidir el medio físico de cada tramo (cobre, fibra, radio) a partir de la distancia, el ancho de banda y el entorno electromagnético.
- Explicar por qué el enlace permanente se corta en 90 metros y qué se mide para certificarlo.
- Distinguir cuándo un switch resuelve el problema y cuándo hace falta un router, con el dominio de colisión y el de difusión sobre la mesa.
- Redactar una propuesta técnica con requisitos, VLAN, direccionamiento, armarios y presupuesto, y planificarla con un diagrama de Gantt.

## El recorrido

```text
   (1) ENTENDER              (2) DIMENSIONAR            (3) JUSTIFICAR
+------------------+      +--------------------+     +-------------------+
| conmutacion      |      | LAN y VLAN         |     | requisitos        |
| ATM / Frame Rel. | ---> | cableado 90 m      | --> | viabilidad        |
| topologias       |      | armarios y CEM     |     | Gantt y coste     |
+------------------+      +--------------------+     +-------------------+
```

## Los materiales

| Documento | Para qué sirve | Tiempo |
| --- | --- | --- |
| [Resumen conceptual](Proyecto_Conceptual.md) | Entender las ideas sin fricción | 15 min |
| [Resumen técnico](Proyecto_Tecnico.md) | Datos, tablas, procedimientos, caso práctico y perspectiva empresarial | 120 min |
| [Audioapuntes, parte uno](../../05_Audioapuntes/02_Proyecto_Audioapuntes.md) | Repasar escuchando: redes, LAN y cableado | 12 min |
| [Audioapuntes, parte dos](../../05_Audioapuntes/02_Proyecto_Audioapuntes_Parte2.md) | Repasar escuchando: proyecto, diagnóstico, plan y coste | 11 min |
| [Casos prácticos resueltos](Proyecto_Casos.md) | Seis casos con solución y rúbrica | 120 min |
| [Autoevaluación](Proyecto_Autoevaluacion.md) | 43 preguntas con explicación | 45 min |
| [Tarjetas de repaso](Proyecto_Tarjetas.md) | 83 tarjetas para repaso espaciado | 15 min por pasada |
| [Guía de laboratorio](Proyecto_Laboratorio.md) | Cinco prácticas | 5 tardes |

## Por dónde empiezo

1. Lee el conceptual de una tirada, sin apuntar nada, y quédate solo con la frase de cada concepto.
2. Escucha los audioapuntes al día siguiente, mientras andas o vas en transporte.
3. Vuelve al técnico con las preguntas del conceptual en la cabeza y resuelve el caso de las tres plantas con papel y lápiz antes de mirar la solución.

## Antes de pasar a la siguiente unidad

- Sabes explicar, sin mirar, por qué un hub crea un solo dominio de colisión y un switch no.
- Puedes dibujar de memoria los seis subsistemas del cableado estructurado y decir qué separa a cada uno del siguiente.
- Eres capaz de escribir tres requisitos medibles de un cliente y traducirlos a una decisión de medio y de equipo.
