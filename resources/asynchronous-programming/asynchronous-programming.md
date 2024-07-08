



## JavaScript event loop, tasks, microtasks
* What is the call stack?  A data structure that keeps track of where we are at in the stack.  
* A JavaScript program executes in a single thread by populating the call stack; as functions are executed and returned, they are removed from the call stack.
* An executed function might need to fetch data from the network, HDD or some other system resource.
* This function would normally wait for the resource to be included in order to finish executing; well in other words, the function doesn't return making it impossible to return its value to the calling function.
* Meanwhile other instructions that could otherwise be queued for processing aren't able to be queued.  
  * These might be further instructions up and down the call stack or,
  * Additional instructions that _could_ otherwise be placed on the call stack cannot be.
* But... JavaScript has access to both synchronous and asynchronous APIs
* 


Modal dialog
: A dialog that appears on top of the main content and moves the system into a special mode requiring user interaction. This dialog disables the main content until the user explicitly interacts with the modal dialog.



```javascript
async function start() {

    let MY_MESSAGE = "Click OK when you are ready to continue...";

    // clock the start
    let now = new Date();
    console.log(now);


    // Executing synchronously.  Code execution will be paused here, while we 
    // await the users input.  No further instructions will be executed.
    // This is called a blocking operation.
    let p = alertUser(MY_MESSAGE);
    
    // Asynchronous alternative.
    // The process takes this next instruction off the call stack to be executed _as soon as the call stack is empty again_.
    // let p = wait(2000).then(() => alertUser(MY_MESSAGE)).then(() => console.log("finished"));
    console.log(p);


    let then = new Date();
    console.log(then);
} 

function wait(ms) {
    return {
        then: (fn) => Promise.resolve(setTimeout(fn, ms))
    };
}

function alertUser(msg) {
    return new Promise(function(resolve, reject) {
        let decision = window.confirm(msg);
        if(decision) {
            resolve(decision);
        } else {
            reject(decision);
        }
    });
}



```




## JavaScript pipelining
See also [Creating a pipeline function that is asynchronous so functions can be awaited](https://stackoverflow.com/questions/47042244/creating-a-pipeline-function-that-is-asynchronous-so-functions-can-be-awaited)
```javascript
function pipeline(...funcs) {
  return async function(val) {
    for (let func of funcs) {
      console.log(func);
      val = await func(val);
    }
    return val;
  } 
}
```

## Discussion of Monads
* [Monad in plain English?](https://stackoverflow.com/questions/2704652/monad-in-plain-english-for-the-oop-programmer-with-no-fp-background)
* [Monads, part 1](https://ericlippert.com/2013/02/21/monads-part-one/)
* [The Marvels of Monads](https://learn.microsoft.com/en-us/archive/blogs/wesdyer/the-marvels-of-monads)
* [What is a functor in JavaScript?](https://ruairidh.dev/what-the-functor/)

Discusssion of asynchronous programming and how async/await differes from Promise chaining.  

Why I avoid async/await
https://uniqname.medium.com/why-i-avoid-async-await-7be98014b73e



## How are workers implemented in JavaScript without threads?
* https://stackoverflow.com/questions/25082867/how-are-promises-implemented-in-javascript-without-threads
* Web Workers
* Service Workers
* Event Loop
* [Tasks, microtasks, queues and schedules](https://jakearchibald.com/2015/tasks-microtasks-queues-and-schedules/)
* [The JavaScript Execution Model](https://javascript.plainenglish.io/the-javascript-execution-model-part-2-467c7b9b42fa)
* https://www.encora.com/insights/javascript-settimeout-and-promise-under-the-hood