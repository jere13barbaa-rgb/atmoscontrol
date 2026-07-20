const CACHE_NAME = 'atmoscontrol-v10';
const assets = [
  'index.html',
  'manifest.json',
  'image_3.png'
];

// Instalar el Service Worker y guardar en caché los archivos base
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(assets);
    })
  );
});

// Interceptar las peticiones para que cargue rápido
self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(response => {
      return response || fetch(e.request);
    })
  );
});