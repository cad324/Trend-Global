// When the document is ready
$(document).ready(function() {
  // List of images
  var images = [
    "images/gold1.JPG", // index 0
    "images/kids1.jpg", // index 1
    "images/mens1.JPG", // index 2
    "images/trend1.jpg", // index 3
    "images/trend8.jpg"  // index 4
  ];

  // The index of the image that is currently displayed
  var currentIndex = 0;

  // When the next button is clicked
  $("#slideshowNext").click(function () {
    // YOUR CODE HERE

    // change the index to next image
    currentIndex = currentIndex + 1;

    // update Index
    if (currentIndex >= images.length) {
      currentIndex = 0

    }
    // update new images
    $("#slideshowImage").attr("src", images[currentIndex]);

    // END OF YOUR CODE
  });
});
