/// <reference types="Cypress" />
import HomePage from "../../support/pages/HomePage";
import LoginPage from "../../support/pages/LoginPage";
describe("test", function () {
  let data;
  let users;
  const homePage = new HomePage();
  const loginPage = new LoginPage();
  before(function () {
    cy.fixture("testData").then(function (testData) {
      data = testData;
    });
    cy.fixture("usersData").then(function (usersData) {
      users = usersData;
    });
  });

  beforeEach(function () {
    cy.visit("/");
  });

  it("Login and logout standard_user", () => {
    cy.login(users.standard_user.username, users.standard_user.password);
    homePage.elements.cartButton().should("be.visible");
    homePage.elements.addToCartButton().should("be.visible");
    homePage.elements.productCard().should("have.length", 6);

    homePage.openHamburgerMenu();
    homePage.logout();

    loginPage.elements.usernameTextField().should("be.visible");
    loginPage.elements.passwordTextField().should("be.visible");
    loginPage.elements.loginButton().should("be.visible");
  });

  it("Login standard_user with incorrect password", () => {
    cy.login(users.standard_user.username, users.incorrcetPassword);
    
    loginPage.elements
      .errorMessage()
      .should("be.visible")
      .should("contain.text", data.incorrectPasswordMessage);
  });

  it("Login locked_out_user", () => {
    cy.login(users.locked_out_user.username, users.locked_out_user.password);

    loginPage.elements
      .errorMessage()
      .should("be.visible")
      .should("contain.text", data.loginErrorText);
  });

  it("Login performance_glitch_user", () => {
    cy.login(
      users.performance_glitch_user.username,
      users.performance_glitch_user.password
    );
    homePage.elements.cartButton().should("be.visible");
    homePage.elements.addToCartButton().should("be.visible");
  });
});
