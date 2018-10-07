var {defineSupportCode} = require('cucumber');
var reporter = require('cucumber-html-reporter');

defineSupportCode(function ({Before, After, registerHandler}) {

    registerHandler('BeforeFeatures', function () {
        console.log('\x1b[33m%s\x1b[0m', 'Execution Started');
        return;
    });

    Before(function () {
        return this.driver.manage().window().setSize(1680, 1050);
    });

    After(function () {
        return this.attach('Some text Prasad', 'text/plain');
    });

    After(function () {
        return this.driver.quit();
    });

    After(function (scenarioResult) {
        var world = this;
        if (scenarioResult.isFailed()) {
            return this.driver.takeScreenshot().then(function (screenShot) {
                // screenShot is a base-64 encoded PNG
                return world.attach(screenShot, 'image/png');
            });
        }else{
            return this.driver.takeScreenshot().then(function (screenShot) {
                // screenShot is a base-64 encoded PNG
                return world.attach(screenShot, 'image/png');
            });
        }
    });

    registerHandler('AfterFeatures', function () {

        console.log('\x1b[33m%s\x1b[0m', 'Execution Ended');

        var options = {
            theme: 'bootstrap',
            jsonFile: './reports/cucumber-json-report.json',
            output: './reports/cucumber-html-report.html',
            reportSuiteAsScenarios: true,
            launchReport: true,
            metadata: {
                "App Version": "1.0.0",
                "Test Environment": "STAGING",
                "Browser": "Chrome  54.0.2840.98",
                "Platform": "Win 10",
                "Parallel": "Scenarios",
                "Executed": "Local"
            }
        };

        reporter.generate(options);

        return;
    });
});