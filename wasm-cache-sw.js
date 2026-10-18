// Deliberately never cache HTML, JavaScript, user documents or unversioned libraries.
const files = ["assets/opencascade_single-B9DBEong.wasm","assets/planegcs-D26TcjLy.wasm"];
const allowed = new Set(files.map(path => new URL(path, self.registration.scope).href));
const cacheName = 'mcad-wasm-v1:' + new URL(self.registration.scope).pathname;
const inFlight = new Map();
self.addEventListener('install', event => event.waitUntil(self.skipWaiting()));
self.addEventListener('activate', event => event.waitUntil(self.clients.claim()));
self.addEventListener('fetch', event => {
  const request = event.request;
  if (request.method !== 'GET' || request.headers.has('range') || !allowed.has(request.url)) return;
  const work = (async () => {
    let cache;
    try {
      cache = await caches.open(cacheName);
      const hit = await cache.match(request);
      if (hit) return hit;
    } catch { /* Private mode/quota restrictions must never block modeling. */ }
    let pending = inFlight.get(request.url);
    if (!pending) {
      pending = (async () => {
        const response = await fetch(request);
        if (cache && response.ok && response.headers.get('content-type')?.includes('application/wasm')) {
          // Do not await persistence before returning the streaming response.
          const persist = cache.put(request, response.clone()).then(async () => {
            // Retain the current manifest only. Other open builds still load from network.
            for (const key of await cache.keys()) if (!allowed.has(key.url)) await cache.delete(key);
          }).catch(() => undefined);
          event.waitUntil(persist);
        }
        return response;
      })();
      inFlight.set(request.url, pending);
      pending.finally(() => inFlight.delete(request.url)).catch(() => undefined);
    }
    return (await pending).clone();
  })();
  event.respondWith(work);
});
