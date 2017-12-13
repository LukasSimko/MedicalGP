var chai = require('chai');
var test = require('selenium-webdriver/testing');
var webdriver = require('selenium-webdriver');
var expect = chai.expect;
var until = webdriver.until;

var driver;
var mochaTimeOut = 30000;

var pageSelector ;

test.describe('Demo', function() {
    this.timeout(mochaTimeOut);
    test.before( function() {
        driver = new webdriver.Builder()
            .withCapabilities( webdriver.Capabilities.chrome() )
            .build();
        pageSelector = webdriver.By.id('home');
        driver.get('http://localhost:3000');
        driver.wait(until.elementLocated(pageSelector), 2000);
    } );
    test.it('shows the main body', function() {
        driver.findElement(pageSelector)
            .then(function(element) {
                expect(element).to.not.equal(null );
            });
    });
    test.it( 'shows the nav bar', function() {
        var navBarSelector = webdriver.By.tagName('nav');
        driver.findElement(navBarSelector)
            .then(function(element) {
                expect(element).to.not.equal(null );
            });
    } );
    test.it( 'shows the buttons', function() {
        driver.findElements(webdriver.By.tagName('button'))
            .then(function(elements) {
                expect(elements).to.not.equal(null );
                elements[0].getText()
                    .then(function(text) {
                        expect(text).to.equal('Register');
                    } )  ;
                elements[1].getText()
                    .then(function(text) {
                        expect(text).to.equal('Log In');
                    } )  ;

            });
    } );
    test.after(function() {
         driver.quit();
    });
});


