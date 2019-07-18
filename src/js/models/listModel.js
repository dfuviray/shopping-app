export default class List {
  constructor() {
    this.items = [];
  }

  generateId() {
    const range = 20;
    const randomNumber = Math.floor(Math.random() * Math.floor(range));
    const dateInMilliSeconds = Date.now().toString();
    return dateInMilliSeconds + randomNumber;
  }

  addItem(inputFields) {
    const item = {
      id: this.generateId(),
      description: inputFields.description.value,
      price: inputFields.price.value,
      quantity: inputFields.quantity.value
    };

    this.items.push(item);
    return item;
  }
}
