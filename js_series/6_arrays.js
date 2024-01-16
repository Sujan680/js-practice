// // arrays are used to store the relative information or data
// // linear fashion
// // mutable
// const marks = [67,87,56,67,98]
// console.log(marks);
// let sum = 0;
// for(let i=0; i<marks.length; i++){
//     console.log(marks[i]);
//     sum = sum + marks[i];
// }
// console.log(sum);

let heroes = ["ironman", "hulk", "thor", "batman", "Sujan","spiderman", "antman"]
// for(let i=0; i<heroes.length; i++){
//     console.log(heroes[i]);
// }
// console.log(heroes[3]=89);
// console.log(heroes);

// for(let hero of heroes){  // prefer for array printing of individual arrays
//     console.log(hero);
// }
 
console.log(heroes.pop());
console.log(heroes);
// for(let val in heroes){
//     console.log(val);
// }

// concat joins the multiple arrays
// shift removes items to the start of the arrays and returns the deleted item
// unshift add the items in the first index of the arrays 
let numbers = [1,2,3,6,5,7,9]
console.log(numbers.unshift(9));
console.log(numbers);
console.log(numbers.shift());


// slice returns the piece of the array

// splice changes the orignial array (add, remove, replaace)


// console.log(numbers.splice(3));
// console.log(numbers.splice(5,2));
console.log(numbers.splice(2,1,91));
console.log(numbers);