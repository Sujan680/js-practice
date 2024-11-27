// Object is a way to store a collection of data.
console.log("This is object in js")

const car ={
    make: "Toyota",
    model: "Corolla",
    year: 2020,
    color: "red"
};

// Accessing object properties
 console.log(car.make); // dot notation
 
 console.log(car["make"]);  // bracket notation
  

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