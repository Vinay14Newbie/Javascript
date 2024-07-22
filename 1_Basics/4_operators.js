// Arithmetic operators
/*
5+5
10-8
5*3
10/2
2**3 => 2*2*2  //means multiply 2 three times
10%3
*/

// Falsy values :- 0 false undefined NaN null "" document.all 


const numberOne = "2"
const numberTwo = "4"

let negNumberTwo = -numberTwo  //-4
console.log(negNumberTwo);

const numberThree = numberOne + numberTwo
console.log(numberThree)  //24

console.log("1"+2+2)  //122
console.log(1+2+"2")  //32
console.log(1+2+"3"+3)  //333



// Increment | Decrement
let a = 3
let b = a++
console.log(a)  //4
console.log(b);  //3

let x = a
let y = ++a
console.log(x)  //4
console.log(y);  //4

// Decrement is similar to increment



// Assignment operators
let valueTwo = 3
valueTwo += 10
valueTwo -= 10



// Comparison operator
let ageFirstChild = 8
let ageSecondChild = 8
console.log(ageFirstChild==ageSecondChild)   //true

let first = 3
let second = "3"
console.log(first==second)  //now it will give true cause we are not comparing data types so by default js only compare value of both with ignoring data types with '==' operator   //loose equality

console.log(first===second)  //so here js will compare data types as well so it will give false this time // strict equality
 
console.log(first!=second)  //now it will give false

console.log(first>second) //false
console.log(first<second) //false
console.log(first<=second) //true
console.log(first>=second) //true

// console.log(null > 0)  //false
// console.log(null == 0)  //false
// console.log(null >= 0)  //true
// Here,  The reason is that an equality check == and comparisons > < >= <= work differently
// Comparisons convert null to a number, treating it as 0.
// That's why null >= 0 is true and null > 0 is false



// Logical operators
console.log((first>=second)&&(first<=second))  //true
console.log((first>=second)&&(first<second))  //false

console.log((first>=second)||(first<second))  //true
console.log((first>second)||(first<second))  //false

console.log(!((first>second)&&(first<second))) //true

