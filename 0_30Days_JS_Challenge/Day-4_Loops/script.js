// Loops

// for loop
for(let i=1; i<=10; i++){
    console.log(i);
}
for(let i=1; i<=10; i++){
    console.log(`5 * ${i}: ${i*5}`);
}



// while loop
let sum = 0;
let currNum = 1;
while(currNum <= 10){
    sum += currNum;
    currNum++;
}
console.log("sum from 1 to 10 is : "+sum);



// do-while loop
let a = 1;
do {
    console.log(a);
    a++;
} while (a<=5);

let b = 1;
let factorial = 1;
do {
    factorial *= b;
    b++;
} while (b<=3);
console.log(`factorial of ${b-1} is : ${factorial}`);



// nested loops
for(let i=0; i<5; i++){
    let str = ''
    for(let j=0; j<=i; j++){
        str += '* '
    }
    console.log(str);
}



// loop control statements - continue & break
for(let i=1; i<=10; i++){
    if(i===5) continue;
    console.log(i);
}

for(let i=1; i<=10; i++){
    if(i===7) break;
    console.log(i);
}