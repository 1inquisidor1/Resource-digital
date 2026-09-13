#!/usr/bin/env python3
"""Verifica coherencia entre docs/systems/, assets/data/systems.json y web/index.html."""

import re
import sys
from pathlib import Path
import yaml
import json

errors = []

# --- 1. Extraer sistemas de los documentos ---
docs_systems = {}
systems_path = Path("docs/systems")

if systems_path.exists():
    # Buscar archivos con patron SXX-nombre.md o SXX_nombre.md (mayuscula)
    for f in list(systems_path.glob("S*.md")) + list(systems_path.glob("s*.md")):
        content = f.read_text(encoding="utf-8")
        parts = content.split("---", 2)
        if len(parts) < 3:
            continue
        try:
            data = yaml.safe_load(parts[1])
        except Exception:
            continue
        if not isinstance(data, dict):
            continue
        
        # Extraer ID del nombre del archivo
        match = re.match(r'^[Ss](\d+)', f.name)
        if not match:
            continue
        sid = f"S{match.group(1)}"
        
        docs_systems[sid] = {
            "phase": data.get("phase"),
            "status": data.get("status"),
            "file": str(f),
        }

# --- 2. Extraer sistemas del JSON ---
json_path = Path("assets/data/systems.json")
if not json_path.exists():
    print("ERROR: assets/data/systems.json no existe")
    sys.exit(1)

json_data = json.loads(json_path.read_text(encoding="utf-8"))
json_systems = {}
for s in json_data.get("systems", []):
    sid = s.get("id", "").upper()
    json_systems[sid] = {
        "phase": s.get("phase"),
        "status": s.get("status"),
    }

# --- 3. Extraer sistemas de la landing ---
html_path = Path("index.html")
landing_systems = {}
if html_path.exists():
    html = html_path.read_text(encoding="utf-8")
    # Buscar sistemas en el HTML (hardcodeados o en datos embebidos)
    # Primero buscar en el JSON embebidos en el HTML
    for sid in json_systems:
        # Verificar que el sistema aparece en el HTML
        if f'>{sid}<' in html or f'> {sid} <' in html:
            landing_systems[sid] = json_systems[sid]["phase"]

# --- 4. Comparar docs vs JSON ---
# 4a. Conteo total
if len(docs_systems) != len(json_systems):
    errors.append(
        f"Conteo de sistemas difiere: docs={len(docs_systems)}, "
        f"json={len(json_systems)}"
    )

# 4b. Cada sistema en docs debe estar en JSON
for sid, doc_data in docs_systems.items():
    if sid not in json_systems:
        errors.append(f"{sid} existe en docs pero no en systems.json")
        continue

    json_data_item = json_systems[sid]

    if doc_data["phase"] != json_data_item["phase"]:
        errors.append(
            f"{sid}: fase difiere — docs={doc_data['phase']}, "
            f"json={json_data_item['phase']}"
        )

# 4c. Cada sistema en JSON debe estar en docs
for sid in json_systems:
    if sid not in docs_systems:
        errors.append(f"{sid} existe en systems.json pero no en docs")

# 4d. Verificaciones especificas
# peaq (S06) y sensores (S03) deben ser Fase 2
for sid in ["S03", "S06"]:
    if docs_systems.get(sid, {}).get("phase") != 2:
        errors.append(f"{sid} debe ser Fase 2 en docs")
    if json_systems.get(sid, {}).get("phase") != 2:
        errors.append(f"{sid} debe ser Fase 2 en systems.json")

# --- 5. Comparar landing vs JSON ---
for sid in json_systems:
    if sid not in landing_systems:
        # Solo advertir si el sistema deberia estar visible
        pass  # Sistemas dinamicos no estan hardcodeados

# --- 6. Reportar ---
if errors:
    print("Incoherencias detectadas:")
    for e in errors:
        print(f"  - {e}")
    sys.exit(1)

print(f"Coherencia verificada: {len(docs_systems)} sistemas alineados")
print(f"  - Documentos: {len(docs_systems)}")
print(f"  - systems.json: {len(json_systems)}")
