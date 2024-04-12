/// <reference types="Cypress" />

describe('Dropdown Testing test suite', function() {

    it('validating static & Dynamic dropdowns with differnt approches', function(){

        
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        //29. Static drop-down handeling
       // cy.get('select').select('option2')
        cy.get('select').select('option2').should('have.value', 'option2')


        //Dynamic drop-down handeling
        //Get the web element of drop down and then type search keyword
        cy.get('input#autocomplete').type('ind')
       
        /*Search the displayed options using command locator and then iterate 
        through each and every options using each() method to compare the search text
        */
        cy.get('.ui-menu-item div').each(($el, index, $list) =>{
        
            if($el.text()==='India')
            {
                //$el.click()
               cy.wrap($el).click()

            }

        })   

        //checking the value proper India is selected or not using the asset
        
        cy.get('input#autocomplete').should('have.value','India')

    })
})