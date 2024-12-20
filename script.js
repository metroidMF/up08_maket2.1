document.addEventListener("DOMContentLoaded", () => {
  const slider = document.querySelector(".burgers");
  const prevButton = document.querySelector(".prev__button");
  const nextButton = document.querySelector(".next__button");
  const slides = Array.from(slider.querySelectorAll(".burger"));
  const slideCount = slides.length;
  let slideIndex = 0;

  prevButton.addEventListener("click", showPreviousSlide);
  nextButton.addEventListener("click", showNextSlide);
  function showPreviousSlide() {
    slideIndex = (slideIndex - 1 + slideCount) % slideCount;
    updateSlider();
  }
  function showNextSlide() {
    slideIndex = (slideIndex + 1) % slideCount;
    updateSlider();
  }
  function updateSlider() {
    slides.forEach((slide, index) => {
      if (index === slideIndex) {
        slide.style.display = "flex";
      } else {
        slide.style.display = "none";
      }
    });

    updateSlider();
  }

  const burgerMenu = document.querySelector(".menu");
  const menu = document.querySelector(".header");

  burgerMenu.addEventListener("click", () => {
    menu.classList.toggle("active");
  });
});
