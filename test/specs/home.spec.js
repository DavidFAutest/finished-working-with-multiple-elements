const homePage = require('../pageobjects/home.page');

describe('Open Home Page', () => {
    it('should open home page', async () => {
        await homePage.open();

        await expect(homePage.listExamples).toBeElementsArrayOfSize({gte: 1});
    });
});