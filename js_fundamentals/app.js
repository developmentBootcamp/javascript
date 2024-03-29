// 1: alert('Hello World')

// 2: Log to console 
/*
console.log('Hello World');
console.log('123');
console.log(true);
var greeting = 'Hello'
console.log(greeting);
console.log([1,2,3,4]); //Array
console.log({a:1, b:2}); //object
console.table({a:1, b:2}); //table
console.error('Error 404'); //Errors
// console.clear(); //Clear Console
console.warn('Warning!'); //warning
console.time('HELLO'); //time
  console.log('Hello World');
  console.log('Hello World');
  console.log('Hello World');
  console.log('Hello World');
  console.log('Hello World');
  console.log('Hello World');
console.timeEnd('HELLO End'); //time
*/

// 3: var, let, const

/*
// var:

var name = 'Ali Hassan'; //declaring
var id = 12;
console.log(name);
name = 'Johny'; //reassigning
console.log(name);

var age; //Initializing
console.log(age);
age = 23;
console.log(age);

// Allowed "letters, numbers, _, $"
// Cannot start with a number

var firstName = 'John'; // Camel case
var first_name = 'John'; // Underscore
var FirstName = 'John'; // Pascal Case

// let:

let name;
let name = 'Ali Hassan'; //declaring
let id = 12;
console.log(name);
name = 'Johny'; //reassigning
console.log(name);

// const:

const name = 'Ali'; //cannot be reassigned, have to be assigned with a value
console.log(name);

const person = {
  name = 'Ali',
  age = 30
};

person.name = 'Hassan'; // const cannot be reassigned but it's objects can be.
person.age = '20';
console.log(person);

const num = [1, 2, 3, 4, 5];
num.push(6); // same goes for arrays, here we adding a number to array
console.log(num);
*/

// 4: Data Types:

/*
// PRIMITIVE

const name = 'John Doe'; // String
const age = 45; // Number
const hasKids = true; // Boolean
const car = null; // Null
let test; // Undefined
const sym = Symbol(); // Symbol

// REFERENCE TYPES - Objects

const hobbies = ['movies', 'music']; // Array
const address = {
  city: 'Boston',
  state: 'MA'
} // Object literal
const today = new Date();
console.log(today);
console.log(typeof today);
*/

// 5: Type Conversion

/*
let val;

// number to string
val = String(555); // note S is capital
val = String(4+4);
// bool to string
val = String(true); // note S is capital
// Date to string
val = String(new Date()); // note S is capital
// Array to string
val = String([1, 2, 3, 4]); // note S is capital
// toString()
val = (4).toString(); // note S is capital
val = (true).toString();

// String to number
val = Number('5');
val = Number(true);
val = Number(false);
val = Number(null);
val = Number('hello');
val = Number([1,2,3]);

val = parseInt('100.30');
val = parseFloat('100.30'); // needed for decimals

//output
console.log(val);
console.log(typeof val);
// console.log(val.length); //only works on Strings
console.log(val.toFixed(2)); //only works on numbers

const val1 = String(5);
const val2 = 6;
const sum = Number(val1 + val2);

console.log(sum);
console.log(typeof sum);
*/

// 6: Math Object & numbers

/*
const num1 = 100;
const num2 = 50;
let val;

// Simple math with numbers
val = num1 + num2;
val = num1 * num2;
val = num1 - num2;
val = num1 / num2;
val = num1 % num2;

// Math Object
val = Math.PI;
val = Math.E;
val = Math.round(2.4);
val = Math.ceil(2.4);
val = Math.floor(2.8);
val = Math.sqrt(64);
val = Math.abs(-3);
val = Math.pow(8, 2);
val = Math.min(2,33,4,1,55,6,3,-2);
val = Math.max(2,33,4,1,55,6,3,-2);
val = Math.random();

val = Math.random() * 20; // a random number b/w 1 & 19
val = Math.random() * 20 + 1; // a random number b/w 1 & 20
val = Math.floor(Math.random() * 20 + 1); // a random number b/w 1 & 20 excluding decimals

console.log(val);
*/

// 7: String Methods Concatenation

