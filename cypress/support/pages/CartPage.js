class CartPage {
  elements = {
    proceedToCheckoutButton: () =>
      cy.get('[class="btn btn-default check_out"]'),
  };

  proceedToCheckout() {
    this.elements.proceedToCheckoutButton().click();
  }
}

export default CartPage;
