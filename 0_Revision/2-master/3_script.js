// pure & impure function

// pure
// i) it should always return same output for same input
// ii) it will never change/update the value of a global variable

// & Offcourse impure is opposite of it

// it's not pure function
// let a = 5
// function abcd(val){
//     a += 10
//     console.log(val*Math.random());
// }
// abcd(2)
// abcd(2)

//
function abcd(a, b){
    console.log(a*b)
}
abcd(1, 2)
abcd(1, 2)