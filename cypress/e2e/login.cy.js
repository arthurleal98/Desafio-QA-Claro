//Testes no login no site https://practice.automationtesting.in/
import LoginPage from '../page-objects/login-page.cy.js';
import LoginFlow from '../flows/login-flow.cy.js';

describe('Testes na Funcionalidade Login', ()=>{
    beforeEach(()=>{
        cy.visit('https://practice.automationtesting.in/')
        cy.get('#menu-icon').click()
        cy.get('#menu-item-50').click()

    })

    it('Realizar login com login e senha válidos', ()=>{
        const loginPage = new LoginPage();

        loginPage.realizarLogin('arthur2', 'Arthur_Leal980')
        //esperar que a mensagem de erro seja exibida
        cy.get('.woocommerce-MyAccount-content').should('be.visible')
        //preciso pegar o primeiro elemento p do .woocommerce-MyAccount-content e comparar o texto
        cy.get('.woocommerce-MyAccount-content p').first().should('have.text', '\n\tHello arthur2 (not arthur2? Sign out)')

    })

    it('Realizar login com login e senha inválidos', ()=>{
        //inserir o username 'Arthur'
        const loginPage = new LoginPage();

        loginPage.realizarLogin('arthur2', 'Arthur_Leal980')

        //esperar que a mensagem de erro seja exibida
        cy.get('.woocommerce-error').should('be.visible')
        cy.get('.woocommerce-error').should('have.text', '\n\t\t\tError: The password you entered for the username Arthur is incorrect. Lost your password?\n\t')
    })

    
})