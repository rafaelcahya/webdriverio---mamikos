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

Then(/^I select the Pencari Kos option$/, async () => {
	await loginModal.pencariKosOption.click()
});

Then(/^I enter my password as "(.*)"$/, async (password) => {
	await loginModal.passwordInputField.setValue(password)
});

Then(/^I should see the "(.*)"$/, async (limitPasswordErrorMsg) => {
	await expect(loginModal.limitPasswordErrorMsgCustomer).toBeDisplayed()
	await expect(loginModal.limitPasswordErrorMsgCustomer).toHaveText(limitPasswordErrorMsg)
});

Then(/^Login button is disabled$/, async () => {
	await expect(loginModal.loginButton).toBeDisabled()
});
