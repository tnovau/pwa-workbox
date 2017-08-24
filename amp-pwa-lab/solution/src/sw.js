/*
Copyright 2016 Google Inc.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
importScripts('workbox-sw.prod.v1.1.0.js');

const workboxSW = new self.WorkboxSW();
workboxSW.precache([]);

workboxSW.router.registerRoute('/*', args => {
  if (args.event.request.mode !== 'navigate') {
    return workboxSW.strategies.cacheFirst().handle(args);
  }
  return caches.match('/shell.html', {ignoreSearch: true});
});

workboxSW.router.registerRoute(/(.*)cdn\.ampproject\.org(.*)/,
  workboxSW.strategies.staleWhileRevalidate()
);
