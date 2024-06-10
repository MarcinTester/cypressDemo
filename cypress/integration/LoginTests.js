/// <reference types="Cypress" />
import HomePage from "../support/pages/HomePage";
import LoginPage from "../support/pages/LoginPage";
describe("test", function () {
  let data;
  const homePage = new HomePage();
  const loginPage = new LoginPage();
  before(function () {
    cy.fixture("testData").then(function (testData) {
      data = testData;
    });
  });

  beforeEach(function () {
    cy.visit(data.baseURL);
  });

  it("Login and logout standard_user", () => {
    cy.login(data.standard_user.username, data.standard_user.password)
    cy.get(homePage.elements.cartButton).should('be.visible');
    cy.get(homePage.elements.addToCartButton).should('be.visible');

    homePage.openHamburgerMenu()
    homePage.logout()

    cy.get(loginPage.elements.usernameTextField).should('be.visible');
    cy.get(loginPage.elements.passwordTextField).should('be.visible');
    cy.get(loginPage.elements.loginButton).should('be.visible');
  });

  it("Login locked_out_user", () => {
    cy.login(data.locked_out_user.username, data.locked_out_user.password)

    cy.get(loginPage.elements.errorMessage).should('be.visible');
    cy.get(loginPage.elements.errorMessage).should('contain.text', 'Epic sadface: Sorry, this user has been locked out.');
  });
});
