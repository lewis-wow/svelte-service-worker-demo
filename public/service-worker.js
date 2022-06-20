const cached = [
    "/",
    "/index.html",
    "/assets/build.js",
    "/assets/build.css",
]

self.addEventListener('install', event => {
    const preCache = async () => {
        const cache = await caches.open('store')
        return cache.addAll(cached.map(i => new Request(i)))
    }
    event.waitUntil(preCache())
    self.cacheReady = true
    console.log("Cache was updated")
})


self.addEventListener('fetch', e => {
    e.respondWith(
        caches.match(e.request).then(response => response || fetch(e.request))
    )
})
