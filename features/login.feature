Feature: SauceDemo Login


    Scenario Outline: Login with different credentials
        Given I open the SauceDemo login page
        When I enter username "<username>" and password "<password>"
        And I click the login button
        Then I should see "<result>"

        Examples:
            | username      | password       | result        |
            | standard_user | secret_sauce   | Products      |
            | standard_user | wrong_password | Error message |

            # update login feature
