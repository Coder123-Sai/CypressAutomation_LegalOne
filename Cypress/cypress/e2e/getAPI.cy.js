describe('Analytics Service- GET API Call', () => {

    const endPoint ='/count';

    it('GET API Call -200 with valid parameters', () => {

        // cy.fixture is used to fetch the json data inside fixtures folder
        cy.fixture('getAPIParams.json').then((params)=>{
            // getAPI is a custom command written inside commands.js
            cy.getAPI(endPoint, params).then((response => {
                expect(response.status).to.eq(200);
                expect(Number.isInteger(response.body.counter)).to.eq(true);
            }));

        });
    });

    it('GET API Call - 400 with Invalid parameters', () => {
        // getAPI is a custom command written inside commands.js
        cy.getAPI(endPoint, {"serviceNames": "abcefg"}).then((response => {
            expect(response.status).to.eq(400);
            expect(response.body.title).to.eq('Invalid request content.');
        }));
    });

    it('GET API Call - Verify the status code parameter with Invalid value', () => {
        // getAPI is a custom command written inside commands.js
        cy.getAPI(endPoint, {'statusCode': 99}).then((response => {
            expect(response.status).to.eq(400);
            expect(response.body.title).to.eq('Validation failed.');
            expect(response.body.detail).to.contain('Provided HTTP status code is: 99. It must be between 100 and 599');
        }));
    });
});