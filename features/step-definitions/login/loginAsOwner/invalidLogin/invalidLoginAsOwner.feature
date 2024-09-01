Feature: Invalid Login as Owner

	Scenario Outline: Error message when login with invalid credentials
		Given I am on the Mamikos Homepage
		When I click on the Login button
		Then I select the Pemilik Kos option
		Then I enter my phone number as "<phoneNumber>"
		Then I enter my password as "<password>"
		Then I click the Login button
		Then I should see the "<errorMessage>"
		
		Examples:
			| phoneNumber | password | errorMessage |
			| 085179906395 | Angelica123456 | Nomor dan password tidak sesuai |