
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slide");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

document.getElementById("arrow-right").addEventListener("click",function(){plusSlides(1)});
document.getElementById("arrow-left").addEventListener("click",function(){plusSlides(-1)});

var slides = document.getElementsByClassName("slide");
var dots = document.getElementsByClassName("dot");

var funcsDot =  [];

for (var i = 0; i < slides.length; i++) {
  funcsDot[i] = currentSlide.bind(this, i+1);
}

for (var j = 0;j<slides.length;j++){
    dots[j].addEventListener("click", funcsDot[j]);
}

