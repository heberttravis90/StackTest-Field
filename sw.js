const CACHE = "stacktestpro-v020-rc2";
const APP_SHELL = "./index.html?v=20rc2";
const CORE = [APP_SHELL, "./manifest.webmanifest?v=20rc2"];

self.addEventListener("install", event => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE).then(cache =>
      Promise.all(CORE.map(url =>
        fetch(url, { cache: "no-store" }).then(response => {
          if (response.ok) return cache.put(url, response.clone());
        })
      ))
    )
  );
});

self.addEventListener("activate", event => {
  event.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(keys.filter(key => key !== CACHE).map(key => caches.delete(key)));
    await self.clients.claim();
  })());
});

self.addEventListener("fetch", event => {
  if (event.request.method !== "GET") return;
  const req = event.request;

  // Always go to the network first for page navigations so GitHub updates
  // cannot be hidden behind the browser HTTP cache or an old app-shell cache.
  if (req.mode === "navigate") {
    event.respondWith((async () => {
      try {
        const fresh = await fetch(req, { cache: "no-store" });
        if (fresh && fresh.ok) {
          const cache = await caches.open(CACHE);
          await cache.put(APP_SHELL, fresh.clone());
        }
        return fresh;
      } catch (_) {
        return (await caches.match(APP_SHELL)) || Response.error();
      }
    })());
    return;
  }

  // Network-first for same-origin app files; cached copy is only an offline fallback.
  if (new URL(req.url).origin === self.location.origin) {
    event.respondWith((async () => {
      try {
        const fresh = await fetch(req, { cache: "no-store" });
        if (fresh && fresh.ok) {
          const cache = await caches.open(CACHE);
          await cache.put(req, fresh.clone());
        }
        return fresh;
      } catch (_) {
        return (await caches.match(req)) || Response.error();
      }
    })());
  }
});
