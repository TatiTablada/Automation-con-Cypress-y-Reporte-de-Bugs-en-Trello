describe('Agregar un producto al carrito', () => {

  beforeEach(() => {
    cy.viewport(1280, 720)
    cy.visit('https://www.saucedemo.com/')
    cy.get('[data-test=username]').as('username').type('standard_user')
    cy.get('[data-test=password]').as('password').type('secret_sauce')
    cy.get('[data-test=login-button]').click()
  })

  it('Agregar un producto al carrito', () => {
    cy.get('[data-test=add-to-cart-sauce-labs-backpack]').click()
    cy.get('[data-test=shopping-cart-link]').should('contain', '1')
  })

})