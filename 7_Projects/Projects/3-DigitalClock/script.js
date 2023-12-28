const clock = document.getElementById('clock')
// const clock = document.querySelector('#clock')

// this refresh page at given time period
setInterval(function(){
    let date = new Date()
    clock.innerHTML = date.toLocaleTimeString()
}, 1000)  //1000 milisecond = 1sec