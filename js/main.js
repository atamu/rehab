;(function () {

    'use strict';

    var wowAnimation = function() {
        var getOffset = function() {
            return window.innerWidth <= 768 ? 60 : 120;
        };

        var wow = new WOW(
            {
                animateClass: 'animated',
                offset:       getOffset(),
                mobile:       true,
                live:         true,
                callback:     function(box) {
                    console.log("WOW: animating <" + box.tagName.toLowerCase() + ">");
                }
            }
        );

        wow.init();

        window.addEventListener('resize', function() {
            wow.config.offset = getOffset();
            wow.sync();
        });
    }


    (function($) {
        wowAnimation();
    })(jQuery);


}());