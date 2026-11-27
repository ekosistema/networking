---
title: "Equipos de interconexión y servicios de red · Parte dos"
description: "Audioapuntes de la unidad Equipos y servicios de red."
section: audio
unit: equipos
kind: audioapuntes
order: 61
duration: "11 min"
tags:
  - redes
  - equipos
  - audioapuntes
---

Esta es la segunda parte de la unidad de equipos y servicios de red. La primera te dio la pila de protocolos, las direcciones, el DNS, el DHCP, el proxy y el encaminamiento. Esta añade las cabeceras, los equipos de nivel dos, las redes virtuales, el Wi-Fi y el punto de vista de quien responde de todo esto.

Empecemos por la cabecera del datagrama IP, que se pregunta más de lo que se estudia. Es de veinte bytes como mínimo. Lleva la versión, que es cuatro. La longitud de la cabecera. Una marca de servicio. La longitud total. Tres campos para fragmentar. El tiempo de vida, el protocolo que va dentro, una suma de comprobación y las dos direcciones.

Piensa en el tiempo de vida como en un contador de saltos. Cada router lo reduce en uno. Cuando llega a cero, el router descarta el paquete y avisa al origen con un mensaje de tiempo excedido. Eso es lo que usa traceroute: manda paquetes con tiempo de vida uno, dos, tres, y apunta quién contesta. El campo de protocolo dice qué hay dentro. Seis es TCP, diecisiete es UDP, uno es ICMP y ochenta y nueve es OSPF.

IP es un protocolo sin conexión y no confiable. Cada datagrama va por su cuenta, puede perderse, duplicarse o llegar tarde, y nadie avisa. La suma de comprobación solo protege la cabecera y se recalcula en cada salto.

La fiabilidad la pone TCP. Su cabecera, también de veinte bytes como mínimo, lleva los dos puertos, el número de secuencia, el de acuse, las banderas, la ventana y una suma. El número de secuencia cuenta bytes. El de acuse dice cuál espera el receptor. Y la ventana dice cuántos bytes admite: si llega a cero, el emisor se detiene. Así, un paquete que muere es un tiempo de vida agotado, y una conexión que se atasca es una ventana a cero.

Añade tres protocolos antiguos que cita el programa de referencia. RARP hacía lo contrario de ARP: un equipo sin disco conocía su dirección física y preguntaba cuál era su dirección IP. Está en desuso. BOOTP lo mejoró, sobre UDP, con servidor y relay. Y DHCP es su evolución, con concesiones y rangos dinámicos. Y NFS comparte directorios entre equipos Linux y Unix por red, y se monta como si fuera un disco local.

Pasemos a los equipos de nivel dos. Un hub apilable es un grupo de repetidores que se comportan como uno solo. Al apilarlos no se suman dominios de colisión: sigue habiendo uno, y todos se reparten la velocidad. Con veinticuatro equipos en un hub de diez megabits, a cada uno le tocan unos cuatrocientos mil bits por segundo de media. Con un conmutador, cada puerto tiene los diez megabits para él. Esa fue la razón de que los hubs desaparecieran.

El conmutador funciona con una tabla de direcciones físicas. Aprende la de origen de cada trama y la asocia al puerto por el que llegó. Si conoce el destino, reenvía por un puerto. Si no lo conoce, o si es una difusión, inunda por todos. Y si origen y destino están en el mismo puerto, filtra. Las entradas caducan a los cinco minutos.

Un puente es lo mismo con menos puertos. El transparente aprende y reenvía sin que los equipos lo sepan. Puede unir redes del mismo tipo o de tipos distintos, como Ethernet y Wi-Fi. El remoto une dos redes locales a través de un enlace de área extensa, de modo que parecen una sola. Hoy se hace con túneles. El riesgo es que la difusión cruza la línea, y que un bucle es más difícil de cortar.

Vamos con las redes virtuales. Además de las estáticas por puerto, existen las dinámicas. En ellas el puerto no se fija a mano: el servidor decide la red según quién se conecta, por su dirección física o, mejor, por su identidad con autenticación por puerto. El usuario conserva su red al cambiar de mesa.

