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
  "line": 8,
  "name": "Login with Chrome",
  "description": "",
  "id": "login-validation-with-chrome;login-with-chrome",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 6,
      "name": "@CrossBrowsing"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "User is in Main Page of Swag Lab",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "User enters first name in Swag Lab",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "user enters password in Swag Lab",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "user click signup in Swag Lab",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "user close Swag Lab page",
  "keyword": "Then "
});
formatter.match({
  "location": "crossbrowsingSD.user_is_in_Main_Page_of_Swag_Lab()"
});
formatter.result({
  "duration": 4098200300,
  "status": "passed"
});
formatter.match({
  "location": "crossbrowsingSD.user_enters_first_name_in_Swag_Lab()"
});
formatter.result({
  "duration": 2164957800,
  "status": "passed"
});
formatter.match({
  "location": "crossbrowsingSD.user_enters_password_in_Swag_Lab()"
});
formatter.result({
  "duration": 2131052700,
  "status": "passed"
});
formatter.match({
  "location": "crossbrowsingSD.user_click_signup_in_Swag_Lab()"
});
formatter.result({
  "duration": 13058060200,
  "status": "passed"
});
formatter.match({
  "location": "crossbrowsingSD.user_close_Swag_Lab_page()"
});
formatter.result({
  "duration": 734449900,
  "status": "passed"
});
formatter.uri("crossbrowsingEdge.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author: Baktash Jan"
    }
  ],
  "line": 5,
  "name": "Login Validation with Edge",
  "description": "",
  "id": "login-validation-with-edge",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 9,
  "name": "Login with Edge",
  "description": "",
  "id": "login-validation-with-edge;login-with-edge",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 7,
      "name": "@CrossBrowsing"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "User is in Main Page of Edge",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "User enters first name in Edge",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "user enters password in Edge",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "user click signup in Edge",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "user close Swag Lab page Edge",
  "keyword": "Then "
});
formatter.match({
  "location": "crossbrowsingEdge.user_is_in_Main_Page_of_Edge()"
});
formatter.result({
  "duration": 3759812600,
  "status": "passed"
});
formatter.match({
  "location": "crossbrowsingEdge.user_enters_first_name_in_Edge()"
});
formatter.result({
  "duration": 2190461500,
  "status": "passed"
});
formatter.match({
  "location": "crossbrowsingEdge.user_enters_password_in_Edge()"
});
formatter.result({
  "duration": 2202641100,
  "status": "passed"
});
formatter.match({
  "location": "crossbrowsingEdge.user_click_signup_in_Edge()"
});
formatter.result({
  "duration": 13265285200,
  "status": "passed"
});
formatter.match({
  "location": "crossbrowsingEdge.user_close_Swag_Lab_page_Edge()"
});
formatter.result({
  "duration": 873430600,
  "status": "passed"
});
});