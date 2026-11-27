---
title: "Análisis del mercado de productos de comunicaciones · Parte dos"
description: "Audioapuntes de la unidad Mercado de comunicaciones."
section: audio
unit: mercado
kind: audioapuntes
order: 11
duration: "11 min"
tags:
  - redes
  - mercado
  - audioapuntes
---

Esta es la segunda parte de la unidad de mercado de comunicaciones. La primera te dio el mapa físico. Esta te da lo que falta para defender una compra: qué estropea la señal, cómo se protege y cuánto cuesta de verdad.

Empecemos por lo que estropea la señal. Hay cuatro enemigos y conviene no confundirlos.

El primero es la atenuación. La señal pierde fuerza con la distancia, y en cobre pierde más cuanto más rápida es. Se compensa con repetidores.

El segundo es la distorsión. Cada frecuencia viaja a una velocidad distinta, así que un pulso limpio llega ensanchado. En digital esto es grave, porque un bit se mete en el siguiente y limita la velocidad máxima del enlace. En fibra se llama dispersión.

El tercero es el ruido, y tiene varios sabores. El térmico viene de la agitación de los electrones. Es inevitable, y fija el suelo de cualquier receptor. La diafonía es el cable de al lado contándote su conversación. El de intermodulación aparece cuando un amplificador se satura y mezcla frecuencias. Y el impulsivo es el golpe seco de un motor o un fluorescente: breve, fuerte e impredecible.

El cuarto no es una causa, es un efecto. Cuando el ruido empuja el nivel recibido al otro lado del umbral, el bit se lee mal. Se mide con la tasa de error de bit. Un error por millón de bits es una tasa de diez a la menos seis, y los enlaces rápidos de hoy apuntan a mucho menos.

Sigamos con la digitalización. Para llevar la voz por una red digital hay que muestrear. Nyquist dice que se muestrea al menos al doble de la frecuencia más alta. La telefonía reserva cuatro mil hercios por canal, así que toma ocho mil muestras por segundo. Con ocho bits por muestra salen sesenta y cuatro mil bits por segundo. Ese es el ladrillo con el que se construyen las líneas de telefonía digital: treinta de esos canales de voz, más dos de control, forman un enlace de algo más de dos megabits.

Cuando lo que hay que enviar son bits por el aire, se modula una portadora. Variar la amplitud, la frecuencia o la fase da las tres técnicas básicas. La modulación de amplitud y fase a la vez permite llevar varios bits en cada símbolo. Con dieciséis niveles son cuatro bits por símbolo. Cuantos más bits por símbolo, más velocidad, pero también más relación señal a ruido. Por eso tu wifi baja de velocidad cuando te alejas del punto de acceso: el equipo cambia a una modulación más tosca pero más robusta.

Pasemos a la seguridad, que el programa de referencia pide con detalle.

Una comunicación segura tiene cinco propiedades. Confidencialidad, que solo lea el destinatario. Integridad, que el mensaje no haya cambiado. Autenticación, saber quién está al otro lado. No repudio, que el emisor no pueda negar el envío. Y disponibilidad, que el servicio responda.

Para la confidencialidad hay dos familias de cifrado. En la simétrica, los dos extremos comparten una misma clave. Es muy rápida, pero te obliga a hacer llegar la clave sin que nadie la vea. En la asimétrica, cada uno tiene dos claves ligadas: una pública, que reparte a todo el mundo, y una privada, que no sale de su equipo. Lo que se cifra con una solo se abre con la otra.

Mira la razón numérica. Cien personas que quieran hablar por parejas con claves simétricas necesitan casi cinco mil claves. Con asimétrica basta un par por persona, doscientas claves en total. Pero la asimétrica es cientos de veces más lenta. Por eso se combinan: la asimétrica sirve para acordar una clave de sesión, y con esa clave la simétrica cifra los datos.

Para la integridad se usa un resumen, que es una huella de tamaño fijo del mensaje. Si cambia un solo bit, la huella cambia entera. Y la firma digital es esa huella cifrada con la clave privada del emisor. Cualquiera la comprueba con la clave pública, y solo el dueño pudo hacerla. Date cuenta de lo que da la firma: autenticación e integridad, pero no confidencialidad. El mensaje sigue yendo a la vista.

