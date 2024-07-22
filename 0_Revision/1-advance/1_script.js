// var let const


// var := 
// var : es5
// var function scoped hota hai | var apne parent function mei kahi bhi use ho sakta hai
// var adds itself to the window object
// function a(){
//     for(var i=0; i<4; i++){
//         console.log(i);
//     }
//     console.log(i);  //it will also get printed
// }
// a()


// let const : es6
// let braces scoped hota hai




// how to copy reference values
// using spread 
// let a = [1,2,3,4,5]
// let b = [...a]
// b.pop()
// console.log(a);  //[ 1, 2, 3, 4, 5 ]
// console.log(b);   //[ 1, 2, 3, 4 ]

// Similarly for objects
let obj = {
    name : "vinay"
}
let obj2 = {...obj}
obj2.name = "harsh"

console.log(obj.name);  // vinay
console.log(obj2.name);  // harsh

let obj3 = {
    city : "Chandrapur"
}
let obj4 = {...obj3}
// obj4.city = "nagpur"
console.log(obj4.city);  //chandrapur
console.log(obj3.city);  //chandrapur