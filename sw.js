// Service Worker para KT Optimizer
// Cache de recursos para melhor performance

const CACHE_NAME = 'kt-optimizer-v1.0.0';
const RUNTIME_CACHE = 'kt-optimizer-runtime';

// Recursos para cache imediato
const PRECACHE_URLS = [
    '/',
    '/index.html',
    '/style.css',
    '/script.js',
    '/performance-optimizations.js',
    '/logo.png',
    '/kt-interface.png',
    '/task.jpg'
];

// Instalação - cachear recursos críticos
self.addEventListener('install', event => {
    console.log('🔧 Service Worker: Instalando...');
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                console.log('📦 Service Worker: Cacheando recursos');
                return cache.addAll(PRECACHE_URLS);
            })
            .then(() => self.skipWaiting())
    );
});

// Ativação - limpar caches antigos
self.addEventListener('activate', event => {
    console.log('✅ Service Worker: Ativando...');
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames
                    .filter(cacheName => {
                        return cacheName !== CACHE_NAME && cacheName !== RUNTIME_CACHE;
                    })
                    .map(cacheName => {
                        console.log('🗑️ Service Worker: Removendo cache antigo:', cacheName);
                        return caches.delete(cacheName);
                    })
            );
        }).then(() => self.clients.claim())
    );
});

// Fetch - estratégia de cache
self.addEventListener('fetch', event => {
    const { request } = event;
    const url = new URL(request.url);

    // Ignorar requisições não-HTTP
    if (!url.protocol.startsWith('http')) {
        return;
    }

    // Estratégia: Cache First para assets estáticos
    if (request.destination === 'image' || 
        request.destination === 'style' || 
        request.destination === 'script' ||
        request.destination === 'font') {
        
        event.respondWith(
            caches.match(request).then(cachedResponse => {
                if (cachedResponse) {
                    return cachedResponse;
                }

                return fetch(request).then(response => {
                    // Não cachear se não for sucesso
                    if (!response || response.status !== 200 || response.type === 'error') {
                        return response;
                    }

                    // Clonar resposta
                    const responseToCache = response.clone();

                    caches.open(RUNTIME_CACHE).then(cache => {
                        cache.put(request, responseToCache);
                    });

                    return response;
                });
            })
        );
        return;
    }

    // Estratégia: Network First para HTML
    if (request.destination === 'document') {
        event.respondWith(
            fetch(request)
                .then(response => {
                    const responseToCache = response.clone();
                    caches.open(RUNTIME_CACHE).then(cache => {
                        cache.put(request, responseToCache);
                    });
                    return response;
                })
                .catch(() => {
                    return caches.match(request);
                })
        );
        return;
    }

    // Default: Network First com fallback para cache
    event.respondWith(
        fetch(request)
            .then(response => {
                if (response.status === 200) {
                    const responseToCache = response.clone();
                    caches.open(RUNTIME_CACHE).then(cache => {
                        cache.put(request, responseToCache);
                    });
                }
                return response;
            })
            .catch(() => {
                return caches.match(request);
            })
    );
});

// Mensagens do cliente
self.addEventListener('message', event => {
    if (event.data && event.data.type === 'SKIP_WAITING') {
        self.skipWaiting();
    }
    
    if (event.data && event.data.type === 'CLEAR_CACHE') {
        event.waitUntil(
            caches.keys().then(cacheNames => {
                return Promise.all(
                    cacheNames.map(cacheName => caches.delete(cacheName))
                );
            })
        );
    }
});

// Background Sync (opcional - para funcionalidades offline)
self.addEventListener('sync', event => {
    if (event.tag === 'sync-data') {
        event.waitUntil(syncData());
    }
});

async function syncData() {
    // Implementar lógica de sincronização se necessário
    console.log('🔄 Service Worker: Sincronizando dados...');
}

// Push Notifications (opcional)
self.addEventListener('push', event => {
    const options = {
        body: event.data ? event.data.text() : 'Nova atualização disponível!',
        icon: '/logo.png',
        badge: '/logo.png',
        vibrate: [200, 100, 200],
        data: {
            dateOfArrival: Date.now(),
            primaryKey: 1
        },
        actions: [
            {
                action: 'explore',
                title: 'Ver agora',
                icon: '/logo.png'
            },
            {
                action: 'close',
                title: 'Fechar',
                icon: '/logo.png'
            }
        ]
    };

    event.waitUntil(
        self.registration.showNotification('KT Optimizer', options)
    );
});

// Notification Click
self.addEventListener('notificationclick', event => {
    event.notification.close();

    if (event.action === 'explore') {
        event.waitUntil(
            clients.openWindow('/')
        );
    }
});

console.log('🚀 Service Worker: Carregado com sucesso!');
