// ==UserScript==
// @name         WhatsApp Web No Distraction
// @namespace    https://github.com/hmaesta/whatsapp-web-no-distraction
// @version      0.2
// @description  Stop being distracted by WhatsApp notification icon
// @author       H.Maestá
// @match        https://web.whatsapp.com
// @grant        none
// @downloadURL  https://raw.githubusercontent.com/hmaesta/whatsapp-web-no-distraction/master/tampermonkey.user.js
// @updateURL    https://raw.githubusercontent.com/hmaesta/whatsapp-web-no-distraction/master/tampermonkey.user.js
// ==/UserScript==

(function() {
    'use strict';

    var faviconElement = document.querySelector("link[rel*='icon']") || document.createElement('link'),
        faviconURL = "https://web.whatsapp.com/img/94e99ab189284094867d2e1220e42e9f.png",
        cycleTime = 1500;

    console.log('%c✅ WhatsApp Web No Distraction','padding:0.25rem 0.15rem;background:#e4ffe5;color:green;font-size:0.85rem;font-weight:bold;');
    console.log('%c↳ Refreshing every ' + cycleTime + 'ms','padding:0.25rem 0.15rem;background:#f4f4f4;color:#999;font-size:0.75rem;');

    function resetWhatsApp () {
        document.title = "WhatsApp Web";
        faviconElement.type = 'image/x-icon';
        faviconElement.rel = 'shortcut icon';
        faviconElement.href = faviconURL;
        faviconElement.classList.add("whatsapp-web-no-distraction");
        document.getElementsByTagName('head')[0].appendChild(faviconElement);
    };

    setInterval(resetWhatsApp, cycleTime);
})();
