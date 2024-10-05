// Create a module that exports multiple functions using named exports
// import and use these functions in another script

// import named 
import {add, subtract, multiply} from './script2.js'

// import default
import divide from './script2.js'

console.log(add);
console.log(subtract);
console.log(multiply);
console.log(divide);