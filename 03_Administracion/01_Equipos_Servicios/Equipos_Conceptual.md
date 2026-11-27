---
title: "Equipos de interconexión y servicios de red"
description: "Resumen conceptual de la unidad Equipos y servicios de red."
section: administracion
unit: equipos
kind: conceptual
order: 61
tags:
  - redes
  - equipos
  - conceptual
  - servicios
  - vlan
  - encaminamiento
---

# Equipos de interconexión y servicios de red

> **En una frase.** Una red se sostiene sobre tres decisiones que se repiten a toda escala: quién tiene dirección, por dónde sale el tráfico y quién traduce los nombres; aquí se aprenden con equipos concretos.

## Por qué existe este tema

Un aula con veinte ordenadores enchufados a un conmutador funciona sola. El problema aparece cuando hay dos aulas, cuando hay que salir a Internet o cuando alguien pregunta por qué la impresora contesta y el servidor de matrículas no. En ese momento la red deja de ser un cable y se convierte en un conjunto de decisiones: qué direcciones se reparten, quién las reparte, quién traduce los nombres y por dónde sale el tráfico.

La unidad anterior explicaba los protocolos como producto: qué es TCP sobre IP, qué ofrece cada servicio. Aquí se baja al taller. El técnico no diseña protocolos: configura servidores, escribe reglas, etiqueta puertos y comprueba que todo responde, con tres herramientas viejas y suficientes: un fichero de configuración, un comando y una verificación.

Los fallos de red casi nunca son del cable. Son una puerta cerrada, un DNS que no reenvía, una reserva de DHCP con una MAC repetida o una VLAN que nadie declaró en el troncal. Diagnosticar eso exige tener el mapa completo en la cabeza: qué hace cada equipo, en qué capa lo hace y con qué comando se comprueba.

## El mapa

De abajo arriba: el medio y los equipos que lo trocean, la dirección que identifica, el puerto que identifica el servicio y los servicios que evitan recordar números.

```text
   nombres     DNS  .  DHCP  .  proxy  .  NTP  .  SMTP
                  |        |         |        |
                  v        v         v        v
   +--------------------------------------------------+
   |  socket = direccion IP + puerto                  |
   |  TCP con conexion      /      UDP sin conexion   |
   +--------------------------------------------------+
                  |
                  v
   +--------------------------------------------------+
   |  IPv4 + mascara + ARP + ICMP + NAT               |
   +--------------------------------------------------+
                  |
                  v
   +--------------------------------------------------+
   |  trama Ethernet + etiqueta 802.1Q + 802.11       |
   +--------------------------------------------------+
                  |
                  v
   hub  ->  puente  ->  conmutador  ->  router
```

## Los conceptos, uno a uno

### 1. La encapsulación: sobres dentro de sobres

**La intuición.** Escribes una carta, la metes en un sobre y Correos mete el sobre en un saco con la etiqueta de la ciudad. El cartero no lee la carta: lee el saco.

**Lo formal.** Cada capa añade su cabecera: la aplicación los datos, el transporte los puertos, la red las direcciones y el enlace las MAC, el tipo y el CRC. Una trama Ethernet ocupa entre 64 y 1 518 bytes, con 1 500 de carga IP como unidad máxima de transmisión; la etiqueta 802.1Q añade 4 bytes.

**Un ejemplo.** Un `GET /notas` de 200 bytes viaja con 20 de TCP, 20 de IP y 18 de Ethernet: 258 bytes en el cable para 200 útiles. Con un fichero de un megabyte, la sobrecarga baja del 5 por ciento.

### 2. La dirección y el puerto: el edificio y la puerta

**La intuición.** La IP es la dirección postal del edificio; el puerto es el número de puerta. Al edificio le llega todo, pero cada paquete lleva escrito a qué puerta sube.

**Lo formal.** Dirección, puerto y protocolo de transporte forman el socket. Los puertos se reparten en conocidos (0 a 1023), registrados (1024 a 49151) y efímeros (49152 a 65535). Una conexión se identifica por la cuádrupla origen, puerto origen, destino y puerto destino. La máscara contigua separa red y host: todo a cero es la dirección de red, todo a uno la de difusión.

