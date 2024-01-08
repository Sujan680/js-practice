const marvel_heros = ["thor", "superman", "sujan"];

const dc_heros = ["dipsh", "flare", "batman"];

// console.log(marvel_heros.push(dc_heros));

// console.log(dc_heros[2])

// const all_heros = marvel_heros.concat(dc_heros)
// console.log(all_heros);

// const all_new_heros = [...dc_heros, ...marvel_heros]; //spread operator will spread all the elements of arrays
// console.log(all_new_heros);

const another_array= [1,2,3,[2,3,[10,29,[30,90]]]];  // using flat will return the new array with all-subaray combined into one 
const real_another_array = another_array.flat(3);
console.log(real_another_array);

console.log(Array.isArray("SUJAN")); // check if it is array or not
console.log(Array.from("SUJANMAGAR")); // convert any Object, string, number.....etc into another_array

console.log(Array.from({"name":"SUJAN"})); // interesting we have to select which one to be converted into the array key or value pair

let num1 = 100;
let num2 = 200;
let num3 = 300;

console.log(Array.of(num1,num2,num3));