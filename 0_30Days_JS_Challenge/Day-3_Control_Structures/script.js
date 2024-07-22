// Control Structures

// if else statements
let num = 8
if(num > 0){
    console.log(`${num} is positive`);
}
else{
    console.log(`${num} is negative`);
}

if(28 >= 18) console.log('can vote');
else console.log(`can't vote`);



// nested if-else statements
const a = 8, b = 2, c = 10
if(a > b && a > c){
    console.log(`${a} is the largest num`);
}
else if(b > a && b > c){
    console.log(`${b} is the largest num`);
}
else{
    console.log(`${c} is the largest num`);
}



// switch-case
// check day
const day = 7
switch (day) {
    case 1: console.log("monday"); break;
    case 2: console.log("tuesday"); break;
    case 3: console.log("wednesday"); break;
    case 4: console.log("thursday"); break;
    case 5: console.log("friday"); break;
    case 6: console.log("saturday"); break;
    case 7: console.log("sunday"); break;
    default:
        console.log(`${day} day doesn't exist`);
        break;
}

// check grade
const grade = 'B'
switch(grade){
    case 'A' : console.log(`A grade`); break;
    case 'B' : console.log(`B grade`); break;
    case 'C' : console.log(`C grade`); break;
    case 'D' : console.log(`D grade`); break;
    case 'E' : console.log(`F grade`); break;
    default : console.log(`grade didn't found`);
}



// ternary operator
13 % 2 == 0 ? console.log(`number is even`) : console.log(`number is odd`);



// combining conditions
const year = 2016
if(year % 4 == 0){
    if(year % 400 == 0){
        if(year % 100 == 0){
            console.log(`${year} is a leap year :)`);
        }
    }
}