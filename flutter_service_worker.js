'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "e3a138c20d04f5eca8ebd3e1acf63ca7",
"index.html": "6673404fdcb9d46938015d59b45712e4",
"/": "6673404fdcb9d46938015d59b45712e4",
"main.dart.js": "d470f3303059dcb602385bce0dcc2e97",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "826a1da059be040a9a77197b160af130",
"assets/res/icons/2.0x/ic_stop.png": "75621901447cf54d6e228228d277f2e2",
"assets/res/icons/2.0x/ic_pause.png": "2207620d646b829f4d5253d2add1dc4c",
"assets/res/icons/2.0x/ic_play.png": "c17df9a085c223b89f9654818c66947e",
"assets/res/icons/2.0x/ic_mic.png": "f1aa43acfe152d549bd27a5575e2e727",
"assets/res/icons/2.0x/ic_volume_up.png": "58e41f88ae99cc3035bfab43c3c90495",
"assets/res/icons/2.0x/ic_volume_down.png": "ca834163acfc02fac8068956197e5ca9",
"assets/res/icons/ic_stop.png": "551a3d66204364de6c315996d0490985",
"assets/res/icons/ic_pause.png": "8acac40033925f50c6cac243be032e45",
"assets/res/icons/3.0x/ic_stop.png": "4314dfc4fa6450ea3a03ff5214a5b324",
"assets/res/icons/3.0x/ic_pause.png": "18a1fec3d4515168624fdc664299bf3b",
"assets/res/icons/3.0x/ic_play.png": "11c83b4ca1aa276398e58ea5a630b442",
"assets/res/icons/3.0x/ic_mic.png": "e74379f1a4bb9f6377587e7e5b0b66cd",
"assets/res/icons/3.0x/ic_volume_up.png": "0b888410469da6600c0f9c251b109c0e",
"assets/res/icons/3.0x/ic_volume_down.png": "99fa0c0882261499b44ac205aeb249ae",
"assets/res/icons/ic_play_disabled.png": "37093104d0704e82e37ff77b5bfe3c14",
"assets/res/icons/ic_play.png": "31d3f44aaf4144d295ef9902d6f28304",
"assets/res/icons/ic_mic.png": "e446f3470a9deaa051d92265d56eba68",
"assets/res/icons/ic_stop_disabled.png": "d53e5e6021cc023aca562b4753853900",
"assets/res/icons/ic_volume_up.png": "eed6ca154b0a540723b58b4a43864370",
"assets/res/icons/ic_volume_down.png": "0113bb8289967b8858337352320523a1",
"assets/res/icons/ic_pause_disabled.png": "53feda844a6a60d7ba68787aaad65cb3",
"assets/res/icons/ic_mic_disabled.png": "0622347432196c951cf1c916f620a3d2",
"assets/AssetManifest.json": "0fc75035a1c8b926df9a2a917632fe77",
"assets/NOTICES": "bf53e17b765ec625b616d0e6f0111edb",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/flutter_sound_web/js/flutter_sound/flutter_sound_recorder.js": "bb96ac4443ce77a8fc0e70d7b8c6a698",
"assets/packages/flutter_sound_web/js/flutter_sound/flutter_sound_player.js": "c530f4b10d41132dee23ede26280773c",
"assets/packages/flutter_sound_web/js/flutter_sound/flutter_sound.js": "aecd83c80bf4faace0bcea4cd47ab307",
"assets/packages/flutter_sound_web/js/howler/howler.js": "2bba823e6b4d71ea019d81d384672823",
"assets/packages/flutter_sound_web/js/howler/howler.spatial.min.js": "28305f7b4898c9b49d523b2e80293ec8",
"assets/packages/flutter_sound_web/js/howler/howler.min.js": "0245b64fba989b9e3fd5b253f683d0e4",
"assets/packages/flutter_sound_web/js/howler/howler.core.min.js": "55e0af0319483be8a7371a2cceacf921",
"assets/packages/w_popup_menu/images/right_gray.png": "daf3401c91e11d83bb6141649f7decda",
"assets/packages/w_popup_menu/images/left_gray.png": "f830c2ced16bac0396789cb6e2c16eed",
"assets/packages/w_popup_menu/images/left_white.png": "147b5d5205468a6c41f79a1bc59fb152",
"assets/packages/w_popup_menu/images/right_white.png": "e1a7d1af4460308dc17e29623db66ec0",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/assets/noises/bam.wav": "d31636ebf83dd656bae82eec4954e45e",
"assets/assets/noises/boum.wav": "9b5a7487f3ee1a61d8a9c18212506c37",
"assets/assets/noises/bim.wav": "2b9e86af8b4977463beb79b5762a9943",
"assets/assets/canardo.png": "f5938f65fbd61a841cd7f2b489382eb3",
"assets/assets/samples/sample.opus": "9a48e797d31e9db071c8b41405a152b7",
"assets/assets/samples/sample.8000.pcm": "33ea7a896be7bda5806053a617bf15bf",
"assets/assets/samples/sample.pcm": "3b8cefb3e6eafea53c88d2892e0f7bfa",
"assets/assets/samples/sample.mp3": "96c7a0ec34f1e1c0f5365c496637c4ba",
"assets/assets/samples/sample.mp4": "a7664902ad7c3261f87aec5c331e6aa8",
"assets/assets/samples/sample_xxx.amr": "baaa229706618063c5f8817ebd718993",
"assets/assets/samples/sample_pcm.caf": "cdae8be3c67724b73772628288d88f51",
"assets/assets/samples/sample.aiff": "3f3ad72e542f9b534d207baf3cfcdcf3",
"assets/assets/samples/sample.flac": "bf3e25117cd3c17206e81aa6c29af37b",
"assets/assets/samples/sample_vorbis.webm": "c27f0131c35f429b434e9812a6e47962",
"assets/assets/samples/sample_opus.webm": "66261bced065a5b4e5db3eee599a9ec6",
"assets/assets/samples/sample.amr": "baaa229706618063c5f8817ebd718993",
"assets/assets/samples/sample.aac": "4e468b57e747b69efdc0e519a064b054",
"assets/assets/samples/sample.ogg": "0c6b87b91fc50895cdfd4c2e911157a3",
"assets/assets/samples/sample.wav": "ab5bc642f652d1af0569a10e1ac1b005",
"assets/assets/samples/sample_xxx.pcm": "36b7666d97052ffb176fd85482da6f24",
"assets/assets/samples/sample_opus.caf": "f9b9bd6d442660f9ad5f7f3bc21284b7"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
