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

  it("Order 4 products", () => {
    cy.login(users.standard_user.username, users.standard_user.password);
    cy.addProducts(data.fourProductsOrder);

    homePage.elements.removeButton().should("be.visible");
    homePage.elements
      .shoppingCartBadge()
      .should("be.visible")
      .and("contain.text", "4");

    homePage.openCart();
    data.fourProductsOrder.forEach(function (product) {
      cartPage.elements
        .productName()
        .contains(product)
        .should("be.visible")
        .and("have.text", product)
        .and("have.class", "inventory_item_name");
    });
    cartPage.proceedToCheckout();
    checkoutPage.provideFirstName(users.standard_user.firstName);
    checkoutPage.provideLastName(users.standard_user.lastName);
    checkoutPage.providePostalCode(users.standard_user.postalCode);
    checkoutPage.continueToOverview();
    checkoutPage.finishCheckout();

    checkoutPage.elements
      .completeHeader()
      .should("be.visible")
      .and("have.text", data.completeHeader);
    checkoutPage.elements
      .completeText()
      .should("be.visible")
      .and("have.text", data.completeText);

    checkoutPage.backToProducts();

    homePage.elements.shoppingCartBadge().should("not.exist");
    homePage.elements.removeFleeceJacketButton().should("not.exist");
  });

  it("Try to order empty cart", () => {
    cy.login(users.standard_user.username, users.standard_user.password);
    homePage.openCart();
    cartPage.proceedToCheckout();
    checkoutPage.provideFirstName(users.standard_user.firstName);
    checkoutPage.provideLastName(users.standard_user.lastName);
    checkoutPage.providePostalCode(users.standard_user.postalCode);
    checkoutPage.continueToOverview();
    checkoutPage.finishCheckout();

    checkoutPage.elements.completeHeader().should("not.be.visible");
    checkoutPage.elements.completeText().should("not.be.visible");
  });

  it("Order product with Error_user", () => {
    cy.login(users.error_user.username, users.error_user.password);
    cy.addProducts(data.products);
    homePage.elements.removeFleeceJacketButton().should("be.visible");
    homePage.elements
      .shoppingCartBadge()
      .should("be.visible")
      .and("contain.text", "1");

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

  it("Continue checkout without providing checkout all information", () => {
    cy.login(users.standard_user.username, users.standard_user.password);
    cy.addProduct(data.products[3]);
    homePage.openCart();
    cartPage.proceedToCheckout();
    checkoutPage.continueToOverview();

    checkoutPage.elements.xIcon().should("be.visible").should("have.length", 3);
    checkoutPage.elements
      .checkoutErrorMessage()
      .should("be.visible")
      .and("have.text", data.missingFirstNameError);

    checkoutPage.provideFirstName(users.error_user.firstName);
    checkoutPage.continueToOverview();
    checkoutPage.elements
      .checkoutErrorMessage()
      .should("be.visible")
      .and("have.text", data.missingLastNameError);

    checkoutPage.provideLastName(users.error_user.lastName);
    checkoutPage.continueToOverview();
    checkoutPage.elements
      .checkoutErrorMessage()
      .should("be.visible")
      .and("have.text", data.missingPostalCodeError);
    checkoutPage.elements.checkoutErrorMessage().then(($el) => {
      expect($el.text()).to.be.eq(data.missingPostalCodeError);
    });
  });
});
