const staticGrosir = "SW-001";
const assets = [
  "/",
  "manifest.json",
  "assets/js/register.js",
  "assets/images/soffi grosir.png",
];

let deferredPrompt;

self.addEventListener("beforeinstallprompt", (e) => {
  e.preventDefault();
  deferredPrompt = e;

  showInstallPromotion();
});

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(staticGrosir).then(cache => {
      cache.addAll(assets)
    })
  );
});

self.addEventListener("fetch", fetchEvent => {
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then(res => {
      return res || fetch(fetchEvent.request)
    })
  );
});