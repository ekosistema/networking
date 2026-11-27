---
title: "Proyecto de red · Guía de laboratorio"
description: "Guía de laboratorio de la unidad Proyecto de red."
section: diseno
unit: proyecto
kind: laboratorio
order: 26
tags:
  - redes
  - proyecto
  - laboratorio
  - vlan
  - packet-tracer
---

# Proyecto de red · Guía de laboratorio

> **Para qué sirve.** Esta unidad se aprueba demostrando que sabes diseñar, y un diseño solo está
> demostrado cuando funciona. Cinco prácticas: una red con VLAN y política de invitados, medidas para
> un diagnóstico, calculadoras del proyecto, un plan con camino crítico y un entregable escrito.

| Práctica | Herramienta | Qué demuestras | Tiempo |
| --- | --- | --- | --- |
| 1. VLAN, troncal, DHCP y ACL de invitados | Packet Tracer o GNS3 | Que el direccionamiento del caso 3 funciona | 120 min |
| 2. Medir para diagnosticar | iperf3, ping, traceroute | Que los requisitos se comprueban con datos | 60 min |
| 3. Calculadoras del proyecto | Python | VAN, TIR, VLSM, voz, almacenamiento | 45 min |
| 4. Plan con camino crítico | GanttProject o ProjectLibre | Que sabes qué retrasa el proyecto | 60 min |
| 5. Entregable: acta y resumen ejecutivo | Editor de texto | Que sabes comunicarlo | 60 min |

Para la práctica 1 conviene haber hecho antes la [guía de laboratorio de la unidad Mercado de comunicaciones](../01_Mercado_Comunicaciones/Mercado_Laboratorio.md),
que monta el enrutamiento básico.

## Práctica 1. VLAN, troncal, DHCP y ACL de invitados

**Objetivo.** Implantar tres VLAN del plan del [caso 3](Proyecto_Casos.md): Comercial,
Administración e Invitados, con un router que las une y una regla que aísla a los invitados.

**Plan de direccionamiento (extracto del caso 3).**

| VLAN | Nombre | Subred | Puerta de enlace |
| --- | --- | --- | --- |
| 30 | COMERCIAL | 10.30.1.0/27 | 10.30.1.1 |
| 20 | ADMIN | 10.30.1.64/27 | 10.30.1.65 |
| 90 | INVITADOS | 10.30.0.128/26 | 10.30.0.129 |

**Topología.**

```text
  PC-Com ---[Fa0/1] SW1 [Gi0/1 troncal]--- [Gi0/0] R1 (router en un solo enlace)
  PC-Adm ---[Fa0/2] SW1
  PC-Inv ---[Fa0/3] SW1
```

**Pasos.**

1. Crea las VLAN en SW1 y asigna los puertos de acceso:

```text
vlan 30
 name COMERCIAL
vlan 20
 name ADMIN
vlan 90
 name INVITADOS
interface FastEthernet0/1
 switchport mode access
 switchport access vlan 30
interface FastEthernet0/2
 switchport mode access
 switchport access vlan 20
interface FastEthernet0/3
 switchport mode access
 switchport access vlan 90
interface GigabitEthernet0/1
 switchport mode trunk
 switchport trunk allowed vlan 20,30,90
```

2. Configura el router con una subinterfaz por VLAN (router en un solo enlace):

```text
interface GigabitEthernet0/0
 no shutdown
interface GigabitEthernet0/0.30
 encapsulation dot1Q 30
 ip address 10.30.1.1 255.255.255.224
interface GigabitEthernet0/0.20
 encapsulation dot1Q 20
 ip address 10.30.1.65 255.255.255.224
interface GigabitEthernet0/0.90
 encapsulation dot1Q 90
 ip address 10.30.0.129 255.255.255.192
interface Loopback0
 ip address 203.0.113.1 255.255.255.255
```

   La dirección de loopback 203.0.113.1 hace de "Internet" para las pruebas.

3. Reparte direcciones con DHCP en el router:

```text
ip dhcp excluded-address 10.30.1.1 10.30.1.5
ip dhcp excluded-address 10.30.1.65 10.30.1.69
ip dhcp excluded-address 10.30.0.129 10.30.0.135
ip dhcp pool COMERCIAL
 network 10.30.1.0 255.255.255.224
 default-router 10.30.1.1
ip dhcp pool ADMIN
 network 10.30.1.64 255.255.255.224
 default-router 10.30.1.65
ip dhcp pool INVITADOS
 network 10.30.0.128 255.255.255.192
 default-router 10.30.0.129
 dns-server 8.8.8.8
```

