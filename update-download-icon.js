const collapse1 = document.getElementById("collapse-1");
const icon1 = document.getElementById("collapse-1-icon");
collapse1.addEventListener("show.bs.collapse", (event) => {
  icon1.classList.remove("bi-arrow-down-circle-fill");
  icon1.classList.add("bi-arrow-up-circle-fill");
});
collapse1.addEventListener("hide.bs.collapse", (event) => {
  icon1.classList.remove("bi-arrow-up-circle-fill");
  icon1.classList.add("bi-arrow-down-circle-fill");
});

const collapse2 = document.getElementById("collapse-2");
const icon2 = document.getElementById("collapse-2-icon");
collapse2.addEventListener("show.bs.collapse", (event) => {
  icon2.classList.remove("bi-arrow-down-circle-fill");
  icon2.classList.add("bi-arrow-up-circle-fill");
});
collapse2.addEventListener("hide.bs.collapse", (event) => {
  icon2.classList.remove("bi-arrow-up-circle-fill");
  icon2.classList.add("bi-arrow-down-circle-fill");
});
