---
title: "Desarrollo del proyecto de la red telemática"
description: "Resumen técnico de la unidad Proyecto de red."
section: diseno
unit: proyecto
kind: tecnico
order: 22
tags:
  - redes
  - proyecto
  - tecnico
  - cableado
---

# Proyecto de red · Resumen técnico

> **Alcance.** El programa de referencia en seis bloques, con tablas, cifras de memoria, procedimientos, trampas y un caso práctico de tres plantas con VLAN, armarios y presupuesto.

## 1. Redes de comunicaciones: conmutación y topologías

### 1.1 Conmutación de circuitos

Se reservan recursos antes de transmitir, en tres fases: establecimiento, transferencia y liberación. El circuito es de uso exclusivo aunque no se transmita nada.

Ventajas: retardo y jitter casi nulos, aptos para voz y vídeo. Inconvenientes: se paga el tiempo de conexión aunque no se transmita y, si el circuito está ocupado, la llamada se rechaza; el tráfico a ráfagas desaprovecha el canal. Ejemplos: red telefónica conmutada y RDSI, con tarificación por tiempo y distancia.

### 1.2 Conmutación de paquetes

Multiplexación estadística: el enlace se ocupa solo cuando hay algo que enviar.

- **Datagramas.** Cada paquete lleva el destino completo y cada router decide su ruta; pueden llegar desordenados. Es el modelo de IP.
- **Circuitos virtuales.** Se fija un camino y cada paquete lleva solo un identificador local corto. Es el modelo de ATM, Frame Relay y MPLS.

| Criterio | Circuitos | Paquetes |
| --- | --- | --- |
| Ancho de banda | Reservado | Compartido, estadístico |
| Eficiencia en ráfagas | Baja | Alta |
| Retardo y jitter | Constantes | Variables |
| Tolerancia a fallos | Nula sin reencaminar | Alta |

El precio es la variabilidad: cuando la cola se llena, los paquetes esperan o se descartan. De ahí la **QoS**: clasificar, marcar prioridad (DSCP en IP, clase de servicio en 802.1Q) y encolar por clases. No crea ancho de banda: decide a quién se le quita.

### 1.3 ATM

Conmutación de paquetes con circuitos virtuales y unidad fija: la **celda de 53 bytes**, 5 de cabecera y 48 de carga útil. El tamaño fijo permite conmutar en hardware con retardo constante y que una celda de voz no espere detrás de un paquete grande.

Identificadores: **VPI** (8 bits en UNI, 12 en NNI) y **VCI** (16 bits), con significado local en cada enlace.

| Clase | Caudal | Uso típico |
| --- | --- | --- |
| CBR | Fijo y garantizado | Voz sin comprimir |
| VBR-rt | Garantizado con ráfagas y retardo acotado | Vídeo comprimido, voz comprimida |
| VBR-nrt | Garantizado sin requisito de retardo | Datos con caudal mínimo |
| ABR | Mínimo garantizado y resto disponible | Aprovecha huecos |
| UBR | Ninguno | Correo, navegación |

Capas de adaptación: AAL1 para caudal constante, AAL2 para voz comprimida y AAL5 para datos. Interfaces de 155,52 y 622,08 Mb/s. Su idea sobrevive en MPLS.

### 1.4 Frame Relay

Tramas de longitud variable sobre circuitos virtuales, para líneas de fibra que no necesitaban corrección de errores por salto.

| Concepto | Significado |
| --- | --- |
| DLCI | Identificador de conexión de 10 bits, local por interfaz; los bajos son para LMI |
| PVC | Circuito permanente configurado por el operador |
| SVC | Circuito establecido bajo demanda con señalización |
| CIR | Caudal que el operador garantiza de forma sostenida |
| Bit DE | Marca lo descartable con congestión: lo que excede el CIR |
| BECN y FECN | Avisos de congestión hacia atrás y hacia delante |

No retransmite: descarta y deja que TCP recupere, de ahí su bajo retardo y su bajo coste. Velocidades de 64 kb/s a 2 Mb/s.

### 1.5 Redes de difusión y topologías

Todos comparten el medio y reciben toda transmisión: hace falta una regla de turno.

| Topología | Funcionamiento | Ventaja | Inconveniente |
| --- | --- | --- | --- |
| Bus | Troncal con terminadores y CSMA/CD | Cableado mínimo | Un corte tumba el segmento; baja el rendimiento |
| Anillo | Cadena cerrada con testigo o doble anillo | Turno determinista, sin colisiones | Un fallo de nodo interrumpe el anillo |
| Estrella | Enlace dedicado al central | Fallo local, fácil de ampliar | Depende del central; más cable |

La estrella ganó cuando el par trenzado abarató el cable y el central pasó de repetir a conmutar.

## 2. Redes de área local

> **Véase también.** Las VLAN, los troncales y el árbol de expansión se configuran en los apartados 9 y 10 de la unidad «Equipos y servicios de red». [Equipos y servicios de red, resumen técnico](../../03_Administracion/01_Equipos_Servicios/Equipos_Tecnico.md).

### 2.1 Topología física y lógica

La física es el cable; la lógica, el camino de la trama y quién compite por el medio.

- Estrella con hub: lógica en bus, un dominio de colisión.
- Estrella con switch: lógica conmutada, un dominio de colisión por puerto.
- Wi-Fi: medio compartido por célula y canal.

### 2.2 Arquitectura de protocolos LAN

| Subnivel | Norma | Responsabilidad |
| --- | --- | --- |
| MAC | 802.3 y 802.11 | Dirección de 48 bits, formato de trama, acceso al medio y FCS |
| LLC | 802.2 | Interfaz con el nivel de red independiente del medio; multiplexa por SAP |

Trama Ethernet: preámbulo y delimitador, destino y origen de 6 bytes, tipo o longitud, datos de 46 a 1500 y FCS. Mínimo 64 bytes y máximo 1518, o 1522 con etiqueta. El mínimo existe para que la colisión se detecte mientras se transmite. IP viaja sobre LLC tipo 1 y la fiabilidad queda en capas superiores.

### 2.3 Normas IEEE 802

| Norma | Regula |
| --- | --- |
| 802.1 | Conmutación, gestión, árbol de expansión, VLAN, acceso a puerto y agregación de enlaces |
| 802.2 | Subnivel LLC |
| 802.3 | Ethernet y CSMA/CD, del 10BASE-T al 10GBASE-T y variantes de fibra |
| 802.11 | Redes locales inalámbricas |
| 802.1Q | Etiqueta de 4 bytes: prioridad de 3 bits y 12 de identificador. 4094 VLAN utilizables |
| 802.1X | Control de acceso por identidad: suplicante, autenticador y servidor RADIUS |

### 2.4 Dominios de colisión y de difusión

- **Colisión:** equipos que compiten por el mismo medio. Lo delimita el switch (uno por puerto) o el router.
- **Difusión:** equipos que reciben una trama de difusión. Lo delimita el router o la VLAN; el switch no lo reduce.

