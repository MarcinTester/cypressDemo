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

  it("Home page elements quick check", () => {
    cy.login(users.standard_user.username, users.standard_user.password);
    homePage.elements.hamburgerMenu().should("be.visible");
    homePage.elements.productCard().should("have.length", 6);
    homePage.elements.productPrice().each((element) => {
      cy.wrap(element).should("include.text", "$");
    });
  });

  it("Open all product pages", () => {
    cy.login(users.standard_user.username, users.standard_user.password);
    data.products.forEach(function (product) {
      homePage.openProductPage(product);
      productPage.elements
        .productName()
        .should("be.visible")
        .should("have.text", product);
      productPage.elements
        .productPrice()
        .should("be.visible")
        .should("include.text", "$");
      productPage.backToProducts();
    });
  });
});
