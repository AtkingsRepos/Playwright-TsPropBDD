Feature: Setup storage state so that login details could be re-used

@Setup
  Scenario: admin successfully logs in and login state is stored
    Given As a User, I navigate to the moodle login webpage
    When I enter my credentials
    Then I should be logged in
    #And I can log out successfully
