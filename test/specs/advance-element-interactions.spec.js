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

    it('handling window', async () => {
        await browser.url("https://www.webdriveruniversity.com/");
        await browser.newWindow("https://www.automationteststore.com/");

        let currentWindow_Title = await browser.getTitle();
        console.log(`>>Current Window Title: ${currentWindow_Title}`);
        await expect(browser).toHaveUrl(expect.stringContaining('automationteststore'));
        await browser.pause(2000);

        await browser.switchWindow("https://www.webdriveruniversity.com/");
        let parentWindowTitle = await browser.getTitle();
        console.log(`>>Parent Window Title: ${parentWindowTitle}`);
        await expect(browser).toHaveTitle(expect.stringContaining('Automation & AI Testing Courses by Gianni Bruno | WebDriver University'))

        await $('#contact-us').click();
        await browser.pause(2000);
        await browser.switchWindow("https://www.automationteststore.com/");
        await browser.closeWindow();

        await browser.switchWindow("contactus");
        await browser.closeWindow();

        await browser.switchWindow('webdriveruni');
        console.log(await browser.getTitle());
        await browser.pause(3000);
    });

    it('IFrames', async () => {
        await browser.url("/IFrame/index.html");
        const iframe = await $('#frame');
        await browser.switchToFrame(iframe);
        await $("//a[text()='Our Products']").click();
        await browser.pause(3000);
        await browser.switchToParentFrame();
        await browser.pause(3000);
    });

    it('Alerts', async () => {
        await browser.url("/Popup-Alerts/index.html");
        await $('#button1').click();
        await browser.waitUntil(async () => {
            try {
                await browser.getAlertText();
                return true;
            } catch (e) {
                return false;
            }
        }, { timeout: 5000, timeoutMsg: 'expected alert to be present' });
        await browser.acceptAlert();
        await $('#button4').click();
        const alertText = await browser.getAlertText();
        await expect(alertText).toEqual('Press a button!');
        browser.acceptAlert();
        await expect($('#confirm-alert-text')).toHaveText('You pressed OK!');
        await browser.pause(3000);
    });

    it('file upload', async () => {
        await browser.url("/File-Upload/index.html");
        await $('#myFile').addValue(`${process.cwd()}\\data\\dummy_file.txt`);
        await browser.pause(2000);
        await $('#submit-button').click();
        await browser.pause(2000);
    });
    
    it('JS', async () => {
        await browser.url("/Hidden-Elements/index.html");
        await browser.execute(() => {
            return document.getElementById('not-displayed').setAttribute("id", "");
        });

        await browser.execute(() => {
            return document.body.style.backgroundColor = 'tomato';
        })
        await browser.pause(3000);
    })
});