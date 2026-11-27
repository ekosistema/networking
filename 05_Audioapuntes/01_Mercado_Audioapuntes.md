---
title: "Análisis del mercado de productos de comunicaciones"
description: "Audioapuntes de la unidad Mercado de comunicaciones."
section: audio
unit: mercado
kind: audioapuntes
order: 10
duration: "10 min"
tags:
  - redes
  - mercado
  - audioapuntes
---

Esto es la unidad de análisis del mercado de productos de comunicaciones, y la idea que hay que llevarse es una sola. Comprar red es comprar física disfrazada de catálogo.

Una empresa pide la red de su planta nueva y recibe tres presupuestos que no se parecen en nada: uno propone la máxima categoría de cable, otro lleva fibra hasta la mesa y otro confía todo al wifi. Ninguno explica lo único que importa, que es qué distancia hay que cubrir, qué velocidad se necesita y cuánto margen queda cuando el cable envejezca.

El problema de fondo es que las cifras no son comparables: mil megabits es una velocidad de capa física, cien metros un límite de norma, cero coma tres decibelios la pérdida de un conector y noventa y nueve coma nueve por ciento una cláusula de contrato. Solo se suman si sabes en qué capa vive cada una.

Empecemos por los modelos, que son el mapa del resto. Una LAN, es decir, una red de área local, es de un solo propietario y cubre un edificio o un campus. Una MAN, red de área metropolitana, cubre una ciudad y suele ser de un operador. Una WAN, red de área extensa, cruza países y siempre implica a un operador. Lo que cambia no es la tecnología, es la propiedad y la distancia.

El modelo OSI, de interconexión de sistemas abiertos, tiene siete capas: física, enlace, red, transporte, sesión, presentación y aplicación. La física lleva bits, la de enlace arma tramas, la de red pone direcciones, la de transporte conecta extremos y las tres de arriba tratan con el programa del usuario.

El modelo de TCP sobre IP lo comprime en cuatro capas, que son acceso a la red, internet, transporte y aplicación. Conviene tener esa correspondencia muy clara. Aplicación, presentación y sesión de OSI caen dentro de la aplicación. Física y enlace caen en el acceso a la red. Y si te preguntan por un conmutador, trabaja en enlace, y un router, en red. Un equipo que hace las dos cosas suma funciones, pero cada función sigue en su capa.

Ahora la herramienta que más se usa, el decibelio. Su gracia es que una cadena de pérdidas se resuelve sumando en lugar de multiplicar fracciones. Tres reglas te cubren casi todo. Tres decibelios son el doble, o la mitad si restas. Diez decibelios son diez veces. Y veinte decibelios son cien veces. El decibelio milivatio es una potencia absoluta referida a un milivatio, así que cero decibelios milivatio es un milivatio.

Un enlace de fibra lo muestra funcionando. El transmisor entrega cero decibelios milivatio. Hay dos kilómetros que pierden cero coma treinta y cinco decibelios por kilómetro, o sea cero coma siete. Hay dos conectores de cero coma tres, que son cero coma seis, y dos empalmes de cero coma uno, que son cero coma dos. Todo suma un decibelio y medio, así que al receptor llegan menos un decibelio y medio. Si el receptor es sensible hasta menos veinte, el margen es de dieciocho coma cinco decibelios, y de ahí se reservan tres para envejecimiento y reparaciones. Lo que se firma no es la potencia, es el margen.

El otro cálculo imprescindible es el techo del canal. Imagina una autopista. El ancho de banda son los carriles y el ruido es la niebla. Puedes añadir carriles o despejar la niebla, pero no hacer que quepan más coches de los que la visibilidad permite distinguir.

Nyquist da el máximo de un canal ideal sin ruido, y es el doble del ancho de banda por el logaritmo en base dos de los niveles. Shannon añade el ruido y dice que la capacidad es el ancho de banda por el logaritmo en base dos de uno más la relación señal ruido, con esa relación en lineal, no en decibelios, y ese es el error clásico.

Un canal telefónico tiene unos tres mil cuatrocientos hercios. Con cuatro niveles, Nyquist permite unos doce mil bits por segundo. Con treinta y cinco decibelios de relación señal ruido, que en lineal son más de tres mil, Shannon permite unos treinta y nueve mil. Los módems se quedaron en treinta y tres mil seiscientos, muy cerca del límite. El límite no era el chip, era la fórmula.

Pasemos a los medios. En cobre, la categoría fija el ancho de banda. La cinco mejorada llega a cien megahercios, la seis a doscientos cincuenta, la seis A a quinientos y la ocho a dos mil. El canal admite cien metros, de los cuales noventa son enlace permanente y hasta diez son latiguillos. Ese límite sale de la atenuación y de la diafonía a la frecuencia de trabajo, no de un capricho comercial.

