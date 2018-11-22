$(document).ready(function() {

  /* TODO: Prevent nav items from flashing when page loads */
  if ($(window).width() < 1000) {
    $("nav ul").addClass("hidden");
  }

  // Event listener, called when window width changes
  $(window).resize(function() {
    //Condition to handle when to show show/hide nav items based on window/device width
    console.log($(window).width() < 1000 && !$("nav ul").hasClass("hidden") && !$(".menu-icon").hasClass("switch"));
    if ($(window).width() < 1000 && !$("nav ul").hasClass("hidden") && !$(".menu-icon").hasClass("switch")) {
      $("nav ul").addClass("hidden");
    } else if ($(window).width() > 1000 && $("nav ul").hasClass("hidden")) {
      $("nav ul").removeClass("hidden");
    }
  });

  $(".menu-icon").click(function() {
    $(".menu-icon").toggleClass("switch");
    $("nav ul").toggleClass("hidden");
  });

});
