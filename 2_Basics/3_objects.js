// singleton : when made up with costructor


// object literals
// Object.create  //it's constructor method

const mySymb = Symbol("Key")  //this is how symbol is declared

// by default keys are kept in string form
const jsUser = {
    name : "vinay",
    "full name" : "Vinay Duryodhan",
    age : 19,
    [mySymb] : "myKey2",   //this is how symbol is declared in objects
    location : "chandrapur",
    email : "vinayduryodhan510@gmail.com",
    isLoggedIn : false,
    lastLoginDays : ["Monday", "Saturday"]
}

console.log(jsUser.name);  
console.log(jsUser["name"]);   //another way of accessing the objects value 
// let assume i've to access full name but it write in string but we can't access it through '.' so we, have to access it just like below or above
console.log(jsUser["full name"]);
console.log(jsUser[mySymb]);   //this is how symbol is accessed

jsUser.name = "hitesh"  
// Object.freeze(jsUser)  //Prevents the modification of existing property attributes and values, and prevents the addition of new properties.
jsUser["name"] = "vinay"
console.log(jsUser["name"]);

jsUser.greeting = function(){
    console.log("Hello guys");
}
console.log(jsUser.greeting);   //[Function (anonymous)]  //returned reference
console.log(jsUser.greeting());  //Hello guys
                                 // undefined


jsUser.greetingTwo = function(){
    console.log(`Hello guys, ${this.name}`);
}

console.log(jsUser.greetingTwo());