Recuerda lo recomendable y lo que no. Se segmenta por función: administración, voz, invitados, gestión y servidores. La voz va en su propia red. Los invitados, aislados. Y se evita usar la red uno para usuarios, meter todo el edificio en una sola red y fiarse de la red virtual como única barrera sin filtros entre ellas.

También existe el salto entre redes virtuales, que se hace con la negociación de troncal o con doble etiqueta. Se previene apagando la negociación, usando una red nativa sin uso y permitiendo en cada troncal solo las redes necesarias.

Y no confundas troncal con agregación. El troncal lleva varias redes virtuales por un mismo cable. La agregación junta varios cables físicos en uno lógico, con el protocolo de agregación de enlaces. Pero ojo con la velocidad: cada conversación va siempre por el mismo cable. Cuatro cables de un gigabit dan cuatro en conjunto y uno por conexión.

Pasemos al Wi-Fi. Los riesgos están bien definidos. Una red abierta se puede escuchar. Un punto de acceso falso conectado a tu red es un agujero. Un gemelo malvado imita tu nombre para robar credenciales. Una contraseña débil con la protección personal se rompe con diccionario. El WPS se adivina en horas. Y las tramas de desautenticación expulsan a los clientes. La defensa es una combinación: WPA tres o WPA dos con cifrado fuerte, autenticación empresarial con servidor de identidad, WPS apagado, tramas de gestión protegidas, una red de invitados separada y firmware al día.

Y planifica la capacidad. La célula de un punto de acceso comparte el medio: más clientes, menos velocidad para cada uno. Mejor más puntos con menos potencia que pocos con mucha.

Pasemos al encaminamiento. Hay protocolos enrutables, como IP, que llevan una dirección de red que el router entiende, y no enrutables, que solo viven en una red local. Hay tres tipos de comunicación. Unicast, a un equipo. Broadcast, a todos. Y multicast, a un grupo que se suscribe con IGMP. Con una función en el conmutador llamada fisgoneo de IGMP, el tráfico multicast solo llega a quien lo ha pedido.

Cuatro conceptos que se confunden. La métrica compara caminos dentro de un protocolo. La distancia administrativa compara la fiabilidad entre protocolos. La convergencia es el tiempo que tarda la red en enterarse de un cambio. Y los protocolos interiores se usan dentro de una organización y el exterior, entre ellas. IGRP está obsoleto, y EIGRP es de Cisco, aunque tiene un documento público. En redes mixtas, OSPF.

Vamos con el router. El hardware rinde de forma previsible y tiene soporte del fabricante. El software es flexible y barato al principio. Pero cuando cuentas las horas de quien lo mantiene, la diferencia se estrecha: en cinco años, un router de hardware por unos tres mil euros puede salir más barato que uno de software por unos cinco mil, si hay que pagar la administración. Si ya tienes ese conocimiento o necesitas funciones que el hardware no da, compensa.

Cerremos con el negocio. Si el DNS cae, todo parece caído aunque la red funcione. Por eso hay al menos dos servidores en máquinas distintas. Y en el DHCP, dos servidores en reparto o en conmutación por fallo. Una red de invitados con ciento veinte dispositivos a la vez, con un treinta por ciento de margen, pide ciento cincuenta y seis direcciones: no cabe en una red de ciento veintiséis. Hace falta el doble. Y la concesión se acorta a dos horas para recuperar direcciones.

Segmentar es una decisión de negocio, no un capricho técnico. La pregunta de quien paga es qué pasa si alguien entra por el Wi-Fi de invitados. Con redes virtuales y filtros, nada. Sin ellos, llega a los servidores. Y el Wi-Fi forma parte del alcance de las normas de seguridad de la empresa: se documenta quién se conecta, con qué, y se separa a los invitados.

Si te quedas con una idea de esta parte: los servicios de red son invisibles cuando funcionan y lo paralizan todo cuando fallan, así que se duplican, se documentan y se segmentan antes de que hagan falta.
