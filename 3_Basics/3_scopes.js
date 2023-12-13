
// var c = 300

// if(true){
//     let a = 10
//     const b = 20
//     var c = 30
// }

// // console.log(a);
// // console.log(b);
// console.log(c);   //30


// let a = 300   //global scope

// if(true){
//     let a = 10    //block scope
//     const b = 20
//     console.log("inner a : ", a);   //10
// }
// console.log("outer a : ", a);   //300



function one(){   //in js it will not executed without calling it
    const username = "vinay"

    function two(){
        const website = "youtube"
        console.log(username);  //vinay
    }
    // console.log(website);  //website will be undefined
    // here "chote bacche bade logo se ice-cream mang sakte but bade log chote baccho se ice-cream nahi mang sakte"

    two();   //if i remove/comment this vinay will never prints cause i never called two
}

// one();

if(true){
    const username = "vinay"
    if(username === "vinay"){
        const website = "youtube"
        console.log(website);
    }
    // console.log(website);
}
// console.log(username);



// ************************ interesting ************************ 

console.log(addone(5));  //6
function addone(val){
    return val + 1;
}


addTwo(3)   //will not work as above, it will give error
const addTwo = function(val){
    return val + 2;
}
console.log(addTwo(5));   //7