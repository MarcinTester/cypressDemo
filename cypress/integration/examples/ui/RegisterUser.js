/// <reference types="Cypress" />
import HomePage from "../../../support/pages/HomePage";
import LoginPage from "../../../support/pages/LoginPage";
describe("test", function () {
let data
  before(function () {
    cy.fixture('testData').then(function(testData) {
      data = testData
    })
  })
  it("Register user", () => {
    const homePage = new HomePage();
    const loginPage = new LoginPage();
    cy.visit("https://automationexercise.com/");
    homePage.signIn();
    loginPage.registerNewUser();
  });

  it("Login user", () => {
    const homePage = new HomePage();
    const loginPage = new LoginPage();
    cy.visit("https://automationexercise.com/");
    homePage.signIn();
    loginPage.loginUser(data.email, data.password);
  });

  it("Fail test", () => {
    const homePage = new HomePage();
    const loginPage = new LoginPage();
    cy.visit("https://automationexercise.com/");
    homePage.signIn();
    cy.get(this.accountCreatedText)
      .contains("Account Created!")
      .should("be.visible");
  });
});