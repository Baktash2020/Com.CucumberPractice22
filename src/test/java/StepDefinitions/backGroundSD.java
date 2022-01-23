package StepDefinitions;

import java.util.concurrent.TimeUnit;

import org.junit.Assert;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import com.saucePageObjects.sauceValidateElePO;


import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class backGroundSD {
	WebDriver driver;
	sauceValidateElePO SVPO;
	
	@Given("^User is on the Login Page$")
	public void user_is_on_the_Login_Page() throws Throwable {
		System.setProperty("webdriver.chrome.driver", "C:\\Users\\Nilla\\Desktop\\Driver\\chromedriver.exe");
		driver = new ChromeDriver();
		SVPO = new sauceValidateElePO(driver);
		driver.get("https://www.saucedemo.com/");
		driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
		driver.manage().window().maximize();
		driver.manage().deleteAllCookies();

	}
		

	@When("^User enters valid username$")
	public void user_enters_valid_username() throws Throwable {
		SVPO.getusername().sendKeys("standard_user");
		Thread.sleep(2000);
		
		boolean x = SVPO.getusername().isEnabled();
		boolean y = SVPO.getusername().isDisplayed();
		Assert.assertTrue(x);
		Assert.assertTrue(y);
		
	}

	@When("^user enters valid password$")
	public void user_enters_valid_password() throws Throwable {
		
		SVPO.getpassword().sendKeys("secret_sauce");
		
		
	}

	@When("^user enters  clicks on the login button$")
	public void user_enters_clicks_on_the_login_button() throws Throwable {
		SVPO.getlogin().click();
	}

	@Then("^user has to be in inventory page$")
	public void user_has_to_be_in_inventory_page() throws Throwable {
	    driver.quit();
	    
	}
	@When("^user enters Valid username$")
	public void user_enters_Valid_username() throws Throwable {
		SVPO.getusername().sendKeys("locked_out_user");
		SVPO.getusername().clear();
		Thread.sleep(2000);
	}
		@When("^user enters Valid Username$")
		public void user_enters_Valid_Username() throws Throwable {
		SVPO.getusername().sendKeys("performance_glitch_user");
		
		SVPO.getusername().clear();
	}

	@When("^user enters Valid password$")
	public void user_enters_Valid_password() throws Throwable {
		
		SVPO.getpassword().sendKeys("secret_sauce");
		SVPO.getpassword().clear();
		Thread.sleep(2000);
	}
	
	@When("^user enters Valid PassWord$")
	public void user_enters_Valid_PassWord() throws Throwable {
		SVPO.getpassword().sendKeys("secret_sauce");
		SVPO.getpassword().clear();
	}
	
	@When("^user enters  clicks on the Valid Login Button$")
	public void user_enters_clicks_on_the_Valid_Login_Button() throws Throwable {
		SVPO.getlogin().click();

	}

	@When("^user enters  clicks on the Valid login button$")
	public void user_enters_clicks_on_the_Valid_login_button() throws Throwable {

		SVPO.getlogin().click();
		
		
	}

	@When("^User enters invalid Username$")
	public void user_enters_invalid_Username() throws Throwable {
		SVPO.getusername().sendKeys("problem_user");
		SVPO.getusername().clear();
	}

	@When("^user enters invalid Password$")
	public void user_enters_invalid_Password() throws Throwable {
		SVPO.getpassword().sendKeys("secret_sauce");
		SVPO.getpassword().clear();
		
		
	}

	@When("^User Clicks on the Login Button$")
	public void user_Clicks_on_the_Login_Button() throws Throwable {


		SVPO.getlogin().click();
		
	}

	

	
	

}
