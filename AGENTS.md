# AGENTS.md

> Instrucciones estables para asistentes de IA que trabajen en este repositorio.
> Este archivo describe **cómo trabajar**, no **qué existe**. Para saber qué
> existe, leer `docs/INDEX.md`.

---

## 1. Principios generales

- **Fuente de verdad única**: cada dato vive en un solo archivo. Si necesitas
  repetirlo, enlaza. Nunca dupliques.
- **Estado vs. reglas**: las reglas (este archivo) son estables. El estado
  (`docs/`) cambia. No mezcles.
- **Un tema = un archivo**: no crear archivos "varios" o "misc".
- **Fechas en ISO 8601**: `2026-09-13`. Nunca `13/09/2026` ni `septiembre 2026`.
- **Idioma**: documentación en español. Código y variables en inglés.
- **Sin emojis decorativos**. Solo `✅` `⚠` `❌` `⏳` `` para estado.

---

## 2. Cómo navegar el repo

Antes de hacer cualquier cosa:

1. Leer `docs/INDEX.md` → mapa completo de la documentación.
2. Leer `docs/roadmap.md` → fases actuales y plazos.
3. Leer el archivo específico del sistema o tema que vas a tocar.

Si un archivo no existe en `docs/INDEX.md`, **no lo crees sin añadirlo al índice**.

### Estructura de carpetas

| Carpeta | Contenido | Editable |
|---|---|---|
| `docs/` | Documentación en markdown | Si |
| `docs/systems/` | Un archivo por sistema (S01–S21) | ✅ Si |
| `docs/_archive/` | Documentos originales | No |
| `app/` | Proyecto Flutter | ✅ Si |
| `web/` | Landing page | ✅ Si |
| `supabase/` | Configuración Supabase | ✅ Si |

**Nunca editar** archivos en `docs/_archive/`. Son históricos.

---

## 3. Convenciones de documentación

### Frontmatter obligatorio

Todo `.md` en `docs/` (excepto `INDEX.md` y este archivo) empieza with:

```yaml
---
title: Título descriptivo
status: draft | active | archived
phase: 1 | 2 | 3 | null
owner: andy
last_updated: YYYY-MM-DD
related: [archivo1.md, archivo2.md]
---
```

- `status: archived` → el documento ya no se mantiene, pero se conserva.
- `phase: null` → no aplica a una fase concreta (ej. cuentas, stack).

### Nombres de archivo

- `kebab-case.md` siempre.
- Sin espacios, sin mayúsculas, sin acentos.
- Sistemas: `S01-ui.md`, `S02-service.md`, etc.
- Prefijo numérico solo en documentos principales de `docs/` (`01-arquitectura.md`, `02-cuentas.md`).

### Estructura de un archivo de sistema

Todo archivo en `docs/systems/` sigue **exactamente** esta estructura:

```markdown
---
title: SXX — Nombre
status: pending | in-progress | done | planned
phase: 1 | 2 | 3
owner: andy
last_updated: YYYY-MM-DD
related: [...]
---

# SXX — Nombre

## Descripción
(una frase)

## Estado
- Fase: X
- Estado: Pendiente |  En progreso | Completado
- Dependencias: SXX, SXX
- Bloqueadores: (ninguno | descripción)

## Función
(qué hace)

## Contratos de datos
(si aplica)

## Notas de implementación
(si aplica)
```

**No añadir secciones nuevas** sin actualizar esta plantilla en `AGENTS.md`.

### Tablas

- Usar tablas markdown estándar. No HTML embebido.
- Encabezados en `| Columna | Columna |`.
- Alineación con `|:---|` (izquierda), `:---:` (centro), `---:` (derecha).

### Enlaces

- Relativos dentro del repo: `[S01](./systems/S01-ui.md)`.
- Absolutos solo para URLs externas: `[peaq](https://peaq.network)`.

---

## 4. Convenciones de código

### Flutter / Dart

