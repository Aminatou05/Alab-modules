// This assignment focuses on leveraging code modules and the import/export features of JavaScript.
// Create modular code using the export keyword.
// person.js
//name  Variables

const message = "The weather is very  cold today";
 const weather = " and its rainy" + "";

//personName function
function checkWeather() {
  return message + " " + weather + "";
}

//cook function for person
function cookForMe() {
  return "dinner is ready";
}

//drive funtion
function driveMe() {
  return " take me to school";
}

//clean funtion for person
function cleanTheHouse() {
  return "the whole house is cleaned";
}

//  //getAge function
function checkAge() {
  return "you are a minor";
}

export {message,weather, cleanTheHouse, driveMe, cookForMe, checkWeather, checkAge };
