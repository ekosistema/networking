---
title: "Resumen por unidades"
description: "Cómo usarlo. Es la versión de una hora por bloque de todo el material: la idea de cada unidad, los conceptos que la sostienen, las cifras que conviene tener a mano y los errores típicos. No sustituye al material (que es "
section: indice
kind: portada
order: 3
tags:
  - redes
  - resumen
  - indice
---

# Resumen por unidades

> **Cómo usarlo.** Es la versión de una hora por bloque de todo el material: la idea de cada
> unidad, los conceptos que la sostienen, las cifras que conviene tener a mano y los errores
> típicos. No sustituye al material (que es lo que enseña): sirve para **repasar** y para comprobar
> qué unidades dominas y cuáles no, o para decidir por dónde entrar.

## Cómo se conecta todo: la columna vertebral

```text
   DISEÑAR                       IMPLANTAR                    ADMINISTRAR       
   que medio, que equipo,  --> planificar, ejecutar,    --> servicios, gestion y
   que topologia y que         medir, certificar y           resolucion de incidencias
   documento                   cerrar con calidad
        |                           |                              |
        +--------- el decibelio, la direccion, la medida y el dinero atraviesan todo --------+
```

Siete ideas sostienen todo el material: **la capa** (cada problema vive en un nivel), **la encapsulación**
(sobres dentro de sobres), **la medida** (decibelios, caudal, disponibilidad), **compartir** (quién
habla cuándo), **la dirección** (quién es quién y por dónde se llega), **la redundancia** (qué pasa si
falla) y **la observabilidad** (si no se mide, no se gestiona). Detalle en el
[mapa de conceptos](Mapa_de_conceptos.md).


## Bloque de diseño de redes


### Análisis del mercado de productos de comunicaciones

**La idea.** Comprar red es comprar física disfrazada de catálogo: aquí van los dos modelos de capas, la aritmética del decibelio y la tabla de medios y equipos con la que se decide qué se paga y por qué.

**Los conceptos que la sostienen.**

1. Las capas: dos modelos que dicen lo mismo
2. El decibelio: sumar en vez de multiplicar
3. El techo del canal: Nyquist y Shannon
4. Los medios: cobre, fibra y aire
5. La trama: detectar el error y no ahogar al receptor
6. La dirección y la ruta
7. El equipo y el contrato

**Cifras que hay que saber de memoria.**

- Enlace permanente 90 m; canal 100 m; latiguillos hasta 10 m.
- 3 dB mitad; 10 dB décima parte; 20 dB centésima; 0 dBm un milivatio.
- Monomodo 0,35 dB/km en 1310 y 0,20 en 1550; multimodo 3,5 en 850.
- Conector 0,3 dB; empalme de fusión 0,1 dB; reserva de diseño 3 dB.
- GEO 35 786 km; LEO 500 a 2 000 km; 6 dB al duplicar distancia o frecuencia.
- Trama Ethernet de 64 a 1 518 bytes, 1 522 con VLAN; MTU de IPv4 1 500.
- Cabeceras: IPv4 20, IPv6 40, TCP 20, UDP 8 bytes; IPv4 32 bits, IPv6 128.
- E1 2,048 Mb/s; T1 1,544; STM-1 155,52; STM-16 2 488,32.
- Voz digital: 8 000 muestras por segundo x 8 bits = 64 kb/s. CD: 1 411,2 kb/s.

**Errores típicos.**

- **"El conmutador es de nivel 3 porque tiene VLAN".** La VLAN es nivel 2; encamina el conmutador de nivel 3 o el router.
- **"Cat 7 supera a Cat 6A en 10GBASE-T".** A 100 m rinden igual y Cat 7 rompe la compatibilidad con RJ45.
- **"El canal admite 100 m más los latiguillos".** 100 m es el total, con 90 de enlace permanente.
- **"El multimodo llega más lejos".** Llega menos por dispersión modal; es más barato, no mejor.
- **"20 dB cuadruplican la potencia".** La multiplican por 100; 6 dB es por 4.

