/// <reference types="Cypress" />
import HomePage from "../../support/pages/HomePage";
import CartPage from "../../support/pages/CartPage";
import CheckoutPage from "../../support/pages/CheckoutPage";

describe("Checkout tests", function () {
  let data;
  let users;
  const homePage = new HomePage();
  const cartPage = new CartPage();
  const checkoutPage = new CheckoutPage();

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

  it("Add and remove from card", () => {
    cy.login(users.standard_user.username, users.standard_user.password);
    cy.addProduct(data.products[5]);
    cy.addProduct(data.products[4]);

    homePage.elements
      .shoppingCartBadge()
      .should("be.visible")
      .should("contain.text", "2");

    homePage.openCart();

    cartPage.elements.price().should("include.text", "$");

    cartPage.removeFirstProduct();

    homePage.elements
      .shoppingCartBadge()
      .should("be.visible")
      .should("contain.text", "1");

    cartPage.removeFirstProduct();

    homePage.elements.shoppingCartBadge().should("not.exist");
  });

  it("Order all products", () => {
    cy.login(users.standard_user.username, users.standard_user.password);
    cy.addProducts(data.products);

    homePage.elements.removeButton().should("be.visible");
    homePage.elements
      .shoppingCartBadge()
      .should("be.visible")
      .should("contain.text", "6");

    homePage.openCart();
    cartPage.proceedToCheckout();
    checkoutPage.provideFirstName(users.standard_user.firstName);
    checkoutPage.provideLastName(users.standard_user.lastName);
    checkoutPage.providePostalCode(users.standard_user.postalCode);
    checkoutPage.continueToOverview();
    checkoutPage.finishCheckout();
    checkoutPage.elements
      .completeHeader()
      .should("be.visible")
      .should("have.text", data.completeHeader);
    checkoutPage.elements
      .completeText()
      .should("be.visible")
      .should(
        "have.text",
        data.completeText
      );
    checkoutPage.backToProducts();

    homePage.elements.shoppingCartBadge().should("not.exist");
    homePage.elements.removeFleeceJacketButton().should("not.exist");
  });

  it("Order product Error user", () => {
    cy.login(users.error_user.username, users.error_user.password);
    cy.addProducts(data.products);
    homePage.elements.removeFleeceJacketButton().should("be.visible");
    homePage.elements
      .shoppingCartBadge()
      .should("be.visible")
      .should("contain.text", "1");

    homePage.openCart();
    cartPage.proceedToCheckout();
    checkoutPage.provideFirstName(users.error_user.firstName);
    checkoutPage.provideLastName(users.error_user.lastName);
    checkoutPage.providePostalCode(users.error_user.postalCode);
    checkoutPage.continueToOverview();
    checkoutPage.finishCheckout();
    checkoutPage.backToProducts();

    homePage.elements.shoppingCartBadge().should("not.exist");
    homePage.elements.removeFleeceJacketButton().should("not.exist");
  });
});
