/// <reference types="Cypress" />

describe('My first test suite', function() {

    it('My first test case', function(){

        //cy.visit('www.google.com')
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
        cy.get('input.search-keyword').type('ca')
        cy.wait(2000)

      
        //UseCase1:I have to check 4 product results displayed on the page or not after entering text "ca".

        cy.get('.product:visible').should('have.length', 4)

        //should - This is a assercation comes from chai laberary. 
        //visible - Cypress will check only visible elements to find (here the test is failed beacuse there are total 5 elements one is hidden)
        
        //19. ***Parent Child Chaining***
        //Trying with new approch without visible. Here using parent child chaining using find() method

        cy.get('.products').find('.product').should('have.length', 4)

        //Use case 2: NOw, I have to clck on "Add to Cart" button of second item (index start woth 0)

        cy.get('.products').find('.product').eq(2).contains('ADD TO CART').click().contains('ADDED')

        /*21. Grabbing the text for validations using cypress text command
        Use case 3: If in future more product will be added then above script will fail. Now, user has to identify 
        product using product name dynamically and then do "ADD TO CART"
        
        21. grabbign the text for validations using cypress text command
        .each(($el, index, $list) =>{
        
       })
        */
       //1st will written array of the displayed 4 product cy.get('.products').find('.product').
       // .each(($el, index, $list) =>{}) - method used to iterate through array
       
       cy.get('.products').find('.product').each(($el, index, $list) =>{
        //Taking the text and storing in one variable
       const textVeg= $el.find('h4.product-name').text()
        // in javascript there is inlude() method which will help you to find sub text as we have "Cashews - 1 Kg"

        if(textVeg.includes('Cashews'))
        {
          //  cy.contains('ADD TO CART').click() -- this is not working here below is second approch

          /*$el.find('button').click here Click methods is not working or deprecated with find() method
           to use this we need to resloved promise of $el. to do this use cypress wrap() method to use deprecated methods
          */

          cy.wrap($el).find('button').click()

        }

        //22. Cypress Ascrynous in nature and it's promise handling
        /*  Cypress is asyncronus in nature  and there is no gaurentee in sequence of execution, 
            but takes care of that.
            
            Asynchronous means all the script steps will send to the server at time insted of step by step
            In Asynchronous every steps retuen the promise.
            what is promise? => promise is nothing but the state/behaviour of your script is right now wheather executed,
            pending. So promise comes in three differnt types
            Resloved - when we say promise is resolved, that means step is executed.
            Rejected - when we say promise is Rejected, there is an error in the step.
            Pending - when we say promise is Pending, step is yet to execute. 

            Every Asynchronous step retuns the promise and state will be one of these and we have to wait until promise is resloved.
            When promise is resloved then only we know that that step is executed and move to to the next step

            How to know Promise is resloved?
            There is a method .then(). this method will wait till the current step is executed and then move to the next steps

        */
        })
       //23. Understanding the differnce between JQuery method and Cypress command
       /*
       
       */
        //use case 1: Grap the title of the page
        //below line will throw an error as this needs to be resloved the promise.
        //cy.get('.brand.greenLogo').text()
        
        //Handeling the promise. Also text() is not cypress command but cypress support Jquery method but need to resloved the promise sing then()

        cy.get('.brand.greenLogo').then(function(logoName){
            cy.log(logoName.text())

        })
        //Use assert to verify the text correctly display or not
        cy.get('.brand.greenLogo').should('have.text','GREENKART')
       
        //26. Practise set with all validations

        

    })
})