describe('locating elements', () => {
    beforeEach(async () => {
        await browser.maximizeWindow();
        await browser.url('https://selectors.webdriveruniversity.com/');
    });
    it('$ - locate element', async () => {
        
        await browser.pause(3000);
        await  browser.$("//a[@href='#portfolio']").click();

        const webdriverioButton = await $('[data-target="#portfolioModal1"]');
        await webdriverioButton.click();
        await browser.pause(3000);
    });

    it('$$ - locate elements', async () => {
        const expectedTitles = [
            "#",
            "First",
            "Last",
            "Handle",
            "1",
            "2",
            "3",
            "Firstname",
            "Lastname",
            "Age"
        ];
        const actualTitle = [];
        const tableHeaderTitles = await $$('//table//th');
        for(const title of tableHeaderTitles) {
            actualTitle.push(await title.getText());
        }
        expect(expectedTitles).toEqual(actualTitle);
    })
});