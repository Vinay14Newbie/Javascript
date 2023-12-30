const user = {
    username : 'Vinay',
    logInCount : 8,
    signedIn : true,

    getUserDetails : function(){
        // console.log('Got user details from Database');
        // console.log(`Username: ${user.username}, Username: ${this.usernames}`);
        console.log(this);  //print all values of 'user'
    }
}
console.log(user.username);
// user.getUserDetails()
console.log(this);



// Constructor
// const promise1 = new Promise()
// const date = new Date()

function user2(username, loginCount, signedIn){
    this.username = username
    this.loginCount = loginCount
    this.signedIn = signedIn

    this.greeting = () => {
        console.log(`Welcome : ${this.username}`);
    }

    // return this
}

const userOne = new user2('Vinay', 12, true)
const userTwo = new user2('Chai aur Code', 23, false)
// console.log(userOne);
console.log(userOne.constructor);
// console.log(userTwo);

console.log(userOne instanceof user2);  //true