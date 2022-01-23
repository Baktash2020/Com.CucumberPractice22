$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("crossbrowsing.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author: Baktash"
    }
  ],
  "line": 4,
  "name": "Login Validation with Chrome",
  "description": "",
  "id": "login-validation-with-chrome",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 9,
  "name": "Login with Chrome",
  "description": "",
  "id": "login-validation-with-chrome;login-with-chrome",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 6,
      "name": "@CrossBrowsing"
    },
    {
      "line": 8,
      "name": "@CrossBrowsingChromFireFox"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "User is in Main Page of Swag Lab",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "User enters first name in Swag Lab",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "user enters password in Swag Lab",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "user click signup in Swag Lab",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "user close Swag Lab page",
  "keyword": "Then "
});
formatter.match({
  "location": "crossbrowsingSD.user_is_in_Main_Page_of_Swag_Lab()"
});
formatter.result({
  "duration": 5867780500,
  "status": "passed"
});
formatter.match({
  "location": "crossbrowsingSD.user_enters_first_name_in_Swag_Lab()"
});
formatter.result({
  "duration": 2192487700,
  "status": "passed"
});
formatter.match({
  "location": "crossbrowsingSD.user_enters_password_in_Swag_Lab()"
});
formatter.result({
  "duration": 2157600100,
  "status": "passed"
});
formatter.match({
  "location": "crossbrowsingSD.user_click_signup_in_Swag_Lab()"
});
formatter.result({
  "duration": 14338679000,
  "status": "passed"
});
formatter.match({
  "location": "crossbrowsingSD.user_close_Swag_Lab_page()"
});
formatter.result({
  "duration": 789612200,
  "status": "passed"
});
formatter.uri("crossbrowsingFirefox.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author: Baktash Jan"
    }
  ],
  "line": 5,
  "name": "Login Validation with FireFox",
  "description": "",
  "id": "login-validation-with-firefox",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 9,
  "name": "Login with Firefox",
  "description": "",
  "id": "login-validation-with-firefox;login-with-firefox",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 8,
      "name": "@CrossBrowsingChromFireFox"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "User is in Main Page of Firefox",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "User enters first name in Firefox",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "user enters password in Firefox",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "user click signup in Firefox",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "user close Swag Lab page Firefox",
  "keyword": "Then "
});
formatter.match({
  "location": "crossBrowsingFireFox.user_is_in_Main_Page_of_Firefox()"
});
formatter.result({
  "duration": 8806316300,
  "status": "passed"
});
formatter.match({
  "location": "crossBrowsingFireFox.user_enters_first_name_in_Firefox()"
});
formatter.result({
  "duration": 2215843300,
  "status": "passed"
});
formatter.match({
  "location": "crossBrowsingFireFox.user_enters_password_in_Firefox()"
});
formatter.result({
  "duration": 2119604900,
  "status": "passed"
});
formatter.match({
  "location": "crossBrowsingFireFox.user_click_signup_in_Firefox()"
});
formatter.result({
  "duration": 14107790600,
  "status": "passed"
});
formatter.match({
  "location": "crossBrowsingFireFox.user_close_Swag_Lab_page_Firefox()"
});
formatter.result({
  "duration": 1622659800,
  "status": "passed"
});
});