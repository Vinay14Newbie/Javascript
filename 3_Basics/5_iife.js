// Immediately Invoked Function Expressions (IIFE)

(function chai(){
    console.log('DB connected');
})();   //need semicolumn to end this function


(() => {
    console.log('DB connected two');
})();



((name) => {
    console.log(`Hey there ${name}`);
})('vinay')
// both above and below function are same
function print(name){
    console.log(`Hey there ${name}`);
}
print("hitesh")