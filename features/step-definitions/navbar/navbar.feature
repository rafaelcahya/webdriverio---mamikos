Feature: Navbar

	Scenario Outline: Navbar should be displayed
		Given I am on the Mamikos Homepage
		Then I should see the Navbar

	Scenario Outline: Navbar should have Mamikos Logo and navigate to the homepage
		Given I am on the Mamikos Homepage
		Then I should see the Mamikos Logo
		And I click on the Mamikos Logo
		Then I should be navigated to the homepage

	Scenario Outline: Navbar should have Product Button and show the dropdown menu
		Given I am on the Mamikos Homepage
		Then I should see the Product button
	
	Scenario Outline: Navbar should have Pusat Bantuan Button and navigate to the Pusat Bantuan page
		Given I am on the Mamikos Homepage
		Then I should see the Pusat Bantuan button
		And I click on the Pusat Bantuan button
		Then I should be navigated to the Pusat Bantuan page

	Scenario Outline: Navbar should have Syarat dan Ketentuan Button and navigate to the Syarat dan Ketentuan page
		Given I am on the Mamikos Homepage
		Then I should see the Syarat dan Ketentuan button
		And I click on the Syarat dan Ketentuan button
		Then I should be navigated to the Syarat dan Ketentuan page

	@runThis
	Scenario Outline: Navbar should have Login button and show the Login Modal
		Given I am on the Mamikos Homepage
		Then I should see the Login button
		And I click on the Login button
		Then I should see the Login Modal
		
