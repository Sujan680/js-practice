const accountId = 1211;
let accountEmail = "sujanmagar@gmail.com";
var accountPassword = "12345";
accountCity = "pokhara"   // it is considered as string 
let accountState;

/*
prefer not to use var 
variable because of issue in block scope and functional scope
*/

// accountId= 3;  // not allowed (const vaariable can not be changed)

accountEmail = "sujan122@gmail.com"

accountPassword= "3243"

//console.log(accountId);

console.log(accountCity);
console.log(typeof accountCity);


console.table([accountEmail, accountId, accountPassword, accountCity,accountState])