#!/usr/bin/env python3
"""Trägt den SHA-256-Hash des Inline-Skripts in die Content-Security-Policy einer HTML-Datei ein.
Aufruf: python3 tools/csp-hash.py morgen.html"""
import base64, hashlib, re, sys

path = sys.argv[1]
html = open(path, encoding="utf-8").read()
scripts = re.findall(r"<script>(.*?)</script>", html, re.S)
assert len(scripts) == 1, "genau ein Inline-Skript erwartet"
digest = base64.b64encode(hashlib.sha256(scripts[0].encode("utf-8")).digest()).decode()
html, n = re.subn(r"script-src 'sha256-[^']*'", f"script-src 'sha256-{digest}'", html)
assert n == 1, "script-src nicht gefunden"
open(path, "w", encoding="utf-8").write(html)
print(f"{path}: sha256-{digest}")
