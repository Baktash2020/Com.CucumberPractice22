package TestRunner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith (Cucumber.class)
@CucumberOptions (
		  
		  features = {"src/test/java/Feature"},
		   glue = {"StepDefinitions"}, 
		   plugin = {"pretty", "html:target/cucumber-reports"},
		   tags={"@CrossBrowsing"}
		   
		  
		  
		  
		  )


public class crossBrowsingChromeEdge {

}
