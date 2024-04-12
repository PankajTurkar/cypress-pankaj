/// <reference types="Cypress" />

describe('Framwork creation', function() {
// before hook runs once before all tests in the block
    describe('Hooks', () => {
        before(() => {
          // runs once before all tests in the block
          cy.fixture('example').then(function(data)
          {
            this.value=data

          })
        })
   

        it('Use of Hooks and Fixture', function(){
            cy.visit('https://rahulshettyacademy.com/angularpractice/')
            //cy.get('.form-group input[name="name"]').type('Pankaj')
            cy.get('input[name="name"]:nth-child(2)').type(this.value.name)
            cy.get('.form-group input[name="email"]').type(this.value.email)
            cy.get('.form-group input[placeholder="Password"]').type(this.value.password)
            cy.get('#exampleCheck1').check()
            cy.contains('Check me out if you Love IceCreams!').should('have.text','Check me out if you Love IceCreams!')
            cy.get('#exampleFormControlSelect1').select(this.value.gender).should('have.value','Male')
            cy.get('#inlineRadio2').check()
           // cy.get('Shop').should('exist')
           cy.get('#inlineRadio3').should('be.disabled')

           //Validate the entered name should display in Two-way Data Binding example filed and name filed accept min 2 char
           
           cy.get('h4 input').should('have.value',this.value.name)

           //To validate this in DOM we have one attribute called minlenght='2' so we can pu the validation
           cy.get('input[name="name"]:nth-child(2)').should('have.attr','minlength',2)

           //Click on Shop and select the itam using text and add to the cart
           cy.get(':nth-child(2) > .nav-link').click()
        /*Creating custom command to avoid re-writting of code again again or Binding cistomize cypress command for
        reusing the code


           //    cy.get('h4.card-title').each(($el,index,$list) =>{
        //     //include method remove additional space of text
        //     if($el.text().includes('Blackberry'))
        //     {
        //         //Clicking add button as per the index of blackbarry
        //         cy.get('button.btn.btn-info').eq(index).click()
            }
        
           })*/

           //Using Customer command created in Support folder user dynamically selec product and clik on aa to cart
          //  cy.selectProduct('Blackberry')
          //  cy.selectProduct('Nokia Edge')

           //Now we are  add productname in fixture for data driven. To get the value from an arry use JS foreachloop
           
           this.value.productName.forEach(function(element) {
            cy.selectProduct(element)
            
           });

          
          

          
           
        })

       /* it('Validate the entered name should display in Two-way Data Binding example filed and name filed accept min 2 char', function(){
            //To validate this in DOM we have one attribute called minlenght='2' so we can pu the validation
           // cy.get('input[name="name"]:nth-child(2)').type(this.value.name)
           cy.get('h4 input').should('have.text',this.value.name)

        })*/
    })
})