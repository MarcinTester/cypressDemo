class LoginPage {

    username = '[data-qa="signup-name"]';
    email = '[data-qa="signup-email"]';
    signUpButton = '[data-qa="signup-button"]';
    password = '[type="password"]';
    firstName = '[data-qa="first_name"]';
    lastName = '[data-qa="last_name"]';

  registerNewUser() {
    cy.get(this.username).type("!tester1122");
    cy.get(this.email).type("!tester11324@gmial.com");
    cy.get(this.signUpButton).click();
    cy.get('[type="radio"]').first().check();
    cy.get(this.password).type("test1234!");
    cy.get(this.firstName).type("tester");
    cy.get(this.lastName).type("test");
    cy.get('[data-qa="address"]').type("address 1/34");
    cy.get('[data-qa="state"]').type("state");
    cy.get('[data-qa="city"]').type("city");
    cy.get('[data-qa="zipcode"]').type("543");
    cy.get('[data-qa="mobile_number"]').type("332 4324 4342 432432");
    cy.get('[type="submit"]').contains("Create Account").click();
    cy.get('[data-qa="account-created"]')
      .contains("Account Created!")
      .should("be.visible");
  }
}

export default LoginPage;
