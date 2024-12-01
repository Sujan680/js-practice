
console.log("Control flow in js");
 
// falsy values 

// false, 0, -0, NaN, null, undefined, " ", 0n...

// truthy value 
// "0", 'false', " ", [], (), function() { }...

const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: 'Ruby',
    swift: 'Swift'
};

for (const key in myObject) {
    console.log(` ${key} for  ${myObject[key]}`); 
}

// Maps : iterable is not allowed in Map

const map = new Map();

map.set('IN', 'India');
map.set('Np', 'Nepal');
map.set("Aus", 'Australia');

for (const [key, value] of map) {
    console.log(key, ':' , value);
}


// ForEach() ; does not return new array

const coding = ['js', 'ruby', 'Python', 'java', 'c++', 'react js'];

coding.forEach((val) => {
    console.log(val);
})


const myCoding = [
    {
        langName: 'Javascript',
        langFile: 'js',
    },
    {
        langName: 'java',
        langFile: 'java'
    },
    {
        langName: 'python',
        langFile: 'py'
    }
]
myCoding.forEach( (item) => {
    console.log(item.langName)
})


// NOTE:::: if we write like below example then return keyword is must

const something = (name) => {
    return `${name}`;
}
console.log("hi", something("sujan"));

// But if we wrte like below we dont need to write return keyword

const arrow = () => {
    console.log("Hello");
}
arrow();


const people = [
    {
      id: 1,
      name: "Alice",
      age: 25,
      occupation: "Engineer",
      isMarried: false,
      hobbies: ["reading", "cycling", "traveling"]
    },
    {
      id: 2,
      name: "Bob",
      age: 30,
      occupation: "Teacher",
      isMarried: true,
      hobbies: ["cooking", "gardening"]
    },
    {
      id: 3,
      name: "Charlie",
      age: 22,
      occupation: "Student",
      isMarried: false,
      hobbies: ["gaming", "photography"]
    },
    {
      id: 4,
      name: "Diana",
      age: 35,
      occupation: "Doctor",
      isMarried: true,
      hobbies: ["hiking", "swimming", "reading"]
    },
    {
      id: 5,
      name: "Eve",
      age: 28,
      occupation: "Designer",
      isMarried: false,
      hobbies: ["painting", "traveling", "dancing"]
    }
  ];
  

  let newArr = people.filter((item) => item.hobbies.includes("reading"))
  console.log("The new array is", newArr);
  
  let names = people.filter((item) => item.isMarried === false);
  console.log(names);
  

  const numbers = [1,2,3,4,5,6,7,8,9];

  const newNum = numbers
  .map((num) => num * 10)
  .map((num) => num + 1)
  .filter((num) => num >= 45)

  console.log(newNum);
  