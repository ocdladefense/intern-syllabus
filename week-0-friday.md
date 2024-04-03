# OCDLA Web Developer Internship, Spring '24 Kickoff Week (Friday)

## Meeting description
OCDLA uses the popular Salesforce CRM to manage contacts, donors, products, and orders from the organization's online store.  Knowing how these various records work together is essential to undersing OCDLA's business processes.  

## Meeting preparation
* Salesforce Visualforce reference manual
* Salesforce Apex reference manual

## Meeting agenda
| Time | Activity
| --- | ---
| 3:30 pm - 4:30 pm | Hello World Visualforce app; creating and deploying Visualforce pages; custom controllers (Apex);
| 4:30 pm - 5:00 pm | README files: name, description, code examples, version history; Code updates (Timer, Calculator, Course Info)
| 5:00 pm - 5:30 pm | Commit messages, branching, versioning


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
* Add ```addContent()```, ```addHeading()```, ```addSubHeading()``` and other utility methods to faciliate the creation of a well-formatted text file.

## Review
Our goal is to make our code as expressive as possible, along the way adopting approaches that make our code easier to read, more meaningful and more concise.  We make use of Object-oriented programming techniques, separation of concerns and descriptive variable naming to faciliate expressive programming.