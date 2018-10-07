**How to run Gherkin feature files using CucumberJS and Selenium Webdriver**

_**Pre-requisite:**_

npm install cucumber --save-dev  
npm install selenium-webdriver --save-dev  

add following drivers to path variable   
* iedriver                                                                                                          
* edgedriver  
* geckodriver  
* chromedriver 
       
run feature files using local cucumberjs or cucumber-js   (in windows cucumber.js will open .js instead of running, cucumber.js will work in MAC and linux with out any issues)

node_modules\\.bin\cucumberjs  features\documentation.feature

**How to generate reports CucumberJS and Cucumber Html reporter**

run command  
`cucumberjs --format json:./reports/cucumber-json-report.json`         
report cucumber-json-report.json  will store in reports folder 

install cucumber html reporter module from npm  
`npm install cucumber-html-reporter --save-dev`       
install gulp module as well  
`npm install gulp --save-dev`  
create a gulpfile.js in current working directory
use following code to generate reports  
```  
var gulp = require('gulp');
var reporter = require('cucumber-html-reporter');
var options = {  
    theme: 'bootstrap',  
    jsonFile: './reports/cucumber-json-report.json',  
    output: './reports/cucumber-html-report.html',  
    reportSuiteAsScenarios: true,  
    launchReport: true,  
    metadata: {  
        "App Version":"1.0.0",  
        "Test Environment": "STAGING",  
        "Browser": "Chrome  54.0.2840.98",  
        "Platform": "Mac 10",  
        "Parallel": "Scenarios",  
        "Executed": "Local"  
    }  
};  

gulp.task('cucumberReports',function () {  
    reporter.generate(options);  
})
```       

