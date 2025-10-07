;(function ($) {
  'use strict';

  // Enable smooth scrolling for in-page navigation buttons and links.
  $(document).on('click', 'a[href^="#"]', function (event) {
    var anchor = $(this).attr('href');

    if (!anchor || anchor.length < 2) {
      return;
    }

    var $target = $(anchor);

    if ($target.length) {
      event.preventDefault();

      $('html, body').animate({
        scrollTop: $target.offset().top - 72
      }, 600);

      // Close the mobile navigation after selecting a link.
      $('.navbar-collapse.show').collapse('hide');
    }
  });
})(jQuery);
