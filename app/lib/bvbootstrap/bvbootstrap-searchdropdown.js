/* =============================================================
 * bvbootstrap-searchdropdown.js v0.1
 * ========================================================== */


$(function() {
  var $dropdownSearches = $(".dropdown-menu .search-query");
  if ( $dropdownSearches.length > 0 ) {
    $dropdownSearches.each(function() {
      var $thisSearch = $(this);
      var $thisDropdownToggle = $thisSearch.closest(".btn-group").children(".dropdown-toggle");
      $thisSearch.on("click", function(event) {
        event.stopPropagation();
      });
      $thisDropdownToggle.on("click", function() {
        var $thisSearch = $( this ).closest(".btn-group").find(".dropdown-menu").find(".search-query");
        console.log( $thisSearch.html() );
        setTimeout(function() {
          $thisSearch.focus();
        }, 200);
      });
    });
  }
});