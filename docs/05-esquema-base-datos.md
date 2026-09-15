---
title: Esquema Base de Datos
status: active
phase: null
owner: andy
last_updated: 2026-09-15
related: []
---

## Tablas

Esquema completo en `supabase/schema.sql` (fuente de verdad, no duplicar DDL aquí).

| Tabla | Sistema | Contenido |
|---|---|---|
| `profiles` | S10 | Identidad del nodo (peaq DID, wallet, nivel) |
| `node_readings` | S03–S04 | Lecturas anonimizadas de sensores |
| `earnings` | S07–S11 | Ingresos por fuente y estado |
| `withdrawals` | S11 | Solicitudes de retiro multi-moneda |

## Decisiones

- RLS activado en las 4 tablas: cada nodo solo accede a sus filas (`auth.uid() = node_id`).
- `earnings` es solo lectura para el usuario; los pagos los escribe el backend.
- Índices en `(node_id, timestamp)` y `(node_id, status)` para el panel (S08).
- `CHECK` restringen niveles, sensores, fuentes y métodos de retiro válidos.
