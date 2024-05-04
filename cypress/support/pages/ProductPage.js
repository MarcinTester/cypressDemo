class ProductPage {
  elements = {
    searchBar: () => cy.get("#search_product"),
    searchButton: () => cy.get('[id="submit_search"]'),
    productName: () => cy.get(".product-image-wrapper > div > div > p"),
    productCard: () => cy.get(".product-image-wrapper"),
    addToCart: () => cy.get(".productinfo > .btn"),
    addedCartTitle: () => cy.get(".modal-title"),
    continueShoppingButton: () =>
      cy.get('[class="btn btn-success close-modal btn-block"]'),
  };

  searchProducts(product) {
    this.elements.searchBar().clear().type(product);
    this.elements.searchButton().click();
    this.elements.productName().contains(product).should("be.visible");
    this.elements.productCard().should("be.visible");
  }

  searchAndAddProducts(product) {
    this.elements.searchBar().clear().type(product);
    this.elements.searchButton().click();
    this.elements.productName().contains(product).should("be.visible");
    this.elements.productCard().should("be.visible");
    this.elements.addToCart().click();
    this.elements.addedCartTitle().contains("Added!").should("be.visible");
    this.elements.continueShoppingButton().click();
  }
}

export default ProductPage;
