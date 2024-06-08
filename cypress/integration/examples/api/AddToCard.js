/// <reference types="Cypress" />

describe("apiTest", function () {
  var result;
  let data;
  before(function () {
    cy.fixture("testData").then(function (testData) {
      data = testData;
    });
  });
  it("Add to card", () => {
    result = cy.request(data.baseURL + "/add_to_cart/1");
    result.its("status").should("equal", 200);
    cy.test1();
  });
  it.only("apiTest Validate example", () => {
   // cy.log(data.baseURL)
    cy.test1(data.baseURL);
  });
});
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