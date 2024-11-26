

// Arrays in Js 

const fruits = ["apple", "banana", "chery"];

console.log(fruits);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);

fruits[3] = "sujan"; // add the sujan to index 3
console.log(fruits);

fruits.push('Monkey');
console.log(fruits);

fruits.pop()
console.log(fruits);


console.log(fruits.length);

fruits.unshift("mango");
console.log(fruits);


// const cars = ["Saab", "Volvo", "BMW"];
// console.log(cars);
// console.log(typeof cars);  // arrays are objects
// console.log(cars.length);

// for (let index = 0; index < cars.length; index++) {
//     const element = cars[index];
//     console.log(element);
//     index += 1;
// }


// accessing the last arrray element

// console.log(cars[cars.length-1]);


//************** */ Loops in js : for, while, do-while**********

for (let i = 0; i <= 5; i++) {
    let txt = "Sujan";
    console.log(txt);
}
console.log("Loop has terminated");

// while loop
let i = 0;
while (i <= 5) {
    console.log("HI, this is sujan");
    i = i + 1;
}
console.log("While loop has ended");

// do-while loop : it executes at least one 
let num = 1;
do {
    console.log("Hello World!");
    num += 1;
} while (num <= 5);

const cars = ["Saab", "Volvo", "BMW"];
console.log(cars);
console.log(typeof cars);  // arrays are objects
console.log(cars.length);


for (let index = 0; index < cars.length; index++) {
    const element = cars[index];
    console.log(element);
}


// for-of loops : arrays , strings ...

const numbers = [1,2,3,4,5];

for (const number of numbers) {
    console.log(number);
    
}

const str = "SUJAN";
for(let i of str){
    console.log(i);
    
}

// for-in loops : The for...in loop is used to go through the properties of an object.

const person = {
    name: 'Alice',
    age: 30,
    city: 'New York'
    };

    for (let key in person){
        console.log(key + " : " + person[key] );
        
    }

for (const key in numbers) {
    console.log(key);
}



// Print all even numbers from 0 to 100

for (let i = 0; i <= 100; i++) {
    if(i % 2 == 0){
        console.log("Even number are", i);
    }
}


let marks = [56,78,98,54,66,77,30];
console.log(marks);
console.log(marks.length);

console.log(marks.slice(1,8));

// for loops 
for (let i = 0; i < marks.length; i++) {
    console.log(marks[i]);
}

// for of in arrays
for (const element of marks) {
    console.log(element);
}


// To find the average of marks
const myMarks = [90, 56, 78, 89, 76, 65, 69, 45];
let sum = 0;
for (const value of myMarks) {
    sum =sum + value;
}
console.log("Sum is", sum);
let avg = sum / myMarks.length;
console.log("Avg is :", avg);

// JS Random 
//  Returns a random integer from 0 to 9:
console.log(Math.floor(Math.random() * 10));

// Returns a random integer from 1 to 10:
console.log(Math.floor(Math.random() * 10) + 1);


// Optional chaining 

const user = {
    name: "SUjan",
    age: 12,
    address: {
        city: 'Pokhara',
        state: "Gandaki"
    }
}
// Accessing nested propeties
console.log(user.address?.city); // Pokhara


// Nullish Coalescing 

let value1 = null;
let value2 = "Sujan";

let result = value1 ?? value2;
console.log(result);

let value3 = " " ?? "Defalult value";
console.log(value3);

