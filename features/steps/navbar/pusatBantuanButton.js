import { Given, Then } from "@wdio/cucumber-framework";
import navbar from "../../pageobjects/navbar";
import homePage from "../../pageobjects/home.page";

Given(/^I am on the Mamikos Homepage", async () => {
	await homePage.openHomepage()
})

Then(/^I should see the Pusat Bantuan button", async () => {
	await expect(navbar.pusatBantuanButton).toBeDisplayed()
})

Then(/^I click on the Pusat Bantuan button", async () => {
	await navbar.pusatBantuanButton.click()
})

Then(/^I should be navigated to the Pusat Bantuan page", async () => {
	await expect(browser).toHaveUrl("https://help.mamikos.com/")
})