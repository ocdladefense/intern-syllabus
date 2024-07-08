
## Examples
* https://www.aerisweather.com/weather/local/us/or/salem
* https://forecastadvisor.com/Oregon/Corvallis/97330/

## Links relevant to this discussion
```javascript
LAT = 44.5646
LON = -123.2620
APPID = 3b023cc4b7da42b81cd324266c384075
```

### List of weather conditions, condition codes, and their related icons
Here is the link to the list of [possible weather conditions](https://openweathermap.org/weather-conditions).  _Remember that icons have both night/day alternates.  Day-appropriate icons are suffixed with "d"; night-appropriate icons are suffixed with "n".  These correspond to the <code>sys.pod</code> key in each data sample.  The complete list of codes and icons is [available in spreadsheet form](https://docs.google.com/spreadsheets/d/1Hl0TjF_XoKipeREXD6T0VhGfumNSSWBIqGMpy1tSCZM/edit?usp=sharing).



### Get the current weather
Access the data [here](https://api.openweathermap.org/data/2.5/weather?lat=44.5646&lon=-123.26&units=imperial&lang=en&appid=3b023cc4b7da42b81cd324266c384075) to get the current weather in Corvallis, OR.
```javascript
https://api.openweathermap.org/data/2.5/weather?lat=44.5646&lon=-123.26&units=imperial&lang=en&appid=3b023cc4b7da42b81cd324266c384075
```

### Forecast by lat/lon
Access the data [here](https://api.openweathermap.org/data/2.5/forecast?lat=44.5646&lon=-123.26&mode=json&units=imperial&appid=3b023cc4b7da42b81cd324266c384075)
```javascript
https://api.openweathermap.org/data/2.5/forecast?lat=44.5646&lon=-123.26&mode=json&units=imperial&appid=3b023cc4b7da42b81cd324266c384075
```

### Forecast by locality
Access the data [here](https://api.openweathermap.org/data/2.5/forecast?q=Corvallis,OR,US&mode=json&units=imperial&appid=3b023cc4b7da42b81cd324266c384075)
```javascript
https://api.openweathermap.org/data/2.5/forecast?q=Corvallis,OR,US&mode=json&units=imperial&appid=3b023cc4b7da42b81cd324266c384075
```

### Forecast by zip code
Access the data [here](https://api.openweathermap.org/data/2.5/forecast?q=Corvallis,OR,US&mode=json&units=imperial&appid=3b023cc4b7da42b81cd324266c384075)
```javascript
https://api.openweathermap.org/data/2.5/forecast?zip=97401,US&mode=json&units=imperial&appid=3b023cc4b7da42b81cd324266c384075
```


### Getting the ISO Date from a Unix timestamp
```javascript
let ts = 1719824400;
let d = new Date(ts * 1000).toUTCString();
let time = d.slice(-11, -4);
d = new Date(); 


let options = {};
// options.timeZoneName;
let timezone = -14400
let utcOffset = timezone / 3600;
options.timeZone = "-04";//data.city.timezone;
d.toLocaleString('en-US', options);
```


```javascript
let icons = new Map();
icons.put(500, {desc: "rain", icon: "10d"});
icons.put(200, {desc: "thunderstorm", icon: "11d"});
icons.put(800, {desc: "clear sky", icon: "15d"});
```


