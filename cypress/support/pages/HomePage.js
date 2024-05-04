class HomePage {
  productsButton = '[href="/products"]';

  signIn() {
    cy.get('[class="fa fa-lock"]').click();
  }

  products() {
    cy.get(this.productsButton).click();
  }

  failTest() {
    cy.get(this.productsButton).should("not.be.visible");
  }
}

export default HomePage;
