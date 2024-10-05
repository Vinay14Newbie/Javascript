// Getters and Setters

// T-7 Add a getter method to the Person class to return the full name (Assume a firstName and lastName property). Create an instance and log the full name using the getter

class Person{
    constructor(firstName, lastName){
        this.firstName = firstName
        this.lastName = lastName
    }
    getter(){
        return `${this.firstName} ${this.lastName}`
    }
    setter(){
        this.firstName = "Rahul"
        this.lastName = "Chandekar"
    }
}

const user = new Person("Kunal", "Latelwar")
console.log(user.getter());





// T-8 Add a setter method to the Person class to update the name properties (firsnName and lastName). Update the name using the setter and log the updated full name.
user.setter()
console.log(user.getter());