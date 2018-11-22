$(document).ready(function() {
  
  if ($(window).width() < 1000) {
    $("nav ul").addClass("hidden");
  }

  $(".menu-icon").click(function() {
    $(".menu-icon").toggleClass("switch");
    $("nav ul").toggleClass("hidden");
  });

});
