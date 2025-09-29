import { PlacerOrderElements } from "./place-order.elements";

export class PlacerOrderMethods{
    static insertName (name){
        PlacerOrderElements.texboxes.name.invoke('val', name);
    }
     static insertCountry (country){
        PlacerOrderElements.texboxes.country.invoke('val', country);
    }
    static insertCity (city){
        PlacerOrderElements.texboxes.city.invoke('val', city);
    }
    static insertCreditCard(creditCardNumber){
        PlacerOrderElements.texboxes.creditCard.invoke('val',creditCardNumber);
    }
    static insertMonth(month){
        PlacerOrderElements.texboxes.month.invoke('val',month);
    }
    static insertYear(year){
        PlacerOrderElements.texboxes.year.invoke('val',year);
    }

    static clickOnCloseButton(){
        PlacerOrderElements.buttons.close.click()
    }

    static clickOnPuchaseButton(){
        PlacerOrderElements.buttons.purchase.click()
    }

    static insertOrderInformation(data){
        this.insertName(data.name)
        this.insertCountry(data.country)
        this.insertCity(data.city)
        this.insertCreditCard(data.creditCardNumber)
        this.insertMonth(data.month)
        this.insertYear(data.year)
    }

}