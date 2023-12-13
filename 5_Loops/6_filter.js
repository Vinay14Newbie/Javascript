// filter


// const arr = ['js', 'ruby', 'java', 'python', 'django']

// const values = arr.forEach( (item) => {
//     // console.log(item);
// })
// console.log(values);  //undefined


const arr = [1, 2, 3, 4, 5, 6, 7]

// const newNums = arr.filter( (num) => {  //this arrow function making scope so it will not return implicitly so we have to return explicity
//     return num > 4
// })
// so above and below command will work same
// const newNums = arr.filter( (num) => num > 4)  //filter returns the values
// console.log(newNums);

// OR  (using forEach)

// const newNums = []
// arr.forEach( (num) => {
//     if(num > 4){
//         newNums.push(num)
//     }
// })
// console.log(newNums);



const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004},
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1921, edition: 2014},
    { title: 'Book Three', genre: 'Self-help', publish: 1991, edition: 2020},
    { title: 'Book Four', genre: 'Fiction', publish: 1990, edition: 2012},
    { title: 'Book Five', genre: 'Thriller', publish: 1991, edition: 2023},
    { title: 'Book six', genre: 'Fiction', publish: 1999, edition: 2013},
    { title: 'Book seven', genre: 'Sci-fiction', publish: 2000, edition: 2023}
]

const userBooks  = books.filter( (book) => book.genre === 'Fiction')
const userBooks2 = books.filter( (book) => book.publish >= 1990  && book.genre === 'Fiction')
console.log(userBooks2);