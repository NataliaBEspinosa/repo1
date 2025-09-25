import { HomeElements } from "./pages/home/home.elements";
import { HomeMethods } from "./pages/home/home.methods";
import { LoginMethods } from "./pages/login/login.methods";
import { Logger } from "./util/logger";

describe('template spec', () => {
  it('passes', () => {
    const usuario = 'random01'
    const contrasena = 'random01'

    Logger.stepNumber(1)
    Logger.step('Navegar a DemoBlaze Page')
    cy.visit('https://demoblaze.com/index.html')

    Logger.stepNumber(2)
    Logger.step('Hacer click en el login')
    cy.get('a[data-target="#logInModal"]').click()

    Logger.stepNumber(3)
    Logger.step(`loguearse con las credenciales: "${usuario}/${contrasena}"`)
    LoginMethods.login(usuario, contrasena)
    Logger.subVerification(`El HomePage debería mostrar "Walcome ${usuario}" text`)
    cy.get('a#nameofuser').should('contain.text', usuario)




  })
})