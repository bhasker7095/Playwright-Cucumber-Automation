Feature: SauceDemo Checkout
  # for CI/CD challenge
    Background:
        Given I am logged in to SauceDemo
        When I add the jacket to the cart
        And I open the cart
        And I proceed to checkout

    @checkout
    Scenario: Enter customer details using rowsHash
        When I enter checkout details
            | firstName  | Bhaskara |
            | lastName   | Rao      |
            | postalCode | 530001   |
        Then I should reach the checkout overview