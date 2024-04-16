// Bootstrap modals with id "FreeShippingModal" and anchors' id-specific modals have the .modal class
// Other images use the shared modal with .modal__modal class
// Both classes use the same design in style.css, but different classes to prevent clashes

const modal = document.querySelector(".modal__modal");
const figureList = document.querySelectorAll(".figure");
const anchorList = document.querySelectorAll(".modal__anchor");

const modal__content = document.querySelector(".modal__content");
const modal__caption = document.querySelector(".modal__caption");

// for figures
figureList.forEach((figure) => {
  let image = figure.querySelector("img");
  let caption = figure.querySelector("figcaption");
  image.style.cursor = "pointer";
  image.addEventListener("click", () => {
    modal.style.display = "block";
    modal__content.src = image.src.replace("-m.png", ".png"); // some pictures do not have -m
    modal__caption.innerText = caption.innerText;
  });
});

// for anchors and its corresponding image
anchorList.forEach((anchor) => {
  anchor.style.cursor = "pointer";
  let modalID = anchor.id.replace("anchor", "image");
  let targetModal = document.getElementById(modalID);
  let targetModalClose = targetModal.querySelector(".modal__close");
  anchor.addEventListener("click", () => {
    targetModal.style.display = "block";
  });
  targetModalClose.addEventListener("click", () => {
    targetModal.style.display = "none";
  });
});

// When the user clicks on <span> (x), close the modal
const modal__close = document.querySelector(".modal__close");
modal__close.addEventListener("click", () => {
  modal.style.display = "none";
});
