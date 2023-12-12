const arr = [1, 2, 3]

const myTotal = arr.reduce( (acc, currVal) => {
    console.log('acc: ',acc,' and currVal: ',currVal);
    return acc + currVal
}, 2)
// console.log(myTotal);  //imagine shopping cart it just like that
// output
// acc:  2  and currVal:  1
// acc:  3  and currVal:  2
// acc:  5  and currVal:  3
// 8


const shoppingCart = [
    {
        itemName : "js course",
        price : 2999
    },
    {
        itemName : "python",
        price : 999
    },
    {
        itemName : "app development",
        price : 5999
    },
    {
        itemName : "web development",
        price : 2999
    },
    {
        itemName : "data science course",
        price : 12999
    }
]

const priceToPay = shoppingCart.reduce((acc, item) => (acc + item.price), 0)
console.log(priceToPay);