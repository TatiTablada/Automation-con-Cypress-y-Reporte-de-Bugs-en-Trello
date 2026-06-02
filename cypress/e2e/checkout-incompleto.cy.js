describe('Checkout con datos incompletos', () => {

    beforeEach(() => {
        cy.viewport(1280, 720)
        cy.visit('https://www.saucedemo.com/')
        cy.get('[data-test=username]').as('username').type('standard_user')
        cy.get('[data-test=password]').as('password').type('secret_sauce')
        cy.get('[data-test=login-button]').click()
    })

    it('Checkout con datos incompletos', () => {
        cy.get('[data-test=add-to-cart-sauce-labs-bolt-t-shirt]').click()
        cy.get('[data-test=shopping-cart-badge]').should('contain', '1')
        cy.get('[data-test=shopping-cart-link]').click()
        cy.get('[data-test=checkout]').click()
        cy.get('[data-test=continue]').click()
        cy.get('[data-test=error]').scrollIntoView().should('be.visible')

    })

})