document.addEventListener("DOMContentLoaded", function () {
  var main = new Splide("#main-carousel", {
    type: "fade",
    rewind: true,
    pagination: false,
    arrows: false,
  });
  var thumbnails = new Splide("#thumbnail-carousel", {
    fixedWidth: 100,
    fixedHeight: 80,
    gap: 10,
    rewind: true,
    pagination: false,
    focus: "center",
    isNavigation: true,
    breakpoints: {
      600: {
        fixedWidth: 60,
        fixedHeight: 48,
      },
    },
  });
  main.sync(thumbnails);
  main.mount();
  thumbnails.mount();
});
