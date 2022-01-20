package StepDefinitions;

import java.util.concurrent.TimeUnit;

import org.junit.Assert;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import com.saucePageObjects.chechOutPO;
import com.saucePageObjects.productsPO;
import com.saucePageObjects.sauceValidateElePO;

import cucumber.api.java.After;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class assertInCucumber {
	
	
	WebDriver driver;
	sauceValidateElePO SVPO;
	productsPO PPO;
	chechOutPO ChPO; 
	
	@Given("^user is in main page$")
	public void user_is_in_main_page() throws Throwable {
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

	@When("^user enters first name$")
	public void user_enters_first_name() throws Throwable {
		
		SVPO.getusername().sendKeys("standard_user");
		
		Thread.sleep(2000);
	}
		
		@When("^user enables first name$")
		public void user_enables_first_name() throws Throwable {
			
		boolean x = SVPO.getusername().isEnabled();
		boolean y = SVPO.getusername().isDisplayed();
		Assert.assertTrue(x);
		Assert.assertTrue(y);
		
	
	}

	@When("^user enters password$")
	public void user_enters_password() throws Throwable {

		SVPO.getpassword().sendKeys("secret_sauce");
		Thread.sleep(2000);
	}
	
	@When("^user enables password$")
	public void user_enables_password() throws Throwable {
		
		boolean x1 = SVPO.getpassword().isEnabled();
		boolean y1 =SVPO.getpassword().isDisplayed();
		
		Assert.assertTrue(x1);
		Assert.assertTrue(y1);
	}

	@When("^user click signup$")
	public void user_click_signup() throws Throwable {
		SVPO.getlogin().click();
		String expectedUrl2 = "https://www.saucedemo.com/inventory.html";
		String actualUrl2 = driver.getCurrentUrl();
		Assert.assertEquals(actualUrl2, expectedUrl2);
		
		System.out.println(expectedUrl2);
		System.out.println(actualUrl2);
		
		
		
		
		
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
		
		String expectedUrl = "https://www.saucedemo.com/checkout-step-one.html";
		String actualUrl = driver.getCurrentUrl();
		Assert.assertEquals(actualUrl, expectedUrl);
		
		System.out.println(actualUrl);
		ChPO.getcontinue().click();
		Thread.sleep(2000);
		
		String expectedUrl1 = "https://www.saucedemo.com/checkout-step-two.html";
		String actualUrl1 = driver.getCurrentUrl();
		Assert.assertEquals(actualUrl1, expectedUrl1);
		System.out.println(actualUrl1);

		}

	@Then("^user close the page$")
	public void user_close_the_page() throws Throwable {
	    driver.quit();
		
		
	}
   

}
