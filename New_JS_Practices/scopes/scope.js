// block scope 
if (true) {
  let a = 10;
  const b = 45;
  var c = 44;
}

// console.log(a); 
// console.log(b); 
// console.log(c); // 44

// global scope 
let a = 10;
 if(true) {
    let a = 34;
    console.log("Inner", a);
 }
 console.log("Outer Value", a);
 

 // Nested function scope

 function One() {
    let username = "sujan";

    function Two() {
        const website = "youtube";
        console.log(username);
    }
    // console.log(website);  // not accessible
    Two();
 }
//  console.log(username) // not accessible
 One();

console.log(addOne(5)); // hoisting
 function addOne(num) {
    return num + 1;
 }
 addOne(4); 

 // but here we can not access addTwo before initialization
//  console.log(addTwo(9)); 
 
 const addTwo = function(num) {
    return num + 3;
 }
 addTwo(6);