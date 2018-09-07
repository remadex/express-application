(function($, document, window) {
  $(document).ready(function() {
    // Cloning main navigation for mobile menu
    $(".mobile-navigation").append($(".main-navigation .menu").clone());

    // Mobile menu toggle
    $(".menu-toggle").click(function() {
      $(".mobile-navigation").slideToggle();
    });
    $(".search-form button").click(function() {
      $(this).toggleClass("active");
      var $parent = $(this).parent(".search-form");

      $parent
        .find("input")
        .toggleClass("active")
        .focus();
    });

    $(".slider").flexslider({
      controlNav: false,
      prevText: '<i class="fa fa-chevron-left"></i>',
      nextText: '<i class="fa fa-chevron-right"></i>'
    });
    if ($(".map").length) {
      $(".map").gmap3(
        {
          map: {
            options: {
              maxZoom: 14
            }
          },
          marker: {
            address: "40 Sibley St, Detroit"
          }
        },
        "autofit"
      );
    }
  });

  $(window).load(function() {});

  //   $("#category").change(function() {
  //     let content = ``;
  //     if ($("#category").val() == "drama") {
  //       $(".movie-list").text("Voici mon texte 1, youpi !");
  //     }
  //     if ($("#category").val() == "fantasy") {
  //       $(".movie-list").text("Voici mon texte 2, youpi !");
  //     }
  //     if ($("#category").val() == "horror") {
  //       $(".movie-list").text("Voici mon texte 3, youpi !");
  //     }
  //     if ($("#category").val() == "adventure") {
  //       $(".movie-list").text("Voici mon texte 4, youpi !");
  //     }
  //   });
})(jQuery, document, window);
