Feature: Search Functionality
	Scenario Outline: Should be able to open the search modal
	Given I am on the Mamikos homepage
	When I click on the search button
	Then I should see the search modal

	Scenario Outline: Should be able to back to homepage on clicking back button
	Given I am on the Mamikos homepage
	When I click on the search button
	Then I should see the search modal
	And I click on the back button
	Then I should be on the Mamikos homepage
	
	Scenario Outline: Should be able to search the keyword and show the suggestion
	Given I am on the Mamikos homepage
	When I click on the search button
	Then I should see the search modal
	And I input the keyword "<keyword>"
	Then I should see the suggestion box

	Examples:
	| keyword |
	| binus |
	@search
	Scenario Outline: Should be able to clear the search field and hide the suggestion
	Given I am on the Mamikos homepage
	When I click on the search button
	Then I should see the search modal
	And I input the keyword "<keyword>"
	Then I should see the suggestion box
	And I click on the clear button
	Then I should see the suggestion box is hidden

	Examples:
	| keyword |
	| binus |
	@search
	Scenario Outline: Should be able to show the area list in the suggestion box and navigate to area detail page
	Given I am on the Mamikos homepage
	When I click on the search button
	Then I should see the search modal
	And I input the keyword "<keyword>"
	Then I should see the suggestion box
	And I click on the area list
	Then I should see the area detail page

	Examples:
	| keyword |
	| binus |
	
	Scenario Outline: Should be able to show the search result list in the suggestion box and navigate to landing page
	Given I am on the Mamikos homepage
	When I click on the search button
	Then I should see the search modal
	And I input the keyword "<keyword>"
	Then I should see the suggestion box
	And I click on the search result list
	Then I should see the landing page

	Examples:
	| keyword |
	| binus |
	
	Scenario Outline: Should be able to show the room list in the suggestion box and navigate to landing page
	Given I am on the Mamikos homepage
	When I click on the search button
	Then I should see the search modal
	And I input the keyword "<keyword>"
	Then I should see the suggestion box
	Then I scroll down to the room list
	Then I should see the room list
	And I click on the room list
	Then I should see the detail room page

	Examples:
	| keyword |
	| binus |

