---
title: "Proyecto de red · Casos prácticos resueltos"
description: "Casos prácticos resueltos de la unidad Proyecto de red."
section: diseno
unit: proyecto
kind: casos
order: 23
tags:
  - redes
  - proyecto
  - casos
---

# Proyecto de red · Casos prácticos resueltos

> **Cómo usar esto.** Cada caso trae enunciado, solución y una rúbrica de diez puntos para autoevaluarte.
> Resuélvelo primero sin mirar la solución y puntúate. Lo que más enseña es **justificar** cada decisión:
> una respuesta correcta sin razón sirve de poco en un trabajo real.

Los seis casos recorren los temas de la unidad: requisitos y entrevista, viabilidad técnico-económica, diseño de topología y direccionamiento, servicios finales de voz, vídeo e imagen, informe de diagnóstico y cableado con
presupuesto. Complétalos con el [resumen técnico](Proyecto_Tecnico.md).

## Caso 1. Entrevista y documento de requisitos

**Enunciado.** Una gestoría de 18 puestos quiere renovar su red. Tras la primera entrevista tienes
estas notas:

- "Trabajamos con un programa de gestión instalado en un servidor. Si se cae, paramos."
- "Tres personas teletrabajan dos días a la semana."
- "Queremos llegar a 25 personas en tres años."
- "Imprimimos mucho, y queremos que los clientes tengan wifi en la sala de espera."
- "Manejamos datos fiscales de clientes."
- "Hay 25 000 euros de presupuesto y queremos que esté listo en agosto, que hay menos trabajo."

**Se pide.**

1. Redactar al menos siete requisitos medibles (funcionales y no funcionales) con identificador,
   criterio de aceptación y prioridad.
2. Indicar las restricciones del proyecto.
3. Proponer cinco preguntas para la segunda entrevista.

**Solución.**

| ID | Requisito | Criterio de aceptación | Prioridad |
| --- | --- | --- | --- |
| RF-01 | Acceso al programa de gestión | Respuesta en menos de 2 s con 18 usuarios simultáneos | Alta |
| RF-02 | Teletrabajo seguro | VPN para 3 usuarios simultáneos con doble factor | Alta |
| RF-03 | Wi-Fi de visitas aislado | Solo salida a Internet, sin acceso a la red interna | Media |
| RF-04 | Impresión compartida | Cola central, accesible desde todas las VLAN de usuario | Media |
| RNF-01 | Continuidad | Parada máxima anual de 4 horas por fallo de red | Alta |
| RNF-02 | Crecimiento | Puertos y direcciones para 25 puestos sin obra | Media |
| RNF-03 | Protección de datos | Datos cifrados en tránsito y copia diaria con una copia fuera de la sede | Alta |
| RNF-04 | Ejecución | Obra en agosto, fuera del horario de atención | Alta |

**Restricciones:** presupuesto máximo de 25 000 euros, plazo cerrado en agosto, cumplimiento del
Reglamento (UE) 2016/679 por manejar datos de clientes.

**Preguntas para la segunda entrevista (ejemplos válidos):** ¿cuánto pesan los datos y cuánto
crecen al año?; ¿qué horas del día es máximo el uso del programa?; ¿qué contratos de telefonía y de
acceso hay y cuándo vencen?; ¿quién administra hoy la red y qué sabe hacer?; ¿qué ha fallado en el
último año y cuánto costó?

**Rúbrica (10 puntos).** Siete requisitos medibles: 4 puntos (0,5 cada uno si es medible, singular y
verificable). Identificador, criterio y prioridad completos: 2. Restricciones: 2. Preguntas
pertinentes: 2.

**Error típico.** Escribir "la red debe ser rápida y segura": no es verificable.

## Caso 2. Viabilidad técnico-económica con VAN y TIR

**Enunciado.** Una pyme invierte 38 000 euros en renovar su red. Los ahorros esperados, por la
reducción de paradas y de soporte, son de 6 000, 9 000, 11 000, 11 000 y 11 000 euros en los cinco
años siguientes. La tasa de descuento que exige la dirección es del 7 por ciento.

**Se pide.**

1. Calcular el plazo de recuperación (sin descontar).
2. Calcular el VAN a cinco años.
3. Decir si la TIR es mayor o menor que el 7 por ciento, sin calcularla.
4. Repetir el VAN si los ahorros resultan un 30 por ciento menores y comentar.
5. Indicar qué recomendarías a dirección.

