import { CommonPageData } from "./common-page.data";
import { CommonPageElements } from "./commone-page.elements";

export class CommonPageMehotds{
    static navegateToDemoBlaze(){
        cy.clearAllCookies();
        cy.clearLocalStorage();
        cy.visit(CommonPageData.url);
        
    }

    static clickOnHomeOption(){
        CommonPageElements.topMenu.home.click();
    }

      static clickOnContactOption(){
        CommonPageElements.topMenu.contact.click();
    }

     static clickOnAboutUsOption(){
        CommonPageElements.topMenu.aboutUs.click();
    }


    static clickOnCartOption(){
        CommonPageElements.topMenu.cart.click();
        Cypress.on('uncaught:exception', (err, runnable) => {
  return false;
})
    }
    

    static clickOnLogInOption(){
        CommonPageElements.topMenu.logIn.click();
    }
     static clickOnSingUpOption(){
        CommonPageElements.topMenu.singUp.click();
    }

    //Verificación de alertas en todas las páginas
    static verifyAlert(expectedMessage){
    cy.on('window:alert', (str) => {
  expect(str).to.equal(expectedMessage);
});

}

static generateRandomString(length = 10) {
    var result           = '';
    var characters       = 'abcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

static verifySingedUser(username){
    CommonPageElements.singedUser.should('have.text', `Welcome ${username}`)
}

}