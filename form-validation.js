(() => {
  "use strict";

  // Fetch all the forms to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll(".needs-validation");

  // Loop over them and prevent submission
  Array.from(forms).forEach((form) => {
    form.addEventListener(
      "submit",
      (event) => {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }
        // If validation is successful, run Recaptcha V3
        else {
          event.preventDefault();
          grecaptcha.ready(function () {
            grecaptcha.execute("6LfJ-kMkAAAAAPGBHMmotQi_b14c-6Dj2w_XY1Yi", { action: "submit" }).then(function (token) {
              // Create hidden input to post token to php file
              const hiddenInput = document.createElement("input");
              hiddenInput.type = "hidden";
              hiddenInput.name = "g-recaptcha-response";
              hiddenInput.value = token;
              form.appendChild(hiddenInput);
              form.submit();
            });
          });
        }
        form.classList.add("was-validated");
      },
      false
    );
  });
})();
