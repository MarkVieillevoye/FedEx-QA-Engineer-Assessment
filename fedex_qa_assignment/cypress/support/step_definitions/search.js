import { Given, Then } from "@badeball/cypress-cucumber-preprocessor";
import searchPageObjects from '../page_objects/searchPageObjects';

const searchPage=new searchPageObjects();

Given("I open the TntAssugnment webpage", () => {
    cy.visit("/");
  });

Then('I should be able to see “Not found” in the results',()=>{
    searchPage.itemNotFound();
})