// Practical Closures

// T-3  Write a function that generates unique IDs. Use a closure to keep track of the last generated ID and increament with each call.

const outer = function(){
    let lastId = 0
    return function(){
        lastId++
        return lastId
    }
}
const info = outer()
console.log(info());
console.log(info());
console.log(info());




// T-4  Create a closure that captures a user's name and returns a function that greets the user by name.

const namePrint = function(name="vinay"){
    return function(){
        console.log(`Hello my name is: ${name}`);
    }
}
const print = namePrint("mangesh")
print()