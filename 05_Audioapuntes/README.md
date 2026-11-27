---
title: "Audioapuntes"
description: "Ocho guiones de prosa pensados para el oído, uno por unidad, que cubren todo el material en hora y media de escucha."
section: audio
kind: portada
order: 0
tags:
  - redes
  - audio
  - indice
---

# Audioapuntes

```text
==============================================================
   OCHO GUIONES  ·  OCHENTA Y SIETE MINUTOS
   Para pegar en un lector de texto a voz y escuchar andando
==============================================================
```

> **En una frase.** Ocho guiones de prosa pensados para el oído, uno por unidad, que
> cubren todo el material en hora y media de escucha.

## Cómo se usan

Esto no son documentos para leer en pantalla: son guiones para un lector de texto a voz. Tres
pasos:

1. Abre el fichero y **copia desde el primer párrafo**, después del segundo `---`.
   El bloque inicial (entre el primer y el segundo `---`) son metadatos del sistema: no lo pegues,
   se leería en voz alta.
2. Pégalo en tu lector TTS. Si tu lector permite ajustar velocidad, a 1,0 o 1,1 va bien; a 0,9 se
   sigue mejor con siglas.
3. Escucha **sin tomar apuntes**. La primera vez solo se escucha. Si algo no encaja, vuelves al
   conceptual de esa unidad, no al audio.

## Por qué están escritos así

En el cuerpo de estos guiones **no hay cifras, ni símbolos, ni encabezados, ni listas**. Es
deliberado: un lector TTS dice "ochenta coma tres punto once" si encuentra `802.11`, lee los
asteriscos de las negritas en voz alta y convierte los paréntesis de una ruta en ruido. Por eso
las cantidades van con letra ("noventa metros", "unos quince vatios") y las siglas se deletrean
la primera vez.

La consecuencia es que los números exactos no están aquí: están en el resumen técnico de cada
unidad. El audio es para entender y recordar la estructura, no para memorizar tablas.

## Los ocho, en orden de escucha

| # | Unidad | Contenido | Duración |
| --- | --- | --- | --- |
| 1 | [Mercado de comunicaciones](01_Mercado_Audioapuntes.md) | Mercado de comunicaciones | unos 10 min |
| 1b | [Mercado de comunicaciones, parte dos](01_Mercado_Audioapuntes_Parte2.md) | Seguridad, enrutamiento, digitalización y coste total | unos 11 min |
| 2 | [Proyecto de red](02_Proyecto_Audioapuntes.md) | Proyecto de red | unos 12 min |
| 2b | [Proyecto de red, parte dos](02_Proyecto_Audioapuntes_Parte2.md) | Proyecto telemático, diagnóstico, plan de acción y coste | unos 11 min |
| 3 | [Documentación técnica](03_Documentacion_Audioapuntes.md) | Documentación técnica | unos 10 min |
| 3b | [Documentación técnica, parte dos](03_Documentacion_Audioapuntes_Parte2.md) | Métricas, memoria, plano, obra y coste de la calidad | unos 9 min |
| 4 | [Planificación de proyectos](04_Planificacion_Audioapuntes.md) | Planificación de proyectos | unos 10 min |
| 4b | [Planificación de proyectos, parte dos](04_Planificacion_Audioapuntes_Parte2.md) | Liderazgo, alcance, optimización de plazo y coste, y control económico | unos 11 min |
| 5 | [Ejecución de proyectos](05_Ejecucion_Audioapuntes.md) | Ejecución de proyectos | unos 11 min |
| 5b | [Ejecución de proyectos, parte dos](05_Ejecucion_Audioapuntes_Parte2.md) | Protocolos, seguridad, recepción, cierre y capacitación | unos 12 min |
| 6 | [Equipos y servicios de red](06_Equipos_Audioapuntes.md) | Equipos y servicios de red | unos 10 min |
| 6b | [Equipos y servicios de red, parte dos](06_Equipos_Audioapuntes_Parte2.md) | Cabeceras, conmutación, VLAN, Wi-Fi, encaminamiento y negocio | unos 11 min |
| 7 | [Gestión de redes](07_Gestion_Audioapuntes.md) | Gestión de redes | unos 11 min |
| 7b | [Gestión de redes, parte dos](07_Gestion_Audioapuntes_Parte2.md) | Seguridad, perfiles de tráfico, calendario de mantenimiento y coste | unos 11 min |
| 8 | [Incidencias](08_Incidencias_Audioapuntes.md) | Incidencias | unos 10 min |
| 8b | [Incidencias, parte dos](08_Incidencias_Audioapuntes_Parte2.md) | Prioridad, problemas, incidentes graves, SLA y negocio | unos 11 min |

Total: unos 87 minutos de escucha, en ocho tramos.

## Tres formas de usarlos

**Repaso de bloque.** Al cerrar un bloque, escucha sus unidades seguidas: el diseño son tres (unos 33 minutos), la implantación dos (21) y la administración tres (33). Funciona como repaso: no enseña nada nuevo, recoloca lo que ya está.

**Repaso espaciado.** La regla que más rinde: escucha la unidad **tres días después** de
estudiarla y otra vez **a las dos semanas**. Dos pasadas cortas valen más que releer el técnico
cinco veces.

**En el transporte.** Una unidad por trayecto. Si vas a hacer veinte minutos de camino, empieza
por donde lo dejaste la vez anterior.

## El orden que sigue cada guion

Todos tienen la misma arquitectura interna, para que puedas entrar en cualquier punto sin
sorpresas:

```text
  1. la idea que hay que llevarse (una sola)
  2. el problema del mundo real que obliga a que el tema exista
  3. los conceptos, de uno en uno, con una imagen cotidiana cada uno
  4. lo que se confunde y por que importa
  5. donde encaja con el resto del material
  6. cierre: la filosofia de diseno de la unidad en una frase
```

## Dónde están las cosas

Los guiones viven **solo aquí**, en `05_Audioapuntes`, para que los tengas todos juntos. Cada
unidad enlaza a su guion desde su portada, y el [índice general](../00_Indice/README.md) también.
Si quieres ver de qué trata cada bloque, están en sus portadas: [diseño](../01_Diseno/README.md), [implantación](../02_Implantacion/README.md) y [administración](../03_Administracion/README.md).
