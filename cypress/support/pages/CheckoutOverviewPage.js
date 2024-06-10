class CheckoutOverviewPage {
  elements = {
    finishButton: () => cy.get('[data-test="finish"]'),
  };

  finishCheckout() {
    this.elements.finishButton().click();
  }
}

export default CheckoutOverviewPage;
