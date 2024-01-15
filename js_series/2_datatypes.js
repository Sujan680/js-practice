// Primitive types : 7 
const age = "sujan"; // string data types
console.log(age);
console.log(typeof(age));
console.log(typeof age);

const price = 234; // number data types
console.log(price);
console.log(typeof price);

let isLoggedIn = true; // boolean type
console.log(isLoggedIn);

let value = null;  // null type
console.log(value);

let name1 ;  // undefined type
console.log(name1);

let myRoll = Symbol(34); // symbol
console.log(myRoll);
console.log(typeof myRoll);

let a = BigInt(1234565445);  // bigint
console.log(a);
console.log(typeof a);

// non-primitive: objects, 

const students = {
    username: "sujan",
    age: 23,
    roll: 2,
    isPass:true
}
console.log(students);
console.log(typeof students);
console.log(students.username);
console.log(students["roll"]);


const product = {
    productName:"Parker Jotter Standard CT Ball Pen",
    rating:4,
    offer:4,
    price:270
}
console.log(product);