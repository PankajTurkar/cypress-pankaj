describe('Handling Child Windows', () => {
    it('Should handle child window', () => {
      
 

    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");

       cy.get("#openwindow").invoke('removeAttr','onclick').click();

       



       })


    });