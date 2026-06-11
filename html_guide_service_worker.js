const CACHE_NAME = 'html-guide-v1';

const ASSETS = [
  '/HTML-Guide/',
  '/HTML-Guide/index.html',
  '/HTML-Guide/html_guide_stylesheet.css',
  '/HTML-Guide/html_guide_engine.js',
  '/HTML-Guide/html_1_lessons.js',
  '/HTML-Guide/html_2_lessons.js',
  '/HTML-Guide/html_3_lessons.js',
  '/HTML-Guide/html_4_lessons.js',
  '/HTML-Guide/html_5_lessons.js',
  '/HTML-Guide/html_guide_manifest.json',
  '/HTML-Guide/icon_192.png',
  '/HTML-Guide/icon_512.png'
];

// Install — cache all core assets
self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open(CACHE_NAME).then(function(cache) {
      return cache.addAll(ASSETS);
    })
  );
  self.skipWaiting();
});

// Activate — remove old caches
self.addEventListener('activate', function(e) {
  e.waitUntil(
    caches.keys().then(function(keys) {
      return Promise.all(
        keys.filter(function(key) {
          return key !== CACHE_NAME;
        }).map(function(key) {
          return caches.delete(key);
        })
      );
    })
  );
  self.clients.claim();
});

// Fetch — network first, fall back to cache
self.addEventListener('fetch', function(e) {
  e.respondWith(
    fetch(e.request).then(function(response) {
      const copy = response.clone();
      caches.open(CACHE_NAME).then(function(cache) {
        cache.put(e.request, copy);
      });
      return response;
    }).catch(function() {
      return caches.match(e.request);
    })
  );
});
