// Arrays

// Array creation and access
const arr = [1, 2, 3, 4, 5]
console.log(arr[0] +" "+arr[4]);



// Array methods (basic)
arr.push(6)  //[ 1, 2, 3, 4, 5, 6 ] //push at end
arr.pop()  //[ 1, 2, 3, 4, 5 ]  //remove from end
arr.shift()  //[ 2, 3, 4, 5 ]  //remove from start
arr.unshift(1)  //[ 1, 2, 3, 4, 5 ]  //push at start



//  Array methods (Intermediate)
// map
const newArr = arr.map(prev => prev*2)
console.log(arr);  //[ 1, 2, 3, 4, 5 ]
console.log(newArr);  //[ 2, 4, 6, 8, 10 ]

// filter
const newArr2 = arr.filter(prev => prev%2==0)
console.log(newArr2);  //[ 2, 4 ]

// reduce
const newArr3 = arr.reduce((acc, currVal) => {
    console.log("acc: "+acc+" currVal: "+currVal);
    return acc + currVal
}, 2)
console.log(newArr3);  //17



// Array iteration
// for
for(let i=0; i<arr.length; i++){
    console.log("arr printing with for loop: "+arr[i]);
}

// for-each
arr.forEach(element => {
    console.log("arr printing with for-each loop: "+element);
});



// Multi-dimensional Array
const mulArr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
console.log(mulArr);
console.log(mulArr[0][2]); //3