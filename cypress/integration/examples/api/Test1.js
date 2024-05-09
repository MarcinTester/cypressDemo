/// <reference types="Cypress" />

describe("apiTest", function () {
  var result;
  let data;
  before(function () {
    cy.fixture("testData").then(function (testData) {
      data = testData;
    });
  });

  it("apiTest Example", () => {
    result = cy.request(data.baseURL + "/api/brandsList");
    cy.log(result);
    result.its("status").should("equal", 200);
  });

  it("apiTest Validate example", () => {
    cy.request({
      method: "GET",
      url: data.baseURL + "/api/brandsList",
      headers: {
        accept: "application/json",
      },
    }).then((response) => {
      let body = JSON.parse(JSON.stringify(response.body));
    });
  });
});
