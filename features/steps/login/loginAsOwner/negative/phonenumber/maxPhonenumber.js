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

Then(/^I enter my phone number as "(.*)"$/, async (maxPhoneNumber) => {
    await loginModal.phoneNumberInputField.setValue(maxPhoneNumber)
});

Then(/^I should see the "(.*)"$/, async (phoneNumber) => {
    await expect(loginModal.phoneNumberInputField).toHaveValue(phoneNumber)
});

Then(/^Login button is disabled$/, async () => {
	await expect(loginModal.loginButton).toBeDisabled();
});