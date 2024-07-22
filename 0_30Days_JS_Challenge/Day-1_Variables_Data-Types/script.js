var num = 89
console.log(`var:- ${num}`);

let str = "vinay"
console.log(`string using let:- ${str}`);

const boolean = false
console.log(`boolean value using const:- ${boolean}`);

let a = 9
let b = "aman"
let c =  true
let d = {
    name : "kunal",
    age : 22
}
let e = ["vinay", "dnyandip", "mangesh"]

console.log("a: "+typeof(a));  //number
console.log("b: "+typeof(b));  //string
console.log("c: "+typeof(c));  //boolean
console.log("d: "+typeof(d));  //object
console.log("e: "+typeof(e));  //object


str = "prakash"
console.log("after changing the let :- "+str);

// boolean = true  //will give an error, const is consant
// console.log(boolean);