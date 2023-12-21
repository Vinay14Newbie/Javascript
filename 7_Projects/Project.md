# Projects related to DOM

## Project link
### You can practice here
[click here](https://stackblitz.com/edit/dom-project-chaiaurcode-earj7d?file=1-colorChanger%2Findex.html)

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


## Project 4 - Guess the Number

```javascript
let randomNo = Math.round(Math.random()*100+1);

const submit = document.querySelector('#subt')
const userInput = document.querySelector('#guessField')
const guessSlot = document.querySelector('.guesses')
const remaining = document.querySelector('.lastResult')
const lowOrHi = document.querySelector('.lowOrHi')
const startOver = document.querySelector('.resultParas')

const p = document.createElement('p')


let prevGuess = []
let numGuess = 1

let playGame = true


if(playGame){
    submit.addEventListener('click', (e) => {
        e.preventDefault()
        const guess = parseInt(userInput.value)
        validateGuess(guess)
    })
}

function validateGuess(guess){
    if(isNaN(guess)){
        alert('Please enter a valid number')
    }
    else if(guess < 1){
        alert('Please enter a number greater than 1')
    }
    else if(guess > 100){
        alert('Please enter a number lesser than 100')
    }
    else{
        prevGuess.push(guess)
        if(numGuess === 10){
            displayGuess(guess)
            displayMsg(`Game Over, Random number was ${randomNo}`)
            endGame()
        }
        else{
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess(guess){
    if(guess === randomNo){
        displayMsg('You guessed it right')
        endGame()
    }
    else if(guess < randomNo){
        displayMsg('Number is TOOO Low')
    }
    else if(guess > randomNo){
        displayMsg('Number is TOOO High')
    }
}

function displayGuess(guess){
    userInput.value = ''  //clean up user input
    guessSlot.innerHTML += `${guess},  `
    numGuess++;
    remaining.innerHTML = `${11-numGuess}`
}

function displayMsg(msg){
    lowOrHi.innerHTML = msg
}

function endGame(){
    userInput.value = ''
    userInput.setAttribute('disabled', '')  //disabled attribute can't be alone so just give empty space
    p.classList.add('button')
    p.innerHTML = '<h2 id="newGame">Start new Game</h2>'
    startOver.appendChild(p)
    playGame = false
    newGame()
}

function newGame(){
    const newGameButton = document.querySelector('#newGame')
    newGameButton.addEventListener('click', (e) => {
        randomNo = Math.round(Math.random()*100+1);
        prevGuess = []
        numGuess = 1
        guessSlot.innerHTML = ''
        remaining.innerHTML = '10'
        userInput.removeAttribute('disabled', '')
        startOver.removeChild(p)

        playGame = true
    })
}

```