// let myName = "Vinay      "
// let myPhone = "Oppo    "

// console.log(myName.length);  //11


let myHeros = ["thor", "spiderman"]

let heroPower = {
    thor : "hammer",
    spiderman : "sling",

    getSpiderPower : function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.vinay = function(){
    console.log("Vinay is present in all objects");
}

Array.prototype.heyVinay = function(){
    console.log("Vinay says Helloo");
}

// heroPower.vinay()
myHeros.vinay()    // array also have vinay() function cause of prototype inheritance

myHeros.heyVinay()
// heroPower.heyVinay()   // fail to run  //only array got the power



// inheritance

const user = {
    name : "vinay",
    email : "google@.com"
}

const teacher = {
    makeVideo : false,
    teacherName : "Hitesh"
}

const teachingSupport = {
    isAvailable : false
}

const TASupport = {
    makeAssignment : "JS assignment",
    fullTime : true,
    __proto__ : teachingSupport
}

teacher.__proto__ = user



// modern syntax
// in simple language it equals the heirarchy of the objects so we can access the different objects at once 

Object.setPrototypeOf(teachingSupport, teacher)

console.log(teachingSupport.makeVideo, teachingSupport.teacherName);   // false   Hitesh



let anotherUsername = "ChaiaurCode    "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`${this.name}`);
    console.log(`true length is : ${this.trim().length}`);
}

anotherUsername.trueLength()
"vinay".trueLength()
"iceTea".trueLength()