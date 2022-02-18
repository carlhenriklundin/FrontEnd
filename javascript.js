/* Javaskrift 1 - Lightbox */
function openLightBox() {
  document.getElementById("lightBox1").style.display = "block";
}

function closeLightBox() {
  document.getElementById("lightBox1").style.display = "none";
}

function SlidePictureNumber(n) {
  showSlides(slideIndex = n);
}

function changeSlides(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
  var slides = document.getElementsByClassName("lightBoxItem");
  var dots = document.getElementsByClassName("smallLightBoxItem");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  
  for (var i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (var i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}


/* Javaskrift 2 - Menu */
function openMenu() {
  document.getElementById("miniMeny1").style.display = "block";
  document.getElementById("hamburger").style.display = "none";
}

function closeMenu() {
  document.getElementById("miniMeny1").style.display = "none";
  document.getElementById("hamburger").style.display = "block";
}

/* Javaskrift 3 - About Us */
function aboutUs1() {
    document.getElementById("history1").style.display = "block";
}

function aboutUs2() {
    document.getElementById("history2").style.display = "block";
}

function aboutUs3() {
    document.getElementById("history3").style.display = "block";
}