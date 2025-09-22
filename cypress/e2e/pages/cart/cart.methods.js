import { CartElements } from "./cart.elements";

export class CartMehotds{
    static clickOnDeleteLink(productName){
        CartElements.links.delete(productName).click();
    }

}