4. Aísla a los invitados: pueden salir a Internet pero no a la red interna.

```text
ip access-list extended INVITADOS_IN
 deny ip 10.30.0.128 0.0.0.63 10.0.0.0 0.255.255.255
 permit ip any any
interface GigabitEthernet0/0.90
 ip access-group INVITADOS_IN in
```

5. Configura los PC en DHCP y prueba:

| Prueba | Debe resultar |
| --- | --- |
| PC-Com hace ping a PC-Adm | Responde (el router enruta entre VLAN) |
| PC-Inv hace ping a PC-Adm | No responde: lo bloquea la ACL |
| PC-Inv hace ping a 203.0.113.1 | Responde: "Internet" |
| `show vlan brief` en SW1 | Cada puerto en su VLAN |
| `show interfaces trunk` | Troncal con VLAN 20, 30 y 90 |

**Qué debes observar.**

- Que sin el router los PC de VLAN distintas no se ven aunque estén en el mismo switch: la VLAN es
  una red de difusión separada.
- Que la ACL se evalúa en orden y que al final de toda lista hay un `deny` implícito: sin el
  `permit ip any any`, los invitados no saldrían a ningún sitio.
- Que la dirección de la puerta de enlace es una dirección de la propia subred.

**Preguntas de cierre.** ¿Por qué se excluyen las primeras direcciones del reparto DHCP? ¿Qué pasa
si olvidas `allowed vlan` en el troncal? ¿Dónde pondrías el cortafuegos en la arquitectura real y
qué haría la ACL de aquí?

**Ampliación.** Añade la VLAN de voz (VLAN 70) y marca el tráfico con DSCP EF en el puerto del
teléfono. Mide con la simulación de Packet Tracer en qué cola entra.

## Práctica 2. Medir para diagnosticar

**Objetivo.** Producir evidencias para un informe de diagnóstico y para comprobar un requisito
medible. **Hazlo solo en tu red o con permiso del titular.**

**Parte A. Conectividad y ruta.**

```text
ping -n 20 192.168.1.1
ping -n 20 8.8.8.8
tracert 8.8.8.8
```

Anota pérdida, mínimo, medio y máximo de los tiempos y quién es cada salto. Un salto con mucho
retardo y la pérdida solo en él, sin pérdida en los siguientes, suele ser un router que limita las
respuestas ICMP, no una avería.

**Parte B. Caudal con iperf3.** Instala iperf3 en dos equipos de tu red. En uno:

```text
iperf3 -s
```

En el otro:

```text
iperf3 -c IP_DEL_SERVIDOR -t 30
iperf3 -c IP_DEL_SERVIDOR -t 30 -P 4
iperf3 -c IP_DEL_SERVIDOR -t 30 -R
```

La primera mide el sentido de ida, la segunda con cuatro flujos en paralelo y la tercera el sentido
inverso. Una red de 1 Gb/s en cobre bien montada da unos 940 Mb/s de datos útiles.

**Parte C. Un requisito comprobado.** Toma el requisito RF-01 del resumen técnico (100 MB/s
sostenidos). 100 MB/s son 800 Mb/s: compara con tu medida.

| Resultado | Qué significa |
| --- | --- |
| 900 Mb/s o más | Cumple con holgura |
| 800 a 900 Mb/s | Cumple con poco margen |
| Menos de 800 Mb/s | No cumple: busca cuello de botella (cable, puerto, equipo, NIC) |

**Qué debes entender.** Que un diagnóstico sin medidas es una opinión, y que cada requisito debe
poder medirse con una prueba como esta.

## Práctica 3. Calculadoras del proyecto

**Objetivo.** Comprobar a máquina los cálculos de los casos.

