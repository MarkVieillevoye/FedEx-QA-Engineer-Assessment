Feature: Verify the functionalities of additional flows of application

    Scenario Outline: After a successful result displayed for character search, if the search form is cleared and clicked Search, empty results list should be displayed
        Given The app is open on "localhost"
        When You search for character "<characterName>"
        Then Character details for "<characterName>" are displayed
        When Search form is cleared and clicked Search
        Then Previous search results are cleared

        Examples:
            | characterName |
            | Leia Organa   |

    Scenario Outline: After a successful result displayed for planet search, if the search form is cleared and clicked Search, empty results list should be displayed
        Given The app is open on "localhost"
        When You search for planet "<planetName>" with Enter key
        Then Planet details for "<planetName>" are displayed
        When Search form is cleared and clicked Search
        Then Previous search results are cleared

        Examples:
            | planetName |
            | Alderaan   |

    Scenario Outline: After a successful result displayed, if you switch to planet radio button and click search, Not Found should be displayed
        Given The app is open on "localhost"
        When You search for character "<characterName>"
        Then Character details for "<characterName>" are displayed
        When You switch from character to planet radio button and search
        Then Search result is displayed as Not Found

        Examples:
            | characterName |
            | Leia Organa   |