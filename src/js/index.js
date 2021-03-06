import List from "./models/listModel";
import { elements } from "./views/base";
import { isAllInputsEmpty } from "./views/utilities";
import {
  renderItem,
  renderSumTotal,
  renderTotalQuantity,
  clearInputs,
  removeItem,
  renderError
} from "./views/listView";

const list = new List();

//FORM CONTROL FOR EVENT OPENING AND CLOSING
elements.openForm.addEventListener("click", e => {
  elements.formContainer.classList.add("shopping-form__open");
});

elements.closeForm.addEventListener("click", e => {
  elements.formContainer.classList.remove("shopping-form__open");
});

//SHOPPING LIST CONTROLLER
function renderStats() {
  renderSumTotal(list.getSumtotal());
  renderTotalQuantity(list.getTotalQuantity());
}

elements.addForm.addEventListener("submit", e => {
  e.preventDefault();
  const inputFields = {
    description: elements.inputDescription,
    price: elements.inputPrice,
    quantity: elements.inputQuantity
  };
  const isAllInputsEmpty = !(
    elements.inputDescription.value.trim().length > 0 &&
    elements.inputPrice.value > 0 &&
    elements.inputQuantity.value > 0
  );
  if (isAllInputsEmpty) return;

  const item = list.addItem(inputFields);
  renderItem(item);
  clearInputs();
  renderStats();
});

elements.tableList.addEventListener("click", e => {
  const btn = e.target.closest(".item-remove");
  if (btn) {
    const id = btn.dataset.id;
    list.removeItem(id);
    removeItem(id);
    renderStats();
  }
});

elements.allInput.forEach(input => {
  input.addEventListener("keyup", e => renderError(e));
  input.addEventListener("change", e => renderError(e));
  input.addEventListener("click", e => renderError(e));
});
