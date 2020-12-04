(function () {
  modals("sign__up");
})();

(function () {
  modals("sign__in");
})();

let registrBtn = document.getElementById("registr__btn");
registrBtn.addEventListener("click", function () {
  let passwordError = document.querySelector(".passwordError");
  let password = document.getElementById("password");
  let confirmPassword = document.getElementById("confirmPassword");
  if (password.value != confirmPassword.value) {
    passwordError.style.display = "inline";
  } else {
    passwordError.style.display = "none";
  }
});

function modals(name) {
  let modal = document.querySelector([".modal__", name].join(""));
  let btn = document.getElementById(name);
  let span = modal.querySelector(".modal__content").querySelector(".close");
  btn.addEventListener("click", function () {
    modal.style.display = "block";
  });
  span.addEventListener("click", function () {
    modal.style.display = "none";
  });
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };
}
