
// Javascript COnditional Statements 

let age = 18;

if(age >= 18) {
    console.log("You are eligible to vote.");
}else {
    console.log("You are not eligible to vote.");
}



let number = 90;

if(number > 0){
    console.log("The number is positive");
}else if(number < 0){
    console.log("The number is negative");
}else{
    console.log("The number is zero")
}


// Switch Statememts
/*  The switch statement is particularly useful when you have multiple 
conditions to check against a single value.  It's more concise and readable
than chaining multiple if and else if statements. */

let day = 9;

switch(day){
    case 1:
        console.log("Sunday");
        break;
    case 2:
        console.log("Monday");
        break;
    case 3:
        console.log("Tuesday");
        break;
    case 4:
            console.log("Wednesday");
            break;
    case 5:
            console.log("Thursday");
            break;
    case 6:
        console.log("Friday");
        break;
    default:
        console.log("Today is Saturday");
        
}

// another example

let weekDay = 'Monday';

switch (weekDay) {
case 'Monday':
console.log('Start of the work week.');
break;
case 'Wednesday':
console.log('Midweek day.');
break;
case 'Friday':
console.log('End of the work week.');
break;
default:
console.log('Regular day.');
}


// Simple grade calculation program

let score = 90;
let grade;
switch(true) {
    case score >= 90:
        grade = "A+";
        break;
    case (score >= 80 && score < 90):
        grade = "A"
        break;
    case (score >= 70 && score < 80):
        grade = "B+";
        break;
    case (score >= 60 && score < 70):
        grade = "B";
        break;
    case (score >= 50 && score < 60):
        grade = "C+";
        break;
    case (score >= 40 && score < 50):
        grade = "C";
        break;
    default:
        grade = "F"
}

console.log("Your grade is", grade);
