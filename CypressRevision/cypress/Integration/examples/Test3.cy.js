/// <reference types="Cypress" />

describe('Checkbox Testing test suite', function() {

    it('validating textbox/radio button differnt approches', function(){

        //cy.visit('www.google.com')
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        
      //Default first check box will be checked
       // cy.get('input[type="checkbox"]').first().check().should('be.checked')

       //If you want to check all checkboxs then find comman parent property as type=checkox will be checked all checkboxes
        cy.get('input[type="checkbox"]').check()
        

        //Dynamic Drop down
        cy.get('input#autocomplete').type('ind')
        cy.get('.ui-menu-item').each(($el, index, $list) =>{

            if($el.text()=='India'){
                cy.wrap($el).click()
            }
        })

        //Handeling alert
        cy.get('#alertbtn').click()
        cy.get('#confirmbtn').click()

        cy.on('window:alert', (str)=>{

            expect(str).to.equal('Hello , share this practice page and share your knowledge')
        })

        cy.on('window:confirm', (str)=>
        {
             expect(str).to.equal('Hello , Are you sure you want to confirm?')
             //retun false means will click on cancel button of confirmation pop up
             //return false
        })

        //31. handling invisible elelment

        cy.get('[name="show-hide"]').should('be.visible')
        cy.get('#hide-textbox').click()
        cy.get('[name="show-hide"]').should('not.be.visible')

        //34. Child window
        
    })
})