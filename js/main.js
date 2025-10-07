;(function ($) {
  'use strict';

  function extractImageFromStyle($el) {
    var background = $el.css('background-image');
    if (!background || background === 'none') {
      return null;
    }

    var matches = background.match(/url\((['"]?)(.*?)\1\)/);
    return matches && matches[2] ? matches[2] : null;
  }

  function initParallax() {
    if (typeof $.fn.parallax !== 'function') {
      return;
    }

    $('.parallax-window2').each(function () {
      var $window = $(this);
      var imageSrc = $window.data('image-src') || extractImageFromStyle($window);

      if (!imageSrc) {
        return;
      }

      $window.parallax({
        imageSrc: imageSrc
      });
    });
  }

  $(function () {
    initParallax();
  });
})(jQuery);
