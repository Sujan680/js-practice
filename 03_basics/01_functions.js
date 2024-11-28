const myFun = function() {
    console.log("H");
}

myFun();


function addTwoNumbers(num1, num2) {
    console.log(num1+num2);
}
addTwoNumbers(2,3);


function addTwoNumbers(number1, number2) {
    let result = number1*number2;
    return result;
    console.log(number1+number2); // not reachable
}

const result = addTwoNumbers(4,3);
console.log("Result is:",result);