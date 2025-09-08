describe('wait commands - examples', () => {
    beforeEach(async () => {
        await browser.maximizeWindow();
        await browser.url('/Ajax-Loader/index.html');
    });

    // it('pause command', async () => {
    //     const clickMe_Button = await $('//p[text()="CLICK ME!"]/..');
    //     await browser.pause(5000);
    //     await clickMe_Button.click();
    //     await browser.pause(1500);
    // });

    // it('waitfor', async() => {
    //     const clickMe_button = await $('#button1');
    //     // await clickMe_button.waitForClickable({timeout: 9000});
    //     await clickMe_button.waitForClickable();
    // });

    // it.only('waitFor', async () => {
    //     const clickMe_Button = await $('#button1');
    //     await clickMe_Button.waitForDisplayed();
    // });

    // it.only('waitForExist', async () => {
    //     const clickMe_Button = await $('#button1');
    //     await clickMe_Button.waitForExist();
    //     await clickMe_Button.click();
    // })

    it('waitUntil', async () => {
        await browser.url('/Accordion/index.html');
        const loadingStatus_UI = await $('#text-appear-box');
        await loadingStatus_UI.waitUntil(async function() {
            return (await this.getText()) === 'HELLO WORLD!'
        },
        {
            timeout: 15000,
            timeoutMsg: 'expected text to be different after 1 seconds.'
        }
    )
    })
})