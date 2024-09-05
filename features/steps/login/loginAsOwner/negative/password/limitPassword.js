import { Given, Then, When } from "@wdio/cucumber-framework";
import homePage from "../../../../../pageobjects/home.page";
import loginModal from "../../../../../pageobjects/loginModal";
import navbar from "../../../../../pageobjects/navbar";

Given(/^I am on the Mamikos Homepage$/, async () => {
    await homePage.openHomepage()
});

When(/^I click on the Login button$/, async () => {
    await navbar.navLoginBtn.click()
});

Then(/^I select the Pemilik Kos option$/, async () => {
	await loginModal.pemilikKosOption.click()
});

Then(/^I enter my password as "(.*)"$/, async (password) => {
	await loginModal.passwordInputField.setValue(password)
});

Then(/^I should see the "(.*)"$/, async (errorMessage) => {
	await expect(loginModal.limitPasswordErrorMsgOwner).toBeDisplayed()
	await expect(loginModal.limitPasswordErrorMsgOwner).toHaveText(errorMessage)
});

Then(/^Login button is disabled$/, async () => {
	await expect(loginModal.loginButton).toBeDisabled()
});
