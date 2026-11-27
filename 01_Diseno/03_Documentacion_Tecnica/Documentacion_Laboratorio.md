---
title: "Documentación técnica · Guía de laboratorio"
description: "Guía de laboratorio de la unidad Documentación técnica."
section: diseno
unit: documentacion
kind: laboratorio
order: 36
tags:
  - redes
  - documentacion
  - laboratorio
---

# Documentación técnica · Guía de laboratorio

> **Para qué sirve.** La documentación técnica se aprende produciéndola y comprobándola. Cinco
> prácticas: un plano con capas y cajetín, un verificador de coherencia, un generador de códigos
> y presupuesto, una mini auditoría y un control de versiones documental.

| Práctica | Herramienta | Qué demuestras | Tiempo |
| --- | --- | --- | --- |
| 1. Plano de red con capas y cajetín | LibreCAD o draw.io | Que sabes producir un plano controlado | 90 min |
| 2. Verificador de coherencia | Python | Que los documentos cuentan lo mismo | 45 min |
| 3. Códigos, materiales y certificación | Python | Trazabilidad y cálculo de la obra | 45 min |
| 4. Mini auditoría interna | Lista de verificación | Auditar con evidencias | 60 min |
| 5. Control de versiones documental | Git | Revisiones y custodia | 45 min |

## Práctica 1. Plano de red con capas y cajetín

**Objetivo.** Producir el plano del [caso 3](Documentacion_Casos.md) en una herramienta de dibujo.
LibreCAD (2D, libre) sirve para planos; draw.io para esquemas lógicos.

**Pasos.**

1. Crea un documento A3 apaisado a escala 1:100. En LibreCAD, ajusta las unidades a milímetros.
2. Crea estas capas, con grosores y tipos de línea distintos y no solo con color:

| Capa | Contenido | Línea |
| --- | --- | --- |
| A-001 | Arquitectura de referencia | Continua fina gris |
| R-CAN | Canalizaciones | Continua gruesa |
| R-CAB | Cableado horizontal | Discontinua |
| R-TOM | Tomas | Continua fina |
| R-ARM | Armarios y equipos | Continua gruesa |
| R-TXT | Textos y cotas | Fina |

3. Dibuja la planta (un rectángulo con dos zonas es suficiente), los dos armarios, las 24 tomas con
   sus códigos T-1.01-01 a T-1.01-12 y T-1.02-01 a T-1.02-12, y la fibra entre armarios con su
   longitud.
4. Crea un **bloque** para la toma (un cuadrado con una cruz) e insértalo 24 veces: así un cambio
   de símbolo se hace una vez.
5. Dibuja el cajetín: título, número RED-P1-02, revisión A, escala 1:100, fecha, autor, cliente,
   emplazamiento y hoja.
6. Añade la leyenda de símbolos y medios y exporta a PDF.

**Lista de comprobación.**

| Prueba | Cómo se hace |
| --- | --- |
| Se entiende en blanco y negro | Imprime o previsualiza en escala de grises |
| El cajetín está completo | Compara con el apartado 5.2 del técnico |
| Los códigos coinciden con el listado | Lee tres códigos al azar y búscalos en el listado |
| Hay revisión y fecha | Cámbialas al editar y guarda como `RED-P1-02_revB_fecha.pdf` |

**Pregunta de cierre.** ¿Qué ocurre si cambias de sitio un armario y no actualizas el plano? Escribe
tres consecuencias (incoherencia con el inventario, longitudes que ya no cumplen, instalador que
trabaja con datos falsos).

## Práctica 2. Verificador de coherencia

**Objetivo.** Automatizar la detección de incoherencias del [caso 2](Documentacion_Casos.md).

```python
import ipaddress

# Datos de ejemplo: lo que dicen los distintos documentos
plano_tomas = {f"T-1.02-{n:02d}" for n in range(1, 13)}        # tomas dibujadas
certificadas = {f"T-1.02-{n:02d}" for n in range(1, 15)}       # tomas con informe
redes = {10: ipaddress.ip_network("10.20.10.0/28"),            # VLAN -> subred
         20: ipaddress.ip_network("10.20.20.0/26")}
inventario = [("SW-1.02-01", 10, "10.20.10.12"),               # equipo, VLAN, IP
              ("AP-1.02-05", 10, "10.20.10.35")]

# 1. Tomas certificadas que no estan en el plano, y al reves
print("Certificadas y no dibujadas:", sorted(certificadas - plano_tomas))
print("Dibujadas y no certificadas:", sorted(plano_tomas - certificadas))

# 2. IP fuera de la subred de su VLAN, o direccion reservada
for equipo, vlan, ip in inventario:
    red = redes[vlan]
    a = ipaddress.ip_address(ip)
    if a not in red:
        print("IP fuera de subred:", equipo, ip, "no pertenece a", red)
    elif a in (red.network_address, red.broadcast_address):
        print("IP reservada:", equipo, ip)

# 3. Codigos duplicados
codigos = [e for e, _, _ in inventario]
print("Duplicados:", {c for c in codigos if codigos.count(c) > 1})
```

**Qué debes observar.** Dos tomas certificadas que no existen en el plano (T-1.02-13 y T-1.02-14),
ninguna dibujada sin certificar y una IP fuera de subred (10.20.10.35 frente a 10.20.10.0/28).
Coinciden con las incoherencias que se buscaban a mano.

**Ampliación.** Añade una comprobación que lea las tres fuentes desde ficheros CSV, y otra que
verifique que cada longitud de la planilla de tendido es de 90 m o menos.

