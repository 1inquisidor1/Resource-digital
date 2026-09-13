#!/bin/bash
# Setup script for verification system
# Run once: bash scripts/setup.sh

echo "=== Setting up verification system ==="

# Check Python
if ! command -v python3 &> /dev/null; then
    echo "ERROR: python3 is required"
    exit 1
fi

# Install Python dependencies
echo "Installing Python dependencies..."
pip3 install pyyaml

# Install pre-commit
echo "Installing pre-commit..."
pip3 install pre-commit

# Install hooks
echo "Installing git hooks..."
pre-commit install

# Run initial validation
echo ""
echo "=== Running initial validation ==="
echo ""

echo "1. Validating frontmatter..."
python3 scripts/validate_frontmatter.py || true

echo ""
echo "2. Validating INDEX..."
python3 scripts/validate_index.py || true

echo ""
echo "3. Validating systems..."
python3 scripts/validate_systems.py || true

echo ""
echo "4. Validating coherence..."
python3 scripts/validate_coherence.py || true

echo ""
echo "=== Setup complete ==="
echo ""
echo "Pre-commit hooks installed. They will run automatically on every commit."
echo "To run manually: pre-commit run --all-files"
