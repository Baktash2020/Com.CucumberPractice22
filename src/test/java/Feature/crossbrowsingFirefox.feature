#Author: Baktash Jan

		
		
		Feature: Login Validation with FireFox
  
  
  @CrossBrowsingChromFireFox
	Scenario: Login with Firefox

	Given User is in Main Page of Firefox
	When User enters first name in Firefox
	And user enters password in Firefox
	And user click signup in Firefox
	
	Then user close Swag Lab page Firefox