Un exceso de difusión se corrige con VLAN o routers; uno de colisiones, con switches. Con full duplex, CSMA/CD ya no actúa.

### 2.5 Dominio IP y tarjetas de red

Se trata de explicar cómo influyen los dominios de colisión **y los dominios IP** en el rendimiento. Un **dominio IP** es el conjunto de equipos de una misma subred, es decir, los que se alcanzan entre sí sin pasar por un router. Casi siempre coincide con un dominio de difusión (una VLAN), y por eso se dimensiona a la vez.

| Dominio | Lo delimita | Qué degrada si crece demasiado | Cómo se corrige |
| --- | --- | --- | --- |
| Colisión | Cada puerto de un switch | Rendimiento con medio compartido (hub, Wi-Fi) | Switches, full duplex |
| Difusión | Router o VLAN | Todos los equipos procesan cada ARP, DHCP y descubrimiento | VLAN y routers |
| IP | Máscara de la subred | Número de direcciones y política común | Subredes más pequeñas, VLSM |

Cada equipo emite difusiones de forma permanente (ARP, DHCP, mDNS, descubrimiento de servicios). Con 1 000 equipos en una sola red y de 2 a 5 difusiones por segundo cada uno, todos deben atender de 2 000 a 5 000 paquetes por segundo que no son para ellos [valores orientativos]. Por eso el tamaño habitual de una subred de usuarios no pasa de unas decenas a unos pocos centenares de equipos, y la separación se hace por función, para poder aplicar política.

**Tarjetas de red (NIC).** Es el transmisor y receptor de cada equipo: convierte bits en señal, lleva la dirección MAC y ejecuta el nivel 2.

| Criterio | Qué mirar |
| --- | --- |
| Velocidad y medio | 1 Gb/s en cobre en puestos; 10 Gb/s en servidores, en cobre 6A o en fibra con SFP+ |
| Bus | PCIe x1 basta para 1 Gb/s; 10 Gb/s pide PCIe x4 o más |
| Puertos | Dos puertos en servidores, para redundancia o agregación (802.3ad) |
| Funciones | VLAN 802.1Q, Wake-on-LAN, descarga de sumas de verificación y segmentación (offload), PXE para arranque |
| Compatibilidad | Controladores del sistema operativo previsto, incluida la virtualización |
| Portátiles y móviles | Wi-Fi 6 o superior con la banda de 5 GHz; Ethernet por adaptador USB-C |

Regla de compra: la NIC no debe ser el cuello de botella. Un servidor de ficheros con puertos de 10 Gb/s en un switch de 1 Gb/s comparte 1 Gb/s.

### 2.6 Interconexión LAN-LAN y LAN-WAN

| Escenario | Equipo | Decide por | Corta difusión |
| --- | --- | --- | --- |
| LAN-LAN, misma red | Switch | MAC | No |
| LAN-LAN, redes distintas | Switch de capa 3 o router | IP | Sí |
| LAN-WAN y remota | Router, con VPN si el enlace va por Internet | IP | Sí, con NAT y filtrado |

Regla: misma subred, switch; distintas, router.

### 2.7 Criterios de diseño

1. **Medio.** Cobre hasta 90 m con 6A; fibra por encima, entre plantas o con interferencias; radio solo para movilidad.
2. **Equipos.** Acceso con PoE, distribución para agregación y núcleo para conmutar y rutar; en una pyme, los dos últimos colapsan en dos switches apilados.
3. **Direccionamiento.** Una subred por VLAN, VLSM por hosts reales y reservas para equipos de red.
4. **Respaldo.** Agregación de enlaces, doble WAN, SAI y configuración guardada fuera del equipo.
5. **Crecimiento.** 25 por ciento de puertos y 30 por ciento de direcciones libres.

## 3. Cableado estructurado

### 3.1 Normativa

| Norma | Contenido |
| --- | --- |
| ISO/IEC 11801-1:2017 | Cableado genérico: clases, canales y enlaces permanentes |
| UNE-EN 50173-1:2018 | Versión europea, con partes por tipo de instalación |
| UNE-EN 50174 (partes 1 a 3) | Instalación: especificación, planificación y separación de potencia |
| UNE-EN 50346 | Ensayo del cableado instalado |
| TIA-568 | Norma estadounidense de cableado comercial, base de componentes |

El programa de referencia cita el **Real Decreto 401/2003** y la **Orden CTE/1296/2003**, derogados. El marco vigente es el **Real Decreto 346/2011** (BOE de 1 de abril de 2011), con la **Orden ITC/1644/2011**. Si preguntan por la norma aplicable, la vigente; si por lo que citaba el programa de referencia, la antigua.

### 3.2 Subsistemas

```text
+-----------------------------------------------------+
| ENTRADA DE SERVICIOS (acometidas del operador)      |
+-------------------------+---------------------------+
                          |
+-------------------------v---------------------------+
| VERTICAL O BACKBONE (entre armarios, fibra o cobre) |
+-------------------------+---------------------------+
                          |
+-------------------------v---------------------------+
| ARMARIO DE COMUNICACIONES (rack y panel de parcheo) |
+-------------------------+---------------------------+
                          |
+-------------------------v---------------------------+
| HORIZONTAL (90 m del panel a la toma)               |
+-------------------------+---------------------------+
                          |
+-------------------------v---------------------------+
| PUESTO DE TRABAJO (toma, latiguillo, equipo)        |
+-----------------------------------------------------+
```

| Subsistema | Incluye | Distancia |
| --- | --- | --- |
| Entrada de servicios | Punto de demarcación y regletas de corte | Según acometida |
| Vertical | Del armario principal a los de planta | Cobre con criterio de 90 m; fibra, cientos de metros |
| Horizontal | Del panel a la toma | 90 m permanente, 100 m de canal |
| Puesto de trabajo | Toma y latiguillo | Dentro de los 10 m del canal |
| Armario | Rack, paneles, switches y regletas | 25 por ciento de crecimiento |
| Campus | Entre edificios | Fibra, normalmente monomodo |

### 3.3 Categorías y clases

| Clase | Categoría | Ancho de banda | Uso típico |
| --- | --- | --- | --- |
| D | Cat 5e | 100 MHz | 1000BASE-T a 100 m |
| E | Cat 6 | 250 MHz | 10 Gb/s a 55 m |
| EA | Cat 6A | 500 MHz | 10GBASE-T a 100 m |
| F | Cat 7 | 600 MHz | 10 Gb/s con conectores distintos |
| FA | Cat 7A | 1000 MHz | 10 Gb/s con margen |
| I | Cat 8.1 | 2000 MHz | 25 Gb/s a 30 m |
| II | Cat 8.2 | 2000 MHz | 40 Gb/s a 30 m |

La **categoría** califica componentes y la **clase** el enlace montado: un cable de 6A mal instalado no da clase EA.

### 3.4 Distancias y el porqué de los noventa metros

Enlace permanente: 90 m. Canal: 100 m, con hasta 4 conectores y 10 m de latiguillos. El motivo es un presupuesto de pérdidas:

