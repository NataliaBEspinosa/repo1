import { CommonPageMehotds } from "../common-page/common-page.methods";
import { ProductDetailsElements } from "./product-details.elements"

export class ProductDetailsMethods{
    static clickOnAddToCartButton(){
        ProductDetailsElements.buttons.addToCart.click();
    }

    static verifyProductDetailsPageDisplay(){
        ProductDetailsElements.buttons.addToCart.should('be.visible')
    }

    static verifyProductAddedMessage(){
        CommonPageMehotds.verifyAlert('Product added')
    }
}