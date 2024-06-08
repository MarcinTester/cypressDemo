/// <reference types="Cypress" />
import HomePage from "../../../support/pages/HomePage";
import LoginPage from "../../../support/pages/LoginPage";
import ProductPage from "../../../support/pages/ProductPage";
import CartPage from "../../../support/pages/CartPage";
import CheckoutPage from "../../../support/pages/CheckoutPage";
import CheckoutOverviewPage from "../../../support/pages/CheckoutOverviewPage";

describe("test", function () {
  let data;
  const homePage = new HomePage();
  const loginPage = new LoginPage();
  const productPage = new ProductPage();
  const cartPage = new CartPage();
  const checkoutPage = new CheckoutPage();
  const checkoutOverviewPage = new CheckoutOverviewPage();

  before(function () {
    cy.fixture("testData").then(function (testData) {
      data = testData;
    });
  });

  beforeEach(function () {
    cy.visit(data.baseURL);
    loginPage.provideUsername(data.standard_user.username);
    loginPage.providePassword(data.standard_user.password);
    loginPage.clickLogin();
  });

  it("Add to card", () => {
    cy.addProduct(data.products[3]);
    cy.get(homePage.elements.removeFleeceJacketButton).should("be.visible");
    cy.get(homePage.elements.shoppingCartBadge)
      .should("be.visible")
      .should("contain.text", "1");
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
