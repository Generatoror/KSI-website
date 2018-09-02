
(function (global) {

var dc = {};

const mainHtml = "snippets/main.html";
const marteHtml = "snippets/mars.html";
const biblioHtml = "snippets/bibliografia.html";
const historiaHtml = "snippets/historia.html";
const objetivoHtml = "snippets/objetivo.html";
const tierraHtml = "snippets/tierra.html";
const viajeHtml = "snippets/viaje.html";


const insertHtml = function (selector, html,code) {
  var targetElem = document.querySelector(selector);
  targetElem.innerHTML = html;
  if(code==="index"){

  }
};

// Show loading icon inside element identified by 'selector'.
var showLoading = function (selector) {
  var html = "<div class='text-center'>";
  html += "<img src='Imagenes/loading-1.gif'></div>";
  insertHtml(selector, html);
};

const organize = function(){
  let titles = document.getElementsByTagName("h2");
  let toInsert ="";
  for(let i = 0; i<titles.length;i++){
    toInsert= toInsert + "<li><a href = #"+titles[i].id+">"+titles[i].innerHTML+"</a></li>";
  }
  document.getElementById("main-content").innerHTML="<ul>"+toInsert+"</ul>"+document.getElementById("main-content").innerHTML;
}

const slides = function(){
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
}

document.addEventListener("DOMContentLoaded", function (event) {

// On first load, show home view
showLoading("#main-content");
$ajaxUtils.sendGetRequest(
  mainHtml,
  function (responseText) {
    document.querySelector("#main-content")
      .innerHTML = responseText;
      slides();
  },
  false);
});

dc.loadInfoPage = function(site,index){
  showLoading("#main-content");
  let pseudoIndex = index||false;
  $ajaxUtils.sendGetRequest(
  site,
  function (responseText) {
    document.querySelector("#main-content")
      .innerHTML = responseText;
    if (pseudoIndex===true){organize();}
  },
  false);
}

function open(id){
  document.getElementById(id).classList.toggle('d-none');
}
function focusLost(id){
	if(document.getElementById(id).classList.contains('d-none')==false){
		open(id);
	}
}

var dropBtns = document.getElementsByClassName('dropdown-button');
var dropLists = document.getElementsByClassName('dropdown-itemlist');
var btnFuncs =[];
var outFuncs =[];

for (var i = 0; i<dropBtns.length;i++){
  btnFuncs[i]=open.bind(this, dropLists[i].id);

}
for (var i = 0; i<dropBtns.length;i++){
  dropBtns[i].addEventListener('click',btnFuncs[i],false);

}

for (var i = 0; i<dropBtns.length;i++){
  outFuncs[i]=focusLost.bind(this, dropLists[i].id);

}
for (var i = 0; i<dropBtns.length;i++){
  dropLists[i].addEventListener('mouseleave',outFuncs[i]);
}

global.$dc = dc;

})(window)












