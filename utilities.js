const form = document.querySelector(".shopping-form");
const newBtn = document.querySelector(".shopping-item__button");
const closeBtn = document.querySelector(".close__button");

function removeFormClass() {
  form.classList.remove("shopping-form__open");
}

newBtn.addEventListener("click", e => {
  form.classList.add("shopping-form__open");
});
closeBtn.addEventListener("click", removeFormClass);
