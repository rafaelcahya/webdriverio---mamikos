import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect } from '@wdio/globals'

import loginModal from '../../../../pageobjects/loginModal.js';
import homePage from '../../../../pageobjects/home.page.js';
import navbar from '../../../../pageobjects/navbar.js';

Given(/^I am on the Mamikos Homepage$/, async () => {
    await homePage.openHomepage()
});

When(/^I click on the Login button$/, async () => {
    await navbar.navLoginBtn.click()
});

Then(/^I should see the Login Modal Container$/, async () => {
    await expect(loginModal.loginModalContainer).toBeDisplayed();
});

Then(/^I select the Pencari Kos option$/, async () => {
    await loginModal.pencariKosOption.click()
});

Then(/^I enter my phone number as "(.*)"$/, async (phoneNumber) => {
    await loginModal.phoneNumberInputField.setValue(phoneNumber)
});

Then(/^I enter my password as "(.*)"$/, async (password) => {
    await loginModal.passwordInputField.setValue(password)
});

Then(/^I click the Login button$/, async () => {
    await loginModal.loginButton.click()
});

Then(/^I should be redirected to the Homepage$/, async () => {
    const homepageUrl = await browser.getUrl()
    expect(homepageUrl).toContain('https://mamikos.com/')
});
