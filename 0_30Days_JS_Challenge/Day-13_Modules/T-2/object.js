// Create a module that exports an object representing a person with properties and methods
// import and use this module in another script

const obj = {
    name: "vinay", 
    age: 20,
    multiply: function(){
        console.log(5*5);
    }
}
const fun = function(){
    console.log("say hello");
}

// module.exports = obj

// another way to return multiple things through one file
// return it in a object

module.exports = {
    obj,
    fun
}