import ContactUsPage from '../pageObjects/webdriveruniversity/contact-us-page';

describe('webdriveruniversity - contact us page', function () {
    // this.retries(3);

    beforeEach(async () => {
        await ContactUsPage.open();
    });
    it('valida submission - submit all info', async function () {
        this.retries(1);
        ContactUsPage.submitForm('Pavi', 'sam', 'pavi@gmail.com', 'Hello how are you!!');

        const successfulSubmissionHeader = $('#contact_reply > h1');
        await expect(successfulSubmissionHeader).toHaveText('Thank You for your Message!');
    });
    
    it('invalid submission - dont submit all info', async () => {

        ContactUsPage.submitForm('sam', 'lucky', "", "I do not want to comment it!");

        await expect(failedSubmission).toContain('Error: all fields are required');
        await expect(failedSubmission).toContain('Error: Invalid email address');
});
})