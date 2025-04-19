'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "bff0590ac0bc3ea81bc1d99586ac45fc",
"assets/AssetManifest.bin.json": "0a458dd3d8e0523aa73912d2470a8923",
"assets/AssetManifest.json": "ce4eb58d0751e397aaa8302057798371",
"assets/assets/images/6609288e9a904649b963c9fb1b562fdd_1659210006248.jpg": "0a6a1c2783ec61edd8ab515965e8ad5c",
"assets/assets/images/esa.png": "02e34681b7004a07c287a8e0a3665d2c",
"assets/assets/images/IMG-20220524-WA0023.jpg": "fb2b0ea60ab2bfff162e75fa62bca4ad",
"assets/assets/images/Ingenieurs-scaled.jpg": "60b20e6134f352baed801ca116b99bc5",
"assets/assets/images/logo1.png": "10730e9b45039bbb27fe76137e6177ce",
"assets/assets/images/logo2.png": "b6d58463e745c4caad50d067724441c5",
"assets/assets/images/logo3.png": "9214aad8b755a58a6119f10bcf61bcc4",
"assets/assets/images/logo_AIACI.jpg": "bbbf5250e9705c9a491c9367badba67e",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "65ac44356b4ed06b0905b12ab25fa251",
"assets/images/esa.png": "02e34681b7004a07c287a8e0a3665d2c",
"assets/images/logo1.png": "10730e9b45039bbb27fe76137e6177ce",
"assets/images/logo2.png": "b6d58463e745c4caad50d067724441c5",
"assets/images/logo3.png": "9214aad8b755a58a6119f10bcf61bcc4",
"assets/images/logo_AIACI.jpg": "bbbf5250e9705c9a491c9367badba67e",
"assets/NOTICES": "f0a92a73e4b1feeacf441f70bb15a96a",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "04ed43b8e51daad1e3961865daaa1a5c",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "bf21cd8fd775a3c59fd53afdee39e0e6",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "a2eb084b706ab40c90610942d98886ec",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/web/icons/favicon-16x16.png": "626c2a9daaa50952bc2a41ab35d920b1",
"assets/web/icons/favicon-32x32.png": "11c587a246646225e19cfd2486e78392",
"assets/web/icons/favicon-96x96.png": "b6aa2e555db8184daad39d798fc916ca",
"assets/web/icons/Icon-192.png": "903cb5aaab15c1462cefc76f0c9c7f64",
"assets/web/icons/Icon-512.png": "9bb1b17c66d7871abdeabadc54375ce7",
"assets/web/icons/Icon-maskable-192.png": "869e0b5b61f27fb3d83f2ce5d5b2e0b5",
"assets/web/icons/Icon-maskable-512.png": "64636ab9cb88890529d0156c0078dcc6",
"canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"favicon.png": "11c587a246646225e19cfd2486e78392",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"flutter_bootstrap.js": "3d828deb99950f944e950b2c3337d5c2",
"icons/favicon-16x16.png": "626c2a9daaa50952bc2a41ab35d920b1",
"icons/favicon-32x32.png": "11c587a246646225e19cfd2486e78392",
"icons/favicon-96x96.png": "b6aa2e555db8184daad39d798fc916ca",
"icons/Icon-192.png": "903cb5aaab15c1462cefc76f0c9c7f64",
"icons/Icon-512.png": "9bb1b17c66d7871abdeabadc54375ce7",
"icons/Icon-maskable-192.png": "869e0b5b61f27fb3d83f2ce5d5b2e0b5",
"icons/Icon-maskable-512.png": "64636ab9cb88890529d0156c0078dcc6",
"index.html": "fe681b2465edb2757638b26271e404e5",
"/": "fe681b2465edb2757638b26271e404e5",
"main.dart.js": "420712f3946df4801f2d9205e386d287",
"main.dart.js_1.part.js": "e8c71285f7ef8ac04de78aa8fe7a34d4",
"main.dart.js_10.part.js": "b19dd53e0137da75b3bfb7efbccabe0c",
"main.dart.js_2.part.js": "6540973116c763c1a161ca988d5b8174",
"main.dart.js_3.part.js": "858d45b70e21a13d915116f166584ceb",
"main.dart.js_4.part.js": "1beacaf09bd78c1a18b1ee0bf7813145",
"main.dart.js_5.part.js": "54f425ce39ad0bb3b0b68bcd6a512999",
"main.dart.js_6.part.js": "93e38653780e860fb417fa2df88ba903",
"main.dart.js_7.part.js": "44db0e9ffd158950dcd3b419b7819571",
"main.dart.js_8.part.js": "7db7b77b9b25ab741f42e9b906755dc6",
"main.dart.js_9.part.js": "531ecd9a42050b17445805ecd7cf4614",
"manifest.json": "bbef07a5940fa3ce0b4dfdafada6d5c4",
"service-worker.js": "7215ee9c7d9dc229d2921a40e899ec5f",
"version.json": "a5e770835872ef8376b207592cb4343e"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
