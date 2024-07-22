const promise1 = new Promise(function(resolve, reject) {
    // Do an async task
    // ḌB calls, cryptography, network
    setTimeout(function(){
        console.log('Async task is complete');
        resolve()
    }, 1000)
})
promise1.then(function(){
    console.log('Promise consumed');
})
// OR
new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log('Async task 2');
        resolve()
    }, 1000)
}).then(function(){
    console.log('Async 2 resolved');
})


const promise3 = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username:'Vinay', email:'vinay@gmail.com'})
    }, 1000)
})
promise3.then(function(user){
    console.log(user);
})


const promise4 = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username:'Vinay', password:'123'})
        }else{
            reject('ERROR: Something went wrong')
        }
    }, 1000)
})
promise4.then((user) => {
    console.log(user);
    return user.username
}).then((username) => {  //if resolve
    console.log(username);
}).catch((error) => {  //if reject
    console.log(error);
}).finally(() => console.log('The promise is either resolved or rejected'))  // this will always conducted


const promise5 = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username:'Javascript', password:'123'})
        }else{
            reject('ERROR: JS went wrong')
        }
    }, 1000)   
})
async function consumePromise5(){
    try{
        const respone = await promise5
        console.log(respone);   
    }catch(error){
        console.log(error);
    }
    finally{
        console.log('khatm');
    }
}
consumePromise5()


// async function getAllUsers(){
//     try{
//         const respone = await fetch('https://jsonplaceholder.typicode.com/users')
//         // console.log(respone);
//         const data = await respone.json()  //here JSON fromat `response.json()` is used to parse this JSON data into a usable js object

//         console.log(data);
//     }catch(error){
//         console.log('E: ', error);
//     }
// }
// getAllUsers()


fetch('https://api.github.com/users/Vinay14Newbie')
.then((respone) => {
    return respone.json()
})
.then((data) => console.log(data))
.catch((error) => console.log(error))