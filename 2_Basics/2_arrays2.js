const marvel_heros = ["thor", "ironMan", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)
// console.log(marvel_heros);  //[ 'thor', 'ironMan', 'spiderman', [ 'superman', 'flash', 'batman' ] ]
// console.log(marvel_heros[3]);  //[ 'superman', 'flash', 'batman' ]
// console.log(marvel_heros[3][1]);  //flash

// const arr = marvel_heros.concat(dc_heros)  //concat return type that's why i used another arr to store data
// console.log(arr);  //[ 'thor', 'ironMan', 'spiderman', 'superman', 'flash', 'batman' ]

const arr = [...marvel_heros, ...dc_heros]
console.log(arr);  //[ 'thor', 'ironMan', 'spiderman', 'superman', 'flash', 'batman' ]

const anArr = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
console.log(anArr);  //[ 1, 2, 3, [ 4, 5, 6 ], 7, [ 6, 7, [ 4, 5 ] ] ]
const usableArr = anArr.flat(Infinity)  //infinity provides depth, how much layer of an arr you want to flat
console.log(usableArr); /*[
                                1, 2, 3, 4, 5,
                                6, 7, 6, 7, 4,
                                5
                            ]
                        */


console.log(Array.isArray("vinay"));  //false checking state
console.log(Array.from("vinay"));  //[ 'v', 'i', 'n', 'a', 'y' ]
console.log(Array.from({name:'vinay'}));  //[]  //interesting // it will be confuse to of which value should i make array of, it can be key or value


let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1, score2, score3));  //[ 100, 200, 300 ]  //Returns a new array from a set of elements.




// important in aspects to react.js
function a (){
    return [12, "vinay", 234]
}
const [num, name, num2] = a()
console.log(num, name, num2);