import { HomeElements } from "./home.elements";

export class HomeMethods{
    static clickOnPhonesOption(){
        HomeElements.categoriesMenu.phones.click();
    }
     static clickOnLaptopsOption(){
        HomeElements.categoriesMenu.laptops.click();
    }
     static clickOnMotitorsOption(){
        HomeElements.categoriesMenu.monitors.click();
    }

    static clickOnProductLink(productName){
        HomeElements.product(productName).click();
    }

}