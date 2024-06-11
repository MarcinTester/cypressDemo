class ProductPage {
  elements = {
    addToCartButton: () => cy.get('[data-test="add-to-cart"]'),
    backButton: () => cy.get('[data-test="back-to-products"]'),
    productName: () => cy.get('[data-test="inventory-item-name"]'),
  };

  backToProducts() {
    this.elements.backButton().click();
  }

  addToCart() {
    this.elements.addToCartButton().click();
  }

}

export default ProductPage;
