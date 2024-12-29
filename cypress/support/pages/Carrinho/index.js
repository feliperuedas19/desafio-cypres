const el = require('./elements').ELEMENTS
class Carrinho {
    adicionarItem() { //adiciona apenas um item ao carrinho
        cy.get(el.imgFirstItem).click()
        cy.get(el.buttonBackToProducts).should('have.text', 'Back to products')
        cy.get(el.buttonAddToCart).click()
        cy.get(el.cart)
            .should('exist')
            .children(el.numberItensCart) 
            .should('exist')
            .and('contain', '1')
    }

    adicionarItens() { //adiciona três itens ao carrinho
        cy.get(el.sauceLabsBackpack).click()
        cy.get(el.sauceLabsBoltTShirt).click()
        cy.get(el.sauceLabsOnesie).click()
        cy.get(el.cart)
            .should('exist')
            .children(el.numberItensCart) 
            .should('exist')
            .and('contain', '3')
    }   

    removerItem() { //remove o item adicionado ao carrinho
        cy.get(el.ButtonRemoveIten).click()
        cy.get(el.cart)
            .children(el.numberItensCart)
            .should('not.exist')
    }

    removerItens() { //remove mais de um item adicionado ao carrinho
        cy.get(el.sauceLabsBoltTShirtRemove).click()  
        cy.get(el.cart)
            .should('exist')
            .children(el.numberItensCart) 
            .should('exist')
            .and('contain', '2')
    }


}

export default new Carrinho()