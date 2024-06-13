describe('Analytics Service- GET API Call', () => {

    const endPoint = '/count';

    it('Verify GET API Call -200 with valid parameters', () => {
        // cy.fixture is used to fetch the json data inside fixtures folder
        cy.fixture('getAPIParams.json').then((params) => {
            // getAPI is a custom command written inside commands.js
            cy.getAPI(endPoint, params).then((response => {
                expect(response.status).to.eq(200);
                expect(Number.isInteger(response.body.counter)).to.eq(true);
            }));

        });
    });

    it('Verify GET API Call -200 with no parameters', () => {
        // getAPI is a custom command written inside commands.js
        cy.getAPI(endPoint).then((response => {
            expect(response.status).to.eq(200);
            expect(Number.isInteger(response.body.counter)).to.eq(true);
        }));
    });

    it('Verify GET API Call - 400 with Invalid parameters', () => {
        // getAPI is a custom command written inside commands.js
        cy.getAPI(endPoint, { "serviceNames": "abcefg" }).then((response => {
            expect(response.status).to.eq(400);
            expect(response.body.title).to.eq('Invalid request content.');
        }));
    });

    it('Verify GET API Call - 200 with Invalid Start Date', () => {
        // getAPI is a custom command written inside commands.js
        cy.getAPI(endPoint, { "startDate": "45/29988/001" }).then((response => {
            expect(response.status).to.eq(503);
            expect(response.body.title).to.eq('Something went wrong.');

        }));
    });

    it('Verify GET API Call - 200 with Blank Start Date', () => {
        // getAPI is a custom command written inside commands.js
        cy.getAPI(endPoint, { "startDate": "" }).then((response => {
            expect(response.status).to.eq(200);
            expect(Number.isInteger(response.body.counter)).to.eq(true);
        }));
    });

    it('Verify GET API Call - 200 with Invalid End Date', () => {
        // getAPI is a custom command written inside commands.js
        cy.getAPI(endPoint, { "endDate": "45/29988/001" }).then((response => {
            expect(response.status).to.eq(503);
            expect(response.body.title).to.eq('Something went wrong.');
        }));
    });

    it('Verify GET API Call - 200 with Blank End Date', () => {
        // getAPI is a custom command written inside commands.js
        cy.getAPI(endPoint, { "endDate": "" }).then((response => {
            expect(response.status).to.eq(200);
            expect(Number.isInteger(response.body.counter)).to.eq(true);
        }));
    });

    it('Verify GET API Call - 400 with Invalid statusCode', () => {
        // getAPI is a custom command written inside commands.js
        cy.getAPI(endPoint, { 'statusCode': 99 }).then((response => {
            expect(response.status).to.eq(400);
            expect(response.body.title).to.eq('Validation failed.');
            expect(response.body.detail).to.contain('Provided HTTP status code is: 99. It must be between 100 and 599');
        }));
    });

    it('Verify GET API Call - 400 with Blank statusCode', () => {
        // getAPI is a custom command written inside commands.js
        cy.getAPI(endPoint, { 'statusCode': '' }).then((response => {
            expect(response.status).to.eq(400);
            expect(response.body.title).to.eq('Validation failed.');
            expect(response.body.detail).to.contain('Provided HTTP status code is: 0. It must be between 100 and 599');
        }));
    });

    it('Verify GET API Call - 400 with Start Date > End Date', () => {
        // getAPI is a custom command written inside commands.js
        cy.getAPI(endPoint, { 'startDate': '2023-11-04T19:55:41Z', 'endDate': '2009-11-04T19:55:41Z' }).then((response => {
            expect(response.status).to.eq(400);
            expect(response.body.title).to.eq('Validation failed.');
        }));
    });

    it('Verify GET API Call - 404 with Invalid endpoint', () => {
        // getAPI is a custom command written inside commands.js
        cy.getAPI(endPoint+"/abcd",).then((response => {
            expect(response.status).to.eq(404);
        }));
    });
});