**Para practicar.** [Casos](../01_Diseno/01_Mercado_Comunicaciones/Mercado_Casos.md) · [Autoevaluación](../01_Diseno/01_Mercado_Comunicaciones/Mercado_Autoevaluacion.md) · [Tarjetas](../01_Diseno/01_Mercado_Comunicaciones/Mercado_Tarjetas.md) · [Resumen técnico](../01_Diseno/01_Mercado_Comunicaciones/Mercado_Tecnico.md)

### Desarrollo del proyecto de la red telemática

**La idea.** Diseñar una red es decidir, con números y con norma, qué medio, qué equipo y qué topología resuelven un problema concreto al menor coste total, y dejarlo escrito para que otro pueda construirlo sin llamarte.

**Los conceptos que la sostienen.**

1. Conmutar circuitos o conmutar paquetes
2. ATM y Frame Relay: el circuito virtual
3. La topología compartida y la estrella conmutada
4. Los dos subniveles: MAC y LLC
5. Los noventa metros
6. El proyecto como argumento

**Cifras que hay que saber de memoria.**

- Celda ATM: 53 bytes, 5 de cabecera y 48 de datos.
- DLCI: 10 bits. Identificador de VLAN: 12 bits, 4094 utilizables.
- MAC: 48 bits. Trama: 64 bytes mínimo, 1518 máximo, 1522 con etiqueta.
- Enlace permanente: 90 m. Canal: 100 m, 4 conectores, 10 m de latiguillos.
- Tiempo de ranura a 10 Mb/s: 512 tiempos de bit, 51,2 microsegundos.
- Propagación en cobre: unos 5 ns por metro.
- Categorías: 5e 100 MHz, 6 250 MHz, 6A 500 MHz, 7 600 MHz, 7A 1000 MHz, 8 2000 MHz.
- PoE: 15,4 W, 30 W y 90 W en el puerto según 802.3af, at y bt tipo 4.
- Voz G.711 por Ethernet: 87,2 kb/s por llamada; G.729: 31,2 kb/s.

**Errores típicos.**

- **"El switch elimina los dominios de difusión".** Falso: los reduce solo con VLAN; los corta el router.
- **"ATM usa paquetes de longitud variable".** Falso: celdas fijas de 53 bytes; Frame Relay usa tramas variables.
- **"El CIR es la velocidad máxima".** Falso: es el caudal garantizado; por encima hay ráfagas descartables.
- **"Cat 6A garantiza 10 Gb/s".** Falso: la categoría es del componente; el enlace debe certificarse como clase EA.
- **"El canal son 100 m más latiguillos".** Falso: los 100 m los incluyen; el permanente son 90 m.

**Para practicar.** [Casos](../01_Diseno/02_Proyecto_Red/Proyecto_Casos.md) · [Autoevaluación](../01_Diseno/02_Proyecto_Red/Proyecto_Autoevaluacion.md) · [Tarjetas](../01_Diseno/02_Proyecto_Red/Proyecto_Tarjetas.md) · [Resumen técnico](../01_Diseno/02_Proyecto_Red/Proyecto_Tecnico.md)

### Elaboración de la documentación técnica

**La idea.** Documentar una red es fabricar la prueba de que está bien diseñada, bien instalada y bien cobrada; el día que falta esa prueba, la red deja de valer lo que costó.

**Los conceptos que la sostienen.**

1. El proceso y su ficha
2. Documento y registro no son lo mismo
3. El proyecto como documento normalizado
4. El pliego obliga, el presupuesto valora
5. La trazabilidad: del plano a la toma
6. La obra se cierra con actas

**Cifras que hay que saber de memoria.**

- Documentos básicos del proyecto: 7.
- Capítulos de la ISO 9001: 10, auditables del 4 al 10.
- Principios de la calidad: 7. Fases del PDCA: 4.
- RD 346/2011: de 11 de marzo, BOE de 1 de abril de 2011.
- Orden ITC/1644/2011: de 10 de junio.
- Enlace permanente: 90 m. Canal completo: 100 m.
- Escala de planta de oficinas en A3: 1:100.
- Garantía habitual: 1 año salvo pacto.
- Auditoría de sistemas de gestión: guía ISO 19011:2018.

