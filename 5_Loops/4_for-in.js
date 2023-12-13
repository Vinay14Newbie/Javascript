const myObj = {
    js : 'javascript',
    cpp : 'C++',
    rb : 'ruby',
    swift : 'swift'
}

// for in

for (const key in myObj) { 
    // console.log(key);   //it will print only key
    // console.log(key,' shortcut is for ',myObj[key]);
} 


// checking for-in loop for array
const arr = ['js', 'rb', 'py', 'java', 'cpp']
for (const key in arr) {
    // console.log(key);  //it will print only index key = index
    // console.log(arr[key]);
}



// trying for-in loop for map
const map = new Map()  
map.set('Maharashtra', 'Mumbai')
map.set('Karnataka', 'Banglore')
map.set('Telangana', 'Hyderabad')

for (const key in map) {   //so map is not iterable
    console.log(key);
}