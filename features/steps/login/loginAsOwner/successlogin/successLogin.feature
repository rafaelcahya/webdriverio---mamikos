Feature: Success Login as Owner

	Scenario Outline: Success Login as Owner
		Given I am on the Mamikos Homepage
		When I click on the Login button
		Then I select the Pemilik Kos option
		And I enter my phone number as "<phoneNumber>"
		And I enter my password as "<password>"
		And I click the Login button
		Then I should be redirected to the Homepage

		Examples:
			| phoneNumber | password |
			| 085179906395 | Angelica123 |