/*
const firstName = 'Ali';
const lastName = 'Hassan';
const age = 43;
const str = 'Hey, I have been looking for you'
const tags = 'Web Development, Programming, Web Designing, SEO'

let val;

val = firstName + lastName;


val = firstName + ' ' + lastName; //concatenation

val = firstName;
val += lastName; //appending

val = 'Ali ';
val += 'Hassan' //appending

val = 'Hello! My name is ' + firstName + ' and I am ' + age;

val = 'He\'s been living at her sister\'s for several months now'; // Escaping
val = "He's been living at her sister's for several months now"; // Escaping

// properties and methods available with strings

val = firstName.length; //legth

val = firstName.concat(' ', lastName); //concat()-> similar to concatenation

val = firstName.toUpperCase(); //changing the case
val = firstName.toLowerCase();

val = firstName[0]; //array

val = firstName.indexOf('l');
val = firstName.lastIndexOf('l');

val = firstName.charAt(1);
val = firstName.charAt(firstName.length - 1); // formula for showing the last character

val = firstName.substring(0, 2); //substring

val = firstName.slice(0,2) //almost same as substring
val = firstName.slice(-2) //but can be used with -ve values

val = str.split(' '); // turning into an array based on spaces
val = tags.split(','); // turning into an array based on comma's

val = str.replace('you', 'him'); // replaces you with him

val = tags.includes('Web Design'); //looks for a certain thing and tells us if its is located in the specified string or not
val = tags.includes('Java'); // false as it is not present in the specified string

console.log(val);
*/

// 8: Template literals/strings

/*
const name = 'Ali';
const age = 23;
const job = 'Developer';
const city = 'Lahore';

let html;

//Without template strings/literals (es5)
html = '<ul><li>Name: ' + name + '</li><li>Age: ' + age + '</li><li>Job: ' + job + '</li><li>City: ' + city + '</li></ul>';

html = '<ul>' +
          '<li>Name:  ' + name + '</li>' +
          '<li>Age:  ' + age + '</li>' +
          '<li>Job:  ' + job + '</li>' +
          '<li>City:  ' + city + '</li>' +
        '</ul>';

// With Template literals/strings
function hello(){
  return 'Hello World';
};

html = `
  <ul>
    <li>Name: ${name}</li>
    <li>Age: ${age}</li>
    <li>Job: ${job}</li>
    <li>City: ${city}</li>
    <li>${4+4}</li>
    <li>${4+name}</li>
    <li>${hello()}</li>
    <li>${hello()}</li>
    <li>${age > 30 ? 'over 30' : 'under 30'}</li>
  </ul>
`;

document.body.innerHTML = html
*/

// 9: Arrays

/*
// creating arrays
const num = [9, 740, 46, 38, 2]; // bracket method
const num2 = new Array(33, 36, 39, 41); // array constructor/object method
const fruit = ['apple', 'banana', 'orange', 'mango'];
const mixed = new Array('Hello', true, undefined, null, {a:1, b:2}, new Date());

let val;

val = num.length; //get array length
val = Array.isArray(num2); //check if it is an array
val = num[3];
val = num2[3]; // getting a single value by giving the index
val = num2.indexOf(39); //finding the index of
num[2] = 26; //Inserting into arrays


// Mutating Arrays

// num.push(350); // add into from end
// num.unshift(134); // add into at the start
// num.pop(); // take off 1 from the end
// num.shift(); // take off 1 from the start
// num.splice(1,3); // take off from certain somewhere to certain somewhere
// num.reverse() // reverses the original order

val = num.concat(fruit); //concate/combine both arrays num and fruit
val = fruit.sort(); // sorting array in an alphabetic order
// val = num.sort(); // This is supposed to be going from lowest to highest of five down here what it's doing is it's sorting by the first number. So what you want to do to fix this is use what's called the compare function.

// val = num.sort(function(a, b){
//   return a - b;
// }); //using conpare function to fix the issue with number sorting

function over_50(num){
  return num > 50
};

val = num.find(over_50); //finding a certain value using a function

console.log(num)
console.log(val)
*/

// 10: Object literals and accessingn them

/*
const person = {
  firstName: 'Irshad',
  lastName: 'Ali',
  age: 40,
  email: 'irshad@gmail.com',
  hobbies: ['music', 'sports'],
  address: {
    city: 'Lahore',
    state: 'Punjab'
  },
  getBirthYear: function(){
    return 2021 - this.age; // need to use this. to access an object outside the function
  }
}

let val;

val = person;
// Get specific value
val = person.firstName;
val = person['lastName'];
val = person.age;
val = person.hobbies[1]; // we can also type only hobbies to see all the array items
val = person.address.state;
val = person.address['city'];
val = person.getBirthYear();

console.log(val);

const people = [
  {name: 'Ali', age: 30},
  {name: 'Hassan', age: 23},
  {name: 'Imran', age: 40}
];

for(let i = 0; i < people.length; i++){
  console.log(people[i].name);
}
*/

