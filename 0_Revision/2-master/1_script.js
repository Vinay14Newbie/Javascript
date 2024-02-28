// 1- higher order function
// Aesa function jo accept karle ek aur function ya fir wo return karde ek aur function
//Ex-1
function abcd(val){

}
abcd(function(){})

// Ex-2
function abcd(){
    return function(){}
}

// Ex-3
let arr = [1, 2, 3, 4, 5]
arr.forEach(function(i){
    console.log(i);
})




// 2- constructor
// normal function jisme this ka istemaal ho and aap function ko call karte waqt new keyword ka use karein
// jab aapke paas esa koi bhi mouka ho ki aapko ek jaise property wale bohot sare element banane hai us waqt aap constructor function use kar sakte ho

// Ex-1
function saanchaOfBiscuit(){
    this.width = 12
    this.height = 22
    this.color = "brown"
    this.taste = "sugarry"
}
let bis1 = new saanchaOfBiscuit()
let bis2 = new saanchaOfBiscuit()
console.log(bis1.color, bis2.color);

//Ex-2
function circularButtonBanao(color){
    this.radius = 2
    this.color = color
    this.icon = false
}
let user1 = new circularButtonBanao("red")
let user2 = new circularButtonBanao("green")
console.log(user1);
console.log(user2);




// 3- First class function
// Ex-1
// let add = function(){
//     return 2+5
// }
// console.log(add());

//Ex-2
// setTimeout(function(){})




// 4- new
// jab bhi new lagta hai humesha ek blank object apne man mein bana lo




// 5- iife => immediately invoked function expression
// iife hai function ko turant chalane ki kala, is tareeke se ki hum log koi private variable bana paaye

// Ex-1 
let ans = (function(){
    let a = "vinay"
    return {
        getter: function(){
            return console.log(a);
        },
        setter: function(val){
            a = val
        }
    }
})();
// ans.getter()  //vinay
ans.setter("shruti")
ans.getter()  //shruti