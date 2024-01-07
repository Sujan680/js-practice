// const name = "Sujan";

// const repoCount = 95;

// console.log(name + repoCount + "is counter");// not recommended

// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`); //this is the modern day syntax of writing  code

const gameName = new String("sujan magr is my name")

// console.log(gameName[4]);

// console.log(gameName.__proto__);

// console.log(gameName.length);

// console.log(gameName.toLocaleLowerCase());

// console.log(gameName.charAt(3));

// console.log(gameName.indexOf("A"));

// const newString = gameName.substring(0,4);
// console.log(newString);

const anotherString = gameName.slice(-4,0);
console.log(anotherString);

const newStringOne = "  hitesh   ";
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://hitesh.com/hitesh%20magar";

console.log(url.replace("%20", "-"));

console.log(url.includes("sujan")); // to check if this is availaable or not

console.log(gameName.split('-'));