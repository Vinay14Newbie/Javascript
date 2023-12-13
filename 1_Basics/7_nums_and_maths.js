const score = 100
// console.log(score); //100

const balance = new Number(200)
console.log(balance);  //[Number:200]

console.log(balance.toString());  //200
console.log(balance.toString().length); 
console.log(balance.toFixed(3));  //200.000


const otherNumber = 23.2349
console.log(otherNumber.toPrecision(4));  //23.23 prints exact 4 numbers as we give

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-us'))  //1,000,000
console.log(hundreds.toLocaleString('en-in'))  //10,00,000
console.log(hundreds.toLocaleString())  //10,00,000

console.log('max num:- '+Number.MAX_VALUE+' & min num:- '+Number.MIN_VALUE);  //max num 1.7976931348623157e+308 & min num 5e-324



// ***********************Maths************************

console.log(Math.abs(-243))  //243
console.log(Math.round(4.3));  //4 | round of
console.log(Math.ceil(4.3));  //5
console.log(Math.floor(4.3));  //4
console.log(Math.sqrt(25));   //5
console.log(Math.min(25, 2, 82, 1));  //1   
console.log(Math.max(25, 2, 82, 1));  //82   

console.log(Math.random());
console.log(Math.round(Math.random()*10) + 1);  //+1 for avoiding 0 number

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min);  //range between 10-20