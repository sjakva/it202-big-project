const staticBigDataApp = "shoaib-comic-app-v1"
const assets = [
  "/",
  "/index.html",
  "/css/style.css",
  "/js/app.js",
  "/serviceWorker.js",
  "/manifest.json",
  "/images/icons/favicon-16x16.png",
  "/images/icons/favicon-32x32.png",
  "/images/icons/favicon-144x144.png",
  "/images/icons/favicon-192x192.png",
  "/images/icons/favicon-512x512.png",
  "/images/icons/apple-touch-icon.png",
  "/images/icons/site.webmanifest",
  "/favicon.ico",
]

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(staticBigDataApp).then(cache => {
      cache.addAll(assets)
    })
  )
})

self.addEventListener("fetch", fetchEvent => {
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then(res => {
      return res || fetch(fetchEvent.request)
    })
  )
})