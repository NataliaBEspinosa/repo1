import { CommonPageData } from "../pages/common-page/common-page.data";
import { CommonPageMehotds } from "../pages/common-page/common-page.methods";
import { LoginData } from "../pages/login/login.data";
import { LoginMethods } from "../pages/login/login.methods";
import { Logger } from "../util/logger";

describe(CommonPageData.testSuites.autenticacion, ()=>{
    it('Inicio de sesión valido', ()=>{
        Logger.stepNumber(1)
        Logger.step('Navegar a la página de inicio.')
        CommonPageMehotds.navegateToDemoBlaze();

        Logger.stepNumber(2)
        Logger.step('Hacer clic en "Log in" en la barra de navegación.')
        CommonPageMehotds.clickOnLogInOption();

        Logger.stepNumber(3)
        Logger.step('Ingresar un nombre de usuario y contraseña válidos.')
        LoginMethods.insertUsername(LoginData.validCredentials.username)
        LoginMethods.insertPassword(LoginData.validCredentials.password)


        Logger.stepNumber(4)
        Logger.step('Hacer clic en "Log in" para iniciar sesión.')
        LoginMethods.clickOnLoginButton();
        //Paso 5
        Logger.subVerification('Verificar que se redirige al usuario a la página de inicio.')
        CommonPageMehotds.verifySingedUser(LoginData.validCredentials.username);


    })
})
