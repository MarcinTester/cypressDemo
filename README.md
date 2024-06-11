# CypressTests test

Project contains automated tests of web page https://www.saucedemo.com/ with use of Cypress 
Automates test cases:
- Add and remove from card
- Order all products
- Order product with Error_user
- Continue checkout without providing checkout information
- Login and logout standard_user
- Login standard_user with incorrect password
- Login locked_out_user
- Home page elements quick check
- Open all product pages

Requrements:
Install Node.js



Install Cypress:

```
npm install cypress --save-dev

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
npm run uiTests-Chrome
npm run uiTests-edge
npm run uiTests-firefox
```

### Test Raport
After each run, test raport is crated: cypress/reports
