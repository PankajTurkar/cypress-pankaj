/// <reference types="Cypress" />
 
//24. Handing Async promises with Cypress

describe('Alias suite', function() {

    it('aliasing is to used for reallocate locator', function(){

        //cy.visit('www.google.com')
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
        cy.get('input.search-keyword').type('ca')
        cy.wait(2000)
        cy.get('.product:visible').should('have.length', 4)

        //***Parent Child Chaining***
        //Product alias -> When we see multiple locators used again and again then use alias
        // aliasing is to used for reallocate locator
        cy.get('.products').as('productLocator')
        cy.get('@productLocator').find('.product').should('have.length', 4)
        cy.get('@productLocator').find('.product').eq(2).contains('ADD TO CART').click().contains('ADDED')
       cy.get('@productLocator').find('.product').each(($el, index, $list) =>{
       const textVeg= $el.find('h4.product-name').text()
        if(textVeg.includes('Cashews'))
        {
          
          cy.wrap($el).find('button').click()

        }

        })
       
        cy.get('.brand.greenLogo').then(function(logoName){
            cy.log(logoName.text())
            //cy.console(logoName.text())
        })
        cy.get('.brand.greenLogo').should('have.text','GREENKART')

    })
})