// Code for slideshow referenced from Lab 12 Solutions, not copied


// When the document is ready
$(document).ready(function() {

  // When the gold nav item is clicked
  $("#goldNavItem").hover(function () {


    if ($("#goldDropdown").hasClass("hidden")) {
      $("#goldDropdown").removeClass("hidden");
    } else {
      $("#goldDropdown").addClass("hidden");
    }

  });

});
