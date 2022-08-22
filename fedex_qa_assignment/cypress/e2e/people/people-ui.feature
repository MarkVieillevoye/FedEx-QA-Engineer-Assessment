@UI
Feature: Characters UI
    
Background:
    Given I open the TntAssugnment webpage

    Scenario: Search Characters
        When I search for "<name>"
        Then I expect data for each of them to be returned
        Then I should be able to see his or her "<Gender>", "<Birth year>", "<Eye color>" and "<Skin color>" 
        Examples:
        | name           | Gender | Birth year | Eye color | Skin color  |
        | Luke Skywalker | male   | 19BBY      | blue      | fair        |
        | Leia Organa    | female | 19BBY      | brown     | light       |
        | r2             | n/a    | 33BBY      | red       | white, blue |
        | Darth          | male   | 41.9BBY    | yellow    | white       |
        
        
    Scenario Outline: Search invalid people
        When I seach for the following people
        | name    |
        | Spock   |
        | Sulu    |
        Then I should be able to see “Not found” in the results