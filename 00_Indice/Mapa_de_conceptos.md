---
title: "Mapa de conceptos"
description: "Todo el material responde a una sola pregunta: cómo llevar bits de un sitio a otro de forma fiable, medible y mantenible, y cómo cobrar por ello sin perder dinero."
section: indice
kind: portada
order: 2
tags:
  - redes
  - mapa
  - indice
---

# Mapa de conceptos

> **En una frase.** Todo el material responde a una sola pregunta: cómo llevar bits de un
> sitio a otro de forma fiable, medible y mantenible, y cómo cobrar por ello sin perder dinero.

Este documento es el andamio. Si entiendes cómo se conectan las ocho unidades, cada tema nuevo
tiene dónde engancharse y deja de ser una lista que memorizar.

## 1. Los cuatro bloques

```text
   LA FISICA              LA FORMA              EL PLAN             LA VIDA
   como viaja             como se               como se             como se
   la senal               organiza              ejecuta             mantiene
      |                      |                     |                   |
  +--------+            +----------+          +----------+        +----------+
  | «Mercado de comunicaciones» |            | «Proyecto de red»   |          | «Planificación de proyectos»   |        | «Equipos y servicios de red»   |
  | medios |            | red y    |          | alcance, |        | equipos, |
  | modelos|            | cableado |          | Gantt    |        | servicios|
  | proto  |            | «Documentación técnica»   |          | «Ejecución de proyectos»   |        | «Gestión de redes»   |
  +--------+            | documento|          | obra y   |        | gestion  |
      |                 +----------+          | calidad  |        | «Incidencias»   |
      |                      |                +----------+        | averias  |
      v                      v                     v              +----------+
  Que es posible        Que es correcto       Que es viable            |
                        y esta justificado    y esta controlado        v
                                                                  Que sigue vivo
```

Cada bloque responde a una pregunta distinta del mismo negocio. Ninguno se entiende solo:

- Sin la física, el diseño es dibujo.
- Sin el diseño, el proyecto es una lista de compras.
- Sin el proyecto, la implantación es improvisación.
- Sin la operación, la red funciona hasta el primer lunes.

## 2. Los siete conceptos que sostienen todo

Si te quedas con siete ideas de todo el material, que sean estas. Cada una reaparece en
varias unidades con otro nombre, y reconocerla es la mitad del aprendizaje.

### 1. Capa

El problema de comunicar dos máquinas es demasiado grande para resolverlo de una vez, así que se
trocea en capas, y cada capa solo habla con la de al lado. OSI tiene siete, TCP/IP tiene cuatro
o cinco según el autor, y cada equipo de interconexión vive en una capa distinta. Cuando algo
falla, la capa te dice dónde mirar. Se estudia en «Mercado de comunicaciones» y se usa en todas las demás, sobre todo
en «Incidencias».

### 2. Encapsulación

Cada capa envuelve lo de la capa superior con su propia cabecera. La carta dentro del sobre,
dentro del saco, dentro del camión. Esto explica por qué una trama tiene un tamaño máximo, por
qué existe la fragmentación, y por qué una trama de VLAN lleva una etiqueta de cuatro bytes en
medio. «Mercado de comunicaciones» y «Equipos y servicios de red».

### 3. La medida

Un bit no se mueve gratis: se atenúa, se distorsiona y se mezcla con ruido. Por eso todo el
oficio se mide en unidades concretas: hercios de ancho de banda, bits por segundo de caudal,
decibelios de pérdida y relación señal a ruido. El decibelio no es un adorno: es la única forma
de sumar ganancias y pérdidas sin multiplicar. Aparece en «Mercado de comunicaciones» (capacidad y atenuación), «Proyecto de red»
(presupuesto de cableado), «Ejecución de proyectos» (mediciones y certificación) y «Gestión de redes» (rendimiento).

### 4. Compartir

Un medio es caro; los usuarios son muchos. De ahí la multiplexación, que divide el medio por
frecuencia, por tiempo o por longitud de onda, y la conmutación, que decide por dónde va cada
unidad de información. Conmutar por circuitos es reservar un carril; conmutar por paquetes es
compartir la carretera. «Mercado de comunicaciones» y «Proyecto de red».

### 5. La dirección

Para entregar algo hay que nombrar el destino. Hay cuatro nombres distintos y cada uno responde
a una pregunta: la MAC dice quién eres en este cable, la IP dice dónde estás en la red, el puerto
dice a qué programa, y el nombre DNS dice cómo te llamas para los humanos. Confundirlos es el
error más frecuente en los exámenes y en la vida real. «Mercado de comunicaciones», «Proyecto de red» y, en profundidad, «Equipos y servicios de red».

### 6. Redundancia

