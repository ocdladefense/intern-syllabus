# Notes: Week 0 Friday


## Salesforce logins
Some users experience the "infinite login loop" when attempting to reset/setup their password.  We were able to workaround this with a temporary login code.

## VSCode Configuration
VSCode requires specific versions of the JRE/JDK for the Salesforce Extension Pack to work properly.

## Salesforce sink-or-swim
* Three methods for creating Visualforce pages and Apex classes.
   1. Salesforce Setup page (web-based)
   2. Salesforce Developer Console (web/JavaScript-based)
   3. VSCode (Salesforce Extension Pack)
* Object Manager
  * Manage both built-in Salesforce objects and custom objects.
* <code><apex:page></code> tag and <code>controller</code> attribute.
* Variable binding syntax: <code>{!myExampleInstanceVariable}</code>.

## Refactor round #2: Node modules

## Calculator
```bash
// README
A web-based GUI frontend built on top of @ocdla/calculator and math.evaluate().
```
### Related tasks
* Find where <code>math.evaluate()</code> is being imported into your project.
   * Likely from the [Math.js Node library](https://mathjs.org/docs/reference/functions/evaluate.html)

## Timer
```bash
// README
A web-based GUI frontend built on top of @ocdla/timer and @ocdla/view.
```
### Related tasks
* General refactor
* <code>window.requestAnimationFrame()</code>
* <code>window.cancelAnimationFrame()</code>
* <code>indexStart.js</code> should be renamed to <code>Timer.js</code>
* Define a single <code>Timer.render()</code> method that displays the timer display and controls.
* Use JSX syntax to build the <code>Timer.render()</code> method.
* Define a Timer constructor that takes a string like "5m30s"
   * Which would initialize the Timer to 5 minutes and 30 seconds.
```javascript

class Timer {

    // The generator used to display units (usually seconds) for this timer.
    g;

    // Window.setInterval or Node global.setInterval.
    interval;

    // Specify precision in milliseconds.
    // Defaults to 1 second.
    static PRECISION = 1000;

    // What sounds does the timer make when done?
    static TIMER_FINISHED_SOUND = 'BEEP!';

    // Instantiate a Timer; initialize its generator.
    // For more information see:
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Iterators_and_Generators
    constructor(timestringOrSeconds) {
        // let seconds = TimeString.seconds(timestring); Imagine passing in "5m 30s"; would need to be converted to seconds.
        let seconds = timestringOrSeconds;
        this.g = this.counter(seconds);
    }


    // Generator function that returns a number each time its next() method is called.
    * counter(units) {
        for (let i = units; i >= 0; i--) {
            yield i;
        }
    }

    
    // Start this timer.
    start() {

        this.interval = setInterval(() => {
        const seconds = this.g.next().value;
        if (seconds === undefined) {
            clearInterval(this.interval);
            console.log(Timer.TIMER_FINISHED_SOUND);
            // this.rener(0);
        } else {
            console.log(seconds);
            // this.render(seconds);
        }
        }, Timer.PRECISION);
    }


    // Stop this timer.
    stop() {
        clearInterval(this.interval);
        // this.render(0);
    }


    render(seconds) {

        let h,m,s;

        [h, m, s] = Timer.parse(seconds); // Parse seconds into hour,min,sec *string notation.

        return [h,m,s];
        // Use JSX syntax.
        // For Week 2
        /*
        return (
            <div class="timer">
                <span class="hours">{h}</span>
                <span class="minutes">{m}</span>
                <span class="seconds">{s}</span>
            </div>
        );
        */
    }

    static parse(seconds, pad=true) {
        // Do some work here.
        // Also pad with 0s if requested.
        return ["01","25","05"]; // For example to display 01:25:05
    }
}
```

## Homework
```bash
// README
A web-based GUI frontend built on top of @ocdla/educate and @ocdla/txtfile.  Enable users to create and manage task lists for courses.
```
### Related tasks