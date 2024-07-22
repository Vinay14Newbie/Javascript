const buttons = document.querySelectorAll('.button')
const body = document.querySelector('body')

// buttons.forEach((button) => {
//     button.addEventListener('click', (e) => {
//         // console.log(e);
//         // console.log(e.target);
//         if(e.target.id === 'grey'){
//             body.style.backgroundColor = 'grey'
//             body.style.color = 'white'
//         }
//         else if(e.target.id === 'yellow'){
//             body.style.backgroundColor = 'yellow'
//             body.style.color = 'black'
//         }
//         else if(e.target.id === 'blue'){
//             body.style.backgroundColor = 'blue'
//             body.style.color = 'white'
//         }
//         else{
//             body.style.backgroundColor = 'white'
//             body.style.color = 'black'
//         }
//     })
// })

document.getElementById('yellow').addEventListener('click', ()=>{
    body.style.backgroundColor = 'yellow'
})
document.getElementById('blue').addEventListener('click', ()=>{
    body.style.backgroundColor = 'blue'
})
document.getElementById('grey').addEventListener('click', ()=>{
    body.style.backgroundColor = 'grey'
})
document.getElementById('white').addEventListener('click', ()=>{
    body.style.backgroundColor = 'white'
})