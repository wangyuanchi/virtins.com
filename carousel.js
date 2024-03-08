const carouselElement = document.getElementById("carousel");
const carousel = new bootstrap.Carousel(carouselElement, {});

const pause = document.getElementById("carousel-pause");
const start = document.getElementById("carousel-start");

// start and pause function
start.style.display = "none";

pause.addEventListener("click", function () {
  carousel.pause();
  pause.style.display = "none";
  start.style.display = "block";
});

start.addEventListener("click", function () {
  carousel.cycle();
  pause.style.display = "block";
  start.style.display = "none";
});

// indicators and next and prev accounted for start and pause
const carouselIndicators = document.querySelectorAll(".carousel-indicators button");

carouselIndicators.forEach((indicator) => {
  indicator.addEventListener("click", () => {
    pause.style.display = "block";
    start.style.display = "none";
  });
});

document.querySelector(".carousel-control-prev").addEventListener("click", () => {
  pause.style.display = "block";
  start.style.display = "none";
});

document.querySelector(".carousel-control-next").addEventListener("click", () => {
  pause.style.display = "block";
  start.style.display = "none";
});