// 11: Dates & Time

/*
let val ;

const today = new Date();
let birthdate = new Date('7/15/2000');
birthdate = new Date('7-15-2000');
birthdate = new Date('July 15 2000');

val = today; // shows current date & time
val = today.getDate(); // shows date of the month only
val = today.getMonth(); // shows month only
val = today.getDay(); // shows day of the week
val = today.getFullYear(); // shows the current year
val = today.getHours(); // get the current hour
val = today.getSeconds();
val = today.getMilliseconds();
val = today.getTime(); // amount of seconds that have passed since jan 1970
val = today.getMinutes(); // shows the minutes

birthdate.setDate(27); // set can be used to change the date and also certain things
birthdate.setMonth('2');
birthdate.setMinutes('4');
birthdate.setHours('7');
birthdate.setSeconds('45');
birthdate.setFullYear('2077');

console.log(val);
console.log(birthdate);
*/

// 12: Confditionals #1(if else)

/*
// if(something){
//   do something
// } else {
//   do something else
// }

const id = 100;

// // EQUAL TO
// if(id == 100){
//   console.log('CORRECT');
// } else {
//   console.log('INCORRECT');
// }

// // NOT EQUAL TO
// if(id != 101){
//   console.log('CORRECT');
// } else {
//   console.log('INCORRECT');
// }

// // EQUAL TO VALUE & TYPE
// if(id === 100){
//   console.log('CORRECT');
// } else {
//   console.log('INCORRECT');
// }

// // EQUAL TO VALUE & TYPE
// if(id !== 100){
//   console.log('CORRECT');
// } else {
//   console.log('INCORRECT');
// }

// Test if undefined
// if(typeof id !== 'undefined'){
//   console.log(`The ID is ${id}`);
// } else {
//   console.log('NO ID');
// }

// GREATER OR LESS THAN
// if(id <= 100){
//   console.log('CORRECT');
// } else {
//   console.log('INCORRECT');
// }

// IF ELSE

const color = 'yellow';

// if(color === 'red'){
//   console.log('Color is red');
// } else if(color === 'blue'){
//   console.log('Color is blue');
// } else {
//   console.log('Color is not red or blue');
// }

// LOGICAL OPERATORS

const name = 'Steve';
const age = 70;

// AND &&
if(age > 0 && age < 12){
  console.log(`${name} is a child`);
} else if(age >= 13 && age <= 19){
  console.log(`${name} is a teenager`);
} else {
  console.log(`${name} is an adult`);
}

// OR ||
if(age < 16 || age > 65){
  console.log(`${name} can not run in race`);
} else {
  console.log(`${name} is registered for the race`);
}

// TERNARY OPERATOR
console.log(id === 100 ? 'CORRECT' : 'INCORRECT');

// WITHOUT BRACES
if(id === 100)
  console.log('CORRECT');
else
  console.log('INCORRECT');

if(id === 100)
  console.log('CORRECT');
else
  console.log('INCORRECT');
*/

// 13: Conditionals #2(switch)

/*
const color = 'Yellow';

switch(color){
  case 'red':
    console.log('color is red');
    break;
  case 'blue':
    console.log('color is blue');
    break;
  default:
    console.log('Color is neither \"red\" nor \"blue\"');
}

let day;

switch(new Date().getDay()){
  case 0:
    day = 'Monday';
    break;
  case 1:
    day = 'Tuesday';
    break;
  case 3:
    day = 'Wednesday';
    break;
  case 4:
    day = 'Thursday';
    break;
  case 5:
    day = 'Friday';
    break;
  case 6:
    day = 'Saturday';
    break;
  case 7:
    day = 'Sunday';
    break;
}


console.log(`Today is ${day}`);
*/

// 14: Functions

