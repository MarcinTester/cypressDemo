/// <reference types="Cypress" />
import HomePage from "../../../support/pages/HomePage";
import LoginPage from "../../../support/pages/LoginPage";
describe("API test", () => {
  let data;
  const homePage = new HomePage();
  const loginPage = new LoginPage();
  before(function () {
    cy.fixture("testData").then(function (testData) {
      data = testData;
    });
  });
  it("Bag test", function () {
    cy.visit(data.baseURL);
    homePage.signIn();
    cy.intercept("POST", "https://automationexercise.com/login").as("login");
    // cy.intercept("POST", "https://automationteststore.com/index.php?rt=r/checkout/cart/recalc_totals").as("recalc_totals")
    loginPage.loginUser(data.email, data.password);
    cy.wait("@login").should(({ request, response }) => {
      cy.log("request: " + JSON.stringify(request));
      cy.log("response: " + JSON.stringify(response));
      expect(response.statusCode).to.eq(302);
      cy.log("statusCode: " + response.statusCode);
      cy.log("BODY: " + response.body);
    });
    // cy.wait("@recalc_totals").should(({ request, response }) => {
    //     cy.log("request: " + JSON.stringify(request))
    //     cy.log("response: " + JSON.stringify(response))
    //     expect(response.statusCode).to.eq(200)
    //     cy.log("statusCode: " + response.statusCode)
    // })
  });
});
