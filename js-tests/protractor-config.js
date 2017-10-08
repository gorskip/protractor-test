var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');
exports.config = {
	directConnect: true,
 // seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['specs/*.specs.js'],

  onPrepare: function() {
    jasmine.getEnv().addReporter(
      new Jasmine2HtmlReporter({
        savePath: 'target/screenshots',
        takeScreenshots: true,
        takeScreenshotsOnlyOnFailures: true
      })
    );
 }
};