/*
// Function Declaration

function greeitngs(first_name = 'Ali', last_name = 'Hassan'){
  // if(typeof first_name === 'undefined'){first_name = 'Ali'}; // used to be done before es6
  // if(typeof last_name === 'undefined'){last_name = 'Hassan'}; // used to be done before es6
  // console.log('Hello');
  return `Hello! ${first_name} ${last_name}`;
};

// console.log(greeitngs()); // what ever we write in () overwrites assignments above

// Function Expressions: it is basically putting a function as a variable assignment

const square = function(x = 12){
  return x*x;
};

// console.log(square());

// Immediatley Invokable Function Expressions - IIFE's

// (function(){
//   console.log('IIFE Ran');
// })();

// (function(name){
//   console.log(`Hello! ${name}`);
// })('Ali');

// Property Methods: when a function is put inside an object, it is called method.

const todo = {
  add: function(){
    console.log('function inside object.');
  },
  edit: function(id){
    console.log(`Now we are printing: ${id}`);
  }
}

todo.asin = function(){
  console.log('This is another method')
}

todo.add();
todo.edit('Something inside id');
todo.asin();
*/

// 15: General Loops

/*
// FOR LOOP

// for(let i = 0; i < 10; i++){
//   if(i === 2){
//     console.log('2 is my favorite number');
//     continue;
//   }

//   if(i === 5){
//     console.log('Stop the loop');
//     break;
//   }

//   console.log('Number '+ i);
// }

// WHILE LOOP

// let i = 0;

// while(i < 10){
//   console.log('Number ' + i);
//   i++;
// }

// DO WHILE

// let i = 100;

// do {
//   console.log('Number ' + i);
//   i++;
// }

// while(i < 10);

// LOOP THROUGH ARRAY
const cars = ['Ford', 'Chevy', 'Honda', 'Toyota'];

// for(let i = 0; i < cars.length; i++){
//   console.log(cars[i]);
// }

// FOREACH
// cars.forEach(function(car, index, array){
//   console.log(`${index} : ${car}`);
//   console.log(array);
// });

// MAP
// const users  = [
//   {id: 1, name:'John'},
//   {id: 2, name: 'Sara'},
//   {id: 3, name: 'Karen'},
//   {id: 4, name: 'Steve'}
// ];

// const ids = users.map(function(user){
//   return user.id;
// });

// console.log(ids);


// FOR IN LOOP
const user = {
  firstName: 'Ali', 
  lastName: 'Hassan',
  age: 40
}

for(let x in user){
  console.log(`${x} : ${user[x]}`);
}
*/

// 16: Window Objects / Methods/ Properties

/*
//window.alert("Hello, There"); // we don't need to specify window here as alert is a part of window object and browser and out environment understands that.

// alert("Hello! What is your name?")
// const ui = prompt(); // it just prompts the user to type something
// alert(`Welcome ${ui}! Nice to meet you.`);

// confirm
// if(confirm('Are you sure?')){
//   console.log('Yes');
// }
// else {
//   console.log('No')
// };

let val;

// Outter height and width
val = window.outerHeight;
val = window.outerWidth;

// Inner height and width
val = window.innerHeight;
val = window.innerWidth;

// Scroll points
val = window.scrollY; 
val = window.scrollX;

// Location Object
val = window.location;
val = window.location.hostname;
val = window.location.port;
val = window.location.href;
val = window.location.search;

// Redirect
//window.location.href = 'http://google.com'; // Usually we need to put our sire reference here
//Reload
//window.location.reload();

// History Object

// window.history.go(-2);
// val = window.history.length; // it shows how many websites we have visited

// Navigator Object
val = window.navigator;
val = window.navigator.appName;
val = window.navigator.appVersion;
val = window.navigator.userAgent;
val = window.navigator.platform;
val = window.navigator.vendor;
val = window.navigator.language;



console.log(val);
*/

// 17: Global Scope and Block Scope:

// Global Scope
var a = 1;
let b = 2;
const c = 3;

// function func_scope(){
//   var a = 4;
//   let b = 5;
//   const c = 6;
//   console.log(`Function Scope ${a} ${b} ${c}`);
// };
// func_scope();


// Block Scope
// if(true){
//   var a = 4;
//   let b = 5;
//   const c = 6;
//   console.log(`Function Scope ${a} ${b} ${c}`);
// }; // We noticed var changed whereas let and const didn't, it happened because both were declared with the same name which caused block to overwrite global var. that's var works inside block & global

// for(var a=0; a<=10; a++){
//   console.log(`for Loop: ${a}`)
// };

// for(let b=0; b<=10; b++){
//   console.log(`for Loop: ${b}`)
// };

console.log('Global Scope' + ' ' +a + ' ' + b + ' ' + c);