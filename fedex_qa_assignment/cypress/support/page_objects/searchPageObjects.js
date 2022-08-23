class searchPage {
    getQueryInput() {
        return cy.get('#query');
    }
    getSearchButton(){
        return cy.get('#submit');
    }
    getPlanetsRadioButton(){
        return cy.get('#planets');
    }
    getItemNotFound(){
        return cy.get('#item-not-found');
    }
    search(input){        
        this.getQueryInput().clear();
        this.getQueryInput().type(input);
        this.getSearchButton().click();
    }
    itemNotFound(){
        this.getItemNotFound().should('have.text', "Not found.");
    }
}
export default searchPage