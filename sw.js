const CACHE = 'stack-test-pro-mobilize-native-actions-20260910-v2';
const CORE = ['./', './index.html', './manifest.webmanifest', './icon-192.png', './icon-512.png', './rata-standards-patch.js', './mobilize-fix.js'];
const RATA_PATCH_TAG = '<script src="./rata-standards-patch.js?v=20260908rata2"></script>';
const MOBILIZE_PATCH_TAG = '<script src="./mobilize-fix.js?v=20260910native1"></script>';

self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE).then(cache => cache.addAll(CORE)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

async function injectRuntimePatches(response) {
  if (!response) return response;
  const type = response.headers.get('content-type') || '';
  if (!type.includes('text/html')) return response;

  let text = await response.text();
  if (!text.includes('rata-standards-patch.js')) {
    text = text.replace(/<\/body>/i, `${RATA_PATCH_TAG}</body>`);
  }
  if (!text.includes('mobilize-fix.js')) {
    text = text.replace(/<\/body>/i, `${MOBILIZE_PATCH_TAG}</body>`);
  }

  const headers = new Headers(response.headers);
  headers.set('content-type', 'text/html; charset=utf-8');
  headers.delete('content-length');

  return new Response(text, {
    status: response.status,
    statusText: response.statusText,
    headers
  });
}

self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;
  const url = new URL(event.request.url);
  if (url.origin !== self.location.origin) return;

  const isNavigation =
    event.request.mode === 'navigate' ||
    url.pathname.endsWith('/') ||
    url.pathname.endsWith('/index.html');

  event.respondWith(
    caches.match(event.request).then(async cached => {
      let response = cached;

      if (!response) {
        try {
          response = await fetch(event.request);
          const copy = response.clone();
          caches.open(CACHE).then(cache => cache.put(event.request, copy)).catch(() => {});
        } catch (_) {
          response = await caches.match('./index.html');
        }
      }

      return isNavigation ? injectRuntimePatches(response) : response;
    })
  );
});
