#!/usr/bin/env python3
"""Valida que todo .md en docs/ tenga frontmatter YAML valido."""

import sys
from pathlib import Path
import yaml

REQUIRED_FIELDS = {"title", "status", "phase", "owner", "last_updated"}
VALID_STATUSES = {"draft", "active", "archived", "pending", "in-progress", "done", "planned"}
VALID_PHASES = {1, 2, 3, None}

EXCLUDE = {"index.md", "AGENTS.md", "_inconsistencies.md"}

errors = []

for md_file in Path("docs").rglob("*.md"):
    if md_file.name in EXCLUDE or "_archive" in str(md_file):
        continue

    content = md_file.read_text(encoding="utf-8")
    if not content.startswith("---"):
        errors.append(f"{md_file}: falta frontmatter YAML")
        continue

    try:
        parts = content.split("---", 2)
        if len(parts) < 3:
            errors.append(f"{md_file}: frontmatter incompleto")
            continue
        fm = yaml.safe_load(parts[1])
    except Exception as e:
        errors.append(f"{md_file}: frontmatter invalido ({e})")
        continue

    if not isinstance(fm, dict):
        errors.append(f"{md_file}: frontmatter no es un diccionario")
        continue

    missing = REQUIRED_FIELDS - set(fm.keys())
    if missing:
        errors.append(f"{md_file}: faltan campos {missing}")
        continue

    if fm.get("status") not in VALID_STATUSES:
        errors.append(f"{md_file}: status invalido {fm.get('status')}")
    if fm.get("phase") not in VALID_PHASES:
        errors.append(f"{md_file}: phase invalida {fm.get('phase')}")
    last_updated = str(fm.get("last_updated", ""))
    if len(last_updated) != 10:
        errors.append(f"{md_file}: last_updated debe ser YYYY-MM-DD")

if errors:
    print("Errores de frontmatter:")
    for e in errors:
        print(f"  - {e}")
    sys.exit(1)

print("Frontmatter validado correctamente")