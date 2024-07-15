/** @jsx vNode */
/** @jsxFrag "Fragment" */
const myData = [{
  code: 200,
  label: "Thunderstorm",
  description: "thunderstorm with light rain",
  icon: 11,
  "icon-day": "11d",
  "icon-night": "11n",
  notes: ""
}, {
  code: 201,
  label: "Thunderstorm",
  description: "thunderstorm with rain",
  icon: 11,
  "icon-day": "11d",
  "icon-night": "11n",
  notes: ""
}, {
  code: 202,
  label: "Thunderstorm",
  description: "thunderstorm with heavy rain",
  icon: 11,
  "icon-day": "11d",
  "icon-night": "11n",
  notes: ""
}, {
  code: 210,
  label: "Thunderstorm",
  description: "light thunderstorm",
  icon: 11,
  "icon-day": "11d",
  "icon-night": "11n",
  notes: ""
}, {
  code: 211,
  label: "Thunderstorm",
  description: "thunderstorm",
  icon: 11,
  "icon-day": "11d",
  "icon-night": "11n",
  notes: ""
}, {
  code: 212,
  label: "Thunderstorm",
  description: "heavy thunderstorm",
  icon: 11,
  "icon-day": "11d",
  "icon-night": "11n",
  notes: ""
}, {
  code: 221,
  label: "Thunderstorm",
  description: "ragged thunderstorm",
  icon: 11,
  "icon-day": "11d",
  "icon-night": "11n",
  notes: ""
}, {
  code: 230,
  label: "Thunderstorm",
  description: "thunderstorm with light drizzle",
  icon: 11,
  "icon-day": "11d",
  "icon-night": "11n",
  notes: ""
}, {
  code: 231,
  label: "Thunderstorm",
  description: "thunderstorm with drizzle",
  icon: 11,
  "icon-day": "11d",
  "icon-night": "11n",
  notes: ""
}, {
  code: 232,
  label: "Thunderstorm",
  description: "thunderstorm with heavy drizzle",
  icon: 11,
  "icon-day": "11d",
  "icon-night": "11n",
  notes: ""
}, {
  code: 300,
  label: "Drizzle",
  description: "light intensity drizzle",
  icon: "09",
  "icon-day": "09d",
  "icon-night": "09n",
  notes: ""
}, {
  code: 301,
  label: "Drizzle",
  description: "drizzle",
  icon: "09",
  "icon-day": "09d",
  "icon-night": "09n",
  notes: ""
}, {
  code: 302,
  label: "Drizzle",
  description: "heavy intensity drizzle",
  icon: "09",
  "icon-day": "09d",
  "icon-night": "09n",
  notes: ""
}, {
  code: 310,
  label: "Drizzle",
  description: "light intensity drizzle rain",
  icon: "09",
  "icon-day": "09d",
  "icon-night": "09n",
  notes: ""
}, {
  code: 311,
  label: "Drizzle",
  description: "drizzle rain",
  icon: "09",
  "icon-day": "09d",
  "icon-night": "09n",
  notes: ""
}, {
  code: 312,
  label: "Drizzle",
  description: "heavy intensity drizzle rain",
  icon: "09",
  "icon-day": "09d",
  "icon-night": "09n",
  notes: ""
}, {
  code: 313,
  label: "Drizzle",
  description: "shower rain and drizzle",
  icon: "09",
  "icon-day": "09d",
  "icon-night": "09n",
  notes: ""
}, {
  code: 314,
  label: "Drizzle",
  description: "heavy shower rain and drizzle",
  icon: "09",
  "icon-day": "09d",
  "icon-night": "09n",
  notes: ""
}, {
  code: 321,
  label: "Drizzle",
  description: "shower drizzle",
  icon: "09",
  "icon-day": "09d",
  "icon-night": "09n",
  notes: ""
}, {
  code: 500,
  label: "Rain",
  description: "light rain",
  icon: 10,
  "icon-day": "10d",
  "icon-night": "10n",
  notes: ""
}, {
  code: 501,
  label: "Rain",
  description: "moderate rain",
  icon: 10,
  "icon-day": "10d",
  "icon-night": "10n",
  notes: ""
}, {
  code: 502,
  label: "Rain",
  description: "heavy intensity rain",
  icon: 10,
  "icon-day": "10d",
  "icon-night": "10n",
  notes: ""
}, {
  code: 503,
  label: "Rain",
  description: "very heavy rain",
  icon: 10,
  "icon-day": "10d",
  "icon-night": "10n",
  notes: ""
}, {
  code: 504,
  label: "Rain",
  description: "extreme rain",
  icon: 10,
  "icon-day": "10d",
  "icon-night": "10n",
  notes: ""
}, {
  code: 511,
  label: "Rain",
  description: "freezing rain",
  icon: 13,
  "icon-day": "13d",
  "icon-night": "13n",
  notes: ""
}, {
  code: 520,
  label: "Rain",
  description: "light intensity shower rain",
  icon: "09",
  "icon-day": "09d",
  "icon-night": "09n",
  notes: ""
}, {
  code: 521,
  label: "Rain",
  description: "shower rain",
  icon: "09",
  "icon-day": "09d",
  "icon-night": "09n",
  notes: ""
}, {
  code: 522,
  label: "Rain",
  description: "heavy intensity shower rain",
  icon: "09",
  "icon-day": "09d",
  "icon-night": "09n",
  notes: ""
}, {
  code: 531,
  label: "Rain",
  description: "ragged shower rain",
  icon: "09",
  "icon-day": "09d",
  "icon-night": "09n",
  notes: ""
}, {
  code: 600,
  label: "Snow",
  description: "light snow",
  icon: 13,
  "icon-day": "13d",
  "icon-night": "13n",
  notes: ""
}, {
  code: 601,
  label: "Snow",
  description: "snow",
  icon: 13,
  "icon-day": "13d",
  "icon-night": "13n",
  notes: ""
}, {
  code: 602,
  label: "Snow",
  description: "heavy snow",
  icon: 13,
  "icon-day": "13d",
  "icon-night": "13n",
  notes: ""
}, {
  code: 611,
  label: "Snow",
  description: "sleet",
  icon: 13,
  "icon-day": "13d",
  "icon-night": "13n",
  notes: ""
}, {
  code: 612,
  label: "Snow",
  description: "light shower sleet",
  icon: 13,
  "icon-day": "13d",
  "icon-night": "13n",
  notes: ""
}, {
  code: 613,
  label: "Snow",
  description: "shower sleet",
  icon: 13,
  "icon-day": "13d",
  "icon-night": "13n",
  notes: ""
}, {
  code: 615,
  label: "Snow",
  description: "light rain and snow",
  icon: 13,
  "icon-day": "13d",
  "icon-night": "13n",
  notes: ""
}, {
  code: 616,
  label: "Snow",
  description: "rain and snow",
  icon: 13,
  "icon-day": "13d",
  "icon-night": "13n",
  notes: ""
}, {
  code: 620,
  label: "Snow",
  description: "light shower snow",
  icon: 13,
  "icon-day": "13d",
  "icon-night": "13n",
  notes: ""
}, {
  code: 621,
  label: "Snow",
  description: "shower snow",
  icon: 13,
  "icon-day": "13d",
  "icon-night": "13n",
  notes: ""
}, {
  code: 622,
  label: "Snow",
  description: "heavy shower snow",
  icon: 13,
  "icon-day": "13d",
  "icon-night": "13n",
  notes: ""
}, {
  code: 701,
  label: "Mist",
  description: "mist",
  icon: 50,
  "icon-day": "50d",
  "icon-night": "50n",
  notes: ""
}, {
  code: 711,
  label: "Smoke",
  description: "smoke",
  icon: 50,
  "icon-day": "50d",
  "icon-night": "50n",
  notes: ""
}, {
  code: 721,
  label: "Haze",
  description: "haze",
  icon: 50,
  "icon-day": "50d",
  "icon-night": "50n",
  notes: ""
}, {
  code: 731,
  label: "Dust",
  description: "sand/dust whirls",
  icon: 50,
  "icon-day": "50d",
  "icon-night": "50n",
  notes: ""
}, {
  code: 741,
  label: "Fog",
  description: "fog",
  icon: 50,
  "icon-day": "50d",
  "icon-night": "50n",
  notes: ""
}, {
  code: 751,
  label: "Sand",
  description: "sand",
  icon: 50,
  "icon-day": "50d",
  "icon-night": "50n",
  notes: ""
}, {
  code: 761,
  label: "Dust",
  description: "dust",
  icon: 50,
  "icon-day": "50d",
  "icon-night": "50n",
  notes: ""
}, {
  code: 762,
  label: "Ash",
  description: "volcanic ash",
  icon: 50,
  "icon-day": "50d",
  "icon-night": "50n",
  notes: ""
}, {
  code: 771,
  label: "Squall",
  description: "squalls",
  icon: 50,
  "icon-day": "50d",
  "icon-night": "50n",
  notes: ""
}, {
  code: 781,
  label: "Tornado",
  description: "tornado",
  icon: 50,
  "icon-day": "50d",
  "icon-night": "50n",
  notes: ""
}, {
  code: 800,
  label: "Clear",
  description: "clear sky",
  icon: "01",
  "icon-day": "01d",
  "icon-night": "01n",
  notes: ""
}, {
  code: 801,
  label: "Clouds",
  description: "few clouds: 11-25%",
  icon: "02",
  "icon-day": "02d",
  "icon-night": "02n",
  notes: ""
}, {
  code: 802,
  label: "Clouds",
  description: "scattered clouds: 25-50%",
  icon: "03",
  "icon-day": "03d",
  "icon-night": "03n",
  notes: ""
}, {
  code: 803,
  label: "Clouds",
  description: "broken clouds: 51-84%",
  icon: "04",
  "icon-day": "04d",
  "icon-night": "04n",
  notes: ""
}, {
  code: 804,
  label: "Clouds",
  description: "overcast clouds: 85-100%",
  icon: "04",
  "icon-day": "04d",
  "icon-night": "04n",
  notes: "should this be 05d?"
}];
console.log(myData);
let icons = myData.map(cond => cond.icon + "");
console.log(icons);
let img = document.createElement("img");
img.src = `https://openweathermap.org/img/wn/${icons[0]}d@4x.png`;
document.body.appendChild(img);

//# sourceMappingURL=compiled.js.map