**Solución.**

```text
1. Acumulado: 6 000 | 15 000 | 26 000 | 37 000 | 48 000.
   A los 4 anos faltan 1 000; el ano 5 aporta 11 000: payback = 4 + 1 000/11 000 = 4,1 anos.

2. VAN = -38 000 + 6 000/1,07 + 9 000/1,07^2 + 11 000/1,07^3 + 11 000/1,07^4 + 11 000/1,07^5
       = -38 000 + 5 607 + 7 861 + 8 979 + 8 392 + 7 843
       = -38 000 + 38 682 = 682 euros

3. El VAN es positivo con r = 7 por ciento, asi que la TIR (la tasa que lo anula) es mayor
   que 7 por ciento. Calculada: unos 7,6 por ciento.

4. Con ahorros un 30 por ciento menores (4 200, 6 300, 7 700, 7 700, 7 700):
   VAN = -10 922 euros; la TIR es negativa. El proyecto pierde dinero.
```

**Recomendación.** El proyecto es **marginalmente** rentable (VAN de 682 euros sobre 38 000, TIR del
7,6 por ciento frente al 7 exigido) y no resiste una caída del 30 por ciento en los ahorros. Una
dirección prudente no lo aprobaría solo con la rentabilidad: lo justificaría por riesgos que no
aparecen en el flujo (seguridad, cumplimiento, continuidad). Y el técnico debe decir con
franqueza que los ahorros son el punto débil y proponer reducir la inversión o fasearla.

**Rúbrica (10 puntos).** Apartado 1: 2 puntos. Apartado 2: 3. Apartado 3: 1. Apartado 4: 2.
Apartado 5: 2 (razonada, no solo "sí" o "no").

## Caso 3. Diseño de topología, equipos y direccionamiento

**Enunciado.** Una empresa ocupa dos plantas. La primera tiene 30 puestos y una sala de reuniones con
4 tomas; la segunda, 22 puestos y otra sala con 4 tomas. Cada puesto y cada toma de las salas llevan teléfono IP (con el PC
detrás) y se instalan 2 puntos de acceso por planta. Se prevé un 25 por ciento de crecimiento de
puertos. Los grupos de usuarios y sus equipos son: Voz 56, Invitados 40, Wi-Fi corporativa 30,
Comercial 20, Soporte 16, Administración 12, Gestión 8, Servidores 6, Dirección 4 y un enlace de
tránsito entre el núcleo y el cortafuegos. Se dispone del bloque 10.30.0.0/23 y se exige un margen
del 30 por ciento de direcciones libres por grupo.

**Se pide.**

1. Calcular tomas, puertos activos y puertos PoE necesarios por planta y el número de switches.
2. Calcular el presupuesto de potencia PoE de una planta con teléfonos de 5 W y puntos de acceso de
   20 W, y comprobar un switch con presupuesto de 370 W.
3. Asignar un prefijo a cada grupo, ordenándolos de mayor a menor, con red y broadcast.
4. Proponer la topología y justificarla.

**Solución.**

```text
1. Tomas: (30 + 22) puestos x 2 + 8 de salas = 112 tomas
   Puertos activos planta 1: 30 + 4 + 2 AP = 36; con 25 por ciento: 45 -> un switch de 48
   Puertos activos planta 2: 22 + 4 + 2 AP = 28; con 25 por ciento: 35 -> un switch de 48
   Puertos PoE (telefonos y AP): P1 = 34 y P2 = 26. Se eligen switches de 48 puertos PoE+.

2. Planta 1: 34 telefonos x 5 W = 170 W (30 de puestos mas 4 de sala)
              2 AP x 20 W = 40 W   -> total 210 W
   210 W < 370 W: el presupuesto del switch es suficiente.
```

| Grupo | Hosts | Con 30 por ciento | Más red y broadcast | Prefijo | Dirección |
| --- | --- | --- | --- | --- | --- |
| Voz | 56 | 73 | 75 | /25 | 10.30.0.0/25 (.1 a .126, bc .127) |
| Invitados | 40 | 52 | 54 | /26 | 10.30.0.128/26 (.129 a .190, bc .191) |
| Wi-Fi corporativa | 30 | 39 | 41 | /26 | 10.30.0.192/26 (.193 a .254, bc .255) |
| Comercial | 20 | 26 | 28 | /27 | 10.30.1.0/27 (.1 a .30, bc .31) |
| Soporte | 16 | 21 | 23 | /27 | 10.30.1.32/27 (.33 a .62, bc .63) |
| Administración | 12 | 16 | 18 | /27 | 10.30.1.64/27 (.65 a .94, bc .95) |
| Gestión | 8 | 11 | 13 | /28 | 10.30.1.96/28 (.97 a .110, bc .111) |
| Servidores | 6 | 8 | 10 | /28 | 10.30.1.112/28 (.113 a .126, bc .127) |
| Dirección | 4 | 6 | 8 | /29 | 10.30.1.128/29 (.129 a .134, bc .135) |
| Tránsito | 2 | 2 | 4 | /30 | 10.30.1.136/30 (.137 y .138, bc .139) |

