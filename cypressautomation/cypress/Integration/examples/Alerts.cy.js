/// <reference types="Cypress" />

describe('Alerts Testing test suite', function() {

    it('validating Alerts with differnt approches', function(){
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        cy.get('input[value="Alert"]').click()
        cy.get('#confirmbtn').click()
        /* Cypress Alerts/Pop-ups 
        Cypress accept alert automatically.
        when alert is open then window:alert event is trigger
        To work with alerts use on() method which accept two arguments 1.event name and 2. o/p what you get from
        firing event
        => is notung but resloving the promise
        */
        cy.on('window:alert', (str) =>
        {
            //Verifying the text present on the alert pop up. Comparing two string using Mocha
            expect(str).to.equal('Hello , share this practice page and share your knowledge')
            
        })

        /*Cypress Confirmation pop ups
          Alert name window:confirm

        */
       cy.on('window:confirm', (str)=>
       {
            expect(str).to.equal('Hello , Are you sure you want to confirm?')
            //retun false means will click on cancel button of confirmation pop up
            return false
       })

    })
})