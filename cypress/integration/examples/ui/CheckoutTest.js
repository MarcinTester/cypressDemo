/// <reference types="Cypress" />
import HomePage from "../../../support/pages/HomePage";
import LoginPage from "../../../support/pages/LoginPage";
import CartPage from "../../../support/pages/CartPage";
import CheckoutPage from "../../../support/pages/CheckoutPage";

describe("Checkout tests", function () {
  let data;
  const homePage = new HomePage();
  const loginPage = new LoginPage();
  const cartPage = new CartPage();
  const checkoutPage = new CheckoutPage();

  before(function () {
    cy.fixture("testData").then(function (testData) {
      data = testData;
    });
  });

  beforeEach(function () {
    cy.visit(data.baseURL);
    cy.login(data.standard_user.username, data.standard_user.password)
  });

  it.only("Add and remove from card", () => {
    cy.addProduct(data.products[3]);
    cy.addProduct(data.products[2]);

    cy.get(homePage.elements.shoppingCartBadge)
    .should("be.visible",)
    .should("contain.text", "2");

    homePage.openCart();

    cy.get(cartPage.elements.price).should('include.text', '$')
    
    cartPage.removeFirstProduct();
    cartPage.removeFirstProduct();
    cy.get(homePage.elements.shoppingCartBadge)
      .should("not.be.visible")
  });

  it("Order product", () => {
    cy.addProduct(data.products[3]);
    cy.get(homePage.elements.removeFleeceJacketButton).should("be.visible");
    cy.get(homePage.elements.shoppingCartBadge)
      .should("be.visible")
      .should("contain.text", "1");

    homePage.openCart();
    cartPage.proceedToCheckout();
    checkoutPage.provideFirstName(data.standard_user.firstName)
    checkoutPage.provideLastName(data.standard_user.lastName)
    checkoutPage.providePostalCode(data.standard_user.postalCode)
    checkoutPage.continueToOverview()
    checkoutPage.finishCheckout()
    checkoutPage.backToProducts()

    cy.get(homePage.elements.shoppingCartBadge)
      .should("not.be.visible")
    cy.get(homePage.elements.removeFleeceJacketButton).should("not.be.visible");  

  });
});
