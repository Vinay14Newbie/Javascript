// Basic Error handling with try-catch

// write a function that intentionally throws an error and use a try-catch block to handle the error and log an appropriate message to the console.

const ex = function(){
    try{
        const a = true
        if(a) throw "value is false"
        console.log("error not found");
    }
    catch(error){
        console.log("Error found "+error);
    }
}
ex()
// output
// Error found value is false



// Create a function that divides two numbers and throws an error if the denominator is zero. Use a try-catch block to handle this error.

const ex2 = function(val1, val2){
    try{
        if(val1%val2!==0){
            throw "not divisible"
        }
        console.log(val1 +" can be divided by: "+val2);
    }
    catch(error){
        console.log("error found in ex2 :"+error);
    }
}
ex2(10, 5)
// output
// 10 can be divided by: 5