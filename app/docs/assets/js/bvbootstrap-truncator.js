/* =============================================================
 * bvbootstrap-truncator.js v0.1
 * ========================================================== */


$(function() {
  $(".truncate").each(function() {
    var $toTruncate = $(this);
    var $characterCap = $toTruncate.attr("data-charCap");
    if ($toTruncate.text().length > $characterCap) {
      $toTruncate.text( $toTruncate.text().substring(0, $characterCap) + "..." );
    }
  });
});