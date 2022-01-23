#Author: Baktash


	Feature: Login Validation with Chrome
  
  @CrossBrowsing
  
	Scenario: Login with Chrome

	Given User is in Main Page of Swag Lab
	When User enters first name in Swag Lab
	And user enters password in Swag Lab
	And user click signup in Swag Lab
	
	Then user close Swag Lab page 