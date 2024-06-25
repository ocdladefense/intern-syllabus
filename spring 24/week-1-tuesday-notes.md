
# DRAFT Agenda for Friday, Week 2

## Questions
Any questions or comments on our previous work, especially local Node module development, git, JSX, babel/webpack.

## 5-minute summaries
Spend a few minutes and give the team updates on your work since Tuesday.

## OOP, loose coupling and message passing.
A discussion of some of these principles given our interest in MVC, encapsulation and separation of concerns.  An example from functional programming in JavaScript that links our controller classes and our view/components.

## Package publishing and versioning
Discussion of our respective package names, package management and versioning.  Distinguish between development cycle and release cycle and their respective toolsets.  README files, <code>example/</code> folders and version history.  How versioning and project management go hand-in-hand.

## Next app steps (and next versions)
Let's build our first Salesforce REST API to interact with our apps.

## Salesforce REST endpoints
We will use [Exposing Apex Classes as REST Web Services](https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex_rest.htm) documentation to begin integrating our Week 0 JavaScript projects with our Salesforce _Developer_ cloud instances (not OCDLA Sandbox).  Initially we will develop an Apex class that can support GET requests to retrieve Salesforce records that we will have already created using the Salesforce GUI (web); but looking ahead we should also be able to submit POST requests to add new records to Salesforce directly from our JavaScript apps using JavaScript <code>Request</code> and <code>Response</code>. 
* Calculator - A history of the user's prior calculations and results can be saved and retrieved.
* Timer - A history of the user's timers can be saved (and named) for later retrieval.
* Course Info - Retrieve the list of registered courses (i.e., for use in a HTMLSelectElement); the user can save basic info about their courses for later use in the app.

## Salesforce REST - general approach
* Familiarize yourself with the [Exposing Apex Classes as REST Web Services](https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex_rest.htm) documentation.
* Create an Apex class in your Salesforce Developer Org that exposes a GET method for retrieving records appropriate to your app.
* Test your REST endpoint by authenticating using the Salesforce CLI, instance URL and access token.
* Retrieve records using [JavaScript Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API).
* Parse the JSON returned by the Salesforce REST endpoint.
* Consume related objects in your app.

## Salesforce REST - authentication
* Use the Salesforce CLI to get an authentication token ([documentation](https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/quickstart_oauth.htm)).
* Use the authentication token (access token or session id) and instance URL to make requests.
* [Distinguish between types of authentication tokens](https://salesforce.stackexchange.com/questions/18565/security-token-vs-session-id-vs-access-token#:~:text=Session%20ID%20values%20are%20valid,Refresh%20Token%20if%20granted%20permission.).
* _I believe we will be using the access token_.


## Learning objectives
We need to begin drafting our learning objectives for Gerry.