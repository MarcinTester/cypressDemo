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
  it("Bag test", function () {
    cy.visit(data.baseURL);
    cy.intercept("GET", "https://automationexercise.com/products?search=top").as(
      "searchProduct"
    );
    homePage.products();
    productPage.searchProducts("top")
    
    // cy.intercept("POST", "https://automationteststore.com/index.php?rt=r/checkout/cart/recalc_totals").as("recalc_totals")

    cy.wait("@searchProduct").should(({ request, response }) => {
      cy.log("request: " + JSON.stringify(request));
      cy.log("response: " + JSON.stringify(response));

      expect(response.statusCode).to.eq(200);
    
      cy.log("body: " + JSON.stringify(response.body));
    });
    // cy.wait("@recalc_totals").should(({ request, response }) => {
    //     cy.log("request: " + JSON.stringify(request))
    //     cy.log("response: " + JSON.stringify(response))
    //     expect(response.statusCode).to.eq(200)
    //     cy.log("statusCode: " + response.statusCode)
    // })
  });
});
