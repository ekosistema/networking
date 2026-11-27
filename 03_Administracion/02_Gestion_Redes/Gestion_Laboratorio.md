---
title: "Gestión de redes · Guía de laboratorio"
description: "Guía de laboratorio de la unidad Gestión de redes."
section: administracion
unit: gestion
kind: laboratorio
order: 76
tags:
  - redes
  - gestion
  - laboratorio
  - snmp
  - monitorizacion
---

# Gestión de redes · Guía de laboratorio

> **Para qué sirve.** La gestión de redes se entiende midiendo: sondear un agente, convertir
> contadores en tráfico, ver una alarma saltar y planificar el mantenimiento. Cinco prácticas sobre
> los [casos](Gestion_Casos.md).

| Práctica | Entorno | Qué demuestras | Tiempo |
| --- | --- | --- | --- |
| 1. Calculadora de gestión | Python | Contadores, umbrales, perfil y tendencia | 45 min |
| 2. SNMP real: agente, gestor y trap | Máquina virtual Linux con Net-SNMP | Que sabes consultar y proteger un agente | 90 min |
| 3. Monitorización con una plataforma | Zabbix o LibreNMS | Alta de equipos, plantillas y alertas | 120 min |
| 4. Syslog y hora común | rsyslog y NTP | Centralizar eventos y ordenarlos | 60 min |
| 5. Calendario de mantenimiento y auditoría | Python y lista de verificación | Planificar y auditar | 60 min |

**Aviso.** Las prácticas 2, 3 y 4 están escritas de memoria y no se han ejecutado en el entorno de
esta guía; las prácticas 1 y 5 (código Python) sí. Usa máquinas de laboratorio y una red aislada.

## Práctica 1. Calculadora de gestión

**Objetivo.** Reproducir los cálculos de los casos 1 a 4.

```python
import math

def delta_contador(a, b, bits=32):
    """Incremento entre dos lecturas con posible desbordamiento."""
    return b - a if b >= a else (2 ** bits - a) + b

# Caso 1: trafico y utilizacion con desbordamiento
inc = delta_contador(4_100_000_000, 150_000_000)
mbps = inc * 8 / 300 / 1e6
print("Incremento", inc, "bytes ->", round(mbps, 1), "Mb/s ->", round(mbps / 100 * 100, 1), "por ciento")
print("Vuelta de 32 bits a 100 Mb/s:", round(2 ** 32 * 8 / 100e6, 1), "s")

# Caso 2: umbrales de alarma RMON y limite de 32 bits con signo
limite = 2 ** 31 - 1
for intervalo in (300, 10):
    for pct in:
        u = pct * 1e9 / 8 * intervalo
        print(f"Intervalo {intervalo:3} s, {int(pct*100)} por ciento: {u:,.0f} bytes",
              "OK" if u <= limite else "NO CABE en 32 bits")

# Caso 3: perfil, relacion punta a media y z-score por hora
perfil = [5, 4, 3, 3, 4, 6, 12, 28, 45, 52, 55, 50, 40, 48, 54, 56, 52, 44, 30, 22, 15, 10, 8, 6]
media = sum(perfil) / len(perfil)
print("Media", round(media, 1), "| punta", max(perfil), "| relacion", round(max(perfil) / media, 2))
print("z a las 03:00 con historico 3 +- 0,8:", round((38 - 3) / 0.8, 2))

# Caso 4: tendencia geometrica y lineal
puntas = [80, 88, 96.8, 106.48, 117.128]
tasa = puntas[1] / puntas[0] - 1
for limite_mb in (160, 200):
    geo = math.log(limite_mb / puntas[-1]) / math.log(1 + tasa)
    lin = (limite_mb - puntas[-1]) / ((puntas[-1] - puntas[0]) / 4)
    print(f"Hasta {limite_mb} Mb/s: geometrica {geo:.1f} meses, lineal {lin:.1f} meses")
```

