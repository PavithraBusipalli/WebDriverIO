describe('webdriveruniversity - contact us page', function () {
    // this.retries(3);

    beforeEach(async () => {
        await browser.url("/Contact-Us/contactus.html");
        console.log(`>>Browser Object: + ${JSON.stringify(browser)}`)
    });
    it.only('valida submission - submit all info', async function () {
        this.retries(1);

        const firstName = await $('//*[@name="first_name"]');
        const lastName = await $('//*[@name="last_name"]');
        const email = await $('//*[@name="email"]');
        const message = await $('//*[@name="message"]')
        const submitButton = await $('//input[@value="SUBMIT"]');

        await firstName.setValue("Pavi");
        await lastName.setValue("Reddy");
        await email.setValue('pavithra_busipalli@gmail.com');
        await message.setValue('I am Pavithra Reddy!!');

        // await submitButton.click();
        await browser.waitThenClick(submitButton);

        const successfulSubmissionHeader = $('#contact_reply > h1');
        console.log(`successfulSubmissionHeader Element: ` + JSON.stringify(await successfulSubmissionHeader));
        await expect(successfulSubmissionHeader).toHaveText('Thank You for your Message!');

        const successfulSubmissionHeader2 = await $('#contact_reply > h1').getText();
        await expect(successfulSubmissionHeader2).toEqual('Thank You for your Message!');

    });
    
//     it('invalid submission - dont submit all info', async () => {
        
//         await browser.pause(3000);

//         const firstName = await $('//*[@name="first_name"]');
//         await firstName.setValue("Pavi");
        
//         const lastName = await $('//*[@name="last_name"]');
//         await lastName.setValue("Reddy");

//         const message = await $('//*[@name="message"]')
//         await message.setValue('I am Pavithra Reddy!!');

//         const submitButton = await $('//input[@value="SUBMIT"]');
//         await submitButton.click();


//         const failedSubmission = await $('body').getText();

//         await expect(failedSubmission).toContain('Error: all fields are required');
//         await expect(failedSubmission).toContain('Error: Invalid email address');
// });
})