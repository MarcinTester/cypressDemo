class CheckoutPage {
  elements = {
    firstNameTextField: () => cy.get('[data-test="firstName"]'),
    lastNameTextField: () => cy.get('[data-test="lastName"]'),
    postalCodeTextField: () => cy.get('[data-test="postalCode"]'),
    continueButton: () => cy.get('[data-test="continue"]'),
    finishButton: () => cy.get('[data-test="finish"]'),
    backHomeButton: () => cy.get('[data-test="back-to-products"]'),
  };

  provideFirstName(firstName) {
    this.elements.firstNameTextField().type(firstName);
  }

  provideLastName(lastName) {
    this.elements.lastNameTextField().type(lastName);
  }

  providePostalCode(postalCode) {
    this.elements.postalCodeTextField().type(postalCode);
  }

  continueToOverview() {
    this.elements.continueButton().click();
  }

  finishCheckout() {
    this.elements.finishButton().click();
  }

  backToProducts() {
    this.elements.backHomeButton().click();
  }
}

export default CheckoutPage;
