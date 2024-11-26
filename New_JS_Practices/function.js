
// A javascript function is a block of a code designed to perform a particular TextTrackList. 

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
function walkForward(steps) {
    console.log(`The robot walks ${steps} step forward`);
  }
walkForward(4);

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


function multiplyNumbers(a, b) {
    return a * b;
  }
console.log(multiplyNumbers(4,5));
  

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

//  Arrow function 

const sayHello = name => `Hello, ${name}`;
console.log(sayHello("sujan")); // Hello, sujan
