Feature: Mamikos Customer Login

  Scenario Outline: Successful login as a customer
    Given I am on the Mamikos Homepage
    When I click on the Login button
    Then I should see the Login Modal Container
    And I select the Pencari Kos option
    When I enter my phone number as "<phoneNumber>"
    And I enter my password as "<password>"
    And I click the Login button
    Then I should be redirected to the Homepage

    Examples:
      | phoneNumber  | password    |
      | 087788084395 | Angelica123 |
