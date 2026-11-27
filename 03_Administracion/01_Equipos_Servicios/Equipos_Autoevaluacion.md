---
title: "Equipos y servicios de red · Autoevaluación"
description: "Autoevaluación de la unidad Equipos y servicios de red."
section: administracion
unit: equipos
kind: autoevaluacion
order: 64
tags:
  - redes
  - equipos
---

# Equipos y servicios de red · Autoevaluación

> **Cómo usarlo.** Contesta sin apuntes, de diez en diez, y corrige con las claves. Lee **todas** las
> explicaciones, también las de las preguntas que acertaste: los distractores son los errores más habituales
> y lo que más enseña.

Repasa con el [resumen técnico](Equipos_Tecnico.md) y los [casos](Equipos_Casos.md).

## TCP/IP y direccionamiento

**1.** IP es un protocolo:

- a) orientado a conexión y confiable
- b) con acuses y retransmisión
- c) que ordena los segmentos
- d) sin conexión y no confiable

**2.** El campo TTL de la cabecera IPv4:

- a) indica el tamaño de la cabecera
- b) contiene la dirección de destino
- c) se reduce en uno en cada router y al llegar a cero el paquete se descarta
- d) cuenta los bytes del segmento

**3.** El campo protocolo de una cabecera IP vale 6 cuando lleva:

- a) UDP
- b) TCP
- c) ICMP
- d) OSPF

**4.** La longitud mínima de la cabecera IPv4 y de la TCP es, en cada caso:

- a) 20 bytes
- b) 8 bytes
- c) 40 bytes
- d) 60 bytes

**5.** En el saludo en tres pasos de TCP, el servidor responde con:

- a) solo SYN
- b) FIN
- c) RST
- d) SYN y ACK

**6.** RARP se utilizaba para:

- a) obtener la MAC a partir de la IP
- b) traducir nombres
- c) obtener la dirección IP a partir de la dirección física
- d) repartir rangos con concesión

**7.** La máscara /27 deja de hosts útiles:

- a) 32
- b) 30
- c) 27
- d) 62

**8.** Para 500 equipos hace falta como mínimo un prefijo:

- a) /23
- b) /24
- c) /22
- d) /25

**9.** Un equipo que muestra 169.254.12.7 indica que:

- a) tiene IP pública
- b) está en una red privada de clase B
- c) usa NAT
- d) no ha obtenido dirección por DHCP

**10.** El multicast IPv4 utiliza el rango:

- a) 192.168.0.0/16
- b) 169.254.0.0/16
- c) 224.0.0.0/4
- d) 127.0.0.0/8


## NAT, DNS y DHCP

**11.** La regla de iptables que cambia el destino de un paquete entrante para publicar un servidor va en:

- a) la cadena POSTROUTING
- b) la cadena PREROUTING de la tabla nat
- c) la tabla filter, cadena OUTPUT
- d) la tabla mangle, cadena INPUT

**12.** El MASQUERADE se aplica en:

- a) la cadena POSTROUTING de la tabla nat
- b) la cadena PREROUTING
- c) la cadena INPUT
- d) la cadena FORWARD

**13.** Sin net.ipv4.ip_forward=1 en una pasarela Linux:

- a) el NAT funciona igual
- b) solo falla el DNS
- c) solo falla el DHCP
- d) las reglas de NAT no sirven: el paquete no se reenvía

**14.** El tipo de NAT que comparte una dirección pública entre muchos equipos usando puertos es:

- a) NAT estático
- b) NAT inverso solamente
- c) PAT o sobrecarga
- d) NAT sin traducción

**15.** El registro DNS que da el servidor de correo de un dominio es:

- a) A
- b) MX
- c) NS
- d) PTR

**16.** Un CNAME:

- a) es un alias que apunta a otro nombre
- b) apunta a una dirección IP
- c) indica el servidor de correo
- d) sirve para la resolución inversa

**17.** El número de serie del SOA debe subirse para que:

- a) el cliente actualice su caché
- b) funcione el DNS inverso
- c) se cambie el TTL
- d) el servidor secundario copie la zona

**18.** La resolución inversa se hace con registros:

- a) A en la zona directa
- b) MX en la zona inversa
- c) PTR en una zona in-addr.arpa
- d) SOA en el cliente

**19.** Los mensajes DHCP, en orden, son:

- a) Request, Offer, Discover y Ack
- b) Discover, Offer, Request y Acknowledge
- c) Hello, Offer, Ack y Bye
- d) Discover, Ack, Offer y Request

**20.** Para que el DHCP llegue a otra red a través de un router se configura:

