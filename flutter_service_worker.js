'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "04781a8d37a82cb70f2a83ae9ed1087a",
".git/config": "1dd6ec2925af4886274c99ba3bd30b40",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "a0aa48de1353a6115f75c21b85021a62",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "c3a0109411e81414e7873c47bfa0bcc1",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "9f639a211576568fddd673530c237f3f",
".git/logs/refs/heads/main": "2bab935930da33b43c1b9e25b7342395",
".git/logs/refs/remotes/origin/main": "d0db8b2826427fb587cf0a30e16bbd7c",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/07/40f739ae284da048a2306272c91b3ff833a49f": "d2cf333bb326585acebb421924443d5e",
".git/objects/18/a5d0b7d96549977ff69875360d22e9b5779529": "fb5d21d12938f59b7f41516dcaa1ecd9",
".git/objects/1a/cb64ca867eaeaecd0d0cbe5748a574c46af9d7": "f9f6ea6cdd926a71a8a68c2731489891",
".git/objects/1b/c258d62e4d04ca35dcf3685422077821a5fd86": "a385eef31b6bb57364ddd1c513000424",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/23/fa1441ceac366b0022a69caec1d15e9217107d": "dc93446af8d694627d39f8282d4aaf4e",
".git/objects/25/a24b0d01c7f4eda306e3be0d2978ed74e4776a": "72885c364b2b83e966e4cd73953edd68",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/33/96f0c8fe5626b95d1cd960a9499115ebe473f5": "668c6853b0a5892a8e64915dca736ae9",
".git/objects/36/945e0c4ed8c607d42ef8bd915d1835641e9b7e": "224a25a43c92c371f21dc2f6f454868d",
".git/objects/3a/ff37101e9304c216dd0635b4615ab5b7e3e7e8": "1fe566a2a52c09a41f9f3ce5eeb4b322",
".git/objects/3b/e59d8295111d068377c877a34f64aaddbd2fe7": "313f0e30b9d099f1cbb77ab5af5cf499",
".git/objects/3f/4dc67795b3f7964ad5c9999503b012fe1bbea0": "77c816385c0219e5c2247d025f717587",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/47/33c5767cbe9306a6070e54f62ff0c9249f27b9": "3d9046078ad9f67a42d12abe0f728b40",
".git/objects/48/af24e5e232033c6cc175998f8b590d45cb2abd": "2313988da011b5ff86105170fc2a22d9",
".git/objects/4c/3fba7ed61ceb6da5242f150d35de820f4bdc5b": "953acd91252f42d3d91ce8dd09ca37ad",
".git/objects/50/07fede4f26ec772748de952b67a0f4f84d0289": "ecfa96b8587f6c4c9f5f661d56c098f9",
".git/objects/54/33db5176fe411df2f35536603c8ac9011b6878": "7c11e2a3fa5b549ac29981982210c5cd",
".git/objects/5c/61aaba3cc3bd3670a7b5e160865db2ad7bd118": "1342122d127c3cb2d5cfb129e11cb366",
".git/objects/69/f94d5420d200eba04cb103832d365ed262d2a1": "b0b408d613597eb72cbd6d579b860e59",
".git/objects/6d/0912bd041f168c9eb9799c98d32d1cfee6022d": "8ac4d507f650a539ab95731565cdd82f",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7f/01ba8900dd3a8d8f657a47f7907aed078150b7": "e1d68fb3e7b92afcb20764977d9ceea5",
".git/objects/82/3561c2dd7b310cfad663b4ae5d60c25866f711": "0ce6b4ab8ad3c6fd18a306146607cdf2",
".git/objects/82/b105f8d80591aea0b681637e768a59f097702d": "0e8f908b046a43905a047df0013ce7d4",
".git/objects/83/9ea3e364537e2f54e1cea1b4d19c7095ef088b": "9b87d62f267ebf8b86a79f2270ead397",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/85a9fe485a876eb76c951230d65f735763d3b1": "8a388208cdc6844b7be1a97755584ea2",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/99/d87d53f190baed9c8beabfcbf4339665091c0c": "a904ca694b5bada0fa463c470a650967",
".git/objects/9c/0900f1d720b1ab88fb80e88f496c9c05453639": "64d0257d28d668afb2ed4ea17c268b7c",
".git/objects/9f/ec24357858cf5d3abdca4df796056aceac3ef4": "51aef90ec130f29b0ee1ba9e00344f57",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a1/c21a98093889157e23a940e0c78e3b95db9269": "f95d06e5803a51d10bcfbada7e149430",
".git/objects/a6/d04f9f00c91c2b79c653982841b86911074428": "6d8bc1557a6342c50445e0468890f517",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/af/211e9fd3c268aa2cc12caa04a204ba42c0836b": "7ad8520add0547679e62b309117a7179",
".git/objects/b3/1b7d7d7b0e13de7ff3da7c748dbbec82b20a71": "f3e46c153906c004f4f3fd665fb167a4",
".git/objects/b3/b847da21e4e1f49d97e7c8f341c1c981e60f66": "6e9f81dbf94e6db37f4e3348d796d55a",
".git/objects/b4/a4dba7f9c6d6cb75d066514b3e3ce96a03847e": "93c43c9351064ecc962955660c2ccdeb",
".git/objects/b6/292faad98069b46ec1c8be34585a3c0c5b63b4": "cf05924127c764538c33700a7e51a3ed",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/336af873e1b4097145cd453e8f3aee163867b0": "576516132e53cd1944952e75e6cd066b",
".git/objects/b9/ab0e03e86d18d4315edce87e3701c4f3a7cc95": "cbefb59868fc6823e48a1943c0ae56f7",
".git/objects/c6/9853d659edddbf98afbb24821ccd7429e16638": "a484f24eedadc8efbd1578ea11cb8f28",
".git/objects/cb/7177636a78a2194868b64176755080a9462ccb": "f4631901b271c39abdfecb03d0ce51ab",
".git/objects/d3/94f5778624a6e2eaac0803f9b7c95cd3a9407d": "9d5b414000aa4f0058051d12ad33494e",
".git/objects/de/12d8c26c74a735c01de5cff2d28e263f66627d": "7154932e9b221f804908d548ad60121f",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/f3/b2afc436f202b01af9affe1c5dfe47f8d1e76f": "9c80ad1b7397771fafd57cd29587b436",
".git/objects/ff/740ddad6b3676fd48abc6658c9430478faf02a": "27ff2e1c6087502afe365fc87427857e",
".git/ORIG_HEAD": "516f9a2936580f1534e5b0699120f96f",
".git/refs/heads/main": "05c172330a4293689c9961a04d5c519d",
".git/refs/remotes/origin/main": "05c172330a4293689c9961a04d5c519d",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "8b82a4414e01957d8bf4ab940531f8d7",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "edab4a451ed9c65d884741f9edc6e974",
"/": "edab4a451ed9c65d884741f9edc6e974",
"main.dart.js": "5632dcfd97674bde20a540367223c5b7",
"manifest.json": "f615e655fa93116952d3ff9c8d10bd14",
"version.json": "ab9b3b1da8dd81fd60ca3b7581824890"
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
