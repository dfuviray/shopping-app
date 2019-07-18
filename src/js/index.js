import List from "./models/listModel";
import { elements } from "./views/base";
import { renderItem } from "./views/listView";

const list = new List();

//FORM CONTROL FOR EVENT OPENING AND CLOSING
elements.openForm.addEventListener("click", e => {
  elements.formContainer.classList.add("shopping-form__open");
});

elements.closeForm.addEventListener("click", e => {
  elements.formContainer.classList.remove("shopping-form__open");
});

//SHOPPING LIST CONTROLLER

elements.addForm.addEventListener("submit", e => {
  e.preventDefault();

  const inputFields = {
    description: elements.inputDescription,
    price: elements.inputPrice,
    quantity: elements.inputQuantity
  };

  list.addItem(inputFields);
  renderItem(inputFields);
});