- a) un agente de retransmisión (relay o ip helper-address)
- b) una ruta estática
- c) un NAT estático
- d) una ACL

**21.** Un proxy transparente se distingue del explícito en que:

- a) necesita configurar el navegador
- b) no puede cachear
- c) solo funciona con FTP
- d) no requiere configurar los clientes, porque se intercepta el tráfico


## Conmutación y VLAN

**22.** Un conmutador de 24 puertos, sin VLAN, con todos conectados, crea:

- a) 1 de colisión y 24 de difusión
- b) 24 de cada tipo
- c) 24 dominios de colisión y 1 de difusión
- d) 1 de cada tipo

**23.** El modo de conmutación que reenvía tras leer solo la dirección MAC de destino es:

- a) store-and-forward
- b) cut-through
- c) fragment-free
- d) ninguno

**24.** El conmutador, ante una trama de destino desconocido, la:

- a) inunda por todos los puertos salvo el de entrada
- b) descarta
- c) envía al router
- d) devuelve al origen

**25.** Un puente remoto:

- a) divide una red en VLAN
- b) sustituye al router de salida
- c) solo sirve para Wi-Fi
- d) une dos redes locales a través de un enlace de área extensa

**26.** El Spanning Tree evita:

- a) los bucles de nivel 3
- b) la caída del DNS
- c) los bucles de nivel 2
- d) las colisiones

**27.** En una VLAN agrupada por puertos, el puerto de acceso:

- a) lleva varias VLAN etiquetadas
- b) lleva tráfico sin etiquetar de una sola VLAN
- c) no pertenece a ninguna VLAN
- d) solo conecta routers

**28.** Una VLAN dinámica se asigna según:

- a) la MAC o la identidad (802.1X) de quien se conecta
- b) el puerto fijado a mano
- c) la IP del router
- d) el cable usado

**29.** La agregación de enlaces (LACP) se diferencia del troncal en que:

- a) lleva varias VLAN por un enlace
- b) elimina el Spanning Tree
- c) aumenta la velocidad de cada conexión
- d) une varios enlaces físicos en uno lógico

**30.** Cuatro enlaces de 1 Gb/s agregados dan, para una sola conexión:

- a) 4 Gb/s
- b) 2 Gb/s
- c) 1 Gb/s
- d) 8 Gb/s

**31.** Si la VLAN nativa de un troncal no coincide en los dos extremos:

- a) no pasa nada
- b) puede haber fugas entre VLAN
- c) se cae el DNS
- d) se duplica la velocidad

**32.** La defensa contra el VLAN hopping incluye:

- a) apagar la negociación de troncal y usar una nativa sin uso
- b) activar DTP en todos los puertos
- c) usar la VLAN 1 para todos
- d) permitir todas las VLAN en el troncal


## Wi-Fi y encaminamiento

**33.** El estándar Wi-Fi 6 es:

- a) 802.11ac
- b) 802.11n
- c) 802.11be
- d) 802.11ax

**34.** Una buena práctica de seguridad en una red Wi-Fi corporativa es:

- a) ocultar el SSID
- b) filtrar solo por MAC
- c) usar WPA3 o WPA2 con AES y autenticación 802.1X
- d) activar WPS

**35.** Un gemelo malvado (evil twin) es:

- a) un punto de acceso duplicado de respaldo
- b) un punto de acceso falso que imita el nombre de la red
- c) un cable cruzado
- d) un tipo de VLAN

**36.** La distancia administrativa sirve para:

- a) elegir entre rutas de protocolos distintos
- b) medir el retardo
- c) contar saltos
- d) limitar el ancho de banda

**37.** En una tabla con 0.0.0.0/0, 192.168.0.0/16 y 192.168.2.0/24, el destino 192.168.2.55 sale por:

- a) la ruta por defecto
- b) la 192.168.0.0/16
- c) ninguna
- d) la ruta 192.168.2.0/24, por ser la coincidencia más larga

**38.** Las redes 192.168.0.0/24 a 192.168.3.0/24 se resumen en:

- a) 192.168.0.0/23
- b) 192.168.0.0/24
- c) 192.168.0.0/22
- d) 192.168.0.0/16

**39.** El protocolo de encaminamiento de tipo estado de enlace es:

- a) RIP
- b) OSPF
- c) IGRP
- d) BGP

**40.** EIGRP es:

- a) un protocolo de Cisco, con un RFC informativo
- b) un estándar abierto como OSPF
- c) un protocolo exterior
- d) un protocolo de nivel 2

**41.** En una ACL de Cisco, al final de la lista hay:

