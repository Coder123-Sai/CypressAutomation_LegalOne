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