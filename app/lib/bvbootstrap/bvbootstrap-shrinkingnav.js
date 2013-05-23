/* =============================================================
 * bvbootstrap-shrinkingnav.js v0.1
 * ========================================================== */


$(function() {
  function navShranks() {
    $(".nav-shrinking").each(function() {
      var shrinky = $(this);
      var dinky = shrinky.children(".nav");
      var doo = shrinky.children(".nav-overflow");
      // console.log("shrinky " + shrinky.width());
      // console.log("dinky " + dinky.width());
      // console.log("doo " + doo.length);
      if ( doo.length ) {
        // Lay out the nav horizontally to restart the measurement process.
        while ( doo.children(".dropdown-menu").children("li").length ) {
          dinky.append(doo.children(".dropdown-menu").children("li:first-child"));
        }
        doo.remove();
        doo.length = 0;
      }
      if ( ( dinky.width() > shrinky.width() ) && !doo.length) {
        // If there's no overflow popup yet, add one.
        shrinky.append('<div class="btn-group nav-overflow pull-right"><a class="btn btn-small dropdown-toggle" data-toggle="dropdown" href="#"><i class="icon-ellipsis"></i></a><ul class="dropdown-menu"></ul></div>');
        doo = shrinky.children(".nav-overflow");
        while ( ( dinky.width() + 10 ) > ( shrinky.width() - doo.width() ) ) {
          doo.children(".dropdown-menu").prepend( dinky.children("li:last-child") );
        }
      }
    });
  }
  if ( $(".nav-shrinking").length > 0 ) {

    // TODO: Make a data-target flag on the shrinky stuff, so that you can add
    // ----- additional resize watchers or disable window-based resizing
    // ----- if your nav is in a resizeable or fixed width area.
    // -----------------------------------------------------------------------
    // if ( $(".nav-shrinking").attr("data-target") ) {
    //   console.log("." + $(".nav-shrinking").attr("data-target"));
    //   $( "." + $(".nav-shrinking").attr("data-target") ).resize(navShranks);
    // } else {
    //       $(window).resize(navShranks);
    //       console.log($(".nav-shrinking").attr("data-target"));
    // }

    $(window).resize(navShranks);
    navShranks();
  }

});