// Offline-Hülle für das Morgen-Briefing. Wetter und Nachrichten kommen immer frisch aus dem Netz
// (die App speichert den letzten Stand selbst); nur die eigenen Dateien werden zwischengespeichert.
const CACHE = "morgen-briefing-v1";
const FILES = ["morgen.html", "manifest.webmanifest", "icon.svg"];

self.addEventListener("install", (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(FILES)).then(() => self.skipWaiting()));
});
self.addEventListener("activate", (e) => {
  e.waitUntil(caches.keys().then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener("fetch", (e) => {
  const url = new URL(e.request.url);
  if (e.request.method !== "GET" || url.origin !== self.location.origin) return;
  // Netz zuerst, damit Updates sofort ankommen; ohne Netz die gespeicherte Fassung.
  e.respondWith(
    fetch(e.request).then((res) => {
      if (res.ok && FILES.some((f) => url.pathname.endsWith("/" + f))) { const copy = res.clone(); caches.open(CACHE).then((c) => c.put(e.request, copy)); }
      return res;
    }).catch(() => caches.match(e.request, { ignoreSearch: true }))
  );
});
