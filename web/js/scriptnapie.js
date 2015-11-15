/**
 * Copyright © 2015 Webwolk. All rights reserved.
 * See LICENSE for license details.
 */

define([
    'jquery',
    'matchMedia',
    'domReady!'
], function ($, mediaCheck) {
    'use strict';

    mediaCheck({
        media: '(min-width: 768px)',
        // Switch to Desktop Version
        entry: function () {
            console.log('desktop switch');
            // ...
        },
        // Switch to Mobile Version
        exit: function () {
            console.log('mobile switch');
            // ...
        }
    });

    // document ready
    console.log(document.readyState); // complete
    // ...

});
