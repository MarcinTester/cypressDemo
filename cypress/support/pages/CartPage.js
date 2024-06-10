class CartPage {
  elements = {
    checkoutButton: () => cy.get('[data-test="checkout"]'),
    removeButton: () => cy.contains("Remove"),
    price: () => cy.get('[data-test="inventory-item-price"]'),
  };

  proceedToCheckout() {
    this.elements.checkoutButton().click();
  }

  removeFirstProduct() {
    this.elements.removeButton().first().click();
  }
}

export default CartPage;
