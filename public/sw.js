if(!self.define){let e,s={};const n=(n,i)=>(n=new URL(n+".js",i).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(i,t)=>{const a=e||("document"in self?document.currentScript.src:"")||location.href;if(s[a])return;let c={};const r=e=>n(e,a),u={module:{uri:a},exports:c,require:r};s[a]=Promise.all(i.map((e=>u[e]||r(e)))).then((e=>(t(...e),c)))}}define(["./workbox-1846d813"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/chunks/0b7b90cd.26a3995d0dc7cc17.js",revision:"xm8guni1LfGxZx_rQ-MuK"},{url:"/_next/static/chunks/319-a4367f1bb01a6978.js",revision:"xm8guni1LfGxZx_rQ-MuK"},{url:"/_next/static/chunks/427.6ac71eca48be7999.js",revision:"xm8guni1LfGxZx_rQ-MuK"},{url:"/_next/static/chunks/651.e7ad805f32a091cd.js",revision:"xm8guni1LfGxZx_rQ-MuK"},{url:"/_next/static/chunks/framework-8957c350a55da097.js",revision:"xm8guni1LfGxZx_rQ-MuK"},{url:"/_next/static/chunks/main-b89e7c6359538933.js",revision:"xm8guni1LfGxZx_rQ-MuK"},{url:"/_next/static/chunks/pages/%5Bslug%5D-2799ec3c98751321.js",revision:"xm8guni1LfGxZx_rQ-MuK"},{url:"/_next/static/chunks/pages/_app-cbeb872c0379c1ad.js",revision:"xm8guni1LfGxZx_rQ-MuK"},{url:"/_next/static/chunks/pages/_error-1f95674706ce531a.js",revision:"xm8guni1LfGxZx_rQ-MuK"},{url:"/_next/static/chunks/pages/index-665b19af84430857.js",revision:"xm8guni1LfGxZx_rQ-MuK"},{url:"/_next/static/chunks/pages/place/%5Bslug%5D-5824a5b66371cbcb.js",revision:"xm8guni1LfGxZx_rQ-MuK"},{url:"/_next/static/chunks/polyfills-5cd94c89d3acac5f.js",revision:"xm8guni1LfGxZx_rQ-MuK"},{url:"/_next/static/chunks/webpack-6f664a9867fc512c.js",revision:"xm8guni1LfGxZx_rQ-MuK"},{url:"/_next/static/xm8guni1LfGxZx_rQ-MuK/_buildManifest.js",revision:"xm8guni1LfGxZx_rQ-MuK"},{url:"/_next/static/xm8guni1LfGxZx_rQ-MuK/_middlewareManifest.js",revision:"xm8guni1LfGxZx_rQ-MuK"},{url:"/_next/static/xm8guni1LfGxZx_rQ-MuK/_ssgManifest.js",revision:"xm8guni1LfGxZx_rQ-MuK"},{url:"/images/icon-192x192.png",revision:"96ca29f99b213d3ee0a168cfd292328d"},{url:"/images/icon-256x256.png",revision:"a7c77aa0dba6534e0c28eb6e1d82d057"},{url:"/images/icon-384x384.png",revision:"d118414e13f4de8ad0cb91ac112015cb"},{url:"/images/icon-512x512.png",revision:"8097609a9a485cfa93c257ef9249eb73"},{url:"/manifest.json",revision:"1cbfe476bf99f66de9c4d0f385587f4f"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:n,state:i})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
