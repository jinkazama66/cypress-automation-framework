describe('Invalid login', () => {
  it('shows an error for a wrong password', () => {
    cy.visit('https://www.saucedemo.com')
    cy.get('#user-name').type('standard_user')
    cy.get('#password').type('wrong_password')
    cy.get('#login-button').click()
    cy.get('[data-test="error"]').should('contain', 'Username and password do not match')
  })
})
