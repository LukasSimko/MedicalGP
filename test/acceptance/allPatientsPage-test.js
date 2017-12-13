var chai = require('chai');
var test = require('selenium-webdriver/testing');
var webdriver = require('selenium-webdriver');
var expect = chai.expect;
var until = webdriver.until;
var By = webdriver.By;

var driver;
var mochaTimeOut = 30000;

var pageSelector;

test.describe('Patients page', function() {
    this.timeout(mochaTimeOut);
    test.before( function() {
        driver = new webdriver.Builder()
            .withCapabilities( webdriver.Capabilities.chrome() )
            .build();
        pageSelector = By.id('registered');
    } );
    test.beforeEach( function() {
        driver.get('http://localhost:3000/#/registered');
        driver.wait(until.elementLocated(pageSelector), 2000);
    } );

    test.it( 'shows the main header', function() {
        driver.findElement(By.tagName('h1')).then( function( element ) {
            element.getText().then(function(text) {
                expect(text).to.equal('Patient in system');
            });
        });
    } );

    test.it( 'displays the patients', function() {
        var patients = driver.findElements(By.tagName('tr'));
        // 1st patient age
        patients
            .then(function( elements ) {
                return elements[0].findElement(By.name('age'));
            })
            .then(function(element) {
                return element.getText();
            })
            .then(function(text) {
                expect(text).to.equal('44   ');
            } );
        // 2nd patient gender
        patients
            .then( function( elements ) {
                return elements[0].findElement(By.name('gender'));
            })
            .then(function(element) {
                return element.getText();
            })
            .then(function(text) {
                expect(text).to.equal('female ');
            } );
        // 3rd patient first name
        patients
            .then( function( elements ) {
                return elements[0].findElement(By.name('first'));
            })
            .then(function(element) {
                return element.getText();
            })
            .then(function(text) {
                expect(text).to.equal('Renata');
            } );
    } );

    test.afterEach( function() {
        driver.manage().deleteAllCookies() ;
    } );

    test.after(function() {
        driver.quit();
    });
});