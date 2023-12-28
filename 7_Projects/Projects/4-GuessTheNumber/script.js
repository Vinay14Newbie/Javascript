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
