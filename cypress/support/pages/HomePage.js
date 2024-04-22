class HomePage
{
    signIn()
    {
        cy.get('[class="fa fa-lock"]').click();
    }
}

export default HomePage