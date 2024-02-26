// const userEmail = "vinay@mail.com"   //we assuming string consist true value
const userEmail  = []

if(userEmail){
    console.log("got user mail"); //it will be printed
}else{
    console.log("don't have user mail");
}

// falsy values
/*
false, 0,-0, BigInt 0n, "", null, undefined, NaN
*/

// truthy values
/*
"0", 'false', " ", [], {}, function(){}
*/

// if(userEmail.length === 0){
//     console.log("Array is empty");
// }

// const emptyObj = {}

// if(Object.keys(emptyObj).length === 0){
//     console.log("Object is empty");
// }

// true
/*
false == 0
false == ''
0 == ''
*/