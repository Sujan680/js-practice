
// A javascript function is a block of a code designed to perform a particular TextTrackList. 
// Re-use

function walkForward() {
    console.log("The robot is walking forward.");
}

walkForward();


function greetUser() {
    console.log('Hello, User!');
  }
  
  function farewellUser() {
    console.log('Goodbye, User!');
  }
  
  // Calling the functions
  greetUser(); // Output: Hello, User!
  farewellUser(); // Output: Goodbye, User!

// Parameters and arguments
// function parameters are like local variable of function which have block scope

function walkForward(steps) { //steps is parameter
    console.log(`The robot walks ${steps} step forward`);
  }
walkForward(4); // 4 is arguments

function greetUser(name,city) {
    console.log(`Hi, I am ${name} from ${city}.`);
}
greetUser("Sujan", "Pokhara");


// Using the return statemnt 

function addNumbers(a,b) {
    let sum = a + b ;
    return sum;
}
let num = addNumbers(2,4);
console.log("The sum of number is:",num);


function getGreeting(name) {
    return `Hi, ${name} !`;
}
console.log(getGreeting("Sujan"));

// to multiply two number
function multiplyNumbers(a, b) {
    return a * b;
  }
console.log(multiplyNumbers(4,5));
  
// to check even
const isEven = (number) => {
    return number % 2 == 0
}
console.log(isEven(12)); // true

// GLobal function
let tool = "Wrench";
function fixRobot() {
    console.log("Using", tool);
}
fixRobot();


// Local function

function myFunction() {
    let tool1 = "Screwdriver";
    console.log("Using", tool1);
}
myFunction();
// console.log(tool1); // Error: not defined


// Global and local functions in js
function outerFunction() {
    let outerTool = "Drill";

    function innerFunction() {
        let innerTool = "Pliers";
        console.log("Outer Tool", outerTool);
        console.log("Inner Tool", innerTool);
    }
    innerFunction();
    console.log("Outer tool", outerTool);
    // console.log("Inner tool", innerTool);
}

 outerFunction();
 // in the above code innerfunction have access to both innerTool and outerTool
 // but outerfunction does not have access to innerTool but access to outerTool 

//  Arrow function 

const sayHello = name => `Hello, ${name}`;
console.log(sayHello("sujan")); // Hello, sujan


function addNumbers(a,b,c) {
    return a+b+c;
}
console.log("The addition of numbers are", addNumbers(1,2,3));


// function expression 

const add = function(a,b) {
    return a+ b;
    console.log("this is not executed") // This will not be executed
}
console.log("SUm is", add(4,5))


// Arrow functions:: shorter way of writing functions

const subtraction = (a,b) => a-b;
console.log("Result is", subtraction(9,4));


// to count the number of vowels in the string

function countVoewls(str) {
    let count = 0;
    for (const char of str) {
        if(char === "a" || char === "e" || char === "i" || char === "o" || char === "u"){
            count++;
        }
    }
    console.log("The number of vowels are",count);
}
 countVoewls("i am fromm the top of the world");


 // ForEach loop: arr.forEach(callback function(val, indx, arr))
//  (Callback function): It is a function to execute for each element in the array
 // A callback function is a function passed as an argument to another function

 // this is how it is created ...

//  arr1.forEach((val) => {
//     console.log(val);
//  })

let arr = [3,7,9,10,34,22]

arr.forEach((val) => {
    console.log(val);
})


// Callback function example

function greet(name, callback) {
    console.log(`Hello, ${name}`);
    callback(); // executes the callback function
}

// a simple callback function
function sayGoodbye() {
    console.log("Goodbye!"); 
}

// call the greet function with a callback
greet("Sujan", sayGoodbye);

const nums = [1,2,3,4,5,6,7];
// nums.forEach((val) => {
//     let square = val ** 2;
//     console.log(square);
// })

const calcSquare = (val) => console.log(val * val);

 nums.forEach(calcSquare);

// forEach doesnot return new array
// map methos in arrays
// creates a new array with the result of some operation. 

// arr.map(callbackFnx(value, index, array))

// creates new by performing some operation on array but does not modify original array


let myArr = [11,22,33,44,55,66,77];

myArr.map((val, indx, arr) => {
console.log(`The value ${val} is at index ${indx} of array [${arr}]`);
})

let newArr = myArr.map((val) => {
    return val * 2;
})
console.log(newArr);
console.log(myArr);

// Filter methods in array 

// Creates new array of elements based on the condition applied

const totalMarks = [77,88,99,98,76,67,56,60, 23, 45, 55]

let filterMethod = totalMarks.filter((val) => {
    return val >= 60;
})

console.log("The new aray after filter method are", totalMarks);
console.log("The original array are", totalMarks);



// Reduce method in js : gives a single value as olp
// Performs some operation and reduces the array to a single valu.
// it returns single value

let myMarks = [23,56,76,11,90,88];

let reduceArr = myMarks.reduce((acc, val) => acc + val , 0 )
console.log("Total marks is",reduceArr);

let max = myMarks.reduce((acc, val) => {
    return acc > val ? acc : val;
})
console.log("The maxumum value is", max);
