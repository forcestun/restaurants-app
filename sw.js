const swname = 'sw-v1';

self.addEventListener('install', evt => {
	evt.waitUntil(
		caches.open(swname).then(cache => {
			return cache.addAll([
				'./',
				'./index.html',
				'./restaurant.html',
				'./css/styles.css',
				'./data/restaurants.json',
				'./js/dbhelper.js',
				'./js/main.js',
				'./js/restaurant_info.js',
				'./js/swreg.js',
				'./img/1.jpg',
				'./img/2.jpg',
				'./img/3.jpg',
				'./img/4.jpg',
				'./img/5.jpg',
				'./img/6.jpg',
				'./img/7.jpg',
				'./img/8.jpg',
				'./img/9.jpg',
				'./img/10.jpg'
			]);
		})
	);
});

self.addEventListener('activate', evt => {
	evt.waitUntil(
		caches.keys()
		.then(caches => {
			return Promise.all(
				caches.filter(cache => {
					return cache.startsWith('sw-') &&
						   cache != swname;
				}).map(cache => {
					return caches.delete(cache);
				})
			);
		})
	);
})

self.addEventListener('fetch', evt => {
	evt.respondWith(
		caches.match(evt.request)
		.then(res => {
			return res || fetch(evt.request);
		})
	);
});