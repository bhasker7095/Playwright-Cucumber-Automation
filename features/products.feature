@products

Feature: SauceDemo Products

    Background:
        Given I am logged in to SauceDemo

        # background executes before every scenario in this feature

    @smoke
    Scenario: Verify products page heading
        Then I should see products  heading

    @smoke
    Scenario: Verify produt count
        Then I should see 6 products

    Scenario: Sort products from low  to high
        When I sort the products from low to high
        Then products should be sorted  from low to high

    Scenario: Sort the products from high to low
        When I sort products from high to low
        Then produts should be sorted from high to low