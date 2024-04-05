# OCDLA Web Developer Internship, Spring '24 Kickoff Week (Friday)

## Meeting description
Continue refactoring our Week 0 projects into separate JavaScript modules.  Prepare to integrate your Week 0 projects using Salesforce Cloud integration.  OCDLA uses the popular Salesforce CRM to manage contacts, donors, products, and orders from the organization's online store.  Knowing how these various records work together is essential to understanding OCDLA's business processes.  

## Meeting preparation
* Salesforce Visualforce reference manual
* Salesforce Apex reference manual
* Create NPM accounts/OCDLA Organization invitation
* Access to Salesforce _Developer Org_ for JavaScript/Salesforce integrations

## Meeting agenda
| Time | Activity
| --- | ---
| 3:30 pm - 3:45 pm | Hello World Visualforce app; creating and deploying Visualforce pages; custom controllers (Apex)
| 3:45 pm - 4:30 pm | Local linking in Node (package.json); Upload initial packages to OCDLA's NPM account
| 4:30 pm - 5:30 pm | Week 0 projects - versioning, features, branches, tags, README files
| TBD | README files: name, description, code examples, version history; Code updates (Timer, Calculator, Course Info)
| 5:00 pm - 5:30 pm | Commit messages, branching, versioning
| 5:30 pm - 6:00 pm | Learning objectives

## New Skills
* NPM, package.json, Use [local development paths in dependencies](https://docs.npmjs.com/cli/v10/configuring-npm/package-json#local-paths)


## Previous meeting notes
### Calculator

* Use the event delegation pattern to replace multiple inline event handlers with a single master event handler.
  * The master event handler can handle both <code>keyup</code> and <code>click</code> events.
* Use the static <code>ALLOWED_KEYS</code> array to list valid calculator input.
* BUGFIX: remove duplicate <code>id</code> attributes from buttons/input.
  * The HTML spec enforces unique id attributes.
* Dynamically generate various calculator numeric keys by iterating over ```ALLOWED_KEYS``` structure (or similar structure)
  
### Timer
* Dynamically generate stopwatch buttons in JavaScript.
  * E.g., "stop", "start", etc.
* Use the event delegation pattern to replace multiple inline event handlers with a single master event handler.

### Course Info
* Refactor the <code>FileFormater</code> class's methods using the "generic pattern", renaming it to <code>TxtFile</code>.
* Add ```addContent()```, ```addHeading()```, ```addSubHeading()``` and other utility methods to facilitate the creation of a well-formatted text file.

## Review
Our goal is to make our code as expressive as possible, along the way adopting approaches that make our code easier to read, more meaningful and more concise.  We make use of Object-oriented programming techniques, separation of concerns and descriptive variable naming to facilitate expressive programming.