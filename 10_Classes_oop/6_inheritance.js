class user{
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`Username is ${this.username}`);
    }
}

class teacher extends user{
    constructor(username, email, password){
        super(username)
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}

const chai = new teacher("chai", "chai@gmail.com", "123")
chai.addCourse()

const masalaChai = new user("Vinay")
masalaChai.logMe()
console.log(chai === masalaChai);  //false

console.log(chai instanceof teacher);