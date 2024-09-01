import { Given, Then, When } from "@wdio/cucumber-framework";
import homePage from "../../../../pageobjects/home.page";
import loginModal from "../../../../pageobjects/loginModal";
import navbar from "../../../../pageobjects/navbar";

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

Then(/^I enter my password as "(.*)"$/, async (password) => {
	await loginModal.passwordInputField.setValue(password)
});

Then(/^I click the Login button$/, async () => {
	await loginModal.loginButton.click()
});

Then(/^I should see the "(.*)"$/, async (errorMessage) => {
	await expect(loginModal.invalidCredErrorMsg).toBeDisplayed()
	await expect(loginModal.invalidCredErrorMsg).toHaveText(errorMessage)
});

Then(/^Login button is disabled$/, async () => {
	await expect(loginModal.loginButton).toBeDisabled()
});
