// Arithmetic operators
/*
5+5
10-8
5*3
10/2
2**3 => 2*2*2  //means multiply 2 three times
10%3
*/

const numberOne = "2"
const numberTwo = "4"
const numberThree = numberOne + numberTwo
console.log(numberThree)



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



// Logical operators
console.log((first>=second)&&(first<=second))  //true
console.log((first>=second)&&(first<second))  //false

console.log((first>=second)||(first<second))  //true
console.log((first>second)||(first<second))  //false

console.log(!((first>second)&&(first<second))) //true

