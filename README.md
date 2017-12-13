# Assignment 2 - Automated development process.

Name: ... Lukas Simko ...

Student No.:  20062036

## Overview.

The application pushes up to github,travis and passes to , I have the build set up but not production. There is also build automation.
Full acceptance testing.


HAVE TO RUN TEST TWICE BECAUSE FOR TESTING IT TAKE PATIENT IN SYSTEM.
RUN TWICE mocha test/acceptance

thanks

## Environment.
mongodb
node v6.11.3
github
travis

the application have to be tested from ROLL branch because i had issue and because of that i have to roll back. All git log can bee seen wia git log


## Build automation.

List precisely the sequence of steps (i.e. terminal commands) required to build, test (Acceptance test) and run the complete app locally - what NPM scripts (and other scripts) to execute.

1. type (mongod) command for run database
2. run application
    2.1 After switch to ROLL branch with git checkout ROLL

    npm install --save-dev webpack@1.15.0
    npm install --save angular@1.3.10 angular-route@1.3.10
    npm install --save-dev babel-core@6.14.0 babel-loader@6.4.1
    npm install --save bootstrap@3.3.7 font-awesome@4.7.0
    npm install --save-dev style-loader@0.13.1 css-loader@0.24.0
    npm install --save-dev url-loader@0.5.9 file-loader@0.9.0
    npm run build
    npm install --save-dev html-webpack-plugin@2.30.1 clean-webpack-plugin@0.1.17
    npm install --save-dev npm-run-all
    npm install --save-dev cross-env
    npm install --save-dev rimraf
    npm install --save-dev nodemon
    npm install --save-dev istanbul@0.4.5
    npm install coveralls@2.13.1 --save-dev

3. type (npm test) command in base folder
4. type (mocha test/acceptance) in base folder for testing the web application pages
NPM test will retrive this information for pss patient test as follow:

 Patient
    GET /patients
Successfully connected to database
      √ should return all the Patients in Collection
    GET /patients/id
      √ should return the Patient in Collection
    POST /patients
Patient added:{"mobile":353876278131,"gender":"female","age":24,"last":"Smith","first":"Eve","_id":"5a30cc9cd14aa74dc498b3f3"}
      √ should return confirmation message and update patients datastore
    PUT /patients/:id/visit
      √ should return all Patients with specified patient update visit by 1
     /DELETE/patients/:id
      √ should delete a object from patients database with given id


  5 passing (118ms)

4. mocha test/acceptance/ will test each page of the MedicalGP web Application and it should show results as follow:

 Patients page

DevTools listening on ws://127.0.0.1:12698/devtools/browser/53eb0ff9-b619-4ce9-ba6d-9a4dc94bd769
    √ shows the main header
    √ displays the patients (90ms)

  Demo

DevTools listening on ws://127.0.0.1:12968/devtools/browser/3f40d6e6-cb68-4875-b668-f859551426c4
    √ shows the main body
    √ shows the nav bar
    √ shows the buttons (66ms)

  Home page

DevTools listening on ws://127.0.0.1:12611/devtools/browser/0f5dbc0c-64d3-472d-bccd-fd7e7e74d118
    √ shows the main body
    √ shows the nav bar
    √ shows the buttons (40ms)
    √ shows the main image

  add Patient page

DevTools listening on ws://127.0.0.1:12615/devtools/browser/1efb5f94-38f0-40d6-bac8-40963f8885ba
    √ shows the nav bar on add patient page
    √ shows the main header
    √ accepts a patient (477ms)


  12 passing (10s)


## Acceptance Testing.

Acceptance testing with results is as follow:


 Patients page

DevTools listening on ws://127.0.0.1:12698/devtools/browser/53eb0ff9-b619-4ce9-ba6d-9a4dc94bd769
    √ shows the main header         test.it( 'shows the nav bar on add patient page'
    √ displays the patients (90ms)  test.it( 'accepts a patient'

  Demo

DevTools listening on ws://127.0.0.1:12968/devtools/browser/3f40d6e6-cb68-4875-b668-f859551426c4
    √ shows the main body       test.it('shows the main body'
    √ shows the nav bar         test.it( 'shows the nav bar'
    √ shows the buttons (66ms)  test.it( 'shows the buttons'

  Home page

DevTools listening on ws://127.0.0.1:12611/devtools/browser/0f5dbc0c-64d3-472d-bccd-fd7e7e74d118
    √ shows the main body       test.it('shows the main body'
    √ shows the nav bar         test.it( 'shows the nav bar'
    √ shows the buttons (40ms)  test.it( 'shows the buttons'
    √ shows the main image      test.it( 'shows the main image'

  add Patient page

DevTools listening on ws://127.0.0.1:12615/devtools/browser/1efb5f94-38f0-40d6-bac8-40963f8885ba
    √ shows the nav bar on add patient page
    √ shows the main header
    √ accepts a patient (477ms) -1. patient age
                                -2. patient gender
                                -3. patient first name


  12 passing (10s)



## Continuous Integration.

The URL of the Travis page for this app
(https://travis-ci.org/LukasSimko/MedicalGP)
(https://github.com/LukasSimko/MedicalGP/tree/ROLLE)

## Automated Deployment.

.... Specify the URL of the deployed app. Explain the steps a third party must perform to enable auto-deployment by Travis of your app . . .

