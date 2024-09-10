// Error Handling in Promises
// Promise rejection handling
// Try-catch with async function


// Construct a promise that resolves or rejcts based on a random condition. 
// Utilize the .catch() method to handle the rejection scenario and log a userfriendly message.

const promise1 = new Promise((resolve, reject)=>{
    const randomCond = Math.random()*100-1 >= 50;
    if(randomCond){
        resolve("The promise was resolved succssfully")
    }else{
        reject("There is an some error")
    }
})
promise1.then((msg)=>{
    console.log(msg);
})
.catch((msg)=>{
    console.log(msg);
})




// Design a async function that attempts to fetch data using a promise
// Wrap the promise call in a try-catch block to capture potential errors.
// Log an informative error message if the promise rejects

const promise2 = new Promise((resolve, reject) =>{
    const randomCond = Math.random()*100-1 >= 50
    setTimeout(() => {
        if(randomCond){
            resolve({data: "fetching successful"})
        }else{
            reject({data: "Something went wrong :/"})
        }
    }, 1000);
})
async function getInfo(){
    try{
        const response = await promise2
        console.log(response.data);
    }
    catch(error){
        console.log(error.data);
    }
}
getInfo()