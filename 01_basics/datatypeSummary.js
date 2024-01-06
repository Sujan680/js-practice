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

//  const countries = ["nepal", "China", "Pakistan"];
//  console.log(countries);
//  console.log(countries[1]);

//  let myObj = {
//     name:"sujan",
//     roll:23
//  }
//  console.log(myObj);

//  const myFunction =function() {
//     console.log("Hello World")
//  }
//  myFunction()


 // heap and stack 

 // primitive => stack; 
 // Reference => heap;

 let myEmail = "sujanmagar@gmail.com";
 let anotherEmail = myEmail;
anotherEmail = "suzanmar@google.com";
console.log(myEmail);
 console.log(anotherEmail);

 let userOne = {
   name: "sujan",
   roll :3
 }

 let userTwo = userOne;
  
 userTwo.email = "sujanmagar@google.com"
console.log(userOne.email);
console.log(userTwo.email);
