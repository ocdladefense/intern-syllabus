# Model Discussion



## What is a model?


## How can the concept of model be useful in programming?
A modal is a logical expression of represented entities.  While structured data is the raw foundation of any program, (and is how we transfer data across networks) a program's model is responsible for organizing this data into entities that reflect how the data will be used.  The best models represent the smallest set of simple entities and express their combination in order to solve complex problems using a consistent set of logical symbols.  

### Similarities and differences between entities
First note, models in one respect are an organizing principle; and like any organizing principle, models imply recognizing that in any collection of members (entities, attributes, operations and relationships) there are members that can be grouped and ungrouped according to their similarities and dissimilarities.  For example, in a repair shop system to track which mechanic is assigned to a vehicle, there might be terms for the Mechanic's Name and Mechanic's Skill Level; and also for for the Vehicle's Make/Model and the Vehicle's Repair Code.  It might seem like it goes without saying, but the capactiy to organize these like attributes is a prerequisite for constructing models. The mechanic's name and skill level are properties of a mechanic; and likewise, to recognize that the make/model and issue code diagnosed on a vehicle are properly associated with a vehicle; this is essential to constructing adequate models that can be composed into more complex entities.

This leaves us with:
```javascript
const mechanic = {
    name: "Jane Doe",
    skillLevel: "Apprentice"
};

const vehicle = {
    makeModel: "Toyota Corolla",
    repairCode: "012"
};
```

### Composition
A written model implements the least number of types/entities that can be composed (read: combined) into more complex types or that have relationships to each other based on their parameters and return values.

### Applying this to OpenWeather API data
Take these two data structures returned from the [OpenWeather API](https://openweathermap.org/) - the first for the [Current Weather Data](https://openweathermap.org/current) service ([see here for the data](https://api.openweathermap.org/data/2.5/weather?lat=44.5646&lon=-123.26&units=imperial&lang=en&appid=3b023cc4b7da42b81cd324266c384075)) for Corvallis, OR <code>data/2.5/weather</code>, and the second for the [3-hour, 5-day forecast](https://openweathermap.org/forecast5) for Corvallis <code>data/2.5/forecast ([see here for data](https://api.openweathermap.org/data/2.5/forecast?lat=44.5646&lon=-123.26&mode=json&units=imperial&appid=3b023cc4b7da42b81cd324266c384075)):






### Returned JSON data for the current weather for Corvallis, OR:
```json
{
  "coord": {
    "lon": -123.26,
    "lat": 44.5646
  },
  "weather": [
    {
      "id": 800,
      "main": "Clear",
      "description": "clear sky",
      "icon": "01n"
    }
  ],
  "base": "stations",
  "main": {
    "temp": 69.28,
    "feels_like": 68.72,
    "temp_min": 64.24,
    "temp_max": 70.32,
    "pressure": 1020,
    "humidity": 60,
    "sea_level": 1020,
    "grnd_level": 1003
  },
  "visibility": 10000,
  "wind": {
    "speed": 10.36,
    "deg": 300
  },
  "clouds": {
    "all": 0
  },
  "dt": 1719810060,
  "sys": {
    "type": 1,
    "id": 3727,
    "country": "US",
    "sunrise": 1719750695,
    "sunset": 1719806507
  },
  "timezone": -25200,
  "id": 5720727,
  "name": "Corvallis",
  "cod": 200
}
```


### Returned JSON data for 3-hour, 5-day forecast for Corvallis, OR (_Note: the data below has been truncated to show only two samples._):
```json
{
  "cod": "200",
  "message": 0,
  "cnt": 40,
  "list": [
    {
      "dt": 1719813600,
      "main": {
        "temp": 66.92,
        "feels_like": 66.51,
        "temp_min": 57.38,
        "temp_max": 66.92,
        "pressure": 1020,
        "sea_level": 1020,
        "grnd_level": 1003,
        "humidity": 68,
        "temp_kf": 5.3
      },
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "01n"
        }
      ],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 3.69,
        "deg": 280,
        "gust": 3.56
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2024-07-01 06:00:00"
    },
    {
      "dt": 1719824400,
      "main": {
        "temp": 62.89,
        "feels_like": 62.49,
        "temp_min": 54.84,
        "temp_max": 62.89,
        "pressure": 1020,
        "sea_level": 1020,
        "grnd_level": 1004,
        "humidity": 77,
        "temp_kf": 4.47
      },
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "01n"
        }
      ],
      "clouds": {
        "all": 5
      },
      "wind": {
        "speed": 3.02,
        "deg": 275,
        "gust": 3
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2024-07-01 09:00:00"
    }],
    "city": {
        "id": 5720727,
        "name": "Corvallis",
        "coord": {
            "lat": 44.5646,
            "lon": -123.26
        },
        "country": "US",
        "population": 54462,
        "timezone": -25200,
        "sunrise": 1719750695,
        "sunset": 1719806507
    }
}
```


