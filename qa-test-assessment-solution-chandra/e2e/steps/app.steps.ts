const { Given, When, Then } = require('cucumber');
const { browser, by, protractor } = require('protractor');
const chai = require('chai');
chai.use(require('chai-as-promised'));

Given('The app is open on {string}', { timeout: 25 * 1000 }, async (string) => {
    await browser.get('http://' + string + ':4200/');
    await browser.sleep(2000);
    await chai.expect(browser.element(by.id('query')).isDisplayed()).to.eventually.be.true;
});

When(/^You search for character "(.*?)"$/, async (string) => {
    // search with the character name provided in feature file
    await browser.element(by.id('query')).sendKeys(string);
    await browser.element(by.tagName('button')).click();
});

Then(/^Character details for "(.*?)" are displayed$/, async (string) => {
    
    // get number of app-character cards displayed and verify that at least 1 app-character card is displayed
    let char_results = browser.element.all(by.tagName('app-character'));
    await chai.expect(char_results.count()).to.eventually.be.gt(0);    

    // getting count of app-character cards displayed
    const getCount = function() {
        return char_results.count().then( function (count){
            return count;
        });
    };
    var noOfResults = await getCount();

    // creating reg exp of the character name to match with results
    var nameRegExp = new RegExp('^'+string, 'i');

    for (let i=0;i<noOfResults;i++) {
        let index = 4*i;
        
        // verify that name in results matches with what is queried
        await chai.expect(browser.element.all(by.tagName('h6')).get(i).getText()).to.eventually.match(nameRegExp);

        // verify that //verify all labels are displayed for the character details
        await chai.expect(browser.element.all(by.className('col-sm-2')).get(index).getText()).to.eventually.equals("Gender:");
        await chai.expect(browser.element.all(by.className('col-sm-2')).get(index+1).getText()).to.eventually.equals("Birth year:");
        await chai.expect(browser.element.all(by.className('col-sm-2')).get(index+2).getText()).to.eventually.equals("Eye color:");
        await chai.expect(browser.element.all(by.className('col-sm-2')).get(index+3).getText()).to.eventually.equals("Skin color:");

        // verify valid values are displayed for the character details
        await chai.expect(browser.element.all(by.className('col-sm-10')).get(index).getText()).to.eventually.be.a('string');
        await chai.expect(browser.element.all(by.className('col-sm-10')).get(index+1).getText()).to.eventually.not.be.null;
        await chai.expect(browser.element.all(by.className('col-sm-10')).get(index+2).getText()).to.eventually.be.a('string');
        await chai.expect(browser.element.all(by.className('col-sm-10')).get(index+3).getText()).to.eventually.be.a('string');
    }
});


Then('Search result is displayed as Not Found', async () => {
    // get number of app-character and app-planet cards displayed
    let char_results = browser.element.all(by.tagName('app-character'));
    let plan_results = browser.element.all(by.tagName('app-planet'));
    
    // there should be 0 app-character and app-planet cards displayed
    await chai.expect(char_results.count()).to.eventually.equals(0);
    await chai.expect(plan_results.count()).to.eventually.equals(0);

    // Not found text should be displayed
    await chai.expect(browser.element(by.css('div.col > div')).getText()).to.eventually.equals('Not found.');
});

When(/^You search for planet "(.*?)" with Enter key$/, async (string) => {
    // search with the planet name provided in feature file
    await browser.element(by.id('planets')).click();
    await browser.element(by.id('query')).sendKeys(string);
    // await browser.element(by.tagName('button')).click();
    await browser.actions().sendKeys(protractor.Key.ENTER).perform();
});

Then(/^Planet details for "(.*?)" are displayed$/, async (string) => {

    // get number of app-planet cards displayed and verify that at least 1 app-planet card is displayed
    let planet_results = browser.element.all(by.tagName('app-planet'));
    await chai.expect(planet_results.count()).to.eventually.be.gt(0);

    // getting count of app-planet cards displayed
    const getCount = function() {
        return planet_results.count().then( function (count){
            return count;
        });
    };
    var noOfResults = await getCount();

    // creating reg exp of the planet name to match with results
    var nameRegExp = new RegExp('^'+string, 'i');
    
    for (let i=0;i<noOfResults;i++) {
        let index = 3*i;
        
        // verify that name in results matches with what is queried
        await chai.expect(browser.element.all(by.tagName('h6')).get(i).getText()).to.eventually.match(nameRegExp);

        // verify that //verify all labels are displayed for the planet details
        await chai.expect(browser.element.all(by.className('col-sm-2')).get(index).getText()).to.eventually.equals("Population:");
        await chai.expect(browser.element.all(by.className('col-sm-2')).get(index+1).getText()).to.eventually.equals("Climate:");
        await chai.expect(browser.element.all(by.className('col-sm-2')).get(index+2).getText()).to.eventually.equals("Gravity:");

        // verify valid values are displayed for the planet details
        await chai.expect(browser.element.all(by.className('col-sm-10')).get(0).getText()).to.eventually.not.be.null;
        await chai.expect(browser.element.all(by.className('col-sm-10')).get(1).getText()).to.eventually.not.be.null;
        await chai.expect(browser.element.all(by.className('col-sm-10')).get(2).getText()).to.eventually.not.be.null;
    }    
});

When('Search form is cleared and clicked Search', async () => {
    // clear form and search with blank 
    await browser.element(by.id('query')).clear();
    await browser.element(by.tagName('button')).click();
});

Then('Previous search results are cleared', async () => {
    // app-character or app-planet cards should NOT be displayed
    await chai.expect(browser.element.all(by.tagName('app-character')).isDisplayed()).to.eventually.be.false;
    await chai.expect(browser.element.all(by.tagName('app-planet')).isDisplayed()).to.eventually.be.false;
});


When('You switch from character to planet radio button and search', async () => {
    // selecting planet radio button and searching
    await browser.element(by.id('planets')).click();
    await browser.element(by.tagName('button')).click();
});