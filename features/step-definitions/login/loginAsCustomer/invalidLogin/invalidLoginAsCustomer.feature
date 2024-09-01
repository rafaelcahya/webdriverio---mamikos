Feature: Invalid login as a customer

Scenario Outline: Error message when login with invalid credentials
	Given I am on the Mamikos Homepage
	When I click on the Login button
	Then I select the Pencari Kos option
	And I enter my phone number as "<phoneNumber>"
	And I enter my password as "<password>"
	And I click the Login button
	Then I should see the "<errorMessage>"
	
	Examples:
		| phoneNumber | password | errorMessage |
		| 087788084395 | Angelica123456 | Nomor dan password tidak sesuai |
	