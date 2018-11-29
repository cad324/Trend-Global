$(document).ready(function() {
  //Display captions on hover
   images = ['#img1','#img2','#img3','#img4','#img5','#img6']
   captions = ['#caption1','#caption2','#caption3','#caption4','#caption5','#caption6']

   //image1 - caption1
     $(images[0]).mouseenter(function(){
       $(captions[0]).fadeIn();
     });
     $(images[0]).mouseleave(function(){
       $(captions[0]).hide();
     });
  //image2 - caption2
     $(images[1]).mouseenter(function(){
       $(captions[1]).fadeIn();
     });
     $(images[1]).mouseleave(function(){
       $(captions[1]).hide();
     });
 //image3 - caption3
    $(images[2]).mouseenter(function(){
      $(captions[2]).fadeIn();
    });
    $(images[2]).mouseleave(function(){
      $(captions[2]).hide();
    });
//image4 - caption4
   $(images[3]).mouseenter(function(){
     $(captions[3]).fadeIn();
   });
   $(images[3]).mouseleave(function(){
     $(captions[3]).hide();
   });

//image5 - caption5
  $(images[4]).mouseenter(function(){
    $(captions[4]).fadeIn();
  });
  $(images[4]).mouseleave(function(){
    $(captions[4]).hide();
  });

//image6 - caption6
   $(images[5]).mouseenter(function(){
     $(captions[5]).fadeIn();
   });
   $(images[5]).mouseleave(function(){
     $(captions[5]).hide();
   });

});
