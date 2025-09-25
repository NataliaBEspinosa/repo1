import { ThankYouForYourPuchaseElements } from "./thank-you-for-your-puchase.elements";

export class ThankYouForYourPuchaseMethods{
    static clickonOkButton(){
        ThankYouForYourPuchaseElements.buttons.ok.click();
    }

    static verifyGreenCheckMarkIsDisplay(){
        ThankYouForYourPuchaseElements.icons.greenCheckMark.should("exist");
    }



}