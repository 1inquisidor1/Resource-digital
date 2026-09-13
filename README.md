# Indice Maestro de Documentacion: Resource Digital

Bienvenido a la base de conocimientos tecnica de **Resource Digital**. Este proyecto esta construido sobre una arquitectura de **21 Sistemas Atomicos** para garantizar la escalabilidad DePIN.

**Estado Actual:** v5.1 ALPHA (Pre-Beta Infraestructura Core)
**Mercado Inicial:** Ecuador (EC)

## Arquitectura Core (Sistemas 1-9)
Estos sistemas forman el motor operativo del nodo en el dispositivo del usuario.

| Sistema | Archivo | Funcion |
|---|---|---|
| S00 | [Vision General](docs/00-vision-general.md) | Concepto, propuesta de valor y modelo de negocio. |
| S01 | [App UI](docs/systems/S01-app-ui.md) | Interfaz de usuario, onboarding y experiencia de usuario. |
| S02 | [Foreground Service](docs/systems/S02-foreground-service.md) | Gestion de primer plano y persistencia del nodo. |
| S03 | [Sensor Capture](docs/systems/S03-sensor-capture.md) | Recoleccion de datos ambientales y anonimizacion. |
| S04 | [SQLite Buffer](docs/systems/S04-sqlite-buffer.md) | Almacenamiento SQLite WAL y rotacion de datos. |
| S05 | [Bandwidth Orchestrator](docs/systems/S05-bandwidth-orchestrator.md) | Integracion de monetizacion de ancho de banda (Honeygain, Pawns, Bright). |
| S06 | [peaq L1](docs/systems/S06-peaq-l1.md) | Identidad DID y verificacion on-chain. |
| S07 | [Boosters Engine](docs/systems/S07-boosters-engine.md) | Algoritmos de multiplicadores y reparto 70/30. |
| S08 | [Resource Panel](docs/systems/S08-resource-panel.md) | Transparencia de consumo y ganancias. |
| S09 | [Affiliates v2.0](docs/systems/S09-affiliates.md) | Sistema de referidos multinivel. |

## Sistemas de Soporte (Sistemas 10-18)
Infraestructura de backend, legal y monitoreo.

| Sistema | Archivo | Funcion |
|---|---|---|
| S10 | [Auth & Registry](docs/systems/S10-auth-registry.md) | Gestion de identidad y consentimiento legal. |
| S11 | [Withdrawals](docs/systems/S11-withdrawals.md) | Pasarelas de pago USDC-FIAT. |
| S12 | [Notifications](docs/systems/S12-notifications.md) | Sistema de alertas y eventos. |
| S13 | [User Support](docs/systems/S13-user-support.md) | FAQ y centro de ayuda. |
| S14 | [Admin Panel](docs/systems/S14-admin-panel.md) | Dashboard de control global. |
| S15 | [Analytics](docs/systems/S15-analytics.md) | Metricas de red y comportamiento anonimo. |
| S16 | [Legal Compliance](docs/systems/S16-legal-compliance.md) | Cumplimiento GDPR/LGPD. |
| S17 | [Feature Flags](docs/systems/S17-feature-flags.md) | Gestion de despliegues graduales. |
| S18 | [Monitoring](docs/systems/S18-monitoring.md) | Alertas de salud del sistema y fraude. |

## Fase 3: Ecosistema Completo (Sistemas 19-21)
Fuentes de ingreso de alto valor mediante almacenamiento y computo descentralizado.

| Sistema | Archivo | Funcion |
|---|---|---|
| S19 | [DeNet Storage](docs/systems/S19-denet-storage.md) | Almacenamiento descentralizado de datos de sensores. |
| S20 | [Acurast Compute](docs/systems/S20-acurast-compute.md) | Computo descentralizado para procesamiento en la nube. |
| S21 | [PayOS Gateway](docs/systems/S21-payos-gateway.md) | Pagos interoperables multi-chain para LatAm. |

## Hoja de Ruta

| Fase | Semanas | Objetivo | Sistemas |
|---|---|---|---|
| 1 | 1-4 | Pre-Beta Infraestructura Core | S01-S05, S10-S12, S16 |
| 2 | 5-8 | Capa DePIN con peaq | S03, S06-S09, S13-S15, S17-S18 |
| 3 | 9+ | Ecosistema Completo | S19-S21 |

## Sistemas en Desarrollo

| Sistema | Estado |
|---|---|
| S01 App UI | Pendiente |
| S02 Foreground Service | Pendiente |
| S03 Sensor Capture | Fase 2 |
| S04 SQLite Buffer | Pendiente |
| S05 Bandwidth Orchestrator | En progreso |
| S06 peaq L1 | Fase 2 |
| S07 Boosters Engine | Fase 2 |
| S08 Resource Panel | Fase 2 |
| S09 Affiliates v2.0 | Fase 2 |
| S10 Auth & Registry | Pendiente |
| S11 Withdrawals | Pendiente |
| S12 Notifications | Pendiente |
| S13 User Support | Fase 2 |
| S14 Admin Panel | Fase 2 |
| S15 Analytics | Fase 2 |
| S16 Legal Compliance | Pendiente |
| S17 Feature Flags | Fase 2 |
| S18 Monitoring | Fase 2 |
| S19 DeNet Storage | Fase 3 |
| S20 Acurast Compute | Fase 3 |
| S21 PayOS Gateway | Fase 3 |

---
*Ultima actualizacion: 2026-09-13*
