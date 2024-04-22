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
            cy.log(body)
            cy.log(body[0].userId)
            cy.log(body[1].id)
            cy.log(body[2].title)
            cy.log(body[3].body)

            expect(body[0]).has.property("userId", 1)
            expect(body[0]).has.property("id", 1)
            expect(body[0]).has.property("title", "sunt aut facere repellat provident occaecati excepturi optio reprehenderit")
            expect(body[0]).has.property("body", "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto")

            expect(body[1]).has.property("userId", 1)
            expect(body[1]).has.property("id", 2)
            expect(body[1]).has.property("title", "qui est esse")
            expect(body[1]).has.property("body", "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla")

            body.forEach(function (item) {
                expect(item).to.have.all.keys("userId", "id", "title", "body")
                cy.log(item["userId"])
                cy.log(item["id"])
                cy.log(item["title"])
                cy.log(item["body"])
            })
        })
    })
})

