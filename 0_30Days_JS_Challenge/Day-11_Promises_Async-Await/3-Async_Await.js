// write an async function that waits for a promise to resolve and then logs the resolved value
// OR
// write an async function that handles a rejected promise using try-catch and logs the error message

const promise = new Promise((resolve, reject)=>{
    const check = true
    if(!check){
        resolve("resolved")
    }else{
        reject("Error")
    }
})
async function consuePromise(){
    try {
        const response = await promise
        console.log(response); 
    } 
    catch (error) {
        console.log(error);
    } 
    finally{
        console.log('khatm');
    }
}
consuePromise()