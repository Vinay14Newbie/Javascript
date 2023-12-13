//for

// for(let i=0; i<=10; i++){
//     const element = i;
//     if(element == 5){
//         console.log("5 is best number");
//     }
// }

// for(let i=1; i<=10; i++){
//     // console.log('Outer loop value: ',i);
//     for(let j=1; j<=2; j++){
//         // console.log('Inner loop value: ',j);
//         console.log(i, ' * ', j, ' = ', i*j);
//     }
// }


// const arr = ["flash", "batman", "superman"]
// for (let i = 0; i < arr.length; i++) {
//     const element = arr[i];
//     console.log(arr[i]);
// }


//continue & break

for (let i = 1; i <= 10; i++) {
    // if(i == 5){
    //     console.log('Detected 5');
    //     break;
    // }
    if(i == 8){
        console.log('8 ignored');
        continue;
    }
    console.log('value of i is : ', i);
}