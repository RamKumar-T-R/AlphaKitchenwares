'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "fbf31f82ca2dafb67869300ba990ade0",
"assets/assets/2.png": "8ef805c785f9932d50b839a2322978bc",
"assets/assets/arjun.jpg": "c7072d130afdbd43cf34eb5b12540015",
"assets/assets/ashok.png": "af104b2343ee3220309f992a08298864",
"assets/assets/chef.png": "9187465575351ece16041a9330605e74",
"assets/assets/city1.jpg": "624026bd415bf4acff896cc589fbfd90",
"assets/assets/city10.jpg": "975245b3040da304faca5600aaa8759a",
"assets/assets/city11.jpg": "956759e7139df9912c28260765d740f9",
"assets/assets/city12.jpg": "5c37cc4a3110c7cdba97d4bf27ed1386",
"assets/assets/city2.jpg": "00ac9036ef24de459f595f3b45d9b761",
"assets/assets/city3.jpg": "02eeec01d2e0d0d2b170c01e0880f24f",
"assets/assets/city4.jpg": "29440d1e00448de4d27c1dfe21c65b7f",
"assets/assets/city5.jpg": "5a2fbf948b7bc376cab76d6e49b75c9b",
"assets/assets/city6.jpg": "1a307c9914faca566d39548e49978dc7",
"assets/assets/city7.jpg": "cf7d9c4e656a5556d5db0e13b688e65a",
"assets/assets/city8.jpg": "495194d0de6ae4342952a6362ecf6ca0",
"assets/assets/city9.jpg": "296572cc56534214764772d3981d598d",
"assets/assets/coffee.png": "474ee535c3ebd64cc5222619f6f63ac9",
"assets/assets/colabrate.jpg": "5e7918d14c5d1f9813478ae5365ec16a",
"assets/assets/dry.png": "433b63c2acadedf2bbcfd62558f114ab",
"assets/assets/freezer.png": "8ae33e8c8a1da0044befc2685d885ab6",
"assets/assets/fryer.jpg": "4d9ce201f2dfba9a4b839204a75153a9",
"assets/assets/grill.png": "6a1cfda9595af04d952f5653f2bb5036",
"assets/assets/img4.png": "02c741305a819322ae4bc3490887b48f",
"assets/assets/img6.png": "17c0ef31d5dc82dd958790db12ccace6",
"assets/assets/img8.png": "3dce03b4b0674b75f060eba454c20132",
"assets/assets/juice.png": "417b8f353e3837c056c8e7fae75fdb04",
"assets/assets/Kitchen.png": "c751b537267580b82beeaa3e570bc7a8",
"assets/assets/logo.jpeg": "4f3cefb90dac715b71a3d12ddd734ed4",
"assets/assets/nimesh.jpg": "07073df57a7089ffa2ecfc2310c007c7",
"assets/assets/otg.png": "3a502412b9588bb951d318d32cce207d",
"assets/assets/pizza.png": "ff57de043c166329f3e946ef5b7768fa",
"assets/assets/plantery.png": "6fd9ec29f3230ff47d27d889e6116d92",
"assets/assets/popcorn.jpg": "cd82aade9bc0ff61fe73f1cc31857ed6",
"assets/assets/ram.jpg": "c4ca6716ac981b73c5b4ae6ec4418235",
"assets/assets/sandwich1.jpg": "a15c541f7f4189b1aa56676d222a3f5a",
"assets/assets/sandwidch.jpeg": "676496cb0b276ecf3a4631286c83a352",
"assets/assets/sandwidch.jpg": "14ce2c0166642aa80af0a3fc5f99b1f1",
"assets/assets/showcase.png": "38a4f657933ad0c5903889fbca02e3fe",
"assets/assets/shwarma.png": "e99ecfb9b0244312ea2b9268338503bc",
"assets/assets/snack.png": "d18ebc8a683c4496e1f2bc0de674ad61",
"assets/assets/snacks.jpg": "b321370f25449b5932d0af78dc651c86",
"assets/assets/waffel.jpg": "c28b6e02a8778d5b7237fd8a63e696bf",
"assets/assets/zapsplat_multimedia_game_sound_menu_click_004_76690.mp3": "f725aa951d3a2a15a2ac48314545adcf",
"assets/font/Itim-Regular.ttf": "4a3f2cf1ced5257b6af803f4b86bf427",
"assets/FontManifest.json": "74803d5d4da232afc47ec0c4ba49e724",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "3e115a66848bc66eb1917f12cff150c4",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/shaders/ink_sparkle.frag": "3657c44c77e3a6aae02f6e56d97c3855",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/logo.jpeg": "4f3cefb90dac715b71a3d12ddd734ed4",
"index.html": "b51ea918391cd4fcab5952b2352ab1a8",
"/": "b51ea918391cd4fcab5952b2352ab1a8",
"logo.jpeg": "4f3cefb90dac715b71a3d12ddd734ed4",
"main.dart.js": "c537e94025ecd5b79b086dc4fc003960",
"manifest.json": "f58289895f8b7b5d22457cc7504a48e9",
"version.json": "a41818285d730180d5ac36ef473f52b3"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
