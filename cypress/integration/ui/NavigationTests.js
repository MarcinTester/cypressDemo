/// <reference types="Cypress" />
import HomePage from "../../support/pages/HomePage";
import CartPage from "../../support/pages/CartPage";
import ProductPage from "../../support/pages/ProductPage";
describe("test", function () {
  let data;
  let users;
  const homePage = new HomePage();
  const cartPage = new CartPage();
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

  it("Home page elements check", () => {
    cy.login(users.standard_user.username, users.standard_user.password);
    homePage.elements.hamburgerMenu().should("be.visible");
    homePage.elements
      .productCard()
      .should("be.visible")
      .should("have.length", 6);
    homePage.elements.productPrice().each((element) => {
      cy.wrap(element).should("include.text", "$");
    });
  });

  it("Open all product pages and verify product name", () => {
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

  it("Add and remove 2 products from card", () => {
    cy.login(users.standard_user.username, users.standard_user.password);
    cy.addProduct(data.products[0]);
    cy.addProduct(data.products[4]);
    homePage.elements
      .shoppingCartBadge()
      .should("be.visible")
      .should("contain.text", "2");

    homePage.openCart();

    cartPage.elements
      .productName()
      .contains(data.products[0])
      .should("be.visible");
    cartPage.elements
      .productName()
      .contains(data.products[4])
      .should("be.visible");
    cartPage.elements.price().should("include.text", "$");

    cartPage.removeFirstProduct();

    homePage.elements
      .shoppingCartBadge()
      .should("be.visible")
      .should("contain.text", "1");

    cartPage.removeFirstProduct();
    homePage.elements.shoppingCartBadge().should("not.exist");
  });
});
