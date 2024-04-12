/// <reference types="Cypress" />

describe('My second test suite', function() {

    it('My second test case', function(){

        //cy.visit('www.google.com')
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
        cy.get('input.search-keyword').type('ca')
        cy.wait(2000)

      
        //UseCase1: Now I have to check 4 product results displayed on the page or not after entering text ca

        cy.get('.product:visible').should('have.length', 4)

        //should - This is a assercation comes from chai laberary. 
        //visible - Cypress will check only visible elements to find (here the test is failed beacuse there are total 5 elements one is hidden)
        //***Parent Child Chaining***
        //Trying with new approch without visible. Here using parent child chaining

        cy.get('.products').find('.product').should('have.length', 4)

        //Use case 2: NOw, I have to clck on "Add to Cart" button of second item (index start woth 0)

        cy.get('.products').find('.product').eq(2).contains('ADD TO CART').click().contains('ADDED')

        /*Use case 3: If in future more product will be added then above script will fail. Now, user has to identify 
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
        // in javascript there is inlude() method which will help you to find sub text

        if(textVeg.includes('Cashews'))
        {
          //  cy.contains('ADD TO CART').click() -- this is not working here below is second approch

          /*$el.find('button').click here Click methods is not working as we need to resloved promise and this method is depricated. to do this
          use cypress wrap() method
          */

          cy.wrap($el).find('button').click()

        }

        //22. Cypress Ascrynous in nature and it's promise handling
        /*
            Asynchronous means all the script steps will to the server at time insted of step by step
            what is promise? => promise is nothing but the state/behaviour of your script is right now wheather executed,
            pending. So promise comes in three differnt types
            Resloved - when we say promise is resolved, that means step is executed.
            Rejected - when we say promise is Rejected, there is an error in the step.
            Pending - when we say promise is Pending, step is yet to execute. 

            Every Asynchronous step retuns the promise and state will be one of these and we have to wait until promise is resloved.
            When promise is resloved then only we know that that step is executed and move to to the next step

            How to know Promise is resloved?
            There is a method .then(). this method will wait til the current step is executed and then move to the next steps

        */
        })
       //23. Understanding the differnce between JQuery method and Cypress command
       /*
       
       */
        //use case 1: Grap the title of the page
        //below line will throw an error as this needs to be resloved the promise.
        //cy.get('.brand.greenLogo').text()
        
        //Handeling the promise
        cy.get('.brand.greenLogo').then(function(logoName){
            cy.log(logoName.text())

        })
        //Use assert to verify the text correctly display or not
        cy.get('.brand.greenLogo').should('have.text','GREENKART')
       
        //26. Practise set with all validations

        //Clikcing on Add to cart icon

        cy.get('.cart-icon > img').click()
        cy.contains('PROCEED TO CHECKOUT').click()
        cy. contains('Place Order').click()


    })
})