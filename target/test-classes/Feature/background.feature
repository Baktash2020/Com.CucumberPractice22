#Author: Bakee
# date: 1/20/22



  Feature: Login feature for sauce lab
  Background: 
  Given User is on the Login Page
  
  @Regression
   Scenario: Validating login with valid credentials
    When User enters valid username
    And user enters valid password
    And user enters  clicks on the login button
    Then user has to be in inventory page
    
    
    Scenario: Validating login with valid credentials2
    When user enters Valid username
    And user enters Valid password
    And user enters  clicks on the Valid login button
    Then user has to be in inventory page
    
    Scenario: Validating login with valid credentials3
    When user enters Valid Username
    And user enters Valid PassWord
    And user enters  clicks on the Valid Login Button
    Then user has to be in inventory page
    
    Scenario: Validating login with Invalid credentials
    When User enters invalid Username
    And user enters invalid Password
    And User Clicks on the Login Button
    Then user has to be in inventory page
    
    
