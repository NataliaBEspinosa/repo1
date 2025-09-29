import { CartMehotds } from "../pages/cart/cart.methods";
import { CommonPageData } from "../pages/common-page/common-page.data";
import { CommonPageMehotds } from "../pages/common-page/common-page.methods";
import { HomeElements } from "../pages/home/home.elements";
import { HomeMethods } from "../pages/home/home.methods";
import { LoginData } from "../pages/login/login.data";
import { LoginMethods } from "../pages/login/login.methods";
import { PlacerOrderData } from "../pages/place-order/place-order.data";
import { PlacerOrderMethods } from "../pages/place-order/place-order.methods";
import { ProductDetailsMethods } from "../pages/product-details/product-details.methods";
import { ThankYouForYourPuchaseMethods } from "../pages/thank-you-for-your-puchase/thank-you-for-your-puchase.methods";
import { Logger } from "../util/logger";

const user = LoginData.validCredentials;
const product = 'ASUS Full HD'

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

    it('Agregar producto al carrito', ()=>{
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

        Logger.stepNumber(4)
        Logger.step('Hacer click en un producto específico.')
        HomeMethods.clickOnProductLink((product))
        
        Logger.stepNumber(5)
        Logger.subVerification('Verificar que se muestra la página de detalles del producto.')
        ProductDetailsMethods.verifyProductDetailsPageDisplay();

        Logger.stepNumber(6)
        Logger.step('Hacer clic en el botón "Add to cart".')
        ProductDetailsMethods.clickOnAddToCartButton();

        Logger.stepNumber(7)
        Logger.step('Verificar que se muestra un mensaje de confirmación y el producto se agrega al carrito')
        ProductDetailsMethods.verifyProductAddedMessage();
        CommonPageMehotds.clickOnCartOption();
        CartMehotds.verifyProductAdded(product);

    })

    it('Realizar una compra', ()=>{
        Logger.stepNumber(1)
        Logger.step('Iniciar sesión como usuario registrado.')
        Logger.subStep('Navegar a la aplicación Demoblaze')
        CommonPageMehotds.navegateToDemoBlaze();
        Logger.subStep('Click on log in link')
        CommonPageMehotds.clickOnLogInOption();
        Logger.subStep('loguearse')
        LoginMethods.login(user.username, user.password)

        LoginMethods.clickOnLoginButton();

        Logger.stepNumber(2)
        Logger.step('Navegar a la página de inicio.')
        CommonPageMehotds.clickOnHomeOption();

        Logger.stepNumber(3)
        Logger.step('Seleccionar una categoría de productos en el menú de navegación.')
        HomeMethods.clickOnMotitorsOption();

        Logger.stepNumber(4)
        Logger.step('Hacer click en un producto específico.')
        HomeMethods.clickOnProductLink((product))
        
        Logger.stepNumber(5)
        Logger.subVerification('Verificar que se muestra la página de detalles del producto.')
        ProductDetailsMethods.verifyProductDetailsPageDisplay();

        Logger.stepNumber(6)
        Logger.step('Hacer clic en el botón "Add to cart".')
        ProductDetailsMethods.clickOnAddToCartButton();

        Logger.stepNumber(7)
        Logger.step('Verificar que se muestra un mensaje de confirmación y el producto se agrega al carrito')
        ProductDetailsMethods.verifyProductAddedMessage();
        CommonPageMehotds.clickOnCartOption();
        CartMehotds.verifyProductAdded(product);

        Logger.stepNumber(8)
        Logger.step('Hacer clic en la opción "carrito" en la barra de navegación.')
        CommonPageMehotds.clickOnCartOption();

        Logger.stepNumber(9)
        Logger.subVerification('Verificar que se muestra la página del carrito de compras.')
        CartMehotds.verifyCartPageIsShown();

        Logger.stepNumber(10)
        Logger.step('Hacer clic en el botón "Place Order".')
        CartMehotds.clickOnPlaceOrderButton();

        Logger.stepNumber(11)
        Logger.step('Completar los campos obligatorios en la página de información de envío.')
        PlacerOrderMethods.insertOrderInformation(PlacerOrderData.testDate);

        Logger.stepNumber(12)
        Logger.step('Hacer clic en el botón "Purchase".')
        PlacerOrderMethods.clickOnPuchaseButton();

        Logger.stepNumber(13)
        Logger.step('Verificar que se muestra un mensaje de confirmación y se redirige al usuario a la página de inicio.')
        ThankYouForYourPuchaseMethods.verifyGreenCheckMarkIsDisplay();
        cy.wait(3000)
        ThankYouForYourPuchaseMethods.clickonOkButton()
        HomeMethods.verifyHomePageIsShown();


    })


})


