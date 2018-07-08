self.addEventListener('install', (event) => {
	event.waitUntil(
		caches.open('v1').then((cache) => {
			return cache.addAll([
				'/',	
				'img/1.jpg',
				'img/2.jpg',
				'img/3.jpg',
				'img/4.jpg',
				'img/5.jpg',
				'img/6.jpg',
				'img/7.jpg',
				'img/8.jpg',
				'img/9.jpg',
				'img/10.jpg',
				'/data/restaurants.json',
				'restaurant.html',
				'css/styles.css',
				'js/main.js',
				'js/dbhelper.js',
				'js/restaurant_info.js',

			]);
		})
	);
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((respond) => {
            return respond || fetch(event.request).then((response) => {
                return caches.open('v1').then((cache) => {
                    cache.put(event.request, response.clone());
                    return response;
                });
            });
        })
    );
});