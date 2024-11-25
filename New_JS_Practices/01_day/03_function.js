
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
  
