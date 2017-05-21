package testRunner;

import org.junit.runner.RunWith;
//import cucumber.api.junit.Cucumber;
import cucumber.api.CucumberOptions;
import cucumber.api.testng.AbstractTestNGCucumberTests;

//@RunWith(Cucumber.class)
@CucumberOptions(monochrome = true, features="./src/test/java/features/HomePage.feature",  plugin = { "pretty",
		"html:target/cucumber-html-report" }
		

)
public class CukesRunnerTest extends AbstractTestNGCucumberTests {

}
