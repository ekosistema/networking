---
title: "Diseño de redes"
description: "Diseñar una red es decidir con criterio y dejarlo escrito para que otro pueda construirla sin llamarte por teléfono."
section: diseno
kind: portada
order: 0
tags:
  - redes
---

# Diseño de redes

```text
==============================================================
   BLOQUE 1  ·  DISENO  ·  tres unidades
==============================================================
```

> **En una frase.** Diseñar una red es decidir con criterio y dejarlo escrito para que otro
> pueda construirla sin llamarte por teléfono.

## Qué se aprende aquí

- Entender cómo viaja la señal y por qué el cable tiene límites físicos, no caprichos.
- Leer un catálogo de equipos y saber si lo que promete es real con los metros que tienes.
- Elegir medio, topología, equipos y direccionamiento, y justificar la elección por coste y
  rendimiento.
- Dibujar el cableado estructurado de un edificio con sus subsistemas, armarios y distancias.
- Escribir el documento técnico del proyecto: memoria, planos, pliego y presupuesto.

## El recorrido del bloque

```text
  MERCADO                PROYECTO                  DOCUMENTACION
  la materia             la forma                  el papel
  ----------             ----------                ----------
  como viaja la senal -> como se organiza     ->   como se documenta
  modelos y protocolos   topologia y cableado      memoria, planos, pliego
  medios y equipos       proyecto y viabilidad     presupuesto y calidad
       |                      |                          |
       v                      v                          v
  "esto es posible"      "esto es correcto"        "esto es defendible"
```

La secuencia no es casual. Sin entender la física del medio, el diseño es un dibujo. Sin diseño,
el documento técnico es burocracia. Cada unidad alimenta a la siguiente.

## Las unidades

| Unidad | Materiales |
| --- | --- |
| **Mercado de comunicaciones** | [Portada](01_Mercado_Comunicaciones/README.md) · [Conceptual](01_Mercado_Comunicaciones/Mercado_Conceptual.md) · [Técnico](01_Mercado_Comunicaciones/Mercado_Tecnico.md) · [Casos](01_Mercado_Comunicaciones/Mercado_Casos.md) · [Audio](../05_Audioapuntes/01_Mercado_Audioapuntes.md) |
| **Proyecto de red** | [Portada](02_Proyecto_Red/README.md) · [Conceptual](02_Proyecto_Red/Proyecto_Conceptual.md) · [Técnico](02_Proyecto_Red/Proyecto_Tecnico.md) · [Casos](02_Proyecto_Red/Proyecto_Casos.md) · [Audio](../05_Audioapuntes/02_Proyecto_Audioapuntes.md) |
| **Documentación técnica** | [Portada](03_Documentacion_Tecnica/README.md) · [Conceptual](03_Documentacion_Tecnica/Documentacion_Conceptual.md) · [Técnico](03_Documentacion_Tecnica/Documentacion_Tecnico.md) · [Casos](03_Documentacion_Tecnica/Documentacion_Casos.md) · [Audio](../05_Audioapuntes/03_Documentacion_Audioapuntes.md) |

## Los tres errores típicos del bloque

**Confundir ancho de banda con caudal.** El enunciado da un enlace de un gigabit y pregunta si
basta para cien usuarios. La respuesta exige hablar de caudal real, de cabeceras y de
utilización, no de la cifra del folleto.

**Diseñar sin calcular.** Repartir direcciones a ojo, olvidar la dirección de red y de difusión,
o dejar sin reserva el rango de servidores y de impresoras.

**Tratar la documentación como un trámite.** El pliego, los planos y el presupuesto son la
diferencia entre un proyecto que se puede ejecutar y una idea. En un trabajo real, valen el contrato.

## Antes de pasar al siguiente bloque

- [ ] Puedo explicar el viaje completo de un paquete, capa por capa, sin apuntes.
- [ ] Resuelvo un ejercicio de subredes con VLSM en menos de cinco minutos.
- [ ] Sé calcular un presupuesto de enlace en decibelios y decir si llega.
- [ ] Dibujo el esquema de cableado de un edificio de tres plantas con sus distancias.
- [ ] Enumerar las partes del documento técnico según UNE 157001:2014.
