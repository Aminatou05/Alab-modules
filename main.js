// This assignment focuses on leveraging code modules and the import/export features of JavaScript.
// Create modular code using the export keyword.
import{ name as personName, age} from './modules/color.js';
import { name, cleanTheHouse, driveMe, cookForMe ,findPerson, checkAge} from './modules/myPerson.js'
// second import sample
// instead of listing each property and method, I can import everything and then access using the module name
// import * as myPerson from './modules/myPerson.js'
console.log(personName);
console.log(age);
// 
// console.log(myPerson.name);
// console.log(myPerson.clean());
console.log(name)
console.log(cleanTheHouse());
console.log(driveMe());
console.log(cookForMe());
console.log(findPerson());
console.log(checkAge());