**Errores típicos.**

- **"El proyecto consta de memoria, planos y presupuesto".** Son siete documentos: faltan índice, anexos, pliego y mediciones.
- **"El pliego fija los precios".** Los precios están en el presupuesto; el pliego fija condiciones y calidades.
- **"La ISO 9001 certifica la calidad del producto".** Certifica el sistema de gestión.
- **"El RD 401/2003 está vigente".** Lo derogó el RD 346/2011, aunque algunos manuales lo sigan citando.
- **"El acta de replanteo se firma al terminar".** Se firma al inicio.

**Para practicar.** [Casos](../01_Diseno/03_Documentacion_Tecnica/Documentacion_Casos.md) · [Autoevaluación](../01_Diseno/03_Documentacion_Tecnica/Documentacion_Autoevaluacion.md) · [Tarjetas](../01_Diseno/03_Documentacion_Tecnica/Documentacion_Tarjetas.md) · [Resumen técnico](../01_Diseno/03_Documentacion_Tecnica/Documentacion_Tecnico.md)


## Bloque de implantación de redes


### Planificación de proyectos de implantación

**La idea.** Planificar es convertir "hay que montar la red" en una lista corta de paquetes que alguien puede empezar el lunes, con una fecha y un coste que se sostienen cuando el cliente pregunta dos veces.

**Los conceptos que la sostienen.**

1. El proyecto es una promesa, no una tarea
2. El ciclo de vida: fases con puerta
3. La estructura de desglose: partir hasta poder estimar
4. El camino crítico: la cadena que manda
5. La holgura: el colchón que se puede gastar
6. Tres formas de organizar y la doble dependencia
7. Estimar con tres números

**Cifras que hay que saber de memoria.**

- Tamaño del paquete: de 8 a 80 horas. Hijos por nodo: de 3 a 7.
- Divisor de PERT: 6. Peso del valor más probable: 4.
- Desviación de una tarea: (pesimista menos optimista) entre 6.
- Gastos generales: del 13 al 17 por ciento. Beneficio industrial: 6 por ciento. IVA: 21 por ciento.
- Pendiente de aceleración: (coste acelerada menos coste normal) entre días ganados.
- EVM: SPI igual a EV entre PV; CPI igual a EV entre AC; EAC igual a BAC entre CPI.
- Fecha de pedido: fecha de necesidad menos plazo de entrega menos margen.
- Precio de venta con margen: coste entre (1 menos margen), no coste por (1 más margen).
- Ejemplo resuelto: 20 días, 16.900 euros y 5 días de holgura en C.

**Errores típicos.**

- "La duración es la suma de todas las tareas": falso, es la del camino más largo.
- "Comprimir la tarea más cara adelanta la entrega": falso, solo si es crítica; C es el paquete más caro por día y no lo es.
- "CPM y PERT son sinónimos": falso, PERT es probabilístico y CPM determinista.
- "En PERT se suman las desviaciones": falso, se suman varianzas y luego se hace la raíz.
- "La ejecución material lleva IVA": falso, el IVA se aplica sobre la base de licitación.

**Para practicar.** [Casos](../02_Implantacion/01_Planificacion_Proyectos/Planificacion_Casos.md) · [Autoevaluación](../02_Implantacion/01_Planificacion_Proyectos/Planificacion_Autoevaluacion.md) · [Tarjetas](../02_Implantacion/01_Planificacion_Proyectos/Planificacion_Tarjetas.md) · [Resumen técnico](../02_Implantacion/01_Planificacion_Proyectos/Planificacion_Tecnico.md)

### Ejecución de proyectos de implantación

**La idea.** Ejecutar una red no es instalar cable, es demostrar con papeles y con medidas que lo instalado cumple lo prometido, en plazo, en coste y en prestaciones.

