describe('async vs sync - webdriverio', () => {
    it('async vs sync', () => {
        browser.url('/');

        expect(browser).toHaveUrl("Hello World!")
    });
});