## Tuesday, Week 3 notes

## Links
* [Create a Custom Object Tab](https://help.salesforce.com/s/articleView?id=sf.creating_custom_object_tabs.htm&type=5)
* [Webpack 4: Cannot resolve dependancy of symlinked module](https://github.com/webpack/webpack/issues/8824)

## Loosely-coupled objects using message passing to communicate.
The below code borrowed from Alex's project demonstrates loose coupling between two classes that need to communicate.  This pattern is also referred to as publish/subscribe.  The Timer "publishes" some change in its internal state -- in this case, a change in its clock.  Instead of needing to access the Timer object directly, it passes a message consisting of primitives (an array of integers representing the hours, minutes and seconds of the internal clock) to any function that has "subscribed" to the state change.  In turn, subscribers don't need to know anything about how the Timer class works; they need only know that they will be passed the hh,mm,ss representing the Timer's internal state.  These parameters represent the "message" that each subscriber can rely on being passed.


```bash
// Two files: Timer.js and Controller.js
// Controller will import Timer.js and TimerComponent.js.
// Controller initializes the view using View.createRoot().
```

## Controller.js
```javascript
// Controller.js
import Timer from "@ocdla/timer/Timer.js";
import TimerComponent from "@ocdla/timer/TimerComponent.js";

...

constructor() {
    this.timer = new Timer();
    this.view = View.createRoot("#timer");

    // Initially the timer reads 00:00:00.
    this.view.render(<TimerComponent hours="0" minutes="0" seconds="0" />);
}

// Example method for starting the timer.
doStart() {
    let [h,m,s] = ["get","time","from","user","input"];

    this.timer.onTick((h,m,s) => {
        // P.S. let me know if this doesn't work for you!
        this.view.update(<TimerComponent hours={h} minutes={m} seconds={s} />);
    });
}
```

## @ocdla/timer/Timer.js
```javascript
// Timer.js

// Called with each tick.
callbacks = [];

constructor() {
    this.callbacks = [];
}



tick() {

    // Do some ticking which is appropriate to this class.
    // ...

    // We've ticked, now iterate through the registered callbacks one by one,
    // passing the current tick value.
    // Our project only needs one callback;
    // But if others were added using onTick() they would also be
    // executed here and passed the current tick.
    for (let i = 0; i < this.callbacks.length; i++) {
        this.callbacks[i](h,m,s);
    }
}




// New code.
onTick(fn) {
    this.callbacks.push(fn);
}
```