**Los conceptos que la sostienen.**

1. El proyecto se controla con tres números
2. Cambiar el alcance es barato; no registrarlo es carísimo
3. El protocolo hace que el turno de noche trabaje igual que el de día
4. Certificar no es que funcione
5. La avería se busca por hipótesis
6. La calidad se demuestra repitiendo el criterio

**Cifras que hay que saber de memoria.**

- Enlace permanente: 90 m.
- Canal: 100 m.
- Destrenzado máximo: 13 mm.
- NEXT de Cat 6 en canal a 100 MHz: 39,9 dB.
- Atenuación de Cat 6 en canal a 100 MHz: 21,7 dB.
- Impedancia del par: 100 ohmios.
- NVP típico de Cat 6: 0,69.
- Diferencial de personas: 30 mA tipo A.
- Tensión de contacto: 50 V en seco, 24 V en húmedo.

**Errores típicos.**

- **"No se ha gastado todo el presupuesto, vamos bien".** Hay que comparar lo gastado con lo hecho (CPI), no con el total.
- **"SPI alto significa buen coste".** SPI mide plazo; SPI 1,2 con CPI 0,7 es más trabajo del previsto gastando mucho más.
- **"El comprobador da correcto, está certificado".** No mide transmisión ni emite certificación.
- **"El cable es Cat 6, el enlace es Cat 6".** La categoría la da el conjunto: cable, conectores, latiguillos, montaje y certificación.
- **"La autonomía es la del catálogo".** Se mide con carga resistiva a media carga; a plena carga y con batería vieja baja mucho.

**Para practicar.** [Casos](../02_Implantacion/02_Ejecucion_Proyectos/Ejecucion_Casos.md) · [Autoevaluación](../02_Implantacion/02_Ejecucion_Proyectos/Ejecucion_Autoevaluacion.md) · [Tarjetas](../02_Implantacion/02_Ejecucion_Proyectos/Ejecucion_Tarjetas.md) · [Resumen técnico](../02_Implantacion/02_Ejecucion_Proyectos/Ejecucion_Tecnico.md)


## Bloque de administración de redes


### Equipos de interconexión y servicios de red

**La idea.** Una red se sostiene sobre tres decisiones que se repiten a toda escala: quién tiene dirección, por dónde sale el tráfico y quién traduce los nombres; aquí se aprenden con equipos concretos.

**Los conceptos que la sostienen.**

1. La encapsulación: sobres dentro de sobres
2. La dirección y el puerto: el edificio y la puerta
3. ARP: preguntar en voz alta quién es quién
4. NAT: muchos dentro, una sola cara fuera
5. DNS y DHCP: los dos servicios que nadie ve
6. VLAN: tabiques dentro de la misma nave
7. La tabla de rutas: el mapa de carreteras

**Cifras que hay que saber de memoria.**

- IPv4: 32 bits en cuatro octetos; IPv6: 128 bits.
- Cabecera TCP: 20 bytes mínimo; UDP: 8 bytes.
- VLAN: 12 bits, 4 094 útiles. DNS: trece raíces. DHCP: 67 y 68.
- `/30`: dos hosts útiles. `/31`: punto a punto.
- Cobre: 90 m de enlace y 100 m de canal.
- 2,4 GHz: canales 1, 6 y 11.
- Cabecera IPv4: 20 bytes mínimo, TTL de 8 bits, protocolo 6 TCP y 17 UDP.
- LACP: IEEE 802.1AX; un flujo no supera la velocidad de un enlace.
- Multicast IPv4: 224.0.0.0/4, MAC 01:00:5e.

**Errores típicos.**

- `192.168.1.255` solo es difusión en un `/24`: en un `/26` la de la primera subred es `.63`.
- Un `/31` no tiene hosts útiles por la regla general, pero se usa en enlaces punto a punto (RFC 3021).
- La puerta de enlace debe caer dentro de la subred del cliente; si no, no hay salida.
- El proxy no sustituye al cortafuegos ni al NAT, y STP no evita bucles de capa 3.
- La VLAN nativa mal igualada en un troncal provoca fugas entre VLAN.

