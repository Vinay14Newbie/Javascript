const tinderUser = new Object()

tinderUser.id = "123abc"
tinderUser.name = "vinay"
tinderUser.isLoggedIn = false

// console.log(tinderUser);  //{ id: '123abc', name: 'vinay', isLoggedIn: false }

const regularUser = {
    email : "vinay@gmail.com",
    fullname : {
        userFullName : {
            firstName : "vinay",
            lastName : "duryodhan"
        }
    }
}

// console.log(regularUser);
// console.log(regularUser.fullname.userFullName.lastName);


const obj1 = {1 : "a", 2 : "b"}
const obj2 = {3 : "a", 4 : "b"}
const obj3 = {5 : "a", 6 : "b"}

// const objT = Object.assign(obj1, obj2)  //{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

// const obj4 = Object.assign(obj1, obj2, obj3)  //here all object are merging at obj1 and obj4
// { '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'a', '6': 'b' }
// { '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'a', '6': 'b' }
// console.log(obj1 == obj4);  //true

// const obj4 = Object.assign({}, obj1, obj2, obj3)  //but here if you give an empty {} this will not respond like above
// { '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'a', '6': 'b' }
// { '1': 'a', '2': 'b' }


// const obj4 = {...obj1, ...obj2, ...obj3}   //best approach to mergin 

// console.log(obj4);  


const users = [
    {
        id: 1,
        email: "temp@gmail.com"
    },
    {
        id: 1,
        email: "temp@gmail.com"
    },
    {
        id: 1,
        email: "temp@gmail.com"
    },
]
// console.log(users[1].email);
// console.log(tinderUser);

console.log(Object.keys(tinderUser));  //[ 'id', 'name', 'isLoggedIn' ]
console.log(Object.values(tinderUser));  //[ '123abc', 'vinay', false ]
console.log(Object.entries(tinderUser));  //[ [ 'id', '123abc' ], [ 'name', 'vinay' ], [ 'isLoggedIn', false ] ]

console.log(tinderUser.hasOwnProperty('isLoggedIn'));




// *******************object de-structure and JSON API**********************

const course = {
    coursename : "i'm studying js",
    time : "0Rs",
    courseInstructor : "Hitesh"
}

// course.courseInstructor

const {courseInstructor : instructor} = course

// console.log(courseInstructor); 
console.log(instructor);  //this will also give "hitesh" output as i give the another name to courseInstructor as above as instructor


// {
//     "name" : "hitesh",
//     "courseName" : "jsInHindi",
//     "price" : "Free"
// }

// [
//     {},
//     {},
//     {}
// ]