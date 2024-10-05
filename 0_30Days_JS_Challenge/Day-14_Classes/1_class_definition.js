// Class definition

// T1- Define a class Person with properties name and age, and a method to return a greeting message. Create an instance of the class and log the greeting message.

class Person{
    constructor(name, age){
        this.name = name
        this.age = age
    }
    greet(){
        return `Hello, my name is ${this.name} & my age is ${this.age}`
    }
    setter(age){
        this.age = age
    }
}
const infoP1 = new Person("Vinay", 20)
console.log(infoP1.greet());



// T2- Add a method to the Person class that updates the age property and logs the updated age.

infoP1.setter(22)
console.log(infoP1.greet());