const name = "vinay"
const repoCount = 10
// console.log("Hello my name is "+name+" and my repo count is "+repoCount);  
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);  // modern way


const gameName = new String('vinaynd')  // by declaring this way string type becomes object & you can access it with indexes just like String in java
// console.log(gameName[0])  //v
// console.log(gameName.__proto__)  //{}

// some methods OR objects of string it is same as java's string methods
// console.log(gameName.length)  //7
// console.log(gameName.toUpperCase())  //print in uppercase
// console.log(gameName.charAt(2));  //n
// console.log(gameName.indexOf('y'));  //4

console.log(gameName.substring(2));  //naynd
console.log(gameName.substring(2, 5));  //nay

console.log(gameName.slice(-7, 5));  //vinay  | when we gave -ve value it starts from reverse order


const newName = "    vinay    "
console.log(newName);
console.log(newName.trim());  //so it will not print space

const url = "https://vinay.com/vinay%220duryodhan"
console.log(url.replace('%', '-'))  //https://vinay.com/vinay-220duryodhan

console.log(url.includes('hitesh'));  //false

const lastName = 'Duryodhan-Not'
console.log(lastName.split('-'));  //['Duryodhan', 'Not']
