    class planetsPage {
        getPlanetNameValue(){
            return cy.get('#planet-name');
        }    
        getPlanetPopulationValue(){
            return cy.get('#planet-population');
        }
        getPlanetClimateValue(){
            return cy.get('#planet-climate');
        }
        getPlanetGravityValue(){
            return cy.get('#planet-gravity');
        }
        planetsearchSuccessful(population,climate,gravity,planet){
            this.getPlanetPopulationValue().contains(population);
            this.getPlanetClimateValue().contains(climate);
            this.getPlanetGravityValue().contains(gravity);
            // this.getPlanetNameValue().contains(planet);
        }
    }    
    export default planetsPage