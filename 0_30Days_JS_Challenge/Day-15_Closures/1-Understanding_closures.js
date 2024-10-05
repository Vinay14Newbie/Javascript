// Understanding closures

// T-1 Write a function that returns another function, where the inner function accesses a variable from the outer function's scope. Call the inner function and log the result.

const outer = function(){
    const name = "vinay"
    const inner = function(){
        console.log("inner function output:- "+name);
    }
    return inner
}
const res = outer()
res()





// T-2  Create a closure that maintains a private counter. Implement functions to increament and get the current value of the counter.

const outer2 = function(){
    let count = 0;
    
    return{
        increament : function(){
            count++
        },
        getCurrVal : function(){
            return count
        }
    }
}
const info = outer2()
info.increament()
info.increament()
console.log(info.getCurrVal());
