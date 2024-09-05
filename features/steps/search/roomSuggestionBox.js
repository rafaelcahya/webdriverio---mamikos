import { Given, Then, When } from "@wdio/cucumber-framework";
import homePage from "../../pageobjects/home.page.js";
import searchPage from "../../pageobjects/search.page.js";

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

Then(/^I input the keyword "([^"]*)"$/, async (keyword) => {
    await searchPage.searchField.setValue(keyword);
});

Then(/^I should see the suggestion box$/, async () => {
    await expect(searchPage.suggestionBox).toBeDisplayed();
});

Then(/^I scroll down to the room list$/, async () => {
    await searchPage.suggestionBoxAreaContainer.scrollIntoView();
});

Then(/^I should see the room list$/, async () => {
    await expect(searchPage.suggestionBoxRoomListContainer).toBeDisplayed();
});

Then(/^I click on the room list$/, async () => {
    await searchPage.suggestionBoxRoomList.click();
});

Then(/^I should see the detail room page$/, async () => {
    await expect(searchPage.detailsRoomPage).toBeDisplayed();
});
