/// <reference types="Cypress" />
import HomePage from "../support/pages/HomePage";
import CartPage from "../support/pages/CartPage";
import CheckoutPage from "../support/pages/CheckoutPage";

describe("Checkout tests", function () {
  let data;
  const homePage = new HomePage();
  const cartPage = new CartPage();
  const checkoutPage = new CheckoutPage();

  before(function () {
    cy.fixture("testData").then(function (testData) {
      data = testData;
    });
  });

  beforeEach(function () {
    cy.visit(data.baseURL);
  });

  it("Add and remove from card", () => {
    cy.login(data.standard_user.username, data.standard_user.password);
    cy.addProduct(data.products[5]);
    cy.addProduct(data.products[4]);

    cy.get(homePage.elements.shoppingCartBadge)
      .should("be.visible")
      .should("contain.text", "2");

    homePage.openCart();

    cy.get(cartPage.elements.price).should("include.text", "$");

    cartPage.removeFirstProduct();

    // cy.get(homePage.elements.shoppingCartBadge)
    //   .should("be.visible")
    //   .should("contain.text", "1");

    cartPage.removeFirstProduct();

    // cy.get(homePage.elements.shoppingCartBadge)
    //   .should("not.be.visible")
  });

  it("Order all products", () => {
    cy.login(data.standard_user.username, data.standard_user.password);
    cy.addProducts(data.products);

    cy.get(homePage.elements.removeButton).should("be.visible");
    cy.get(homePage.elements.shoppingCartBadge)
      .should("be.visible")
      .should("contain.text", "6");

    homePage.openCart();
    cartPage.proceedToCheckout();
    checkoutPage.provideFirstName(data.standard_user.firstName);
    checkoutPage.provideLastName(data.standard_user.lastName);
    checkoutPage.providePostalCode(data.standard_user.postalCode);
    checkoutPage.continueToOverview();
    checkoutPage.finishCheckout();
    checkoutPage.backToProducts();

    cy.get(homePage.elements.shoppingCartBadge).should("not.be.visible");
    cy.get(homePage.elements.removeFleeceJacketButton).should("not.be.visible");
  });

  it("Order product Error user", () => {
    cy.login(data.error_user.username, data.error_user.password);
    cy.addProducts(data.products);
    cy.get(homePage.elements.removeFleeceJacketButton).should("be.visible");
    cy.get(homePage.elements.shoppingCartBadge)
      .should("be.visible")
      .should("contain.text", "1");

    homePage.openCart();
    cartPage.proceedToCheckout();
    checkoutPage.provideFirstName(data.error_user.firstName);
    checkoutPage.provideLastName(data.error_user.lastName);
    checkoutPage.providePostalCode(data.error_user.postalCode);
    checkoutPage.continueToOverview();
    checkoutPage.finishCheckout();
    checkoutPage.backToProducts();

    cy.get(homePage.elements.shoppingCartBadge).should("not.be.visible");
    cy.get(homePage.elements.removeFleeceJacketButton).should("not.be.visible");
  });
});
