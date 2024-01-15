// comments is not executed , used to clarify


/* hi my name is sujan
loerms is  sifj sal
jaljfo */

let num1 = 5;
let num2 = 3;
// let num3 = num1 + num2; // arithmetice operators
// let num4 = num1 - num2; // Decerement
// let num5 = num1 * num2; // multiplication
// let num6 = num1 / num2; // division
// let num7 = num1 % num2; // modulus
// console.log(num3);
// console.log(num4);
// console.log(num5);
// console.log(num6);
// console.log(num7);

// console.log(num1++); 5// post operation
// console.log(num1); // 6

// console.log(++num1); //6 pre operation
// console.log(num1); //6



// Assignment operators 
let a = 4;
let b = 6;
//  a+=1;
//  b-=3;
//  console.log(a);
//  console.log(b);

let c = a > b ? "it is false": "it it true"; // ternary operators
console.log(c);

let age = 23;
if(age> 18)
{
    console.log("You can vote");
}

if(age<18)
{
    console.log("You cannot vote");
}

let fruitType = []
switch (fruitType) {
    case "Oranges":
      console.log("Oranges are $0.59 a pound.");
      break;
    case "Apples":
      console.log("Apples are $0.32 a pound.");
      break;
    case "Bananas":
      console.log("Bananas are $0.48 a pound.");
      break;
    case "Cherries":
      console.log("Cherries are $3.00 a pound.");
      break;
    case "Mangoes":
      console.log("Mangoes are $0.56 a pound.");
      break;
    case "Papayas":
      console.log("Mangoes and papayas are $2.79 a pound.");
      break;
    default:
      console.log(`Sorry, we are out of ${fruitType}.`);
  }
  console.log("Is there anything else you'd like?");


//   prompt("Helo");

  let score = prompt("Enter your score")
  if(score >= 90 && score <= 100){
    console.log("Your grade is A");
  }
  else if(score >= 70 && score <= 89){
    console.log("Your grade is B");
  }
  if(score >= 60 && score <= 69){
    console.log("Your grade is C");
  }
  if(score >= 50 && score <= 59){
    console.log("Your grade is D");
  }
  if(score >= 0 && score <= 49){
    console.log("Your grade is F");
  }