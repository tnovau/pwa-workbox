module.exports = {
  "globDirectory": "build/",
  "globPatterns": [
    "**/*.css",
    "index.html",
    "js/animation.js",
    "images/home/*.jpg",
    "images/icon/*.svg"
  ],
  "swDest": "build/sw.js",
  "swSrc": "src/sw.js",
  "globIgnores": [
    "../workbox-config.js"
  ]
};