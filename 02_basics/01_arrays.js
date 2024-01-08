// Arrays

const myArray = [0,1,2,3,4,5,6,7,8,9,10];
// console.log(myArray[3]);

// myArray.push(12);
// myArray.pop();
// console.log(myArray.includes(7));
// console.log(myArray.indexOf(8));
// console.log(myArray);

// const myHeros = ["sujan", "magar", "dipesh", "father", "mother"];

// console.log(myHeros[3]);
// console.log(myHeros[myHeros.length-1]);

console.log("S", myArray);
const myn1 = myArray.slice(1,3); // slice returns the shallow copy of a portion of an array into a new array object selected from start to end (end not included)
console.log(myn1);

console.log(myArray);
console.log("B", myArray);

const myn2 = myArray.splice(1,3); // The splice() method of Array instances changes the contents of an array by removing or replacing existing elements and/or adding new elements
console.log("C", myArray);
console.log(myn2);