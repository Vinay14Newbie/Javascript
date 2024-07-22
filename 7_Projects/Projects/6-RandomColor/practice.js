const changeColor = ()=>{
    const hex = '0123456789ABCDEF';
    let color = '#'
    for (let i=0; i<6; i++) {
        color += hex[Math.floor(Math.random()*16)];
    }
    return color
}
let intervalId;
const startChangingColor = ()=>{
    if(!intervalId){
        intervalId = setInterval(() => {
            let color = changeColor()
            document.body.style.backgroundColor = color
        }, 1000);
    }   
}
const stopChangingColor = ()=>{
    clearInterval(intervalId)
    intervalId = null
}
document.querySelector('#start').addEventListener('click', startChangingColor);
document.querySelector('#stop').addEventListener('click', stopChangingColor);