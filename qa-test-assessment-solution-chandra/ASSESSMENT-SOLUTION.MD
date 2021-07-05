# QA Engineer Assessment Solution

## Introduction
11+ years of experience with Test Automation & Manual Testing in FedEx/TNT
Worked in multiple FedEx OpCos - FedEx Express, FedEx Freight, & TNT
Worked in projects like INET, Freight Pricing, Freight Dock&Yard, TNT Sort & Linehaul area
Good exposure with various automation frameworks like Selenium WebDriver, Cucumber, Protractor, Karate API
Good exposure with Agile Methodology
ISTQB Certified
SAFe 4 Certified Practitioner


Name: Chandraprakash Jangid
Email: c.jangid.osv@fedex.com

Solution Comments below.

##Setup
Installed NODEJS LTS 10.18.0, Angular CLI version 7.3.10 (as used in the application), angular-devkit/build angular version 0.12.4 (as used in the application), Protractor version 7.0.0
Updated 'protractor.conf.js' file with below:
	corrected the specs path to './e2e/features/*.feature'
	added frameworkPath config value
	added code to generate test report

## Assignment 

### Start
Configured the local environment, and then able to successfully run the existing scenario with one passing feature which was already available.

### The Coding
As given in the README file, automated the following scenarios using Cucumber and Protractor (BDD approach):


## Main features
	SOLUTION Comments: Automated all 3 features listed below. All suggested test data have been covered. Please see below more details for each feature.
	Cucumber report is generated in test-reports/reports folder. 2 scenarios are failing due to below defect:

	DEFECT: When you search for either a character or a planet and you get one or more results for it, if you clear the Search form and hit Search again, the results are Not cleared.


### Search for character (person)
*	When you search for **a character** and it’s a valid one, then you should be able to see his / her “Gender”, “Birth year”, “Eye color” and “Skin color”.
*	When you search for a character and it’s not a valid one, then you should be able to see “Not found” in the results.
		SOLUTION Comments: Automated both scenarios with feature file “character-search.feature”, for all provided test data (`Luke Skywalker`, `Leia Organa`, `r2`, `Darth Vader`, `Darth Maul`), as well as invalid data.


### Search for planet
*	When you search for **a planet** and it’s a valid one, then you should be able to see its “Population”, “Climate” and “Gravity”.
*	When you search for a planet and it’s not a valid one, then you should be able to see “Not found” in the results.
		SOLUTION Comments: Automated both scenarios with feature file “planet-search.feature”, for all provided test data (`Alderaan`, `Hoth`), as well as invalid data.


### Additional flows
*	When you search for either a character or a planet and you get one or more results for it, clear the “Search form” and hit the Search button again, you should then get an empty result list (previous search results are removed).
		SOLUTION Comments: Automated 2 scenarios (1 for character search and 1 for planet search) with feature file “additional-flows.feature”, with 1 data for each. Both scenarios are failing with below defect:
		DEFECT: When you search for either a character or a planet and you get one or more results for it, if you clear the Search form and hit Search again, the results are Not cleared.
*	You can search for results by clicking the “Search” button or by pressing “enter” on the search field.
		SOLUTION Comments: Automated 2 scenarios (1 for character search and 1 for planet search) for searching using Enter key with feature file “additional-flows.feature”. Used 1 data for each.
*	When for example you have searched for a full planet name and you’ve got results, if you switch to People and search for the same thing (that has no matching people based on a partial name), you should get a “Not found” in the results.
		SOLUTION Comments: Automated 2 scenarios (1 for character search and 1 for planet search) with feature file “additional-flows.feature”.
*	You can have more than one results, for both Planets and Names (partial matching)
		SOLUTION Comments: Automated 2 scenarios (1 for character search and 1 for planet search) with feature file “additional-flows.feature”. Used 2 data for character scenario and 1 for planet scenario.


## Remarks 

...
