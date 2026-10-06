/* =========================================================
   sw.js — オフラインで使えるようにする係（ビルド時に自動で作られる）
   - キャッシュ名は nhnote- で始まる。消すのも自分の名前のものだけ（同じサイトの他のアプリには触らない）
   - 新しい版はすぐには切り替えず、アプリの「更新する」ボタンで切り替える
   - キャッシュが何かの理由で消えていても、ネットにつながれば自動で取り直す
   ========================================================= */
const VERSION = 'e59d60e57dff';
const PREFIX = 'nhnote-';
const CACHE = PREFIX + VERSION;
const FILES = [
 "./",
 "./BoardNote.js",
 "./ChartNote.js",
 "./CompareView.js",
 "./DiagramNote.js",
 "./ImageView.js",
 "./MapView.js",
 "./Preview.js",
 "./TableNote.js",
 "./app.css",
 "./app.js",
 "./icon-180.png",
 "./icon-512.png",
 "./index.html",
 "./manifest.webmanifest",
 "./map-l0.json",
 "./map-l1.json",
 "./map-l2.json",
 "./map-meta.json",
 "./mapState.js",
 "./relief-0.jpg",
 "./relief-1.jpg",
 "./relief-2.jpg",
 "./render.js",
 "./seed-01-kodai.json",
 "./seed-02-chusei.json",
 "./seed-03-kinsei.json",
 "./seed-04-kindai.json",
 "./seed-05-gendai.json",
 "./seed-06-world.json",
 "./seed-index.json",
 "./signals.module.js",
 "./terr.json",
 "./years.js"
];
/** いつもネットを先に見るもの（新しい初期データ・版の確認用） */
const NETWORK_FIRST = ['version.json', 'seed-index.json'];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE).then((c) => Promise.all(FILES.map((f) => c.add(new Request(f, { cache: 'reload' })).catch(() => {}))))
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k.startsWith(PREFIX) && k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('message', (e) => { if (e.data === 'SKIP_WAITING') self.skipWaiting(); });

async function fromNetwork(req, cache) {
  const res = await fetch(req);
  if (res && res.ok && res.type === 'basic') cache.put(req, res.clone()).catch(() => {});
  return res;
}

self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return;
  const scope = new URL(self.registration.scope);
  if (!url.pathname.startsWith(scope.pathname)) return;
  const name = url.pathname.slice(scope.pathname.length);

  event.respondWith((async () => {
    const cache = await caches.open(CACHE);
    if (NETWORK_FIRST.includes(name)) {
      try { return await fromNetwork(req, cache); } catch { const hit = await cache.match(req, { ignoreSearch: true }); if (hit) return hit; throw new Error('offline'); }
    }
    if (req.mode === 'navigate') {
      const hit = await cache.match('./index.html') || await cache.match('./');
      if (hit) return hit;
      try { return await fromNetwork(new Request('./index.html'), cache); } catch { return new Response('オフラインです。ネットにつないで開き直してください。', { status: 503, headers: { 'Content-Type': 'text/plain; charset=utf-8' } }); }
    }
    const hit = await cache.match(req, { ignoreSearch: true });
    if (hit) return hit;
    try { return await fromNetwork(req, cache); } catch { return new Response('', { status: 504 }); }
  })());
});