Todo lo que importa se duplica: enlaces, rutas, alimentación, servidores. Pero duplicar crea el
problema de decidir quién manda, y de ahí salen Spanning Tree, los protocolos de encaminamiento
y el SAI. La redundancia sin criterio crea bucles; con criterio, crea disponibilidad. «Proyecto de red»,
«Planificación de proyectos», «Ejecución de proyectos», «Equipos y servicios de red» y «Gestión de redes».

### 7. Observabilidad

Una red que no se mide no se gestiona: se sufre. SNMP, RMON, NetFlow y los sistemas de
monitorización existen para convertir el estado de la red en números, y los números en decisiones:
ampliar un enlace, cambiar un equipo, abrir una incidencia. «Gestión de redes» y «Incidencias».

## 3. Los siete hilos que atraviesan las unidades

### Hilo 1: el viaje de un paquete

Es el ejercicio que más ayuda a ordenar la cabeza. Sigues un paquete desde que escribes una
dirección en el navegador hasta que ves la página.

| Paso | Qué ocurre | Dónde se estudia |
| --- | --- | --- |
| 1 | Se resuelve el nombre con DNS | «Equipos y servicios de red» |
| 2 | Se elige la ruta y la puerta de enlace | «Equipos y servicios de red», «Mercado de comunicaciones» |
| 3 | Se resuelve la MAC del siguiente salto con ARP | «Equipos y servicios de red» |
| 4 | Se encapsula en TCP, luego IP, luego Ethernet | «Mercado de comunicaciones» |
| 5 | La trama sale por el cable o por el aire | «Mercado de comunicaciones», «Proyecto de red» |
| 6 | Los conmutadores la reenvían por la VLAN correcta | «Equipos y servicios de red» |
| 7 | El router la encamina hacia otra red | «Equipos y servicios de red» |
| 8 | Se traduce la dirección privada con NAT | «Equipos y servicios de red» |
| 9 | Llega, se desencapsula y se responde | «Mercado de comunicaciones» |
| 10 | Si algo falló, alguien lo diagnostica | «Incidencias» |

Si puedes contar ese viaje de memoria, tienes medio camino hecho, porque cada
tema del material es una parada de ese recorrido.

### Hilo 2: el decibelio

La misma cuenta aparece cuatro veces con nombres distintos: pérdida en el cable («Ejecución de proyectos»),
presupuesto óptimo en fibra («Mercado de comunicaciones»), ganancia de antena en radio («Mercado de comunicaciones») y margen de señal en
Wi-Fi («Equipos y servicios de red»). Dominar una suma en decibelios te resuelve media docena de ejercicios. Detalle
en el [formulario](Formulario_y_tablas.md).

### Hilo 3: el dinero y el tiempo

Diseñar es elegir, y elegir es renunciar. «Proyecto de red» enseña a justificar una compra por rendimiento
y economía. «Planificación de proyectos» convierte esa decisión en un plan con fechas, camino crítico y coste. «Ejecución de proyectos»
compara lo previsto con lo real y explica la desviación. «Gestión de redes» dice cuándo ampliar antes de que
el enlace se sature. Es el mismo razonamiento en cuatro escalas temporales.

### Hilo 4: la calidad

Empieza como norma (ISO 9001 en «Documentación técnica»), se convierte en plan de calidad y en gráficos de control
(«Ejecución de proyectos»), se mide con indicadores y acuerdos de nivel de servicio («Incidencias») y termina siendo la
razón por la que una instalación se certifica o no. Una red mal certificada es una red que
funciona hoy y falla en dos años.

### Hilo 5: la seguridad

Aparece al principio como criptografía y cortafuegos («Mercado de comunicaciones»), se concreta en segmentación con
VLAN y autenticación 802.1X («Equipos y servicios de red»), se sistematiza con ISO 27002 y detección de intrusos
(«Gestión de redes») y se ejecuta cuando hay que responder a un incidente («Incidencias»). La seguridad no es una
unidad: es una propiedad que se diseña, se despliega y se vigila.

### Hilo 6: el método

El oficio tiene una forma de trabajar que se repite: entender el problema, medir, proponer,
documentar, ejecutar, verificar y cerrar. La verás en el proyecto («Proyecto de red», «Documentación técnica»), en la
planificación («Planificación de proyectos»), en la ejecución («Ejecución de proyectos») y en la resolución de incidencias («Incidencias»). Es
la misma secuencia con otro vocabulario, y es lo que evalúa el supuesto práctico.

### Hilo 7: el negocio

Todo lo anterior cuesta dinero y tiene un responsable que paga. Cada unidad cierra con una sección
de **perspectiva empresarial** que traduce lo técnico al idioma de quien decide:

