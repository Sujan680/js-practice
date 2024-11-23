
// Data types : number, string, boolean, null, undefined, symbol, bigInt, 

let length = 12;
let breadth = 10;
let area = length * breadth;
console.log(area);


let x = 15 + "SUjan";
console.log(x);

console.log("12" + "sujan");
console.log("volvo" + "12" + 4);

let car;
console.log(car);  // undefineed

// NaN is not equal to itself
console.log(typeof NaN);
console.log(NaN == NaN);


let num1 = 12;
console.log(num1);

num1 = "hello";
console.log(num1);

num1 = [1,2,3,4];
console.log(num1);


let s = "hello";
console.log(s.length);

let x1 = 23;
console.log(x1.toString());


// A Symbol is Never Equal to Another One

let s1 = Symbol("abc");
let s2 = Symbol("abc")
console.log(s1 == s2);  // false

// Bigint

let b = BigInt("0b010101010101010101010101011");
console.log(b);

