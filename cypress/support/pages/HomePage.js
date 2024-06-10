class HomePage {
  elements = {
    cartButton: () => cy.get('[data-test="shopping-cart-link"]'),
    addToCartButton: () => cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]'),
    hamburgerMenu: () => cy.get('[data-test="open-menu"]'),
    logoutButton: () => cy.get('[data-test="logout-sidebar-link"]'),
    removeFleeceJacketButton: () => cy.get('[data-test="remove-sauce-labs-fleece-jacket"]'),
    shoppingCartBadge: () => cy.get('[data-test="shopping-cart-badge"]'),
    productName: () => cy.get('[data-test="inventory-item-name"]'),
    removeButton: () => cy.contains('Remove'),

  };

  removeFirstProduct() {
    this.elements.removeButton().first().click();
  }

  openHamburgerMenu() {
    this.elements.hamburgerMenu().click({force: true});
  }

  logout() {
    this.elements.logoutButton().click({force: true});
  }

  openCart() {
    this.elements.cartButton().click();
  }

  openProductPage() {
    this.elements.productName().first().click();
  }

}

export default HomePage;
