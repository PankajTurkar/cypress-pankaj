class HomePage{

    getName(){

        return cy.get(':nth-child(1) > .form-control')
    }

    getEmail(){

        return cy.get('input[name="email"]:nth-child(2)')
    }
    getPassword(){

        return cy.get('#exampleInputPassword1')
    }
    clickCheckbox(){

        return cy.get('#exampleCheck1')
    }
    checkboxLabel(){
        return cy.get("form.ng-untouched > :nth-child(4) > .form-check-label")
    }
    getGender(){

        return cy.get('#exampleFormControlSelect1')
    }
    getEmploymentStatus(){

        return cy.get('#inlineRadio1')
    }
    clickonSubmit(){

        return cy.get('.btn.btn-success')
    }
    getDataBinding(){

        return cy.get('h4 input')
    }




}
export default HomePage