

Cypress.Commands.add("test1", (baseURL) => {
  cy.log(baseURL)
  cy.request({
    method: "GET",
    url: baseURL + "/add_to_cart/1",
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
