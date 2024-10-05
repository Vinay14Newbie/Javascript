// Class inheritance

// T-3 Define a class Student that extends the Person class. Add a property studentId and a method to return the student ID. Create an instance of th STudent class and log the student ID.

// Note
// super refers to the parent class (or "superclass") and allows you to call methods and access properties of the parent class from the child class.

class Person{
    constructor(name, age){
        this.name = name
        this.age = age
    }
    printName(){
        console.log(`im a class Person and my name is ${this.name}`);
    }
}

class Student extends Person{
    constructor(name, age, education){
        super(name, age)   //call the parent class constructor to initialize the name and age
        this.age = age
        this.education = education
    }
    printInfo(){
        console.log(`name is ${this.name} and age is ${this.age} and education is ${this.education}`);
    }
}

const user = new Student("vinay", 20, "BTech")
user.printInfo()  //name is vinay and age is 20 and education is BTech
user.printName()  //im a class Person and my name is vinay

const user2 = new Person("ajay")
user2.printName()   //im a class Person and my name is ajay
 
console.log(user instanceof Student);  //true