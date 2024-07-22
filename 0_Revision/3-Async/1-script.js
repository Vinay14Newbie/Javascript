// Promises

// console.log("yash");
// setTimeout(()=>{
//     console.log("kunal");
// }, 0)
// console.log("vinay");
// console.log("jagdish");
// output : yash
//          vinay
//          jagdish
//          kunal




// 
// let a = new Promise((res, reject) =>{
//     if(true){
//         return res("vinay")
//     }
//     else{
//         return reject()
//     }
// })
// a
// .then((res)=>{
//     console.log(res+" resolved");
// })
// .catch(()=>{
//     console.log("rejected");
// })



function connectToServer(){
    console.log("Connected to Server");
    
    return new Promise(function(resolve, reject){
        setTimeout(() => {
            resolve(["vinay", "dnyandip", "kunal", "mangesh"])
        }, 2000);
    })
}
function getCourses(){
    console.log("Getting courses");

    return new Promise(function(resolve, reject){
        setTimeout(()=>{
            resolve("Backend Domination")
        }, 2000)
    })
}

connectToServer()
.then((res)=>{
    console.log(res);

    return getCourses()
})
.then((res)=>{
    console.log(res);

    return connectToServer()
})
.then((res)=>{
    console.log(res);
})
/* o/p
Connected to Server
[ 'vinay', 'dnyandip', 'kunal', 'mangesh' ]
Getting courses
Backend Domination
Connected to Server
[ 'vinay', 'dnyandip', 'kunal', 'mangesh' ]
*/