/** @jsx vNode */ /** @jsxFrag "Fragment" */


import myData from "./sample-data.json";


console.log(myData);

let icons = myData.map(cond => cond.icon + "");

console.log(icons);


let img = document.createElement("img");
img.src = `https://openweathermap.org/img/wn/${icons[0]}d@4x.png`;

document.body.appendChild(img);