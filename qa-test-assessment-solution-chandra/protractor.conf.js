// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts

const { Config, browser } = require('protractor');
var reporter = require('cucumber-html-reporter');
var reportNumber = Date.now();

exports.config = {
  debug: false,
  allScriptsTimeout: 11000,
  getPageTimeout: 25000,
  specs: [
    './e2e/features/*.feature'
    //'./e2e/features/character-search.feature'
  ],
  capabilities: {
    'browserName': 'chrome',
     chromeOptions: {
      args:['--window-size=1920,1080']
  }
  },
  directConnect: true,
  allScriptsTimeout: 45000,
  getPageTimeout: 60000,
  baseUrl: 'http://localhost:4200/',
  framework: 'custom',
  frameworkPath: require.resolve('protractor-cucumber-framework'),
  cucumberOpts: {
    strict: true,
    require: [
      './e2e/**/*.steps.ts'
    ],
    format: [
      'json:test-reports/cucumber-test-results.json'
    ]
  },
  onPrepare() {
    require('ts-node').register({
      project: require('path').join(__dirname, './e2e/tsconfig.e2e.json')
    });
  },
  onComplete() {
    var options = {
      theme: 'bootstrap',
      jsonFile: 'test-reports/cucumber-test-results.json',
      screenshotsDirectory: 'test-reports/screenshots/',
      storeScreenshots: true,
      output: 'test-reports/reports/tnt-assessment-report-'+reportNumber+'.html',
      reportSuiteAsScenarios: true,
      scenarioTimestamp: true,
      metaData: {
        "App Version": "0.0.0",
        "Test Environment": "Dev",
        "Browser": "Chrome 91.0.4472.124",
        "Platform": "Windows 10",
        "Executed": "Local"
      }
    };
    reporter.generate(options);
  }
};