1. **Atenuación.** El par es un filtro paso bajo: la pérdida crece con la frecuencia y la longitud. A 100 MHz, el canal de 5e admite del orden de 20 a 24 dB en 100 m.
2. **Diafonía.** La señal útil se debilita con la distancia y el ruido vecino no tanto: el margen ACR se estrecha, y alargar el cable empeora la relación señal a ruido.
3. **Retardo.** Unos 5 ns por metro: 100 m son unos 500 ns de ida. Con acceso compartido el emisor transmite hasta que la colisión pueda volver, y el tiempo de ranura de 10 Mb/s son 512 tiempos de bit; al multiplicar por diez la velocidad, la trama dura diez veces menos y el margen obliga a fijar 100 m.

Además, 90 m cubren una planta con un solo armario centrado.

### 3.5 Paneles, tomas, armarios y salas

- **Panel de parcheo:** 24 o 48 puertos; atrás el cable horizontal, delante el latiguillo al switch.
- **Toma:** RJ45 con keystone, T568A o T568B en toda la instalación. Dos tomas por puesto.
- **Armario y sala:** rack de 19 pulgadas en local dedicado, con acceso restringido, temperatura controlada y toma de tierra.

### 3.6 Compatibilidad electromagnética

| Medida | Aplicación |
| --- | --- |
| Apantallamiento | F/UTP o S/FTP; solo con tierra en ambos extremos |
| Separación de potencia | Canalizaciones distintas de las de 230 V; como regla de obra, 30 cm y cruces a 90 grados |
| Puesta a tierra | Barra en el armario, racks y pantallas al mismo potencial, sin bucles |

Otras fuentes de ruido: fluorescentes, variadores y bajantes eléctricas.

## 4. El proyecto telemático

### 4.1 Definición, objetivos y estructura

Un **proyecto telemático** es el conjunto de estudios, decisiones y documentos que lleva de una necesidad de comunicación a una red instalada, probada y mantenible. Su objetivo no es instalar equipos sino cumplir los requisitos del cliente con un coste y un plazo acordados.

| Fase | Pregunta que responde | Entregable |
| --- | --- | --- |
| Estudio previo | ¿Qué necesita el cliente y es viable? | Documento de requisitos y estudio de viabilidad |
| Diagnóstico | ¿Cómo está la red actual y qué falla? | Informe de diagnóstico e inventario |
| Diseño | ¿Cómo debe ser la red? | Propuesta técnica, planos y direccionamiento |
| Plan de acción | ¿Cómo, cuándo y con qué se hace? | Plan de ejecución y de explotación |
| Ejecución | ¿Se ha hecho según lo diseñado? | Instalación y certificación |
| Entrega | ¿Puede el cliente operarla? | Documentación final y formación |

La forma de ordenarlo la fija la **UNE 157001:2014**: índice, memoria, anexos, planos, pliego de condiciones, mediciones y presupuesto.

### 4.2 Técnicas de entrevista y recogida de información

Convertir deseos en requisitos. La información útil casi nunca está en una sola persona ni en un solo sitio:

| Fuente | Qué aporta | Técnica |
| --- | --- | --- |
| Dirección | Objetivos del negocio, presupuesto, riesgos aceptables | Entrevista individual |
| Informática o proveedor actual | Estado técnico, incidencias, contratos | Entrevista y documentos |
| Usuarios | Cómo se trabaja de verdad, qué molesta | Entrevista en grupo o cuestionario |
| Instalación existente | Cableado, armarios, equipos | Visita y observación, fotografías |
| Datos medidos | Tráfico y picos de uso | Monitorización durante al menos una semana laboral |
| Documentación | Planos, facturas de telecomunicaciones, contratos, inventarios | Revisión documental |

Cómo conducir una entrevista:

1. Prepara un guion con objetivos y preguntas; la entrevista **semiestructurada** (guion más libertad para profundizar) es la más útil.
2. Empieza por preguntas abiertas ("cuéntame cómo trabajáis con los ficheros") y cierra con las cerradas que fijan datos ("¿cuántos puestos habrá dentro de cinco años?").
3. Pregunta por los problemas con "cinco porqués": cada respuesta se vuelve a preguntar hasta llegar a la causa.
4. Entrevista por separado a dirección e informática: no dirán lo mismo delante del otro.
5. Cierra con un **acta** (fecha, asistentes, acuerdos, dudas) y pide validación por escrito.

Preguntas que no pueden faltar: puestos actuales y a cinco años, aplicaciones críticas y su consumo medido, tolerancia a paradas, quién mantendrá la red, plazos y presupuesto, y qué normas debe cumplir el negocio.

### 4.3 Estudio de viabilidad técnico-económica

- **Técnica:** distancias, canalizaciones, potencia eléctrica, climatización, espacio para armarios y titularidad o permisos del inmueble.
- **Económica:** implantación (material, mano de obra, licencias, formación) más explotación a cinco años, con al menos dos alternativas.
- **Legal y organizativa:** protección de datos, normativa del sector, quién gestiona la red.

**Indicadores de rentabilidad.** El plazo de recuperación (payback) es el tiempo en recuperar la inversión; el valor actual neto (VAN) trae los flujos futuros a hoy con una tasa de descuento; la tasa interna de retorno (TIR) es la tasa que hace el VAN igual a cero.

```text
VAN = -Inversion + suma de (Flujo del ano t / (1 + r) elevado a t)

Ejemplo ilustrativo: inversion 12 000 euros; ahorro anual de 4 000 euros durante
5 anos (1 800 de paradas evitadas, 1 500 de telefonia y 700 de soporte); tasa 8 por ciento.

Payback = 12 000 / 4 000 = 3 anos
Factor de anualidad = (1 - 1,08 elevado a -5) / 0,08 = 3,993
VAN = -12 000 + 4 000 x 3,993 = 3 971 euros   (positivo: el proyecto compensa)
TIR = unos 19,9 por ciento                    (mayor que 8 por ciento)
```

Un VAN positivo y una TIR por encima de la tasa mínima exigida dicen que el proyecto es rentable. El argumento más sólido suele ser el **coste de la no calidad**: 124 puestos que pierden 1,5 horas al año por caídas, a 25 euros la hora, son 4 650 euros que nadie ve en la factura. Si la rentabilidad no se sostiene con la hipótesis prudente, no se vende con la optimista: se hace un análisis de sensibilidad (¿qué pasa si el ahorro es un 30 por ciento menor?).

### 4.4 El informe de diagnóstico y sus fases

Cuando ya hay red, el diagnóstico es el documento que fundamenta todo lo demás: sin él, el proyecto resuelve problemas que el cliente cree tener.

| Fase | Qué se hace | Resultado |
| --- | --- | --- |
| 1. Recogida | Entrevistas, visita, inventario, mediciones | Datos en bruto |
| 2. Análisis | Compara lo encontrado con los requisitos y con las normas | Desviaciones |
| 3. Diagnóstico | Separa síntomas de causas y valora riesgos | Hallazgos |
| 4. Recomendaciones | Prioriza: urgente, a corto, a medio plazo | Hoja de ruta |
| 5. Presentación | Se explica y se valida con el cliente | Informe firmado |

