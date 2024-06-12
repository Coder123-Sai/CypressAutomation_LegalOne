# Cypress API Test Automation Framework for Analytics Service

API Testing Framework using `Cypress`

## 🚀 Description:

Automated (`GET`, `DELETE`) operations using `Cypress`

## 🚀 Prerequisites:

- [nodejs](https://nodejs.org/en/)
- [npm](https://docs.npmjs.com/about-npm)
- ### analytics-service has to be UP and running [analytics-service-main\README.md]

## 🚀 Test Execution Steps:

- Clone the repository `ANALYTICS-SERVICE-MAIN`
- Move to the `Cypress` directory:
```commandline
cd .\Cypress\
```

## 🚀 Test Execution:

- To run the tests againt the terminal

```commandline
npm run cypress:run
```

- To run the tests against the [Cypress Test Runner](https://docs.cypress.io/guides/core-concepts/cypress-app#The-Test-Runner):

```commandline
npm run cypress:open
```

- On [Cypress Test Runner](https://docs.cypress.io/guides/core-concepts/cypress-app#The-Launchpad):
  - Select `E2E Testing`
  - Choose a browser: `Chrome` or `Electron`
  - Click on `Start E2E Testing in {browser}`
  - Once the test runner has loaded, click on the spec files i.e., `getAPI.cy.js` and `deleteAPI.cy.js` to run the tests