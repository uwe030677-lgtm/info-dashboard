# Tarif-Kompass

Ein Vergleichsrechner für Strom, Gas und Versicherungen in einer einzigen HTML-Datei. Er braucht weder Server noch Build: Öffne einfach `index.html` im Browser.

## Funktionen

**Strom & Gas**
- Jahresverbrauch eingeben oder schätzen (Haushaltsgröße bzw. Wohnfläche/Gebäudestandard, m³ → kWh)
- Den aktuellen Tarif (Grundpreis, Arbeitspreis) mit beliebig vielen Angeboten vergleichen
- Ranking nach Kosten im 1. Jahr inkl. Bonus, ab dem 2. Jahr ohne Bonus oder im Ø über 2 Jahre
- Hinweise zu langer Bindung, kurzer Preisgarantie, Bonus-lastigen Tarifen und Ökostrom
- Ersparnis, monatlicher Abschlag und Grenzpreis

**Versicherungen**
- Arten: Privathaftpflicht, Hausrat, Kfz, Rechtsschutz und Zahnzusatz, dazu eigene Arten
- Beitrag mit Zahlweise wird auf den Jahresbeitrag umgerechnet; die Selbstbeteiligung kann mit erwarteter Schadenquote eingerechnet werden
- Leistungen als „wichtig / nett / egal“ gewichten, Schieberegler für Preis ↔ Leistung
- Gesamtwert (0–100) und der Hinweis „Wichtiges fehlt“

**Foto einlesen**
- Fotografiere eine Jahresabrechnung, ein Preisblatt, eine Police oder ein Angebot. Claude liest die Tarifdaten aus, und du prüfst sie, bevor sie übernommen werden.
- Die Funktion gibt es nur, wenn die Seite als Claude-Artifact geöffnet ist. Als lokale Datei ist sie ausgeblendet.

Die Daten werden nur lokal im Browser gespeichert (localStorage). Über die Zwischenablage kannst du sie sichern und wiederherstellen.
Die vorausgefüllten Angebote („Beispiel A, B, C“) sind erfundene Beispielwerte.
