import { Given, Then } from "@wdio/cucumber-framework";
import homePage from "../../pageobjects/home.page";
import navbar from "../../pageobjects/navbar";

Given(/^I am on the Mamikos Homepage", async () => {
	await homePage.openHomepage()
})

Then(/^I should see the Mamikos Logo", async () => {
	await expect(navbar.logo).toBeDisplayed()
})

Then(/^I click on the Mamikos Logo", async () => {
	await navbar.logo.click()
})

Then(/^I should be navigated to the homepage", async () => {
	await expect(browser).toHaveUrl("https://mamikos.com/")
})

