/* eslint-disable */
describe('example to-do app', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it('should have logo', () => {
    cy.get('.header__logo a').should('have.text', 'Blessing')
  })
})
