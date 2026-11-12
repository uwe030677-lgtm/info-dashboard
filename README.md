# Tarif-Kompass

Ein Vergleichsrechner für Strom, Gas, Internet/Telefon und Versicherungen, mit Kündigungsfristen, in einer einzigen HTML-Datei. Er braucht weder Server noch Build: Öffne einfach `index.html` im Browser.

## Funktionen

**Strom & Gas**
- Jahresverbrauch eingeben oder schätzen (Haushaltsgröße bzw. Wohnfläche, m³ → kWh)
- Ranking nach Kosten im 1. Jahr inkl. Bonus, ab dem 2. Jahr ohne Bonus oder im Ø über 2 Jahre
- Ersparnis, Abschlag und Grenzpreis gegenüber dem aktuellen Tarif

**Internet & Telefon** (Internet/Festnetz und Mobilfunk)
- Aktionspreise, Routermiete, Einmalkosten und Gutschriften ergeben einen Ø-Monatspreis über 12/24/36 Monate
- Preis pro Mbit/s bzw. GB; Filter „mindestens so schnell wie bisher“

**Versicherungen**
- Privathaftpflicht, Hausrat, Kfz, Rechtsschutz, Zahnzusatz und eigene Arten
- Leistungen gewichten, Selbstbeteiligung über Schadenquote einrechnen, Gesamtwert 0–100

**Vergleichsportale & Vergleichbarkeit**
- Links zu Portalen und Tipps zu Filtereinstellungen
- Screenshot einer Portal-Ergebnisliste einlesen; Angebote werden mit Quelle übernommen
- Automatische Prüfung: unterschiedliche Laufzeiten, Preisgarantien, Bonus-Effekte, Leistungen, Selbstbeteiligung,
  gleicher Tarif in mehreren Portalen zu unterschiedlichen Preisen, Abweichung Portalpreis ↔ Nachrechnung, Anzeigen
- Optional: Claude erklärt Unterschiede und nennt offene Fragen

**Fristen & Erinnerungen**
- Verträge mit Beginn, Mindestlaufzeit, Verlängerung und Kündigungsfrist erfassen
- Berechnet Vertragsende, letzten Kündigungstag und Erinnerungsdatum (1–3 Monate vorher)
- Kalendertermine per Outlook- oder Google-Link; lokal zusätzlich Export als .ics
- Hinweis-Banner, sobald eine Frist in die Erinnerungszeit fällt

**Foto einlesen** (nur als Claude-Artifact)
- Rechnungen, Policen, Angebote und Verträge fotografieren; Claude liest die Daten aus, du prüfst sie vor dem Übernehmen

Die Daten werden nur lokal im Browser gespeichert (localStorage). Über die Zwischenablage kannst du sie sichern und wiederherstellen.
Alle Einträge, die mit „Beispiel“ beginnen, sind erfundene Werte.

## Sicherheit & Datenschutz

- **Keine Server, keine Tracker, keine fremden Schriften.** Beim Öffnen und Bedienen stellt die Seite keine einzige Netzwerkverbindung her.
- **Optionale Verschlüsselung:** Mit Passwort wird nur verschlüsselt gespeichert (AES-256-GCM, Schlüssel per PBKDF2-SHA256 mit 600.000 Iterationen). Der Schlüssel liegt nur im Arbeitsspeicher. Automatische Sperre nach 10 Minuten Inaktivität oder 5 Minuten im Hintergrund; beim Sperren werden alle Daten aus der Seite entfernt. Wartezeit nach wiederholten Fehlversuchen.
- **Verschlüsselte Sicherungen:** Mit aktivem Passwortschutz ist auch die Sicherung in der Zwischenablage verschlüsselt.
- **Content-Security-Policy** (lokale `index.html`): Nur das eigene, per SHA-256-Hash freigegebene Skript läuft; Netzwerkzugriffe, Formularziele, Frames und Plugins sind gesperrt.
- **Schutz vor eingeschleustem Code:** Alle Eingaben, importierten Sicherungen und Foto-Ergebnisse werden vor der Anzeige maskiert. Getestet mit präparierten Sicherungen.
- **Externe Links** senden keinen Referrer.
- **Daten verlassen den Browser nur auf deine Aktion:** Fotos und „Mit Claude prüfen“ (über dein Claude-Konto an Anthropic), Kalender-Knöpfe (Termintext an Microsoft bzw. Google).

Grenzen: Gegen Schadsoftware auf dem Gerät, bösartige Browser-Erweiterungen oder ein schwaches Passwort kann keine Webseite schützen. Ohne Passwort sind verschlüsselte Daten nicht wiederherstellbar.
