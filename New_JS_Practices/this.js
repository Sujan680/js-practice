
// this refers to the current contxt 
const user = {
    username: "Sujan",
    age: 88,
    profession: "Coding",

    message: function() {
        console.log(`${this.username} , welcome to coding challenge`);
    }
}
user.message();  // Sujan, welcome to coding challenge

user.username = "Thomas";

user.message();