Estructura del informe: resumen ejecutivo de una página, alcance y método, hallazgos con su evidencia, riesgos, recomendaciones priorizadas con coste estimado y anexos (inventario, mediciones, fotografías).

| Hallazgo | Evidencia | Impacto | Recomendación |
| --- | --- | --- | --- |
| Una sola red para todo | Una subred /22 con 600 equipos | Difusión alta, sin política | VLAN y subredes por función |
| Sin SAI en el armario | Corte de 8 minutos arruina los switches | Parada de toda la oficina | SAI con gestión |
| Cableado sin certificar | Sin informes ni etiquetas | Averías sin diagnóstico | Certificar y etiquetar |

### 4.5 Recogida de información y documento de requisitos de usuario

Lo que se recoge se ordena en seis bloques:

1. **Información sobre la organización.** Sedes, organigrama, procesos críticos, horarios, normas del sector, crecimiento previsto.
2. **Inventario de equipos hardware y servicios de telecomunicación.** Un registro vivo, con una fila por activo.

| Campo | Ejemplo |
| --- | --- |
| ID | SW-PB-01 |
| Tipo, marca y modelo | Conmutador de acceso, 48 puertos PoE+ |
| Número de serie | Del fabricante |
| Ubicación | Armario de la planta baja, posición 12U |
| Sistema o firmware y versión | La instalada hoy |
| Direcciones | IP de gestión y MAC |
| Garantía y soporte | Fecha de fin y contrato |
| Estado y responsable | En servicio, soporte técnico |

   Para los servicios de telecomunicación se anota operador, tipo de acceso, caudal, IP pública, contrato, permanencia y vencimiento.

3. **Sistemas de red.** Topología actual, direccionamiento, servicios (DNS, DHCP, directorio, correo), enlaces y consumo.
4. **Seguridad informática.** Quién accede, con qué credenciales, qué cortafuegos hay, copias, parches y antivirus.
5. **Sistema de cableado.** Categoría, longitudes, estado de los armarios, etiquetado y certificación existente.
6. **Requisitos.** Lo que el cliente necesita, escrito para poder comprobarse:

| ID | Requisito | Criterio de aceptación | Prioridad |
| --- | --- | --- | --- |
| RF-01 | Acceso a ficheros | 100 MB/s sostenidos, latencia menor de 1 ms | Alta |
| RF-02 | Continuidad | Menos de 1 hora de parada anual por fallo de red | Alta |
| RF-03 | Trazabilidad | Registro de accesos con identidad por puerto | Media |
| RNF-01 | Crecimiento | 25 por ciento de puertos y direcciones libres | Alta |

Un buen requisito es **medible, singular y verificable**: "la red debe ser rápida" no vale; "100 MB/s sostenidos" sí.

### 4.6 Propuesta técnica

Resumen ejecutivo con la decisión, situación actual, arquitectura, medios, equipos con modelo y cantidad, direccionamiento y VLAN, seguridad, plan de pruebas y presupuesto. Cada decisión lleva su alternativa descartada. Se estructura en tres bloques.

**a) Sistema informático y servicios de telecomunicación.** Qué equipos y servicios hacen falta y dónde.

- **Centro de procesos de datos (CPD) y sistemas de red.** Si hay que reubicar o instalar la sala de servidores, se dimensiona así:

| Aspecto | Criterio |
| --- | --- |
| Ubicación | Lejos de aguas (baños, cubiertas), con acceso restringido y registrado |
| Alimentación | Circuito dedicado, SAI dimensionado con margen y autonomía suficiente, doble línea si el servicio lo exige |
| Climatización | Toda potencia eléctrica acaba en calor: 2 kW de equipos exigen 2 kW de refrigeración, unos 6 800 BTU/h; con redundancia si es crítico |
| Protección contra incendios | Detección y extinción adecuadas al local, conforme al RD 513/2017 (reglamento de instalaciones de protección contra incendios) |
| Puesta a tierra y orden | Barra equipotencial, bandejas y rack ordenados |
| Espacio | Reserva de al menos un 25 por ciento para crecer |

- **Política de seguridad de la información.** Qué se protege, quién es responsable, qué se permite y qué no. Contenido mínimo: alcance, roles, control de acceso, gestión de contraseñas, uso aceptable, copias, tratamiento de incidentes y revisión periódica.
- **Pautas de calidad.** Cómo se relaciona el sistema con el de calidad de la empresa: procedimientos, registros y métricas (véase [Documentación técnica](../03_Documentacion_Tecnica/README.md)).

**b) Propuesta del sistema de cableado.** Se decide en este orden:

1. **Número de puestos de trabajo** y de tomas por puesto.
2. **Servicios por puesto:** voz, datos, vídeo, alimentación PoE.
3. **Tipo y características del cable**, con su referencia normativa (11801-1 o 50173-1).
4. **Nivel de prestaciones exigido** (clase EA para 10 Gb/s a 100 m).
5. **Requisitos de seguridad:** reacción al fuego, separación de potencia y control de acceso a armarios. Los cables que se instalan en edificios cumplen el Reglamento (UE) 305/2011 de productos de construcción y la UNE-EN 50575; el Reglamento delegado (UE) 2016/364 define las clases de reacción al fuego de los cables (Aca, B1ca, B2ca, Cca, Dca, Eca y Fca): la clase mínima la fija el proyecto de protección contra incendios del edificio [comprobar con el proyecto de cada obra].
6. **Costes del cableado y su instalación**, con manuales de tiempos y precios. La mano de obra se estima por tiempos unitarios:

| Operación | Horas por punto | Puntos | Horas |
| --- | --- | --- | --- |
| Tendido del cable | 0,60 | 260 | 156 |
| Conexionado de los dos extremos | 0,35 | 260 | 91 |
| Certificación | 0,15 | 260 | 39 |
| **Total** | 1,10 | 260 | **286** |

Con un coste horario de 35 euros, son 10 010 euros de mano de obra directa [tiempos y precios ilustrativos; los reales salen de los manuales de tiempos de cada empresa instaladora].

7. **Procedimientos de mantenimiento**, que se detallan en el plan de acción.

### 4.7 Plan de acción

**Condiciones de ejecución y puesta en marcha.** Plazos, ventanas de trabajo (fuera del horario de la oficina), accesos y responsables de cada parte.

```text
Semana            1     2     3     4     5     6
Requisitos      [###]
Viabilidad        [###]
Diseno detallado        [###]
Compra equipos          [#########]
Canalizacion                  [###]
Cableado y fibra                  [###]
Montaje de racks                      [##]
Configuracion                            [##]
Certificacion y entrega                     [##]
```

Las dependencias mandan: no hay cableado sin canalización ni certificación sin configuración, y la compra suele ser el camino crítico.

**Plan de explotación.** Cómo se opera la red una vez entregada:

