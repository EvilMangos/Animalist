window.onload = function () {
  (function () {
    let userUl = document.querySelector(".user__menu").querySelector("ul");
    let firstLi = userUl.children[0];
    firstLi.style.display = "flex";
    userUl.addEventListener("mouseover", function () {
      for (let li of userUl.children) {
        li.style.display = "flex";
      }
    });
    userUl.addEventListener("mouseout", function () {
      for (let li of userUl.children) {
        li.style.display = "none";
      }
      firstLi.style.display = "flex";
    });
  })();

  (function () {
    let input = document.getElementById("postCreate__btn-img");
    let span = document.querySelector(".postCreate__image").children[3];
    let img = document.querySelector(".imageForPost");
    const reader = new FileReader();

    input.addEventListener("change", function () {
      let file = input.files[0];
      span.innerHTML = file.name;
      reader.addEventListener("load", (event) => {
        img.src = event.target.result;
      });
      reader.readAsDataURL(file);
    });
  })();
};
