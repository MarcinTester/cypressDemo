class CheckoutPage {
  elements = {
    proceedToCheckoutButton: () =>
      cy.get('[class="btn btn-default check_out"]'),
    placeOrderButton: () => cy.get('[href="/payment"]'),
    nameOnTheCardTextField: () => cy.get('[class="form-control"]'),
    cardNumberTextField: () => cy.get('[name="card_number"]'),
    cvcNumberTextField: () => cy.get('[name="cvc"]'),
    expiryMonthTextField: () => cy.get('[class="form-control card-expiry-month"]'),
    expiryYearTextField: () => cy.get('[name="expiry_year"]'),
    confirmOrderButton: () => cy.get('[class="form-control btn btn-primary submit-button"]'),
    orderPlacedText: () => cy.get('[class="title text-center"]'),
  };

  placeOrder() {
    this.elements.placeOrderButton().click();
  }

  nameOnTheCard(name) {
    this.elements.nameOnTheCardTextField().type(name);
  }

  cardNumber(cardNumber) {
    this.elements.cardNumberTextField().type(cardNumber);
  }

  cvcNumber(cvcNumber) {
    this.elements.cvcNumberTextField().type(cvcNumber);
  }

  expiryMonth(expiryMonth) {
    this.elements.expiryMonthTextField().type(expiryMonth);
  }
  
  expiryYear(expiryYear) {
    this.elements.expiryYearTextField().type(expiryYear);
  }

  confirmOrder() {
    this.elements.confirmOrderButton().click();
  }
  
  confirmOrderPlacedText() {
    this.elements.orderPlacedText().contains('Order Placed!').should('be.visible')
  }
}

export default CheckoutPage;