| Área | Contenido |
| --- | --- |
| Monitorización | Qué se vigila (disponibilidad, tráfico, errores, temperatura del armario) y con qué umbrales de alarma |
| Mantenimiento | Preventivo (limpieza, revisión de latiguillos, baterías del SAI, firmware), correctivo con tiempos de respuesta y evolutivo |
| Gestión de cambios | Petición, aprobación, ventana, plan de marcha atrás y registro |
| Inventario y documentación | Actualizados con cada cambio |
| Informes | Resumen mensual de incidencias, disponibilidad y capacidad |
| Formación | Para quien administra y para los usuarios |
| Renovación | Fechas previstas por ciclo de vida |

**Plan de seguridad del sistema.** Acceso al sistema (identidad, privilegio mínimo, 802.1X y registro) y política de copias de seguridad. La regla **3-2-1** pide tres copias, en dos soportes distintos, una de ellas fuera de la sede. Se fijan el **RPO** (cuántos datos se aceptan perder, p. ej. 24 horas) y el **RTO** (cuánto tarda en volver el servicio, p. ej. 4 horas) y se prueba la restauración, porque una copia que nunca se ha restaurado no es una copia.

**Usuarios del sistema.** Derechos de acceso, áreas de trabajo y recursos disponibles, mejor en una matriz por roles que por personas:

| Rol | Ficheros de su área | Ficheros de dirección | Servidores | Red de invitados |
| --- | --- | --- | --- | --- |
| Dirección | Lectura y escritura | Lectura y escritura | Sin acceso | Sin acceso |
| Administración | Lectura y escritura | Sin acceso | Sin acceso | Sin acceso |
| Soporte técnico | Lectura | Sin acceso | Administración | Sin acceso |
| Invitado | Sin acceso | Sin acceso | Sin acceso | Solo Internet |

Ciclo de vida de una cuenta: alta, cambio de puesto, baja inmediata al salir.

**Referencias de procedimientos y documentación exigida.** El cliente debe recibir: especificaciones de diseño, planos, esquemas, guías de instalación y configuración, informes de certificación, garantías, soporte técnico y la documentación de las aplicaciones instaladas. Sin ella, la red no se entrega.

### 4.8 Desarrollo del proyecto telemático por niveles

El programa de referencia pide desarrollar el proyecto según el modelo de capas, con su referencia normativa.

| Niveles | Qué se decide | Referencias |
| --- | --- | --- |
| Soporte físico | Cableado, canalizaciones, compatibilidad electromagnética, protección contra incendios | ISO/IEC 11801-1, UNE-EN 50173-1, UNE-EN 50174, REBT, RD 513/2017 |
| 1 y 2 (físico y enlace) | Medios, Ethernet, VLAN, Wi-Fi, agregación | IEEE 802.3, 802.1Q, 802.11, 802.1X |
| 3 y 4 (internetworking) | Direccionamiento, enrutamiento, NAT, filtrado | RFC 791, RFC 1918, RFC 2328 (OSPF), RFC 9293 (TCP) |
| 5, 6 y 7 (sistemas y arquitecturas) | Directorio, DNS, DHCP, correo, ficheros, aplicaciones | RFC 1035 (DNS), RFC 2131 (DHCP), RFC 5321 (correo) |
| Servicios finales | Voz, videoconferencia e imagen | Véase abajo |

**Servicios finales.** Cada servicio pide cosas distintas a la red:

| Servicio | Ancho de banda | Sensibilidad | Marca DSCP |
| --- | --- | --- | --- |
| Voz IP (G.711) | 87,2 kb/s por llamada con Ethernet | Retardo, variación del retardo y pérdida | EF (46) |
| Voz IP (G.729) | 31,2 kb/s por llamada | Igual | EF (46) |
| Videoconferencia HD | De 1 a 4 Mb/s por flujo [orientativo] | Retardo y pérdida | AF41 |
| Imagen en banda base y videovigilancia IP | De 2 a 4 Mb/s por cámara en 1080p [orientativo] | Poco al retardo, mucho al caudal continuo | Datos o AF |
| Señalización de voz | Muy bajo | Fiabilidad | CS3 |

```text
G.711, paquetes de 20 ms: 160 bytes de voz + 40 de IP/UDP/RTP + 18 de Ethernet = 218 bytes
   218 x 8 bits / 0,02 s = 87 200 bits por segundo por llamada
25 llamadas simultaneas (20 por ciento de 124 telefonos): 25 x 87,2 = 2 180 kb/s

Camara de 4 Mb/s: 4 000 000 x 86 400 / 8 = 43,2 GB al dia
16 camaras durante 30 dias: 16 x 43,2 x 30 = 20 736 GB, unos 21 TB
```

Para la voz, la recomendación UIT-T G.114 fija un retardo unidireccional de hasta 150 ms para una buena calidad, con variación del retardo y pérdida lo más bajas posible (por debajo de 30 ms y del 1 por ciento como objetivos habituales [orientativos]). Por eso la voz va en su propia VLAN y con prioridad: no es cuestión de ancho de banda sino de que no espere en la cola.

### 4.9 Referencias normativas

| Referencia | Para qué |
| --- | --- |
| UNE 157001:2014 | Estructura formal del proyecto |
| ISO/IEC 11801-1:2017 y UNE-EN 50173-1:2018 | Clases, canales y distancias |
| UNE-EN 50174 y UNE-EN 50346 | Instalación y ensayo |
| RD 346/2011 y Orden ITC/1644/2011 | ICT en edificios |
| RD 842/2002 (REBT) | Baja tensión y protecciones |
| RD 513/2017 | Instalaciones de protección contra incendios |
| Reglamento (UE) 305/2011, Reglamento delegado (UE) 2016/364 y UNE-EN 50575 | Reacción al fuego de los cables |
| Reglamento (UE) 2016/679 y Ley Orgánica 3/2018 | Protección de datos en el diseño |

## 5. Herramientas software

| Herramienta | Qué es | Limitación |
| --- | --- | --- |
| Packet Tracer | Simulador didáctico con equipos Cisco modelados, gratuito con cuenta de Networking Academy | Modelos simplificados: no valida rendimiento real |
| GNS3 | Emula imágenes reales de sistemas operativos de red en máquinas virtuales | Requiere imágenes con licencia y RAM; no mide prestaciones |
| EVE-NG | Emulador multiusuario con cliente web para laboratorios grandes | Consumo alto; ediciones Comunidad y Professional |
| ns-3 | Simulador de eventos discretos para investigación, en C++ o Python | No configura equipos comerciales; curva alta |

Para estudiar, Packet Tracer; para preparar una configuración real, GNS3 o EVE-NG; para medir protocolos, ns-3. En planificación, **GanttProject** es libre, **ProjectLibre** importa ficheros de MS Project y **MS Project** es el estándar de empresa.

## 6. Caso práctico: red departamental de tres plantas

### 6.1 Enunciado y requisitos

Edificio de oficinas con 124 puestos y 12 más en salas. Planta baja: recepción, administración y sala de servidores. Primera: comercial, recursos humanos y dirección. Segunda: soporte técnico y laboratorio. Se pide red cableada con tomas dobles, Wi-Fi corporativo y de invitados, telefonía IP y continuidad.

