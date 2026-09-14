---
title: Arquitectura de 18 Sistemas Atómicos
status: active
phase: null
owner: andy
last_updated: 2026-09-14
related: []
---

# Arquitectura de 18 Sistemas Atómicos

## Filosofía

> **18 módulos internos propios** + **integraciones externas** = arquitectura limpia y mantenible.

Los 18 sistemas son **código propio** de la app.

Las integraciones externas (Honeygain, DeNet, Acurast, etc.) son
**proveedores** que los sistemas consumen.

## Diagrama de Flujo

**UI → Servicio → Sensores → Buffer Local → SDK Banda**
→ [Backend Fase 2]

## Desglose de 18 Sistemas

### Sistemas Core (S01-S05)

| # | Sistema | Función | Fase |
|---|---------|---------|------|
| S01 | App UI | Interfaz principal y navegación | 1 |
| S02 | Foreground Service | Servicio en primer plano persistente | 1 |
| S03 | Sensor Capture | Captura de luz, ruido y movimiento | 2 |
| S04 | SQLite Buffer | Almacenamiento local cifrado | 1 |
| S05 | Bandwidth Orchestrator | Gestión de ancho de banda | 1 |

### DePIN Layer (S06-S09)

| # | Sistema | Función | Fase |
|---|---------|---------|------|
| S06 | peaq L1 | Identidad descentralizada (DID) | 2 |
| S07 | Boosters Engine | Multiplicadores de ganancias | 2 |
| S08 | Resource Panel | Dashboard de recursos | 2 |
| S09 | Affiliates v2 | Sistema de referidos multinivel | 2 |

### Soporte (S10-S18)

| # | Sistema | Función | Fase |
|---|---------|---------|------|
| S10 | Auth and Registry | Autenticación y registro | 1 |
| S11 | Withdrawals | Retiros multi-moneda | 1 |
| S12 | Notifications | Sistema de notificaciones push | 1 |
| S13 | User Support | Mesa de ayuda integrada | 2 |
| S14 | Admin Panel | Administración del sistema | 2 |
| S15 | Analytics | Métricas y reportes | 2 |
| S16 | Legal Compliance | Cumplimiento normativo | 1 |
| S17 | Feature Flags | Control de características | 2 |
| S18 | Monitoring | Monitoreo de salud del nodo | 2 |

## Integraciones Externas (Proveedores)

Los sistemas consumen estos servicios de terceros:

| Sistema | Proveedor Externo |
|:---|:---|
| S05 Bandwidth | Honeygain, Pawns.app, BrightSDK |
| S06 peaq | peaq SDK |
| S10 Auth | Supabase Auth |
| S11 Withdrawals | PayOS, EBANX, Mercado Pago |
| S15 Analytics | PostHog, Metabase |
| S18 Monitoring | Sentry, UptimeRobot |
