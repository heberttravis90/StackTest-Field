const CACHE = "stacktestpro-v032-rc2-readable-traverse-points";
const SHELL = "./?v=030rc2";

self.addEventListener("install", event => {
  self.skipWaiting();
  event.waitUntil((async()=>{
    const keys = await caches.keys();
    await Promise.all(keys.map(k=>caches.delete(k)));
    const cache = await caches.open(CACHE);
    try {
      const r = await fetch(SHELL, {cache:"reload"});
      if (r.ok) await cache.put(SHELL, r.clone());
    } catch (_) {}
  })());
});

self.addEventListener("activate", event => {
  event.waitUntil((async()=>{
    const keys = await caches.keys();
    await Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k)));
    if (self.registration.navigationPreload) {
      try { await self.registration.navigationPreload.enable(); } catch(_) {}
    }
    await self.clients.claim();
  })());
});

self.addEventListener("message", event => {
  if (event.data === "SKIP_WAITING") self.skipWaiting();
});

self.addEventListener("fetch", event => {
  if (event.request.method !== "GET") return;
  const url = new URL(event.request.url);
  if (url.origin !== self.location.origin) return;

  if (event.request.mode === "navigate") {
    event.respondWith((async()=>{
      try {
        const preload = await event.preloadResponse;
        const fresh = preload || await fetch(event.request, {cache:"reload"});
        if (fresh && fresh.ok) {
          const cache = await caches.open(CACHE);
          await cache.put(SHELL, fresh.clone());
        }
        return fresh;
      } catch (_) {
        return (await caches.match(SHELL)) || Response.error();
      }
    })());
    return;
  }

  event.respondWith((async()=>{
    try {
      return await fetch(event.request, {cache:"reload"});
    } catch (_) {
      return (await caches.match(event.request)) || Response.error();
    }
  })());
});
