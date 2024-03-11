// This assignment focuses on leveraging code modules and the import/export features of JavaScript.
// Create modular code using the export keyword.
// person.js

//name  Variables
export const name = 'Halima';
export const age = '15';

 //personName function
 function findPerson() {
    return name + ' is ' + age + 'years old.';
 }

 //cook function for person
 function cookForMe(){
    return 'dinner is ready';
 } 

 //drive funtion
 function driveMe(){
    return ' take me to school';

 }

 //clean funtion for person
 function cleanTheHouse() {
    return 'the whole house is cleaned';

 }

//  //getAge function
 function checkAge() {
    return 'you are a minor';
 }

export {cleanTheHouse, driveMe, cookForMe ,findPerson, checkAge};










