const CACHE = 'french-master-v8';
const FILES = [
  'index.html', 'manifest.json',
  'icon-192.png', 'icon-512.png', 'icon-1024.png', 'apple-touch-icon.png',
  'data-verbs.js', 'data-vocab.js', 'data-grammar.js',
  'data-connectives.js', 'data-phrases.js'
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE)
      .then(c => Promise.all(
        FILES.map(f => c.add(f).catch(() => console.warn('SW: skip', f)))
      ))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  const url = new URL(e.request.url);

  // Navigation requests: network-first so updates are seen immediately
  if (e.request.mode === 'navigate' && url.origin === self.location.origin) {
    e.respondWith(
      fetch(e.request)
        .then(res => {
          const clone = res.clone();
          caches.open(CACHE).then(c => c.put('index.html', clone));
          return res;
        })
        .catch(() => caches.match('index.html'))
    );
    return;
  }

  // JS/data files: network-first to pick up changes, fall back to cache
  if (url.pathname.endsWith('.js') && url.origin === self.location.origin) {
    e.respondWith(
      fetch(e.request)
        .then(res => {
          if (res.ok) {
            const clone = res.clone();
            caches.open(CACHE).then(c => c.put(e.request, clone));
          }
          return res;
        })
        .catch(() => caches.match(e.request))
    );
    return;
  }

  // Everything else (icons, manifest, etc.): cache-first
  e.respondWith(
    caches.match(e.request).then(r => {
      if (r) return r;
      return fetch(e.request).then(res => {
        if (res.ok) {
          const clone = res.clone();
          caches.open(CACHE).then(c => c.put(e.request, clone));
        }
        return res;
      });
    }).catch(() => caches.match('index.html'))
  );
});
