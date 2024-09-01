Feature: Negative Login as a owner

	Scenario Outline: Error message when login with empty phonenumber
		Given I am on the Mamikos homepage
		When I click on the Login button
		Then I select the Pemilik Kos option
		Then I enter my phone number as "<phoneNumber>"
		Then I delete the phone number
		Then I should see the "<errorMessage>"
		Then Login button is disabled

		Examples:
			| phoneNumber | errorMessage |
			| 0 | Nomor Handphone harus diisi. |

	Scenario Outline: Error message when login with invalid phone number
		Given I am on the Mamikos Homepage
		When I click on the Login button
		Then I select the Pemilik Kos option
		And I enter my phone number as "<phoneNumber>"
		Then I should see the "<errorMessage>"
		Then Login button is disabled

		Examples:
			| phoneNumber | errorMessage |
			| 0QWE!@# | Format Nomor Handphone salah. | 

	Scenario Outline: Maximum character of phone number
		Given I am on the Mamikos Homepage
		When I click on the Login button
		Then I select the Pemilik Kos option
		And I enter my phone number as "<maxPhoneNumber>"
		Then I should see the "<phoneNumber>"
		Then Login button is disabled

		Examples:
			| phoneNumber | maxPhoneNumber |
			| 08778808439522 | 0877880843952211 |

	Scenario Outline: Error message when login with empty password
		Given I am on the Mamikos Homepage
		When I click on the Login button
		Then I select the Pemilik Kos option
		And I enter my password as "<password>"
		And I delete the password
		Then I should see the "<errorMessage>"
		Then Login button is disabled

		Examples:
			| password | errorMessage |
			| A	| Password harus diisi. |

	Scenario Outline: Error message when login with less than 6 characters password
		Given I am on the Mamikos Homepage
		When I click on the Login button
		Then I select the Pemilik Kos option
		And I enter my password as "<password>"
		Then I should see the "<errorMessage>"
		Then Login button is disabled

		Examples:
			| password | errorMessage |
			| Angel	| Password minimal mengandung 6 karakter. |
			
