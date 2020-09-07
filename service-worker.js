'use strict';

const CACHE_NAME = 'static-cache-v1';

const FILES_TO_CACHE = [
	'./p.html',
	'./icon-512.png',
];

self.addEventListener('install', function(e) {
	console.log('[ServiceWorker] Install');
	e.waitUntil(
		caches.open(CACHE_NAME).then((cache) => {
			console.log('[ServiceWorker] Pre-caching offline page');
		})
	);
	self.skipWaiting();
});

self.addEventListener('activate', function(e) {
	console.log('[ServiceWorker] Activate');
	self.clients.claim();
});

self.addEventListener('fetch', function(e) {});