```python
import math, ipaddress

# VAN y TIR
def van(r, inversion, flujos):
    return -inversion + sum(f / (1 + r) ** (i + 1) for i, f in enumerate(flujos))

def tir(inversion, flujos):
    lo, hi = -0.9, 1.0
    for _ in range(80):
        m = (lo + hi) / 2
        if van(m, inversion, flujos) > 0:
            lo = m
        else:
            hi = m
    return lo

flujos = [6000, 9000, 11000, 11000, 11000]
print("VAN", round(van(0.07, 38000, flujos)), "TIR", round(tir(38000, flujos) * 100, 2))
print("VAN -30%", round(van(0.07, 38000, [f * 0.7 for f in flujos])))

# VLSM con margen del 30 por ciento
def prefijo(hosts, margen=0.30):
    n = math.ceil(hosts * (1 + margen)) + 2
    bits = math.ceil(math.log2(n))
    return 32 - bits

grupos = [("Voz", 56), ("Invitados", 40), ("WiFi", 30), ("Comercial", 20), ("Soporte", 16),
          ("Admin", 12), ("Gestion", 8), ("Servidores", 6), ("Direccion", 4)]
for nombre, h in grupos:
    print(nombre, "/" + str(prefijo(h)))

# Voz, camaras y almacenamiento
llamadas = 80 * 0.15
print("G.711", round(llamadas * 218 * 8 / 0.02 / 1000, 1), "kb/s")
print("Camaras", round(12 * 3e6 * 86400 / 8 * 30 / 1e12, 2), "TB en 30 dias")

# Mano de obra
puntos = 112
print("Horas", puntos * 1.1, "Coste", round(puntos * 1.1 * 35), "Material", puntos * 46)
```

**Qué debes observar.** VAN de 682 y TIR de 7,61; VAN de menos 10 922 con ahorros un 30 por ciento
menores; los prefijos del caso 3 (/25, /26, /26, /27, /27, /27, /28, /28, /29); unos 1 046 kb/s de
voz, unos 11,66 TB de cámaras y 123,2 horas de mano de obra. Si algo no coincide, el error es tuyo
o de un dato: encuéntralo.

**Ampliación.** Añade una función que, dada una lista de grupos, asigne las subredes desde un bloque
y devuelva red, rango y broadcast, con el módulo `ipaddress`.

## Práctica 4. Plan con camino crítico

**Objetivo.** Calcular a mano y comprobar en una herramienta el camino crítico de una obra.

| Tarea | Duración (semanas) | Depende de |
| --- | --- | --- |
| A. Requisitos | 1 | Ninguna |
| B. Viabilidad | 1 | A |
| C. Diseño detallado | 1 | B |
| D. Compra de equipos | 3 | C |
| E. Canalización | 1 | C |
| F. Cableado | 1 | E |
| G. Montaje de armarios | 1 | D y F |
| H. Configuración | 1 | G |
| I. Certificación y entrega | 1 | H |

**Pasos.**

1. Calcula a mano el inicio y el fin más tempranos de cada tarea (el inicio es el máximo de los
   fines de sus predecesoras).
2. Halla la duración total y las tareas con holgura (las que pueden retrasarse sin mover el fin).
3. Crea el proyecto en GanttProject o ProjectLibre, introduce las tareas, las duraciones y las
   dependencias fin a comienzo, y compara.

**Solución.** Duración total: 9 semanas. Camino crítico: A, B, C, D, G, H e I (1 + 1 + 1 + 3 + 1 +
1 + 1). Las tareas E y F terminan en la semana 5, pero la compra D termina en la 6: tienen una
semana de holgura. Si la entrega de equipos se retrasa una semana, se retrasa todo el proyecto; si
se retrasa la canalización una semana, no pasa nada.

**Pregunta de cierre.** Si el proveedor tarda dos semanas más en entregar, ¿qué haces para no
mover la fecha de entrega? (Respuestas válidas: pedir antes, tener proveedor alternativo, acortar
H e I con más personal, trabajar en paralelo cuando se pueda.)

## Práctica 5. Entregable: acta y resumen ejecutivo

**Objetivo.** Producir dos documentos reales para el caso de la gestoría del
[caso 1](Proyecto_Casos.md).

**Parte A. Acta de la primera entrevista.** En una página: fecha, asistentes, objetivo, lo que se
dijo (en las notas del caso), acuerdos, dudas abiertas y próximo paso. Termina con "pendiente de
validación por el cliente".

**Parte B. Resumen ejecutivo.** En una sola página, con esta estructura:

1. El problema, en una frase.
2. La solución propuesta, en tres líneas.
3. Coste y plazo.
4. El riesgo principal y cómo se mitiga.
5. La decisión que se pide a dirección.

**Criterios de calidad.**

- Sin siglas sin explicar y sin jerga.
- Con una cifra que justifique la decisión (por ejemplo, el coste de la no calidad).
- Que lo entienda alguien que no ha visto el proyecto.
- Que quepa en una página.

**Reflexión.** ¿Qué parte te costó más: lo técnico o contarlo? Es lo que más separa a un buen
técnico de uno bueno que no consigue el proyecto.
