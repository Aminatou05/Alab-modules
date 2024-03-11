// This assignment focuses on leveraging code modules and the import/export features of JavaScript.
// Create modular code using the export keyword.
import{name as personName, getAge} from './modules/color.js';
import { message, cleanTheHouse, driveMe, cookForMe ,checkWeather, checkAge} from './modules/myPerson.js'
// second import sample
// instead of listing each property and method, I can import everything and then access using the module name
// import * as myPerson from './modules/myPerson.js'
console.log(personName);
console.log(getAge(15));
// 
// console.log(myPerson.name);
// console.log(myPerson.clean());
console.log(message)
console.log(cleanTheHouse());
console.log(driveMe());
console.log(cookForMe());
console.log(checkWeather());
console.log(checkAge());