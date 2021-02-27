/*Variable with the starting slide numbers*/
var slideIndex = [1,1,1,1,1,1,1,1,1,1];
/* Class the members of each slideshow group with different CSS classes */
var slideId = ["mySlides1", "mySlides2", "mySlides3", "mySlides4", "mySlides5", "mySlides6", "mySlides7", "mySlides8", "mySlides9", "mySlides10"]

showSlides(1, 0);
showSlides(1, 1);
showSlides(1, 2);
showSlides(1, 3);
showSlides(1, 4);
showSlides(1, 5);
showSlides(1, 6);
showSlides(1, 7);
showSlides(1, 8);
showSlides(1, 9);


function plusSlides(change, gal_no) {   /*Input from html, the change in slide and the gallery that is being changed*/
  showSlides(slideIndex[gal_no] += change, gal_no);   /*Runs a function to change the slide accordingly*/
}

function showSlides(slide, gal_no) {
  var i;
  var x = document.getElementsByClassName(slideId[gal_no]);
  if (slide > x.length) {slideIndex[gal_no] = 1}    /*If the slide number is greater than the length of the gallery, sets the slide to be 1 (first image/video)*/
  if (slide < 1) {slideIndex[gal_no] = x.length}    /*If the slide number is less than the length of the gallery, sets the slide to be last image/video)*/
  for (i = 0; i < x.length; i++) {    /*For each number, if the number is less than the lenth of the gallery, add 1 to it*/
    x[i].style.display = "none";    /*Hides the image/video*/
  }
  x[slideIndex[gal_no]-1].style.display = "block";    /*Shows the image/video*/
}
