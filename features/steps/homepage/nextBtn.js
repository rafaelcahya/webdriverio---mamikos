import { Given, Then, When } from "@wdio/cucumber-framework";
import homePage from "../../pageobjects/home.page";

Given(/^I am on the Mamikos homepage$/, async () => {
    await homePage.openHomepage()
	await browser.maximizeWindow()
})

When(/^I scroll down to the flashsale section$/, async () => {
    await browser.execute(() => {
        window.scrollBy(0, 500)
    });
});

Then(/^I should see the flashsale section$/, async () => {
    await homePage.flashsaleContainer.isDisplayed();
    await expect(homePage.flashsaleContainer).toBeDisplayed();
})

Then(/^I should see the next button$/, async () => {
	await homePage.nextBtn.isDisplayed()
})

Then(/^I click the next button$/, async () => {
	await homePage.nextBtn.click()
})

Then(/^I should see the next product$/, async () => {
	await homePage.flashsaleProduct.isDisplayed()
})

Then(/^I cannot click the next button$/, async () => {
	await homePage.nextBtn.isEnabled()
})