## Práctica 3. Códigos, materiales y certificación

**Objetivo.** Generar los códigos de tomas y latiguillos, el listado de materiales, el presupuesto
y la certificación parcial del [caso 5](Documentacion_Casos.md).

```python
# Generar codigos T-P.AA-NN y L-SWnn-PP
def tomas(planta, armario, cantidad):
    return [f"T-{planta}.{armario:02d}-{n:02d}" for n in range(1, cantidad + 1)]

def latiguillos(switch, cantidad):
    return [f"L-SW{switch:02d}-{n:02d}" for n in range(1, cantidad + 1)]

print(tomas(1, 2, 3), latiguillos(1, 3))

# Presupuesto y certificacion parcial
contrato = {"Bandeja 200 mm (m)": (24, 12.00),
            "Toma 6A instalada (ud)": (36, 42.00),
            "Armario 24 U con SAI (ud)": (1, 850.00),
            "Certificacion por toma (ud)": (36, 25.00)}
ejecutado = {"Bandeja 200 mm (m)": 24, "Toma 6A instalada (ud)": 20,
             "Armario 24 U con SAI (ud)": 1, "Certificacion por toma (ud)": 12}

total = sum(c * p for c, p in contrato.values())
cert = sum(ejecutado[k] * contrato[k][1] for k in ejecutado)
retencion = cert * 0.05
print("Presupuesto", total)
print("Certificacion 1:", cert, "(", round(cert / total * 100, 2), "por ciento )")
print("Retencion 5 por ciento:", round(retencion, 2), "A abonar:", round(cert - retencion, 2))
```

**Qué debes observar.** Presupuesto de 3 550 euros, certificación de 2 278 euros (64,17 por ciento),
retención de 113,90 euros y 2 164,10 euros a abonar, igual que en el caso 5. Comprueba qué
ocurre si metes el acopio como ejecutado: la cifra sube sin que haya obra instalada, y por eso no
se abona.

**Ampliación.** Genera un CSV con las 36 tomas, su código, su estado (instalada, certificada) y
cuenta cuántas faltan por certificar.

## Práctica 4. Mini auditoría interna

**Objetivo.** Auditar con evidencias, no con opiniones. Elige el proyecto del caso 2 o uno
propio y audita su documentación con esta lista:

| Nº | Criterio (referencia) | ¿Evidencia? | Resultado |
| --- | --- | --- | --- |
| 1 | Cada plano tiene cajetín, revisión y fecha | Planos | Cumple, no cumple, observación |
| 2 | La revisión vigente es la única disponible | Repositorio | |
| 3 | Todo equipo del plano está en el inventario con el mismo código | Plano e inventario | |
| 4 | Las IP del inventario pertenecen a su subred | Inventario y plan de direccionamiento | |
| 5 | Todas las tiradas son de 90 m o menos | Planilla de tendido | |
| 6 | El 100 por ciento de las tomas tiene informe de certificación | Informes | |
| 7 | Hay acta de replanteo, libro de órdenes y acta de recepción | Archivo de obra | |
| 8 | El pliego no lleva precios y el presupuesto no lleva condiciones | Proyecto | |
| 9 | Los documentos citan la norma vigente (RD 346/2011, no 401/2003) | Proyecto | |
| 10 | Ningún documento entregado contiene contraseñas | Todos | |

**Pasos.**

1. Recorre la lista y anota para cada criterio la evidencia concreta (documento, página).
2. Clasifica cada hallazgo: cumple, observación, no conformidad menor o no conformidad mayor. Una
   mayor es un incumplimiento que afecta al resultado o es sistemático.
3. Para cada no conformidad escribe la **corrección** (arreglar el caso) y la **acción correctiva**
   (cambiar el procedimiento), tras un análisis de causa por cinco porqués.
4. Redacta el informe: alcance, método, hallazgos con evidencia, conclusiones y plan de acción con
   responsable y plazo.

**Criterio de calidad.** Cada afirmación del informe debe poder comprobarla otra persona con la
evidencia citada.

## Práctica 5. Control de versiones documental

**Objetivo.** Gestionar revisiones de documentos de proyecto con Git, la herramienta con la que
se versiona casi todo el trabajo técnico moderno.

```text
git init proyecto-red
cd proyecto-red
mkdir planos memoria registros
echo "# Memoria del proyecto" > memoria/memoria.md
git add .
git commit -m "Memoria: version inicial (rev A)"
git tag revA
```

Cambia la memoria y confirma de nuevo con otra etiqueta:

```text
echo "Se añade la justificacion de la solucion" >> memoria/memoria.md
git commit -am "Memoria: anade justificacion (rev B)"
git tag revB
git log --oneline --decorate
git diff revA revB
```

**Qué debes observar.** Que cada revisión queda identificada (etiqueta), fechada (commit), explicada
(mensaje) y recuperable (`git checkout revA`). Es exactamente lo que pide el control documental de
la ISO 9001: identificar, aprobar, asegurar la versión vigente y poder retirar la obsoleta.

**Límites.** Git versiona bien texto (Markdown, CSV); los binarios (DWG, PDF) se guardan pero no se
comparan. Para ellos, usa el nombre `código_título_revX_fecha` y deja la versión firmada en PDF.
Y no subas nunca contraseñas ni credenciales: una vez en el historial, están para siempre.

**Pregunta de cierre.** ¿Qué parte del control documental de la ISO 9001 no cubre Git por sí solo?
(Respuesta: la aprobación formal por la persona responsable y la retirada física de copias en papel.)
