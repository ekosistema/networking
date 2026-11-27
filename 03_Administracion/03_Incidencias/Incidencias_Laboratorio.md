---
title: "Incidencias · Guía de laboratorio"
description: "Guía de laboratorio de la unidad Incidencias."
section: administracion
unit: incidencias
kind: laboratorio
order: 86
tags:
  - redes
  - incidencias
  - laboratorio
  - diagnostico
  - wireshark
---

# Incidencias · Guía de laboratorio

> **Para qué sirve.** Diagnosticar se aprende diagnosticando. Cinco prácticas: los números de la
> gestión, las herramientas de diagnóstico en tu propio equipo, el análisis de una captura con
> fallos provocados, una plataforma de tickets y un simulacro de incidente grave.

| Práctica | Entorno | Qué demuestras | Tiempo |
| --- | --- | --- | --- |
| 1. Prioridad, SLA y coste en Python | Python | Que calculas prioridad, SLA y coste | 45 min |
| 2. La escalera de diagnóstico | Tu propio equipo | Ping, MTU, traceroute, arp y netstat | 60 min |
| 3. Captura con fallos provocados | Wireshark y una máquina virtual Linux | Reconocer retransmisiones y DHCP sin respuesta | 90 min |
| 4. Plataforma de tickets | GLPI, osTicket u otra | Prioridad, SLA, KB e informes | 120 min |
| 5. Simulacro de incidente grave | Papel y cronómetro | Coordinar, comunicar y documentar | 60 min |

**Aviso.** Las prácticas 3 y 4 están escritas de memoria y no se han ejecutado en el entorno de esta
guía; las 1 y 2 sí o son de uso estándar. Haz los escaneos y las capturas **solo** en redes propias o
con permiso expreso.

## Práctica 1. Prioridad, SLA y coste en Python

**Objetivo.** Reproducir los cálculos de los [casos](Incidencias_Casos.md) 1 y 6.

```python
MATRIZ = {("alto", "alta"): "P1", ("alto", "media"): "P2", ("alto", "baja"): "P3",
          ("medio", "alta"): "P2", ("medio", "media"): "P3", ("medio", "baja"): "P4",
          ("bajo", "alta"): "P3", ("bajo", "media"): "P4", ("bajo", "baja"): "P4"}
PLAZO_H = {"P1": 4, "P2": 8, "P3": 16, "P4": 40}

tickets = [  # id, impacto, urgencia, duracion total (h), pausa por usuario (h)
    ("T1", "alto", "alta", 3.5, 0), ("T2", "medio", "alta", 9.5, 2),
    ("T3", "bajo", "media", 20, 0), ("T4", "bajo", "baja", 30, 0),
    ("T5", "alto", "alta", 5.25, 0), ("T6", "medio", "alta", 6, 0),
]
cumplen, contados = 0, []
for ide, imp, urg, dur, pausa in tickets:
    prio = MATRIZ[(imp, urg)]
    contado = dur - pausa
    ok = contado <= PLAZO_H[prio]
    cumplen += ok
    contados.append(contado)
    print(f"{ide} {prio} contado {contado:5.2f} h, plazo {PLAZO_H[prio]:2} h -> {'cumple' if ok else 'NO CUMPLE'}")
print(f"Cumplimiento {cumplen}/{len(tickets)} = {cumplen / len(tickets) * 100:.1f} por ciento")
print(f"MTTR {sum(contados) / len(contados):.1f} h")

# Pareto de incidencias del caso 6
cat = {"IP y DHCP": 45, "Cableado": 33, "DNS": 21, "Wi-Fi": 18, "Impresoras": 15, "Otros": 18}
total, acum = sum(cat.values()), 0
for k, v in sorted(cat.items(), key=lambda x: -x[1]):
    acum += v
    print(f"{k:11} {v:3} {v / total * 100:5.1f} por ciento, acumulado {acum / total * 100:5.1f}")
ahorro_mes = round(cat["IP y DHCP"] * 0.8) * 60
print(f"Ahorro {ahorro_mes} euros al mes, {ahorro_mes * 12} al ano; recuperacion {3000 / ahorro_mes:.1f} meses")

# Magnitud economica, MTBF y disponibilidad
print("Magnitud:", 40 * 25 * 2, "euros")
mtbf, mttr = 2000 / 4, 2
print(f"Disponibilidad: {mtbf / (mtbf + mttr) * 100:.2f} por ciento")
```

