// animation
new WOW().init();
// nav cantrol
$(function () {
  $(document).scroll(function () {
    var $nav = $(".navbar");
    var $cover = $("header");
    var $top = $("#backToTop");
    $nav.toggleClass('scrolled', $(this).scrollTop() > $cover.height());
    $top.toggleClass('scrolled', $(this).scrollTop() > $cover.height());
  });
});
// backToTop
function topFunction() {
    document.body.scrollTop = 0; // For Chrome, Safari and Opera
    document.documentElement.scrollTop = 0; // For IE and Firefox
}
// browser detection
$(function () {
if (navigator.userAgent.indexOf('Safari') != -1 &&
    navigator.userAgent.indexOf('Chrome') == -1) {
        $(".navbar").addClass("safari");
        $("#mc_embed_signup_scroll").addClass("safari");
    }
});
