# AGENTS.md - Landing page

> Instrucciones estables para IA que editen la landing.
> Hereda todas las reglas de `../AGENTS.md`.

## Stack

- HTML5 + CSS3 vanilla. Sin frameworks.
- Fuentes: Inter + JetBrains Mono (Google Fonts).
- Deploy: GitHub Pages desde `main`.

## Estructura

| Archivo | Contenido |
|---|---|
| `index.html` | Landing principal |
| `assets/css/styles.css` | Estilos globales |
| `assets/js/main.js` | Logica JavaScript |
| `assets/data/systems.json` | Datos de sistemas |
| `legal/terms.html` | Terminos de servicio |
| `legal/privacy.html` | Politica de privacidad |

## Convenciones

- Tokens CSS en `:root`. Nunca hardcodear colores ni tamanos.
- HTML semantico.
- JavaScript solo para animaciones de scroll y carga de datos.
- Sin `!important`.
- Accesibilidad: `focus-visible`, `prefers-reduced-motion`, `lang="es"`.

## Anadir una seccion nueva

1. Anadir el HTML en `index.html` con `<section id="nombre">`.
2. Anadir estilos en `styles.css` usando tokens.
3. Anadir enlace en el nav si es relevante.
4. Probar en 375px, 768px, 1440px.

## Anadir un sistema nuevo

1. Anadir el objeto del sistema en `assets/data/systems.json`.
2. **No tocar HTML ni JavaScript** -- todo es dinamico.

## Que NO hacer

- Anadir tracking sin consentimiento.
- Usar frameworks CSS (Tailwind, Bootstrap).
- Romper el layout mobile.
- Introducir JavaScript para cosas que CSS puede hacer.
- Hardcodear datos de sistemas en HTML o JS.

## Verificar antes de commit

- [ ] Responsive en 375px, 768px, 1440px.
- [ ] Contraste AA en textos.
- [ ] `focus-visible` funciona en todos los interactivos.
- [ ] Sin errores en consola del navegador.
