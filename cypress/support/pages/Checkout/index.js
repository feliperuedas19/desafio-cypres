const el = require("./elements").ELEMENTS;
class Checkout {
  finalizarCompra() {
   
    cy.get(el.cart).click();
    cy.get(el.buttonCheckout).click();
    cy.get(el.firstName).type("João");
    cy.get(el.lastName).type("Silva");
    cy.get(el.postalCode).type("14500222");
    cy.get(el.buttonContinue).click();

   
    cy.get(el.subTotalLabel)
      .invoke("text")
      .then((subtotalText) => {
        const subtotal = parseFloat(subtotalText.replace("Item total: $", ""));

        cy.get(el.taxLabel)
          .invoke("text")
          .then((taxText) => {
            const tax = parseFloat(taxText.replace("Tax: $", ""));

            cy.get(el.totalLabel)
              .invoke("text")
              .then((totalText) => {
                const total = parseFloat(totalText.replace("Total: $", ""));

                
                expect(total).to.eq(subtotal + tax);
              });
          });
      });

 
    cy.get(el.buttonFinish).click()
    cy.get(el.buttonBackHome).should('have.text', 'Back Home')
    cy.get(el.buttonBackHome).click()
    cy.get(el.titleProducts).should('have.text', 'Products')
  }
}

export default new Checkout();
