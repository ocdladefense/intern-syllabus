

# Intern Project #1 - Week 4 Jobs Board
Our first project will be to relaunch [OCDLA's Jobs Board](https://ocdla.app/jobs).

## About the project
In the past, OCDLA's Job Board was one of the more popular pages on the OCDLA website.  Individuals and firms can login to the OCDLA app and post jobs and manage posted jobs to edit and eventually remove (or deactivate them) from the Job Board.  This application can be improved though.  The Job__c object in your OCDLA Sandboxes is probbaly missing important fields that one might typically find on comparable job posting sites; in addition the layout for the postings is rudimentary and should also be compared to popular job posting sites for accessibility and readability.  

## OCDLA Sandbox
In additiona to .git and package.json files; our projects will be developed as Salesforce DX (sfdx) projects with a required <code>sfdx-project.json</code> file.  Connect to your OCDLA Sandbox to include Job__c metadata in your project.  

## Revise OCDLA's Job Board

### Normalize a Job class and related instance variables
Identify the existing Job__c fields; prepare your db.json instance/file with three sample records with these fields.  Add additional fields per other oft-used job posting sites. 

### Prepare @ocdla/employment NPM package
Develop a <code>@ocdla/employment</code> package locally.  Require the package in your project's <code>package.json</code> file and import a <code>Job</code> class from your package into your root project controller.


