//if else

// const temp = 36

// if(temp < 50){
//     console.log("temperature is less than 50 degree");
// }
// else{
//     console.log("temperature is greater than 50 degree");
// }
// <, >, <=, >=, ==, !=, ===, !==

// const score = 200

// if(score > 100){
//     // var power2 = "fast"   //var scope is completely global so don't use it
//     const power = "fly"
//     console.log(`User power: ${power}`);
// }
// console.log(`User power2: ${power2}`);   //User power: fast
// console.log(`User power: ${power}`);  //power is not defined


// const balance = 1000

// if(balance > 500) console.log("greater than 500");  //implicit scope only for one line

// if(balance < 500){
//     console.log("less than 500");
// }
// else if(balance < 750){
//     console.log("less than 750");
// }
// else if(balance < 900){
//     console.log("less than 900");
// }
// else{
//     console.log("greater than 900");
// }

// const userLoggedIn = true
// const debitCard = true
// const loggedInFromGoogle = false
// const loggedInFromEmail = true

// if(userLoggedIn && debitCard){   //And operator
//     console.log("Allow to buy anything :)");
// }

// if(loggedInFromGoogle || loggedInFromEmail){   //Or operator
//     console.log("user logged in :/");
// }



// Nullish Coalsescing Operator (??): null undefined

let val1;
// val1 = 5 ?? 10  //5
// val1 = null ?? 10  //10
// val1 = undefined ?? 15   //15
val1 = null ?? 10 ?? 15    //10

console.log(val1);


// Ternary Operator

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice >= 80 ? console.log("Tea price is greater than 80") : console.log("Tea price more than 80");