// Primitive  (STACK)
/*
    String
    Number
    Boolean 
    Null
    Undefined
    Symbol
    BigInt
*/
const name = "Vinay"
const age = 19
let isLoggedIn = true
const nodeVersion = null
let bankBalance = undefined
const buttonId = Symbol("id")
const aReallyLongNum = 900235188n



// Reference (non-Primitive) - Objects   (HEAP)
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