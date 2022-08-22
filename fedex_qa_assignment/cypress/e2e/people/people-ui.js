import { When,Then } from "@badeball/cypress-cucumber-preprocessor";
import searchPageObjects from '../../support/page_objects/searchPageObjects';
import peoplePageObjects from '../../support/page_objects/peoplePageObjects'

const searchPage=new searchPageObjects();
const peoplePage=new peoplePageObjects();


When('I search for {string}', (person)=>{
  searchPage.search(person);
})

When("I seach for the following people", (datatable) => {
  datatable.hashes().forEach((row) => {
    //Cucumber Datatables:
    //Contacts the table present in the feature file
    //To access the data present in the table "row.column name" is used
    searchPage.search(row.name);
  });
});

Then('I expect data for each of them to be returned',()=>{
  //Simple assertion to ensure that the character card is visible
  peoplePage.getPeopleCardBody().should('exist'); 
})

Then('I should be able to see his or her {string}, {string}, {string} and {string}',(gender,birthYear,eyeColor,skinColor)=>{
  //'Less simple' assertion to validate character details
  peoplePage.peoplesearchSuccessful(gender,birthYear,eyeColor,skinColor); 
})