/// <reference types="Cypress" />
describe('API test', () => {
    it('Bag test', function () {
        cy.visit("https://automationteststore.com/index.php?rt=product/product&path=36_39&product_id=108")
        cy.intercept("GET", "https://automationteststore.com/index.php?rt=r/product/product/addToCart").as("addToCard")
        cy.intercept("POST", "https://automationteststore.com/index.php?rt=r/checkout/cart/recalc_totals").as("recalc_totals")
        cy.get(".cart").click()
        cy.wait("@addToCard").should(({ request, response }) => {
            cy.log("request: " + JSON.stringify(request))
            cy.log("response: " + JSON.stringify(response))
            expect(response.statusCode).to.eq(200)
            cy.log("statusCode: " + response.statusCode)
        })
        cy.wait("@recalc_totals").should(({ request, response }) => {
            cy.log("request: " + JSON.stringify(request))
            cy.log("response: " + JSON.stringify(response))
            expect(response.statusCode).to.eq(200)
            cy.log("statusCode: " + response.statusCode)
        })

    })
})