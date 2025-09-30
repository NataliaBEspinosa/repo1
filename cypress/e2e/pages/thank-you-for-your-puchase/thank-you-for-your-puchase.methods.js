import { ThankYouForYourPuchaseElements } from "./thank-you-for-your-puchase.elements";

export class ThankYouForYourPuchaseMethods{
    static clickonOkButton(){
        cy.wait(1000)
        ThankYouForYourPuchaseElements.buttons.ok.click();
    }

    static verifyGreenCheckMarkIsDisplay(){
        ThankYouForYourPuchaseElements.icons.greenCheckMark.should("exist");
    }



}