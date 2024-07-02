


// Represents an individual weather sample.
class Sample {




    temp;

    wind;

    pressure;

    icon;

    description;

    humidity;





    construct(temp) {
        this.temp = temp;
    }


    // Initialize a single sample from OpenWeather API data.
    static fromJson(data) {


        let sample = new Sample(data.temp);
        sample.wind = data.main.wind;
        sample.pressure = data.main.pressure;
        sample.icon = data.weather.icon;
        sample.description = data.weather.description;
        sample.humidity = data.main.humidity;
        sample.date = new Date(data.dt * 1000);

        return sample;
    }

    

    static collectionFromJson(json) {

        let samples = [];
        for (let i = 0; i < json.length; i++) {
            samples.push(Sample.fromJson(json[i]));
        }
        return samples;
    }

    

    // Current implementation, slightly revised.
  getLow(forecast) {
    let _low = forecast[0].main.temp_min;

    for (let i = 1; i < forecast.length; i++) {
      let minTemp = forecast[i].main.temp_min;
      if (minTemp < _low) {
        _low = minTemp;
      }
    }

    return _low;
  }


  // Current implementation, slightly revised.
  getHigh(forecast) {
    let _high = forecast[0].main.temp_max;

    for (let i = 1; i < forecast.length; i++) {
        let _high = forecast[i].main.temp_max;
        if (maxTemp > _high) {
            _high = maxTemp;
        }
    }

    return _high;
  }


  // For any given sequence of samples, return the lowest temperature.
  static getTheLow(samples) {
    return samples.reduce((s1, s2) => Math.min(s1.temp, s2.temp));
  }  


  static getTheHigh(samples) {
    return samples.reduce((s1, s2) => Math.max(s1.temp, s2.temp));
  }
}