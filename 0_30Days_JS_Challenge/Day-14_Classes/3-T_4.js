// override the greeting method in the student class to include the student ID in the message. Log the overriden greeting message.

class Person{
    constructor(name){
        this.name = name
    }
    greet(){
        console.log(`my name is ${this.name}`);
    }
}

class Student extends Person{
    constructor(name, studentId){
        super(name)
        this.studentId = studentId
    }
    greet(){
        console.log(`my name is ${this.name} & studentID ${this.studentId}`);
    }
}

const user = new Student("vinay", 232)
user.greet()