let str = "Sujan Magar";

let str2 = 'SUjan';

// console.log(str);

// console.log(str.length);

let specialString = `My name is sujan magr`
console.log(specialString);

let obj = {
    item:"pen",
    price:123
}
console.log(`the cost of ${obj.item} is ${obj.price}`);

console.log(`My name is ${str}`);

console.log("Banaana\t Apple");

// string methods

let str3= "Hello my name is mount annapurna campus"
// console.log(str3.toUpperCase());

console.log(str3.trim()); // removes the white spaces

console.log(str3.charAt(9));

console.log(str3.slice(1)); // if ending number is not defined then it will includes all the remaining strings

let string1 = "My name is Sujan"
let string2  = "magar"
console.log(string1.concat(string2));

console.log(string1.replace("My", "Your")); // replace(search value, newValue)

let title = "IloveJS"  // charAt(), helps to find the index of string
console.log(title.charAt(0)); //I
console.log(title.charAt(1)); //l
console.log(title.charAt(2)); //o
console.log(title.charAt(3)); //v
console.log(title.charAt(4)); //e
console.log(title.charAt(5)); //J


let fullName = prompt("Enter your full name");
let username = `@${fullName}${fullName.length}`
console.log(username);