// chaining promises

// create a sequence of promises that simulate fetching data from a serer. Chain the promises to log messages in a specific order

const book = {
    name: "vinay",
    age: 20
}

new Promise((resolve, reject)=>{
    if(book){
        resolve(book)
    }else{
        reject("Error found")
    }
})
.then((data)=>{
    console.log(data.name);
    return data
})
.then((data)=>{
    console.log(data.age);
})
.catch((data)=>{
    console.log(data);
})


// 
// vinay
// 20