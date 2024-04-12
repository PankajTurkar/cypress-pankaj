/// <reference types="Cypress" />

describe('template spec', () => {
    it('My first case', () => {
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
      //17. Handling invisible elelment using visible keyword and parent-child elelment chaining using find command
      //cy.get('.products').find('.product').eq(2).contains('ADD TO CART').click().contains('ADDED')
      //or using eq() used to add index of element
      cy.get('.product:visible').eq(2).contains('ADD TO CART').click().contains('ADDED')
      
      //19. Understanding get and find commands
      cy.get('@productName').find('.product').should('have.length', 4)

      //21. Grabbing the text for validations using cypress text command
      cy.get('@productName').find('.product').each(($el, index, $list) =>{

        const productName1= $el.find('h4.product-name').text()

            if(productName1.includes('Cashews')){

            cy.wrap($el).find('.button').click()
          //$el.contains('ADD TO CART').click()

            }
      })

      //22. Cypress Ascrynous in nature and it's promise handling

     cy.get('.brand.greenLogo').then(function(logoName){

        cy.log(logoName.text())
     })

     //24. Handing Async promises with Cypress
     // line no 14 alias


    })
  })