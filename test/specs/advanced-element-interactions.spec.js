describe('advanced element interactions - examples', () => {

    it('inputs', async() => {
        await browser.url("/Contact-Us/contactus.html");
        const firsNameTextField = $("[name='first_name']");
        await firsNameTextField.addValue('Pavii');
        await firsNameTextField.addValue('Is it Pavi!!');
        await firsNameTextField.setValue('ohh is ittt');
        await firsNameTextField.clearValue('Pavii');
        await browser.pause(2000);
    });

    it('dropdowns', async () => {
        await browser.url("/Dropdown-Checkboxes-RadioButtons/index.html");
        // Dropdown-1 (select by attribute)
        const programmingLanguage_Dropdown = await $('#dropdowm-menu-1');
        await programmingLanguage_Dropdown.selectByAttribute('value', 'python');
        await expect(programmingLanguage_Dropdown).toHaveValue('python');
        await browser.pause(2000);

        // Dropdown-2 (select by index)
        const programmingLanguage_Dropdown2 = await $('#dropdowm-menu-2');
        await programmingLanguage_Dropdown2.selectByIndex(2);
        await expect(programmingLanguage_Dropdown2).toHaveValue('TestNG', { ignoreCase: true});
        await browser.pause(2000);

        // Dropdown-3 (select by Visible Text)
        const programmingLanguage_Dropdown3 = await $('#dropdowm-menu-3');
        await programmingLanguage_Dropdown3.selectByVisibleText('CSS');
        await expect(programmingLanguage_Dropdown3).toHaveValue('CSS', { ignoreCase: true });
        await browser.pause(2000);
    });

    it('state commands', async () => {
        await browser.url("/Dropdown-Checkboxes-RadioButtons/index.html");
        const lettuceRadioButton = await $('[value="lettuce"]');
        const lettuceRadioButton_isDisplayed = await lettuceRadioButton.isDisplayed();
        await expect(lettuceRadioButton_isDisplayed).toEqual(true);
        await expect(lettuceRadioButton).toBeEnabled();

        const lettuceRadioButton_isClickable = await lettuceRadioButton.isClickable();
        await expect(lettuceRadioButton_isClickable).toEqual(true);

        const cabbageRadioButton = await $('[value="cabbage"]');
        const cabbageRadioButton_isEnabled = await cabbageRadioButton.isEnabled();
        await expect(cabbageRadioButton_isEnabled).toEqual(false);
        await expect(cabbageRadioButton).toBeDisabled();
    });

    it('actions', async () => {
        await browser.url("/Actions/index.html#");

        // drag and drop
        const element = await $('#draggable');
        const target = await $('#droppable');
        await element.dragAndDrop(target);

        // double-click
        const element1 = await $('#double-click');
        await element1.doubleClick();

        // mouse hover the elements
        await $("//button[text()='Hover Over Me First!']").moveTo();
        const firstLink = await $("(//*[text()='Link 1'])[1]");
        await firstLink.waitForClickable();

        await browser.pause(3000);
    });

    it.only('handling windows', async () => {
        await browser.url('https://www.webdriveruniversity.com/');
        await browser.newWindow("https://www.automationteststore.com/");
        
        let currentWindow_Title = await browser.getTitle();
        console.log(`>>Current Window Title: ${currentWindow_Title}`);
        await expect(await browser.getUrl()).toContain('automationteststore.com');

        await browser.switchWindow("webdriveruniversity.com");
        let currentWindow_Title1 = await browser.getTitle();
        console.log(`>>Parent window Title: ${currentWindow_Title1}`);
        await expect(await browser.getUrl()).toContain('webdriveruniversity.com');

        await $('#contact-us').click();
        await browser.switchWindow('automationteststore');
        await browser.closeWindow();

        await browser.switchWindow('contactus');
        await browser.closeWindow();
        
        await browser.switchWindow('webdriveruniversity');
        console.log(await browser.getTitle());
        await browser.pause(3000);
    })

})