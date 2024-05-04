class LoginPage {
  elements = {
    logoutButton: () => cy.get('[href="/logout"]'),
    failedLoginText: () => cy.get(".login-form > form > p"),
    username: () => cy.get('[data-qa="signup-name"]'),
    loggedAs: () => cy.get(":nth-child(10) > a"),
    signUpemail: () => cy.get('[data-qa="signup-email"]'),
    loginEmail: () => cy.get('[data-qa="login-email"]'),
    signUpButton: () => cy.get('[data-qa="signup-button"]'),
    loginPassword: () => cy.get('[data-qa="login-password"]'),
    loginButton: () => cy.get('[data-qa="login-button"]'),
    password: () => cy.get('[type="password"]'),
    firstName: () => cy.get('[data-qa="first_name"]'),
    lastName: () => cy.get('[data-qa="last_name"]'),
    address: () => cy.get('[data-qa="address"]'),
    state: () => cy.get('[data-qa="state"]'),
    city: () => cy.get('[data-qa="city"]'),
    zipcode: () => cy.get('[data-qa="zipcode"]'),
    phoneNumber: () => cy.get("#mobile_number"),
    submitButton: () => cy.get('[type="submit"]'),
    accountCreatedText: () => cy.get('[data-qa="account-created"]'),
    radioButton: () => cy.get('[type="radio"]'),
  };

  registerNewUser() {
    cy.newUser();
    this.elements.signUpButton().click();
    this.elements.radioButton().first().check();
    this.elements.password().type("test1234!");
    this.elements.firstName().type("tester");
    this.elements.lastName().type("test");
    this.elements.address().type("address 1/34");
    this.elements.state().type("state");
    this.elements.city().type("city");
    this.elements.zipcode().type("543");
    this.elements.phoneNumber().type("332 4324 4342 432432");
    this.elements.submitButton().contains("Create Account").click();
    this.elements
      .accountCreatedText()
      .contains("Account Created!")
      .should("be.visible");
  }

  loginUser(email, password, username) {
    this.elements.loginEmail().type(email);
    this.elements.loginPassword().type(password);
    this.elements.loginButton().click();
    cy.checkText(this.elements.loggedAs(), "Logged in as " + username);
    this.elements.logoutButton().should("be.visible");
  }

  loginUserFail(email, password) {
    this.elements.loginEmail().type(email);
    this.elements.loginPassword().type(password);
    this.elements.loginButton().click();
    cy.checkText(
      this.elements.failedLoginText(),
      "Your email or password is incorrect!"
    );
  }

  logoutUser() {
    this.elements.logoutButton().click();
    this.elements.signUpButton().should("be.visible");
  }
}

export default LoginPage;
