package StepDefinitions;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import com.saucePageObjects.chechOutPO;
import com.saucePageObjects.productsPO;
import com.saucePageObjects.sauceValidateElePO;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class crossbrowsingSD {
	WebDriver driver;
	sauceValidateElePO SVPO;
	productsPO PPO;
	chechOutPO ChPO; 
	
	
	
	
	@Given("^User is in Main Page of Swag Lab$")
	public void user_is_in_Main_Page_of_Swag_Lab() throws Throwable {
		
		System.setProperty("webdriver.chrome.driver", "C:\\Users\\Nilla\\Desktop\\Driver\\chromedriver.exe");
		driver = new ChromeDriver();
		SVPO = new sauceValidateElePO(driver);
		PPO = new productsPO(driver);
		ChPO = new chechOutPO(driver);
	
		driver.get("https://www.saucedemo.com/");
		driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
		driver.manage().window().maximize();
		driver.manage().deleteAllCookies();	
	}

	@When("^User enters first name in Swag Lab$")
	public void user_enters_first_name_in_Swag_Lab() throws Throwable {
		
		SVPO.getusername().sendKeys("standard_user");
		
		Thread.sleep(2000);
	    
	}

	@When("^user enters password in Swag Lab$")
	public void user_enters_password_in_Swag_Lab() throws Throwable {

		SVPO.getpassword().sendKeys("secret_sauce");
		Thread.sleep(2000);
		
	}

	@When("^user click signup in Swag Lab$")
	public void user_click_signup_in_Swag_Lab() throws Throwable {
		SVPO.getlogin().click();
		
		
		PPO.getaddToCart().click();
		Thread.sleep(2000);
		PPO.getshoppingcart().click();
		Thread.sleep(2000);
		PPO.getcheckout().click();
		
	
		Thread.sleep(2000);
		ChPO.getfirstname().sendKeys("Mike");
		Thread.sleep(2000);
		ChPO.getlastname().sendKeys("Tyson");
		Thread.sleep(2000);
		ChPO.getpostalcode().sendKeys("22030");
		Thread.sleep(2000);
		ChPO.getcontinue().click();
		ChPO.getfinish().click();

		
	}

	@Then("^user close Swag Lab page$")
	public void user_close_Swag_Lab_page() throws Throwable {
		driver.quit();


	}

	

}
