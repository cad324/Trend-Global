// Code for slideshow referenced from Lab 12 Solutions, not copied

// When document is ready
$(document).ready(function() {
  // List of images
  var images = [
    "images/gold1.JPG", // index 0
    "images/kids1.jpg", // index 1
    "images/mens1.JPG", // index 2
    "images/trend1.jpg", // index 3
    "images/trend8.jpg"  // index 4
  ];

 // Current Index
  var currentIndex = 0;

  // When On Click
  $("#slideshowNext").click(function () {
    currentIndex = currentIndex + 1;

    // updating Index
    if (currentIndex >= images.length) {
      currentIndex = 0
    }
    // update new images
    $("#slideshowImage").attr("src", images[currentIndex]);
  });
});
