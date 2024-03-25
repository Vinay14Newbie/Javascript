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
let a = new Promise((res, reject) =>{
    if(true){
        return res()
    }
    else{
        return reject()
    }
})
a
.then(()=>{
    console.log("resolved");
})
.catch(()=>{
    console.log("rejected");
})