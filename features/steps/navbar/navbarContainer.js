import { Given, Then } from "@wdio/cucumber-framework";
import homePage from "../../pageobjects/home.page";
import navbar from "../../pageobjects/navbar";

Given(/^I am on the Mamikos Homepage", async () => {
	await homePage.openHomepage()
});

Then(/^I should see the Navbar", async () => {
	await expect(navbar.navMainContainer).toBeDisplayed()
});