# JS-Learning
This repo is for JS learning from chai aur code

### Color Change Project

```javascript
const parent = document.querySelector('.parent-box')
const bodyElement = document.querySelector('body')
parent.addEventListener('click', function(e){
    const targetDivId = e.target.id
    bodyElement.style.backgroundColor = targetDivId
})
```
### BMI Calculator
```javascript



const subBtn = document.querySelector('input[type="button"]')
const resultValue = document.querySelector('#resultValue')
const resultMessage = document.querySelector('#resultMessage')

subBtn.addEventListener('click', function(e){
    e.preventDefault()
    // console.log(e)
    const height = heightValidation(document.querySelector('#height').value)
    const weight = weightValidation(document.querySelector('#weight').value) 
    
    if(!height || !weight) return

    const bmiScore = ((weight / (height * height)) * 10000).toFixed(2)
    let message = ''
    if(bmiScore < 18.5){
        message =  `You are Underweight`
    } else if(bmiScore >= 18.5 && bmiScore < 25){
        message =  `You are Normal weight`
    } else if(bmiScore >= 25 && bmiScore < 30){
        message =  `Overweight`
    }else if(bmiScore >= 30 && bmiScore < 35){
        message =  `You are Obesity `
    } else if (bmiScore >= 35) {
        message =  `You are Severe obesity`
    }

    // console.log(Boolean(bmiScore))
    // console.log(bmiScore)
    if (!isNaN(bmiScore)){
        resultValue.innerHTML = `<h4><b>${bmiScore}</b></h4>`
    }else{
        resultValue.innerHTML = ''
    }
    resultMessage.innerHTML = `<p>${message}</p>`
    document.querySelector('#height').value = ''
    document.querySelector('#weight').value = ''
    
})


function heightValidation(height){
    const heightInt = parseFloat(height)
    if(heightInt < 50 || heightInt > 200 || isNaN(heightInt)){
        alert('Please enter a valid height')
        return
    }else {
        return heightInt
    }
}

function weightValidation(weight){
    const weightInt = parseFloat(weight)
    if(weightInt < 0 || weightInt > 200 || isNaN(weightInt)){
        alert('Please enter a valid weight')
        return
    }else {
        return weightInt
    }
}




```
### Digital Clock
```javascript

const clock = document.querySelector('.clock')
setInterval(function(){
    const timeNow = new Date().toLocaleTimeString()
    clock.innerHTML = timeNow
}, 1000)

```
### Number Guess
```javascript

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
```
### Color Change Project
```javascript

```


