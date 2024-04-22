/// <reference types="Cypress" />

describe('apiTest', function () {
    var result
    var titleOfPosts = new ArrayBuffer()
    it('apiTest Example', () => {
        result = cy.request("https://jsonplaceholder.typicode.com/posts");
        result.its("status").should("equal", 200)
    })
    it('apiTest Validate example', () => {
        cy.request({
            method: "GET",
            url: "https://jsonplaceholder.typicode.com/posts",
            headers: {
                accept: "application/json"
            }
        }).then(response => {
            let body = JSON.parse(JSON.stringify(response.body))
            expect(response.statusCode).to.eq(200)
            cy.log(body)

            console.log(body[0])
            console.log(body[0].body)
            console.log(body[0].id)
            console.log(body[0].title)
            console.log(body[0].userId)
            })
        })
    })