**Para practicar.** [Casos](../03_Administracion/01_Equipos_Servicios/Equipos_Casos.md) · [Autoevaluación](../03_Administracion/01_Equipos_Servicios/Equipos_Autoevaluacion.md) · [Tarjetas](../03_Administracion/01_Equipos_Servicios/Equipos_Tarjetas.md) · [Resumen técnico](../03_Administracion/01_Equipos_Servicios/Equipos_Tecnico.md)

### Gestión de redes telemáticas

**La idea.** Una red no se termina el día que se enchufa: se administra midiendo, decidiendo y anotando lo decidido, en un ciclo que se cierra cuando la red se apaga.

**Los conceptos que la sostienen.**

1. El ciclo de vida: planificar, diseñar, implantar, operar, optimizar
2. El NOC y las cinco cosas que se administran
3. Gestor, agente y MIB: quién pregunta y a quién
4. SNMP: preguntar cada cinco minutos y recibir avisos
5. RMON: medir donde no hay nadie mirando
6. Las magnitudes que se miden
7. Mantenimiento preventivo: la parada que se planifica

**Cifras que hay que saber de memoria.**

- Puertos: 161 y 162 UDP, 514 UDP, 6514 TCP, 123 UDP.
- Sondeo estándar: 5 minutos.
- Contador de 32 bits: 4 294 967 296; en 100 Mb/s se llena en unos 344 segundos.
- RMON1: 9 grupos; RMON2: 10 grupos.
- Raíces: RMON 1.3.6.1.2.1.16, RMON2 1.3.6.1.2.1.20, empresas 1.3.6.1.4.1.
- SYSLOG: 8 severidades, prioridad facility x 8 + severity.
- Disponibilidad 99,9 por ciento: 8,76 horas al año.
- Umbrales: 70 por ciento aviso, 80 por ciento crítico.
- Voz: 150 ms de retardo, 30 ms de jitter, 1 por ciento de pérdida.

**Errores típicos.**

- **Nessus no es un IDS.** Es un escáner de vulnerabilidades; Snort y Suricata son NIDS.
- **SNMPv3 no añade PDUs.** Añade USM y VACM; GETBULK es de la v2.
- **El trap no se confirma.** El inform sí.
- **RMON1 son nueve grupos Ethernet.** El décimo es la extensión Token Ring del RFC 1513.
- **`ifSpeed` va en bits por segundo.** `ifHighSpeed`, en megabits por segundo.

**Para practicar.** [Casos](../03_Administracion/02_Gestion_Redes/Gestion_Casos.md) · [Autoevaluación](../03_Administracion/02_Gestion_Redes/Gestion_Autoevaluacion.md) · [Tarjetas](../03_Administracion/02_Gestion_Redes/Gestion_Tarjetas.md) · [Resumen técnico](../03_Administracion/02_Gestion_Redes/Gestion_Tecnico.md)

### Resolución de incidencias en redes telemáticas

**La idea.** Una red casi nunca se cae por sorpresa: se cae por algo que ya estaba mal, y el oficio consiste en leer el síntoma, situarlo en la capa correcta y demostrar la causa antes de tocar un solo cable.

**Los conceptos que la sostienen.**

1. La incidencia como pérdida de servicio
2. Prioridad no es gravedad
3. El ticket como memoria del servicio
4. El síntoma no es la causa
5. La causa raíz: Ishikawa y los cinco porqués
6. La frontera entre la red local y la red de área extensa
7. Medir en vez de opinar

**Cifras que hay que saber de memoria.**

