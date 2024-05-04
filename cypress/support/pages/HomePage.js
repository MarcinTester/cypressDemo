class HomePage {
  elements = {
    productsButton: () => cy.get('[href="/products"]'),
    cartButton: () => cy.get('[href="/view_cart"]'),
    signInButton: () => cy.get('[class="fa fa-lock"]'),
  };

  signIn() {
    this.elements.signInButton().click();
  }

  openProducts() {
    this.elements.productsButton().click();
  }

  openCart() {
    this.elements.cartButton().first().click();
  }

  failTest() {
    this.elements.productsButton().should("not.be.visible");
  }
}

export default HomePage;
