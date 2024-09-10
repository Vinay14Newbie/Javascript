// Promises and Async/Await

// Understanding Promises

// create a promise that resolves with a message after a 2-second timeout and log the message to the console
const promise = new Promise(function(resolve, reject){
    setTimeout(() => {
        console.log("Task is complete");
        resolve()
    }, 2000);
})
promise.then(function(){
    console.log("Promise completed");
})

// create a promise that rejects with an error message after a 2-second timeout and handle the error using .cath()
new Promise((resolve, reject)=>{
    const val = 12
    setTimeout(() => {
        if(!val){
            resolve("promise completed")
        }else{
            reject("Error: promise rejected")
        }
    }, 2500);
})
.then((data)=>{
    console.log(data);  //for the resolve
})
.catch((data)=>{
    console.log(data);  //for the reject
})