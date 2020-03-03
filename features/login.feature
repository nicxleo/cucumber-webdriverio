#Complete siguiendo las instrucciones del taller.
Feature: Login into losestudiantes
    As an user I want to authenticate myself within losestudiantes website in order to rate teachers

Scenario: Login failed
    Given I go to losestudiantes home screen
    When I open the login screen
    And I fill a wrong email and password
    And I try to login
    Then I expect to not be able to login

Scenario: Login successful
    Given I go to losestudiantes home screen
    When I open the login screen
    And I fill a right email and password
    And I try to login
    Then I already logged