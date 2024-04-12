/// <reference types="Cypress" />

describe('Handling Child window suite', function() {

    it('Handling child tab with combination of Cypress & Jquery command', function(){
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        /*
            Cypress itself does not support mouse over events. It can be achive therough Jquery show() method orcd force in click. 
            In jquery we have function to trigger that mouse over using show() method - This method will open any 
            menu which is hiddingunder specific tab
            Invoking JQuery show() method 
        *///Verify to display popup on mouse over
      //cy.get('.mouse-hover-content').invoke('show')
       //cy.get('.mouse-hover-content a:nth-child(1)').click()
       //cy.url().should('contain', 'top')

       //or using force command
       cy.get('.mouse-hover-content a:nth-child(1)').click({force:true})
       cy.url().should('contain', 'top')



    })
})