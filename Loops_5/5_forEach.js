// forEach

const arr = ['js', 'ruby', 'java', 'python', 'django']

// arr.forEach( function (i){      //cause it callback function so function has no name
//     console.log(i);
// })   

// arr.forEach( (i) => {    //arrow
//     console.log(i);
// } )

// function printMe(item){
//     console.log(item);
// }
// arr.forEach(printMe)


// arr.forEach( (item, index, arr) => {
//     console.log(item, index, arr);
// })


const myCoding = [
    {
        languageName : 'javascript',
        languageFileName : 'js'
    },
    {
        languageName : 'java',
        languageFileName : 'java'
    },
    {
        languageName : 'python',
        languageFileName : 'py'
    }
]

myCoding.forEach( (item) => {
    console.log(item.languageName);
} )