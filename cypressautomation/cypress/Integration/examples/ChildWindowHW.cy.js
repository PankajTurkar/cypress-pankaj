describe('Handling Child tab', () => {
    it('Should handle child tab', () => {
      
 

    cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");

       cy.get(".blinkingText").invoke('removeAttr','target').click();

       
       /* NO need to write this as domain are same in old and new tab
       cy.origin('https://rahulshettyacademy.com/', ()=>
            {
                cy.get("h1").should('contain','Documents request');

            })*/
            
            //cy.get(':nth-child(3) > .theme-btn').should('contain','Login');


       })


    });