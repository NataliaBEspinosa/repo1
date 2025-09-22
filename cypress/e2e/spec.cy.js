import { LoginMethods } from "./login.methods"

describe('template spec', () => {
  it('passes', () => {
    const usuario = 'username'
    const contrasena = 'password'
    cy.visit('https://demoblaze.com/')
    cy.get('a[data-target="#logInModal"]').click()
    LoginMethods.login(usuario, contrasena)
    cy.get('a#nameofuser').should('contain.text', usuario)
  })
})