// T6-  Add a static property to the Student class to keep track of the number of students created. Increament this property in the constructor and log the total number of students.

class Student{         // we cannot create variables inside the 'class'
    static studentCount = 0;
    constructor(name, age){
        this.name = name
        this.age = age
        Student.studentCount++
    }
    greet(){
        console.log(`Hello my name is ${this.name} & age is ${this.age}`);
    }
    static getStudentCount(){
        console.log(`student count is ${this.studentCount}`);
    }
}

const student1 = new Student("vinay", 20)
const student2 = new Student("dnyandip", 22)
const student3 = new Student("rahul", 24)

student3.greet()

Student.getStudentCount()