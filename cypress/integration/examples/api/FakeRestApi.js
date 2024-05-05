/// <reference types="Cypress" />
describe("API test", () => {
  let data;
  let testBody;
  let testAuthorBody;
  before(function () {
    cy.fixture("testData").then(function (testData) {
      data = testData;
    });
    cy.fixture("activitiesBody").then(function (activitiesBody) {
      testBody = activitiesBody;
    });
    cy.fixture("authorBody").then(function (authorBody) {
      testAuthorBody = authorBody;
    });
  });

  it("GET test", () => {
    cy.request({
      method: "GET",
      url: "https://fakerestapi.azurewebsites.net/api/v1/Activities",
    }).then((response) => {
      let body = JSON.parse(JSON.stringify(response.body));
      let x = JSON.parse(JSON.stringify(body[0]));
      expect(response.status).to.eq(200);
      expect(testBody.id).to.eq(x.id);
      expect(testBody.title).to.eq(x.title);
    });
  });

  it("POST test", () => {
    cy.request({
      method: "POST",
      url: "https://fakerestapi.azurewebsites.net/api/v1/Authors",
      body: testAuthorBody,
    }).then((response) => {
      let body = JSON.parse(JSON.stringify(response.body));
      cy.log(body)
      cy.log(testAuthorBody)
      expect(response.status).to.eq(200);
      expect(testAuthorBody.id).to.eq(body.id);
      expect(testAuthorBody.firstName).to.eq(body.firstName);
      expect(testAuthorBody.lastName).to.eq(body.lastName);
    });
  });
});
