#Complete siguiendo las instrucciones del taller.
Feature: Sign in into losestudiantes
    As an user I want to register myself within losestudiantes website in order to rate teachers

Scenario: Sign in failed
    Given I go to losestudiantes home screen
    When I open the login screen
    And I fill only name and email
    And I try to sign in
    Then I expect to the page ask for email

Scenario: Sign in failed
    Given I go to losestudiantes home screen
    When I open the login screen
    And I fill all except terms
    And I try to sign in
    Then I expect to the page ask for terms

Scenario: Sign in successful
    Given I go to losestudiantes home screen
    When I open the login screen
    And I fill all fields
    And I try to sign in
    Then I expect to the page ask for terms