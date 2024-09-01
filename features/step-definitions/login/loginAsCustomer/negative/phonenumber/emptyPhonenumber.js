import { Given, Then, When } from "@wdio/cucumber-framework";
import { expect } from '@wdio/globals'

import loginModal from '../../../../../pageobjects/loginModal.js';
import homePage from '../../../../../pageobjects/home.page.js';
import navbar from "../../../../../pageobjects/navbar.js";

Given(/^I am on the Mamikos Homepage$/, async () => {
    await homePage.openHomepage()
});

When(/^I click on the Login button$/, async () => {
    await navbar.navLoginBtn.click()
});

Then(/^I select the Pencari Kos option$/, async () => {
    await loginModal.pencariKosOption.click()
});

Then(/^I enter my phone number as "(.*)"$/, async (phoneNumber) => {
    await loginModal.phoneNumberInputField.setValue(phoneNumber)
});

Then(/^I delete the phone number$/, async () => {
    await browser.keys("Backspace")
});

Then(/^I should see the "(.*)"$/, async (errorMessage) => {
    await expect(loginModal.emptyPhoneNumberErrorMsg).toBeDisplayed()
	await expect(loginModal.emptyPhoneNumberErrorMsg).toHaveText(errorMessage)
});

Then(/^Login button is disabled$/, async () => {
	await expect(loginModal.loginButton).toBeDisabled();
});