**Qué debes observar.** 9,2 Mb/s y 343,6 s; los umbrales de 300 s que no caben en 32 bits y los de
10 s que sí; relación punta a media de 2,06 y z de 43,75; y los plazos de 3,3 y 5,6 meses
(geométrico) frente a 4,6 y 8,9 (lineal).

**Ampliación.** Convierte la función en una que lea una lista de lecturas de contador y devuelva la
serie de Mb/s, detectando por sí sola los desbordamientos.

## Práctica 2. SNMP real: agente, gestor y trap

**Objetivo.** Montar un agente seguro y consultarlo, como en el
[resumen técnico](Gestion_Tecnico.md). Dos máquinas virtuales Linux en una red interna, o una sola con
el agente en `localhost`.

**Pasos.**

1. Instala y configura el agente:

```text
sudo apt install snmpd snmp snmp-mibs-downloader snmptrapd
# /etc/snmp/snmpd.conf (resumen)
agentaddress udp:161
syslocation "Laboratorio"
syscontact noc@empresa.local
rocommunity LecturaNOC 192.168.10.0/24
sudo systemctl restart snmpd
```

2. Consulta desde el gestor y comprueba:

| Orden | Debe resultar |
| --- | --- |
| `snmpget -v2c -c LecturaNOC IP 1.3.6.1.2.1.1.1.0` | Descripción del sistema |
| `snmpget -v2c -c LecturaNOC IP 1.3.6.1.2.1.1.3.0` | Tiempo encendido |
| `snmpwalk -v2c -c LecturaNOC IP 1.3.6.1.2.1.2.2.1.2` | Nombres de interfaz |
| `snmpwalk -v2c -c otra IP 1.3.6.1.2.1.1` | Sin respuesta (comunidad errónea) |

3. Crea un usuario de SNMPv3 y comprueba que cifra: con el agente parado,
   `sudo net-snmp-create-v3-user -ro -A "fraseAuth123" -a SHA -X "frasePriv123" -x AES monitor`, arranca y
   consulta con `snmpwalk -v3 -l authPriv -u monitor -a SHA -A fraseAuth123 -x AES -X frasePriv123 IP 1.3.6.1.2.1.1`.
4. Captura con Wireshark (`udp.port==161`): en v2c verás la comunidad **en claro**; en v3, el
   contenido cifrado. Es la mejor demostración de por qué se migra.
5. Envía un trap: en el gestor, `sudo snmptrapd -f -Lo` y, desde el agente,
   `snmptrap -v2c -c LecturaNOC IP_GESTOR "" 1.3.6.1.6.3.1.1.5.1`. Debe aparecer el aviso.

**Qué debes entender.** Qué viaja en claro y qué no; que SNMPv3 no añade PDUs; y que un trap es un
aviso del agente al gestor sin confirmación.

**Ampliación.** Calcula, con dos lecturas de `ifHCInOctets` separadas 60 segundos y mientras haces una
descarga, la velocidad de la interfaz.

## Práctica 3. Monitorización con una plataforma

**Objetivo.** Dar de alta equipos en una plataforma de monitorización y ver cómo se traduce el SNMP
en gráficas y alertas. Zabbix y LibreNMS publican instrucciones oficiales de instalación (también con
contenedores): sigue la de tu versión.

**Tareas.**

1. Instala la plataforma en una máquina virtual y accede a su interfaz web.
2. Da de alta el agente de la práctica 2 con su comunidad (o usuario v3) y comprueba que aparece como
   disponible.
3. Asigna una plantilla de interfaces y observa las gráficas de tráfico de entrada y salida.
4. Crea una **alerta** de utilización superior al 70 por ciento durante 5 minutos y una de equipo no
   disponible; provoca cada una (genera tráfico con `iperf3`, apaga el agente) y comprueba que salta y que
   se recupera.
5. Aplica la **frecuencia por criticidad**: 1 minuto a un equipo de nivel 1, 5 minutos a uno de nivel 2.
   Mira el consumo de CPU de la máquina al cambiar a 10 segundos.
6. Genera un **informe de disponibilidad** del periodo y exporta una gráfica de 24 horas.

