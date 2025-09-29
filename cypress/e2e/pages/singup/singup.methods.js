import { CommonPageMehotds } from "../common-page/common-page.methods";
import { SingupElements } from "./singup.elements";

export class SingupMethods{
    static  insertUsername(username){
        SingupElements.textboxes.username.invoke('val', username);
    }

    static insertPassword(password){
        SingupElements.textboxes.password.invoke('val', password);
    }

    static clickOnSingupButton(){
        SingupElements.buttons.singup.click();
    }

    static singup(username, password){
        this.insertUsername(username);
        this.insertPassword(password);
        this.clickOnSingupButton();
    }

    static verfifySignUpSuccessfulMessageIsDisplay(){
        CommonPageMehotds.verifyAlert('Sign up successful.');

    }

    static verifyThatThisUserAlreadyExistsMessageIsDisplay(){
        CommonPageMehotds.verifyAlert('This user already exist.');
    }
    
}