import LoginPage from "../support/pages/LoginPage";
const loginPage = new LoginPage();

Cypress.Commands.add("checkText", (locator, checkText) => {
  locator.invoke("text").then((text) => {
    cy.log("Text from element:", text);
    expect(text).to.contain(checkText);
  });
});

Cypress.Commands.add("addProduct", (productname) => {
  cy.get ('[data-test="inventory-item-description"]').each(($el,index,$list) =>{
    if ($el.text().includes (productname)) {
        cy.get('[class="btn btn_primary btn_small btn_inventory "]').eq(index).click()
    } 
});
});

Cypress.Commands.add("login", (username, password) => {
  loginPage.provideUsername(username);
  loginPage.providePassword(password);
  loginPage.clickLogin();
});

