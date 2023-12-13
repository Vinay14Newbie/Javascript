function calculateCartPrice(...num1){  //rest operator ...
    return num1
}
// console.log(calculateCartPrice(23, 29, 82));  

// function ex(val1, val2, ...num){
//     return num
// }
// console.log(ex(23, 26, 87, 230, 932, 23, 99));  //[ 87, 230, 932, 23, 3 ]

const user = {
    username : "vinay",
    price : 200,
    email : "vinay@gmail.com"
}
function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price} and mail is ${anyobject.gmail}`);
}
handleObject(user)  //Username is vinay and price is 200 and mail is undefined


function returnSecondVal(getArr){
    return getArr[1]
}
const myNewArr = [200, 23, 322, 827, 328]
console.log(returnSecondVal(myNewArr));