- a) un permitir implícito
- b) nada
- c) un registro automático
- d) un denegar implícito

**42.** Un protocolo enrutable es el que:

- a) solo funciona en una red local
- b) no usa direcciones
- c) lleva una dirección de red que el router puede interpretar
- d) va siempre cifrado


## Empresa

**43.** Una red de invitados con hasta 120 dispositivos simultáneos y un margen del 30 por ciento necesita aproximadamente:

- a) 126 direcciones, una /25
- b) 156 direcciones, es decir, una /24
- c) 60 direcciones, una /26
- d) 30 direcciones

**44.** Para la continuidad del DNS conviene:

- a) al menos dos servidores en máquinas distintas
- b) un único servidor muy potente
- c) solo reenviadores externos
- d) no tener caché

**45.** En 5 años, un router hardware (1 800 euros más soporte de 250 al año) frente a uno software (900 euros más 20 h al año a 40 euros):

- a) el software siempre sale más barato
- b) salen igual
- c) el software sale gratis
- d) el hardware sale más barato: 3 050 frente a 4 900 euros

**46.** La segmentación en VLAN y el filtrado entre ellas se justifica ante dirección porque:

- a) hace más rápido el Wi-Fi
- b) elimina las licencias
- c) limita el daño si alguien entra por una red de menor confianza, como invitados
- d) sustituye al cortafuegos

## Claves y explicaciones

1. **d)** La fiabilidad la pone TCP.
2. **c)** El router avisa con un ICMP de tiempo excedido (tipo 11).
3. **b)** 17 es UDP, 1 es ICMP y 89 es OSPF.
4. **a)** UDP tiene 8 bytes.
5. **d)** Después el cliente envía un ACK.
6. **c)** Está en desuso; BOOTP y DHCP lo sustituyeron.
7. **b)** 2 elevado a 5, menos 2.
8. **a)** 500 más 2 son 502 y el siguiente bloque es 512.
9. **d)** Es la dirección de enlace local.
10. **c)** Los equipos se suscriben con IGMP.
11. **b)** El destino se cambia antes de decidir la ruta.
12. **a)** Cambia el origen al salir.
13. **d)** Las reglas se cumplen y el paquete muere igual.
14. **c)** El estático es uno a uno.
15. **b)** El PTR es el inverso y el NS indica servidores de nombres.
16. **a)** No debe apuntar un MX a un CNAME.
17. **d)** El secundario solo transfiere si la serie del primario es mayor.
18. **c)** Se prueba con dig -x.
19. **b)** Servidor en el puerto 67 y cliente en el 68.
20. **a)** El Discover es de difusión y no cruza routers.
21. **d)** Se desvía con una regla REDIRECT.
22. **c)** Las VLAN dividen la difusión.
23. **b)** Fragment-free lee los primeros 64 bytes; store-and-forward, la trama completa.
24. **a)** Si el destino es conocido, reenvía solo por su puerto.
25. **d)** Hoy se hace con túneles de nivel 2.
26. **c)** Elige un puente raíz y bloquea los enlaces redundantes.
27. **b)** El troncal lleva varias VLAN con 802.1Q.
28. **a)** La estática por puerto es la habitual.
29. **d)** Cada conversación sigue yendo por un solo enlace.
30. **c)** El total en conjunto sí es 4 Gb/s.
31. **b)** Se detecta con show interfaces trunk.
32. **a)** Y limitar las VLAN permitidas en cada troncal.
33. **d)** Wi-Fi 5 es 802.11ac y Wi-Fi 7 es 802.11be.
34. **c)** Ocultar el SSID y filtrar por MAC no son seguridad.
35. **b)** Se combate con certificados validados.
36. **a)** Conectada 0, estática 1, OSPF 110, RIP 120.
37. **d)** Gana el prefijo más específico.
38. **c)** Comparten los 22 primeros bits.
39. **b)** RIP e IGRP son de vector de distancia; BGP, de vector de camino.
40. **a)** En redes mixtas se usa OSPF.
41. **d)** Por eso hace falta un permit ip any any.
42. **c)** IP lo es; NetBEUI, no.
43. **b)** Una /25 da 126 útiles.
44. **a)** Si cae el DNS, todo parece caído.
45. **d)** Hay que contar el tiempo de administración.
46. **c)** Es una decisión de política, no un adorno técnico.

## Cómo puntuarte

| Aciertos de 46 | Lectura |
| --- | --- |
| 41 o más | Dominas el tema |
| 34 a 40 | Repasa los apartados donde fallaste y repite en dos días |
| Menos de 34 | Vuelve al conceptual y al técnico antes de seguir |