**Un ejemplo.** `192.168.1.20` con máscara `255.255.255.192` vive en la red `192.168.1.0/26`. El bloque tiene 64 direcciones: la `.0` de red, la `.63` de difusión y 62 útiles, de la `.1` a la `.62`. Si el vecino usa `/24`, están en redes distintas aunque se vean los cables.

### 3. ARP: preguntar en voz alta quién es quién

**La intuición.** Llegas a una urbanización con el nombre del destinatario pero sin saber en qué portal vive. Preguntas a voces en la plaza y solo contesta el aludido.

**Lo formal.** ARP resuelve una IPv4 en una MAC dentro del mismo dominio de difusión: la petición va a `ff:ff:ff:ff:ff:ff` y la respuesta vuelve en unicast, guardada en una tabla con caducidad. ICMP es el otro apoyo: avisos de destino inalcanzable (tipo 3), petición de eco (tipo 8) y respuesta (tipo 0).

**Un ejemplo.** Un PC `192.168.1.20/24` quiere hablar con `192.168.1.1`, ve que están en la misma red, no tiene la MAC y pregunta. Si el destino fuera `10.0.0.5`, no preguntaría por él: preguntaría por la MAC de su puerta de enlace.

### 4. NAT: muchos dentro, una sola cara fuera

**La intuición.** Una oficina con una línea telefónica y veinte empleados. La centralita marca con el número de la empresa, apunta quién llamó y pasa la respuesta al teléfono que toca.

**Lo formal.** NAT reescribe direcciones en la cabecera IP. Es estático con correspondencia fija uno a uno, útil para publicar un servidor; es dinámico cuando toma una dirección de un grupo; es PAT o NAT con sobrecarga cuando además reescribe el puerto de origen, y entonces miles de hosts comparten una sola dirección pública.

**Un ejemplo.** Cuarenta equipos de `192.168.1.0/24` navegando por una única dirección pública. Cada conexión sale con un puerto de origen distinto y su entrada en la tabla de estados; cuando vuelve un paquete, el puerto dice a quién devolverlo.

### 5. DNS y DHCP: los dos servicios que nadie ve

**La intuición.** El DNS es la agenda del móvil: nadie marca números, se marcan nombres, y alguien mantiene la agenda. El DHCP es la recepción de un hotel: llegas, dices tu nombre y te dan una llave con fecha de salida.

**Lo formal.** El DNS es una base jerárquica y distribuida: raíz, dominios de primer nivel, de segundo y zonas locales. El primario es la fuente de verdad de su zona, el secundario la copia y el de caché reenvía sin zona propia. El DHCP usa cuatro mensajes, Discover, Offer, Request y Acknowledge, entrega una concesión con tiempo de vida y reserva direcciones por MAC; escucha en el 67 y el cliente responde en el 68.

**Un ejemplo.** Un portátil arranca, recibe `192.168.1.134` por ocho horas y los DNS `.10` y `.11`. Al pedir `www.aula.local`, pregunta al `.10`, que reenvía si no tiene caché y guarda el resultado el tiempo del TTL. Al irse el portátil, la concesión sigue viva hasta caducar: por eso el rango se dimensiona contando invitados.

### 6. VLAN: tabiques dentro de la misma nave

**La intuición.** Una nave diáfana alquilada a dos empresas. Se levantan tabiques sin mover las paredes: la nave sigue siendo una, pero nadie de un lado oye al del otro.

**Lo formal.** Una VLAN es un dominio de difusión lógico: cada puerto se asigna a una y las tramas no cruzan a otra sin un router o un conmutador de capa 3. El enlace que transporta varias se llama troncal y usa etiquetas 802.1Q de 4 bytes con 12 bits de identificador, es decir 4 094 VLAN útiles. La nativa viaja sin etiquetar.

**Un ejemplo.** Un switch de 24 puertos: del 1 al 12 a la VLAN 10 de alumnos, del 13 al 20 a la 20 de profesores, del 21 al 22 a la 30 de administración y el 24 como troncal. Un alumno puede inundar su VLAN sin que el profesor lo note. Wi-Fi hereda el problema: el aire es compartido y cada SSID es, en la práctica, otra VLAN.

