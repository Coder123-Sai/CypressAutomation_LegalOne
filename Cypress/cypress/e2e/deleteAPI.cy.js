describe('Analytics Service- DELETE API Call', () => {

    const endPoint = '/truncate';

    it('DELETE API Call -204', () => {
        // deleteAPI is a custom command written inside commands.js
        cy.deleteAPI(endPoint).then((response => {
            expect(response.status).to.eq(204);

            // To check the count value after delete.
            cy.fixture('getAPIParams.json').then((params) => {
                // getAPI is a custom command written inside commands.js
                cy.getAPI('/count', params).then((response => {
                    expect(response.status).to.eq(200);
                    expect(Number.isInteger(response.body.counter)).to.eq(true);
                    expect(response.body.counter).to.eq(0);
                }));

            });

        }));
    });
});