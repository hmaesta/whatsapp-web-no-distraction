// ==UserScript==
// @name         WhatsApp Web No Distraction
// @namespace    https://github.com/hmaesta/whatsapp-web-no-distraction
// @version      0.1
// @description  Stop being distracted by WhatsApp notification icon
// @author       H.Maestá
// @match        https://web.whatsapp.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    console.log('%c🚫 WhatsApp Web No Distraction: loaded!','padding:2px;background:#FCEAEA;color:#EB3B3B;font-weight:bold;font-size:1.1em;');

    var faviconElement = document.querySelector("#favicon"),
        faviconURL = "https://web.whatsapp.com/img/94e99ab189284094867d2e1220e42e9f.png";

    function resetWhatsApp () {
        document.title = "WhatsApp Web";
        faviconElement.href = faviconURL;
    };

    setInterval(resetWhatsApp, 1000);
})();