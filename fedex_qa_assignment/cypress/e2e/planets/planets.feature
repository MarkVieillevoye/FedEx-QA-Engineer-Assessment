Feature: Planets

Background:
    Given I open the TntAssugnment webpage

  # @skip
  Scenario Outline: Search valid planets
    When I search for "<Planet>"
    Then I should be able to view the "<Population>", "<Climate>" and "<Gravity>" of the planet
    Examples:
      | Planet      | Population    | Climate               | Gravity       |
      | Alderaan    | 2000000000    | temperate             | 1 standard    |
      # | Hoth        | unknown       | frozen                | 1.1 standard  |
      # | Tatooine    | 200000        | arid                  | 1 standard    |
      # | Polis Massa | 1000000       | artificial temperate  | 0.56 standard |
   
  # @skip 
  Scenario Outline: Search invalid planets
    When I search for "<Planet>"
    Then I should be able to see “Not found” in the results
    Examples:    
      | Planet     |
      | Earth      |
      | HD 189733b |
      