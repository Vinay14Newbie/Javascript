const arr = [1, 2, 3]

const myTotal = arr.reduce( (acc, currVal) => {
    console.log('acc: ',acc,' and currVal: ',currVal);
    return acc + currVal
}, 2)
console.log(myTotal);