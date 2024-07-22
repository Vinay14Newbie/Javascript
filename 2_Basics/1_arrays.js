// JavaScript arrays are resizable and can contain a mix of different data types. 
// JavaScript arrays are not associative arrays and so, array elements cannot be accessed using arbitrary strings as indexes
// JavaScript array-copy operations create shallow copies. (same reference if you change value in one arr changes will reflect on other arr as well)



const arr = [1, 2, 3, 4, 5, 6, "vinay"]
arr.push('hitesh')
console.log(arr);
const myHeros = ["iron man", "shaktiman", "thor"]

const myArr = new Array(1, 2, 3, 4)
console.log(myArr[2]);  //3


// Arrray Methods

myArr.push(5)  //adds 5   // [1, 2, 3, 4, 5]
myArr.pop()   //remove top item like stacks do
console.log(myArr);  //[ 1, 2, 3, 4 ]

myArr.unshift(9)  //adds 9 at the start of the arr
console.log(myArr);  //[ 9, 1, 2, 3, 4 ]
myArr.shift()   //removes first element of the arr
console.log(myArr);  //[ 1, 2, 3, 4 ]

console.log(myArr.includes(4));  //true
console.log(myArr.indexOf(9));  //-1 coz it not exists

const newArr = myArr.join()
console.log(myArr);
console.log(`newArr `+ newArr);
console.log(typeof newArr);  //string


// slice | splice

console.log("A ", myArr);
const myn1 = myArr.slice(1, 3)
console.log(myn1);  //[2, 3]
console.log("B ", myArr);   //B  [ 1, 2, 3, 4 ]

const myn2 = myArr.splice(1, 3)
console.log(myn2);  //[ 2, 3, 4 ]
console.log("C ", myArr);  //C  [ 1 ]




let a = ["vinay", "kunal", "dynandip"]
let b = a
b[0] = "ritesh"
console.log(a);  //[ 'ritesh', 'kunal', 'dynandip' ]
console.log(b);  //[ 'ritesh', 'kunal', 'dynandip' ]
// this is how the reference works

// Now
let c = [...a]  // so by using spread(...) we will not create a shallow copy
// Shallow copy creates a new object with same references to the same memory as the original object, while deep copying creates a new object with new memory locations with new memory locations for all of its properties and nested objects or arrays
c[0] = "vinay"
console.log(c);