- `dart format` obligatorio antes de commit.
- Estado: Riverpod.
- Navegación: go_router.
- Estructura: `lib/features/<sistema>/` una carpeta por sistema.
- Archivos: `snake_case.dart`.
- Clases: `PascalCase`.
- Sin `print()`: usar `logger` o `debugPrint` solo en debug.
- Sin `!` (non-null assertion) sin justificación en comentario.
- Sin lógica en `build()`. Extraer a providers o servicios.
- Tests en `test/` espejando `lib/`.

### HTML / CSS / JS

- HTML semántico: `<header>`, `<main>`, `<section>`, `<footer>`.
- CSS con tokens en `:root`. Nunca hardcodear colores ni tamaños.
- Sin `!important`.
- Sin dependencias externas salvo fuentes.
- Accesibilidad: `focus-visible`, `prefers-reduced-motion`, `lang="es"`.

---

## 5. Cómo hacer cambios

### Añadir un sistema nuevo

1. Crear `docs/systems/SXX-nombre.md` con la plantilla de la sección 3.
2. Añadirlo a la tabla de `docs/INDEX.md`.
3. Añadirlo a `docs/01-arquitectura.md` en la lista de sistemas.
4. **No tocar `AGENTS.md`**.

### Actualizar el estado de un sistema

1. Editar solo el frontmatter (`status`, `last_updated`) y la sección "Estado".
2. **No tocar otros archivos**.
3. Si el cambio afecta a la fase, actualizar `docs/roadmap.md`.

### Añadir una cuenta o servicio

1. Editar `docs/cuentas.md` en la sección correspondiente.
2. Añadir entrada al historial de registros al final del archivo.
3. **No crear archivos nuevos**.

### Renombrar o mover un archivo

1. Actualizar `docs/INDEX.md`.
2. Buscar referencias en todos los `.md` y actualizarlas.
3. Actualizar el frontmatter `related` de los archivos afectados.

### Detectar incoherencias

Si encuentras dos documentos que se contradicen:

1. **No lo resuelvas por tu cuenta.**
2. Añadir una entrada a `docs/_inconsistencies.md`:
   ```markdown
   | Fecha | Documentos | Descripción | Estado |
   |---|---|---|---|
   | 2026-09-13 | archivo1.md vs archivo2.md | Descripción breve | Abierta |
   ```
3. Avisar al owner en el PR o commit.

---

## 6. Qué NO hacer

- Editar archivos en `docs/_archive/`.
- Duplicar información entre documentos.
- Crear archivos sin añadirlos a `docs/INDEX.md`.
- Renombrar archivos sin actualizar referencias.
- Resolver incoherencias sin avisar.
- Añadir secciones nuevas a los archivos de sistema.
- Usar HTML embebido en markdown (salvo tablas complejas).
- Usar emojis decorativos.
- Fechas en formatos no ISO.
- Modificar `AGENTS.md` sin que cambien las convenciones del proyecto.

---

## 7. Comandos

### Flutter (en `app/`)

```bash
flutter pub get
flutter run
flutter test
flutter analyze
dart format .
```

### Web (en `web/`)

No hay build. Editar y hacer commit. GitHub Pages despliega automáticamente.

### Git

```bash
git add .
git commit -m "tipo(alcance): descripción"
git push
```

Tipos de commit: `feat`, `fix`, `docs`, `refactor`, `chore`.

---

## 8. Orden de prioridad ante conflicto

Si dos documentos se contradicen, prevalece en este orden:

1. `docs/systems/S*.md` (estado por sistema)
2. `docs/01-arquitectura.md` (arquitectura global)
3. `docs/roadmap.md` (fases y plazos)
4. `docs/cuentas.md` (servicios y credenciales)
5. `docs/03-diario.md` (histórico)

Si el conflicto es entre un `.docx` de `_archive/` y un `.md` de `docs/`,
**siempre prevalece el `.md`**.
