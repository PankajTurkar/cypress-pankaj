/// <reference types="Cypress" />

describe('Checkbox Testing test suite', function() {

    it('validating textbox/radio button differnt approches', function(){

        //cy.visit('www.google.com')
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        
      //Default first check box will be checked
       // cy.get('input[type="checkbox"]').first().check().should('be.checked')

       //If you want to check all checkboxs then find command property as type=checkox will be checked all checkboxes
       // cy.get('input[type="checkbox"]').check()
      
      //checked wheather checked is checked
      //cy.get('#checkBoxOption1').check().should('be.checked')
      
      //validated the values of the selcted checke box
      //cy.get('#checkBoxOption2').check().and('have.value', 'option2')
      //cy.get('#checkBoxOption2').check().should('be.checked').and('have.value', 'option2')
      
      //In an unchecked method 
      // cy.get('#checkBoxOption1').uncheck()

      //select the single checkbox using the text of the checkbox
      //cy.get('#checkBoxOption3').check('option3')

      //select the single checkbox from the number of the checkboxes using the text of the checkbox
      //here element value type=checkbox is comman for all checkbox elements prsent on the page
      //cy.get('[type=checkbox]').check('option3')
      cy.get('[type=checkbox]').check(['option2', 'option3'])
     
        //validated the values of the selcted checke box
        cy.get('#checkBoxOption1').check().should('be.checked').and('have.value', 'option1')
     
        cy.get('#checkBoxOption1').uncheck().should('not.be.checked')
    })
})