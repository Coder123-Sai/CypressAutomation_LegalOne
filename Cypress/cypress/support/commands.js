// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

/**
 * @params endpoint, queryParams
 * @perfoms The method is used to perfomr the GET api call
 */
Cypress.Commands.add('getAPI', (endPoint, queryParams) => {
    cy.request({
        method: 'GET',
        url: endPoint,
        qs: queryParams,
        failOnStatusCode: false
    })
})


/**
 * @params endpoint
 * @perfoms The method is used to perfomr the DELETE api call
 */
Cypress.Commands.add('deleteAPI', (endPoint) => {
    cy.request({
        method: 'DELETE',
        url: endPoint,
        failOnStatusCode: false
    })
})