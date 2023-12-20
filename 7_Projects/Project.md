# Projects related to DOM

## Project link
[click here]()

# Solution Code

## Project 1 - Color changer

```javascript
const buttons = document.querySelectorAll('.button')
const body = document.querySelector('body')

buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        // console.log(e);
        // console.log(e.target);
        if(e.target.id === 'grey'){
            body.style.backgroundColor = 'grey'
            body.style.color = 'white'
        }
        else if(e.target.id === 'yellow'){
            body.style.backgroundColor = 'yellow'
            body.style.color = 'black'
        }
        else if(e.target.id === 'blue'){
            body.style.backgroundColor = 'blue'
            body.style.color = 'white'
        }
        else{
            body.style.backgroundColor = 'white'
            body.style.color = 'black'
        }
    })
})
```


## Project 2 - BMI Calculator

```javascript
const form = document.querySelector('form');

//this usecase will give you empty
// const height = parseInt(document.querySelector('height').value)

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);   
    const result = document.querySelector('#result');

    if(height === '' || height < 0 || isNaN(height)){
        result.innerHTML = `Please give a valid height, ${height} is not valid`;
    }
    else if(weight === '' || weight < 0 || isNaN(weight)){
        result.innerHTML = `Please give a valid weight, ${weight} is not valid`;
    }
    else{
        const bmi = weight / ((height/100) * (height/100).toFixed(2))  //toFixed(2) for only two extra decimal after point 
        result.innerHTML = bmi

        document.querySelector('.under').style.color = 'black'
        document.querySelector('.normal').style.color = 'black'
        document.querySelector('.over').style.color = 'black'

        if(bmi <= 18.6){
            document.querySelector('.under').style.color = 'yellow'
        }
        else if(bmi > 18.6 && bmi <= 24.9){
            document.querySelector('.normal').style.color = 'green'
        }
        else{
            document.querySelector('.over').style.color = 'red'
        }
    }

})
```


## Project 3 - Digital Clock

```javascript
const clock = document.getElementById('clock')
// const clock = document.querySelector('#clock')

// this refresh page at given time period
setInterval(function(){
    let date = new Date()
    clock.innerHTML = date.toLocaleTimeString()
}, 1000)  //1000 milisecond = 1sec
```