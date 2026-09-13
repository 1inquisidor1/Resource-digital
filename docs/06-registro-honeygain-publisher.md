---
title: Registro Honeygain Publisher
status: active
phase: null
owner: andy
last_updated: 2026-09-13
related: []
---


## 1. ¿Qué es Honeygain SDK?

Honeygain SDK es una solución de **monetización pasiva sin anuncios** que permite a los
desarrolladores generar ingresos compartiendo el ancho de banda no utilizado de sus usuarios. El SDK
corre en segundo plano, no accede a datos personales y es **GDPR y CCPA compliant**.

## Datos clave (2026)

- Integración en menos de 30 minutos con documentación clara.
- Pagos vía **PayPal o transferencia bancaria**.
- Dashboard en tiempo real para trackear ganancias.
- Compatible con anuncios, IAPs y suscripciones (monetización híbrida).

## 2. Requisitos previos

| Requisito | Detalle |
|-----------|---------|
| Cuenta de desarrollador | Email válido |
| App Android | Proyecto Flutter en desarrollo |
| Consentimiento de usuario | Diálogo opt-in obligatorio |
| Opt-out accesible | Desde configuración de la app |
| Política de privacidad | URL pública (GitHub Pages sirve) |

## 3. Proceso de registro (3 pasos oficiales)

### Paso 1: Registrarse como publisher

1. Ve a **[sdk.honeygain.com](https://sdk.honeygain.com)**
2. Click en **"Get started"** o **"Sign up"**
3. Completa el formulario:

   - **Nombre completo**
   - **Email corporativo** (o personal si aún no tienes empresa)
   - **Nombre de la app**: `Resource Digital`
   - **Plataforma**: Android

- **Descripción breve**: "App de ingresos pasivos que monetiza ancho de banda no utilizado mediante

SDK de Honeygain"

1. El equipo de **business developers** de Honeygain te contactará para asistirte en el proceso.

### Paso 2: Integrar el SDK

1. Descarga el SDK para Android desde el dashboard de Honeygain
2. Sigue la guía paso a paso:

   - **Android nativo**: Integración directa en `build.gradle`
   - **Flutter**: Usar `MethodChannel` para conectar con el SDK nativo Android
3. Tiempo estimado: **1-2 días** para integración completa.

### Paso 3: Implementar consentimiento y opt-out

## Requisitos obligatorios de Honeygain

1. **Informar claramente** al usuario sobre el uso compartido de ancho de banda.
2. **Opt-in único** (one-time consent).
3. **Opt-out siempre accesible** desde configuración.
4. **NO** ocultar la actividad del SDK ni engañar al usuario.

**Implementación en Flutter (Sistema 16 — Cumplimiento Legal):**

```dart
// lib/systems/s16_legal/honeygain_consent.dart

class HoneygainConsent {
  static Future<bool> showConsentDialog(BuildContext context) async {
    return await showDialog<bool>(
      context: context,
      barrierDismissible: false,
      builder: (context) => AlertDialog(
        title: const Text('Comparte tu ancho de banda'),
        content: const SingleChildScrollView(
          child: Text(
            'Resource Digital usa Honeygain SDK para compartir tu ancho de banda '
            'no utilizado con empresas de investigación de mercado e IA.\n\n'
            '• Solo se activa cuando tú lo permites\n'
            '• Puedes desactivarlo en cualquier momento\n'
            '• Recibes el 70% de los ingresos generados\n'
            '• Tus datos personales nunca se comparten\n\n'
            '¿Aceptas compartir tu ancho de banda no utilizado?',
          ),
        ),
        actions: [
          TextButton(
            onPressed: () => Navigator.pop(context, false),
            child: const Text('No, gracias'),
          ),
          ElevatedButton(
            onPressed: () => Navigator.pop(context, true),
            child: const Text('Acepto y quiero ganar'),
          ),
        ],
      ),
    ) ?? false;
  }
}
```

### Paso 4: Submit para review

1. Sube tu APK/AAB al dashboard de Honeygain
2. Honeygain hace un **quick review** (típicamente 1-2 días hábiles).
3. Una vez aprobado, comienzas a generar ingresos desde el primer usuario activo.

## 4. Estructura de ingresos

| Concepto | Detalle |
|----------|---------|
| **Pago al publisher** | Variable según uptime y geolocalización |
| **Pago mínimo** | $20 (Honeygain consumer) / Negociable para publishers SDK |
| **Método de pago** | PayPal o transferencia bancaria |
| **Dashboard** | Ganancias en tiempo real por app y dispositivo |

## 5. Estimación de ingresos (beta Ecuador)

| Escenario | Usuarios | Uptime | Ingreso estimado/mes |
|-----------|----------|--------|---------------------|
| Beta inicial | 10 | 60% | ~$1-3 |
| Beta ampliada | 50 | 70% | ~$15-25 |
| Mes 6 | 200 | 75% | ~$80-120 |

*Nota: Honeygain paga ~$0.02/GB. El ingreso real depende del tráfico efectivo.*

## 6. Checklist de registro

- [ ] Cuenta de email dedicada creada (ej. `andy@resourcedigital.dpdns.org`)
- [ ] Registro en [sdk.honeygain.com](https://sdk.honeygain.com)
- [ ] Formulario de publisher completado
- [ ] Contacto con business developer establecido
- [ ] SDK descargado para Android
- [ ] Política de privacidad publicada
- [ ] Diálogo de consentimiento implementado
- [ ] Opt-out en configuración funcional
- [ ] APK de prueba subido para review

## 7. Preguntas frecuentes del proceso

## ¿Necesito empresa registrada?

No. Honeygain permite publishers individuales. Si luego quieres facturar a escala, puedes registrar
una empresa en Ecuador.

## ¿Cuánto tarda el review?

Quick review: 1-2 días hábiles.

## ¿Puedo usar Honeygain junto a otros SDKs de banda?

Sí. Honeygain SDK es compatible con modelos híbridos. Cuando migres a Pawns.app en el futuro, puedes
tener ambos en paralelo.

## ¿Qué pasa si un usuario desactiva el opt-in?

El SDK se detiene inmediatamente. No genera ingresos para ese usuario, pero tampoco consume
recursos.

## ¿Honeygain accede a datos personales?

No. El SDK está diseñado para **no recolectar PII** y todo el tráfico está cifrado.

## 8. Enlaces útiles

| Recurso | URL |
|---------|-----|
| Dashboard SDK | [https://sdk.honeygain.com](https://sdk.honeygain.com) |
| Registro publisher | [https://sdk.honeygain.com/start-sdk-monetization](https://sdk.honeygain.com/start-sdk-monetization) |
| Documentación | [https://sdk.honeygain.com/blog](https://sdk.honeygain.com/blog) |
| Soporte | Contacto directo vía dashboard |
| API (no oficial) | [https://github.com/malmeloo/honeygain.py](https://github.com/malmeloo/honeygain.py) |
