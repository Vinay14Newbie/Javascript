// this calls apply bind

// jab bhi kuch likh rahe ho check karo kya usmein kahi bhi koi  function, object ya fir scope bana hai
// jab bhi koi cheej {} brackets ke andar nahi hoti to hum use global scope kehte hai

// global => window
// function => window
// method => object

// console.log(this);  // {}

// function abcd(){
//     console.log(this);
// } 
// abcd()   // Object [global]

// ek function jo object ke andar ho, use method kehte hai/

// let obj = {
//     name : "vinay",
//     abcd : function(){
//         console.log(this);
//     }
// }
// obj.abcd()  // { name: 'vinay', abcd: [Function: abcd] }



// this in event listener

// let button = document.querySelector("button")
// button.addEventListener("click", function(){
//     console.log(this);  // <button> click me </button>
// })





// call apply bind => agar tumhare pass koi function hai and koi object hai and tumhe function chalane hai aur by default jo this ki value window hai use window naa rakh kar point karwana hai kisi object ki taraf 

// function abcd(){
//     console.log(this);
// }
// let obj = {age : 19}
// abcd.call(obj)   // { age: 19 }


// function abcd(val1, val2, val3){
//     console.log(this, val1, val2, val3);
// }
// let obj = {age : 19}  
// abcd.call(obj, 1, 2, 3)  // { age: 19 } 1 2 3



// apply  => we can give arguments in array
// function abcd(val1, val2, val3){
//     console.log(this, val1, val2, val3);
// }
// let obj = {age : 19}  
// abcd.apply(obj, [1, 2, 3])  // { age: 19 } 1 2 3



// bind
function abcd(val1, val2, val3){
    console.log(this, val1, val2, val3);
}
let obj = {age : 19}  
let bindedFunc = abcd.bind(obj, 1, 2, 3) 
bindedFunc()   // { age: 19 } 1 2 3