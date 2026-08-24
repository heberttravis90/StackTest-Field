const CACHE = "stacktestpro-v019-rc1";
const CORE = ["./index.html?v=19rc1", "./manifest.webmanifest?v=17rc2"];
self.addEventListener("install", event => {
  self.skipWaiting();
  event.waitUntil(caches.open(CACHE).then(cache => cache.addAll(CORE)));
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
  const req = event.request;
  if (req.mode === "navigate") {
    event.respondWith((async()=>{
      try {
        const fresh = await fetch(req);
        const cache = await caches.open(CACHE);
        cache.put("./index.html?v=19rc1", fresh.clone());
        return fresh;
      } catch (_) {
        return (await caches.match("./index.html?v=19rc1")) || (await caches.match(req));
      }
    })());
    return;
  }
  event.respondWith(caches.match(req).then(cached => cached || fetch(req).then(async fresh => {
    const cache = await caches.open(CACHE);
    cache.put(req, fresh.clone());
    return fresh;
  })));
});
