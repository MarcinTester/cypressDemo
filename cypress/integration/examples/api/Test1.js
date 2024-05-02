/// <reference types="Cypress" />

describe('apiTest', function () {
    var result
    var titleOfPosts = new ArrayBuffer()
    it('apiTest Example', () => {
        result = cy.request("https://automationexercise.com/api/brandsList");
        cy.log(result);
        result.its("status").should("equal", 200)
    })
    it('apiTest Validate example', () => {
        cy.request({
            method: "GET",
            url: "https://automationexercise.com/api/brandsList",
            headers: {
                accept: "application/json"
            }
        }).then(response => {
            let body = JSON.parse(JSON.stringify(response.body))
           // let body2 = response.body
           // cy.log(body2)
           // cy.log(body2.responseCode)
           
        })
    })
})

