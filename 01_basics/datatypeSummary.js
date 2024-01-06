// primitive datatype  
// 7 types : string, number, null, undefined, symbol, boolean, bigInt....

// const score =100;
// const isLoggedIn=true;
// const temp = null;
// const userEmail; 

const id = Symbol('123');
const anotherId = Symbol('123');

console.log(id===anotherId);

const bigNumber = 34653535365435435434n;

// reference type
 // array, object, functions...

 const countries = ["nepal", "China", "Pakistan"];
 console.log(countries);
 console.log(countries[1]);

 let myObj = {
    name:"sujan",
    roll:23
 }
 console.log(myObj);

 const myFunction =function() {
    console.log("Hello World")
 }
 myFunction()

