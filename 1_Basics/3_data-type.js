"use strict";  //treat all JS code as newer version

// Primitive  (STACK)
/*
    String
    Number
    Boolean 
    Null
    Undefined
    Symbol  => unique
    BigInt
*/
const name = "Vinay"
const age = 19
let isLoggedIn = true
const nodeVersion = null
let bankBalance = undefined
const buttonId = Symbol("id")
const aReallyLongNum = 900235188n



// Reference (non-Primitive) - Objects   (HEAP)  (it provide reference)
/*
    Arrays
    Objects
    Functions
*/

const arr = [1, 2, 3, 4, 5]
const heroes = ["superman", "spiderman", "shaktiman"]

const userObject = {
    name: "vinay",
    age: 19,
    isAdult: true
}
// let anotherUser = userObject{}
    //so here if i change values of name and age  the changes will reflect on userObject as well

const sayHello = function(){
    console.log("vinay")
}



// this is how we can print data type of values

console.log(typeof 89); //number
console.log(typeof "vinay");  //string
console.log(typeof null);  //object
console.log(typeof undefined);  //undefined