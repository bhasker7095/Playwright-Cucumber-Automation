Feature: SauceDemo Data Tables

    Background:
        Given I am logged in to SauceDemo

    Scenario: Add multiple products using hashes
        When I add these  products  to the cart
            | productName             |
            | Sauce labs Backpack     |
            | Sauce labs Bike light   |
            | Sauce labs Bolt T-Shirt |
        Then I should see 3 items in the cart
# interface level changes
