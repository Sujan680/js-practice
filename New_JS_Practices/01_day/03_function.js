
// Function in js

function myFunction(){
    let carName = "Volvo";
    console.log(carName);
    
}
myFunction();

// function to compute product of two numbers

function ProductofTwoNumbers(num1, num2){
    let product = num1 * num2;
    console.log("The product of two numbers are:", product);
    
}
ProductofTwoNumbers(2,3);


function myAge(age){

let voteage = (age < 18 ) ? "too Young": " Enough to vote"

console.log(voteage);
}

myAge(122)

// Asynchronous
// console.log("Start");
// setTimeout(() => console.log("End"), 1000)
// console.log("This is a sujan");


// Object in Js is an unordered collections of properties
//  which can be changed, added, deleted and some are read only 

const car = {
    type: "Fiat",
    model: "500",
    color: "white"
};
console.log(typeof car); // object
console.log(car);

// Accessing object properties: two ways as
console.log(car.type); 
console.log(car["color"]);

console.log(car.model);
console.log(car.color);

// Adding new properties
car.madeIn = "English"
console.log(car);


// Object created using new keyword

const person = new Object();

person.firstName = "John";
person.lastName = "Doe";
person.age = 43;

console.log(person["firstName"]);

console.log(`${person.firstName} is ${person.age} years old`);

// Nested objects
myObj = {
    name:"John",
    age:30,
    myCars: {
      car1:"Ford",
      car2:"BMW",
      car3:"Fiat"
    }
  }

  // accessing
  console.log(myObj.myCars.car1);
  console.log(myObj.myCars.car2);
  console.log(myObj.myCars.car3);


//   Objects methods are actions that can be performed on objects 

const students = {
    firstName: "Sujan",
    lastName: "Magar",
    age: 25,
    fullName: function() {
        return this.firstName + " " + this.lastName // this refer to the students object
    }
}
  console.log(students.fullName());
  

// using () JSON.stringify()
let myString  = JSON.stringify(students); // objects can be converted to a string with JSON methods
console.log(myString);


// Using Object.values() 

const myArray = Object.values(students);
console.log(myArray);


// Js Object Constructors
// Constructor Function for person Objects
function Person(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
}

// create a Person object

const myFather = new Person("John", "Doe", 25, "blue")

console.log(`My father is ${myFather.age} years old`);


