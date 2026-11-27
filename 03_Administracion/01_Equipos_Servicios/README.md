---
title: "Equipos de interconexión y servicios de red"
description: "Una red no son cables: son equipos que deciden por dónde va cada trama, y servicios que traducen nombres, reparten direcciones y guardan copias; esta unidad es el manual de esos equipos y de esos servicios, con los coman"
section: administracion
unit: equipos
kind: portada
order: 60
tags:
  - redes
  - equipos
---

# Equipos de interconexión y servicios de red

> **Administración de redes telemáticas** · unidad 6 de 8

**En una frase.** Una red no son cables: son equipos que deciden por dónde va cada trama, y servicios que traducen nombres, reparten direcciones y guardan copias; esta unidad es el manual de esos equipos y de esos servicios, con los comandos que se escriben de verdad.

## Qué te llevas de aquí

- Montar un servidor DNS con BIND y con Windows Server, con zona directa, zona inversa y reenvío, y comprobarlo con `dig` y `nslookup`.
- Servir direcciones con DHCP, con rangos, exclusiones y reservas por MAC, y diagnosticar por qué un cliente se queda en `169.254.x.x`.
- Poner un proxy caché delante de la red, con NAT y reglas de `iptables`, y distinguirlo de un cortafuegos.
- Segmentar un conmutador en VLAN por puertos y por MAC, con enlaces troncales 802.1Q, y comprobarlo con `show vlan`.
- Convertir un Linux con dos tarjetas en un router: rutas estáticas, reenvío, ACL y DHCP, verificado con `ip route` y `traceroute`.

## El recorrido

```text
  1. La red por dentro   2. Los servicios         3. La red que crece
+--------------------+   +--------------------+   +------------------+
| encapsulacion IPv4 |   | DNS, BIND y Win    |   | VLAN y trunking  |
| TCP y UDP, puertos |   | DHCP y reservas    |   | Wi-Fi 802.11     |
| ARP, ICMP y NAT    |-->| proxy cache y NAT  |-->| rutas y OSPF     |
| hub, puente, switch|   | NTP, SMTP y SNMP   |   | ACL y router     |
+--------------------+   +--------------------+   +------------------+
```

## Los materiales

| Documento | Para qué sirve | Tiempo |
| --- | --- | --- |
| [Resumen conceptual](Equipos_Conceptual.md) | Entender las ideas sin fricción | 15 min |
| [Resumen técnico](Equipos_Tecnico.md) | Datos, cabeceras, tablas, comandos, procedimientos y perspectiva empresarial | 150 min |
| [Audioapuntes, parte uno](../../05_Audioapuntes/06_Equipos_Audioapuntes.md) | Repasar escuchando: protocolos, servicios y encaminamiento | 10 min |
| [Audioapuntes, parte dos](../../05_Audioapuntes/06_Equipos_Audioapuntes_Parte2.md) | Repasar escuchando: cabeceras, VLAN, Wi-Fi y negocio | 11 min |
| [Casos prácticos resueltos](Equipos_Casos.md) | Seis casos con solución y rúbrica | 150 min |
| [Autoevaluación](Equipos_Autoevaluacion.md) | 46 preguntas con explicación | 50 min |
| [Tarjetas de repaso](Equipos_Tarjetas.md) | 112 tarjetas para repaso espaciado | 20 min por pasada |
| [Guía de laboratorio](Equipos_Laboratorio.md) | Cinco prácticas | 6 tardes |

## Por dónde empiezo

1. Lee el conceptual de una tirada, sin apuntar nada.
2. Escucha los audioapuntes al día siguiente, andando.
3. Vuelve al técnico con las preguntas del conceptual en la cabeza y con un terminal abierto al lado: los comandos se aprenden escribiéndolos mal una vez.

## Antes de pasar a la siguiente unidad

- Sabes explicar qué pasa entre pulsar Intro en el navegador y ver la página, nombrando DNS, ARP, TCP, NAT y HTTP en el orden correcto.
- Eres capaz de calcular a mano la red, el broadcast y el rango de hosts de `192.168.44.130/27` sin calculadora.
- Puedes montar en una máquina virtual un DNS, un DHCP y un proxy, y demostrar con un comando que cada uno responde.
