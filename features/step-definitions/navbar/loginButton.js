import { Given, Then } from "@wdio/cucumber-framework";
import homePage from "../../pageobjects/home.page";
import navbar from "../../pageobjects/navbar";
import loginModal from "../../pageobjects/loginModal";

Given(/^I am on the Mamikos Homepage$/, async () => {
	await homePage.openHomepage()
})

Then(/^I should see the Login button$/, async () => {
	await expect(navbar.navLoginButton).toBeDisplayed()
})

Then(/^I click on the Login button$/, async () => {
	await navbar.navLoginButton.click()
})

Then(/^I should see the Login Modal$/, async () => {
	await expect(loginModal.loginModalContainer).toBeDisplayed()
})
