class ShopePage{

    getProductshopname()
    {
        return cy.get(':nth-child(1) > .card > .card-body > .card-title > a')
    }
    
}
export default ShopePage