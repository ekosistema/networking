---
title: "Resolución de incidencias en redes telemáticas · Parte dos"
description: "Audioapuntes de la unidad Incidencias."
section: audio
unit: incidencias
kind: audioapuntes
order: 81
duration: "11 min"
tags:
  - redes
  - incidencias
  - audioapuntes
---

Esta es la segunda parte de la unidad de resolución de incidencias. La primera te dio el proceso, el método, las herramientas y el árbol de decisión. Esta añade la prioridad con su matriz, los problemas, los incidentes graves, el acuerdo de servicio, la documentación y la parte de negocio.

Empecemos por la prioridad, que se calcula y no se elige. Sale de cruzar dos cosas. El impacto, que mide a cuánta gente y a qué procesos afecta. Y la urgencia, que mide cuánto se puede esperar sin que el daño crezca. Con una matriz de tres por tres, impacto alto y urgencia alta es la prioridad uno. Impacto medio y urgencia alta es la dos. Impacto bajo y urgencia alta es la tres. Y todo lo que combina bajo con bajo, la cuatro.

Un ejemplo. El departamento de facturación sin red el último día del mes tiene impacto medio y urgencia alta: prioridad dos. Un directivo con una reunión dentro de una hora tiene impacto bajo y urgencia alta: prioridad tres. La prioridad se puede reclasificar cuando cambian los hechos, con registro del motivo. Lo que no vale es subirla porque alguien insiste.

Pasemos a los problemas. Una incidencia es apagar el fuego. Un problema es averiguar por qué se prendió. Se abre un problema cuando hay incidencias repetidas, una incidencia grave sin causa clara o una tendencia en los informes. Mientras no se elimina la causa, existe un error conocido: un problema diagnosticado con una solución temporal documentada. Y no confundas: el error conocido no es un problema resuelto. Tiene solución temporal, pero la causa sigue ahí.

¿Cómo sabes qué problema atacar? Contando. Si en un trimestre hay ciento veinte incidencias y cuarenta y dos son puestos sin dirección, y treinta son latiguillos, esas dos categorías suman el sesenta por ciento. Abrir un problema sobre las direcciones elimina más tickets que cualquier mejora en la velocidad de resolución.

Y para que lo que aprendes se reutilice existe la base de conocimiento. Un buen artículo tiene un título con el síntoma, a quién afecta, la causa, los pasos numerados, cómo comprobar y cuándo escalar. Se mide por su reutilización. Un artículo que resuelve ocho casos al mes y ahorra diez minutos en cada uno supone dieciséis horas al año. Escribirlo costó una hora. Y un artículo sin fecha ni responsable caduca y se deja de usar.

Vamos con los incidentes graves. Es una prioridad uno que afecta a un servicio crítico. Tiene su procedimiento. Un responsable que coordina y no repara. Una sala de crisis, física o virtual. Un único canal de comunicación, con avisos periódicos y la hora del siguiente. Un registro cronológico de quién hizo qué. Y una revisión posterior, sin culpables, para ver la causa, qué funcionó y qué se cambia.

La guardia cubre lo que pasa fuera de horario. Un técnico localizable, con plazo de respuesta pactado, compensado y con una lista de actuaciones para cada alarma, de modo que no improvise. Y el escalado tiene tiempos. Quince minutos sin avance en una prioridad uno, al segundo nivel. Una hora, al especialista o al fabricante y se avisa al jefe. Y si se arriesga el acuerdo de servicio, escalado jerárquico y aviso al cliente.

Hablemos del acuerdo de servicio. El acuerdo con el cliente es el SLA. El acuerdo entre equipos internos es el OLA. Y el que se firma con un proveedor es el contrato de apoyo. Para cumplir con el cliente, los otros dos deben ser al menos tan exigentes. Y el reloj se pausa cuando la incidencia espera al usuario o a una ventana que autorizó el cliente. No se pausa si espera a un proveedor interno ni al fabricante. Si una prioridad uno se resuelve en seis horas, pero dos estuvo esperando un acceso del usuario, el tiempo que cuenta son cuatro: dentro del plazo.

Y recuerda cómo se calcula el cumplimiento. Con ciento veinte incidencias y ciento ocho cerradas en plazo, el cumplimiento es del noventa por ciento. Si te comprometiste al noventa y cinco, faltan seis incidencias dentro de plazo. Se incumple.

Pasemos a la documentación y a la magnitud, que el programa de referencia pide al principio del diagnóstico. Primero la documentación del proyecto: el plano, el esquema lógico, el direccionamiento y el inventario. Y la de los equipos: los manuales, las hojas de datos y las notas de versión. Con ellos acotas el alcance, descubres un error de configuración y reconoces un defecto ya conocido.

Y estimas la magnitud: usuarios afectados por coste hora de cada uno por horas de parada. Cuarenta puestos, veinticinco euros la hora y dos horas son dos mil euros de productividad perdida. Con ese número decides si envías un técnico ahora o atiendes en su turno.

Cuando el fallo es de un equipo, usas el procedimiento del fabricante. Lees el estado y los códigos. Obtienes los registros y el volcado de diagnóstico. Compruebas la versión y las notas. Pruebas los modos de diagnóstico. Abres un caso con número de serie, versión, síntoma, registros y lo que has probado. Y, si está en garantía, pides la sustitución. Un caso sin número de serie se queda parado, porque es lo primero que te piden.

Hablemos de descubrir los nodos intermedios. Para el camino a un destino, traceroute. Para ese camino con estadísticas de pérdida por salto, una herramienta que lo repite cien veces. Para los equipos de una red local, un escaneo, pero solo de redes propias o con autorización. Y para los vecinos directos de un equipo de red, los protocolos de descubrimiento.

Y la regla de lectura que más se pregunta: la pérdida real se propaga. Si el salto tres pierde el treinta por ciento y todos los siguientes también, el problema empieza en el tres o en el enlace hacia él. Si solo pierde el tres y los siguientes están limpios, es un router que limita sus respuestas, no una avería.

Cuando el fallo está fuera de tu red, escalas al operador con datos. Cliente y circuito, hora de inicio, síntoma, alcance, pruebas hechas con la salida completa, confirmación de que tu equipo funciona y un contacto disponible. Con eso el operador no puede devolverte la pregunta de si es tu red.

Cerremos con el negocio. Una incidencia cuesta técnico, espera del usuario y riesgo. La espera suele ser la mayor. Una incidencia de un puesto, una hora, son unos sesenta euros. Una de cuarenta puestos, dos horas, son más de dos mil. Por eso se reduce el tiempo con formación, base de conocimiento, repuestos en el armario y una monitorización que avisa antes de que llame el usuario.

Y la mesa de ayuda puede ser propia, externalizada o mixta. La propia conoce el negocio pero cuesta fija. La externa cubre más horas, pero conoce menos. La mixta pone el primer nivel fuera y el resto dentro. El indicador más rentable de mejorar es la resolución en el primer contacto: un primer nivel con autoservicio y conocimiento resuelve a una fracción del coste de un especialista.

Un acuerdo con penalizaciones solo es creíble si se mide con datos que el cliente puede comprobar. Se pactan los horarios cubiertos, las exclusiones y cómo se cuenta el tiempo. Y los registros de incidencias, con quién abrió, quién resolvió, cuándo y con qué causa, son evidencia para las auditorías de calidad y de seguridad.

Si te quedas con una idea de esta parte: resolver incidencias es atender primero lo que más duele, quitar las causas que se repiten y poder demostrar con datos lo que hiciste.
