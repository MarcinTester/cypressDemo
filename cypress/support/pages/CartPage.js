class CartPage {
  elements = {
    checkoutButton: () => cy.get('[data-test="checkout"]'),
    removeButton: () => cy.contains("Remove"),
    price: () => cy.get('[data-test="inventory-item-price"]'),
    productName: () => cy.get('[data-test="inventory-item-name"]'),
  };

  proceedToCheckout() {
    this.elements.checkoutButton().click();
  }

  removeFirstProduct() {
    this.elements.removeButton().first().click();
  }
}

export default CartPage;
