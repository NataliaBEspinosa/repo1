import { Logger } from "../../util/logger";
import { CommonPageMehotds } from "../common-page/common-page.methods";
import { LoginMethods } from "../login/login.methods";
import { CartElements } from "./cart.elements";

export class CartMehotds{
    static clickOnDeleteLink(productName){
        CartElements.links.delete(productName).click();
    }

    static verifyProductAdded(productName){
        CartElements.links.delete(productName).should('be.visible')
    }

    static verifyCartPageIsShown(){
        return cy.url().should('include', 'cart.html')
    }

    static clickOnPlaceOrderButton(){
        CartElements.buttons.placeOrder.click();
    }

     static deleteProducts(){
    cy.intercept('POST', 'https://api.demoblaze.com/deleteitem').as('deleteItem')
    cy.get('a[onclick*="deleteItem"]').each(link=>{
      link.click()
      cy.wait('@deleteItem')
    })
  }


    static emptyCart(username, password){
        Logger.subStep('Navegate to Demoblaze application')
        CommonPageMehotds.navegateToDemoBlaze();
        Logger.subStep('Log out')
        CommonPageMehotds.logOut();
        Logger.subStep('Click on Home option')
        CommonPageMehotds.clickOnHomeOption();
        Logger.subStep('Click on log in option')
        CommonPageMehotds.clickOnLogInOption();
        Logger.subStep(`Login with this credentials ${username}/${password}`)
        LoginMethods.login(username, password);
        Logger.subStep('Click on cart option')
        CommonPageMehotds.clickOnCartOption();
        Logger.subStep('Delete products from cart')
        this.deleteProducts();
    }

}