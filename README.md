# Resource Digital

> **El primer DePIN móvil multipropósito diseñado para Latinoamérica.**

[![GitHub](https://img.shields.io/badge/GitHub-Resource%20Digital-00e5a0?style=flat-square&logo=github)](https://github.com/1inquisidor1/Resource-digital)
[![License](https://img.shields.io/badge/License-MIT-blue?style=flat-square)](LICENSE)
[![Status](https://img.shields.io/badge/Status-v5.1%20Alpha-yellow?style=flat-square)](https://github.com/1inquisidor1/Resource-digital/releases)
[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-Live-60a5fa?style=flat-square)](https://1inquisidor1.github.io/Resource-digital/)

---

## Propuesta de Valor

> *"Tu teléfono es un nodo. Mientras no lo usas, generas ingresos. Tú controlas cuántos dispositivos vincular y qué recursos activar."*

Resource Digital convierte tu smartphone en un **nodo generador de ingresos pasivos** compartiendo recursos inactivos de tu dispositivo:

| Recurso | SDK/Integración | Estado |
|---------|----------------|--------|
| Ancho de Banda | Honeygain + Pawns + BrightSDK | [En progreso] |
| Sensores | Luz, ruido, movimiento | [Planificado - Fase 2] |
| Almacenamiento | DeNet (vía S05 ampliado) | [Planificado - Fase 3] |
| Cómputo | Acurast (vía S05 ampliado) | [Planificado - Fase 3] |

---

## Demo en Vivo

| Recurso | Enlace |
|---------|--------|
| Pagina Principal | [Ver sitio](https://1inquisidor1.github.io/Resource-digital/) |
| Demo App | [Simulador interactivo](https://1inquisidor1.github.io/Resource-digital/legal/app-simulator.html) |
| Beta Cerrada | [Registrarse](https://1inquisidor1.github.io/Resource-digital/legal/beta.html) |
| Plan de Desarrollo | [Ver roadmap](https://1inquisidor1.github.io/Resource-digital/legal/roadmap.html) |

---

## Modelo de Ingresos

| Fuente | Tipo | Est. Ingreso | Fase |
|--------|------|--------------|------|
| Ancho de Banda | Pasivo | $5-15/mes | 1 |
| Sensores | Pasivo | $2-5/mes | 1 |
| Afiliados | Activo | $1-10/mes | 2 |
| Almacenamiento | Pasivo | $3-8/mes | 3 |
| Cómputo | Pasivo | $5-20/mes | 3 |

*Los ingresos son estimaciones teóricas sujetas a condiciones de mercado y dispositivo.*

---

## Seguridad y Privacidad

- Datos de sensores **anonimizados** antes de compartir
- Cifrado **AES-256** en reposo
- Conexiones **TLS 1.3** en tránsito
- Sin acceso a datos personales del usuario
- Cumplimiento GDPR y regulaciones locales

---

## Stack Tecnológico

| Categoría | Tecnología |
|-----------|------------|
| Mobile | Flutter 3.47.4, Dart 3.13.3 |
| Estado | Riverpod |
| Navegación | go_router |
| Backend | Supabase (Fase 2) |
| Local | sqflite + flutter_secure_storage |
| Blockchain | peaq Network (Fase 2) |
| Frontend | HTML, CSS, JS (landing) |
| Infraestructura | GitHub Actions, Docker |

---

## Sistemas Atómicos (18)

<div align="center">

### Core Node (S01-S05)
*Recursos del dispositivo Android*

| Icono | Sistema | Descripción | Estado |
|:-----:|---------|-------------|:------:|
| <img src="assets/images/icon-node-core.svg" width="24" height="24" alt="App"> | **S01** App UI | Interfaz principal y navegación | ⏳ |
| <img src="assets/images/icon-rocket.svg" width="24" height="24" alt="Foreground"> | **S02** Foreground Service | Servicio en primer plano persistente | ⏳ |
| <img src="assets/images/icon-sensors.svg" width="24" height="24" alt="Sensores"> | **S03** Sensor Capture | Captura de luz, ruido y movimiento | ⏳ |
| <img src="assets/images/icon-database-buffer.svg" width="24" height="24" alt="Buffer"> | **S04** SQLite Buffer | Almacenamiento local en cola | ⏳ |
| <img src="assets/images/icon-wave-signal.svg" width="24" height="24" alt="Bandwidth"> | **S05** Bandwidth Orchestrator | Gestión de ancho de banda | ⏳ |

---

### DePIN Layer (S06-S09)
*Integración con blockchain y red*

| Icono | Sistema | Descripción | Estado |
|:-----:|---------|-------------|:------:|
| <img src="assets/images/icon-bridge-chain.svg" width="24" height="24" alt="peaq"> | **S06** peaq L1 | Identidad descentralizada (DID) | ⏳ |
| <img src="assets/images/icon-trophy.svg" width="24" height="24" alt="Boosters"> | **S07** Boosters Engine | Multiplicadores de ganancias | ⏳ |
| <img src="assets/images/icon-grid-panel.svg" width="24" height="24" alt="Panel"> | **S08** Resource Panel | Dashboard de recursos | ⏳ |
| <img src="assets/images/icon-affiliates.svg" width="24" height="24" alt="Afiliados"> | **S09** Affiliates v2 | Sistema de referidos multinivel | ⏳ |

---

### Soporte (S10-S18)
*Infraestructura y operaciones*

| Icono | Sistema | Descripción | Estado |
|:-----:|---------|-------------|:------:|
| <img src="assets/images/icon-auth.svg" width="24" height="24" alt="Auth"> | **S10** Auth Registry | Registro y autenticación | ⏳ |
| <img src="assets/images/icon-wallet.svg" width="24" height="24" alt="Withdrawals"> | **S11** Withdrawals | Retiros multi-moneda | ⏳ |
| <img src="assets/images/icon-notifications.svg" width="24" height="24" alt="Notificaciones"> | **S12** Notifications | Sistema de notificaciones push | ⏳ |
| <img src="assets/images/icon-support.svg" width="24" height="24" alt="Soporte"> | **S13** User Support | Mesa de ayuda integrada | ⏳ |
| <img src="assets/images/icon-cog-wheel.svg" width="24" height="24" alt="Admin"> | **S14** Panel Admin | Administración del sistema | ⏳ |
| <img src="assets/images/icon-analytics.svg" width="24" height="24" alt="Analytics"> | **S15** Analytics | Métricas y reportes | ⏳ |
| <img src="assets/images/icon-document-shield.svg" width="24" height="24" alt="Legal"> | **S16** Legal Compliance | Cumplimiento normativo | ⏳ |
| <img src="assets/images/icon-flags.svg" width="24" height="24" alt="Flags"> | **S17** Feature Flags | Control de características | ⏳ |
| <img src="assets/images/icon-compass.svg" width="24" height="24" alt="Monitoreo"> | **S18** Monitoring | Monitoreo de salud del nodo | ⏳ |

---

### Ecosistema (S19-S21)
*Servicios DePIN externos*

| Icono | Sistema | Descripción | Estado |
|:-----:|---------|-------------|:------:|

</div>

<div align="center">

**[---

### Proveedores Externos
*Integraciones de terceros que potencian los sistemas*

| Sistema | Proveedor | Función |
|:---|:---|:---|
| S05 Bandwidth | Honeygain, Pawns.app, BrightSDK | Ancho de banda |
| S06 peaq | peaq SDK | Blockchain L1 |
| S10 Auth | Supabase Auth | Autenticación |
| S11 Withdrawals | PayOS, EBANX, Mercado Pago | Pasarela de pagos |
| S15 Analytics | PostHog, Metabase | Métricas |
| S18 Monitoring | Sentry, UptimeRobot | Monitoreo |

**[Ver documentación completa](https://1inquisidor1.github.io/Resource-digital/docs/index.md)**

</div>

---

## Contribuir

Este proyecto está en desarrollo activo. Para contribuir:

1. Revisa el [Plan de Desarrollo](https://1inquisidor1.github.io/Resource-digital/legal/roadmap.html)
2. Abre un Issue con tu propuesta
3. Sube un Pull Request siguiendo las guías de estilo

---

## Contacto

- **Email:** andy@resourcedigital.dpdns.org
- **GitHub:** [@1inquisidor1](https://github.com/1inquisidor1)

---

## Licencia

[MIT License](LICENSE) — Libre uso, modificación y distribución.

---


<p align="center">© 2026 Resource Digital. Construyendo el futuro DePIN en Latinoamérica.</p>

<p align="center">
<a href="legal/privacy.html">Privacidad</a> ·
<a href="legal/terms.html">Términos</a> ·
<a href="legal/roadmap.html">Plan</a> ·
<a href="legal/beta.html">Beta</a> ·
<a href="legal/app-simulator.html">Demo</a>
</p>
