
// Strings are for storing text

// Strings are written with quotes

let text = "This is string";  // " ", ' ', ` ` ...
console.log(text);
console.log(typeof text); // string


//Strings length
let lengthofString = text.length; // to find the length of string
console.log(lengthofString);

let text1 = "We are the so-called \"Vikings\" from the north.";
console.log(text1);

let text2 = 'It\'s alright.';
console.log(text2);

let text3 = "The character \\ is called backslash.";
console.log(text3);

//Template string

let templatesString =
`The quick
brown fox
jumps over
the lazy dog`;
console.log(templatesString);

// Js String as Objects
let myString = new String("Sujan"); // Object
console.log(myString);
console.log(typeof myString);


let str1 = "John";
let str2 = new String("John");
let compare1 = str1 === str2;  // false
let compare2 = str1 == str2;   // true
console.log(compare1);
console.log(compare2);

// Comparing two JavaScript objects always returns false.
let x = new String("John");  // x is an object
let y = new String("John");  // y is an object
console.log(x === y); // false
console.log(x == y);  // false


// String Methods 

let string = "Javascript strings are primitive and immutable";

let lengthOfString = string.length;
console.log(lengthOfString); //46

let charAt = string.charAt(12);
console.log(charAt); //t

let charat = string.at([12]);
console.log(charat); //t

let charCodeAt = string.charCodeAt(34);
console.log(charCodeAt); //110


let endsWith = string.endsWith("e");
console.log(endsWith); // true

let startWith = string.startsWith("e");
console.log(startWith); // false

let sliceOfString = string.slice(0,10);
console.log(sliceOfString); // Javascript

console.log(string.substring(11, 19)); // strings

console.log(string.substr(0, 32)); //Javascript strings are primitive

console.log(string.lastIndexOf("primitive")); // 23

console.log(string.includes("sujan")); //false
console.log(string.includes("Java")); //true 
console.log(string.includes("are")); // true


console.log(string.toLowerCase());
console.log(string.toUpperCase());

console.log(string.toLocaleLowerCase());

let string1 = "Hello";
let string2 = "World!";
console.log(string1.concat(" ",string2));


const stringTrim = "    Hi this is Mt. Everest";
console.log(stringTrim);
console.log(stringTrim.trim());  // removes white spaces

let num = 34567;
let str = num.toString();
console.log(str); // 34567
console.log(typeof str);  // string

let replaceString = string.replace("Javascript", "React JS")
console.log(replaceString);


let myArrays = string.split(",");
console.log(myArrays);

let paddtext = "5";
paddtext = paddtext.padStart(5, "1") // 11115
paddtext = paddtext.padEnd(4, "0") // 5000

console.log(paddtext); // 11115

let character = "ASDFGHJKl";
console.log(character.indexOf("J")); //6

let trimstring = "   Helllo     ";
console.log(trimstring.trimStart());
console.log(trimstring.length);
let trimstring1 = "Hello   "
console.log(trimstring1.trimEnd());
console.log(trimstring1.length);
