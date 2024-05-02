/// <reference types="Cypress" />
import HomePage from "../../../support/pages/HomePage";
import LoginPage from "../../../support/pages/LoginPage";
describe("test", function () {
  let data
  const homePage = new HomePage();
  const loginPage = new LoginPage();
  before(function () {

    cy.fixture('testData').then(function (testData) {
      data = testData
    })
  })
  it("Register user", () => {
    cy.visit(data.baseURL);
    homePage.signIn();
    loginPage.registerNewUser();
  });

  it("Login user", () => {
    cy.visit(data.baseURL);
    homePage.signIn();
    loginPage.loginUser(data.email, data.password);
  });

  it("Login user with wrong password", () => {
    cy.visit(data.baseURL);
    homePage.signIn();
    loginPage.loginUser(data.email, data.incorrcetPassword);
  });

  it("Fail test", () => {
    cy.visit(data.baseURL);
    homePage.signIn();
    cy.get(this.accountCreatedText)
      .contains("Account Created!")
      .should("be.visible");
  });
});