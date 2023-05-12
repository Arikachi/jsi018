var gate = document.getElementById("gate");
var playing = false;
var song = document.querySelector('.second-song1')

function audioFunction() {
  playing ? gate.pause() : gate.play();
};

gate.onplaying = function() {
  playing = true;
};
gate.onpause = function() {
  playing = false;
}

song.addEventListener('click', audioFunction)

var fatima = document.getElementById("fatima");
var playing2 = false;
var song2 = document.querySelector('.second-song2')

function audioFunction2() {
  playing2 ? fatima.pause() : fatima.play();
};

fatima.onplaying = function() {
  playing2 = true;
};
fatima.onpause = function() {
  playing2 = false;
}

song2.addEventListener('click', audioFunction2)

var again = document.getElementById("again");
var playing3 = false;
var song3 = document.querySelector('.second-song3')

function audioFunction3() {
  playing3 ? again.pause() : again.play();
};

again.onplaying = function() {
  playing3 = true;
};
again.onpause = function() {
  playing3 = false;
}

song3.addEventListener('click', audioFunction3)

var special = document.getElementById("special");
var playing4 = false;
var song4 = document.querySelector('.second-song4')

function audioFunction4() {
  playing4 ? special.pause() : special.play();
};

special.onplaying = function() {
  playing4 = true;
};
special.onpause = function() {
  playing4 = false;
}

song4.addEventListener('click', audioFunction4)

let items1 = document.querySelector('.sec1')
let icon1 = document.querySelector('.fa-play1')

items1.addEventListener("mouseover", function(){
  icon1.classList.add("appear2");
})

items1.addEventListener("mouseleave", function(){
  icon1.classList.remove("appear2");
})

let items2 = document.querySelector('.sec2')
let icon2 = document.querySelector('.fa-play2')

items2.addEventListener("mouseover", function(){
  icon2.classList.add("appear2");
})

items2.addEventListener("mouseleave", function(){
  icon2.classList.remove("appear2");
})

let items3 = document.querySelector('.sec3')
let icon3 = document.querySelector('.fa-play3')

items3.addEventListener("mouseover", function(){
  icon3.classList.add("appear2");
})

items3.addEventListener("mouseleave", function(){
  icon3.classList.remove("appear2");
})

let items4 = document.querySelector('.sec4')
let icon4 = document.querySelector('.fa-play4')

items4.addEventListener("mouseover", function(){
  icon4.classList.add("appear2");
})

items4.addEventListener("mouseleave", function(){
  icon4.classList.remove("appear2");
})

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function currentDiv(n) {
  showDivs(slideIndex = n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" w3-white", "");
  }
  x[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " w3-white";
}