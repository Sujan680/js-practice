// Object is a way to store a collection of data.
console.log("This is object in js")

const car ={
    make: "Toyota",
    model: "Corolla",
    year: 2020,
    color: "red"
};

// Accessing object properties
 console.log(car.make); // dot notation not best practice
 
 console.log(car["make"]);  // bracket notation best practice
  

//  modifying object properties 

car.color = 'blue';
console.log(car);
console.log(car.color);


car["year"] = 2024;
console.log(car.year);

// Adding new properties

car.owner = "Sujan";
console.log(car.owner);
console.log(car);

car['registration'] = "AFC43";
console.log(car.registration);

// Removing the properties 

delete car.owner;
console.log(car.owner); // undefined


// Checking for property existence
// The in operator returns true if the property exists in the object, 
// and false otherwise.

console.log('make' in car); // true
console.log('owner' in car); // false since owner is deleted

// hasOwnproperty() method
console.log(car.hasOwnProperty('model')); // Output: true
console.log(car.hasOwnProperty('owner')); // Output: false
    
// The hasOwnProperty() method checks if the object has a property with the specified name. It returns true if it does, and false otherwise.

// Iterating over object propterties

for (const key in car) {
   console.log(key, ":", car[key]);
}

// Combining objects

const carDetails = {
    make: 'Toyota', 
    model: 'Corola'
};

const carSpecs = {
    year: 2020,
    color: 'blue'
};

// using Object.assign() method 

let newObj = Object.assign({}, carDetails, carSpecs);
console.log("The new object after Object.assign() method are",newObj);
// { make: 'Toyota', model: 'Corola', year: 2020, color: 'blue' }

// USing spread operator 

const newObject = {...carDetails, ...carSpecs};
console.log("The new object after spread operator",newObject);

// creating objects
const sym = Symbol("123");

const JsUser = {
    name: "Sujan",
    age: 25,
    email: "sujan123@gmail.com",
    isLoggedIn : true,
    [sym] : "123",
    marks: [34, 56],
    city: "Pokhara"
}
console.log(JsUser);
console.log(JsUser["name"]);
console.log(JsUser[sym]);

JsUser.email = "namita@gmail.com";
// Object.freeze(JsUser);
JsUser.email = "sujanmaagr45@gmail.com";
console.log(JsUser);


JsUser.greeting = function() {
    console.log("Hello, Sujan");
}
console.log(JsUser.greeting);

JsUser.greetingTwo = function() {
    console.log(`Hello Js user, ${this.name}`);
}
console.log(JsUser.greetingTwo());


// Object De-structure

const course = {
    id: 123,
    courseName: "Javascript",
    price: 999,
    courseInstructor: "Sujan",
};

const {id} = course;
console.log("The course id is:",id);

const {courseName: name} = course;
console.log(name);