- MTTR, MTBF y disponibilidad: fórmulas en la tabla de indicadores.
- MTU de Ethernet: 1 500 bytes; datos útiles en ping: 1 472; cabeceras: 20 de IP y 8 de ICMP.
- TTL inicial: 64 en Linux, 128 en Windows, 255 en equipos de red.
- PoE: 48 voltios nominales, margen de 44 a 57; 802.3af 15,4 W; 802.3at 30 W; 802.3bt hasta 90 W.
- Enlace permanente: 90 metros; canal completo: 100 metros con hasta 4 conectores.
- Ishikawa: seis familias. Cinco porqués: cinco preguntas.
- ISO/IEC 20000-1: edición de 2018, certificable.
- Prioridad: matriz de impacto por urgencia, de P1 a P4.
- Magnitud económica: usuarios por coste hora por horas de parada.

**Errores típicos.**

- **Prioridad igual a gravedad.** Falso: la prioridad sale de impacto y urgencia.
- **El escalado jerárquico es para lo técnicamente difícil.** No: para eso está el funcional; el jerárquico aporta autoridad o presupuesto.
- **El MTBF mide el tiempo de reparación.** Falso: eso es el MTTR.
- **El comprobador certifica el enlace.** Falso: comprueba continuidad y mapa de pines.
- **El TDR mide la diafonía.** Falso: mide distancias por reflexión.

**Para practicar.** [Casos](../03_Administracion/03_Incidencias/Incidencias_Casos.md) · [Autoevaluación](../03_Administracion/03_Incidencias/Incidencias_Autoevaluacion.md) · [Tarjetas](../03_Administracion/03_Incidencias/Incidencias_Tarjetas.md) · [Resumen técnico](../03_Administracion/03_Incidencias/Incidencias_Tecnico.md)

## Competencias y empleabilidad

Ocho áreas de competencia para llevar lo aprendido a un entorno profesional. El papel de quien
empieza es **colaborar, proponer, estudiar y participar**: se espera criterio, orden y no romper
lo que se toca.

| Área | En una línea |
| --- | --- |
| C1 | Colaborar en el diseño: requisitos, viabilidad, topología, medios, ubicación, direccionamiento, WAN y respaldo |
| C2 | Leer la documentación del proyecto y extraer ocho datos |
| C3 | Proponer planificación: fases, EDT, tiempos, Gantt, recursos, costes y aprovisionamientos |
| C4 | Diagnosticar averías con método: síntomas, hipótesis, plan, causa y corrección |
| C5 | Calidad: características de control, fichas, no conformidades |
| C6 | VLAN, rutas, ACL y DHCP |
| C7 | Proponer la evolución de la red con perfiles de tráfico y monitorización |
| C8 | Conducta profesional: normas, comunicación, prevención y confidencialidad |

Material: [portada](../04_Empleabilidad/README.md), [cuaderno](../04_Empleabilidad/Cuaderno_Practicas.md),
[plantillas](../04_Empleabilidad/Plantillas_Trabajo.md) y [preparación](../04_Empleabilidad/Preparacion_Empleabilidad.md).

## Para cerrar: lo que no se olvida

1. **Los noventa metros** de enlace permanente y los cien del canal; los decibelios se suman (3 dB es el doble, 10 dB es diez veces).
2. **Subredes:** ordenar de mayor a menor, margen del 30 por ciento, bloques alineados y espacio libre anotado.
3. **Camino crítico:** la duración es la del camino más largo; la holgura se calcula con dos pasadas.
4. **Valor ganado:** CPI es EV entre AC y SPI es EV entre PV; menos de uno es mala noticia.
5. **Certificar no es que funcione:** NEXT, pérdida de retorno y margen superior a un decibelio.
6. **Servicios invisibles:** si cae el DNS, todo parece caído; se duplican y se documentan.
7. **SNMP:** puertos 161 y 162, v3 para cifrar, contadores de 64 bits.
8. **Prioridad** es impacto por urgencia, no gravedad técnica; la causa de una incidencia se demuestra, no se supone.
9. **Lo que no se justifica con un número no se defiende:** TCO, VAN, SLA y coste de la incidencia.

Siguiente paso: la [hoja de fórmulas](Formulario_y_tablas.md), el [glosario](Glosario.md) y el
[ruta de aprendizaje](Ruta_de_aprendizaje.md).
