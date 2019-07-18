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

  removeItem(id) {
    const index = this.items.findIndex(item => item.id === id);
    this.items.splice(index, 1);
  }

  getSumtotal() {
    const sum = this.items.reduce((accumulator, current) => {
      return accumulator + current.price * current.quantity;
    }, 0);

    return parseFloat(sum).toFixed(2);
  }

  getTotalQuantity() {
    return this.items.reduce(
      (accumulator, current) => accumulator + parseInt(current.quantity),
      0
    );
  }
}