### 7. La tabla de rutas: el mapa de carreteras

**La intuición.** Un camionero no conoce cada calle del país: en cada cruce mira la señal que dice "Madrid por la A-4" y sigue.

**Lo formal.** La tabla asocia red de destino, máscara, puerta de enlace, interfaz y métrica, y se consulta por coincidencia más larga: entre dos rutas que encajan gana la de máscara más específica. La ruta por defecto es la de máscara cero y solo se usa si no hay otra. Las rutas son estáticas o aprendidas por RIP, OSPF o BGP.

**Un ejemplo.** Un router con `192.168.1.0/24` conectada, una estática `10.0.0.0/8` por la segunda interfaz y la ruta por defecto por la primera. `10.5.5.5` encaja en las dos primeras y gana la `/8`; `8.8.8.8` no encaja en ninguna y sale por defecto. Quitar esa ruta deja la red sin salida sin que se caiga un solo cable.

## Las confusiones que cuestan puntos

**Conmutar frente a encaminar.** El conmutador mueve tramas dentro de la misma red con MAC; el router mueve paquetes entre redes con IP. Si el destino está fuera de la máscara, no hay conmutación que lo resuelva.

**Hub frente a switch.** El hub repite a todos los puertos y comparte dominio de colisión; el switch aprende MAC y da un dominio de colisión por puerto, pero mantiene uno de difusión salvo que haya VLAN.

**NAT frente a PAT.** NAT traduce direcciones; PAT traduce direcciones y puertos, y es lo que permite que cientos de equipos salgan por una IP pública. Todo PAT es NAT, no al revés.

**Proxy frente a cortafuegos.** El proxy entiende la aplicación y guarda copias; el cortafuegos filtra por dirección, puerto y estado. Un proxy sin reglas no es un cortafuegos, y un cortafuegos no acelera nada.

**Primario frente a caché.** El primario tiene la zona y es autoritativo; el de caché no tiene zona y reenvía. Editar la zona en el de caché no cambia nada.

**Estático frente a reserva.** La asignación estática se configura en el cliente o fuera del rango; la reserva se configura en el servidor y ata una dirección del rango a una MAC, y sigue necesitando servidor vivo.

**VLAN frente a subred.** La VLAN segmenta en capa 2; la subred en capa 3. Lo normal es una subred por VLAN, pero son decisiones independientes que se pueden desalinear.

## Tres ideas que completan el cuadro

**Las cabeceras son el sobre.** Cada capa pone su sobre con lo mínimo que necesita su vecino para entregar. IP escribe de dónde viene el paquete, a dónde va, cuántos saltos le quedan y qué lleva dentro. TCP escribe en qué puerto entrega y cuenta los bytes para poder confirmarlos. Leer una cabecera campo a campo es leer ese sobre, y hace que muchos fallos dejen de ser misteriosos: un paquete que muere es un TTL que llegó a cero, y una conexión que se atasca es una ventana que llegó a cero.

**Varias vías no suman velocidad por conexión.** Un troncal y una agregación suenan parecido y no lo son. El troncal mete varias redes virtuales por el mismo cable. La agregación junta varios cables en uno lógico. Pero cada conversación va siempre por el mismo cable de la agregación, así que cuatro cables de un gigabit dan cuatro en conjunto y uno por conexión. Es como una autopista de cuatro carriles: cabe más tráfico, pero cada coche no va más rápido.

**Lo invisible es lo que más importa.** El DNS y el DHCP no se ven mientras funcionan, y cuando fallan parece que se ha caído todo, aunque los cables estén perfectos. Por eso se duplican, se documentan y se vigilan antes que casi cualquier otra cosa. Y segmentar con redes virtuales no es un adorno técnico: es decidir de antemano qué pasa si alguien entra por donde no debía.

## Conexiones

