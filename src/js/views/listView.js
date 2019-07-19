import { elements } from "./base";
import { validateInput } from "./utilities";

export const renderItem = item => {
  const markup = `
    <li data-itemid="${item.id}">
        <div class="item-info">
            <p class="item-description">
                ${item.description}
            </p>
            <p class="item-price">${item.price}</p>
            <p class="item-quantity">${item.quantity}</p>
            <p class="item-total">${item.price * item.quantity}</p>
            <button class="item-remove btn-text" data-id="${
              item.id
            }"><i class="fa fa-trash" aria-hidden="true"></i></button>
        </div>
    </li>
    `;
  elements.tableList.insertAdjacentHTML("beforeend", markup);
};

export const renderSumTotal = total => {
  elements.total.innerHTML = "";
  const markup = `
    <span>$</span>${total}
    `;
  elements.total.insertAdjacentHTML("beforeend", markup);
};

export const renderTotalQuantity = quantity => {
  elements.quantity.innerHTML = "";
  const markup = `
      ${quantity}
      `;
  elements.quantity.insertAdjacentHTML("afterbegin", markup);
};

export const clearInputs = () => {
  elements.allInput.forEach(input => (input.value = ""));
};

export const removeItem = id => {
  const item = document.querySelector(`[data-itemid="${id}"]`);
  if (item) item.parentElement.removeChild(item);
};

export const renderError = e => {
  const error = validateInput(e);
  const hasError = Object.keys(error).length > 0;
  const inputName = e.target.name;
  const inputClass = e.target.id;
  const input = document.querySelector(`.${inputClass}`);
  const errorElement = document.querySelector(`.error__${inputName}`);
  const markup = `<span class="error error__${inputName}">${
    error[inputName] ? error[inputName] : ""
  }</span>`;

  if (hasError && [inputName] in error && !errorElement) {
    input.insertAdjacentHTML("afterend", markup);
  }

  if (!([inputName] in error) && errorElement)
    errorElement.parentElement.removeChild(errorElement);
};