| Requisito | Valor objetivo |
| --- | --- |
| Puestos y tomas | 124 puestos y 260 tomas (248 más 12 en salas) |
| Puesto | 1 Gb/s; backbone de 10 Gb/s |
| Disponibilidad | Menos de 1 hora de parada al año |
| Seguridad | Autenticación por puerto y VLAN de invitados aislada |

### 6.2 Arquitectura y equipos

```text
                  +------------------------+
                  | Internet: fibra + 4G   |
                  +-----------+------------+
                              |
                  +-----------v------------+
                  | CORTAFUEGOS PERIMETRAL |
                  +-----------+------------+
                              | 10G
             +----------------v----------------+
             | NUCLEO: 2 switches L3 apilados  |
             +--+-------------+-------------+--+
                |2x10G        |2x10G        |2x10G
        +-------v-----+ +-----v-------+ +---v---------+
        | ACCESO PB   | | ACCESO P1   | | ACCESO P2   |
        | 48p + PoE   | | 48p + PoE   | | 48p + PoE   |
        +------+------+ +------+------+ +------+------+
               |               |               |
          puestos y AP    puestos y AP    puestos y AP
```

- **Dos switches de núcleo apilados:** si falla uno, el otro sostiene el servicio.
- **Un switch de acceso por planta:** ninguna tirada pasa de 90 m y un fallo no deja dos plantas sin red.
- **Cortafuegos en el perímetro:** el núcleo conmuta rápido; el cortafuegos inspecciona y hace NAT.
- **Fibra OM4 en el vertical y Cat 6A apantallado en el horizontal:** hay tramos de más de 90 m, el laboratorio tiene equipos de medida y 6A sostiene 10GBASE-T a 100 m.

### 6.3 Direccionamiento y VLAN

Bloque 10.20.0.0/16 para la sede, con VLSM y pasarela en la primera dirección útil.

| VLAN | Nombre | Subred | Máscara | Hosts | Contenido |
| --- | --- | --- | --- | --- | --- |
| 10 | GESTION | 10.20.10.0 | /28 | 14 | Switches y puntos de acceso |
| 20 | ADMIN | 10.20.20.0 | /26 | 62 | 40 puestos (recepción, administración y recursos humanos), impresoras |
| 30 | COMERCIAL | 10.20.30.0 | /26 | 62 | 32 puestos y móviles |
| 40 | SOPORTE | 10.20.40.0 | /26 | 62 | 36 puestos y equipos de prueba |
| 50 | DIRECCION | 10.20.50.0 | /27 | 30 | 6 puestos con reserva |
| 60 | LABORATORIO | 10.20.60.0 | /27 | 30 | 10 puestos y equipos de medida |
| 70 | VOZ | 10.20.70.0 | /24 | 254 | Teléfonos IP, con DHCP propio |
| 80 | WIFI_CORP | 10.20.80.0 | /25 | 126 | Portátiles de empleados |
| 90 | INVITADOS | 10.20.90.0 | /25 | 126 | Solo salida a Internet |
| 99 | SERVIDORES | 10.20.99.0 | /28 | 14 | Ficheros, directorio, impresión |
| 100 | TRANSITO | 10.20.100.0 | /30 | 2 | Núcleo al cortafuegos |

La VLAN 10 necesita doce direcciones, una por switch y punto de acceso, y un /28 da catorce. La 50 va en /27 por la impresora compartida y la 70 en /24 porque cada teléfono consume una. Un solo /24 para el edificio sería más simple y también el error clásico: sin separación no hay política, ni prioridad de voz, ni invitados controlados.

Configuración: troncales 802.1Q entre núcleo y accesos, VLAN nativa distinta de la 1, DHCP con retransmisión al servidor de la VLAN 99, RSTP con el núcleo como raíz y 802.1X con RADIUS, salvo excepción por MAC para impresoras.

### 6.4 Cableado y armarios

| Elemento | Especificación |
| --- | --- |
| Horizontal | Cat 6A F/UTP, 260 tomas, máximo 90 m, ensayo con UNE-EN 50346 |
| Vertical | Fibra OM4 de 8 hilos, 6 enlaces de dos por planta para agregación, conectores LC |
| Armarios | Rack 42U en la sala de servidores y 24U por planta, con panel, switches y regletas |
| Etiquetado y CEM | Código en los dos extremos; bandeja separada de la eléctrica y pantalla a tierra |

### 6.5 Presupuesto orientativo

Precios orientativos de 2026, sin IVA, pendientes de oferta firme.

| Concepto | Cantidad | Unitario (€) | Importe (€) |
| --- | --- | --- | --- |
| Toma Cat 6A certificada, con panel y latiguillos | 260 | 92 | 23 920 |
| Enlace de fibra OM4 de 8 hilos | 6 | 860 | 5 160 |
| Rack 42U en sala de servidores | 1 | 1 250 | 1 250 |
| Rack 24U por planta | 2 | 690 | 1 380 |
| Switch de núcleo capa 3, 24 puertos SFP+ | 2 | 4 200 | 8 400 |
| Switch de acceso 48 puertos GbE PoE+ | 3 | 1 900 | 5 700 |
| Switch de acceso 24 puertos PoE+ | 2 | 1 080 | 2 160 |
| Punto de acceso Wi-Fi 6 con PoE+ | 6 | 320 | 1 920 |
| Cortafuegos con doble WAN | 1 | 3 800 | 3 800 |
| SAI de rack 3 kVA con gestión | 1 | 1 450 | 1 450 |
| Instalación y canalización | 1 | 18 400 | 18 400 |
| Certificación, etiquetado y documentación | 1 | 2 600 | 2 600 |
| Puesta en marcha y formación | 1 | 1 800 | 1 800 |
| **Subtotal** | | | **77 940** |
| Contingencia, 8 por ciento | | | 6 235 |
| **Total** | | | **84 175** |

Unos 679 euros por puesto (84 175 entre 124), con casi dos tercios en cable y mano de obra: ahorrar en categoría es la decisión más cara a diez años. Todos los switches de acceso llevan PoE+ porque hay que alimentar 124 teléfonos y 6 puntos de acceso, 130 puertos en total, y los 192 puertos de acceso cubren los 142 puertos activos con más de un 30 por ciento de reserva.

### 6.6 Planificación

Seis semanas con el camino crítico en la compra: tres de entrega obligan a pedir en la semana dos. La certificación de los 260 enlaces va como anexo, con las curvas de NEXT y pérdida de retorno.

## Perspectiva empresarial

Un proyecto de red lo paga y lo defiende alguien que no es técnico. Esta sección da el vocabulario y los instrumentos con los que se le habla. Las cifras son ilustrativas.

### Del coste a la decisión: tres cifras para dirección

