# Arquitectura de 21 Sistemas Atómicos

## 🏗️ Diagrama de Flujo
**UI $\rightarrow$ Servicio $\rightarrow$ Sensores $\rightarrow$ Buffer Local $\rightarrow$ SDK Banda $\rightarrow$ [Backend se integra en Fase 2]**

## 🧩 Desglose de 21 Sistemas

### Sistemas Core (1-9)
| # | Sistema | Función | Fase 1 Estado |
|---|---------|---------|---------------|
| 1 | App UI (Flutter) | Onboarding, billetera-nodo, panel de recursos | ⏳ Pendiente |
| 2 | Servicio Primer Plano + Overlay | Notificación persistente, watchdog | ⏳ Pendiente |
| 3 | Captura de Sensores | Luz, ruido, movimiento | ⏳ Fase 2 |
| 4 | Buffer Local (SQLite WAL) | Almacenamiento cifrado 24h | ⏳ Pendiente |
| 5 | SDK de Banda | Monetización de ancho de banda | 🟡 Solicitud Enviada |
| 6 | Capa peaq | peaq ID, peaq pay | ⏳ Fase 2 |
| 7 | Boosters y Reparto | Multiplicadores, fórmula 70/30 | ⏳ Fase 2 (Basado en Backend) |
| 8 | Panel de Recursos | Transparencia de uso y ganancias | ⏳ Pendiente |
| 9 | Sistema de Afiliados v2.0 | 3 niveles, comisiones escalonadas | ⏳ Fase 2 |

### Sistemas de Soporte (10-18)
| # | Sistema | Función | Fase 1 Estado |
|---|---------|---------|---------------|
| 10 | Autenticación y Registro | Email/Google/Wallet, peaq ID | ⏳ Pendiente (Local) |
| 11 | Retiro de Ganancias | PIX, SPEI, USDC, PayPal | ⏳ Fase 2 (Requiere Bank/PayPal) |
| 12 | Notificaciones | Push + in-app | ⏳ Pendiente |
| 13 | Soporte al Usuario | FAQ, chat IA | ⏳ Fase 2 |
| 14 | Panel Admin | Gestión de usuarios | ⏳ Fase 2 |
| 15 | Analytics | PostHog + Metabase | ⏳ Fase 2 |
| 16 | Cumplimiento Legal | GDPR/LGPD | ⏳ Pendiente |
| 17 | Feature Flags | Firebase Remote Config | ⏳ Fase 2 |
| 18 | Monitoreo | Sentry, UptimeRobot | ⏳ Fase 2 |

### Sistemas de Ecosistema (Fase 3)

| # | Sistema | Función | Estado |
|---|---------|---------|--------|
| 19 | DeNet Storage | Almacenamiento descentralizado | ⏳ Fase 3 |
| 20 | Acurast Compute | Cómputo descentralizado | ⏳ Fase 3 |
| 21 | PayOS Gateway | Pagos interoperables LatAm | ⏳ Fase 3 |

## 🛡️ Garantías de Atomicidad
- **Sin dependencias circulares:** Flujo unidireccional.
- **Aislamiento:** Isolate para el servicio y SQLite para el buffer.
- **Idempotencia:** `UNIQUE` keys en eventos de referidos.

### Arquitectura Fase 1: Local-First
En la Fase 1, la arquitectura es **local**. No depende de Supabase ni de peaq.
- El reparto de ganancias (70/30) se calcula localmente.
- La identidad es local hasta la integración de Supabase Auth en Fase 2.
