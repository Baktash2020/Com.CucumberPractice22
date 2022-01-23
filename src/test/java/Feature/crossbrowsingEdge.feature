#Author: Baktash Jan

	
	
	Feature: Login Validation with Edge
  
  @CrossBrowsing
  
	Scenario: Login with Edge

	Given User is in Main Page of Edge
	When User enters first name in Edge
	And user enters password in Edge
	And user click signup in Edge
	
	Then user close Swag Lab page Edge