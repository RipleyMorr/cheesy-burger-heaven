//Menu Carousel
let currentSlide = 0;
const slides = document.querySelectorAll('.menu__item');
const totalSlides = slides.length / 3;
const carousel = document.querySelector('.menu__carousel');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

nextBtn.addEventListener('click', () => {
    if (currentSlide < totalSlides - 1) {
        currentSlide++;
        carousel.style.transform = `translateX(-${currentSlide * 100}%)`;
    }
});

prevBtn.addEventListener('click', () => {
    if (currentSlide > 0) {
        currentSlide--;
        carousel.style.transform = `translateX(-${currentSlide * 100}%)`;
    }
});


document.getElementById("dropdown-btn").addEventListener("click", function(e) {
    e.preventDefault();
    const dropdown = this.parentElement;
  
    if (dropdown.classList.contains("open")) {
      dropdown.classList.remove("open");
    } else {
      
      document.querySelectorAll('.navbar__dropdown').forEach(item => item.classList.remove('open'));
      dropdown.classList.add("open");
    }
  });
  

  document.addEventListener("click", function(e) {
    const isClickInside = document.querySelector('.navbar__dropdown').contains(e.target);
  
    if (!isClickInside) {
      document.querySelectorAll('.navbar__dropdown').forEach(item => item.classList.remove('open'));
    }
  });
  

  //smooth scrolling
function smoothScroll(target, duration) {
  const targetElement = document.querySelector(target);
  const targetPosition = targetElement.getBoundingClientRect().top;
  const startPosition = window.pageYOffset;
  let startTime = null;

  function animation(currentTime) {
    if (startTime === null) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const run = ease(timeElapsed, startPosition, targetPosition, duration);
    window.scrollTo(0, run);
    if (timeElapsed < duration) requestAnimationFrame(animation);
  }

  
  function ease(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t + b;
    t--;
    return (-c / 2) * (t * (t - 2) - 1) + b;
  }

  requestAnimationFrame(animation);
}


document.querySelector('.scroll-to-menu').addEventListener('click', function (e) {
  e.preventDefault();
  smoothScroll('#menu', 1000); 
});

document.querySelector('.scroll-to-header').addEventListener('click', function (e) {
  e.preventDefault();
  smoothScroll('.section_nav_header', 1000); 
});