| Cifra | Qué responde | Cómo se calcula |
| --- | --- | --- |
| Inversión total | ¿Cuánto cuesta ponerlo en marcha? | Presupuesto con contingencia (el caso de la sección 6 son 84 175 euros) |
| Coste anual de explotación | ¿Cuánto cuesta mantenerlo? | Soporte, energía, administración, renovación a plazos |
| Retorno | ¿Cuándo se recupera y cuánto gana? | Payback, VAN y TIR (apartado 4.3) |

Un resumen ejecutivo para dirección cabe en una página: el problema en una frase, la solución, el coste, el plazo, el riesgo principal y la decisión que se pide. Todo lo demás va en anexos.

### Gestión de riesgos del proyecto

Un riesgo es algo que puede ocurrir y estropear el plazo, el coste o la calidad. Se ordena por **exposición = probabilidad x impacto**, ambas de 1 a 5.

| Riesgo | Prob. | Impacto | Exposición | Respuesta |
| --- | --- | --- | --- | --- |
| Retraso en la entrega de equipos | 4 | 4 | 16 | Pedir en la semana 2, tener un proveedor alternativo |
| Canalización inviable en un tramo | 2 | 5 | 10 | Visita técnica antes de firmar y reserva de plazo |
| Pérdida de datos en la migración | 2 | 5 | 10 | Copia verificada y ventana con marcha atrás |
| Desvío de presupuesto | 3 | 3 | 9 | Contingencia del 8 por ciento y control de cambios |
| Usuarios sin formación | 3 | 2 | 6 | Sesiones cortas y guía de una página |

Las respuestas son cuatro: **evitar** (cambiar el plan), **mitigar** (reducir probabilidad o impacto), **transferir** (seguro o contrato con penalización) o **aceptar** (con reserva económica). Se empieza por la exposición más alta.

### Compra y contratación

- **Fraccionar o no.** Dividir un proyecto para quedar bajo un umbral de contratación es una práctica vigilada; se justifica por la necesidad, no por la cuantía.
- **Contrato menor.** En el sector público español, la Ley 9/2017 de Contratos del Sector Público permite contratar de forma simplificada importes pequeños (el umbral general es de unos 15 000 euros en servicios y suministros y 40 000 en obras, sin IVA) [artículo 118 del texto consolidado de la Ley 9/2017 en el BOE, comprobado en noviembre de 2026]. Por encima, procedimiento con publicidad y concurrencia.
- **Hitos de pago.** Es habitual ligar los pagos a entregables: una parte al pedir, otra a la entrega de equipos y el resto tras la certificación y la documentación (por ejemplo 30, 50 y 20 por ciento) [orientativo]. Un pago final condicionado a la entrega de planos y certificados es la mejor garantía de que se entreguen.
- **Garantías.** Garantía de los equipos del fabricante y de la instalación del instalador; los sistemas de cableado certificados suelen venir con garantía extendida del fabricante durante muchos años (se pide por escrito la duración [no verificado, depende del fabricante]).
- **Cambios.** Todo cambio de alcance se registra con su coste y su plazo y lo aprueba quien paga. Es la protección más barata contra el sobrecoste.

### Ciclo de vida y renovación

Distinguir entre lo que dura décadas y lo que se renueva en años orienta la inversión:

| Elemento | Vida útil habitual [orientativa] | Criterio de inversión |
| --- | --- | --- |
| Canalizaciones y cableado de cobre | 15 a 20 años | Categoría holgada: se instala una sola vez |
| Fibra de backbone | 20 años o más | Monomodo si hay duda |
| Conmutadores y routers | 5 a 7 años | Sin sobredimensionar; pedir fin de soporte |
| Puntos de acceso Wi-Fi | 4 a 6 años | Previstos en el plan de renovación |
| SAI y baterías | 3 a 5 años las baterías | Presupuesto anual de mantenimiento |

### Cumplimiento: lo que obliga al diseño

El diseño de red decide si un incumplimiento es posible o no. Cuatro decisiones lo concentran: **segmentar** (VLAN y zonas para limitar daños), **cifrar** (lo que sale de la sede y las redes inalámbricas), **registrar** (quién accede a qué y cuándo) y **copiar** (con restauración probada). Con datos personales, el Reglamento (UE) 2016/679 y la Ley Orgánica 3/2018 exigen medidas técnicas adecuadas (artículo 32), y los clientes grandes piden evidencias: documentación, registros y pruebas.

## Tablas de referencia rápida

**Ethernet sobre cobre**

| Denominación | Velocidad | Pares | Distancia | Categoría |
| --- | --- | --- | --- | --- |
| 10BASE-T | 10 Mb/s | 2 | 100 m | Cat 3 |
| 100BASE-TX | 100 Mb/s | 2 | 100 m | Cat 5 |
| 1000BASE-T | 1 Gb/s | 4 | 100 m | Cat 5e |
| 2.5GBASE-T y 5GBASE-T | 2,5 y 5 Gb/s | 4 | 100 m | 5e y Cat 6 |
| 10GBASE-T | 10 Gb/s | 4 | 100 m, 55 m en Cat 6 | Cat 6A |

**Fibra en Ethernet**

| Denominación | Fibra | Alcance |
| --- | --- | --- |
| 1000BASE-SX | Multimodo 850 nm | 550 m en OM2 |
| 1000BASE-LX | Multimodo o monomodo 1310 nm | 550 m y 5 km |
| 10GBASE-SR | Multimodo 850 nm | 300 m en OM3, 400 m en OM4 |
| 10GBASE-LR | Monomodo 1310 nm | 10 km |

**Marcas DSCP habituales**

| Clase | Valor DSCP | Uso |
| --- | --- | --- |
| EF | 46 | Voz |
| AF41 | 34 | Videoconferencia interactiva |
| CS3 | 24 | Señalización de voz y vídeo |
| AF21 | 18 | Datos transaccionales |
| Por defecto | 0 | Resto del tráfico |

**Alimentación por Ethernet**

| Norma | Nombre | Puerto | Dispositivo |
| --- | --- | --- | --- |
| 802.3af | PoE | 15,4 W | 12,95 W |
| 802.3at | PoE+ | 30 W | 25,5 W |
| 802.3bt tipo 3 | PoE++ | 60 W | 51 W |
| 802.3bt tipo 4 | PoE++ | 90 W | 71,3 W |

## Cifras que hay que saber de memoria

- Celda ATM: 53 bytes, 5 de cabecera y 48 de datos.
- DLCI: 10 bits. Identificador de VLAN: 12 bits, 4094 utilizables.
- MAC: 48 bits. Trama: 64 bytes mínimo, 1518 máximo, 1522 con etiqueta.
- Enlace permanente: 90 m. Canal: 100 m, 4 conectores, 10 m de latiguillos.
- Tiempo de ranura a 10 Mb/s: 512 tiempos de bit, 51,2 microsegundos.
- Propagación en cobre: unos 5 ns por metro.
- Categorías: 5e 100 MHz, 6 250 MHz, 6A 500 MHz, 7 600 MHz, 7A 1000 MHz, 8 2000 MHz.
- PoE: 15,4 W, 30 W y 90 W en el puerto según 802.3af, at y bt tipo 4.
- Voz G.711 por Ethernet: 87,2 kb/s por llamada; G.729: 31,2 kb/s.
- Retardo unidireccional de la voz: hasta 150 ms (UIT-T G.114).
- Regla 3-2-1 de copias: 3 copias, 2 soportes, 1 fuera de la sede.
- Calor: 1 kW eléctrico exige 1 kW de refrigeración, unos 3 412 BTU/h por cada kW.
- VAN positivo y TIR mayor que la tasa de descuento: proyecto rentable.
- Exposición de un riesgo: probabilidad por impacto.

