class user {
    constructor(email, password){
        this.email = email
        this.password = password
    }

    get password(){
        return `${this._password}vinay`
    }
    set password(value){
        this._password = value
    }

    get email(){
        return this._email+" hitesh's email"
    }
    set email(value){
        this._email = value
    }
}

const hitesh = new user("hitesh@gmail.com", "123")
console.log(hitesh.password, hitesh.email);