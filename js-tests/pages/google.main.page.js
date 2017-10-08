var GoogleMainPage = function GoogleMainPage() {
    
  const address = 'https://google.com';  
  var keywordInput = element(by.xpath("//input[@title ='Szukaj']"));

    this.get = function() {
        browser.get(address);
    }

    this.title = function() {
        return browser.getTitle();
    }

    this.searchEnabled = function() {
        return keywordInput.isEnabled();
    }

    this.setKeyword = function(keyword) {
        keywordInput.sendKeys(keyword);
    }

    this.submit = function() {
        keywordInput.submit();
    }
}
module.exports = GoogleMainPage;