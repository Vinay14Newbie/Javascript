
function sayMyName(){
    console.log("V");
    console.log("I");
    console.log("N");
    console.log("A");
    console.log("Y");
}

// sayMyName //this is reference
// sayMyName()  //this is executation

// function addTwoNumbers(number1, number2){  //number1, number2 are parameters
//     console.log(number1 + number2);
// }
// addTwoNumbers(3, 5)  //3, 5 are arguments 
// const result = addTwoNumbers(9, 23)
// console.log("result is ",result);  //result is undefined cause not returned anything

function addTwoNumbers2(num1, num2){
    return num1 + num2 
    console.log("vinay");  //this will never executes
}
const result = addTwoNumbers2(23, 2342)
// console.log(result);


function loginUserMessage(username = "ham"){  //it will give ham value //default value, in case user don't give assign name
    // if(username === undefined){
    //     console.log("PLease enter a username");
    //     return
    // }
    //OR
    if(!username){
        console.log("PLease enter a username");
        return
    }

    return `${username} just logged in`
}

console.log(loginUserMessage("vinay"))
console.log(loginUserMessage());  //PLease enter a username