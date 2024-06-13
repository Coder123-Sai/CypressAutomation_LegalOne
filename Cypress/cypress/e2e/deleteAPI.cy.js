describe('Analytics Service- DELETE API Call', () => {

    const endPoint = '/truncate';
    const GETendPoint = '/count';

    it('Verify DELETE API Call', () => {
        // deleteAPI is a custom command written inside commands.js
        cy.deleteAPI(endPoint).then((response => {
            expect(response.status).to.eq(204);
        }));
    });

    it('Verify GET API Call with valid parameters', () => {
        // cy.fixture is used to fetch the json data inside fixtures folder
        cy.fixture('getAPIParams.json').then((params) => {
            // getAPI is a custom command written inside commands.js
            cy.getAPI(GETendPoint, params).then((response => {
                expect(response.status).to.eq(200);
                expect(Number.isInteger(response.body.counter)).to.eq(true);
                expect(response.body.counter).to.eq(0);
            }));
        });
    });

    it('Verify DELETE API Call with Invalid endpoint', () => {
        // getAPI is a custom command written inside commands.js
        cy.getAPI(endPoint+"/abcd",).then((response => {
            expect(response.status).to.eq(404);
        }));
    });
});