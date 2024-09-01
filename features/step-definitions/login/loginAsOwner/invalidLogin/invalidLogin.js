import { Given, When, Then } from "@wdio/cucumber-framework";
import homePage from "../../../../pageobjects/home.page";
import navbar from "../../../../pageobjects/navbar";
import loginModal from "../../../../pageobjects/loginModal";

Given(/^I am on the Mamikos Homepage$/, async () => {
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

Then(/^I enter my password as "(.*)"$/, async (password) => {
    await loginModal.passwordInputField.setValue(password);
});

Then(/^I click the Login button$/, async () => {
	await loginModal.loginButton.click();
});

Then(/^I should see the "(.*)"$/, async (errorMessage) => {
	await expect(loginModal.invalidCredErrorMsg).toHaveText(errorMessage);
});