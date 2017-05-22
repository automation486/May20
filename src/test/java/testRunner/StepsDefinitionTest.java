package testRunner;



import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;
import org.testng.annotations.DataProvider;

import pages.HomePage;
import pages.LoginPage;
import cucumber.api.DataTable;
import cucumber.api.java.After;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import factory.BrowserFactory;
import factory.DataProviderFactory;

public class StepsDefinitionTest {
	
	WebDriver driver;
	HomePage homePage;
	LoginPage loginPage;
	@After
	public void tearDown()
	{
		BrowserFactory.closeBrowser(driver);
	}
	@Given("^User on avactis food website$")
	public void user_on_avactis_food_website() throws Throwable {
		driver = BrowserFactory.getBrowser("chrome");
		driver.get(DataProviderFactory.getConfig().getApplicationURL());
		
	    
	}

	@When("^User clicks on login link on home page$")
	public void user_clicks_on_login_link_on_home_page() throws Throwable {
		homePage = PageFactory.initElements(driver,HomePage.class);
		homePage.logInLink();
	    
	}

	@Then("^User lands on login page$")
	public void user_lands_on_login_page() throws Throwable {
		System.out.println("Login Page Title is: " +homePage.getApplicationTitle());
	  
	}
	@Then("^User populates email field \"([^\"]*)\" and  password field \"([^\"]*)\" and presses login button$")
	public void user_populates_email_field_and_password_field_field(String emailaddress, String password) throws Throwable {
		loginPage= PageFactory.initElements(driver, LoginPage.class);
		loginPage.enterAndLogin(emailaddress,password);
	}
	/*@DataProvider
	public void data()
	{
		
	}*/
	
}
