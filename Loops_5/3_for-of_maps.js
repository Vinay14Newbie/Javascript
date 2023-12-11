// for of  (for each loop in java)

const arr = [1, 2, 3, 4, 5]
for (const val of arr) {    //it just like for each loop in java
    // console.log(val);
}

// const greetings = "Hello world"
// for (const val of greetings) {
//     console.log(val);
// }



//  Maps

const map = new Map()   //just like Hashmap in java
map.set('Maharashtra', 'Mumbai')
map.set('Karnataka', 'Banglore')
map.set('Telangana', 'Hyderabad')

// console.log(map);

for (const i of map) {   //this loop will print all value and key as well
    // console.log(i);
}

for (const [key, value] of map) {
    // console.log(key);   //this will print only key
}


const myObj = {
    'game1': 'NFS',
    'game2': 'Mario',
    'game3': 'Spiderman'
}

// this loop will not work
// for (const [key, value] of myObj) {
//     console.log(key, value);
// }