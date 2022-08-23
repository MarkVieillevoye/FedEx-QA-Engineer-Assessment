import { When, Then } from "@badeball/cypress-cucumber-preprocessor";
import searchPageObjects from './../../support/page_objects/searchPageObjects';
import planetPageObjects from './../../support/page_objects/planetsPageObjects';

const searchPage=new searchPageObjects();
const PlanetsPage=new planetPageObjects();

//functions are Examples
When('I search for {string}', (planet)=>{
    searchPage.getPlanetsRadioButton().click();
    searchPage.search(planet);
})

Then('I should be able to view the {string}, {string} and {string} of the planet',(population,climate,gravity)=>{
    PlanetsPage.planetsearchSuccessful(population,climate,gravity);
})