


# Week 0 - Exercises & Work Plan



# Week 1 - Approaches to Programming

## Git and development approaches
### Git - tools for iterative development
It is important to clearly distinguish between <code>git</code> a _development_ tool for coding, and package managers such as <code>npm</code>, which are meant to house _working_ code intended for use (either in development or production environments).  Git is intended to house code _working or not_.  In fact, from the perspective of collaboration, we should be using git several times a day to push _incremental_ but _substantive_ progress on our code - working or not.  A classic example of this would be when refactoring a class and implementing new class members and method stubs: it is more beneficial to the team (including managers) to see a partially finished class with at least some members and method definitions (not even method bodies!) in an initial feature branch commit, than it is to wait days until local development is finished before you push up.

### What is code?
Fundamentally, code is the _embodiment of knowledge about an entity in our actual world_ composed in the lexicon of one or more programming languages.  This knowledge can be about entities (for example, a class represents an entity such as a car, animal, celestial body, electronic device or building), relationships between entities, interactions between entities or processes that entities participate in to create other entities or collections of entities.  Therefore, it is the _knowledge_ that underlies a resulting program that should be primary to the developer - _not_ the programming itself.  A programming language constrains the lexicon that can used to express this knowledge; therefore, to the developer, if the knowledge that is being expressed using a given programming language is primary, then the language itself is _secondary_.  Programming is only the _tool_ that is used to express this knowledge.  The competency of a programmer is measured by their ability to collect, assess and synthesize the knowledge required to describe, evaluate and solve any given programming problem.  Of course, it also helps to know at least one programming language.


## Project #1 - Publish <code>local-storage-cache</code>
We will be using <code>localStorage</code> to build caching and storage for the Weather and News API applications.  This will allow us to store favorite zip codes and related weather forecasts on the one hand, and news feeds and stories on the other hand.  The resulting code will be published as our first JavaScript library of summer '24 term in <code>local-storage-cache</code>.

### Concepts: HTTP Request / Response
In order to properly conceptualize how to build our <code>localStorage</code> cache we need to dive into HTTP [<code>Request</code>](https://developer.mozilla.org/en-US/docs/Web/API/Request) and [<code>Response</code>](https://developer.mozilla.org/en-US/docs/Web/API/Response) objects for use in the JavaScript [<code>Fetch API</code>](https://developer.mozilla.org/en-US/docs/Web/API/fetch).  In turn that will give us a different approach for handling <code>localStorage</code> for your applications.  Specifically, we want to create a <code>LocalStorageCache</code> class consistent with the [<code>Cache</code> interface](https://developer.mozilla.org/en-US/docs/Web/API/Cache).   Feel free to brush up on the [<code>fetch(Request req)</code>](https://developer.mozilla.org/en-US/docs/Web/API/fetch#resource) alternate use for fetch on MDN.  It’s essential for taking your app and making it HTTP compatible.  It will also allow us to greatly simplify your LocalStorage code and learn about basic HTTP caching (which you can also Google about). While you've learned how to pass just a <code>URLString</code> to <code>fetch()</code>, the alternate signature is more explicit, enabling the developer to pass a <code>Request</code> object to fetch.

Remember that the crux of any caching class -- and, therefore, our <code>LocalStorageCache</code> class -- is a <code>put(Request req, Response resp)</code> method that does the storing.  It takes in the two HTTP objects as parameters and uses the Request object to build an appropriate key from the Request method and request URL (<code>req.method</code> and <code>req.url</code> - the key is just a string built from the two parameters) and assigns the Response to that cache slot.  In the case of <code>localStorage</code>, which can only store strings, this must be a JSON representation of the Response headers and body.  To handle the string (i.e., JSON) representations we will build another class, <code>LocalStorageResponse</code>.

In the end, we will need these classes:
* <code>NewsClient</code> or <code>WeatherClient</code> - has a <code>send()</code> method to send the Request.
* <code>LocalStorageCache</code> - accesses the <code>localStorage</code> interface.
* <code>LocalStorageResponse</code> - represents the <code>Response</code> object and has a <code>toString()</code> method to convert the object to a JSON string for storage.

### Resources
* "Overview of Cache Operation" in [Hypertext Transfer Protocol (HTTP/1.1): Caching](https://www.rfc-editor.org/rfc/rfc7234#section-2)
* [News Aggregator](https://github.com/SullivanKE/JS233-TermProject-News/blob/Internship/src/js/News_v2.js)
* [Prevent unnecessary network requests with the HTTP Cache](https://web.dev/articles/http-cache)
* [HTTP Caching](https://developer.mozilla.org/en-US/docs/Web/HTTP/Caching) from [MDN](https://developer.mozilla.org/en-US/)


### Example Code:
Note that there is no need to interact with the <code>LocalStorageCache</code> directly.  The HTTP Client (e.g., NewsClient or WeatherClient>) we build will interact with it.
```javascript

        function useOurHttpClientAndCache() {


            let articleUri = "some/uri.html";
            let zipCode = "97330";


            // Request an individual article.
            let url = new Url("https://api.articlextractor.com/v1/extract");
            url.addParam("url", articleUri);
            url.addParam("locale", "us");
            url.addParam("language", "en");
            url.addParam("api_token", "abcd123");
            // url.addParam("zipCode",zipCode);


            let req = new Request(url.toString());

            // Instantiate an HTTP client that we create.
            // Internally, the client uses fetch().
            // It can also access the LocalStorageCache and
            // store Responses in the cache for later use,
            // and return Responses already stored in the cache
            // that match() the Request.
            let client = new NewsClient();
            // client = new WeatherClient();

            // Client can retrieve anything from the LocalStorageCache
            // and return it as an HTTP Response.
            let resp = await client.send(req);


            // Do something with the response;
            // probably update the view.
            resp.json().then(displaySomething);

            
        }
```