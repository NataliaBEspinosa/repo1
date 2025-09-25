import { CommonPageData } from "./common-page.data";
import { CommonPageElements } from "./commone-page.elements";

export class CommonPageMehotds{
    static navegateToDemoBlaze(){
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
    }
    

    static clickOnLogInOption(){
        CommonPageElements.topMenu.logIn.click();
    }
     static clickOnSingUpOption(){
        CommonPageElements.topMenu.singUp.click();
    }

}