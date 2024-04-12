/// <reference types="Cypress" />

describe('Handling Child window suite', function() {

    it('Handling child tab with combination of Cypress & Jquery command', function(){
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        //Verifying the heading of table
        //Not working below apptoch
        /*cy.get('.table-display tr th').each(($el, index, $list) =>
        
        {
            expect($el).to.equal("Instructor")  
        })*/

        cy.get('.table-display tr th:nth-child(1)').should('contain','Instructor')
        cy.get('.table-display tr th:nth-child(2)').should('contain','Course')
        cy.get('.table-display tr th:nth-child(3)').should('contain','Price')

        //Validating price 25 of Course Master selenium in Simple python language

        cy.get('tr td:nth-child(2)').each(($el, index, $list)=>
        
        
        {
            const text=$el.text()
            if(text.includes('Python'))
            {
                cy.get('tr td:nth-child(2)').eq(index).next().then(function(price)
                {
                    const coursePrice=price.text()
                    expect(coursePrice).to.equal('25')
                })

            }

        })


    })
})