const el = require('./elements').ELEMENTS
class Carrinho {
    adicionarItem() { 
        cy.get(el.imgFirstItem).click()
        cy.get(el.buttonBackToProducts).should('have.text', 'Back to products')
        cy.get(el.buttonAddToCart).click()
        cy.get(el.cart)
            .should('exist')
            .children(el.numberItensCart) 
            .should('exist')
            .and('contain', '1')
    }

    adicionarItens() { 
        cy.get(el.sauceLabsBackpack).click()
        cy.get(el.sauceLabsBoltTShirt).click()
        cy.get(el.sauceLabsOnesie).click()
        cy.get(el.cart)
            .should('exist')
            .children(el.numberItensCart) 
            .should('exist')
            .and('contain', '3')
    }   

    removerItem() { 
        cy.get(el.ButtonRemoveIten).click()
        cy.get(el.cart)
            .children(el.numberItensCart)
            .should('not.exist')
    }

    removerItens() { 
        cy.get(el.sauceLabsBoltTShirtRemove).click()  
        cy.get(el.cart)
            .should('exist')
            .children(el.numberItensCart) 
            .should('exist')
            .and('contain', '2')
    }


}

export default new Carrinho()