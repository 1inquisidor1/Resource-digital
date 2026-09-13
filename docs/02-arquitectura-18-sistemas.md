# Arquitectura de 18 Sistemas Atómicos

## 🏗️ Diagrama de Flujo
**UI $ightarrow$ Servicio $ightarrow$ Sensores $ightarrow$ Buffer $ightarrow$ Backend $ightarrow$ peaq $ightarrow$ Reparto**

## 🧩 Desglose de Sistemas

### Sistemas Core (1-9)
| # | Sistema | Función |
|---|---------|---------|
| 1 | App UI (Flutter) | Onboarding, billetera-nodo, panel de recursos, boosters |
| 2 | Servicio Primer Plano + Overlay | Notificación persistente, watchdog, arranque automático |
| 3 | Captura de Sensores | Luz, ruido, movimiento, ubicación aprox. (Anonimizado) |
| 4 | Buffer Local (SQLite WAL) | Almacenamiento cifrado 24h, rotación, reintento backoff |
| 5 | SDK de Banda | Monetización de ancho de banda (Pawns.app / Honeygain) |
| 6 | Capa peaq | peaq ID, peaq pay, peaq store, peaq verify |
| 7 | Boosters y Reparto | Multiplicadores, fórmula 70/30, precio dinámico |
| 8 | Panel de Recursos | Transparencia de uso, ganancias e impacto en dispositivo |
| 9 | Sistema de Afiliados v2.0 | 3 niveles, comisiones escalonadas, anti-fraude |

### Sistemas de Soporte (10-18)
| # | Sistema | Función |
|---|---------|---------|
| 10 | Autenticación y Registro | Email/Google/Wallet, creación de peaq ID |
| 11 | Retiro de Ganancias | PIX, SPEI, USDC, PayPal (Umbral $5) |
| 12 | Notificaciones | Push + in-app, eventos de sistema |
| 13 | Soporte al Usuario | FAQ, chat IA, tickets |
| 14 | Panel de Administración | Gestión de usuarios, retiros y configuración global |
| 15 | Analytics y Métricas | PostHog + Metabase (Sin PII) |
| 16 | Cumplimiento Legal | GDPR/LGPD, Términos y Privacidad |
| 17 | Feature Flags | Firebase Remote Config, rollout gradual |
| 18 | Monitoreo y Alertas | Sentry, UptimeRobot, alertas de fraude |

## 🛡️ Garantías de Atomicidad
- **Sin dependencias circulares:** Flujo unidireccional hacia el backend.
- **Aislamiento:** Isolate para el servicio y SQLite para el buffer.
- **Idempotencia:** `UNIQUE` keys en eventos de referidos y transacciones.

### Integraciones de Infraestructura DePIN
- **S05 (Banda)** $ightarrow$ Conectado a Aggregated Bandwidth SDK (Honeygain, Bright, Pawns).
- **S06 (Identidad)** $ightarrow$ Conectado a peaq L1.
- **S15 (Almacenamiento)** $ightarrow$ Integración con DeNet Watcher Nodes.
- **S18 (Cómputo)** $ightarrow$ Integración con Acurast Mobile Compute.