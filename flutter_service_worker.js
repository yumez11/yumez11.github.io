'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "550609e1041dc1beb73efd461ea05572",
"index.html": "784f4cb27f06fc544065a7d2a081c488",
"/": "784f4cb27f06fc544065a7d2a081c488",
"main.dart.js": "d57bef6885d42bfd4acfef6f5cbe4883",
"favicon.png": "2e867278cc037a30827f38f22d31bac4",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "733ddaa711229bfc2747955994cdcab1",
"assets/AssetManifest.json": "19261fea0543282c6fa2b25c480b80ef",
"assets/NOTICES": "92df7ea67413cc8680ac4e135740c28f",
"assets/FontManifest.json": "71a4a82de411f155107da3f8dac64ebd",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_AMS-Regular.ttf": "657a5353a553777e270827bd1630e467",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Script-Regular.ttf": "55d2dcd4778875a53ff09320a85a5296",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size3-Regular.ttf": "e87212c26bb86c21eb028aba2ac53ec3",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Typewriter-Regular.ttf": "87f56927f1ba726ce0591955c8b3b42d",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Caligraphic-Bold.ttf": "a9c8e437146ef63fcd6fae7cf65ca859",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_SansSerif-Bold.ttf": "ad0a28f28f736cf4c121bcb0e719b88a",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-Bold.ttf": "9eef86c1f9efa78ab93d41a0551948f7",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Fraktur-Regular.ttf": "dede6f2c7dad4402fa205644391b3a94",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-Regular.ttf": "5a5766c715ee765aa1398997643f1589",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_SansSerif-Italic.ttf": "d89b80e7bdd57d238eeaa80ed9a1013a",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Math-Italic.ttf": "a7732ecb5840a15be39e1eda377bc21d",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-Italic.ttf": "ac3b1882325add4f148f05db8cafd401",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Fraktur-Bold.ttf": "46b41c4de7a936d099575185a94855c4",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size2-Regular.ttf": "959972785387fe35f7d47dbfb0385bc4",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_SansSerif-Regular.ttf": "b5f967ed9e4933f1c3165a12fe3436df",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size1-Regular.ttf": "1e6a3368d660edc3a2fbbe72edfeaa85",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Caligraphic-Regular.ttf": "7ec92adfa4fe03eb8e9bfb60813df1fa",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size4-Regular.ttf": "85554307b465da7eb785fd3ce52ad282",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-BoldItalic.ttf": "e3c361ea8d1c215805439ce0941a1c8d",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Math-BoldItalic.ttf": "946a26954ab7fbd7ea78df07795a6cbc",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/flutter_sound_web/js/flutter_sound/flutter_sound_recorder.js": "359c3834b28e8901b6e2fa524ae131fd",
"assets/packages/flutter_sound_web/js/flutter_sound/flutter_sound_player.js": "fb3683640578a1bf7f5568c66b3cfd5b",
"assets/packages/flutter_sound_web/js/flutter_sound/flutter_sound.js": "aecd83c80bf4faace0bcea4cd47ab307",
"assets/packages/flutter_sound_web/js/howler/howler.js": "2bba823e6b4d71ea019d81d384672823",
"assets/packages/flutter_sound_web/js/howler/howler.spatial.min.js": "28305f7b4898c9b49d523b2e80293ec8",
"assets/packages/flutter_sound_web/js/howler/howler.min.js": "0245b64fba989b9e3fd5b253f683d0e4",
"assets/packages/flutter_sound_web/js/howler/howler.core.min.js": "55e0af0319483be8a7371a2cceacf921",
"assets/packages/fluttertoast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/wakelock_web/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/assets/images/artHomeWork/artHomeWork2.png": "330dc05c49cfe8d5081924c2ca540b72",
"assets/assets/images/artHomeWork/artHomeWork3.png": "70502c29721d1d08754608f2faa79aaf",
"assets/assets/images/artHomeWork/artHomeWork1.png": "1ddb0554ccf455163d16f0c62b8a609b",
"assets/assets/images/artHomeWork/artHomeWork0.png": "de721dd6e72670b161e3fdbcef2f9d81",
"assets/assets/images/artHomeWork/artHomeWork4.png": "0dece5aa9504342a9a803c6f56b833a6",
"assets/assets/images/artHomeWork/artHomeWork5.png": "495f001a0b2f89a9d70555837af8e761",
"assets/assets/images/artHomeWork/artHomeWork6.png": "d2fa28710dacd171d4e308d9be028f67",
"assets/assets/images/common/icon_edit.png": "df8b3668ce2c50b237f4cc72a5882409",
"assets/assets/images/common/icon_video_default.png": "7d3d15b3b06fe9ec21a66a047197f22c",
"assets/assets/images/common/icon_splash_logo.png": "a41e4feb3d07d693865881e9da574a85",
"assets/assets/images/common/icon_performance_details_to.png": "833b0f2d160e6a3e0857906dff95e3ff",
"assets/assets/images/common/icon_next_orange.png": "7b3b95800a2b77f0153c6b235990d365",
"assets/assets/images/common/icon_arrow_drop_down.png": "fdc10efd458030491bd8f1811f6c2c5c",
"assets/assets/images/common/cup_select_nomarl.png": "05239bb7b3a7161881641cb99f4b2746",
"assets/assets/images/common/icon_close_page.png": "62fc940007400883915d479755e92145",
"assets/assets/images/common/icon_search.png": "2275e9ebdf38f72547be749f3337a138",
"assets/assets/images/common/icon_close_white_page.png": "64f9924a9f31c47ca262447b54326094",
"assets/assets/images/common/icon_music_default.png": "2e0ea51bef3340eaf12c6bb6b148178c",
"assets/assets/images/common/icon_white_next_page.png": "dc06c64c59bfb7d56290c396cdde856f",
"assets/assets/images/common/icon_play_voice.png": "6a9090fd1baaba1964c4105e3ca8943a",
"assets/assets/images/common/icon_stop_voice.png": "62ce4905316584ff613c6f847fbcfd8e",
"assets/assets/images/common/icon_music_play.png": "0e24e84388eeb6a8b1156908a52b1696",
"assets/assets/images/common/icon_video_play.png": "c702bcb78a3df08740ded25b79f18c3b",
"assets/assets/images/common/icon_performance_explain.png": "ad93afedb2512a7dd79b914c8e595564",
"assets/assets/images/common/err_img_load.jpeg": "f05a5d65b14ab6901fe48b933aacf136",
"assets/assets/images/common/reslese_sucsess.png": "c7caccb79e92071b0efa24ea85567758",
"assets/assets/images/common/icon_add_white.png": "741ca6876545ebdd7aa4e4cbb1d4d5b3",
"assets/assets/images/common/cup_select.png": "bc964e48b107c0b8afd23671968086d5",
"assets/assets/images/common/icon_sky_blue_circular.png": "75a60d9307b977b850db0b81dd94199a",
"assets/assets/images/common/icon_error.png": "08b029b21ac0a1a465b5baaad304da83",
"assets/assets/images/common/icon_stop_recording.png": "8aa0a3a783cc85aad7ec33a444a2d7fb",
"assets/assets/images/common/icon_task_name_right.png": "eeae76458e3432b3e8620247b8d377e3",
"assets/assets/images/common/icon_people_num.png": "4d6a68182ee14b4f52efb0c9c37f393d",
"assets/assets/images/common/icon_empty.png": "941fc73fd01fab7ca107197b11ab3dda",
"assets/assets/images/common/icon_exclamatory_origin.png": "75addacc4153b7ed7664171080852bd4",
"assets/assets/images/common/icon_add_circle.png": "867722bb0119c2e2709aabebca71e292",
"assets/assets/images/common/icon_music.png": "2e867278cc037a30827f38f22d31bac4",
"assets/assets/images/common/icon_music_stop.png": "b433ff2063655dd383750ab32d0f7e13",
"assets/assets/images/common/time_out_img.png": "695f64fa2bb8a8b334780740c67c4a31",
"assets/assets/images/common/icon_next_gray.png": "4800396d30cceebd9e7c3432cf338930",
"assets/assets/images/common/icon_start_recording.png": "6e46473e4747db6b3b7e9aa9b4cc029f",
"assets/assets/images/common/icon_home_message.png": "25fcc1f410aafc017231b4523bf6dc7c",
"assets/assets/images/common/icon_arrow_drop_down_white.png": "93089f8615af82c8d7a5b494c6121a6f",
"assets/assets/images/common/default_image_holder.png": "5af38dae1246ff42ff3fd46820f630bd",
"assets/assets/images/common/icon_delete.png": "6a656da674d95cfd1a6e187dd8dfd15e",
"assets/assets/images/common/video_list_play.png": "78f5269e45ae4b69ebdcadaf8889ca36",
"assets/assets/images/common/icon_completed.png": "b1382aa43b9e34f0e8f48dc33b2156ff",
"assets/assets/images/musicHomeWork/musicHomeWork3.png": "0f63425c9581653e57b86d8f68143efd",
"assets/assets/images/musicHomeWork/musicHomeWork2.png": "d1032ed31dbcaa251a11365b0650c69d",
"assets/assets/images/musicHomeWork/musicHomeWork0.png": "6ca469ea2e4102568e621de0fcfaf967",
"assets/assets/images/musicHomeWork/musicHomeWork1.png": "6452b18bb1ce71fe48db4e6bd2b7de39",
"assets/assets/images/musicHomeWork/musicHomeWork5.png": "afaa03439aef64969bb0f9a6a3c0cd79",
"assets/assets/images/musicHomeWork/musicHomeWork4.png": "5966e5a230b07454cd9bfbaf8dc21c89",
"assets/assets/images/musicHomeWork/musicHomeWork6.png": "d2e838fcc264d206cfd8c37c8d7f57ac",
"assets/assets/images/musicHomeWork/musicHomeWork7.png": "5e00e7e6c87b4e63e53a2ac9780b548d",
"assets/assets/images/musicHomeWork/musicHomeWork8.png": "62b2de0a32ab2df8878e603ea5bef5a9"
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
