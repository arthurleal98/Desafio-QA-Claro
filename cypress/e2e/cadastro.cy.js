import CadastroPage from '../support/pages/cadastro.page';

describe('Testes na Funcionalidade Cadastro', ()=>{
    beforeEach(()=>{
        cy.visit('https://practice.automationtesting.in/')
        cy.get('#menu-icon').click()
        cy.get('#menu-item-50').click()

    })

    it('Realizar cadastro com email e senha com valores vazios', ()=>{
        const cadastroPage = new CadastroPage();

        cadastroPage.clicarBotaoRegister( )
        //esperar que a mensagem de erro seja exibida
        cy.get('.woocommerce-error').should('be.visible')
        cy.get('.woocommerce-error').should('have.text', '\n\t\t\tError: Username is required.\n\t')
    })

    it('Realizar cadastro com email vazio e senha preenchida', ()=>{
        const cadastroPage = new CadastroPage();

        cadastroPage.inserirPassword('Arthur_Leal980')
        cadastroPage.clicarBotaoRegister( )
        //esperar que a mensagem de erro seja exibida
        cy.get('.woocommerce-error').should('be.visible')
        cy.get('.woocommerce-error').should('have.text', '\n\t\t\tError: Username is required.\n\t')
    })

    it('Realizar cadastro com email preenchido e senha vazia', ()=>{
        const cadastroPage = new CadastroPage();

        cadastroPage.inserirEmail('arthur2')
        cadastroPage.clicarBotaoRegister( )
        //esperar que a mensagem de erro seja exibida
        cy.get('.woocommerce-error').should('be.visible')
        cy.get('.woocommerce-error').should('have.text', '\n\t\t\tError: Password is required.\n\t')
    })

    it('Realizar cadastro com email e senha válidos', ()=>{
        const cadastroPage = new CadastroPage();

        cadastroPage.realizarCadastro('arthur2', 'Arthur_Leal980')
        //esperar que a mensagem de erro seja exibida
        cy.get('.woocommerce-MyAccount-content').should('be.visible')
        //preciso pegar o primeiro elemento p do .woocommerce-MyAccount-content e comparar o texto
        cy.get('.woocommerce-MyAccount-content p').first().should('have.text', '\n\tHello arthur2 (not arthur2? Sign out)')

    })

    it('Realizar cadastro com email e senha inválidos', ()=>{
        //inserir o username 'Arthur'
        const cadastroPage = new CadastroPage();

        cadastroPage.realizarCadastro('arthur1', 'Arthur')

        //esperar que a mensagem de erro seja exibida
        cy.get('.woocommerce-error').should('be.visible')
        cy.get('.woocommerce-error').should('have.text', '\n\t\t\tError: Please provide a valid email address.\n\t')
    })

})

    
