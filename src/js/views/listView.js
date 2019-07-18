import { elements } from "./base";

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
            <button class="item-remove btn-text" data-id="${item.id}">x</button>
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
  console.log(item);
  if (item) item.parentElement.removeChild(item);
};
