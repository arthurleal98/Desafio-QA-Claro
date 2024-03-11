
class LoginPage {
    constructor() {
        this.url = 'https://practice.automationtesting.in/'
        this.idLogin = '#username';
        this.idSenha = '#password';
        this.nameBotaoLogin = 'login';

    }

    inserirLogin(login) {
        cy.get(this.idLogin).should('be.visible')
        cy.get(this.idLogin).type(login)
    }

    inserirSenha(senha) {
        cy.get(this.idSenha).should('be.visible')
        cy.get(this.idSenha).type(senha)
    }

    clicarBotaoLogin() {
        cy.get('input[name="login"]').should('be.visible')
        cy.get('input[name="login"]').click()
    }

    realizarLogin(login, senha) {
        cy.visit(this.url)
        cy.get('#menu-icon').click()
        cy.get('#menu-item-50').click()
        this.inserirLogin(login)
        this.inserirSenha(senha)
        this.clicarBotaoLogin()
    }

}

export default LoginPage;