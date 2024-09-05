import { Given, Then } from "@wdio/cucumber-framework";
import homePage from "../../pageobjects/home.page";
import navbar from "../../pageobjects/navbar";

Given(/^I am on the Mamikos Homepage", async () => {
	await homePage.openHomepage()
})

Then(/^I should see the Product button", async () => {
	await expect(navbar.productButton).toBeDisplayed()
})

