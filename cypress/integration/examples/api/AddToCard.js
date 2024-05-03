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
  });
  it("apiTest Validate example", () => {
    cy.request({
      method: "GET",
      url: data.baseURL + "/add_to_cart/1",
      headers: {
        accept: "application/json",
      },
    }).then((response) => {
      let body = JSON.parse(JSON.stringify(response.body));
      expect(response.status).to.eq(200);
      expect(body).to.eq("Added To Cart");
      cy.log(response.status);
      cy.log(body);
    });
  });
});
