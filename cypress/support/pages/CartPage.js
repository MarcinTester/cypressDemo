class CartPage {
  elements = {
    proceedToCheckoutButton: () =>
      cy.get('[class="btn btn-default check_out"]'),
    placeOrderButton: () => cy.get('[href="/payment"]'),
  };

  proceedToCheckout() {
    this.elements.proceedToCheckoutButton().click();
  }
}

export default CartPage;
