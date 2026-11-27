# Política de seguridad

Networking es documentación y un sitio web estático; no maneja datos de usuarios. Aun así, tomamos en serio los problemas de seguridad, por ejemplo:

- una vulnerabilidad en el sitio (`site/`), en los scripts del repositorio o en el flujo de despliegue;
- un comando o una configuración de una guía que pueda causar pérdida de datos, abrir un servicio de más o exponer secretos si se sigue tal cual;
- credenciales o datos sensibles publicados por error en el repositorio.

## Versiones con soporte

Se mantiene únicamente la última versión, la de la rama `main` publicada en <https://networking.celerolab.com>.

## Cómo informar de una vulnerabilidad

**No abras una incidencia pública.** Usa el aviso privado de GitHub:

1. Ve a la pestaña [Security](https://github.com/ekosistema/networking/security) del repositorio.
2. Pulsa **Report a vulnerability**.
3. Describe el problema, cómo reproducirlo y su impacto posible.

Responderemos en un plazo razonable (normalmente unos días), te mantendremos al tanto de la corrección y, si lo deseas, te daremos crédito al publicarla.

Los errores de contenido sin impacto de seguridad (datos obsoletos, erratas) se reportan como [incidencias normales](https://github.com/ekosistema/networking/issues/new/choose).
