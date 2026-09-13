---
title: README Documentacion
status: active
phase: null
owner: andy
last_updated: 2026-09-13
related: []
---

Bienvenido a la base de conocimientos tecnica de **Resource Digital**. Este proyecto esta construido sobre una arquitectura de **21 Sistemas Atomicos** para garantizar la escalabilidad DePIN.

## Arquitectura Core (Sistemas 1-9)

Sistemas que forman el motor operativo del nodo en el dispositivo del usuario.

- [S00: Vision General](00-vision-general.md) - Concepto, propuesta de valor y modelo de negocio
- [S01: App UI](systems/s01-app-ui.md) - Interfaz de usuario, onboarding y experiencia de usuario
- [S02: Servicio & Overlay](systems/s02-foreground-service.md) - Gestion de primer plano y persistencia del nodo
- [S03: Captura de Sensores](systems/s03-sensor-capture.md) - Recoleccion de datos ambientales y anonimizacion
- [S04: Buffer Local](systems/s04-sqlite-buffer.md) - Almacenamiento SQLite WAL y rotacion de datos
- [S05: SDK de Banda](systems/s05-bandwidth-orchestrator.md) - Integracion de monetizacion de ancho de banda
- [S06: Capa peaq](systems/s06-peaq-l1.md) - Identidad DID y verificacion on-chain
- [S07: Boosters & Reparto](systems/s07-boosters-engine.md) - Algoritmos de multiplicadores y reparto 70/30
- [S08: Panel de Recursos](systems/s08-resource-panel.md) - Transparencia de consumo y ganancias
- [S09: Afiliados v2.0](systems/s09-affiliates-v2.0.md) - Sistema de referidos multinivel

## Sistemas de Soporte (Sistemas 10-18)

Infraestructura de backend, legal y monitoreo.

- [S10: Auth & Registro](systems/s10-auth-%26-registry.md) - Gestion de identidad y consentimiento legal
- [S11: Retiros](systems/s11-withdrawals.md) - Pasarelas de pago USDC-FIAT
- [S12: Notificaciones](systems/s12-notifications.md) - Sistema de alertas y eventos
- [S13: Soporte](systems/s13-user-support.md) - FAQ y centro de ayuda
- [S14: Panel Admin](systems/s14-admin-panel.md) - Dashboard de control global
- [S15: Analytics](systems/s15-analytics.md) - Metricas de red y comportamiento anonimo
- [S16: Legal](07-seguridad-privacidad.md) - Cumplimiento GDPR/LGPD
- [S17: Feature Flags](systems/s17-feature-flags.md) - Gestion de despliegues graduales
- [S18: Monitoreo](systems/s18-monitoring.md) - Alertas de salud del sistema y fraude

## Ecosistema Completo (Sistemas 19-21)

Fuentes de ingreso de alto valor.

- [S19: DeNet Storage](systems/s19-denet-storage.md) - Almacenamiento descentralizado
- [S20: Acurast Compute](systems/s20-acurast-compute.md) - Computo descentralizado
- [S21: PayOS Gateway](systems/s21-payos-gateway.md) - Pagos interoperables multi-chain

---
*Ultima actualizacion: 2026-09-13*
