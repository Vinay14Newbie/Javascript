const user = {
    username : "vinay",
    price : 999,

    welcomeMessage : function(){
        console.log(`${this.username} , welcome to website`);   //this refers to current context
        console.log(this);   //it will print all the items present in the object
    }
}

// user.welcomeMessage()   //vinay , welcome to website
// user.username = "hitesh"
// console.log(user.username);   //hitesh
// user.welcomeMessage()   //hitesh , welcome to website

// console.log(this);  //{} we're in node & right now global has no context
// if you run this line on browser console it will give 'window' 


// function chai(){
//     let username = "vinay"
//     console.log(this.username);   //undefined   //'this' works with object only not in function
// }
// chai()


// const chai = function(){
// //  console.log(this); // it will give lots of values
//     let username = "vinay"
//     console.log(this.username);  //undefined
// }
const chai = () => {   //arrow function
    let username = "vinay"
    // console.log(this.username);   //undefined
    // console.log(this);   //{}
}
// chai()


// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) => (num1 + num2)   //implicit return  //this will be usefull for react 
const addTwo = (num1, num2) =>  ({username: "vinay"})   //you have to use bracket's while return object implicitly

console.log(addTwo(32, 23));