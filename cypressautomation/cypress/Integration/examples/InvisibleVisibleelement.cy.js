/// <reference types="Cypress" />

describe('Testing Visible & Invisible element suite', function() {

    it('validating Visible & Invisible element with differnt approches', function(){

        
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        cy.get('#displayed-text').should('be.visible')
        cy.get('#hide-textbox').click()
        cy.get('#displayed-text').should('not.be.visible')
        cy.get('#show-textbox').click()
        cy.get('#displayed-text').should('be.visible')

    })
})