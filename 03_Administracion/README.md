---
title: "Administración de redes"
description: "Una red se juzga por lo que aguanta un martes cualquiera a las nueve de la mañana, no por lo bien que queda el esquema en la memoria del proyecto."
section: administracion
kind: portada
order: 20
tags:
  - redes
---

# Administración de redes

```text
==============================================================
   BLOQUE 3  ·  ADMINISTRACION  ·  tres unidades
==============================================================
```

> **En una frase.** Una red se juzga por lo que aguanta un martes cualquiera a las nueve de la
> mañana, no por lo bien que queda el esquema en la memoria del proyecto.

## Qué se aprende aquí

- Montar y configurar los servicios que sostienen cualquier red: DNS, DHCP, proxy, NAT.
- Segmentar con VLAN y encaminar con criterio, estático y dinámico.
- Medir la red: SNMP, RMON, NetFlow y sistemas de monitorización.
- Analizar rendimiento y capacidad para decidir cuándo ampliar antes de que duela.
- Diagnosticar y cerrar incidencias con método, herramienta y documentación.

## El recorrido del bloque

```text
  EQUIPOS Y SERVICIOS       GESTION                     INCIDENCIAS
  CONSTRUIR                 VIGILAR                     REPARAR
  -----------------         --------------------        -----------------
  IP, subredes, NAT         PDIOO y NOC                 ciclo de la incidencia
  DNS, DHCP, proxy          SNMP, RMON, NetFlow         Ishikawa y cinco porques
  VLAN, Wi-Fi, rutas        monitorizacion              herramientas de medida
        |                   capacidad y rendimiento     red local frente a WAN
        v                         |                           |
  "la red funciona"               v                           v
                            "se cuanto aguanta"        "se por que fallo"
```

Esta progresión es la del oficio real. Primero se construye, luego se mide, y solo cuando hay
medida se puede diagnosticar sin adivinar. La última unidad es la que demuestra que las otras
siete del certificado han entrado de verdad.

## Las unidades

| Unidad | Materiales |
| --- | --- |
| **Equipos y servicios de red** | [Portada](01_Equipos_Servicios/README.md) · [Conceptual](01_Equipos_Servicios/Equipos_Conceptual.md) · [Técnico](01_Equipos_Servicios/Equipos_Tecnico.md) · [Casos](01_Equipos_Servicios/Equipos_Casos.md) · [Audio](../05_Audioapuntes/06_Equipos_Audioapuntes.md) |
| **Gestión de redes** | [Portada](02_Gestion_Redes/README.md) · [Conceptual](02_Gestion_Redes/Gestion_Conceptual.md) · [Técnico](02_Gestion_Redes/Gestion_Tecnico.md) · [Casos](02_Gestion_Redes/Gestion_Casos.md) · [Audio](../05_Audioapuntes/07_Gestion_Audioapuntes.md) |
| **Incidencias** | [Portada](03_Incidencias/README.md) · [Conceptual](03_Incidencias/Incidencias_Conceptual.md) · [Técnico](03_Incidencias/Incidencias_Tecnico.md) · [Casos](03_Incidencias/Incidencias_Casos.md) · [Audio](../05_Audioapuntes/08_Incidencias_Audioapuntes.md) |

## Los cuatro errores típicos del bloque

**Configurar sin verificar.** Poner la zona DNS y no hacer un `dig`, o levantar el DHCP y no
mirar la dirección que recibe el cliente. Una configuración sin verificar no está terminada.

**Tocar la red sin medir antes.** Cambiar un enlace "que va lento" sin capturar tráfico ni mirar
utilización es apostar. la unidad de gestión de redes existe para que no lo hagas.

**Confundir diagnóstico con reinicio.** Reiniciar resuelve el síntoma y destruye la evidencia.
El método de la unidad de incidencias pide hipótesis, prueba y confirmación antes de intervenir.

**No documentar el cambio.** Un cambio sin registro es una avería futura sin explicación. En la
práctica, es lo que separa a un técnico de un administrador.

## Antes de pasar al siguiente bloque

- [ ] Resuelvo subredes y VLSM rápido, y sé explicar para qué sirve cada registro DNS.
- [ ] Escribo de memoria un `dhcpd.conf` mínimo y una zona directa e inversa.
- [ ] Sé qué hace un `trunk`, qué es una VLAN nativa y por qué importa.
- [ ] Explico la diferencia entre vector de distancia y estado de enlace, con un ejemplo.
- [ ] Sé leer una gráfica de utilización y decir cuándo ampliar.
- [ ] Tengo interiorizada la tabla síntoma, causa, herramienta y solución de la unidad de incidencias.
