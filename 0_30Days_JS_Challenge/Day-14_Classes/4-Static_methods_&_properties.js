// Static methods and properties

// T5 - Add a static method to the Person class that returns a generic greeting message. Call the static method without creating an instance of the class and log the message

// Note
// the 'static' keyword defines a method that belongs to the class itself, not to the instances of the class. This means you can call the method using the class name directly, without needing to create an object (instance) of that class.

class Person{
    constructor(name){
        this.name = name
    }
    greet(){
        console.log(`Hello !!!`);
    }
    static genericGreet(){
        console.log(`Hello this is generic greeting & my name is ${this.name}`);
    }
}

// const user = new Person("bhushan")
// user.genericGreet()  //TypeError: user.genericGreet is not a function


Person.greet()  //TypeError: Person.greet is not a function
Person.genericGreet()  //Hello this is generic greeting & my name is Person