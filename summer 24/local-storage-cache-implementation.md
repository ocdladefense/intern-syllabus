

## General discussion
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
            let resp = await client.send(req);


            // Do something with the response;
            // probably update the view.
            resp.json().then(displaySomething);

            
        }

    }
```

# Local Storage

```javascript
class NewsClient {

    // Store cache responses for 15 minutes, at least.
    const TTL = 900;



    send(req) {

        let respDate = new Date(resp.headers.get("Date"));

        let now = new Date();
        let entry = LocalStorageCache.get(req);
        let cachedTime = entry.getTime() / 1000;
        let nowTime = now.getTime() / 1000;
        let stale = (nowTime - respTime) > cacheTTL;



        if(stale) {

            // get() should return a Response object.
            return 
        }


        return fetch(req).then(resp => {



            LocalStorageCache.put(req, resp);
        });

    }
}
```


## LocalStorageCache.js

```javascript
class LocalStorageCache {

    static TTL = 900;
    
    static TEST_DATE = "Sat Jun 22 2024 22:09:50 GMT-0700";



    static put(req, httpResp) {

        let resp = new LocalStorageResponse(httpResp);

        // Creates a HTTP Date header with the appropriately formatted value.
        // e.g., "Sat, 22 Jun 2024 07:17:43 GMT".
        resp.addHeader("Date", new Date().toUTCString());

        // 900 seconds is 15 mintues.
        resp.addHeader("Cache-Control", "max-age=900");

        let key = req.url; // might need to add additional params though :)
        let resp = LocalStorageResponse.newFromResponse(httpResp);
        
        localStorage.setValue(key, resp.toJson());
    }


    static get(req) {
        let key = req.url;

        let json = localStorage.getValue(key);

        return LocalStorageResponse.newFromJson(json);
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



```javascript
class LocalStorageResponse {

    headers = {};

    #body = null;

    constructor(body) {
        this.body = body;
    }

    addHeader(k, v) {
        headers[k] = v;
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




    static fromHttpResponse(httpResp) {

        let headers, body;
        let date, cacheControl, xGenerator;

        date = new Date(httpResp.headers.get("Date")).toUTCString();
        cacheControl = "max-age="+LocalStorageResponse.ttl;
        xGenerator = "NewsClient";

        headers = {
            "Date": date,
            "Cache-Control": cacheControl,
            "X-Generator": xGenerator
        };

        headers = httpResp.headers;

        body = httpResp.getBody();



        let resp = new Response(httpResp.getBody(), {headers: headers});l

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