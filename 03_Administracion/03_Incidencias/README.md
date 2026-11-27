---
title: "Resolución de incidencias en redes telemáticas"
description: "Convertir el \"no va\" del usuario en una causa demostrada, con la prueba que la demuestra y el cable o la configuración que la arreglan."
section: administracion
unit: incidencias
kind: portada
order: 80
tags:
  - redes
  - incidencias
---

# Resolución de incidencias en redes telemáticas

> **Administración de redes telemáticas** · unidad 8 de 8

**En una frase.** Convertir el "no va" del usuario en una causa demostrada, con la prueba que la demuestra y el cable o la configuración que la arreglan.

## Qué te llevas de aquí

- Distinguir una incidencia de un problema, de una petición de servicio y de un error conocido, y saber qué se mide en cada caso.
- Calcular la prioridad con impacto y urgencia en lugar de elegirla por simpatía, y decidir cuándo toca escalado funcional y cuándo jerárquico.
- Elegir la herramienta correcta para cada síntoma: polímetro, comprobador, tonos, reflectómetro, certificador, Wireshark, ping, traceroute, arp o netstat.
- Decidir con dos pruebas si la avería es de la red local o del tramo del proveedor, y escalarla con datos en lugar de con quejas.
- Documentar un cierre que sirva para la próxima vez: causa, prueba, acción y prevención.

## El recorrido

```text
   ETAPA 1               ETAPA 2                ETAPA 3
   entender              decidir y medir        fijar
   -------------------   --------------------   ------------------
   la incidencia         el arbol de decision   audioapuntes
   como servicio         y las herramientas     repaso hablado
   la causa raiz         los tres casos
         |                     |                     |
         +---------------------+---------------------+
                               v
                    resolver sin adivinar
```

## Los materiales

| Documento | Para qué sirve | Tiempo |
| --- | --- | --- |
| [Resumen conceptual](Incidencias_Conceptual.md) | Entender por qué el método vence al destornillador | 15 min |
| [Resumen técnico](Incidencias_Tecnico.md) | Tablas, sintaxis, indicadores, casos resueltos y perspectiva empresarial | 120 min |
| [Audioapuntes, parte uno](../../05_Audioapuntes/08_Incidencias_Audioapuntes.md) | Repasar escuchando, sin pantalla: proceso, método y herramientas | 10 min |
| [Audioapuntes, parte dos](../../05_Audioapuntes/08_Incidencias_Audioapuntes_Parte2.md) | Repasar escuchando: prioridad, problemas, SLA y negocio | 11 min |
| [Casos prácticos resueltos](Incidencias_Casos.md) | Seis casos con solución y rúbrica | 120 min |
| [Autoevaluación](Incidencias_Autoevaluacion.md) | 46 preguntas con explicación | 50 min |
| [Tarjetas de repaso](Incidencias_Tarjetas.md) | 95 tarjetas para repaso espaciado | 20 min por pasada |
| [Guía de laboratorio](Incidencias_Laboratorio.md) | Cinco prácticas | 5 tardes |

## Por dónde empiezo

1. Lee el conceptual de una tirada, sin apuntar nada, y quédate con la idea de que el síntoma no es la causa.
2. Escucha los audioapuntes al día siguiente, mientras andas, y repite en voz alta la escalera de pruebas.
3. Vuelve al técnico con la tabla maestra delante y tapa la columna de la solución: intenta deducirla por el síntoma y la capa.

## Antes de pasar a la siguiente unidad

- Sabes decir, sin mirar, qué herramienta confirma un par abierto y cuál confirma una diafonía fuera de margen.
- Puedes explicar con la puerta de enlace y el primer salto dónde acaba tu red y empieza la del proveedor.
- Eres capaz de cerrar una incidencia con causa demostrada, prueba asociada y acción preventiva, y de justificar el MTTR con números.
