---
title: Bandwidth Orchestrator
status: in-progress
phase: 1
owner: andy
last_updated: 2026-09-15
related: []
---

# S05 — Bandwidth Orchestrator

## Descripción

Orquestador que decide qué SDK de banda ancha corre y cuándo, según consentimiento y red.

## Estado

- Fase: 1
- Estado: in-progress
- Dependencias: S02, S10
- Bloqueadores: aprobación de SDKs (Honeygain y Pawns solicitados, BrightSDK en revisión)

## Función

Gestionar la compartición de ancho de banda usando Honeygain, Pawns y BrightSDK.
Solo comparte con Wi-Fi y consentimiento activo; nunca usa datos móviles sin permiso.

## Contratos de datos

- Entrada: consentimiento del usuario (S10), estado de red (Wi-Fi/móvil).
- Salida: GB compartidos y eventos de ingreso hacia `earnings` con `source: bandwidth`.

## Notas de implementación

- Un solo SDK activo a la vez; rotación configurable por S17.
- Pausa automática sin Wi-Fi o con batería baja (vía S02).