Esta unidad cierra el arco que abrió [Análisis del mercado de productos de comunicaciones](../../01_Diseno/01_Mercado_Comunicaciones/README.md), donde los protocolos se estudiaron como producto y servicio: allí se aprendió qué ofrece un operador y qué significa una dirección; aquí se configura. Si allí la pregunta era qué se contrata, ahora es cómo se monta.

La unidad siguiente, [Gestión de redes](../02_Gestion_Redes/README.md), recoge el testigo: SNMP y la monitorización necesitan un direccionamiento y unos servicios bien puestos, porque no se puede vigilar lo que no se sabe nombrar. Y [Incidencias](../03_Incidencias/README.md) es donde estos comandos se usan con prisa y con un usuario esperando.

Hacia atrás, esto se apoya en [Proyecto de red](../../01_Diseno/02_Proyecto_Red/README.md), que fijó el direccionamiento y el cableado. El vocabulario común está en el [Glosario](../../00_Indice/Glosario.md).

## Autoevaluación

1. ¿Qué añade cada capa al paquete que recibe de la superior?
2. ¿Cuántos hosts útiles tiene `192.168.10.32/27` y cuál es su difusión?
3. ¿Por qué ARP solo funciona dentro del mismo dominio de difusión?
4. Explica con un ejemplo la diferencia entre NAT estático y PAT.
5. ¿Qué distingue a un DNS primario, uno secundario y uno de caché?
6. ¿Para qué sirve el SOA y qué significa su número de serie?
7. Un cliente tiene `169.254.18.7`. ¿Qué ha pasado?
8. ¿Qué mensajes intercambia DHCP y en qué puertos?
9. ¿Qué tres modos de conmutación hay y cuál no comprueba el CRC?
10. ¿Qué hace el Spanning Tree y qué pasaría sin él?
11. ¿Qué significa que una VLAN sea nativa en un troncal?
12. ¿Por qué gana una `/24` frente a una `/16` si las dos encajan?
13. En una cabecera IPv4, ¿qué ocurre cuando el TTL llega a cero y quién avisa?
14. ¿En qué se diferencian un troncal y una agregación de enlaces? ¿Cuánta velocidad tiene una sola conexión en cuatro enlaces de un gigabit agregados?
15. Una red de invitados tiene hasta 120 dispositivos a la vez. ¿Basta una `/25`? Justifica con el margen del treinta por ciento.

## Claves

1. Puertos el transporte, direcciones la red, MAC y CRC el enlace.
2. Tiene 32 direcciones, 30 útiles; difunde en `192.168.10.63` y reparte de `.33` a `.62`.
3. Porque la petición es de difusión y el router no la propaga: ARP resuelve el siguiente salto.
4. El estático mantiene una correspondencia uno a uno para publicar un servidor; el PAT comparte una IP pública cambiando también el puerto.
5. El primario es la fuente de verdad, el secundario copia y el de caché reenvía guardando el resultado.
6. Identifica la zona y sus tiempos; el número de serie debe subir en cada cambio para que el secundario detecte la versión nueva.
7. No obtuvo concesión y se autoconfiguró con una link-local. Se mira el servidor, la VLAN del puerto y el relay.
8. Discover, Offer, Request y Acknowledge, con el servidor en el 67 y el cliente en el 68.
9. Cut-through, store-and-forward y fragment-free; el cut-through reenvía sin comprobar el CRC.
10. Evita bucles de capa 2 eligiendo raíz y bloqueando redundantes; sin él una difusión daría vueltas hasta tumbar la red.
11. Que sus tramas cruzan el troncal sin etiqueta, como en un puerto de acceso, y debe coincidir en los dos extremos.
12. Porque se aplica la coincidencia más larga: la máscara más específica desplaza a la general.
13. El router descarta el paquete y devuelve un mensaje ICMP de tiempo excedido (tipo 11) al origen; es lo que usa traceroute.
14. El troncal lleva varias VLAN por un enlace; la agregación une varios enlaces en uno lógico. Una conexión sola usa un único enlace: un gigabit.
15. No: 120 con un treinta por ciento más son 156 direcciones y una `/25` da 126 útiles. Hace falta una `/24`.
