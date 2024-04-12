/// <reference types="Cypress" />

describe('Calender Testing test suite', function() {

    it('validating Calender using differnt approches', function(){

        
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/offers')
        cy.get('.react-date-picker__inputGroup').click()
        cy.get('.react-calendar__navigation__label').click()
        cy.get('.react-calendar__navigation__label').click()
        cy.get('.react-calendar__navigation__label').click()
        cy.get('div.container-fluid div.date-field-container:nth-child(3) div.react-date-picker.react-date-picker--open.react-date-picker--enabled:nth-child(2) span:nth-child(2) div.react-date-picker__calendar.react-date-picker__calendar--open div.react-calendar div.react-calendar__navigation > button.react-calendar__navigation__arrow.react-calendar__navigation__prev-button:nth-child(1)').click()
        cy.get('.react-calendar__century-view__decades > :nth-child(9)').click()
        cy.get('.react-calendar__decade-view__years > :nth-child(5)').click()
        cy.get(':nth-child(8) > abbr').click()
        cy.get(':nth-child(15)').click()


    })
})