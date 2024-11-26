
console.log("Hello, this is a revision session of all js learned till now");

const greeting = 'Hello';
const name = "ALice";

const message = greeting.concat(',', name);
console.log(message);


const txt = "Javascript is fun!";

console.log(txt.search('is'));


const text = 'I like cats. cats are great!';

console.log(text.replaceAll("cats", 'Dogs'));


const txt1 = "Javascript";

console.log(txt1.slice(0,5));


const text2 = '   Hello, World!   ';
const trimmed = text2.trim();

console.log(trimmed);


const myText = "Javascript is fun";
console.log(myText.includes("Python"));
console.log(myText.includes("Javascript"));


const fruit = "Apple";
console.log(fruit.split());


// Numbers

const score = 89;
console.log(score);
console.log(typeof score);

const balance = new Number(5678);
console.log(balance);
console.log(typeof balance);

console.log(balance.toString().length);
console.log(balance.toFixed(2));
console.log(balance.toLocaleString()); // 5,678


const otherNumber = 234.6543;
console.log(otherNumber.toPrecision(4)); // 234.7


// *****************Maths*****************

console.log(Math.abs(-43)); //43

console.log(Math.round(44.78)); // 45

console.log(Math.ceil(2.3));  // 3

console.log(Math.floor(5.8)); //5

console.log(Math.sqrt(25));

console.log(Math.max(1,2,3,4,5,6,7,8,9,0,89));
console.log(Math.min(1,2,3,4,5,6,7,8,9,0,89));


// console.log(Math.random()); // between 0 and 1
console.log(Math.floor((Math.random() * 10) + 1)); 

// const max = 10;
// const min = 20;

// console.log(Math.floor(Math.random() * (max - min + 1) + min));


// *********************Dates in Js**************

let date = new Date();
console.log(date);
console.log(typeof date); // object

console.log(date.toString()); // Tue Nov 26 2024 12:05:57 GMT+0000 (Coordinated Universal Time)
console.log(date.toDateString()); // Tue Nov 26 2024
console.log(date.toLocaleDateString()); // 11/26/2024
console.log(date.toLocaleTimeString()); // 12:05:57 PM
console.log(date.toISOString()); // 2024-11-26T12:05:57.409Z
console.log(date.toLocaleString()); // 11/26/2024, 12:07:12 PM

const myDate = new Date(2026, 0, 3);
console.log(myDate.toDateString()); // Sat Jan 03 2026


const newDate = new Date();
console.log(newDate.getDate()); // 26
console.log(newDate.getMonth()) // 10
console.log(newDate.getDay());  // 2
console.log(newDate.getFullYear()); // 2024


const arr1 = [1,2,3,4,5];
const arr2 = [8,9,7];

// spread operator
const newArr = [...arr1, ...arr2];
console.log(newArr);
