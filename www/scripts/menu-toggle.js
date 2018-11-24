$(document).ready(function() {

  // Event listener, called when window width changes
  $(window).resize(function() {
    //Condition to handle when to show show/hide nav items based on window/device width
    if ($(window).width() <= 1000 && !$(".menu-icon").hasClass("switch")) {
      $("nav ul").css("display", "none");
    } else if ($(window).width() > 1000) {
      $("nav ul").css("display", "flex");
    } else {
      $("nav ul").css("display", "block");
    }
  });

  $(".menu-icon").click(function() {
    $(".menu-icon").toggleClass("switch");
    if ($(".menu-icon").hasClass("switch")) {
      $("nav ul").css("display", "block");
    } else {
      $("nav ul").css("display", "none");
    }
  });

});
