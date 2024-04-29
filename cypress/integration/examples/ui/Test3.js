/// <reference types="Cypress" />
import HomePage from "../../../support/pages/homePage";
import LoginPage from "../../../support/pages/LoginPage";   
describe("test", function () {
  it("apiTest Validate example", () => {
    const homePage = new HomePage();
    const loginPage = new LoginPage();
    cy.visit("https://automationexercise.com/");
    homePage.signIn();
    loginPage.registerNewUser();
  });
});
