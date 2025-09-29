import { CommonPageData } from "../pages/common-page/common-page.data";
import { CommonPageMehotds } from "../pages/common-page/common-page.methods";
import { LoginData } from "../pages/login/login.data";
import { SingupMethods } from "../pages/singup/singup.methods";
import { Logger } from "../util/logger";

const user = CommonPageMehotds.generateRandomString();
const password = CommonPageMehotds.generateRandomString(7);
const existingUser = LoginData.validCredentials.username

describe(CommonPageData.testSuites.registro, ()=>{
    it('Registro de usuario válido', ()=>{
        Logger.stepNumber(1)
        Logger.step('Navegar a la página de inicio.')
        CommonPageMehotds.navegateToDemoBlaze();

        Logger.stepNumber(2)
        Logger.step('Hacer clic en "Sign up" en la barra de navegación.')
        CommonPageMehotds.clickOnSingUpOption();

        Logger.stepNumber(3)
        Logger.step('Completar todos los campos obligatorios con información válida.')
        SingupMethods.insertUsername(user)
        SingupMethods.insertPassword(password)

        Logger.stepNumber(4)
        Logger.step('Hacer clic en "Sign up" para registrar el usuario.')
        SingupMethods.clickOnSingupButton();
        //Paso 5
        Logger.subVerification('Verificar que muestre el mensaje "Sign up successful"')
        SingupMethods.verfifySignUpSuccessfulMessageIsDisplay();

    })

    it('Registro de usuario inválido', ()=>{
        Logger.stepNumber(1)
        Logger.step('Navegar a la página de inicio.')
        CommonPageMehotds.navegateToDemoBlaze();

        Logger.stepNumber(2)
        Logger.step('Hacer clic en "Sign up" en la barra de navegación.')
        CommonPageMehotds.clickOnSingUpOption();

        Logger.stepNumber(3)
        Logger.step('Completar todos los campos obligatorios con información inválida.')
        SingupMethods.insertUsername(existingUser)
        SingupMethods.insertPassword(password)

        Logger.stepNumber(4)
        Logger.step('Hacer clic en "Sign up" para registrar el usuario.')
        SingupMethods.clickOnSingupButton();
        //Paso 5
        Logger.subVerification('Verificar que muestre el mensaje "This user already exist."')
        SingupMethods.verifyThatThisUserAlreadyExistsMessageIsDisplay();
    })
});
