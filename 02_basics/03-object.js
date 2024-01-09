// singleton
// Object.create

// object literals

const mySym = Symbol("Key1");

const JsUser = {
    name:"Sujan",
    [mySym]:"key1", // declaration of symbol inside object 
    age:34,
    location:"pokhara",
    email:"sujan@magar.com",
    isLoggedIn: true,
    lastLoginDays:["Monday","Wednesday"]
}

// console.log(JsUser["name"])
// console.log(JsUser.mySym);
// console.log(JsUser[mySym]);
// console.log(typeof[JsUser.mySym]);
// console.log(JsUser);

// JsUser.email = "sujan@gmail.com";
// Object.freeze(JsUser);
// JsUser.email = "sujanmagar@gmail.com";
// console.log(JsUser);

JsUser.greeting = function() {
    console.log("Hello Js user");
}

JsUser.greetingOne = function() {
    console.log(`Hello Js user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingOne());