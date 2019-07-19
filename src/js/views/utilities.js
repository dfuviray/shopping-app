import { elements } from "./base";

const error = {};

export const validateInput = e => {
  const inputName = e.target.name;
  const inputValue = e.target.value;
  const inputType = e.target.type;
  const hasValue = inputValue.trim().length > 0;
  const errorMessage = (error[
    inputName
  ] = `${inputName} is not allowed to be empty`);

  if (inputType === "text") {
    if (!hasValue) errorMessage;
    else delete error[inputName];
  }

  if (inputType === "number") {
    if (!inputValue || inputValue <= 0) error[inputName] = errorMessage;
    else delete error[inputName];
  }

  return error;
};

export const isAllInputsEmpty =
  elements.inputDescription.value.trim().length > 0 &&
  elements.inputPrice.value > 0 &&
  elements.inputQuantity.value > 0;