**Qué debes observar.** Cinco de seis dentro de plazo (83,3 por ciento) y T5 fuera; MTTR de 12 h; un
Pareto con 30 y 52 por ciento acumulados; un ahorro de 2 160 euros al mes y recuperación en 1,4 meses;
y 99,60 por ciento de disponibilidad.

**Ampliación.** Añade el MTTR **por prioridad** y comprueba por qué el MTTR global engaña.

## Práctica 2. La escalera de diagnóstico en tu equipo

**Objetivo.** Usar las herramientas del programa de referencia y leer su salida. Todo en tu propio equipo y red.

| Peldaño | Orden (Windows o Linux) | Qué descarta |
| --- | --- | --- |
| 1. Pila del equipo | `ping 127.0.0.1` | La instalación de red del sistema |
| 2. Tarjeta propia | `ping` a tu propia IP | La tarjeta y el controlador |
| 3. Red local | `ping` a la puerta de enlace y `arp -a` | El cable, el switch y la VLAN |
| 4. Salida | `ping 8.8.8.8` | El acceso y la traducción |
| 5. Nombres | `ping www.ejemplo.org` y `nslookup www.ejemplo.org` | El DNS |

**Pasos.**

1. Recorre la escalera y anota el resultado de cada peldaño. En el 3, comprueba en `arp -a` que la
   MAC de la puerta de enlace es la de tu router.
2. **MTU del camino.** Prueba con tamaños crecientes y el bit de no fragmentar hasta encontrar el
   límite: Windows `ping -n 2 -l 1472 -f 8.8.8.8`; Linux `ping -c 2 -s 1472 -M do 8.8.8.8`. Baja de 20 en
   20 hasta que responda; MTU = tamaño máximo más 28.
3. **Camino.** `tracert -d 8.8.8.8` (Windows) o `traceroute -n 8.8.8.8` (Linux) y, si puedes,
   `mtr -rwc 50 8.8.8.8`. Identifica el salto de tu router y el primer salto del operador, y busca si
   hay pérdida que se propague.
4. **Conexiones.** `netstat -ano` (Windows) o `ss -tulpn` (Linux): localiza qué proceso escucha en el
   puerto 53, 80 o 445, si lo hay, y cuántas conexiones están en ESTABLISHED y en TIME_WAIT.
5. **Descubrimiento (solo tu red).** `arp -a` o `nmap -sn 192.168.1.0/24` si tienes permiso:
   compara con el inventario que esperabas.

**Qué debes entender.** Cada peldaño descarta un tramo; un `*` en traceroute no es un fallo; y la
pérdida real aparece en todos los saltos siguientes.

**Ampliación.** Escribe un script que haga la escalera completa y diga en qué peldaño falla.

## Práctica 3. Captura con fallos provocados

**Objetivo.** Ver en Wireshark los síntomas de los casos. Una máquina virtual Linux como cliente
y tu equipo como analizador; red aislada.

**Fallo 1. Retransmisiones.** En la máquina virtual, introduce pérdida de paquetes y descarga un
fichero:

```text
sudo tc qdisc add dev eth0 root netem loss 5%
curl -O http://IP_SERVIDOR/fichero_grande
sudo tc qdisc del dev eth0 root
```

En Wireshark, filtra `tcp.analysis.retransmission || tcp.analysis.duplicate_ack`. Cuenta la
proporción de retransmisiones sobre el total y comprueba que supera el 1 por ciento.

**Fallo 2. DHCP sin respuesta.** Apaga el servidor DHCP (o aísla la VLAN de pruebas) y pide dirección
con `sudo dhclient -v eth0`. En Wireshark: `bootp || dhcp`. Verás repetirse el DISCOVER sin OFFER y,
en el cliente, una dirección 169.254.x.x.

