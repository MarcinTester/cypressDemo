import LoginPage from "../support/pages/LoginPage";
import HomePage from "../support/pages/HomePage";

const loginPage = new LoginPage();
const homePage = new HomePage();

Cypress.Commands.add("checkText", (locator, checkText) => {
  locator.invoke("text").then((text) => {
    cy.log("Text from element:", text);
    expect(text).to.contain(checkText);
  });
});

Cypress.Commands.add("addProduct", (productname) => {
  homePage.elements.itemDescription().each(($el, index) => {
    if ($el.text().includes(productname)) {
      homePage.elements.itemAddToCartButton().eq(index).click();
    }
  });
});

Cypress.Commands.add("addProducts", (products) => {
  products.forEach(function (product) {
    cy.addProduct(product);
  });
});

Cypress.Commands.add("login", (username, password) => {
  loginPage.provideUsername(username);
  loginPage.providePassword(password);
  loginPage.clickLogin();
});