En fibra hay dos familias. La monomodo tiene núcleo de nueve micrómetros y trabaja en mil trescientos diez y mil quinientos cincuenta nanómetros, con pérdidas de cero coma treinta y cinco y cero coma veinte decibelios por kilómetro. La multimodo trabaja en ochocientos cincuenta, con unos tres coma cinco, y por eso se queda en distancias cortas.

En los conectores, tres décimas de decibelio es la pérdida típica, y un empalme por fusión baja a una décima. Y un aviso, la luz de mil trescientos diez nanómetros es invisible, así que nunca mires un conector sin comprobar que está apagado.

La antena no crea energía, la concentra. Su ganancia se mide en decibelios isotrópicos, y el precio de la ganancia es el ancho de haz. La potencia radiada equivalente es la potencia del equipo más la ganancia menos las pérdidas del cable. Con la fórmula de espacio libre ves que cada vez que duplicas la distancia o la frecuencia pierdes seis decibelios.

El satélite geoestacionario está a treinta y cinco mil setecientos ochenta y seis kilómetros y su retardo ronda el cuarto de segundo, por eso impide conversar con naturalidad. Las constelaciones de órbita baja están a unos cientos de kilómetros y bajan el retardo a decenas de milisegundos, a cambio de necesitar seguimiento entre satélites.

Bajamos al enlace. Ahí se delimitan tramas, se detectan errores y se regula el ritmo. La paridad solo ve un número impar de bits malos. La suma de verificación es débil. Y el CRC, el código de redundancia cíclica, es el que usa Ethernet con treinta y dos bits y detecta cualquier ráfaga más corta que su grado. No corrige, y cuando falla se descarta la trama y recupera la capa de arriba.

Cuando sí se recupera en el enlace se usan protocolos de petición de repetición. El más simple es parada y espera, que envía una trama y aguarda confirmación. Su eficiencia es el tiempo de transmisión entre ese tiempo más dos veces el de propagación. Si el enlace es rápido pero largo, la eficiencia se hunde, y por eso existen las ventanas deslizantes. El control de flujo protege al receptor, y no es lo mismo que el control de congestión, que protege a la red.

Llegamos a los protocolos. La cuarta versión de IP usa treinta y dos bits. Con seis bits de host tienes sesenta y cuatro direcciones, de las que se pierden la de red y la de difusión: quedan sesenta y dos equipos.

Por ejemplo, la red ciento noventa y dos punto dieciséis punto diez punto cero, con máscara de veintiséis bits, se parte en cuatro bloques de sesenta y cuatro direcciones. La primera va de la uno a la sesenta y dos y su difusión es la sesenta y tres. La segunda empieza en la sesenta y cinco y su difusión es la ciento veintisiete. La tercera va de la ciento veintinueve a la ciento noventa, con difusión en la ciento noventa y uno. Y la cuarta llega hasta la doscientos cincuenta y cuatro, con difusión en la doscientos cincuenta y cinco.

La sexta versión usa ciento veintiocho bits, no tiene difusión y la sustituye con multidifusión y difusión selectiva. En enrutamiento, OSPF es de estado de enlace y BGP es el que habla entre operadores.

En transporte, TCP es fiable y orientado a conexión, y UDP no conecta ni confirma: se usa cuando el retardo importa más que la pérdida, como en la voz. La traducción de direcciones de red permite que muchos equipos compartan una dirección pública, con efectos secundarios, porque rompe protocolos que llevan direcciones dentro de los datos.

En seguridad, la simétrica es rapidísima y la asimétrica reparte las claves, así que se usan juntas. TLS protege la web y SSH sustituye a Telnet, que mandaba la contraseña en claro. IPsec protege las sedes, y el cortafuegos separa la zona externa, la intermedia de servidores públicos y la interna.

En aplicación, HTTP y su versión cifrada mueven la web, FTP mueve ficheros con dos canales, SMTP envía correo y SNMP vigila los equipos. Telnet ya no se usa, y SNMP solo es aceptable en su tercera versión, la que autentica y cifra.

Cada equipo tiene su nivel: el repetidor y el concentrador en el físico, el puente y el conmutador en el enlace, el router en red, la pasarela en niveles altos, y el cortafuegos y el servidor de redes privadas virtuales según se configuren.

El local se dimensiona igual: entre dieciocho y veintisiete grados, humedad entre cuarenta y sesenta por ciento sin condensación, alimentación con circuito dedicado y sistema de alimentación ininterrumpida, y un armario de diecinueve pulgadas ventilado.

Y el contrato. El caudal garantizado no es el máximo, y la simetría dice si la subida iguala a la bajada. El acuerdo de nivel de servicio fija disponibilidad, latencia, fluctuación y tiempo de reparación. Una disponibilidad de noventa y nueve coma nueve por ciento parece enorme, pero son casi nueve horas de corte al año, y eso hay que decirlo en la reunión.

La filosofía de la unidad cabe en una frase. No compras megabits, compras un margen medido en decibelios sobre un medio que tiene un límite físico, y todo lo demás del catálogo es una forma de contarlo.
