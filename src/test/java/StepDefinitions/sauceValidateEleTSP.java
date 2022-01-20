package StepDefinitions;



import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;


import com.saucePageObjects.sauceValidateElePO;

public class sauceValidateEleTSP {
	
	public class validateElements {

		  WebDriver driver;
		  sauceValidateElePO SVPO;
		
		

		
		 public void Beforetest() {
			
	    System.setProperty("webdriver.chrome.driver", "C:\\Users\\Nilla\\Desktop\\Driver\\chromedriver.exe");
			
			driver = new ChromeDriver();
			SVPO = new sauceValidateElePO(driver);
		
			driver.get("https://www.saucedemo.com/");
			//driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
			driver.manage().window().maximize();
			driver.manage().deleteAllCookies();
			
			 
		}
		
		 {
			driver.get("https://www.saucedemo.com/");
			//driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
			
		}
		
      
		
		 {
			SVPO.getusername().sendKeys("standard_user");
			SVPO.getpassword().sendKeys("secret_sauce");
			SVPO.getlogin().click();
			//Thread.sleep(2000);
			
			//String expectedUrl = "https://www.saucedemo.com/inventory.html";
			//String actualUrl = driver.getCurrentUrl();
			//Assert.assertEquals(actualUrl, expectedUrl);
			//System.out.println(actualUrl);
			
			
			
		}
		
		 {
			SVPO.getusername().sendKeys("problem_user");
			SVPO.getpassword().sendKeys("secret_sauce");
			SVPO.getlogin().click();
			
			
		}
		
		
		
       {
			SVPO.getusername().sendKeys("locked_out_user");
			SVPO.getpassword().sendKeys("secret_sauce");
			SVPO.getlogin().click();
			
			//String expectedUrl = "https://www.saucedemo.com/";
			//String actualUrl = driver.getCurrentUrl();
			//Assert.assertEquals(actualUrl, expectedUrl);
			
		}
		
		
		
		
		
		}
		
		
		

}
