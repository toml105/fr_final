const CACHE = 'french-master-v7';
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

  // Navigation requests (page loads, iOS home screen launch, etc.)
  // Always serve index.html for same-origin navigation
  if (e.request.mode === 'navigate' && url.origin === self.location.origin) {
    e.respondWith(
      caches.match('index.html')
        .then(r => r || fetch('index.html'))
        .catch(() => fetch(e.request))
    );
    return;
  }

  // All other requests: cache-first, then network
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
