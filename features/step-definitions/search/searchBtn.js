import { Given, When, Then } from "@wdio/cucumber-framework";
import homePage from "../../pageobjects/home.page";
import searchPage from "../../pageobjects/search.page";

Given(/^I am on the Mamikos homepage$/, async () => {
    await homePage.openHomepage();
    await browser.maximizeWindow();
});

When(/^I click on the search button$/, async () => {
    await homePage.searchBtn.click();
});

Then(/^I should see the search modal$/, async () => {
    await expect(searchPage.searchModal).toBeDisplayed();
});
