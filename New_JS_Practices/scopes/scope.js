// block scope 
if (true) {
  let a = 10;
  const b = 45;
  var c = 44;
}

// console.log(a); 
// console.log(b); 
// console.log(c); // 44

// global scope 
let a = 10;
 if(true) {
    let a = 34;
    console.log("Inner", a);
 }
 console.log("Outer Value", a);
 

 // Nested function scope

 function One() {
    let username = "sujan";

    function Two() {
        const website = "youtube";
        console.log(username);
    }
    // console.log(website);  // not accessible
    Two();
 }
//  console.log(username) // not accessible
 One();

console.log(addOne(5)); // hoisting
 function addOne(num) {
    return num + 1;
 }
 addOne(4); 

 // but here we can not access addTwo before initialization
//  console.log(addTwo(9)); 
 
 const addTwo = function(num) {
    return num + 3;
   }
   addTwo(6);
   
//  Immediately Invoked Function Expression(IIFE) 

(function () {
   console.log("This is an IIFE");
}) ();

// or using arrow function 

(() => {
   console.log("This is an arrow function IIFE")
}) ();

// We use IIFE:
// To protect variables from being accessed globally.
// To execute code immediately while maintaining a clean namespace.

( (name) => {
   console.log(`My name is ${name}`);
   
}) ('sujan');

// Callstack

function first() {
   console.log('First function start');
   second();
   console.log('First function end');
 }
 
 function second() {
   console.log('Second function start');
   third();
   console.log('Second function end');
 }
 
 function third() {
   console.log('Third function execution');
 }
 
 first();