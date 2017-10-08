var GoogleMainPage = require('./../pages/google.main.page.js');
var GoogleResultPage = require('./../pages/google.result.page.js');

describe('Google search page', function() {

  browser.waitForAngularEnabled(false);
  browser.driver.manage().window().maximize();

  googleMain = new GoogleMainPage();
  googleMain.get();

  it('should open Google page', function() {
    expect(googleMain.title()).toEqual('Google');
  });

  it("should keywords input be enabled", function(){
    expect(googleMain.searchEnabled()).toBe(true);
  });
  
  it("should get results for provided keyword", function(){
    googleMain.setKeyword('Ride manic');
    googleMain.submit();
    googleResult = new GoogleResultPage();
    expect(googleResult.numberOfResults()).toBeGreaterThan(0);
  });
});