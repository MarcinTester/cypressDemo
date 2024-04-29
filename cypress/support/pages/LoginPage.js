class LoginPage {

  username = '[data-qa="signup-name"]';
  signUpemail = '[data-qa="signup-email"]';
  loginEmail = '[data-qa="login-email"]';
  signUpButton = '[data-qa="signup-button"]';
  loginPassword = '[data-qa="login-password"]';
  loginButton = '[data-qa="login-button"]';
  password = '[type="password"]';
  firstName = '[data-qa="first_name"]';
  lastName = '[data-qa="last_name"]';
  address = '[data-qa="address"]';
  state = '[data-qa="state"]';
  city = '[data-qa="city"]';
  zipcode = '[data-qa="zipcode"]';
  phoneNumber = '#mobile_number';
  submitButton = '[type="submit"]';
  accountCreatedText = '[data-qa="account-created"]';
  radioButton = '[type="radio"]';

  registerNewUser() {
    cy.newUser();
    cy.get(this.signUpButton).click();
    cy.get(this.radioButton).first().check();
    cy.get(this.password).type("test1234!");
    cy.get(this.firstName).type("tester");
    cy.get(this.lastName).type("test");
    cy.get(this.address).type("address 1/34");
    cy.get(this.state).type("state");
    cy.get(this.city).type("city");
    cy.get(this.zipcode).type("543");
    cy.get(this.phoneNumber).type("332 4324 4342 432432");
    cy.get(this.submitButton).contains("Create Account").click();
    cy.get(this.accountCreatedText)
      .contains("Account Created!")
      .should("be.visible");
  }

  loginUser(email, password) {
    cy.get(this.loginEmail).type(email);
    cy.get(this.loginPassword).type(password);
    cy.get(this.loginButton).click()
  }
}
export default LoginPage;
