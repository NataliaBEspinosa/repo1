import { HomeElements } from "./pages/home/home.elements";
import { HomeMethods } from "./pages/home/home.methods";

describe('template spec', () => {
  it('passes', () => {
    //const usuario = 'username'
    //const contrasena = 'password'
    cy.visit('https://demoblaze.com/index.html')
    HomeMethods.clickOnProductLink('Iphone 6 32gb')
    cy.wait(1000)

  })
})