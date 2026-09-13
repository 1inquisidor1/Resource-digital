---
title: Seguridad y Privacidad
status: active
phase: null
owner: andy
last_updated: 2026-09-13
related: []
---

# Seguridad y Privacidad — Resource Digital

## 1. Privacidad por diseño

### 1.1 Principios

| Principio | Implementación |
|-----------|---------------|
| **Anonimización en dispositivo** | Los datos se anonimizan antes de salir del teléfono |
| **Sin PII on-chain** | Solo hashes y DIDs en peaq |
| **Derecho al olvido** | Borrar cuenta = destruir clave de datos + revocar DID |
| **GDPR/LGPD** | Cumplimiento con regulaciones de Brasil y México |
| **Consentimiento explícito** | Opt-in claro para banda, sensores y anuncios |

### 1.2 Consentimiento Honeygain

El SDK de Honeygain requiere:
- Informar claramente sobre el uso compartido de ancho de banda
- Opt-in único (one-time)
- Opt-out siempre accesible desde configuración
- No ocultar actividad ni engañar al usuario

## 2. Capas de seguridad

| Capa | Tecnología | Función |
|------|------------|---------|
| RASP | `flutter_rasp` | Root, Frida, repackaging |
| Storage | `flutter_secure_storage` | Cifrado con Android Keystore |
| Auth | Supabase Auth + JWT | Tokens |
| Autorización | Row Level Security | Aislamiento por usuario |
| Red | Certificate pinning TLS | Anti-MITM |
| Build | Ofuscación Flutter | Anti-ingeniería inversa |
| On-chain | peaq ID + peaq verify | Identidad descentralizada |

## 3. Cumplimiento legal

- **GDPR** (Europa): Aplicable si hay usuarios europeos
- **LGPD** (Brasil): Aplicable para mercado brasileño
- **CCPA** (California): Aplicable si hay usuarios en EE.UU.
- **LFPDPPP** (México): Aplicable para mercado mexicano

## 4. Política de retención de datos

| Tipo de dato | Retención | Ubicación |
|--------------|-----------|-----------|
| Ganancias | 5 años (fiscal) | Supabase (cifrado) |
| Sesiones banda | 90 días | Supabase |
| Buffer sensores | 24h local + 30d remoto | SQLite + Supabase |
| peaq DIDs | Permanente (público) | peaq blockchain |
| Logs de auth | 30 días | Supabase |

## 5. Soporte y Contacto
Para cualquier consulta legal, solicitudes de eliminación de datos o soporte técnico, contacte al correo oficial:
**andy@resourcedigital.dpdns.org**

## Fase 3: Ecosistema Completo

### Sistemas de Fase 3
- **S19 - DeNet Storage:** Cifrado E2E, almacenamiento descentralizado
- **S20 - Acurast Compute:** Procesamiento seguro, TEE (Trusted Execution Environment)
- **S21 - PayOS Gateway:** Cumplimiento KYC/AML, regulación multi-chain

### Consideraciones de Seguridad Fase 3
- Auditoría de contratos inteligentes de terceros
- Verificación formal de integraciones DeNet/Acurast
- Cumplimiento normativo para pagos cross-border
