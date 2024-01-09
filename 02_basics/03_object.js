const tinderUser = new Object();

// const tinderUser = {}

// tinderUser.id = "123abc"
// tinderUser.name = "sujan"

// console.log(tinderUser);

const regularUser = {
    email: "sujan@gmail.com",
    fullname: {
        userfullname: {
            firstname:"sujan",
            lastname:"magar"
        }
    }
}

// console.log(regularUser.fullname.userfullname);

const obj1= {1:"a", 2:"b"};

const obj2 ={3:"c",4:"d"};

const obj3 = Object.assign({}, obj1,obj2); // to combine the two objects 
console.log(obj3);

const object2 = {...obj1,...obj2}; // latest sytax to combine objects
console.log(object2);

const users = [
    {
        id:1,
        name: "sujan"
    },
    {
        id:2,
        name: "magar"
    },
    {
        
    },
    {

    }
]
 // ********************object de-structure**************************

 const course = {
    coursename: "English",
    price: 1000,
    courseInstructor : "Sujan"
 }

 const {instructor}  = course;
 console.log(instructor);