//Dates

let myDate = new Date()
console.log(myDate);  //2023-11-27T14:29:03.102Z
console.log(myDate.toString());  //Mon Nov 27 2023 20:01:48 GMT+0530 (India Standard Time)
console.log(myDate.toDateString());  //Mon Nov 27 2023
console.log(myDate.toTimeString());  //20:02:45 GMT+0530 (India Standard Time)
console.log(myDate.toLocaleDateString());  //27/11/2023
console.log(myDate.toISOString());  //2023-11-27T14:33:41.200Z
console.log(myDate.toUTCString());  //Mon, 27 Nov 2023 14:34:19 GMT
console.log(myDate.getMinutes());  //5 (give minutes)
console.log(myDate.getHours());  //20 (give hour time)
console.log(myDate.toLocaleString());  //27/11/2023, 8:21:54 pm

console.log(typeof myDate);  //object

let myCreatedDate = new Date(2023, 10, 27)  //so months start from 0 in Number | 0 based indexing
console.log(myCreatedDate.toDateString());

let myCreatedDate2 = new Date("11-27-2023")
console.log(myCreatedDate2.toLocaleString());  //27/11/2023, 12:00:00 am


let myTimeStamp = Date.now();
console.log(myTimeStamp);  //1701097206557
console.log(myCreatedDate2.getTime());  //1701023400000
console.log(Math.floor(Date.now()/1000));  //1701097206


let newDate = new Date()
console.log(newDate.getMonth());  //10
console.log(newDate.getDate());  //27
console.log(newDate.getDay());  //1


console.log(newDate.toLocaleString('us', {
    weekday: "long",
}));  //monday