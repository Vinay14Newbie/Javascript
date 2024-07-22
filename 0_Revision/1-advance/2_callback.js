// callback functions
// jab bhi koi aisa code jo baad me chalta hai aap likhoge, kyunki wo code baad mai chalta hai js ko ye pata nhi hota ke wo complete hua ya nhi, aise code ke completion par js ko bataya jaata hai ke wo complete hogya aur aap use chala  sakte ho, ye bataane ka kaam callback ka hai


// aisa code jo baad me chalta hai use hum ek function dedete hai ke bhaiya jab complete hojaana to ye function chala dena, aur wo function jo hum dete hai wo ek normal function hi hai aur use kehte hai callback function

// setTimeout(() => {
//     console.log("vinay");
// }, 2000);


function connectToServer(callbackFun){  // it taking a callback function as an input, which consist calling function of 'fetchCourses'
    console.log("Connecting to the server...");
    setTimeout(() => {
        console.log("Connected to the server");
        callbackFun()   // Here it call fetchCourses
    }, 2000);
}
function fetchCourses(callbackFun){
    console.log("fetching courses...");
    setTimeout(() => {
        callbackFun("BackEnd Domination")    // Here the callback function will be in action & it will print 'data' 
    }, 2000);
}
connectToServer(function(){
    fetchCourses(function(data){
        console.log(data);
    })
})


//
// function ab(callbackFun){  // Here we send a function as a parameter which is  'callbackFun'
//     callbackFun("vinay")    // From here we call that function back and the input is vinay
// }
// ab(function(data){
//     console.log(data);
// })