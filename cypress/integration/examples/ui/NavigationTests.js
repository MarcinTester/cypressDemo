/// <reference types="Cypress" />
import HomePage from "../../../support/pages/HomePage";
import LoginPage from "../../../support/pages/LoginPage";
describe("test", function () {
  let data;
  const homePage = new HomePage();
  const loginPage = new LoginPage();
  before(function () {
    cy.fixture("testData").then(function (testData) {
      data = testData;
    });
  });

  beforeEach(function () {
    cy.visit(data.baseURL);
    loginPage.provideUsername(data.standard_user.username);
    loginPage.providePassword(data.standard_user.password);
  });

  it("Login and logout standard_user", () => {
    loginPage.clickLogin()
    homePage.openProductPage();
  });
});
