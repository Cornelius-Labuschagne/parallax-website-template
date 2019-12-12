// the parallax function is here

const plax1 = document.querySelector('.mySlide1');
const plax2 = document.querySelector('.mySlide2');
const plax3 = document.querySelector('.mySlide3');
const navbar = document.querySelector('.navbar');
const navmenu = document.querySelector('.nav-menu');
const menubtn = document.querySelector('.menu-btn');

function openMenu() {
  menubtn.classList.toggle('menu-btn_open');
  navmenu.classList.toggle('nav-menu__open');
}

window.addEventListener('scroll', function() {
  let offset = window.pageYOffset;
  plax1.style.transform = 'translateY(' + offset * 0.7 + 'px)';
  plax2.style.transform = 'translateY(' + offset * 0.7 + 'px)';
  plax3.style.transform = 'translateY(' + offset * 0.7 + 'px)';
  if (offset >= this.window.innerHeight / 2) {
    navbar.classList.add('navbar_scrolled');
  } else {
    navbar.classList.remove('navbar_scrolled');
  }
});

// the slide show function is here

var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName('mySlides');
  var dots = document.getElementsByClassName('dot');
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(' active', '');
  }
  slides[slideIndex - 1].style.display = 'block';
  dots[slideIndex - 1].className += ' active';
  setTimeout(showSlides, 5000); // Change image every 5 seconds
}
