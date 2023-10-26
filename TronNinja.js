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

  document.oncontextmenu = null;
  document.body.oncontextmenu = null;

  document.oncopy = null;
  document.onpaste = null;
  document.body.oncopy = null;
  document.body.onpaste = null;

  document.addEventListener(
    "visibilitychange",
    function (e) {
      e.stopImmediatePropagation();
    },
    true
  );

  window.setTimeout = function () {};
  window.setInterval = function () {};
})();