Quedan libres de 10.30.1.140 a 10.30.1.255 para futuras redes.

**Topología.** Estrella extendida de dos niveles: un switch de acceso por planta conectado al núcleo
(en una empresa pequeña, el núcleo puede ser un par de switches de capa 3, o uno con un segundo
de reserva) y un cortafuegos perimetral con doble salida a Internet. Se justifica porque ninguna
tirada pasa de 90 m, un fallo de planta no tumba la otra y se cumple el requisito de crecimiento.
La voz va en su VLAN con prioridad y los invitados, aislados.

**Rúbrica (10 puntos).** Apartado 1: 2 puntos. Apartado 2: 2. Apartado 3: 4 (0,4 por cada grupo).
Apartado 4: 2.

**Errores típicos.** Dar un único /24 a todo ("más simple": sin separación no hay política); olvidar
el margen del 30 por ciento; contar los teléfonos y los PC como dos puertos, cuando el PC cuelga del
teléfono.

## Caso 4. Dimensionar los servicios finales

**Enunciado.** Una sede tiene 80 teléfonos IP con el códec G.711 (218 bytes por paquete cada 20
ms, con la cabecera de Ethernet), de los que el 15 por ciento llama a la vez en hora punta hacia el
exterior. Hay 6 salas de videoconferencia en HD a 3 Mb/s por flujo, usadas a la vez como máximo. Y
12 cámaras de videovigilancia IP en 1080p a 3 Mb/s, que graban 30 días en el local.

**Se pide.**

1. Ancho de banda de la voz externa con G.711 y con G.729 (31,2 kb/s por llamada).
2. Ancho de banda de subida necesario hacia el operador para voz y vídeo, con 30 por ciento de margen.
3. Almacenamiento de las cámaras en 30 días.
4. Marcado DSCP de cada servicio.

**Solución.**

```text
1. Llamadas simultaneas: 80 x 0,15 = 12
   G.711: 218 x 8 / 0,02 = 87,2 kb/s por llamada -> 12 x 87,2 = 1 046 kb/s (1,05 Mb/s)
   G.729: 12 x 31,2 = 374 kb/s (0,37 Mb/s)

2. Subida = voz G.711 1,05 + video 6 x 3 = 18  ->  19,05 Mb/s
   Con 30 por ciento de margen: 19,05 x 1,3 = 24,8 Mb/s.
   Hace falta un acceso con al menos 25 Mb/s de subida garantizados (CIR, no solo PIR).

3. Una camara: 3 000 000 x 86 400 / 8 = 32,4 GB al dia
   12 camaras x 30 dias: 12 x 32,4 x 30 = 11 664 GB, unos 11,7 TB
   Con 20 por ciento de reserva: unos 14 TB
```

| Servicio | DSCP |
| --- | --- |
| Voz | EF (46) |
| Señalización de voz | CS3 (24) |
| Videoconferencia | AF41 (34) |
| Videovigilancia | Valor por defecto (0) o una clase de datos |
| Resto | Valor por defecto (0) |

**Observación.** Las cámaras no salen a Internet (se graban en local), así que no cuentan en la
subida. La voz pesa poco (1 Mb/s) pero necesita prioridad: lo crítico es el retardo, no el caudal.

**Rúbrica (10 puntos).** Apartado 1: 3 puntos. Apartado 2: 3. Apartado 3: 2. Apartado 4: 2.

## Caso 5. Informe de diagnóstico

**Enunciado.** Visitas una oficina de 60 puestos y anotas:

1. Una sola red /22 con 600 direcciones asignadas, incluida la de los invitados.
2. Un switch de 24 puertos en un cuarto compartido con la limpieza, sin SAI.
3. Cableado de hace 15 años, sin etiquetas ni informes de certificación; algunos tramos pasan de 100 m.
4. El router es del operador y nadie conoce la contraseña de administración.
5. Copias de seguridad en un disco USB conectado al servidor, que nunca se han restaurado.
6. Los usuarios dicen que "la red va lenta" a media mañana.

