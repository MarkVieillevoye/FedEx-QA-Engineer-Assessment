import { Given, When,Then, And } from "@badeball/cypress-cucumber-preprocessor";

let responseCode = "";
let responseBody = "";

Given('I want to execute Star Wars GET api for character {string}', (character) => {
    cy.request({
      method: 'GET',
      url: 'https://swapi.dev/api/people/?search=' + character,
      headers: {
        'Content-Type': 'application/json'  
      },
      failOnStatusCode:false //run steps even when request status code is other than 2XX or 3XX.
    }).as('get_character_data')    
    //here 'get_character_data'is alias for this request to be used by other steps
  
  });

  Then('Verify response status code is {int}', (statusCode) => {
    cy.get('@get_character_data').should((response)=> {
      expect(response.status).to.eq(statusCode);
      
    })
  });

  And('Verify response details for character {string}', (character) => {
    cy.get('@get_character_data').should((response)=> {      
      expect(response.body).to.have.property('results');
      expect(response.body).to.have.nested.property('results[0].name',"character");      
      expect(response).to.have.property('headers');
    })
  });