**Qué debes observar.** La traducción de contadores en tasa, el efecto de acortar el sondeo sobre la
carga y la diferencia entre una alerta que salta una sola vez y una con retardo configurado para
evitar falsos positivos.

**Ampliación.** Compara la plataforma con Nagios o con Prometheus y Grafana: ¿qué te da hecho y qué
hay que construir?

## Práctica 4. Syslog y hora común

**Objetivo.** Centralizar registros y comprobar por qué hace falta NTP.

```text
# En el servidor (rsyslog), /etc/rsyslog.d/10-remoto.conf
module(load="imudp")
input(type="imudp" port="514")
sudo systemctl restart rsyslog

# En el cliente: enviar todo al servidor
echo '*.* @IP_SERVIDOR:514' | sudo tee /etc/rsyslog.d/90-envio.conf
sudo systemctl restart rsyslog
logger -p local0.warning "prueba de aviso del laboratorio"
```

**Pruebas.**

1. En el servidor, busca el mensaje con `grep "prueba de aviso" /var/log/syslog` y comprueba hora, equipo y
   severidad.
2. Envía mensajes de varias severidades (`logger -p user.err`, `user.info`, `user.debug`) y filtra solo los de
   severidad 3 o más grave.
3. **Hora común.** Cambia la hora del cliente varios minutos (sin NTP) y vuelve a enviar: los eventos
   quedan desordenados respecto al servidor. Sincroniza con `chronyd` o `systemd-timesyncd` y repite.
4. Calcula la prioridad de un mensaje de `facility` 16 (local0) y severidad 4: 16 x 8 + 4 = 132.

**Qué debes entender.** Que un registro sin hora fiable no sirve para ordenar causas y que el puerto
514 UDP no cifra: para producción se usa TCP con TLS en el 6514.

## Práctica 5. Calendario de mantenimiento y auditoría

**Objetivo.** Producir el calendario gráfico del [caso 5](Gestion_Casos.md) en un formato que
se importa en cualquier agenda, y practicar la auditoría.

```python
from datetime import date

tareas = [  # nombre, frecuencia (rrule), mes de inicio
    ("Copia de configuracion de equipos", "FREQ=MONTHLY", 1),
    ("Revision de logs y alarmas", "FREQ=MONTHLY", 1),
    ("Limpieza y ventilacion de armarios", "FREQ=MONTHLY;INTERVAL=6", 3),
    ("Prueba de conmutacion y SAI", "FREQ=MONTHLY;INTERVAL=6", 6),
    ("Auditoria interna de configuracion", "FREQ=YEARLY", 10),
]
anio = date.today().year + 1
lineas = ["BEGIN:VCALENDAR", "VERSION:2.0", "PRODID:-//Mantenimiento//ES"]
for i, (nombre, regla, mes) in enumerate(tareas, 1):
    lineas += ["BEGIN:VEVENT", f"UID:mant-{i}@laboratorio",
               f"DTSTART;VALUE=DATE:{anio}{mes:02d}05", f"SUMMARY:{nombre}",
               f"RRULE:{regla}", "END:VEVENT"]
lineas.append("END:VCALENDAR")
open("mantenimiento.ics", "w", encoding="utf-8", newline="").write("\r\n".join(lineas))
print(len(tareas), "tareas escritas en mantenimiento.ics (importalo en tu agenda)")
```

**Qué debes observar.** Un fichero `.ics` que, importado, repite cada operación con su frecuencia.
Añade una alarma 3 días antes de cada evento y un campo de responsable en la descripción.

**Auditoría (30 minutos).** Con la lista de verificación del apartado 8.3 del técnico, audita tu propio
laboratorio o la red de un compañero:

1. Para cada criterio, anota la **evidencia** que has visto (fichero, registro, captura).
2. Clasifica: cumple, observación, no conformidad menor o mayor, con la razón.
3. Para cada no conformidad, redacta la **corrección** y la **acción correctiva**.
4. Redacta un informe de una página con alcance, método, hallazgos y plan de acción.

**Regla.** Una afirmación de la auditoría que no se pueda comprobar con una evidencia concreta no
entra en el informe.
