@API
Feature: Characters API

  Scenario: Fetch data for a character using API and verify it
    Given I want to execute Star Wars GET api for character "Chewbacca"
    Then Verify response status code is 200
    And Verify response details for character "Chewbacca"
