module.exports = {
    'If Add to Cart is avaialble' : function(browser){
        browser.url('http://localhost:3000')
        .waitForElementVisible('body',3000);
        browser.expect.element('#addToCart').to.be.present;
        browser.end()
    },
    'If Pick up in store is available' : function(browser){
        browser.url('http://localhost:3000')
        .waitForElementVisible('body',3000);
        browser.expect.element('#pickUpStore').to.be.present;
        browser.end();
    },
    'If add to cart is not available' : function(browser){
        browser.url('http://localhost:3000')
        .waitForElementVisible('body',3000);
        browser.expect.element('#addToCart').to.not.be.present;
        browser.end();
    },
    'If Pick up in store is not available' : function(browser){
        browser.url('http://localhost:3000')
        .waitForElementVisible('body',3000);
        browser.expect.element('#pickUpStore').to.not.be.present;
        browser.end();
    },
}