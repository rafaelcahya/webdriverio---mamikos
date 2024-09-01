import { Given, Then, When } from "@wdio/cucumber-framework";
import searchPage from "../../pageobjects/search.page";
import homePage from "../../pageobjects/home.page";

Given(/^I am on the Mamikos homepage$/, async () => {
    await homePage.openHomepage()
	await browser.maximizeWindow()
});

When(/^I click on the search button$/, async () => {
    await homePage.searchBtn.click();
});

Then(/^I should see the search modal$/, async () => {
    await expect(searchPage.searchModal).toBeDisplayed();
});

Then(/^I input the keyword "(.*)"$/, async (keyword) => {
    await searchPage.searchField.setValue(keyword);
});

Then(/^I should see the suggestion box$/, async () => {
    await expect(searchPage.suggestionBox).toBeDisplayed();
});

Then(/^I should see the See More button$/, async () => {
    await expect(searchPage.seeMoreBtn).toBeDisplayed();
});

Then(/^I click on the See More button$/, async () => {
    await searchPage.seeMoreBtn.click();
});

Then(/^I should move to the bottom of the search modal$/, async () => {
    await expect(searchPage.searchContent).toBeDisplayed();
	await browser.pause(3000)
});

