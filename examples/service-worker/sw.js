


// Location of this URI for this file.
const workerUri = "./sw.js";

// The worker can control all pages within this scope, i.e., in the current directory and all its subdirectories.
const workerScope = "./"; 


// Register the service worker with the browser and listen for evenets.
registerServiceWorker();



self.addEventListener("fetch", (event) => {
  event.respondWith(caches.match(event.request));
});


self.addEventListener("install", (event) => {
  event.waitUntil(
    addResourcesToCache([
      "styles.css",
      "app.js"
    ])
  );
});






async function registerServiceWorker() {
  if ("serviceWorker" in navigator) {
    try {
      const registration = await navigator.serviceWorker.register(workerUri, {
        scope: workerScope,
      });
      if (registration.installing) {
        console.log("Service worker installing");
      } else if (registration.waiting) {
        console.log("Service worker installed");
      } else if (registration.active) {
        console.log("Service worker active");
      }
    } catch (error) {
      console.error(`Registration failed with ${error}`);
    }
  }
};

// …








async function addResourcesToCache(resources) {
  const cache = await caches.open("v1");
  await cache.addAll(resources);
};
