class user{
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`Username is ${this.username}`);
    }
    static createId(){  //blocks the access
        return `123`
    }
}

const vinay = new user("vinay")
// console.log(vinay.createId());


class teacher extends user{
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const iPhone = new teacher("iphone", "i@gmail.com")
// console.log(iPhone.logMe());
console.log(iPhone.createId());