## Procedimientos paso a paso

**Documento de requisitos**

1. Entrevistar por separado a dirección, informática y usuarios.
2. Inventariar puestos, aplicaciones críticas y consumos medidos.
3. Escribir cada requisito con identificador, criterio y prioridad, y firmarlo con el cliente.

**Dimensionar tomas y armarios**

1. Contar puestos por planta y multiplicar por dos tomas.
2. Situar un armario por planta o por cada 90 m de recorrido.
3. Comprobar la ruta real de bandeja de cada toma y reservar el 25 por ciento de puertos.

**Segmentar y direccionar**

1. Agrupar por función y política, no por ubicación.
2. Contar hosts por grupo, añadir un 30 por ciento y elegir la máscara más pequeña que los cubra.
3. Reservar rangos para impresoras y equipos de red, y aislar la VLAN de invitados con listas de control de acceso.

**Certificar un enlace de cobre**

1. Configurar en el certificador la norma, la categoría y el tipo de enlace.
2. Conectar el equipo en el panel y el remoto en la toma y lanzar la prueba.
3. Guardar el informe con identificador de enlace para el anexo del proyecto.

**Planificar en GanttProject**

1. Crear el proyecto, fijar la fecha de inicio y dar de alta las tareas con su duración.
2. Enlazar dependencias fin a comienzo y asignar recursos.
3. Marcar el camino crítico y exportar a PDF.

## Errores típicos

1. **"El switch elimina los dominios de difusión".** Falso: los reduce solo con VLAN; los corta el router.
2. **"ATM usa paquetes de longitud variable".** Falso: celdas fijas de 53 bytes; Frame Relay usa tramas variables.
3. **"El CIR es la velocidad máxima".** Falso: es el caudal garantizado; por encima hay ráfagas descartables.
4. **"Cat 6A garantiza 10 Gb/s".** Falso: la categoría es del componente; el enlace debe certificarse como clase EA.
5. **"El canal son 100 m más latiguillos".** Falso: los 100 m los incluyen; el permanente son 90 m.
6. **"Hub y switch dan la misma topología lógica".** Falso: el hub mantiene la difusión.
7. **"La QoS añade ancho de banda".** Falso: reparte el existente y decide a quién se le quita.
8. **"Un dominio IP y un dominio de colisión son lo mismo".** Falso: el de colisión lo corta el puerto del switch; el IP es la subred y coincide casi siempre con el de difusión.
9. **"El payback basta para aprobar un proyecto".** Falso: no tiene en cuenta el valor del dinero en el tiempo ni lo que ocurre después de recuperar; se completa con VAN y TIR.
10. **"RPO y RTO son lo mismo".** Falso: el RPO es cuántos datos se aceptan perder; el RTO es cuánto tiempo se acepta estar parado.
11. **"Una copia en el mismo armario cuenta para la 3-2-1".** Falso: al menos una copia debe estar fuera de la sede.
12. **"La voz necesita mucho ancho de banda".** Falso: unos 87 kb/s por llamada; lo que necesita es poco retardo y poca variación, es decir, prioridad.
13. **"El informe de diagnóstico propone la solución".** Falso: separa síntomas de causas y prioriza; la solución es la propuesta técnica.
14. **"El presupuesto con contingencia del 8 por ciento es un colchón para el cliente".** Falso: es la reserva para riesgos del proyecto y se justifica con la matriz de riesgos.

## Glosario de la unidad

- **ATM:** conmutación de paquetes con celdas fijas de 53 bytes y circuitos virtuales.
- **Canal:** recorrido con latiguillos, 100 m como máximo.
- **CIR:** caudal que el operador garantiza de forma sostenida en Frame Relay.
- **Clase:** prestaciones del enlace montado (D, E, EA, F, FA, I, II).
- **CSMA/CD:** acceso múltiple con escucha de portadora y detección de colisión.
- **DLCI:** identificador de conexión de 10 bits, local por interfaz.
- **Dominio de colisión:** equipos que compiten por el mismo medio.
- **Enlace permanente:** del panel de parcheo a la toma, sin latiguillos.
- **Gantt:** diagrama de barras con tareas, duraciones y dependencias.
- **LLC:** subnivel 802.2 independiente del medio.
- **NEXT:** diafonía en el extremo cercano, el parámetro que más falla en obra.
- **PVC:** circuito virtual permanente del operador.
- **QoS:** clasificación, marcado y encolado para garantizar prestaciones.
- **VLAN:** agrupación lógica de puertos en una misma red de difusión.
- **VLSM:** máscaras de longitud variable, una por subred.
- **Acta:** registro escrito de una entrevista, con fecha, asistentes y acuerdos validados.
- **CPD:** centro de procesos de datos, la sala de servidores y equipos de red.
- **DSCP:** campo de la cabecera IP con el que se marca la clase de servicio.
- **Dominio IP:** conjunto de equipos de una misma subred.
- **Exposición de un riesgo:** probabilidad por impacto, de 1 a 5 cada una.
- **Informe de diagnóstico:** documento que separa síntomas de causas en la red existente y prioriza las acciones.
- **NIC:** tarjeta de interfaz de red.
- **Payback:** tiempo en recuperar la inversión.
- **Plan de explotación:** cómo se opera, mantiene y renueva la red tras la entrega.
- **RPO y RTO:** datos que se aceptan perder y tiempo que se acepta estar parado.
- **TIR y VAN:** tasa que anula el valor actual y valor actual de los flujos del proyecto.

## Para profundizar

- IEEE 802.3, Ethernet: [ieee802.org/3](https://www.ieee802.org/3/)
- IEEE 802.1, conmutación, VLAN y control de acceso: [ieee802.org/1](https://www.ieee802.org/1/)
- IEEE 802.11: [ieee802.org/11](https://www.ieee802.org/11/)
- Real Decreto 346/2011 de ICT: [BOE](https://www.boe.es/buscar/act.php?id=BOE-A-2011-5834)
- Serie I del ITU-T, ATM: [itu.int](https://www.itu.int/rec/T-REC-I)
- GNS3: [gns3.com](https://www.gns3.com/)
- UIT-T G.114, retardo unidireccional: [itu.int](https://www.itu.int/rec/T-REC-G.114)
- BOE, Real Decreto 513/2017: [BOE](https://www.boe.es/buscar/act.php?id=BOE-A-2017-6606)
- BOE, Ley 9/2017 de Contratos del Sector Público: [BOE](https://www.boe.es/buscar/act.php?id=BOE-A-2017-12902)
