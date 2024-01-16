// block of code that performs a specific task when envoked or called

function myFun(){
    console.log("My name is sujan");
}
myFun()

function addNumbers(num1,num2){
    console.log(num1+num2);
}
addNumbers(1,2)


function add(x,y)  {
    s= x+y;
    return s;
}
let val = add(3,4);
console.log(val);

//arrow functions

const sum = (x,y) => {
    return x+y;
}
sum(6,8)

let array = [1,2,3,4,5,6,7]
array.forEach((val)=>{
    console.log(val);
})


// Map creates neew array with the results of some operations
let mewMap = array.map((items)=>{
    return items*2;
})
console.log(mewMap);

// filter creates a new array of elements that give true condition  for a condition

let newFilter = array.filter((item)=> {
    return item %2 == 0
})
console.log(newFilter);

// reduce performs some operation and reduces a array to a single value

let output = array.reduce((res,current)=> {
    return res > current ? res : current;
})
console.log(output);