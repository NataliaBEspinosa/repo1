import { Logger } from "../../util/logger";
import { LoginElements } from "./login.elements";

export class LoginMethods{
    static insertUsername(username){
        LoginElements.textboxes.username.invoke('val', username)
    }

    static insertPassword(password){
        LoginElements.textboxes.password.invoke('val', password)
    }

    static clickOnLoginButton(){
        LoginElements.buttons.login.click()
    }


    static login(username, password){
        Logger.subStep('Insertar Username')
        this.insertUsername(username)
        Logger.subStep('Insertar Password')
        this.insertPassword(password)
        Logger.subStep('Click On Loggin Button')
        this.clickOnLoginButton()
    }

}