import { Given, Then, When } from "@wdio/cucumber-framework";
import homePage from "../../../../../pageobjects/home.page";
import navbar from "../../../../../pageobjects/navbar";
import loginModal from "../../../../../pageobjects/loginModal";

Given(/^I am on the Mamikos homepage$/, async () => {
    await homePage.openHomepage()
});

When(/^I click on the Login button$/, async () => {
    await navbar.navLoginBtn.click();
});

Then(/^I select the Pemilik Kos option$/, async () => {
	await loginModal.pemilikKosOption.click();
});

Then(/^I enter my phone number as "(.*)"$/, async (phoneNumber) => {
    await loginModal.phoneNumberInputField.setValue(phoneNumber);
});

Then(/^I delete the phone number$/, async () => {
	await browser.keys("Backspace");
});

Then(/^I should see the "(.*)"$/, async (errorMessage) => {
	await expect(loginModal.emptyPhoneNumberErrorMsg).toBeDisplayed();
	await expect(loginModal.emptyPhoneNumberErrorMsg).toHaveText(errorMessage);
});

Then(/^Login button is disabled$/, async () => {
	await expect(loginModal.loginButton).toBeDisabled();
});