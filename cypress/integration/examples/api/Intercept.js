/// <reference types="Cypress" />
describe("API test", () => {
  let data;
  before(function () {
    cy.fixture("testData").then(function (testData) {
      data = testData;
    });
  });
  it("Bag test", function () {
    cy.visit("https://automationteststore.com");
    cy.intercept(
      "GET",
      "https://automationteststore.com/index.php?rt=r/product/product/addToCart"
    ).as("addToCard");
    // cy.intercept(
    //   "POST",
    //   "https://automationteststore.com/index.php?rt=r/checkout/cart/recalc_totals"
    // ).as("recalc_totals");
    cy.get('[class="active menu_home"]').trigger("mouseover");
    cy.get('[class="menu_text"]').contains("Cart").click({ force: true });
    cy.wait("@addToCard").should(({ request, response }) => {
      cy.log("request: " + JSON.stringify(request));
      cy.log("response: " + JSON.stringify(response));
      expect(response.statusCode).to.eq(200);
      cy.log("statusCode: " + response.statusCode);
    });
    // cy.wait("@recalc_totals").should(({ request, response }) => {
    //   cy.log("request: " + JSON.stringify(request));
    //   cy.log("response: " + JSON.stringify(response));
    //   expect(response.statusCode).to.eq(200);
    //   cy.log("statusCode: " + response.statusCode);
    // });
  });
});
