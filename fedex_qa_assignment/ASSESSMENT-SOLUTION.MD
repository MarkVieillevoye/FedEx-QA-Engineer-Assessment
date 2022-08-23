
# FedEx Digital International QA Engineer assessment 

The purpose is to give FedEx insight in your technical abilities, development approach and general technical
working habits.


## 🚀 About Me
Hi, I am Brent Singh, as software tester from sunny South Africa. Throughout my 10+ year career I have aimed to used the knowledge and skills gained in order to collaborate and provide an innovative end-to-end testing strategy that utilizes all tools which are currently available, including test automation on all levels of the application framework.


## 🔗 Links
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/brent-singh-83221913/)
[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/BrentGTR)

## Installation

For project setup and running e2e tests please refer to README.md file.

The testing of this project is based on Cucumber and cypress (BDD approach). 
Since cypress is already installed during the steps in the README, you can now install the cypress-cucumber-preprocessor using the following URL:
```bash
  https://github.com/badeball/cypress-cucumber-preprocessor/blob/master/docs/quick-start.md
```
For reporting we use Mochawesome
```bash
  npm i --D mocha mochawesome mochawesome-merge mochawesome-report-generator
```  
## Optimizations

Refactors are sometimes needed for easily identifying elements in GUI projects. This is the list of the ones done:
 
 - Added 'id="submit"' to Search button on search-form.component.html
 - Added 'id="character-card"' on character.component.html
 - Added 'id="character-gender"' on character.component.html
 - Added 'id="character-birth-year"' on character.component.html
 - Added 'id="character-eye-color"' on character.component.html
 - Added 'id="character-skin-color"' on character.component.html
 - Added 'id="planet-name"' on character.component.html
 - Added 'id="planet-population"' on character.component.html
 - Added 'id="planet-climate"' on character.component.html
 - Added 'id="planet-gravity"' on character.component.html
 - Added 'id="item-not-found"' on app.component.html
 

## Run Locally
Go to the project directory

```bash
  cd fedex_qa_assignment
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run ng serve
```
Define the scripts in package.json as follows
```bash
"scripts": {
    "cypress:open": "cypress open",
    "cypress:run": "cypress run",
    "cukes": "cypress run --spec \"**/*.feature\""
  }
```  

Run the Cypress-cucumber features

```bash
  npm run cukes
```