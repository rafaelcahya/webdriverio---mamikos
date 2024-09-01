import { Given, Then } from "@wdio/cucumber-framework";
import navbar from "../../pageobjects/navbar";
import homePage from "../../pageobjects/home.page";

Given(/^I am on the Mamikos Homepage$/, async () => {
	await homePage.openHomepage()
})

Then(/^I should see the Syarat dan Ketentuan button$/, async () => {
	await expect(navbar.syaratDanKetentuanButton).toBeDisplayed()
})

Then(/^I click on the Syarat dan Ketentuan button$/, async () => {
	await navbar.syaratDanKetentuanButton.click()
})

Then(/^I should be navigated to the Syarat dan Ketentuan page$/, async () => {
	await expect(browser).toHaveUrl("https://help.mamikos.com/post/syarat-dan-ketentuan-umum")
})
