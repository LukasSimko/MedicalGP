var chai = require('chai');
var test = require('selenium-webdriver/testing');
var webdriver = require('selenium-webdriver');
var expect = chai.expect;
var until = webdriver.until;
var By = webdriver.By;

var driver;
var mochaTimeOut = 30000;

var pageSelector;
var noPatients;
var navBarSelector ;

test.describe('add Patient page', function() {
    this.timeout(mochaTimeOut);
    test.before( function() {
        driver = new webdriver.Builder()
            .withCapabilities( webdriver.Capabilities.chrome() )
            .build();
        pageSelector = By.id('patient');
        driver.get('http://localhost:3000/#/patients');
        driver.wait(until.elementLocated(By.tagName('h1')), 20000);
        driver.findElements(By.tagName('tr'))
            .then( function( patients ) {
                noPatients = patients.length;
            });
    } );
    test.beforeEach( function() {
        driver.get('http://localhost:3000/#/patients');
        driver.wait(until.elementLocated(pageSelector), 20000);
        navBarSelector = By.tagName('nav');
    } );
    test.it( 'shows the nav bar on add patient page', function() {
        driver.findElement(navBarSelector)
            .then(function(element) {
                expect(element).to.not.equal(null );
            });
    } );

    test.it( 'shows the main header', function() {
        driver.findElement(By.tagName('h1')).then( function( element ) {
            element.getText().then(function(text) {
                expect(text).to.equal('Patient Registration');
            });
        });
    } );

    test.it( 'accepts a patient', function() {
        var input = driver.findElement(By.id('fname'));
        input
            .then(function() {
                return driver.findElement(By.id('fname'));
            })
            .then(function(element) {
                element.clear();
                return element;
            } )
            .then(function(element) {
                element.sendKeys('Renata');
            } )
        var input = driver.findElement(By.id('sname'));
        input
            .then(function() {
                return driver.findElement(By.id('sname'));
            })
            .then(function(element) {
                element.clear();
                return element;
            } )
            .then(function(element) {
                element.sendKeys('Sabanosova');
            } )
        var input = driver.findElement(By.id('age'));
        input
            .then(function() {
                return driver.findElement(By.id('age'));
            })
            .then(function(element) {
                element.clear();
                return element;
            } )
            .then(function(element) {
                element.sendKeys('44');
            } )
        var input = driver.findElement(By.id('gender'));
        input
            .then(function() {
                return driver.findElement(By.id('gender'));
            })
            .then(function(element) {
                element.clear();
                return element;
            } )
            .then(function(element) {
                element.sendKeys('female');
            } )
        var input = driver.findElement(By.id('mobile'));
        input
            .then(function() {
                return driver.findElement(By.id('mobile'));
            })
            .then(function(element) {
                element.clear();
                return element;
            } )
            .then(function(element) {
                element.sendKeys('35346763');
            } )


            .then(function() {
                return driver.findElement(By.id('submit'));
            })
            .then(function(element) {
                element.submit();
            } )


    } );

    test.afterEach( function() {
        driver.manage().deleteAllCookies() ;
    } );

    test.after(function() {
        driver.quit();
    });
});