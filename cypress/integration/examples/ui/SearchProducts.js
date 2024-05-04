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

  it("Search product", () => {
    cy.visit(data.baseURL);
    homePage.openProducts();
    productPage.searchProducts(data.products[0]);
    productPage.searchProducts(data.products[1]);
    productPage.searchProducts(data.products[2]);
  });
});
