

## General outline for calling code.
This code details a classic request/response lifecycle using a HTTP client.


```javascript
    class Controller {

 

        constructor() {

        }



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
            let resp = client.send(req);


            // Do something with the response;
            // probably update the view.
            resp.then(resp => resp.json()).then(displaySomething);
        }

    }
```

## HTTP Client
The HttpClient is responsible for sending the request and retrieving the response.  _Keep in mind the client can also use an alternate response; in this case it will check the cache for a fresh response and use that instead of going out to the network._

```javascript
class HttpClient {

    // Store cache responses for 15 minutes, at least.
    const TTL = 900;



    send(req) {

        

        let isState;

        // We need to know what now is in order to get elapsed time.
        

        // Remember, get() needs to return a Response object.
        // Do this through a toResponse() instance method on the LocalStorageResponse class.
        let entry = LocalStorageCache.get(req);
        
        // This is the general algorithm for extracting the max-age from the Cache-Control header.
        // Then subtract the respTime from nowTime and compare that to the max-age;
        // If it's greater than the stored cache response is STALE;
        // Otherwise, it's still FRESH.
        let cachedDate = new Date(entry.headers.get("Date"));
        let cachedTime = cachedDate.getTime() / 1000;

        let now = new Date();
        let nowTime = now.getTime() / 1000;

        let parts = entry.headers.get("Cache-Control").split(",").map(value => value.trim(););
        let cacheControl = {};
        for(var value of parts) {
            let [k,v] = parts.split("=");
            cacheControl[k] = v;
        }
        let maxAge = cacheControl["max-age"];

        let stale = (nowTime - respTime) > maxAge;

        // If we have a fresh cache entry, then we should return that.
        if(entry && !stale) {

            // get() should return a Response object.
            return Promise.resolve(entry);
        }


        return fetch(req).then(resp => {
            LocalStorageCache.put(req, resp);
            return resp;
        });

    }
}
```


## LocalStorageCache.js
The cache is responsible for putting items in the cache and retrieving them from the cache.

```javascript
class LocalStorageCache {

    static TTL = 900;
    
    static TEST_DATE = "Sat Jun 22 2024 22:09:50 GMT-0700";



    static put(req, httpResp) {

        let resp = LocalStorageResponse.newFromResponse(httpResp);

        // Creates a HTTP Date header with the appropriately formatted value.
        // e.g., "Sat, 22 Jun 2024 07:17:43 GMT".
        resp.addHeader("Date", new Date().toUTCString());

        // 900 seconds is 15 mintues.
        resp.addHeader("Cache-Control", "public, max-age="+LocalStorageCache.TTL);

        let key = httpResp.method + httpResp.url; // might need to add additional params though :)
        
        localStorage.setValue(key, resp.toJson());
    }


    static get(req) {
        let key = req.url;

        let json = localStorage.getValue(key);

        let cachedResp = LocalStorageResponse.newFromJson(json);

        return cachedResp.toResponse();
    }


    static cyrb53(str, seed = 0) {
        let h1 = 0xdeadbeef ^ seed, h2 = 0x41c6ce57 ^ seed;
        for(let i = 0, ch; i < str.length; i++) {
            ch = str.charCodeAt(i);
            h1 = Math.imul(h1 ^ ch, 2654435761);
            h2 = Math.imul(h2 ^ ch, 1597334677);
        }
        h1  = Math.imul(h1 ^ (h1 >>> 16), 2246822507);
        h1 ^= Math.imul(h2 ^ (h2 >>> 13), 3266489909);
        h2  = Math.imul(h2 ^ (h2 >>> 16), 2246822507);
        h2 ^= Math.imul(h1 ^ (h1 >>> 13), 3266489909);
    
        return 4294967296 * (2097151 & h2) + (h1 >>> 0);
    }
}
```


## LocalStorageResponse
LocalStorageResponse acts as a wrapper class to convert a JavaScript Response object to a string.

```javascript
class LocalStorageResponse {

    headers = {};

    body = null;

    constructor(body, headers) {
        this.body = body;
        this.headers = headers || this.headers;
    }

    addHeader(k, v) {
        this.headers[k] = v;
    }

    getHeaders() {
        return this.headers;
    }

    getBody() {
        return this.body;
    }


    toString() {
        return JSON.stringify(this);
    }

    /*
     Convert this object to a standard JavaScript Response object.
    */
    toResponse() {
        return Response.json(this.body, {headers: this.headers});
    }

    // Convert stored JSON in the format '{"headers":{"h1":"h1","h2":"h2","h3":"h3"},"body":"{"prop1":"val1"}"}'.
    static fromJson(cacheJson) {

        let [headers,body] = JSON.parse(cacheJson);

        return new LocalStorageResponse(body,headers);
    }

    // Convert an instance JavaScript Response to an instance of this class.
    static fromHttpResponse(httpResp) {

        let headers, body;
        let date, cacheControl, xCache;

        date = new Date(httpResp.headers.get("Date")).toUTCString();
        cacheControl = "public, max-age="+LocalStorageResponse.ttl;
        xCache = "local-storage-cache";

        headers = httpResp.headers;

        headers.append("Date", date);
        headers.append("Cache-Control", cacheControl);
        headers.append("X-Cache", xCache);

        return new LocalStorageResponse(httpResp.body, headers);
    }

}

```


## Example of getting the difference between two dates

```javascript
  let output = document.getElementById("output");
      let current_date = new Date();
      let previous_date = new Date("jan 14, 2022 12:21:45");
      
      // finding the difference in total seconds between two dates 
      let second_diff = current_date.getTime() - previous_date.getTime();
      output.innerHTML += "The first date is " + current_date + "</br>";
      output.innerHTML += "The second date is " + previous_date + "</br>";
      var time_Stamp_unit = {
         year: 31536000000,
         month: 31536000000 / 12,
         day: 86400000,
         hour: 3600000,
         minute: 60000,
         second: 1000,
      };
      var relativeTimeStamp = new Intl.RelativeTimeFormat("en", {
         numeric: "auto",
      });
      
      // iterate through all time stamps
      for (var ele in time_Stamp_unit) {
         
         // if second_diff's value is greater than particular timesapm unit's total millisecond value, format accordingly
         if (Math.abs(second_diff) > time_Stamp_unit[ele] || ele == "second") {
            output.innerHTML += "The difference between two dates is " + relativeTimeStamp.format(
               Math.round(second_diff / time_Stamp_unit[ele]), ele
            );
            break;
         }
      }
```