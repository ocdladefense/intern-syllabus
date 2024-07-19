/** @jsx vNode */ /** @jsxFrag "Fragment" */


import myData from "./sample-data.json";


console.log(myData);

let icons = myData.map(cond => cond.icon + "");

console.log(icons);

function iconGenerator(size = "small", dayOrNight = "day") {
  let sizes = {
    small: "",
    medium: "@2x",
    large: "@4x",
  };
  return function (filename) {
    return `https://openweathermap.org/img/wn/${filename}${dayOrNight == "night" ? "n" : "d"}${sizes[size]}.png`;
  };
}

// Generate night icons representing a given weather condition.
let myIconGenerator = iconGenerator("large","day");

icons.forEach(icon => {
    let url = myIconGenerator(icon);
    let img = document.createElement("img");
    img.src = url;
    document.body.appendChild(img);
});