**Se pide.** Ordenar las observaciones en síntomas y causas, valorar cada riesgo (probabilidad por
impacto, de 1 a 5) y proponer recomendaciones priorizadas.

**Solución.**

| Obs. | Tipo | Hallazgo | Prob. | Impacto | Exposición | Recomendación |
| --- | --- | --- | --- | --- | --- | --- |
| 6 | Síntoma | "La red va lenta" | n/a | n/a | n/a | Medir antes de actuar |
| 1 | Causa | Difusión alta y sin separación | 5 | 3 | 15 | VLAN y subredes por función; aislar invitados |
| 5 | Causa y riesgo | Copia nunca restaurada, en el propio servidor | 3 | 5 | 15 | Regla 3-2-1 y prueba de restauración trimestral |
| 2 | Riesgo | Sin SAI ni armario | 4 | 4 | 16 | SAI con gestión y armario cerrado |
| 4 | Riesgo | Contraseña perdida del router | 2 | 4 | 8 | Recuperar o sustituir; guardar credenciales |
| 3 | Causa | Cableado fuera de norma y sin documentar | 3 | 3 | 9 | Certificar; recablear tramos de más de 90 m |

Prioridad: **urgente** (en dos semanas): SAI y copias (exposición 16 y 15 en riesgo de pérdida).
**Corto plazo** (tres meses): segmentación y credenciales. **Medio plazo**: recableado y
certificación, con la renovación de equipos.

**Qué no hace el informe.** No elige marcas ni modelos: eso es la propuesta técnica.

**Rúbrica (10 puntos).** Separar síntomas de causas: 3 puntos. Exposición bien calculada: 3.
Recomendaciones priorizadas: 3. Distinguir informe de propuesta: 1.

## Caso 6. Cableado y presupuesto de obra

**Enunciado.** Para el edificio del caso 3 (112 tomas) se mide en obra el recorrido más largo de
cada armario: planta 1, 78 m; planta 2, 85 m y un tramo de 92 m hasta la sala de reuniones del
extremo. Se estima 1,10 horas por punto (tendido, conexionado y certificación), 35 euros la hora,
46 euros de material por punto y un 8 por ciento de contingencia.

**Se pide.**

1. Decidir qué hacer con el tramo de 92 m.
2. Calcular horas y coste de mano de obra, de material y el total con contingencia.
3. Indicar qué documentación debe recibir el cliente y cómo condicionarías el último pago.

**Solución.**

```text
1. El enlace permanente no puede pasar de 90 m. Los 92 m incumplen la norma, aunque funcionen
   de momento. Opciones: reubicar el armario o la sala, anadir un armario intermedio con
   un switch pequeno, o llevar fibra a ese extremo. Se elige la mas barata que cumpla.

2. Horas = 112 x 1,10 = 123,2 h        Mano de obra = 123,2 x 35 = 4 312 euros
   Material = 112 x 46 = 5 152 euros
   Subtotal = 4 312 + 5 152 = 9 464 euros
   Contingencia 8 por ciento = 757 euros   Total = 10 221 euros
```

3. Documentación: planos con el recorrido y el etiquetado, informes de certificación de los 112
   enlaces (con las curvas de NEXT y pérdida de retorno), esquemas de los armarios y de las VLAN,
   garantías y la guía de operación. Condicionar el último pago (por ejemplo el 20 por ciento) a la
   entrega de esa documentación y a que los informes certifiquen todos los enlaces con resultado
   correcto.

**Rúbrica (10 puntos).** Apartado 1: 3 puntos (norma, opciones, elección). Apartado 2: 4. Apartado
3: 3.

## Autocorrección

| Caso | Tu nota | Qué repasar si fallas |
| --- | --- | --- |
| 1. Requisitos | | Secciones 4.2 y 4.5 |
| 2. VAN y TIR | | Sección 4.3 |
| 3. Diseño y VLSM | | Secciones 2.7 y 6.3 y el resumen de la unidad «Mercado de comunicaciones» |
| 4. Servicios finales | | Sección 4.8 |
| 5. Diagnóstico | | Sección 4.4 y perspectiva empresarial |
| 6. Cableado | | Secciones 3.4 y 4.6 |
