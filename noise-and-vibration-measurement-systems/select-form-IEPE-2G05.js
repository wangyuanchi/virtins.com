let selectIEPE = document.getElementById("iepe-select");
let buttonCodeIEPE = document.getElementById("paypal-button-code-IEPE");

selectIEPE.addEventListener("change", () => {
  let selectValue = selectIEPE.value;
  if (selectValue === "0") {
    buttonCodeIEPE.setAttribute("value", "8X3S9DKXP5X9S");
  }
  if (selectValue === "A") {
    buttonCodeIEPE.setAttribute("value", "ZZ3YS7QREJXT8");
  }
  if (selectValue === "B") {
    buttonCodeIEPE.setAttribute("value", "K3JLRQD5K3NGQ");
  }
  if (selectValue === "C") {
    buttonCodeIEPE.setAttribute("value", "6TE2V5XKMKP8E");
  }
  if (selectValue === "D") {
    buttonCodeIEPE.setAttribute("value", "KDC4QN5FQ4WKQ");
  }
  if (selectValue === "E") {
    buttonCodeIEPE.setAttribute("value", "CKK3Q5BS7AUHC");
  }
});
