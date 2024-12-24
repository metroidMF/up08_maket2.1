document.addEventListener("DOMContentLoaded", () => {
  const slider = document.querySelector(".burgers");
  const prevButton = document.querySelector(".prev__button");
  const nextButton = document.querySelector(".next__button");
  const slides = Array.from(slider.querySelectorAll(".burger"));
  const burgerMenu = document.querySelector(".menu");
  const menu = document.querySelector(".header");

  let slideIndex = 0;

  function showPreviousSlide() {
    if (window.innerWidth > 720) return;
    slideIndex = (slideIndex - 1 + slides.length) % slides.length;
    updateSlider();
  }

  function showNextSlide() {
    if (window.innerWidth > 720) return;
    slideIndex = (slideIndex + 1) % slides.length;
    updateSlider();
  }

  function updateSlider() {
    slides.forEach((slide, index) => {
      slide.style.display = index === slideIndex ? "flex" : "none";
    });
  }

  burgerMenu.addEventListener("click", () => {
    menu.classList.toggle("active");
  });

  prevButton.addEventListener("click", showPreviousSlide);
  nextButton.addEventListener("click", showNextSlide);
});
