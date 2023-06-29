describe('Login Scenario', () => {
  it('Success Login', () => {
    cy.visit('https://www.saucedemo.com/')
    cy.get('#user-name').type('standard_user')
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.get('[data-test="login-button"]').click()
    cy.get('.app_logo').should('be.visible')
    cy.get('.title').should('be.visible')
  })
 it('Failed Login', () => {
    cy.visit('https://www.saucedemo.com/')
    cy.get('#user-name').type('salahuser')
    cy.get('[data-test="password"]').type('salahpassword')
    cy.get('[data-test="login-button"]').click()
    cy.get('[data-test="error"]').should('be.visible')
    cy.get('[data-test="error"]').should('contain.text','Epic sadface: Username and password do not match any user in this service')
  }) 
  it('Failed Login - Locked user ', () => {
    cy.visit('https://www.saucedemo.com/')
    cy.get('#user-name').type('locked_out_user')
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.get('[data-test="login-button"]').click()
    cy.get('[data-test="error"]').should('be.visible')
    cy.get('[data-test="error"]').should('contain.text','Epic sadface: Sorry, this user has been Locked out')
  })
})  

