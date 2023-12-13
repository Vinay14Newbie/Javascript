// map


const arr = [1, 2, 3, 4, 5, 6, 7, 8]

// const newNums = arr.map( (num) => num+10)
// console.log(newNums);

const newNums = arr
                .map( (num) => num*10)
                .map( (num) => num + 7)   //it accessing modified value from above line
                .filter( (num) => num >= 20)

console.log(newNums); 
// [
//     27, 37, 47,
//     57, 67, 77, 87
//   ]