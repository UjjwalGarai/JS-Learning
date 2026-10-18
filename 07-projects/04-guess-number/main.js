
const form = document.querySelector('.form')
const guessNumber = document.querySelector('#guessNumber')
const submit = document.querySelector('input[type="submit"]')
const remaingGuess = document.querySelector('#remaingGuess')
const guessNumbers = document.querySelector('#guessNumbers')
const resultMessage = document.querySelector('#result')
const startAgain = document.querySelector('#startAgain')

let gameStart = true
let preViousNumbers = []

let luckyNumber = Math.floor((Math.random() * 100) + 1)
console.log(luckyNumber);


// console.log(submit)

form.addEventListener('submit', function(e){
    e.preventDefault()
    const validNumber = numberValidation(guessNumber.value)
    // console.log(validNumber)
    if(!validNumber) return

    preViousNumbers.push(validNumber)
    guessNumbers.innerHTML = preViousNumbers
    remaingGuess.innerHTML = 10 - preViousNumbers.length

    

    if(validNumber === luckyNumber){
        resultMessage.innerHTML = `<b>Champion🚩</b>`
        endGame()
        return
    } 

    if (validNumber < luckyNumber){
        resultMessage.innerHTML = `Your Guess number is too low`
    } else if (validNumber > luckyNumber){
        resultMessage.innerHTML = `Your Guess number is too high`
    }if(preViousNumbers.length >= 10){
        resultMessage.innerHTML = `Game Over! The number was ${luckyNumber}.`
        endGame()
        return
    }



    
})

function numberValidation(number){
    const intNumber = parseInt(number)
    if(intNumber < 1 || intNumber > 100 || isNaN(intNumber)){
        guessNumber.innerHTML = ''
        resultMessage.innerHTML = 'Please enter a valid number'
        return null
    }

    return intNumber
    
}

function endGame(){
    guessNumber.value = ''
    guessNumber.setAttribute('disabled', '')
    submit.setAttribute('disabled', '')
    remaingGuess.innerHTML = 'No'
    resultMessage.innerHTML = 'You have reached your maximum chance click Start Again'
    startAgain.innerHTML = 'Start Again'
    

}

startAgain.addEventListener('click', function(e){
        startGame()
    })
    
function startGame(){
    luckyNumber = Math.floor((Math.random() * 100) + 1)
    guessNumber.removeAttribute('disabled')
    submit.removeAttribute('disabled')
    guessNumber.innerHTML = ''
    guessNumbers.innerHTML = ''
    remaingGuess.innerHTML = '10'
    resultMessage.innerHTML = ''
    startAgain.innerHTML = ''
    preViousNumbers = []
}