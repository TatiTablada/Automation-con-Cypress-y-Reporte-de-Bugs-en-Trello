describe('Agregar un producto al carrito', () => {

  beforeEach(() => {
    cy.visit('https://www.saucedemo.com/')
  })

  it('Login con credenciales válidas', () => {
    cy.get('[data-test=username]').type('standard_user')
    cy.get('[data-test=password]').type('secret_sauce')
    cy.get('[data-test=login-button]').click()
    cy.get('[data-test=add-to-cart-sauce-labs-backpack]').click()
    cy.get('[data-test=shopping-cart-link]').should('contain', '')
  })

})