//Create class in Java Script
class HomePage
{
//1. add method here for all web elements

getName()
{
 return cy.get('input[name="name"]:nth-child(2)')
}
getEmail()
{
    return cy.get('.form-group input[name="email"]')
}

getPassword()
{
    return  cy.get('.form-group input[placeholder="Password"]')
}

getGender()
{

    return  cy.get('#exampleFormControlSelect1')
}

}
//2. To make aviable class to all other spec files use below export keyword in JS
export default HomePage

//3. add import statment at the top in framwork "TestFramworkPOM" to import this class
//import HomePage from "../Pageobjects/Homepage.cy"