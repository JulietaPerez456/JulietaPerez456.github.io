//Asignar un nombre y version al cache
const CACHE_NAME = 'c1_cache_102';
//Archivos a guardar
var urlsToCache =[
    'https://github.com/JulietaPerez456/JulietaPerez456.github.io/index.html'
    
];

//Evento install
//Instalacion SW y almacer en cache los rescursos
self.addEventListener('install',e=> {
    e.waitUntill(
        caches.open(CACHE_NAME)
        .then(cache=>{
            cache.addAll(urlsToCache)
            .then(()=>{
                self.skipaWaiting();
            })
        })
        .catch(err=>{
            console.log('No se ha registrado el cache', err);
        })
    )
});
//Evento Activate
//Este evento activa el SW  y una vez que se activa trabaja offline
self.addEventListener('activate', e=>{
    const cacheWhitelist = [CACHE_NAME]
    e.waitUntill(
        caches.keys()
        .then(cacheNames=>{
            return Promise.all(
                cacheNames.map(cacheName=>{
                    if(cacheWhitelist.indexOf(cacheName)=== -1){
                        return caches.delete(cacheName);
                    }
                })
            )
        })
        .then(()=>{
            self.clients.claim();
        })
    );
})
//Evento fetch
self.addEventListener('fetch', e=>{
    e.respondWith(
        caches.match(e.request)
        .then(res=>{
            if(res){
                return res;
            }
            return fetch(e.request);
        })
    )
});