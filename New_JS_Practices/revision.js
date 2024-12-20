
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


const myGirls = ["Cecilie", "Lone"];

const myBoys = ["Emil", "Tobias", "Linus"];

const myChildren = myGirls.concat(myBoys);
console.log(myChildren);


const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.splice(2,2, "Grapes", "Papaya"));
console.log(fruits);

console.log(fruits.splice(1,1));

console.log(fruits);

console.log(fruits.indexOf("Banana"));


// using find array methods
const numbers = [4, 9, 16, 25, 36];
let first = numbers.find(myFunction);

function myFunction(value, index, array) {
    return value > 16
}
console.log("The number greater than 25 is", first);


// Array methods

console.log(Array.isArray("Sujan"));

console.log(Array.from("Sujan"));

let score1 = 234;
let score2 = 343;
let score3 = 654;

console.log(Array.of(score1, score2, score3)); // [234, 343, 654]
 

// functions in JS 

function loginUserMessage(username) {
    return `${username} just loggined In`
}
// console.log(loginUserMessage("Sujan"));


function loginUserMessage(username) {
    if(username === undefined){  // can be done as (!username)
        console.log("Please enter a username");
        return // after this nothing will be done
    }
    return `${username} just loggined In`
}
console.log(loginUserMessage());

function calculateCartPrice(...num) {  //...num this is rest operator
    return num;
}
console.log(calculateCartPrice(12,23,34,555));

// The rest operator in JavaScript, represented by three dots (...), 
// allows you to collect multiple elements or arguments into a single array or object. 

// another examples 

function myCartSection(num1, num2, ...num){
    return num;
}
console.log(myCartSection(12, 22, 33, 55));


function sum(...numbers) {
    return numbers.reduce((acc, val) => acc + val, 0);
}

console.log(sum(1,2,3,4,5,6)); // 21


// Array Destructuring 

const colors = ['red', 'green', 'blue', 'white', 'pink', 'yellow'];

const [one, two, ...restColors] = colors;

console.log(one);
console.log(two);
console.log(restColors);

// here restColors collects the remaining elements of the array after one and two

// Object  destructuring

const user = {
    name: "sujan",
    age: 25,
    city: 'pokhara',
    profession: 'Engineer'
};

const {name: username, age, ...restDetails} = user;

console.log(username);
console.log(age);
console.log(restDetails);


// The rest operator collects elements while spread operator expands the elements

function greet(greeting, ...names) {
    console.log(`${greeting}, ${names.join(' and ')}!`);
  }
  
  greet('Hello', 'Alice', 'Bob', 'Charlie');


// Arrow function

const greet1 = (name) => ` Hello, ${name}`;
console.log(greet1("Js developer"));

// map and filter method

const myNumbers = [1,2,3,4,5,6,7,8];

let newNum = myNumbers.map((val) => val * 2);
console.log(newNum);

let evens = myNumbers.filter(val => val % 2 === 0);
console.log("Evens",evens);


// SLice and spliece:
// slice returns the shallow copy of a portion of an aray 

const myFruits = ['apple', 'banana', 'cherry', 'papaya']
console.log("Slice",myFruits.slice(2,4));
console.log("Original array", myFruits);

const veggies = ['carrot', 'broccoli', 'spinach', 'cucumber'];
console.log("Splice", veggies.splice(1,2, 'Sujan'));
console.log("Original array", veggies);

// Destructuring 

const person = ['sujan', 'ram', 'sita', 'hari', 'gita'];

const [name1, name2, name3] = person;

console.log(name1);
console.log(name2);
console.log(name3);


// Rest and Spread operator 

const Add = (...numbers) => numbers.reduce((acc, val) =>
    acc + val , 0
);
console.log("Sum :" , Add(1,2,3,4,5,6,7));

const oneArr = [1,2,3,4];
const twoArr = [4,5,6];

const newArray = [...oneArr, ...twoArr] ;
console.log(newArray);
