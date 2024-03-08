const modal = document.querySelector(".modal");
const figureList = document.querySelectorAll(".figure");

const modal__content = document.querySelector(".modal__content");
const modal__caption = document.querySelector(".modal__caption");

figureList.forEach((figure) => {
  let image = figure.querySelector("img");
  let caption = figure.querySelector("figcaption");
  image.style.cursor = "pointer";
  image.addEventListener("click", () => {
    modal.style.display = "block";
    modal__content.src = image.src.replace("-m.png", ".png");
    modal__caption.innerText = caption.innerText;
  });
});

// When the user clicks on <span> (x), close the modal
const modal__close = document.querySelector(".modal__close");
modal__close.addEventListener("click", () => {
  modal.style.display = "none";
});
