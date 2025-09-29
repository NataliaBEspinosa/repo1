import { CommonPageData } from "../pages/common-page/common-page.data";
import { CommonPageMehotds } from "../pages/common-page/common-page.methods";
import { HomeMethods } from "../pages/home/home.methods";
import { LoginData } from "../pages/login/login.data";
import { LoginMethods } from "../pages/login/login.methods";
import { Logger } from "../util/logger";

const user = LoginData.validCredentials;

describe(CommonPageData.testSuites.catalogoYCompras, ()=>{
    it('Navegación por categorías', ()=>{
        Logger.stepNumber(1)
        Logger.step('Iniciar sesión como usuario registrado.')
        Logger.subStep('Navegar a la aplicación Demoblaze')
        CommonPageMehotds.navegateToDemoBlaze();
        Logger.subStep('Click on log in link')
        CommonPageMehotds.clickOnLogInOption();
        Logger.subStep('loguearse')
        LoginMethods.login(user.username, user.password)

        Logger.stepNumber(2)
        Logger.step('Navegar a la página de inicio.')
        CommonPageMehotds.clickOnHomeOption();

        Logger.stepNumber(3)
        Logger.step('Seleccionar una categoría de productos en el menú de navegación.')
        HomeMethods.clickOnMotitorsOption();
        //Paso 4
        Logger.subVerification('Verificar que se muestra la lista de productos correspondiente a la categoría seleccionada.')
        HomeMethods.verifyProductDisplay('Apple monitor 24')
        HomeMethods.verifyProductDisplay('ASUS Full HD')
    })

})