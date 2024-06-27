


# Thursday, Jun 27, 2024
Draft

## Meeting Agenda
* Prior to 2pm - Pre-meeting questions (ask on our Slack channel)
* 2pm - Meeting start, questions
* 2:15 - 2:30 - Katelyn, code walk through, NewsApp
  * Implementation of HttpClient + LocalStorageCache
* 2:30 - 2:45 - Trung, code walk through, WeatherApp
  * Implementation of DayForecast _model_, i.e., <code>DayForecast.js</code>
* 2:45 - 2:50 - Review task lists for Thursday - Tuesday, 7/2
  * Midterm Review / Evaluation items (_these are items that will be included as part of your midterm and final evaluations_)
    * Review and memorize the two main method signatures for <code>fetch()</code> from MDN Fetch API.
    * Review and memorize the the constructor signatures for <code>Request</code> and <code>Response</code>.
    * Understand the relationship between <code>Request</code>, <code>Response</code> and <code>fetch()</code>.
    * Understand the benefits of View components in the context of MVC.
  * [Trung](https://github.com/tnguyen-win/CS233JS-05-weather-template/blob/refactor/src/js/weatherParsing.js) - Model code still needed for DayForecast.
  * [Katelyn](https://github.com/SullivanKE/JS233-TermProject-News) - Refactoring of Modal* code (there should only be one modal, invoked from the event handler).
  * Implement JSX components in place of JavaScript template literals.
    * Branch again to create a <code>jsx</code> branch for your repositories.
    * Install <code>@ocdla/view</code> as a dependency for your project.
    * Install other NPM dependencies.
    * Add configuration code to your <code>webpack.configs.js</code> file's <code>rules</code> section (see below).
    * Add transpiler _pragma_ and associated imports to each JavaScript file where you will define or consume JSX components (see below).
* 2:50 - 3:00 - Learning Objectives ideas
* 3:00pm - Meeting concludes
## <code>Webpack.config.js</code> additions:
```javascript
...
module: {
    rules: [	
        { 
            test: /\.js$/i,
            exclude: /(node_modules)/,
            use: { 
                loader: 'babel-loader', 
                options: {
                    presets: ['@babel/preset-env', '@babel/preset-react']
                }
            }
        }
    ]
}
...
```
## Transpiler pragma and associated imports
_Note: the pragma is the <code>/** @jsx vNode */</code> comment and is required.
```javascript
/** @jsx vNode */
import { vNode, View } from "@ocdla/view";
```



