/// <reference types="Cypress" />

describe('template spec', () => {
    it('26. Completing the Practise test with all necessary validations', () => {
      cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')

      cy.get('.search-keyword').first().type('ca')
      cy.wait(2000)
      //16. BAsic Assertion in writting the test case
      //to verify that searched products count is 4
      cy.get('.product:visible').should('have.length', 4)
      //without visble method
      //product alias
      cy.get('.products').as('productName')
      cy.get('@productName').find('.product').should('have.length', 4)
      cy.get('.product:visible').eq(2).contains('ADD TO CART').click().contains('ADDED')
      cy.get('@productName').find('.product').should('have.length', 4)
      cy.get('@productName').find('.product').each(($el, index, $list) =>{

        const productName1= $el.find('h4.product-name').text()

            if(productName1.includes('Cashews')){

            cy.wrap($el).find('button').click()
          //$el.contains('ADD TO CART').click()

            }   
      })
      cy.get('a.cart-icon').click()
      cy.contains('PROCEED TO CHECKOUT').click()
      cy.contains('Place Order').click()
      cy.get('select').select('India')
      cy.get('.chkAgree').check()
      cy.get('button').click()
      
  })

     
})
  