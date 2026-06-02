describe('Checkout con user-problem', () => {

    beforeEach(() => {
        cy.viewport(1280, 720)
        cy.visit('https://www.saucedemo.com/')
        cy.get('[data-test=username]').as('username').type('problem_user')
        cy.get('[data-test=password]').as('password').type('secret_sauce')
        cy.get('[data-test=login-button]').click()
    })

    it('Checkout con user-problem', () => {
        cy.get('[data-test=add-to-cart-sauce-labs-backpack]').click()
        cy.get('[data-test=shopping-cart-link]').click()
        cy.get('[data-test=checkout]').click()
        cy.get('[data-test=firstName]').type('Ana')
        cy.get('[data-test=lastName]').type('Garcia').should('have.value', 'Garcia')
        cy.get('[data-test=continue]').click()
        cy.get('[data-test=error]').scrollIntoView().should('be.visible')
    })

})