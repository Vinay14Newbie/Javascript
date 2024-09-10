// use Promise.all to wait for multiple promises to resolve and then log all their values.
// Promise.all allows you to wait for multiple promises to resolve, and then you can log all their values once they have all completed.

const promise1 = new Promise((resolve, reject)=>{
    setTimeout(() => {
        resolve("promise1 resolved")
    }, 500);
})
const promise2 = new Promise((resolve, reject)=>{
    setTimeout(() => {
        resolve("promise2 resolved")
    }, 2000);
})
const promise3 = new Promise((resolve, reject)=>{
    setTimeout(() => {
        resolve("promise3 resolved")
    }, 3000);
})

Promise.all([promise1, promise2, promise3])
.then((values)=>{
    console.log("All promises resolved");
    console.log(values);
})
.catch((error)=>{
    console.log("Error found: "+error);
})
// output
// All promises resolved
// [ 'promise1 resolved', 'promise2 resolved', 'promise3 resolved' ]



// Use 'Promise.race' to log the value of the first promise that resolves among multiple promises.
Promise.race([promise1, promise2, promise3])
.then((data)=>{
    console.log("the first resolved promise is: "+data);
})
.catch((error)=>{
    console.log("Error found: "+error);
})