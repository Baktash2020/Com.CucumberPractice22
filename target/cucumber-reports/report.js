$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Login.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author: Baktashee"
    }
  ],
  "line": 5,
  "name": "Login Validation",
  "description": "",
  "id": "login-validation",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 8,
  "name": "Validate Login for valid credential",
  "description": "",
  "id": "login-validation;validate-login-for-valid-credential",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 7,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "user is in main page",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "user enters first name",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "user enables first name",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "user enters password",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "user enables password",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "user click signup",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "user close the page",
  "keyword": "Then "
});
formatter.match({
  "location": "assertInCucumber.user_is_in_main_page()"
});
formatter.result({
  "duration": 3279512000,
  "status": "passed"
});
formatter.match({
  "location": "assertInCucumber.user_enters_first_name()"
});
formatter.result({
  "duration": 2188995700,
  "status": "passed"
});
formatter.match({
  "location": "assertInCucumber.user_enables_first_name()"
});
formatter.result({
  "duration": 146234000,
  "status": "passed"
});
formatter.match({
  "location": "assertInCucumber.user_enters_password()"
});
formatter.result({
  "duration": 2115551500,
  "status": "passed"
});
formatter.match({
  "location": "assertInCucumber.user_enables_password()"
});
formatter.result({
  "duration": 99330900,
  "status": "passed"
});
formatter.match({
  "location": "assertInCucumber.user_click_signup()"
});
formatter.result({
  "duration": 15221885500,
  "status": "passed"
});
formatter.match({
  "location": "assertInCucumber.user_close_the_page()"
});
formatter.result({
  "duration": 741569700,
  "status": "passed"
});
formatter.uri("background.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author: Bakee"
    },
    {
      "line": 2,
      "value": "# date: 1/20/22"
    }
  ],
  "line": 6,
  "name": "Login feature for sauce lab",
  "description": "",
  "id": "login-feature-for-sauce-lab",
  "keyword": "Feature"
});
formatter.background({
  "line": 7,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 8,
  "name": "User is on the Login Page",
  "keyword": "Given "
});
formatter.match({
  "location": "backGroundSD.user_is_on_the_Login_Page()"
});
formatter.result({
  "duration": 1771998500,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "Validating login with valid credentials",
  "description": "",
  "id": "login-feature-for-sauce-lab;validating-login-with-valid-credentials",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 10,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "User enters valid username",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "user enters valid password",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "user enters  clicks on the login button",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "user has to be in inventory page",
  "keyword": "Then "
});
formatter.match({
  "location": "backGroundSD.user_enters_valid_username()"
});
formatter.result({
  "duration": 2259714100,
  "status": "passed"
});
formatter.match({
  "location": "backGroundSD.user_enters_valid_password()"
});
formatter.result({
  "duration": 126798500,
  "status": "passed"
});
formatter.match({
  "location": "backGroundSD.user_enters_clicks_on_the_login_button()"
});
formatter.result({
  "duration": 221929600,
  "status": "passed"
});
formatter.match({
  "location": "backGroundSD.user_has_to_be_in_inventory_page()"
});
formatter.result({
  "duration": 861343000,
  "status": "passed"
});
formatter.background({
  "line": 7,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 8,
  "name": "User is on the Login Page",
  "keyword": "Given "
});
formatter.match({
  "location": "backGroundSD.user_is_on_the_Login_Page()"
});
formatter.result({
  "duration": 1738023000,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Validating login with valid credentials2",
  "description": "",
  "id": "login-feature-for-sauce-lab;validating-login-with-valid-credentials2",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 19,
  "name": "user enters Valid username",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "user enters Valid password",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "user enters  clicks on the Valid login button",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "user has to be in inventory page",
  "keyword": "Then "
});
formatter.match({
  "location": "backGroundSD.user_enters_Valid_username()"
});
formatter.result({
  "duration": 2233881500,
  "status": "passed"
});
formatter.match({
  "location": "backGroundSD.user_enters_Valid_password()"
});
formatter.result({
  "duration": 2204941200,
  "status": "passed"
});
formatter.match({
  "location": "backGroundSD.user_enters_clicks_on_the_Valid_login_button()"
});
formatter.result({
  "duration": 107284700,
  "status": "passed"
});
formatter.match({
  "location": "backGroundSD.user_has_to_be_in_inventory_page()"
});
formatter.result({
  "duration": 800849900,
  "status": "passed"
});
formatter.background({
  "line": 7,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 8,
  "name": "User is on the Login Page",
  "keyword": "Given "
});
formatter.match({
  "location": "backGroundSD.user_is_on_the_Login_Page()"
});
formatter.result({
  "duration": 1833106300,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "Validating login with valid credentials3",
  "description": "",
  "id": "login-feature-for-sauce-lab;validating-login-with-valid-credentials3",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 25,
  "name": "user enters Valid Username",
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "user enters Valid PassWord",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "user enters  clicks on the Valid Login Button",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "user has to be in inventory page",
  "keyword": "Then "
});
formatter.match({
  "location": "backGroundSD.user_enters_Valid_Username()"
});
formatter.result({
  "duration": 220107100,
  "status": "passed"
});
formatter.match({
  "location": "backGroundSD.user_enters_Valid_PassWord()"
});
formatter.result({
  "duration": 182519800,
  "status": "passed"
});
formatter.match({
  "location": "backGroundSD.user_enters_clicks_on_the_Valid_Login_Button()"
});
formatter.result({
  "duration": 5194054300,
  "status": "passed"
});
formatter.match({
  "location": "backGroundSD.user_has_to_be_in_inventory_page()"
});
formatter.result({
  "duration": 771126800,
  "status": "passed"
});
formatter.background({
  "line": 7,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 8,
  "name": "User is on the Login Page",
  "keyword": "Given "
});
formatter.match({
  "location": "backGroundSD.user_is_on_the_Login_Page()"
});
formatter.result({
  "duration": 1778795200,
  "status": "passed"
});
formatter.scenario({
  "line": 30,
  "name": "Validating login with Invalid credentials",
  "description": "",
  "id": "login-feature-for-sauce-lab;validating-login-with-invalid-credentials",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 31,
  "name": "User enters invalid Username",
  "keyword": "When "
});
formatter.step({
  "line": 32,
  "name": "user enters invalid Password",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "User Clicks on the Login Button",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "user has to be in inventory page",
  "keyword": "Then "
});
formatter.match({
  "location": "backGroundSD.user_enters_invalid_Username()"
});
formatter.result({
  "duration": 213717500,
  "status": "passed"
});
formatter.match({
  "location": "backGroundSD.user_enters_invalid_Password()"
});
formatter.result({
  "duration": 205067000,
  "status": "passed"
});
formatter.match({
  "location": "backGroundSD.user_Clicks_on_the_Login_Button()"
});
formatter.result({
  "duration": 192534000,
  "status": "passed"
});
formatter.match({
  "location": "backGroundSD.user_has_to_be_in_inventory_page()"
});
formatter.result({
  "duration": 787241100,
  "status": "passed"
});
});