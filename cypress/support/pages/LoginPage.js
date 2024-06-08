class LoginPage {
  elements = {
    usernameTextField: () => cy.get('[placeholder="Username"]'),
    passwordTextField: () => cy.get('[placeholder="Password"]'),
    errorMessage: () => cy.get('[data-test="error"]'),
    loginButton: () => cy.get('[data-test="login-button"]'),
  };

  provideUsername(username) {
    this.elements.usernameTextField().type(username);
  }

  providePassword(password) {
    this.elements.passwordTextField().type(password);
  }

  clickLogin() {
    this.elements.loginButton().click();
  }
}

export default LoginPage;
