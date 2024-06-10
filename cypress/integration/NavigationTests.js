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
    //cy.login(data.standard_user.username, data.standard_user.password)
  });

  it("Home page", () => {
    cy.login(data.standard_user.username, data.standard_user.password)
    cy.get(homePage.elements.hamburgerMenu).should("be.visible");
  });

  it("Product page", () => {
    cy.login(data.standard_user.username, data.standard_user.password)
    homePage.openProductPage();
  });

  it("Sort products", () => {
    cy.login(data.standard_user.username, data.standard_user.password)
  });

  it("Visual test", () => {
    cy.login(data.standard_user.username, data.standard_user.password);
  });
});
