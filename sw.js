// Сервис-воркер: нужен, чтобы сайт можно было установить на телефон как приложение.
// Всегда берёт свежую версию из сети; сохранённая главная показывается, только если интернета нет.
const CACHE = 'sp-v1';
const OFFLINE = ['/', '/assets/base.css?v=3', '/assets/logo.jpg', '/config.js?v=4', '/covers.js?v=8', '/aromas.js?v=1', '/catalog.json'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(OFFLINE)).catch(() => {}).then(() => self.skipWaiting()));
});

self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
    .then(() => self.clients.claim()));
});

self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET' || new URL(req.url).origin !== location.origin) return;
  e.respondWith(fetch(req).then(res => {
    if (res.ok && OFFLINE.includes(new URL(req.url).pathname + new URL(req.url).search)) {
      const copy = res.clone();
      caches.open(CACHE).then(c => c.put(req, copy));
    }
    return res;
  }).catch(() => caches.match(req).then(hit => hit || (req.mode === 'navigate' ? caches.match('/') : Response.error()))));
});
