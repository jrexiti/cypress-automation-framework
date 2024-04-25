Feature: Webdriver - Contact Us Page


    Scenario: Valid contact us form submission
        Given user navigates to homepage
        When user clicks on the contach us button
        And user enters a first name
        And user enters a last name
        And user enters an email address
        And user enters a comment
        And user clicks on the submit button
        Then user should be presented with successful submission messgage