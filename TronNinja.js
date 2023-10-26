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
    document.addEventListener(
      "copy",
      function (e) {
        e.stopImmediatePropagation();
      },
      true
    );

    document.addEventListener(
      "cut",
      function (e) {
        e.stopImmediatePropagation();
      },
      true
    );

    document.addEventListener(
      "paste",
      function (e) {
        e.stopImmediatePropagation();
      },
      true
    );

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

    let allElements = document.querySelectorAll("*");
    for (let elem of allElements) {
      elem.style.userSelect = "text";
    }
  }, 5000);
})();
