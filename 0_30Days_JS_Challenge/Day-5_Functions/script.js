//Functions

// function declaration
function check(num){
    if(num%2==0){
        console.log(`${num} is even`);
    }else{
        console.log(`${num} is odd`);
    }
}
check(29)



// Function expression
const maxNum = function(num1, num2){
    console.log(Math.max(num1, num2)+" is bigger");
}
maxNum(23, 53)



// Arrow function
const sum = (num1, num2) => num1 + num2
console.log("sume is: "+sum(23, 27));



// Function parameters and default values
const product = function(num1, num2=5){
    return num1*num2
}
console.log(product(6));



// Higher-Order functions
function main(val1, val2){
    return val1 + val2()
}
function helper(){
    return 5
}
console.log(main(10, helper)+" is a solution for higher order function :)");