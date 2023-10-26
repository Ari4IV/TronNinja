// ==UserScript==
// @name         TronNinja
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Bypass right-click, copy/paste, and window leave restrictions
// @author       Ari4IV
// @match        *://*/*
// @grant        none
// ==/UserScript==

(function () {
  "use strict";
  setTimeout(function () {
    
    const eventsToBlock = ["copy", "cut", "paste", "contextmenu", "selectstart", "keydown", "dragstart", "mousedown", "mouseup", "visibilitychange", "blur"];
    for (let eventName of eventsToBlock) {
        document.addEventListener(eventName, function (e) {
            e.stopImmediatePropagation();
        }, true);
    }

    window.setTimeout = function () {};
    window.setInterval = function () {};

    $("*").css("user-select", "text").off("blur");

    $(window).off("blur beforeunload");
    $(document).off(eventsToBlock.join(" "));

    const originalAddEventListener = EventTarget.prototype.addEventListener;
    EventTarget.prototype.addEventListener = function (type, listener, options) {
        if (type !== "blur") {
            originalAddEventListener.call(this, type, listener, options);
        }
    };

    if (typeof blur_count !== "undefined") {
      blur_count = 0;
    }

    if (typeof isblur !== "undefined") {
      isblur = false;
    }
    
  }, 5000);
})();
