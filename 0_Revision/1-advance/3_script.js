// first class function
// js mei ek concept hai jiska matlab hota hai ki aap fnc ko use kar sakte ho as a value

// function abcd(a){
//     a()
// }
// abcd(function(){console.log("vinay");})




// How arrays are made behind the scenes, how we can make negative indexes arrays in JS

// let a = [1, 2, 3, 4, 5]
// console.log(typeof(a));  //object

// a[-1] = 8
// console.log(a);  // [ 1, 2, 3, 4, 5, '-1': 8 ]

// how array store the data
// a={
//     0: 1,
//     1: 2,
//     2: 3,
//     3: 4,
//     4: 5
// }




// how to delete object prop
let a = {
    name: "vinay",
    age: 29
}
delete a.age
console.log(a);