/* =============================================================
 * bvbootstrap-multipage.js v0.1
 * ========================================================== */


 $(function() {
  $(".page-toggle[data-target='page-menu']").on("click", function() {
    $pageToggle = $( this );
    $targetPage = $(".page-menu");
    $currentCenter = $(".page.center");
    if ( $targetPage.hasClass("left") ) {
      $currentCenter.addClass("right").removeClass("center");
      $targetPage.addClass("center").removeClass("left");
    } else if ( $targetPage.hasClass("center") ) {
      $currentCenter.addClass("left").removeClass("center");
      $(".page.right").addClass("center").removeClass("right");
    }
  });
});