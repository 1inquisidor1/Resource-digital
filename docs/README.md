---
title: README Documentacion
status: active
phase: null
owner: andy
last_updated: 2026-09-13
related: []
---


Bienvenido a la base de conocimientos técnica de **Resource Digital**. Este proyecto está construido
sobre una arquitectura de **18 Sistemas Atómicos** para garantizar la escalabilidad DePIN.

## 🏗️ Arquitectura Core (Sistemas 1-9)

Estos sistemas forman el motor operativo del nodo en el dispositivo del usuario.

- [**S00: Visión General**](00-vision-general.md) - Concepto, propuesta de valor y modelo de
negocio.

- [**S01: App UI**](S01_ui.md) - Interfaz de usuario, onboarding y experiencia de usuario.
- [**S02: Servicio & Overlay**](S02_service.md) - Gestión de primer plano y persistencia del nodo.
- [**S03: Captura de Sensores**](S03_sensors.md) - Recolección de datos ambientales y anonimización.
- [**S04: Buffer Local**](S04_buffer.md) - Almacenamiento SQLite WAL y rotación de datos.
- [**S05: SDK de Banda**](06-registro-honeygain-publisher.md) - Integración de monetización de ancho
de banda.

- [**S06: Capa peaq**](S06_peaq.md) - Identidad DID y verificación on-chain.
- [**S07: Boosters & Reparto**](S07_boosters.md) - Algoritmos de multiplicadores y reparto 70/30.
- [**S08: Panel de Recursos**](S08_panel.md) - Transparencia de consumo y ganancias.
- [**S09: Afiliados v2.0**](S09_affiliates.md) - Sistema de referidos multinivel.

## 🛡️ Sistemas de Soporte (Sistemas 10-18)

Infraestructura de backend, legal y monitoreo.

- [**S10: Auth & Registro**](S10_auth.md) - Gestión de identidad y consentimiento legal.
- [**S11: Retiros**](S11_withdraw.md) - Pasarelas de pago USDC→FIAT.
- [**S12: Notificaciones**](S12_notifications.md) - Sistema de alertas y eventos.
- [**S13: Soporte**](S13_support.md) - FAQ y centro de ayuda.
- [**S14: Panel Admin**](S14_admin.md) - Dashboard de control global.
- [**S15: Analytics**](S15_analytics.md) - Métricas de red y comportamiento anónimo.
- [**S16: Legal**](07-seguridad-privacidad.md) - Cumplimiento GDPR/LGPD.
- [**S17: Feature Flags**](S17_flags.md) - Gestión de despliegues graduales.
- [**S18: Monitoreo**](S18_monitoring.md) - Alertas de salud del sistema y fraude.

---
*Última actualización: Septiembre 2026*