| Unidad | La pregunta de negocio | Herramienta |
| --- | --- | --- |
| «Mercado de comunicaciones» | ¿Qué oferta compro y qué cuesta de verdad a cinco años? | TCO, matriz ponderada, SLA, disponibilidad en serie y paralelo |
| «Proyecto de red» | ¿Compensa el proyecto y qué riesgos tiene? | VAN, TIR, payback, matriz de riesgos, hitos de pago |
| «Documentación técnica» | ¿Qué cuesta la calidad y qué activo es la documentación? | Coste de la calidad, indicadores, confidencialidad |
| «Planificación de proyectos» | ¿Cuál es el precio, el margen y el control del proyecto? | Precio descompuesto, margen, valor ganado, partes interesadas |
| «Ejecución de proyectos» | ¿Cuánto cuestan el mantenimiento, la retención y la formación? | Contratos de mantenimiento, retorno de la formación |
| «Equipos y servicios de red» | ¿Qué pasa si cae el DNS o entra alguien por el Wi-Fi? | Continuidad, segmentación, router software frente a hardware |
| «Gestión de redes» | ¿Ampliamos o gestionamos, y cuánto cuesta vigilar? | Capacidad, NOC propio o externo, coste de monitorizar |
| «Incidencias» | ¿Cuánto cuesta una incidencia y quién da el servicio? | Coste por incidencia, SLA, mesa de ayuda propia o externa |

Hay una regla común: **lo que no se mide no se puede justificar, y lo que no se justifica no se
aprueba**. Por eso casi todas las perspectivas empresariales acaban en un número con una fecha.

## 4. Dónde se estudia cada cosa

| Concepto | «Mercado de comunicaciones» | «Proyecto de red» | «Documentación técnica» | «Planificación de proyectos» | «Ejecución de proyectos» | «Equipos y servicios de red» | «Gestión de redes» | «Incidencias» |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Modelo de capas | base | aplica | | | | aplica | | aplica |
| Medios y distancias | base | aplica | | | mide | | | comprueba |
| Decibelios y atenuación | base | proyecto | | | mide | Wi-Fi | umbrales | diagnóstico |
| Direccionamiento IP | base | diseño | | | | profundo | | diagnóstico |
| Conmutación y VLAN | base | topología | | | | configura | | |
| Cableado estructurado | medios | profundo | planos | | certifica | | | averías |
| Gestión de proyectos | | plan | documento | profundo | ejecuta | | capacidad | prioriza |
| Calidad | | | ISO 9001 | | Pareto | | | indicadores |
| Normativa y pliegos | | | profundo | UNE 157001 | REBT | | | |
| Monitorización | | | | | | SNMP base | profundo | usa |
| Seguridad | cripto, VPN, DMZ | | | | plan y emergencia | VLAN, 802.1X | ISO 27002 | incidentes |
| Coste y rentabilidad | TCO | VAN y TIR | coste de la calidad | precio y valor ganado | mantenimiento | router software | capacidad, NOC | coste por incidencia |
| Servicios finales (voz, vídeo, imagen) | modulación y PCM | ancho de banda por servicio | | | | DSCP | perfil de tráfico | |
| Capacitación y empleo | | | | | plan de capacitación | | | base de conocimiento |

## 5. Las tres confusiones estructurales

No son detalles: son malentendidos que arrastran media asignatura.

**Ancho de banda frente a caudal.** El ancho de banda es la capacidad teórica del medio, medida
en hercios o en bits por segundo. El caudal es lo que de verdad pasa, y siempre es menor por
cabeceras, colisiones, esperas y protocolos. Un enlace de un gigabit que transporta seiscientos
megabits no está averiado: está trabajando.

**Velocidad frente a latencia.** Más ancho de banda no reduce el retardo. Un camión más grande
no llega antes. La latencia depende de la distancia, de la cola y del procesamiento. Por eso la
videollamada se rompe en un enlace saturado aunque tenga mucho caudal.

**Tener red frente a tener servicio.** El enlace puede estar levantado y no haber dirección,
ruta, DNS o permiso. La mitad de las incidencias reales son de servicio, no de cable. La prueba
de la puerta de enlace y del primer salto separa un mundo del otro, y eso se estudia en «Incidencias».

## 6. Cómo usar este mapa

1. Antes de empezar: léelo entero, aunque no entiendas la mitad.
2. Al terminar cada unidad: vuelve al apartado 4 y comprueba en qué columnas acabas de entrar.
3. Antes de una revisión general: usa el hilo 1 (el viaje del paquete) como repaso de veinte minutos.
4. Cuando algo no encaje: pregúntate a qué bloque pertenece. Casi siempre el problema no es el
   tema, es que lo estás mirando desde el bloque equivocado.
