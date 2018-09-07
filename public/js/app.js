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

  $("#years, #category").change(function(e) {
    e.preventDefault();
    $.ajax({
      url: "/reviews/" + $("#category").val() + "/" + $("#years").val() + "/",
      type: "GET",
      success: function(response, status) {
        $(".movie-list").html(response);
      },
      error: function(error, response, status) {
        console.log(error);
      }
    });
  });

  $(".page-number").click(function(e) {
    e.preventDefault();
    let number = $(this).text();
    $.ajax({
      url:
        "/reviews/" +
        $("#category").val() +
        "/" +
        $("#years").val() +
        "/" +
        number,
      type: "GET",
      success: function(response, status) {
        $(".movie-list").html(response);
      },
      error: function(error, response, status) {
        console.log(error);
      }
    });
  });

  $(window).load(function() {});
})(jQuery, document, window);
