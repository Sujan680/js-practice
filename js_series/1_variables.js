
// console.log("My name is sujan ");

// variables are container for storing data.
// case sensitive.

// var : it can be re-declared and updated. A global scope variable

// let : it cannot be re-declared and updated. A block scope variable 

// const: it cannot be re-declared and updated. A block scope variable

var num = 12; // not suitable for use
var num = 23;
var num = 34;
console.log(num);


let age = 34;  // best to use
console.log(age);
let fullName = "sujan";
console.log(fullName);

let a ;// not necesary for initialization
console.log(a); // undefined

const age1 = 45;
console.log(typeof age1);

const b = 8; // it must be initialized some value to it
console.log(b);

const PI = 3.14;
let area = PI *2*2;
console.log(area);

{
    var myNum = 34;
    console.log(myNum)
}
console.log(myNum);


{
let myName = "NABIN";
}
console.log(myName);