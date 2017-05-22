package testRunner;

import org.openqa.selenium.WebDriver;
import org.testng.annotations.AfterClass;
import org.testng.annotations.AfterMethod;
import org.testng.annotations.AfterTest;
import org.testng.annotations.BeforeClass;
import org.testng.annotations.BeforeMethod;
import org.testng.annotations.BeforeTest;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import factory.BrowserFactory;
import factory.DataProviderFactory;

public class HooksTest {
	static WebDriver driver;
	
	@Before
	public void setUp(){
	
			driver = BrowserFactory.getBrowser("chrome");
			//driver.get(DataProviderFactory.getConfig().getApplicationURL());
		}
	@After
	public void tearDown()
	{
		BrowserFactory.closeBrowser(driver);
	}

}