Queda un problema. ¿Cómo sabes que la clave pública que recibes es de quien dice? Para eso existen las autoridades de certificación. Una autoridad firma un certificado que liga una identidad con una clave pública. Tu navegador ya trae instaladas las autoridades de confianza, y valida la cadena hasta llegar a una de ellas. Los certificados caducan y se pueden revocar. Además, la vigencia máxima de los públicos se está acortando, así que renovar a mano deja de ser viable y se automatiza.

Ahora ponle nombre a las tecnologías, porque cada una aplica estas ideas en un nivel distinto. TLS protege el nivel de aplicación, y es lo que hay detrás de las páginas seguras. Solo las versiones uno punto dos y uno punto tres siguen vigentes; las antiguas están retiradas. SSH sustituye a Telnet: cifra la sesión y autentica servidor y usuario, mejor con clave que con contraseña. IPsec protege en el nivel de red, y se usa sobre todo para unir sedes.

Y aquí entra la red privada virtual. Es un túnel cifrado por una red pública. Si une dos sedes, es de sitio a sitio. Si conecta a un empleado en casa con la oficina, es de acceso remoto.

El último eslabón es el cortafuegos. Filtra el tráfico entre zonas con reglas que se leen en orden, y lo que ninguna regla permite, se deniega. El sencillo mira cada paquete suelto. El de estados recuerda la conexión. El proxy entiende la conversación entera. Y el de nueva generación entiende la aplicación y el usuario. La arquitectura clásica tiene tres zonas: Internet, una zona desmilitarizada con los servidores públicos, y la red interna. Lo que entra en la zona intermedia no pasa a la interna sin permiso expreso. Si un servidor web cae, el atacante se queda en la habitación del recibidor, no en el despacho.

Un apunte sobre arquitectura. En el modelo cliente servidor, el servidor espera en un puerto conocido y el cliente llama desde uno al azar. El servidor nunca llama primero. Es el sitio donde se concentra el tráfico, así que es donde se pone la redundancia.

Vamos con el enrutamiento. Un router consulta su tabla y elige la ruta más específica. Esas rutas pueden ser conectadas, escritas a mano o aprendidas.

OSPF es un protocolo de estado de enlace para dentro de tu red. Cada router describe sus enlaces, todos construyen el mismo mapa y calculan el camino más corto. Su coste sale del ancho de banda, y ojo con un detalle: con la referencia por defecto, cien megabits y un gigabit cuestan lo mismo, así que en redes modernas hay que subir la referencia.

BGP es otra cosa. Une sistemas autónomos, que son conjuntos de redes bajo una misma política, y va sobre TCP. No busca el camino más corto: busca el que cumple la política. Una empresa con una sola salida usa una ruta fija. Con varias sedes, OSPF. Con dos operadores y direccionamiento propio, BGP.

Cerremos con lo que paga la factura, que es la parte que más separa a un buen técnico de uno que solo sabe de cables.

El precio de compra es solo una parte. Hay un gasto inicial y un gasto recurrente: soporte, energía, horas de administración y, sobre todo, horas con la red parada. Sumado todo en cinco años da el coste total de propiedad. Una oferta a la mitad de precio puede salir cuatro veces más cara al final, si su disponibilidad es de las que cortan casi nueve horas al año en lugar de menos de una.

Para comparar ofertas, usa una matriz ponderada. Fija los criterios y sus pesos antes de ver las ofertas, puntúa cada una y multiplica. La más barata puede quedar la última. Y si alguien discute el resultado, lo que se discute son los pesos, que es una discusión mucho mejor que la de la simpatía.

La disponibilidad se compone. Tres equipos en fila, cada uno con tres nueves, no dan tres nueves: dan algo menos, porque todos tienen que funcionar. Dos equipos en paralelo, cada uno con dos nueves, dan cuatro, porque basta con que funcione uno. La cadena es tan fiable como su peor eslabón, y duplicar ese eslabón rinde más que mejorar todos los demás.

Y una última cosa. Todo esto cae dentro de normas: la protección de datos personales exige seguridad en el tratamiento, el esquema nacional de seguridad lo exige a quien trabaja con la administración, y los clientes grandes piden certificaciones. Una red bien diseñada deja rastro de por qué se hizo cada cosa.

Si te quedas con una idea de esta parte: una red no se compra por lo que corre, se compra por lo que protege y por lo que cuesta cuando falla.
