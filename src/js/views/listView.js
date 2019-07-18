import { elements } from "./base";

export const renderItem = inputFields => {
  const markup = `
        <div class="item-info">
            <p class="item-description">
                ${inputFields.description.value}
            </p>
            <p class="item-price">${inputFields.price.value}</p>
            <p class="item-quantity">${inputFields.quantity.value}</p>
            <p class="item-total">${inputFields.price.value *
              inputFields.quantity.value}</p>
            <a class="item-remove" href="#">x</a>
        </div>
    `;
  elements.tableList.insertAdjacentHTML("beforeend", markup);
};
