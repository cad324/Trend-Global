// Code for slideshow referenced from Lab 12 Solutions, not copied

// When document is ready
$(document).ready(function() {
  // List of images
  var images = [
    "images/background1.jpg", // index 0
    "images/background2.jpg", // index 1
    "images/background3.jpg", // index 2
    "images/background4.jpg", // index 3
    "images/background5.jpg"  // index 4
  ];

 // Current Index
  var currentIndex = 0;

  $("#slide-arrow-next").click(function() {
    currentIndex = currentIndex + 1;

    // updating Index
    if (currentIndex >= images.length) {
      currentIndex = 0
    }
    // update new images
    $("#slideshowImage").attr("src", images[currentIndex]);
  });

  $("#slide-arrow-prev").click(function() {
    currentIndex = currentIndex - 1;

    // updating Index
    if (currentIndex < 0) {
      currentIndex = images.length -1;
    }
    // update new images
    $("#slideshowImage").attr("src", images[currentIndex]);
  });

  function automateSlide() {
    currentIndex = currentIndex + 1;
    if (currentIndex >= images.length) {
      currentIndex = 0
    }
    $("#slideshowImage").attr("src", images[currentIndex]);
    //recursively calling automateSlide
    setTimeout(automateSlide, 5000);
  }

  setTimeout(automateSlide, 5000);

});
