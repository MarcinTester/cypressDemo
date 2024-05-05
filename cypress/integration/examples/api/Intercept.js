/// <reference types="Cypress" />
import HomePage from "../../../support/pages/HomePage";
import LoginPage from "../../../support/pages/LoginPage";
import ProductPage from "../../../support/pages/ProductPage";
describe("API test", () => {
  let data;
  const homePage = new HomePage();
  const loginPage = new LoginPage();
  const productPage = new ProductPage();
  before(function () {
    cy.fixture("testData").then(function (testData) {
      data = testData;
    });
  });
  it("search product", function () {
    cy.visit(data.baseURL);
    cy.intercept("GET", "https://automationexercise.com/products?search=top").as(
      "searchProduct"
    );
    homePage.openProducts();
    productPage.searchProducts(data.products[0])
    cy.wait("@searchProduct").should(({ request, response }) => {
      cy.log("request: " + JSON.stringify(request));
      cy.log("response: " + JSON.stringify(response));
      expect(response.statusCode).to.eq(200);
      cy.log("body: " + JSON.stringify(response.body));
    });
  });

  it("login", function () {
    cy.visit(data.baseURL);
    cy.intercept("POST", "https://automationexercise.com/login").as(
      "login"
    );
    homePage.signIn();
    loginPage.loginUser(data.email, data.password, data.username);
    cy.wait("@login").should(({ request, response }) => {
      cy.log("request: " + JSON.stringify(request.body));
      cy.log("response: " + JSON.stringify(response));
      expect(response.statusCode).to.eq(302);
    });
  });
});
``