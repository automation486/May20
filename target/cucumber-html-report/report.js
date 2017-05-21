$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("HomePage.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author: your.email@your.domain.com"
    },
    {
      "line": 2,
      "value": "#Keywords Summary :"
    },
    {
      "line": 3,
      "value": "#Feature: List of scenarios."
    },
    {
      "line": 4,
      "value": "#Scenario: Business rule through list of steps with arguments."
    },
    {
      "line": 5,
      "value": "#Given: Some precondition step"
    },
    {
      "line": 6,
      "value": "#When: Some key actions"
    },
    {
      "line": 7,
      "value": "#Then: To observe outcomes or validation"
    },
    {
      "line": 8,
      "value": "#And,But: To enumerate more Given,When,Then steps"
    },
    {
      "line": 9,
      "value": "#Scenario Outline: List of steps for data-driven as an Examples and \u003cplaceholder\u003e"
    },
    {
      "line": 10,
      "value": "#Examples: Container for s table"
    },
    {
      "line": 11,
      "value": "#Background: List of steps run before each of the scenarios"
    },
    {
      "line": 12,
      "value": "#\"\"\" (Doc Strings)"
    },
    {
      "line": 13,
      "value": "#| (Data Tables)"
    },
    {
      "line": 14,
      "value": "#@ (Tags/Labels):To group Scenarios"
    },
    {
      "line": 15,
      "value": "#\u003c\u003e (placeholder)"
    },
    {
      "line": 16,
      "value": "#\"\""
    },
    {
      "line": 17,
      "value": "## (Comments)"
    },
    {
      "line": 18,
      "value": "#Sample Feature Definition Template"
    }
  ],
  "line": 19,
  "name": "Avactis.com login feature",
  "description": "",
  "id": "avactis.com-login-feature",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 21,
  "name": "User enters positive and negative crediantials to verify application login funtionality",
  "description": "",
  "id": "avactis.com-login-feature;user-enters-positive-and-negative-crediantials-to-verify-application-login-funtionality",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 22,
  "name": "User on avactis food website",
  "keyword": "Given "
});
formatter.step({
  "line": 23,
  "name": "User clicks on login link on home page",
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "User lands on login page",
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "User populates email field \u003cemail\u003e and  password field \u003cpassword\u003e field and presses login button",
  "keyword": "And "
});
formatter.examples({
  "line": 27,
  "name": "",
  "description": "",
  "id": "avactis.com-login-feature;user-enters-positive-and-negative-crediantials-to-verify-application-login-funtionality;",
  "rows": [
    {
      "cells": [
        "email",
        "password"
      ],
      "line": 28,
      "id": "avactis.com-login-feature;user-enters-positive-and-negative-crediantials-to-verify-application-login-funtionality;;1"
    },
    {
      "cells": [
        "\"Seleniumhq1@gmail.com\"",
        "\"Seleniumhq1@gmail.com\""
      ],
      "line": 29,
      "id": "avactis.com-login-feature;user-enters-positive-and-negative-crediantials-to-verify-application-login-funtionality;;2"
    },
    {
      "cells": [
        "\"Seleniumhq2@gmail.com\"",
        "\"Seleniumhq1@gmail.com\""
      ],
      "line": 30,
      "id": "avactis.com-login-feature;user-enters-positive-and-negative-crediantials-to-verify-application-login-funtionality;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 29,
  "name": "User enters positive and negative crediantials to verify application login funtionality",
  "description": "",
  "id": "avactis.com-login-feature;user-enters-positive-and-negative-crediantials-to-verify-application-login-funtionality;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 22,
  "name": "User on avactis food website",
  "keyword": "Given "
});
formatter.step({
  "line": 23,
  "name": "User clicks on login link on home page",
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "User lands on login page",
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "User populates email field \"Seleniumhq1@gmail.com\" and  password field \"Seleniumhq1@gmail.com\" field and presses login button",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.match({
  "location": "StepsDefinitionTest.user_on_avactis_food_website()"
});
formatter.result({
  "duration": 13322778690,
  "status": "passed"
});
formatter.match({
  "location": "StepsDefinitionTest.user_clicks_on_login_link_on_home_page()"
});
formatter.result({
  "duration": 2466807849,
  "status": "passed"
});
formatter.match({
  "location": "StepsDefinitionTest.user_lands_on_login_page()"
});
formatter.result({
  "duration": 10921000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Seleniumhq1@gmail.com",
      "offset": 28
    },
    {
      "val": "Seleniumhq1@gmail.com",
      "offset": 72
    }
  ],
  "location": "StepsDefinitionTest.user_populates_email_field_and_password_field_field(String,String)"
});
formatter.result({
  "duration": 5782374156,
  "status": "passed"
});
formatter.after({
  "duration": 235074555,
  "status": "passed"
});
formatter.scenario({
  "line": 30,
  "name": "User enters positive and negative crediantials to verify application login funtionality",
  "description": "",
  "id": "avactis.com-login-feature;user-enters-positive-and-negative-crediantials-to-verify-application-login-funtionality;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 22,
  "name": "User on avactis food website",
  "keyword": "Given "
});
formatter.step({
  "line": 23,
  "name": "User clicks on login link on home page",
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "User lands on login page",
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "User populates email field \"Seleniumhq2@gmail.com\" and  password field \"Seleniumhq1@gmail.com\" field and presses login button",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.match({
  "location": "StepsDefinitionTest.user_on_avactis_food_website()"
});
formatter.result({
  "duration": 10257956609,
  "status": "passed"
});
formatter.match({
  "location": "StepsDefinitionTest.user_clicks_on_login_link_on_home_page()"
});
formatter.result({
  "duration": 2484590985,
  "status": "passed"
});
formatter.match({
  "location": "StepsDefinitionTest.user_lands_on_login_page()"
});
formatter.result({
  "duration": 8390999,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Seleniumhq2@gmail.com",
      "offset": 28
    },
    {
      "val": "Seleniumhq1@gmail.com",
      "offset": 72
    }
  ],
  "location": "StepsDefinitionTest.user_populates_email_field_and_password_field_field(String,String)"
});
formatter.result({
  "duration": 3730141780,
  "status": "passed"
});
formatter.after({
  "duration": 182658289,
  "status": "passed"
});
});