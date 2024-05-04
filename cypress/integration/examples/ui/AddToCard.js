/// <reference types="Cypress" />
import HomePage from "../../../support/pages/HomePage";
import LoginPage from "../../../support/pages/LoginPage";
import ProductPage from "../../../support/pages/ProductPage";
describe("test", function () {
  let data;
  const homePage = new HomePage();
  const loginPage = new LoginPage();
  const productPage = new ProductPage();

  before(function () {
    cy.fixture("testData").then(function (testData) {
      data = testData;
    });
  });

  beforeEach(function () {
    cy.visit(data.baseURL);
    homePage.signIn();
    loginPage.loginUser(data.email, data.password, data.username);
  });

  it("Add to card", () => {
    homePage.products();
    productPage.searchAndAddProducts(data.products[0]);
    productPage.searchAndAddProducts(data.products[1]);
    productPage.searchAndAddProducts(data.products[2]);
  });
});
