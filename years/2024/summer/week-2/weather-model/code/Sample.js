


// Represents an individual weather sample.
class Sample {


   // unix timestamp.
    dt;

    // Internal js date object.
    date;

    // Temperature at this time.
    temp;

    // Humidity percentage.
    humidity;

    // Wind speed and direction
    wind;

    // Barometric pressure.
    pressure;

    // Description of the weather.
    description;

    // Weather icon representing the conditions.
    icon;



    constructor(timestamp) {
        this.dt = timestamp;
        this.date = new Date(timestamp * 1000);
    }

    setTemp(temp) {

        this.temp = temp;
    }


    render() {

        return (
            <div className="sample">
                this.icon, this.temp, this.time
            </div>
        );
    }

    // Initialize a single Sample object from OpenWeather API data.
    static fromJson(data) {


        let sample = new Sample(data.dt);
        sample.temp = data.main.temp;
        sample.wind = data.main.wind;
        sample.pressure = data.main.pressure;
        sample.humidity = data.main.humidity;
        sample.icon = data.weather.icon;
        sample.description = data.weather.description;
        

        return sample;
    }



    static groupBy(data, fn) {
        
        let map = data.map((s) => {

            return Sample.fromJson(s);
        });


        return Object.groupBy(data, fn);
    }



    static collectionFromJson(json) {

        let samples = [];
        for (let i = 0; i < json.length; i++) {
            samples.push(Sample.fromJson(json[i]));
        }
        return samples;
    }

    



  // For any given sequence of samples, return the lowest temperature.
  static getLow(samples) {
    return samples.reduce((s1, s2) => Math.min(s1.temp, s2.temp));
  }  


  static getHigh(samples) {
    return samples.reduce((s1, s2) => Math.max(s1.temp, s2.temp));
  }
}