// console.log("Hello world")
// console.log("Hello world")
// console.log("Hello world")
// console.log("Hello world")
// console.log("Hello world")
// console.log("Hello world")


// for( let i=0; i<=5; i++){
//     console.log("SUJAN");
// }
  
// for loop
// let sum = 0;
// for(let i=1; i<=5; i++){
//     sum=sum+i;
// }
// console.log(sum);

// while loop
// let i = 1;
// while(i<=5){
//     console.log("sujan");
//     i++;
// }


// let i = 1;
// do{
//     console.log("sujan");
//     i++;
// }while(i<6)

// for of loops

// let str = "SUJANMAGAR";
// for(let i of str){
//     console.log("i=",i);
// }

// for in loop

let student = {
    name:"sujan",
    age:20,
    roll:34,
}
for(let key in student){
    console.log(key);
}

// to print 0 to 100 even numbers 
for(let i=0; i<=100;i++)
{
   if (i % 2 == 0) {
     console.log("Even number= ", i);
   }
}

// guessing games
let gameNum = 90;
let userNum = prompt("Guess the number")

while(gameNum!= userNum){
    userNum = prompt("You guess the wrong number, try guessing again")
}
console.log("Congrats you enter the correct numbers");