$(document).ready(function() {

  // Event listener, called when window width changes
  $(window).resize(function() {
    //Condition to handle when to show show/hide nav items based on window/device width
    if ($(window).width() <= 1000 && !$(".menu-icon").hasClass("switch")) {
      $("nav ul").addClass("hidden");
      $("nav ul").removeClass("block");
      $("nav ul").removeClass("flex");
    } else if ($(window).width() > 1000) {
      $("nav ul").addClass("flex");
      $("nav ul").removeClass("hidden");
      $("nav ul").removeClass("block");
    } else {
      $("nav ul").addClass("block");
      $("nav ul").removeClass("hidden");
      $("nav ul").removeClass("flex");
    }
  });

  $(".menu-icon").click(function() {
    $(".menu-icon").toggleClass("switch");
    if ($(".menu-icon").hasClass("switch")) {
      $("nav ul").addClass("block");
      $("nav ul").removeClass("hidden");
      $("nav ul").removeClass("flex");
    } else {
      $("nav ul").addClass("hidden");
      $("nav ul").removeClass("block");
      $("nav ul").removeClass("flex");
    }
  });

});
