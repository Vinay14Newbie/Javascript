//ES6+ := Template literals, Destructuring, Spread and Rest Operators, Default Parameters, Enhanced Object literals

//Template literals ``
let age = 28
let str = `ajay's age is ${age}`
console.log(str);

let str2 = `hey there my name is vinay,
            & my age is 20,
            im in final year of BTech,
            studying Electrical Engineering`
console.log(str2);



// Destructuring
// Destructuring in js is a convenient way of extracting values from arrays or properties form objects into distinct variables. It makes code more readable and concise by providing a syntax to directly access and assign values from arrays or objects

// Array destructuring 
const arr = [1, 9]
let [a, b, c=3] = arr
console.log(a, b, c); // 1 9 3

// Object destructuring
const book = {
    title : "Atomic Habits",
    author : "James Clear"
}
let {title, author} = book
console.log(title, author);  //Atomic Habits James Clear

// here we can change the name too
let {title:name, author:writer} = book
console.log(name, writer);  //Atomic Habits James Clear



// Spread and Rest operators
// spread and rest operators both are represented by ... 

// Spread used for copying arrays, concatenating arrays, and merging objects.
const newArr = [1, 2, 3, 4, 5]
const ansA = [...newArr, -1, 0]
console.log(ansA); //[1,  2, 3, 4, 5, -1, 0]

// Rest operator is used to collect multiple elements into a single array or to collect remaining properties of an object. It allows you to pass an indefinite number of arguments to a function or to destructure arrays and objects.
function fn1(...rest){
    return rest.reduce((acc, curr) => acc+curr, 0)  //used reduce function to sum the numbers
}
console.log(fn1(1, 2, 3, 4, 5));  //15



// Default parameters
function fn2(val1, val2=2){
    console.log("default paramters: "+val1*val2);
}
fn2(5)



// Enhanced object literals
// Object literals enhancement is used to group variables from the global scope and from them into js objects. It is the process of restructuring or putting back together.
const first = 12
const second = 24
const third = 29
function fn3(){ // We can also use 'this' keyword to access the object keys
    console.log(`my age was ${this.first} when i was at 5th class, & my age will be ${this.second} after 5 years`);
}
const createObj = {first, second, third, fn3}
createObj.fn3()
console.log("and after 9 years my age will be "+createObj.third);


// Computed property name: this allows us to compute an expression as a property name on an object
// Method1: use [] to create the name of an object property. 
let LastName = "lastname"
let obj5 = {
    firstName : "vinay",
    [LastName] : "duryodhan"   // using value of "LastName" variable as a key which i s "lastname"
}
console.log(obj5.firstName, obj5.lastname);  //vinay duryodhan
console.log(Object.keys(obj5)); //[ 'firstName', 'lastname' ]

// Metod2
let mySirname = "title"
let obj6 = {
    firstname : "vinay"
}
obj6[mySirname] = "duryodhan"
console.log(obj6.firstname, obj6.title);  //vinay duryodhan