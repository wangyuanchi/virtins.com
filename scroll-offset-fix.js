document.querySelectorAll(".scroll-fix").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const href = this.getAttribute("href");
    const targetElement = document.querySelector(href);
    const offset = -100;

    window.scrollTo({
      top: targetElement.offsetTop + offset,
      behavior: "smooth",
    });
  });
});
