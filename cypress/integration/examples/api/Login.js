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
  it("apiTest Validate example", () => {
    cy.request({
      method: "POST",
      url: 'https://automationexercise.com/login',
      headers: {
        accept: "application/json",
      },
    }).then((response) => {
      let body = JSON.parse(JSON.stringify(response.body));
      // let body2 = response.body
      // cy.log(body2)
      // cy.log(body2.responseCode)
    });
  });
});
