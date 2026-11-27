---
title: "Implantación de redes"
description: "Un buen diseño mal ejecutado es un mal proyecto: aquí se aprende a que lo previsto y lo real coincidan, y a demostrarlo con papeles y con medidas."
section: implantacion
kind: portada
order: 10
tags:
  - redes
---

# Implantación de redes

```text
==============================================================
   BLOQUE 2  ·  IMPLANTACION  ·  dos unidades
==============================================================
```

> **En una frase.** Un buen diseño mal ejecutado es un mal proyecto: aquí se aprende a que lo
> previsto y lo real coincidan, y a demostrarlo con papeles y con medidas.

## Qué se aprende aquí

- Planificar un proyecto de verdad: alcance, EDT, dependencias, camino crítico, coste y recursos.
- Seguir la obra y explicar la desviación, no solo sufrirla.
- Preparar la infraestructura eléctrica: protecciones, SAI y reglamento.
- Certificar un cableado con instrumento y criterio, distinguiendo medir de comprobar.
- Diagnosticar una avería física con método y documentar la calidad con datos.

## El recorrido del bloque

```text
  PLANIFICAR                           EJECUTAR Y DEMOSTRAR
  ------------------------              ------------------------------
  alcance y EDT                         seguimiento, cambios y costes
  Gantt, CPM y PERT                     protocolos de intervencion
  duraciones, recursos, costes          electrico: protecciones y SAI
  riesgos y hitos                       certificacion del cableado
        |                               diagnostico y calidad
        v                                     |
  "esto se puede hacer"                       v
  en este plazo y por este dinero       "esto esta hecho y se puede medir"
```

La primera unidad responde a la pregunta del jefe de proyecto. La segunda, a la del técnico que
llega a la obra y tiene que demostrar que lo que hay instalado cumple.

## Las unidades

| Unidad | Materiales |
| --- | --- |
| **Planificación de proyectos** | [Portada](01_Planificacion_Proyectos/README.md) · [Conceptual](01_Planificacion_Proyectos/Planificacion_Conceptual.md) · [Técnico](01_Planificacion_Proyectos/Planificacion_Tecnico.md) · [Casos](01_Planificacion_Proyectos/Planificacion_Casos.md) · [Audio](../05_Audioapuntes/04_Planificacion_Audioapuntes.md) |
| **Ejecución de proyectos** | [Portada](02_Ejecucion_Proyectos/README.md) · [Conceptual](02_Ejecucion_Proyectos/Ejecucion_Conceptual.md) · [Técnico](02_Ejecucion_Proyectos/Ejecucion_Tecnico.md) · [Casos](02_Ejecucion_Proyectos/Ejecucion_Casos.md) · [Audio](../05_Audioapuntes/05_Ejecucion_Audioapuntes.md) |

## Los cuatro errores típicos del bloque

**Gantt sin lógica.** Un diagrama de barras bonito sin dependencias no dice nada. Si no hay
flechas, no hay camino crítico, y sin camino crítico no hay gestión.

**Confundir comprobador con certificador.** El comprobador dice si hay continuidad; el
certificador mide NEXT, atenuación, pérdida de retorno y emite un informe con veredicto. En el
informe real, certificar con un comprobador es un error de fondo.

**Olvidar la parte eléctrica.** El SAI, el magnetotérmico, el diferencial y la toma de tierra
aparecen casi siempre y casi siempre se estudian los últimos.

**No cerrar el proyecto.** Recepción, documentación final, formación y lecciones aprendidas son
parte del trabajo bien hecho: un proyecto sin cierre no se cobra.

## Antes de pasar al siguiente bloque

- [ ] Calculo un camino crítico con holguras sin equivocarme en los signos.
- [ ] Sé aplicar la fórmula PERT con tres valores y explicar qué mide la desviación.
- [ ] Distingo los parámetros de certificación y sé qué instrumento mide cada uno.
- [ ] Explico qué protege cada elemento del cuadro eléctrico y dimensiono un SAI sencillo.
- [ ] Tengo una tabla síntoma, causa, herramienta y solución para las averías físicas habituales.
