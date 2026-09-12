# Resource Digital

> Tu teléfono es un nodo. Mientras no lo usas, genera ingresos.

**Resource Digital** es una aplicación Android que convierte el teléfono del usuario en un **nodo generador de ingresos** gestionado a través de una **billetera-nodo** que consolida múltiples dispositivos y recursos inactivos.

## 🚀 Estado actual

**Fase 1: Núcleo Rentable** — Semanas 1-4

- [x] Entorno de desarrollo Flutter configurado (v3.47.4)
- [x] Repositorio y documentación creados
- [ ] Registro como publisher en Honeygain
- [ ] Proyecto Flutter creado
- [ ] SDK de banda integrado
- [ ] Servicio en primer plano + overlay
- [ ] Billetera-nodo funcional
- [ ] Beta con 5-10 usuarios en Ecuador

## 📚 Documentación

| Documento | Descripción |
|-----------|-------------|
| [Visión general](docs/00-vision-general.md) | Concepto, propuesta de valor y modelo |
| [Fase 1: Honeygain](docs/01-fase1-honeygain.md) | Plan detallado de la primera fase |
| [Arquitectura 18 sistemas](docs/02-arquitectura-18-sistemas.md) | Los 18 sistemas atómicos |
| [Stack tecnológico](docs/03-stack-tecnologico.md) | Tecnologías y versiones |
| [Hoja de ruta](docs/04-hoja-de-ruta.md) | 12 semanas, 3 fases |
| [Esquema de BD](docs/05-esquema-base-datos.md) | Tablas Supabase + SQLite |
| [Registro Honeygain](docs/06-registro-honeygain-publisher.md) | Guía paso a paso |
| [Seguridad y privacidad](docs/07-seguridad-privacidad.md) | GDPR/LGPD, RASP, cifrado |

## 🏗️ Fases

| Fase | Semanas | Objetivo | Fuentes de ingreso |
|------|---------|----------|-------------------|
| **Fase 1** | 1-4 | Núcleo rentable | Banda ancha (Honeygain) |
| **Fase 2** | 5-8 | Capa DePIN con peaq | Banda + Sensores + Anuncios |
| **Fase 3** | 9+ | Ecosistema completo | + Almacenamiento (DeNet) + Cómputo (Acurast) + Offerwalls |

## 🛠️ Stack (Fase 1)

| Capa | Tecnología |
|------|-----------|
| Frontend | Flutter 3.47.4 + Dart 3.13.3 |
| Backend | Supabase (PostgreSQL 15+) |
| SDK Banda | Honeygain SDK |
| Estado | Riverpod 2.6.1 |
| Rutas | go_router 14.6.2 |
| Servicio | flutter_background_service 5.1.0 |
| Overlay | flutter_overlay_window 0.5.0 |
| Buffer local | SQLite (sqflite 2.4.1) |
| Seguridad | flutter_secure_storage 9.2.2 |

## 📄 Licencia

MIT — ver [LICENSE](LICENSE) para detalles.