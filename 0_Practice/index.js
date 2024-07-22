// this
const obj = {
    x : 20,
    y : 30,

    display : function(){
        console.log(`value of x is ${this.x} and y is ${this.y} from outer x and y`);

        const innerobj = {
            x : -1,
            y : -2,
            inner : function(){
                console.log(`value of x is ${this.x} and y is ${this.y} from inner x and y`);
                console.log(this);
            },
            inner2 : ()=>{
                console.log(`value of x is ${this.x} and y is ${this.y} from inner2 x and y`);
                console.log(this);
            }
        }
        innerobj.inner()  //Here, this refers to innerobj because inner is a regular function. 
        innerobj.inner2()  //Arrow functions do not have their own this context; instead, they inherit this from the enclosing scope, which is the display function. Therefore, this still refers to obj
    }
}
obj.display();




let check;  //undefined=false
if(!check){
    console.log("false");
    console.log(check);
}else{
    console.log("true");
}




// what happens when you return a array in function and you receive it in a array also
// this is how hooks are build in react
function retArr(){
    return [20, "vinay", "BTech"]
}
const [age, name, education] = retArr()
console.log(age, name, education);




const Flag = ()=>{
    console.log("vinay");
}
if(!Flag){
    console.log(`flag is defined`);
}else{
    console.log(`flag is not defined`);
}



// printing only keys using Object.keys() method
const user = {
    name : "vinay",
    age : 20,
    city : "nagpur"
}
const storUserData = Object.keys(user)
console.log(user);
console.log(storUserData);
console.log(typeof(storUserData));