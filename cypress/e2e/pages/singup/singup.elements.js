export class SingupElements{
    static get textboxes(){
        return{
            get username(){
               return cy.get('input#sign-username')
            },
            get password(){
                return cy.get('input#sign-password')
            },
        };
    }

    static get buttons() {
        return{
            get close(){
                return cy.get('div[id="logInModal"] button').eq(1);
            },
            get singup(){
                return cy.contains('button', 'Sign up');
            },
        };
    }


    
}