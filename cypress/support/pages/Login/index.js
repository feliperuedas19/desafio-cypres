const el = require('./elements').ELEMENTS
class Login {
    preencherLoginValido() { //preenche login com senha e usuário válido
        cy.visit('/')
        cy.title().should('eq', 'Swag Labs')
        cy.get(el.user).type('standard_user')
        cy.get(el.password).type('secret_sauce')
        cy.get(el.buttonLogin).click()
    }

    preencherLoginSenhaInvalida() { //preenche login com senha inválida
        cy.title().should('eq', 'Swag Labs')
        cy.get(el.user).type('standard_user')
        cy.get(el.password).type('123456')
        cy.get(el.buttonLogin).click()

        cy.get(el.errorUserInvalid).should('have.text', 'Epic sadface: Username and password do not match any user in this service')
    }

    preencherLoginUsuarioBloqueado() { //preenche o login com usuário bloqueado
        cy.title().should('eq', 'Swag Labs')
        cy.get(el.user).type('locked_out_user')
        cy.get(el.password).type('secret_sauce')
        cy.get(el.buttonLogin).click()

        cy.get(el.errorUserInvalid).should('have.text', 'Epic sadface: Sorry, this user has been locked out.')
    }
}

export default new Login()