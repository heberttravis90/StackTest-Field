const CACHE = "stacktestpro-v059-rc1-single-mobilize-loadout";
const SHELL = "./?v=059rc1";

self.addEventListener("install", event => {
  self.skipWaiting();
  event.waitUntil((async()=>{
    const keys = await caches.keys();
    await Promise.all(keys.map(k=>caches.delete(k)));
    const cache = await caches.open(CACHE);
    try { const r = await fetch(SHELL, {cache:"reload"}); if (r.ok) await cache.put(SHELL, r.clone()); } catch (_) {}
  })());
});
self.addEventListener("activate", event => {
  event.waitUntil((async()=>{
    const keys = await caches.keys();
    await Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k)));
    await self.clients.claim();
  })());
});
self.addEventListener("fetch", event => {
  if (event.request.method !== "GET") return;
  const url = new URL(event.request.url);
  if (url.origin !== self.location.origin) return;
  if (event.request.mode === "navigate") {
    event.respondWith((async()=>{
      try {
        const fresh = await fetch(event.request, {cache:"no-store"});
        if (fresh && fresh.ok) { const cache=await caches.open(CACHE); await cache.put(SHELL,fresh.clone()); }
        return fresh;
      } catch (_) { return (await caches.match(SHELL)) || Response.error(); }
    })());
    return;
  }
  event.respondWith(fetch(event.request,{cache:"no-store"}).catch(()=>caches.match(event.request)));
});
