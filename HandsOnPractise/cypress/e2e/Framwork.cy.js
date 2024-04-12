/// <reference types="Cypress" />

import HomePage from "./PageObjects/HomePage.cy"

describe('User page', () => {
  let data; //closure variable
  const homepage = new HomePage()
  beforeEach(function () { 
    
    cy.fixture('HomePageLocators').then((user) => {
      this.data = user
      //make it Global in beforeeach() block
      cy.visit(this.data.URL)
    })
    
  })
  
    // cy.visit(this.data.URL)
    // homepage.getName().type(this.data.name)
    // homepage.getEmail().type(this.data.Email)
    // homepage.clickCheckbox().check()
    // homepage.checkboxLabel().should('have.value', this.data.checkboxText)
    // cy.contains('Check me out if you Love IceCreams!').should('have.text',this.data.checkboxText)
    // cy.get('#exampleFormControlSelect1').select('Female')
    // homepage.getEmploymentStatus().check()
    // //validate text "Two-way Data Binding example" box
    // cy.get('h4 input').should('have.value', this.data.name)
    //homepage.clickonSubmit().submit().next().should('contain','Success! The Form has been submitted successfully!.')
  
    
  it('Enter a valid name', function () {
    
    homepage.getName().type(this.data.name)

  })

  it('Entera valid Email', function () {
    
    homepage.getEmail().type(this.data.Email)

  })
  it('Enter a valid Password', function () {
    
    //homepage.getPassword().next().type(this.data.p)
    homepage.getPassword().type('abc')
    
	})
  it('Verify user able to check the checkobx of "Check me out if you Love IceCreams!"', function () {
    
    homepage.clickCheckbox().click()
    
	})
  it('Verify text of checkobx', function () {
    
    homepage.checkboxLabel().contains('Check me out if you Love IceCreams!')
    //homepage.checkboxLabel().next().contains(this.data.checkboxLabel)
	})
  it('Verify user able to select gender from "Gender" drop-down', function () {
    
    homepage.getGender().select('Female')
    
	})
  it('Verify user able to select "Employment Status', function () {
    
    homepage.getEmploymentStatus().check()
    
	})
  it('Verify same entered name should be displayed in "Two way data Binding -example" text box ', function () {
    
    homepage.getName().type(this.data.name)
   // cy.wait(2000)
    homepage.getDataBinding().and('have.value', this.data.name)
    //cy.get('h4 input').should('have.value', this.data.name)
    
    
	})
  it('Click on Submit button and verify the successfull validation message ', function () {
    
   
  })
    
})
