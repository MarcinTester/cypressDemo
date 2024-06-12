# CypressTests test

Project contains automated tests of web page https://www.saucedemo.com/ with use of Cypress.
Tests are executed by Github actions after every push to repo.
Automates test cases:
- Order 4 products
- Order empty cart
- Order product with Error_user
- Continue checkout without providing checkout all information
- Login and logout standard_user
- Login standard_user with incorrect password
- Login locked_out_user
- Home page elements check
- Open all product pages and verify product name
- Add and remove 2 products from card

Requrements:
Install Node.js

Install Cypress:

```
npm install cypress --save-dev

```

Install dependencies:

```
npm install

```
Open Cypress app:
```
npx cypress open
```

Run all tests:

```
npx cypress run
```
Run ui tests:
```
npm run uiTests
```

Run tests on specific browser: chrome, edge, firefox:
```
npm run uiTests-chrome
npm run uiTests-edge
npm run uiTests-firefox
```

### Test Raport
After each run, test raport is crated: cypress/reports

### In progress
- visual tests
- parallel tests with cypress-split and github actions
