// Deliberately never cache HTML, JavaScript, user documents or unversioned libraries.
const files = ["assets/opencascade_single-B9DBEong.wasm","assets/planegcs-D26TcjLy.wasm"];
const allowed = new Set(files.map(path => new URL(path, self.registration.scope).href));
const cacheName = 'mcad-wasm-v1:' + new URL(self.registration.scope).pathname;
const inFlight = new Map();
self.addEventListener('install', event => event.waitUntil(self.skipWaiting()));
self.addEventListener('activate', event => event.waitUntil(self.clients.claim()));
self.addEventListener('message', event => {
  if (event.data?.type === 'mcad-wasm-observer') event.ports[0]?.postMessage(event.source?.id);
});
self.addEventListener('fetch', event => {
  const url = new URL(event.request.url);
  const observer = url.searchParams.get('mcad-observer');
  url.searchParams.delete('mcad-observer');
  if (event.request.method !== 'GET' || event.request.headers.has('range') || !allowed.has(url.href)) return;
  const request = new Request(url.href, event.request);
  const notify = async (phase, source) => {
    try {
      const client = await self.clients.get(observer || event.clientId);
      if (client?.url.startsWith(self.registration.scope)) client.postMessage({ type: 'mcad-wasm-status', url: request.url, phase, source });
    } catch { /* Status delivery never changes the resource response. */ }
  };
  const track = (response, source) => {
    if (!response.ok || !response.body) { void notify('failed', source); return response; }
    const headers = new Headers(response.headers);
    headers.delete('content-length'); headers.delete('content-encoding');
    return new Response(response.body.pipeThrough(new TransformStream({
      flush() { return notify('initializing', source); },
    })), { status: response.status, statusText: response.statusText, headers });
  };
  const work = (async () => {
    let cache;
    try {
      cache = await caches.open(cacheName);
      const hit = await cache.match(request);
      if (hit) { await notify('cache', 'cache'); return track(hit, 'cache'); }
    } catch { /* Private mode/quota restrictions must never block modeling. */ }
    await notify('downloading', 'network');
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
    try { return track((await pending).clone(), 'network'); }
    catch (error) { await notify('failed', 'network'); throw error; }
  })();
  event.respondWith(work);
});
