


### Icon retrieval
```javascript
/**
A Server class that can respond to requests for a image description file.
It should be able to parse a request for an image file URL based on three parameters:
- code, pod=d, size=small
Assume that we have injected the relevant JSON via Webpack (see above).
Note: this should not return the actual ima
ge (that step can come later).  This function should return a string that is the URL for accessing the image file from https://openweathermap.org/img/wn/11d.png.
	
    Pod = "d" (for daytime-indicative icon); "n" (for nighttime-indicative icon)
    Parameter sizes: "small", "medium", "large"
    Example returned sizes: "13d.png", "13d@2x.png", "13d@4x.png"

    */
```


### Location API
The app should determine the current user's latitude and longitude using device geolocation data:
<code>navigator.geolocation.getCurrentPosition()</code>.


### <code>onSubmit()</code>
Should be refactored so that application initialization is independent of <code>onSubmit()</code>.

### LocalStorage
Local Storage should be used to store zip codes and location data.

### Cache
Responses to previous news/weather API queries, should be stored in the cache for offline use.




