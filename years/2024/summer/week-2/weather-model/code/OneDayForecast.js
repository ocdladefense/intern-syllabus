


export default class OneDayForecast {

    #samples;

    constructor(samples) {

        this.#samples = samples;
        this.low = Samples.getLow(samples);
        this.high = Samples.getHigh(samples);


    }

   getSamples() {
    return this.#samples;
   }




}
