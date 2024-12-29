
const el = require('./elements').ELEMENTS
class Produtos { 
    verificarListaProdutos() { 
        cy.get(el.tittleList).should('have.text', 'Products')
        cy.get(el.productsList)
            .children()
            .should('have.length', 6)
            .children()
            .first()
            .should('have.length', 1)
    }
}

export default new Produtos