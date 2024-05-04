import LoginPage from "../support/pages/LoginPage";
const loginPage = new LoginPage();

Cypress.Commands.add("createUserName", () => {
  var result = "";
  for (var i = 0; i < 5; i++) {
    result += Math.floor(Math.random() * 10);
  }
  var result = String(result);
  console.log("result " + result);
  return result;
});

Cypress.Commands.add("newUser", () => {
  cy.createUserName().then((result) => {
    console.log(result);
    loginPage.elements.username().type(result);
    loginPage.elements.signUpemail().type(result + "@gmial.com");
  });
});

Cypress.Commands.add("checkText", (locator, checkText) => {
  locator.invoke("text").then((text) => {
    cy.log("Text from element:", text);
    expect(text).to.contain(checkText);
  });
});
