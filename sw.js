const CACHE="stacktestpro-v14-cache-proof";
const CORE=["./","index.html","manifest.webmanifest"];
self.addEventListener("install",e=>{self.skipWaiting();e.waitUntil(caches.open(CACHE).then(c=>c.addAll(CORE)));});
self.addEventListener("activate",e=>e.waitUntil(Promise.all([caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k)))),self.clients.claim()])));
self.addEventListener("fetch",e=>{
 if(e.request.method!=="GET") return;
 if(e.request.mode==="navigate"){
   e.respondWith(fetch(e.request,{cache:"no-store"}).then(r=>{const c=r.clone();caches.open(CACHE).then(x=>x.put("index.html",c));return r;}).catch(()=>caches.match("index.html")));
   return;
 }
 e.respondWith(fetch(e.request,{cache:"no-store"}).catch(()=>caches.match(e.request)));
});
