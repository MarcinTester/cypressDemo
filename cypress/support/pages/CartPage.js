class CartPage {
  elements = {
    checkoutButton: () => cy.get('[data-test="checkout"]'),

  };

  proceedToCheckout() {
    this.elements.checkoutButton().click();
  }
}

export default CartPage;
