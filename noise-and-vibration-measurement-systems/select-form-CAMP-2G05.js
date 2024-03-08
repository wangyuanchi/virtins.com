let selectCAMP = document.getElementById("camp-select");
let buttonCodeCAMP = document.getElementById("paypal-button-code-CAMP");

selectCAMP.addEventListener("change", () => {
  let selectValue = selectCAMP.value;
  if (selectValue === "0") {
    buttonCodeCAMP.setAttribute("value", "GY3G5FFPZ6JZ8");
  }
  if (selectValue === "A") {
    buttonCodeCAMP.setAttribute("value", "ZRHEMDTDU9F2C");
  }
  if (selectValue === "B") {
    buttonCodeCAMP.setAttribute("value", "MKVDTC9SB3294");
  }
});
