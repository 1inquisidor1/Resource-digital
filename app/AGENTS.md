# AGENTS.md - app Flutter

> Instrucciones estables para IA que editen el codigo de la app.
> Hereda todas las reglas de `../AGENTS.md`. Solo anade lo especifico de Flutter.

## Stack

- Flutter 3.47.4 - Dart 3.13.3
- Estado: Riverpod
- Navegacion: go_router
- Backend: Supabase (Fase 2)
- Local: sqflite + flutter_secure_storage

## Estructura

| Carpeta | Contenido |
|---|---|
| `lib/features/` | Una carpeta por sistema (S01, S02...) |
| `lib/core/` | Logica de negocio compartida |
| `lib/shared/` | Widgets y utilidades reutilizables |
| `lib/config/` | Constantes, rutas, temas |

## Convenciones

- `dart format` obligatorio.
- Archivos: `snake_case.dart`. Clases: `PascalCase`.
- Sin `print()`. Usar `logger`.
- Sin `!` sin justificacion.
- Sin logica en `build()`.
- Strings en `intl`, no hardcodeados.
- Tests espejando `lib/` en `test/`.

## Anadir una feature nueva

1. Crear `lib/features/<nombre>/`.
2. Dentro: `data/`, `domain/`, `presentation/`.
3. Registrar ruta en `lib/config/routes.dart`.
4. Anadir provider en `lib/features/<nombre>/providers.dart`.
5. Test en `test/features/<nombre>/`.

## Que NO hacer

- Anadir dependencias sin justificar en el commit.
- Mezclar logica de negocio con UI.
- Usar `setState` si hay un provider que lo cubra.
- Hardcodear strings visibles al usuario.

## Comandos

```bash
flutter pub get
flutter run
flutter test
flutter analyze
dart format .
```
