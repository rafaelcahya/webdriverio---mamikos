Feature: Flashsale section
	Scenario Outline: I should be able to see the flashsale section
	Given I am on the Mamikos homepage
	When I scroll down to the flashsale section
	Then I should see the flashsale section

	Scenario Outline: I should be able to see the previous product
	Given I am on the Mamikos homepage
	When I scroll down to the flashsale section
	Then I should see the flashsale section
	Then I should see the previous button
	Then I click the previous button
	Then I should see the previous product
	And I cannot click the previous button

	Scenario Outline: I should be able to see the next product
	Given I am on the Mamikos homepage
	When I scroll down to the flashsale section
	Then I should see the flashsale section
	Then I should see the next button
	Then I click the next button
	Then I should see the next product
	And I cannot click the next button