// finally block

// write a script that includes a try-catch block and a finally block. Log messages in the try, catch, and finally blocks to observe the execution flow.

const promise2 = new Promise((resolve, reject)=>{
    if(10%8===0){
        resolve("is divisible")
    }else{
        reject("not resolvable")
    }
})
async function ex2(){
    try{
        const response = await promise2
        console.log(response);
    }
    catch(error){
        console.log(error);
    }
    finally{
        console.log("finally it's over");
    }
}
ex2()