/// <reference types="Cypress" />

describe('apiTest', function () {
    var result
    var titleOfPosts = new ArrayBuffer()
    it('Add to card', () => {
        result = cy.request("https://automationexercise.com/add_to_cart/1");
        result.its("status").should("equal", 200)
    })
    it('apiTest Validate example', () => {
        cy.request({
            method: "GET",
            url: "https://automationexercise.com/add_to_cart/1",
            headers: {
                accept: "application/json"
            }
        }).then(response => {   
            let body = JSON.parse(JSON.stringify(response.body))
            expect(response.status).to.eq(200)
            expect(body).to.eq("Added To Cart")
            cy.log(response.status)
            cy.log(body)
            })
        })
    })

