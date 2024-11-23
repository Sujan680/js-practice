console.log("Sujan Magar from the top of the world");


// Variables are container for storing data 
// js variable can be declared using : var, let, const
// variables are case-sensitive

// x = 1;  //They are automatically declared when first used:
// y = 2;
// z= 4;

// console.log(x);
// console.log(y);
// console.log(z);

//It is considered good programming practice to always declare variables before use

var x = 1;
let y = 5;
let z = x + y;
console.log(z);

// When to Use var, let, or const?

// 1. Always declare variables

// 2. Always use "const" if the value should not be changed

// 3. Always use "const" if the type should not be changed (Arrays and Objects)

// 4. Only use "let" if you can't use const

// 5. Only use "var" if you MUST support old browsers.

let age = 24;   //number
let name = "Sujan Magar"  // string
let isValid = true;   // boolean
let value = null;  // null
let anothervalue = undefined;  //undefined

console.log(age);
console.log(name);
console.log(isValid);
console.log(value);
console.log(anothervalue);

console.log(typeof age);
console.log(typeof name);
console.log(typeof isValid);
console.log(typeof value);
console.log(typeof anothervalue);


// Var: Variable can be re-declared and updated. A global scope

var price = 45.99;
console.log(price);

var price = 44;
console.log(price);


// Let: it can not be redclared but can be updated. A block scope

let fullName = "Mount Everest";
fullName = "Sujan"  // can be updated 

// let fullName = "Mt. Api"; // not allowed to redclare with same name
console.log(fullName);

// Const: It can not be redclared or updated. A block scope

const PI = 3.1421;
// PI = 22424;   // here it can not be updated 
console.log(PI);

let bigInt = BigInt(123)
console.log(bigInt);
console.log(typeof bigInt);


let mySymbol = Symbol("SUJAN");
console.log(mySymbol);
console.log(typeof mySymbol);


const students = {
    fullName: "sujan magar",
    age: 26,
    gpa: 3.5,
    isLogin: true
}
students.age = 34;  // updation of object
students["fullName"] = "Magar";
console.log(students["fullName"]);
console.log(students.age);

// From the Chai aur Javscript

const accountId = 12313;
let accountEmail = "sujanmagar1234@gmail.com";
var accountPassword = "1234sujan%";
accountCity = "Pokhara";

// accountId = 22424; // not allowed to update

accountEmail = "magarsujan566@gmail.com";

console.log(accountEmail);

console.log(accountId);
console.table([accountEmail, accountId, accountPassword,accountCity])

