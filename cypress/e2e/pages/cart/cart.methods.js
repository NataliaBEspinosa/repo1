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

}