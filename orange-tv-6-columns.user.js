// ==UserScript==
// @name         Force 6 Dynamic Columns on Orange TV (15%)
// @namespace    https://github.com/painteau/
// @version      1.4
// @description  Dynamically adjusts Orange TV mosaic elements width to 15% to display 6 columns, even after DOM loads or changes
// @author       Painteau
// @license      MIT
// @match        https://tv.orange.fr/*
// @grant        none
// @icon         https://tv.orange.fr/favicon.ico
// @homepage     https://github.com/painteau/userscripts
// @homepageURL  https://github.com/painteau/userscripts
// @updateURL    https://raw.githubusercontent.com/painteau/userscripts/main/orange-tv-6-columns.user.js
// @downloadURL  https://raw.githubusercontent.com/painteau/userscripts/main/orange-tv-6-columns.user.js
// ==/UserScript==

(function () {
    'use strict';

    /**
     * Adjust the width of mosaic items to 15% to display 6 columns
     */
    function adjustToSixColumns() {
        const mosaicItems = document.querySelectorAll('#mosaic li');
        mosaicItems.forEach(item => {
            item.style.width = '15%';
        });
    }

    /**
     * Observe DOM changes and re-apply styles when necessary
     */
    function observeDynamicChanges() {
        const observer = new MutationObserver(() => {
            adjustToSixColumns();
        });

        observer.observe(document.body, {
            childList: true,
            subtree: true
        });
    }

    /**
     * Initialize the script
     */
    function init() {
        adjustToSixColumns();
        observeDynamicChanges();
        console.log("15% column width applied and dynamic observation enabled.");
    }

    init();
})();
