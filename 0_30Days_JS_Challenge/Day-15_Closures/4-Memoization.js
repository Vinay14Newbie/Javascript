// Memoization

// T-7  Write a function that memoizes the results of another function. Use a closure to store the results of previous computations.

function memoize(fn){
    const cache = {}

    return function(...args){
        const key = JSON.stringify(args)

        if(cache[key]){
            console.log("returning from cache: "+key);
            return cache[key]
        }

        //computing new result cause it is not in the cache
        console.log(typeof(key));
        console.log("computing new result for: "+key);
        const result = fn(...args)
        cache[key] = result
        return result
    }
}

function slowFunction(number) {
    console.log(typeof(number));  //number
    let result = 0
    for(let i=1; i<=number; i++){
        result += i;
    }
    return result
}

const memoizedSlowFunction = memoize(slowFunction)
console.log("the answer is: ");
console.log(memoizedSlowFunction(5) );
console.log(memoizedSlowFunction(5) );
console.log(memoizedSlowFunction(10));
console.log(memoizedSlowFunction(10));





// T-8  Create a memoized version of a function that calculates the factorial of a number.

function memoizeFactorialInReal(fn) {
    const cache = {}

    return function(...args){
        const key = JSON.stringify(args)
        if(cache[key]){
            console.log("returning factorial from cache: "+key);
            return cache[key]
        }
        console.log("computing new factorial result for: "+key);
        const result = fn(...args)
        cache[key] = result
        return result
    }
}

function memoizeFactorial(number){
    let result = 1
    for(let i=1; i<=number; i++){
        result = result*i
    }
    return result
}

const memoizedFactorialResult = memoizeFactorialInReal(memoizeFactorial)
console.log(memoizedFactorialResult(5));
console.log(memoizedFactorialResult(5));