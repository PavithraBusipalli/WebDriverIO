describe('advanced element interactions - examples', () => {
    beforeEach(async function() {
        await browser.maximizeWindow();
    });

    it('inputs', async () => {
        await browser.url('/Contact-Us/contactus.html');
        const firstName = await $('input[name="first_name"]');
        const lastName = await $('input[name="last_name"]');
        const eamilAddress = await $('input[name="email"]');
        const comments = await $('textarea[name="message"]');
        const submitButton = await $('input[type="submit"]');

        await firstName.setValue('Pavi');
        await lastName.setValue('Reddy');

        await firstName.clearValue();

        await eamilAddress.setValue('pavi@gmail.com');
        await comments.setValue('Pavi is a good girl');
        await submitButton.click();

        
    })

    it('dropdowns', async () => {
        await browser.url('/Dropdown-Checkboxes-RadioButtons/index.html');
        const programmingLanguageDropdownMenu = await $('#dropdowm-menu-1');
        await programmingLanguageDropdownMenu.selectByAttribute('value', 'python');
        await expect(programmingLanguageDropdownMenu).toHaveValue('python');
        await browser.pause(2000);

        const techDropdownMenu = await $('#dropdowm-menu-2');
        await techDropdownMenu.selectByIndex(1);
        await expect(techDropdownMenu).toHaveValue('MAVEN', {ignoreCase: true});
        await browser.pause(2000);

        const frontendLangDropdownMenu = await $('#dropdowm-menu-3');
        await frontendLangDropdownMenu.selectByVisibleText('CSS');
        await expect(frontendLangDropdownMenu).toHaveValue('CSS', {ignoreCase: true});
        await browser.pause(2000);

    });

    it('state commnads - Radio buttons', async () => {
        await browser.url('/Dropdown-Checkboxes-RadioButtons/index.html');
        const lettuceRadioBtn = await $('[value="lettuce"]');
        const lettuceRadioBtn_isDisplayed = await lettuceRadioBtn.isDisplayed();
        await expect(lettuceRadioBtn_isDisplayed).toEqual(true);
        await expect(lettuceRadioBtn).toBeClickable();

        const lettuceRadioBtn_isClickable = await lettuceRadioBtn.isClickable();
        await expect(lettuceRadioBtn_isClickable).toEqual(true);

        const cabbageButton = await $('[value="cabbage"]');
        const cabbageButton_isDisplayed = await cabbageButton.isDisplayed();
        const cabbageButton_isEnabled = await cabbageButton.isEnabled();
        await expect(cabbageButton_isEnabled).toEqual(false);
        await expect(cabbageButton_isDisplayed).toEqual(true);
        await expect(cabbageButton).toBeDisabled();
    });

    it('mouse hover', async () => {
        await browser.url('/Actions/index.html#');

        // Drag & Drop
        const element = await $('#draggable');
        const target = await $('#droppable');
        await element.dragAndDrop(target);
        await browser.pause(3000);

        // double click
        const doubleClick_Button = await $("#double-click");
        await doubleClick_Button.doubleClick();
        await browser.pause(3000);

        // mouse hover 
        const moustHoverArea = await $("//button[text()='Hover Over Me First!']");
        await moustHoverArea.moveTo();
        const firstLink = await $("(//*[text()='Link 1'])[1]");
        await firstLink.waitForClickable();
        await firstLink.click();
        await browser.pause(3000);
        
    });

    it('')
});