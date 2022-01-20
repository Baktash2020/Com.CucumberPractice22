#Author: Baktashee



	Feature: Login Validation
  
  @Regression
	Scenario: Validate Login for valid credential 

	Given user is in main page
	When user enters first name
	And user enables first name
	And user enters password
	And user enables password
	
	And user click signup
	
	Then user close the page 
	
	