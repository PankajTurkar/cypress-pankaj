/// <reference types="Cypress" />

describe('Handling Child window suite', function() {

    it('Handling child tab with combination of Cypress & Jquery command', function(){
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        /*
         in HTMP to open new tab there is an attribute called target="_blank", So using JQuery we can remove this
        attribute runtime using the function "removeAttr" and invoke this DOM again. that means we are rebulding the page again
        
        below invoke function will invoke dom again with updated attributes
         */
        cy.get('#opentab').invoke('removeAttr','target').click()

        //if user want to perform any new operation on new domain orgine then we have to to tell 
        //Cypress first to do this. CYpress do not support cross domain origin
        cy.origin('https://www.qaclickacademy.com', ()=>
        {
//Under this part we have mention all the operation which you want to perform on new domain
            cy.get('.nav-item a[href*="about"]').click()

            //Validate text on the page
            cy.get('#about-page h2').should('contain','Welcome to QAClick Academy')

        })
        


    })
})