**Fallo 3. DNS.** Consulta un nombre inexistente: `nslookup noexiste.empresa.local`. Filtro:
`dns.flags.rcode == 3`. Verás la respuesta con código NXDOMAIN.

**Fallo 4. ARP duplicado.** Asigna a la máquina virtual la misma IP que otro equipo de pruebas y
filtra `arp.duplicate-address-detected`.

**Informe.** Para cada fallo anota: filtro usado, evidencia (nº de paquete), diagnóstico, comprobación
adicional y solución propuesta. Es el formato del caso 4.

**Qué debes entender.** Que una captura se interpreta con una hipótesis; y que el tráfico cifrado solo
enseña tamaños, tiempos y direcciones.

## Práctica 4. Plataforma de tickets

**Objetivo.** Configurar una plataforma de gestión de incidencias y probar el ciclo completo. GLPI y
osTicket tienen guías oficiales de instalación (incluso con contenedores): sigue la de tu versión.

**Tareas.**

1. Instala la plataforma y crea tres usuarios: un solicitante, un técnico de primer nivel y un
   especialista.
2. Crea categorías (red, cableado, direccionamiento, DNS, Wi-Fi) y una matriz de prioridad impacto por
   urgencia.
3. Define los **SLA**: respuesta y resolución para P1, P2, P3 y P4 como en los casos, y un
   calendario laboral. Comprueba que el reloj se pausa en el estado "pendiente de usuario".
4. Crea seis tickets como los del caso 1 y llévalos por todo el ciclo (nuevo, en curso,
   pendiente, resuelto y cerrado). Escala uno al especialista.
5. Escribe un artículo de **base de conocimiento** ("Puesto sin dirección IP") y vincúlalo a un ticket.
6. Abre un **problema** a partir de varios tickets repetidos y asócialos.
7. Saca el informe del mes: volumen por categoría, MTTR, cumplimiento del SLA y tickets repetidos.

**Qué debes observar.** Cómo la plataforma calcula el plazo, qué ocurre con el SLA al pausar y que
sin la causa clasificada el informe no sirve. Ese es el valor de los datos de cierre.

**Ampliación.** Configura una regla que cree un ticket automáticamente a partir de un correo del
monitor de red, y otra que escale si un P1 lleva 15 minutos sin atender.

## Práctica 5. Simulacro de incidente grave

**Objetivo.** Practicar la coordinación y la comunicación de un incidente de prioridad uno.
Se hace en grupo de tres a cinco personas, o a solas escribiendo cada rol.

**Escenario.** A las 10:12 cae la conexión de toda la sede (120 usuarios). El monitor avisa del
router y del enlace del operador. Hay una videollamada con un cliente a las 11:00.

**Reparto de roles.** Responsable del incidente, técnico de red, enlace con el operador, responsable de
comunicación y secretario (registro cronológico).

| Hora | Acción | Quién |
| --- | --- | --- |
| 10:12 | Aviso del monitor y apertura del ticket P1 | Secretario |
| 10:15 | Primer análisis: ping a la puerta, al primer salto y al destino | Técnico de red |
| 10:20 | Comunicado al negocio: servicio caído, causa en investigación, siguiente aviso a las 10:50 | Comunicación |
| 10:25 | Aviso al operador con evidencias | Enlace con el operador |
| 10:50 | Segundo comunicado con el estado | Comunicación |
| (según el guion) | Restablecimiento y verificación | Todos |

**Pasos.**

1. Fija el reloj y simula tres informaciones nuevas que el instructor entrega (por ejemplo: el operador
   reconoce una avería con 3 horas de reparación; hay una línea de respaldo; la videollamada de las 11:00).
2. Decide acciones y comunicados en el momento, anotándolos con hora.
3. Al terminar, redacta la **revisión posterior**: cronología, causa, qué funcionó, qué no, decisiones y
   acciones con responsable y fecha. Sin buscar culpables.

**Preguntas de cierre.** ¿Qué te faltó para decidir más rápido? ¿Qué debería existir antes del
próximo incidente (línea de respaldo, runbook, contactos)?
