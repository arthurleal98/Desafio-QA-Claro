class CadastroPage{
    constructor(){
        this.idEmail = '#reg_email';
        this.idPassword = '#reg_password';
    }

    inserirEmail(email){
        cy.get(this.idEmail).should('be.visible')
        cy.get(this.idEmail).type(email)
    }

    inserirPassword(password){
        cy.get(this.idPassword).should('be.visible')
        cy.get(this.idPassword).type(password)
    }

    clicarBotaoRegister(){
        cy.get('.register').should('be.visible')
        cy.get('.register').click()
    }

    realizarCadastro(email, password){
        this.inserirEmail(email)
        this.inserirPassword(password)
        this.clicarBotaoRegister()
    }

    


}