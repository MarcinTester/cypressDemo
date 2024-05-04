class ProductPage {
  productsButton = '[href="/products"]';
  searchBar = "#search_product";
  searchButton = '[id="submit_search"]';
  productName = '.product-image-wrapper > div > div > p';
  productCard = '.product-image-wrapper';
  addToCart = '.productinfo > .btn';
  addedCartTitle = '.modal-title';
  continueShoppingButton = '[class="btn btn-success close-modal btn-block"]';


  searchProducts(product) {
    cy.get(this.searchBar).clear();
    cy.get(this.searchBar).type(product);
    cy.get(this.searchButton).click();
    cy.get(this.productName).contains(product).should("be.visible");
    cy.get(this.productCard).should("be.visible");
  }

  searchAndAddProducts(product) {
    cy.get(this.searchBar).clear();
    cy.get(this.searchBar).type(product);
    cy.get(this.searchButton).click();
    cy.get(this.productName).contains(product).should("be.visible");
    cy.get(this.productCard).should("be.visible");
    cy.get(this.addToCart).click();
    cy.get(this.addedCartTitle).contains('Added!').should("be.visible");
    cy.get(this.continueShoppingButton).click()
  }
}
export default ProductPage;
