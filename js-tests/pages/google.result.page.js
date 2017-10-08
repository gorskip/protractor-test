var GoogleResultPage = function GoogleResultPage() {

    var results = element.all(by.xpath("//div[@class='rc']//a"));

    this.numberOfResults = function() {
        return results.count();
    }
}
module.exports = GoogleResultPage;