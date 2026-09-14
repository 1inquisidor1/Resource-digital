#!/usr/bin/env python3
"""Verifica que INDEX.md este sincronizado con docs/."""

import re
import sys
from pathlib import Path

index = Path("docs/index.md").read_text(encoding="utf-8")

# Extraer enlaces del INDEX (archivos .md referenciados)
linked = set(re.findall(r'\]\(\./([^)]+\.md)\)', index))
linked = {Path(l).name for l in linked}

# Archivos reales en docs/ (excluyendo carpetas especiales)
real = set()
for f in Path("docs").rglob("*.md"):
    if "_archive" in str(f) or f.name in {"index.md", "_inconsistencies.md", "AGENTS.md"}:
        continue
    real.add(f.name)

missing_in_index = real - linked
missing_in_docs = linked - real

errors = []
for m in missing_in_index:
    errors.append(f"'{m}' existe en docs/ pero no esta en INDEX.md")
for m in missing_in_docs:
    errors.append(f"'{m}' esta en INDEX.md pero no existe en docs/")

if errors:
    print("INDEX.md desincronizado:")
    for e in errors:
        print(f"  - {e}")
    sys.exit(1)

print("INDEX.md sincronizado correctamente")
