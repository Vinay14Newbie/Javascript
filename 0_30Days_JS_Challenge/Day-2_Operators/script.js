// Arithmetic operations
let a = 5+2
let b = 5-2
let c = 5*2
let d = 29/10
console.log(`add: ${a} sub: ${b} mul: ${c} remainder: ${d}`);



// Assignement operators
a += 1
b -= 2
console.log(`a: ${a} b: ${b}`);



// Comparison Operators
if(5<4) console.log(`5 is less than 4`); 
if(5>4) console.log(`5 is greater than 4`); 

if(5<=4) console.log(`5 is less than equals to 4`);
if(5>=4) console.log(`5 is greater than equals to 4`);

if(5=="5") console.log(`5 number is equal to string "5" when uses '==' `);
if(5==="5") console.log(`5 number is not equal to string "5" when uses '===' `);



//logical operator
if(5=="5" && 6=="6") console.log(`&& checked`); 
if(5=="5" || 6=="8") console.log(`|| checked`); 
if(5=="5" | 6==="6")  console.log(`| checked if any one condition is true it work`);



// Ternary operator
// condition ? exprIfTrue : exprIfFalse
89 > 80 ? console.log(`89 is greater than 80`) : console.log(`89 is less than 80`);