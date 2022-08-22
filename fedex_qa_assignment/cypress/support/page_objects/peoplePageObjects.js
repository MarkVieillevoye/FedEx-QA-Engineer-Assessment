class peoplePage {    
    getPeopleGender(){
        return cy.get('#character-gender');
    }  
    getPeopleBirthYear(){
        return cy.get('#character-birth-year');
    }  
    getPeopleEyeColor(){
        return cy.get('#character-eye-color');
    }  
    getPeopleSkinColor(){
        return cy.get('#character-skin-color');
    }  
    getPeopleCardBody(){
        return cy.get('#character-card');
    }
    peoplesearchSuccessful(gender,birthYear,eyeColor,skinColor){
        this.getPeopleGender().contains(gender);
        this.getPeopleBirthYear().contains(birthYear);
        this.getPeopleEyeColor().contains(eyeColor);
        this.getPeopleSkinColor().contains(skinColor);
    }
}
export default peoplePage