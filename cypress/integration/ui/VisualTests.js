/// <reference types="Cypress" />
import HomePage from "../../support/pages/HomePage";
import LoginPage from "../../support/pages/LoginPage";
import ProductPage from "../../support/pages/ProductPage";
describe("test", function () {
  let data;
  let users;
  const homePage = new HomePage();
  const loginPage = new LoginPage();
  const productPage = new ProductPage();
  before(function () {
    cy.fixture("testData").then(function (testData) {
      data = testData;
    });
    cy.fixture("usersData").then(function (usersData) {
      users = usersData;
    });
  });

  beforeEach(function () {
    cy.visit("/");
  });

  it("Home page", () => {
    cy.login(users.standard_user.username, users.standard_user.password);
    homePage.elements.hamburgerMenu().should("be.visible");
    homePage.elements.productCard().should("have.length", 6);
  });
});
