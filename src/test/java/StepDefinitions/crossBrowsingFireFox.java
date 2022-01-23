package StepDefinitions;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

import com.saucePageObjects.chechOutPO;
import com.saucePageObjects.productsPO;
import com.saucePageObjects.sauceValidateElePO;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class crossBrowsingFireFox {
	WebDriver driver;
	sauceValidateElePO SVPO;
	productsPO PPO;
	chechOutPO ChPO; 
	
	@Given("^User is in Main Page of Firefox$")
	public void user_is_in_Main_Page_of_Firefox() throws Throwable {
		System.setProperty("webdriver.gecko.driver", "C:\\Users\\Aqdas\\Desktop\\Mozila\\geckodriver.exe");
		driver = new FirefoxDriver();
		SVPO = new sauceValidateElePO(driver);
		PPO = new productsPO(driver);
		ChPO = new chechOutPO(driver);
	
		driver.get("https://www.saucedemo.com/");
		driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
		driver.manage().window().maximize();
		driver.manage().deleteAllCookies();	
	}

	@When("^User enters first name in Firefox$")
	public void user_enters_first_name_in_Firefox() throws Throwable {
		SVPO.getusername().sendKeys("standard_user");
		
		Thread.sleep(2000);

		
	}

	@When("^user enters password in Firefox$")
	public void user_enters_password_in_Firefox() throws Throwable {
		SVPO.getpassword().sendKeys("secret_sauce");
		Thread.sleep(2000);


	}

	@When("^user click signup in Firefox$")
	public void user_click_signup_in_Firefox() throws Throwable {
		
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

	@Then("^user close Swag Lab page Firefox$")
	public void user_close_Swag_Lab_page_Firefox() throws Throwable {
		driver.quit();


		
		
	}



}
